module Lens_util = struct
(*
   Copyright (c) 2011-2012 Alessandro Strada

   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   SOFTWARE.
*)

let (|-) f g x = g (f x)

type ('a, 'b) t = {
  get : 'a -> 'b;
  set : 'b -> 'a -> 'a
}

let modify l f a =
  let value = l.get a in
  let new_value = f value in
  l.set new_value a

let _get a l = l.get a

let _set v a l = l.set v a

let _modify f l = modify l f

let compose l1 l2 = {
  get = l2.get |- l1.get;
  set = l1.set |- modify l2
}

let pair l1 l2 = {
  get = (fun (a, b) -> (l1.get a, l2.get b));
  set = (fun (a, c) (b, d) -> (l1.set a b, l2.set c d))
}

let pair3 l1 l2 l3 = {
  get = (fun (a, b, c) -> (l1.get a, l2.get b, l3.get c));
  set = (fun (a, c, e) (b, d, f) -> (l1.set a b, l2.set c d, l3.set e f))
}

let cond pred lt lf =
  let choose a = if pred a then lt else lf in
  { get = (fun a -> choose a |> _get a);
    set = (fun b a -> choose a |> _set b a)
  }

let id = {
  get = (fun a -> a);
  set = (fun b a -> b)
}

let first = {
  get = fst;
  set = (fun v a -> v, snd a)
}

let second = {
  get = snd;
  set = (fun v a -> fst a, v)
}

let list_map l = {
  get = List.map l.get;
  set = List.map2 l.set
}

let xmap f g l = {
  get = l.get |- f;
  set = g |- l.set
}

module Infix =
struct
  let (|.) = _get

  let (^=) l v = fun a -> _set v a l

  let (^%=) = modify

  let (|--) l1 l2 = compose l2 l1

  let (--|) = compose

  let ( *** ) l1 l2 = pair l1 l2

  let (+=) l v = _modify ((+) v) l

  let (-=) l v = _modify ((-) v) l

end

end

open Lens_util
open Lens_util.Infix

type point = {
  x : int;
  y : int;
}

type rect = {
  p1 : point;
  p2 : point;
}

let x = {
  get = (fun {x} -> x);
  set = (fun x {y} -> {x;y})
}

let y = {
  get = (fun {y} -> y);
  set = (fun y {x} -> {x;y})
}

let p1 = {
  get = (fun {p1} -> p1);
  set = (fun p1 {p2} -> {p1;p2})
}

let p2 = {
  get = (fun {p2} -> p2);
  set = (fun p2 {p1} -> {p1;p2})
}

let lens_rect_area r =
  abs (((r |. (p1 |-- x)) - (r |. (p2 |-- x)))
       * ((r |. (p1 |-- y)) - (r |. (p2 |-- y))))

let direct_rect_area r =
  abs ((r.p1.x - r.p2.x) * (r.p1.y - r.p2.y))

open Micro_bench_types

(* We prepare to avoid potential constant propagation here *)
let prepare i =
  let p1 = { x = 1111 + i; y = 2222 + i } in
  let p2 = { x = 3333 + i; y = 4444 + i } in
  let r = { p1; p2 } in
  r

let check_rect_area n res =
  let r = prepare n in
  let s = abs ((r.p1.x - r.p2.x) * (r.p1.y - r.p2.y)) in
  if s = res
  then Ok
  else Error "rect_area"

let range = [ Any, Short ]

let rect_area_group =
  Int_group
    (["lens", lens_rect_area;
      "baseline", direct_rect_area],
     prepare,
     check_rect_area,
     range)

let functions =
  [ "rect_area", rect_area_group;
  ]

let () =
  add functions;
  let config = Micro_bench_run.Config.parse () in
  match config with
  | `Run conf ->
      Fixture.run_n_times 10 (fun () -> Micro_bench_run.run (Micro_bench_types.functions ())
      ~conf:(Some (`Run {conf with Micro_bench_run.Config.number_of_different_values=1000})))
  | _ ->
      Micro_bench_run.run (Micro_bench_types.functions ()) ~conf:(Some config)
