(***********************************************************************)
(*                                                                     *)
(*                                OCaml                                *)
(*                                                                     *)
(*            Xavier Leroy, projet Cristal, INRIA Rocquencourt         *)
(*                                                                     *)
(*  Copyright 1996 Institut National de Recherche en Informatique et   *)
(*  en Automatique.  All rights reserved.  This file is distributed    *)
(*  under the terms of the Q Public License version 1.0.               *)
(*                                                                     *)
(***********************************************************************)

(* Translated to OCaml by Xavier Leroy *)
(* Original code written in SML by ... *)

type bdd = One | Zero | Node of bdd * int * int * bdd

let rec eval bdd vars =
  match bdd with
    Zero -> false
  | One -> true
  | Node(l, v, _, h) ->
      if vars.(v) then eval h vars else eval l vars

let getId bdd =
  match bdd with
    Node(_,_,id,_) -> id
  | Zero           -> 0
  | One            -> 1

module type Empty = sig end

module Build(E:Empty) = struct
  let initSize_1 = 8*1024 - 1
  let nodeC      = ref 1
  let sz_1       = ref initSize_1
  let htab       = ref(Array.make (!sz_1+1) [])
  let n_items    = ref 0
  let hashVal x y v = x lsl 1 + y + v lsl 2

  let resize newSize =
    let arr     = !htab in
    let newSz_1 = newSize-1 in
    let newArr  = Array.make newSize [] in
    let rec copyBucket bucket =
      match bucket with
        []     -> ()
      | n :: ns ->
        match n with
        | Node(l,v,_,h) ->
          let ind = hashVal (getId l) (getId h) v land newSz_1
          in
          newArr.(ind) <- (n :: newArr.(ind));
          copyBucket ns
        | _ -> assert false
    in
    for n = 0 to !sz_1 do
      copyBucket(arr.(n))
    done;
    htab := newArr;
    sz_1 := newSz_1


  let rec insert idl idh v ind bucket newNode =
    if !n_items <= !sz_1
    then ( (!htab).(ind) <- (newNode :: bucket);
           incr n_items )
    else ( resize(!sz_1 + !sz_1 + 2);
           let ind = hashVal idl idh v land (!sz_1)
           in
           (!htab).(ind) <- newNode :: (!htab).(ind)
         )


  let resetUnique () = (
    sz_1    := initSize_1;
    htab    := Array.make (!sz_1+1) [];
    n_items := 0;
    nodeC   := 1
  )

  let mkNode low v high =
    let idl = getId low in
    let idh = getId high
    in
    if idl = idh
    then low
    else let ind      = hashVal idl idh v land  (!sz_1) in
      let bucket   = (!htab).(ind) in
      let rec lookup b =
        match b with
          [] -> let n = Node(low, v, (incr nodeC; !nodeC), high)
          in
          insert (getId low) (getId high) v ind bucket n; n
        | n :: ns ->
          match n with
          | Node(l,v',id,h) ->
            if v = v' && idl = getId l && idh = getId h
            then n else lookup ns
          | _ -> assert false
      in
      lookup bucket


  type ordering = LESS | EQUAL | GREATER

  let cmpVar (x : int) (y : int) =
    if x<y then LESS else if x>y then GREATER else EQUAL

  let zero = Zero
  let one  = One

  let mkVar x   = mkNode zero x one


  let cacheSize = 1999
  let andslot1  = Array.make cacheSize 0
  let andslot2  = Array.make cacheSize 0
  let andslot3  = Array.make cacheSize zero
  let xorslot1  = Array.make cacheSize 0
  let xorslot2  = Array.make cacheSize 0
  let xorslot3  = Array.make cacheSize zero
  let notslot1  = Array.make cacheSize 0
  let notslot2  = Array.make cacheSize one
  let hash x y  = ((x lsl 1)+y) mod cacheSize

  let rec not n =
    match n with
      Zero -> One
    | One  -> Zero
    | Node(l, v, id, r) -> let h = id mod cacheSize
      in
      if id=notslot1.(h) then notslot2.(h)
      else let f = mkNode (not l) v (not r)
        in
        notslot1.(h) <- id; notslot2.(h) <- f; f

  let rec and2 n1 n2 =
    match n1 with
      Node(l1, v1, i1, r1)
      -> (match n2 with
          Node(l2, v2, i2, r2)
          -> let h = hash i1 i2
          in
          if i1=andslot1.(h) && i2=andslot2.(h) then andslot3.(h)
          else let f = match cmpVar v1 v2 with
              EQUAL   -> mkNode (and2 l1 l2) v1 (and2 r1 r2)
            | LESS    -> mkNode (and2 l1 n2) v1 (and2 r1 n2)
            | GREATER -> mkNode (and2 n1 l2) v2 (and2 n1 r2)
            in
            andslot1.(h) <- i1;
            andslot2.(h) <- i2;
            andslot3.(h) <- f;
            f
        | Zero -> Zero
        | One  -> n1)
    |  Zero -> Zero
    |  One  -> n2


  let rec xor n1 n2 =
    match n1 with
      Node(l1, v1, i1, r1)
      -> (match n2 with
          Node(l2, v2, i2, r2)
          -> let h = hash i1 i2
          in
          if i1=andslot1.(h) && i2=andslot2.(h) then andslot3.(h)
          else let f = match cmpVar v1 v2 with
              EQUAL   -> mkNode (xor l1 l2) v1 (xor r1 r2)
            | LESS    -> mkNode (xor l1 n2) v1 (xor r1 n2)
            | GREATER -> mkNode (xor n1 l2) v2 (xor n1 r2)
            in
            andslot1.(h) <- i1;
            andslot2.(h) <- i2;
            andslot3.(h) <- f;
            f
        | Zero -> n1
        | One  -> not n1)
    |  Zero -> n2
    |  One  -> not n2

  let hwb n =
    let rec h i j = if i=j
      then mkVar i
      else  xor (and2 (not(mkVar j)) (h i (j-1)))
          (and2 (mkVar j)      (g i (j-1)))
    and g i j = if i=j
      then mkVar i
      else xor (and2 (not(mkVar i)) (h (i+1) j))
          (and2 (mkVar i)      (g (i+1) j))
    in
    h 0 (n-1)
end

(* Testing *)
open Micro_bench_types

let random_vars n =
  let seed = ref 0 in
  let random() = seed := !seed * 25173 + 17431; !seed land 1 > 0 in
  let vars = Array.make n false in
  for i = 0 to n - 1 do vars.(i) <- random() done;
  vars

let count_true vars =
  let ntrue = ref 0 in
  for i = 0 to Array.length vars - 1 do
    if vars.(i) then incr ntrue
  done;
  !ntrue

let prepare_eval i =
  let vars = random_vars i in
  let ntrue = count_true vars in
  let module Bdd = Build(struct end) in
  let bdd = Bdd.hwb i in
  vars, ntrue, bdd

let run_eval (vars, ntrue, bdd) =
  eval bdd vars

let check_eval n result =
  let (vars, ntrue, bdd) = prepare_eval n in
  if result = (if ntrue > 0 then vars.(ntrue-1) else false)
  then Ok
  else Error ""

let eval_range = [ Range (10, 22), Short ]

let prepare_build i = i

let run_build i =
  let module Bdd = Build(struct end) in
  Bdd.hwb i

let check_build i bdd =
  let vars = random_vars i in
  let ntrue = count_true vars in
  let result = eval bdd vars in
  if result = (if ntrue > 0 then vars.(ntrue-1) else false)
  then Ok
  else Error ""

let build_range =
  [ Range (10, 20), Long ]

(* registration *)

let functions =
  [ "eval", Int (run_eval,
                 prepare_eval,
                 check_eval,
                 eval_range);
    "build", Int (run_build,
                  prepare_build,
                  check_build,
                  build_range);
  ]

let () =
  add functions;
  let config = Micro_bench_run.Config.parse () in
  match config with
  | `Run conf ->
      Fixture.run_n_times 1 (fun () -> Micro_bench_run.run (Micro_bench_types.functions ())
      ~conf:(Some (`Run {conf with Micro_bench_run.Config.number_of_different_values=20})))
  | _ ->
      Micro_bench_run.run (Micro_bench_types.functions ()) ~conf:(Some config)

