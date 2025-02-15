// The Computer Language Benchmarks Game
// http://benchmarksgame.alioth.debian.org/
//
// contributed by Jos Hirth
// based on the JavaScript version by Ian Osgood with modifications by Isaac Gouy

// Modified by Rachit Nigam on 10.04.2017

import 'dart:math' as Math;
import 'dart:typed_data';
import 'common/BenchmarkBase.dart';

main() {
  new SpectralNorm().report();
}

class SpectralNorm extends BenchmarkBase {
  const SpectralNorm(): super('SpectralNorm');

  void run() {
    int n = 5500;
    spectralNorm(n).toStringAsFixed(9);
  }

  void exercise() {
    run();
  }

  void main() {
    run();
  }
}

double A(int i, int j) {
  int div = ((i + j) * (i + j + 1) >> 1) + i + 1;
  return 1.0 / div;
}

void Au(Float64List u, Float64List w) {
  int len = u.length;
  for (int i = 0; i < len; ++i) {
    double t = 0.0;
    for (int j = 0; j < len; ++j) {
      t += A(i, j) * u[j];
    }
    w[i] = t;
  }
}

void Atu(Float64List w, Float64List v) {
  int len = w.length;
  for (int i = 0; i < len; ++i) {
    double t = 0.0;
    for (int j = 0; j < len; ++j) {
      t += A(j, i) * w[j];
    }
    v[i] = t;
  }
}

void AtAu(Float64List u, Float64List v, Float64List w) {
  Au(u, w);
  Atu(w, v);
}

double spectralNorm(n) {
  var u = new Float64List(n)..fillRange(0, n, 1.0),
  v = new Float64List(n),
  w = new Float64List(n),
  vv = 0.0,
  vBv = 0.0;

  for (int i = 0; i < 10; ++i) {
    AtAu(u, v, w);
    AtAu(v, u, w);
  }
  for (int i = 0; i < n; ++i) {
    vBv += u[i] * v[i];
    vv  += v[i] * v[i];
  }
  return Math.sqrt(vBv / vv);
}
