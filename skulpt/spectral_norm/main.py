# -*- coding: utf-8 -*-
# The Computer Language Benchmarks Game
# http://shootout.alioth.debian.org/
# Contributed by Sebastien Loisel
# Fixed by Isaac Gouy
# Sped up by Josh Goldfoot
# Dirtily sped up by Simon Descarpentries
# Concurrency by Jason Stitt

from math            import sqrt
import time

def eval_A (i, j):
    return 1.0 / ((i + j) * (i + j + 1) / 2 + i + 1)

def eval_A_times_u (u):
    args = ((i,u) for i in range(len(u)))
    return list(map(part_A_times_u, args))

def eval_At_times_u (u):
    args = ((i,u) for i in range(len(u)))
    return list(map(part_At_times_u, args))

def eval_AtA_times_u (u):
    return eval_At_times_u (eval_A_times_u (u))

def part_A_times_u(xxx_todo_changeme):
    (i,u) = xxx_todo_changeme
    partial_sum = 0
    for j, u_j in enumerate(u):
        partial_sum += eval_A (i, j) * u_j
    return partial_sum

def part_At_times_u(xxx_todo_changeme1):
    (i,u) = xxx_todo_changeme1
    partial_sum = 0
    for j, u_j in enumerate(u):
        partial_sum += eval_A (j, i) * u_j
    return partial_sum

DEFAULT_N = 130

def main(n):
    times = []
    for i in range(n):
        t0 = time.time()
        u = [1] * DEFAULT_N

        for dummy in range (10):
            v = eval_AtA_times_u (u)
            u = eval_AtA_times_u (v)

        vBv = vv = 0

        for ue, ve in zip (u, v):
            vBv += ue * ve
            vv  += ve * ve
        tk = time.time()
        times.append(tk - t0)
    return times

main(1)
