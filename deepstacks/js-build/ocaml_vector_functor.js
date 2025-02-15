// Generated by BUCKLESCRIPT VERSION 2.0.0, PLEASE EDIT WITH CARE
'use strict';

var $$Array           = require("bs-platform/lib/js/array.js");
var Block             = require("bs-platform/lib/js/block.js");
var Curry             = require("bs-platform/lib/js/curry.js");
var Fixture           = require("../fixture.js");
var Caml_obj          = require("bs-platform/lib/js/caml_obj.js");
var Pervasives        = require("bs-platform/lib/js/pervasives.js");
var Micro_bench_run   = require("../micro_bench_run.js");
var Micro_bench_types = require("../micro_bench_types.js");

function fold_index(init, f, param) {
  return Curry._3(f, Curry._2(init, /* Fst */0, param[0]), /* Snd */1, param[1]);
}

function fold_index_2(init, f, param, param$1) {
  return Curry._4(f, Curry._3(init, /* Fst */0, param[0], param$1[0]), /* Snd */1, param[1], param$1[1]);
}

function map(f, param) {
  return /* tuple */[
          Curry._2(f, /* Fst */0, param[0]),
          Curry._2(f, /* Snd */1, param[1])
        ];
}

var Vect2 = /* module */[
  /* fold_index */fold_index,
  /* fold_index_2 */fold_index_2,
  /* map */map
];

function fold_index$1(init, f, param) {
  return Curry._3(f, Curry._3(f, Curry._2(init, /* Fst */0, param[0]), /* Snd */1, param[1]), /* Trd */2, param[2]);
}

function fold_index_2$1(init, f, param, param$1) {
  return Curry._4(f, Curry._4(f, Curry._3(init, /* Fst */0, param[0], param$1[0]), /* Snd */1, param[1], param$1[1]), /* Trd */2, param[2], param$1[2]);
}

function map$1(f, param) {
  return /* tuple */[
          Curry._2(f, /* Fst */0, param[0]),
          Curry._2(f, /* Snd */1, param[1]),
          Curry._2(f, /* Trd */2, param[2])
        ];
}

var Vect3 = /* module */[
  /* fold_index */fold_index$1,
  /* fold_index_2 */fold_index_2$1,
  /* map */map$1
];

function fold_index$2(init, f, param) {
  return Curry._3(f, Curry._2(init, /* X */0, param[/* x */0]), /* Y */1, param[/* y */1]);
}

function fold_index_2$2(init, f, v1, v2) {
  return Curry._4(f, Curry._3(init, /* X */0, v1[/* x */0], v2[/* x */0]), /* Y */1, v1[/* y */1], v2[/* y */1]);
}

function map$2(f, param) {
  return /* float array */[
          Curry._2(f, /* X */0, param[/* x */0]),
          Curry._2(f, /* Y */1, param[/* y */1])
        ];
}

var Vect2_record = /* module */[
  /* fold_index */fold_index$2,
  /* fold_index_2 */fold_index_2$2,
  /* map */map$2
];

function fold_index$3(init, f, param) {
  return Curry._3(f, Curry._3(f, Curry._2(init, /* X */0, param[/* x */0]), /* Y */1, param[/* y */1]), /* Z */2, param[/* z */2]);
}

function fold_index_2$3(init, f, v1, v2) {
  return Curry._4(f, Curry._4(f, Curry._3(init, /* X */0, v1[/* x */0], v2[/* x */0]), /* Y */1, v1[/* y */1], v2[/* y */1]), /* Z */2, v1[/* z */2], v2[/* z */2]);
}

function map$3(f, param) {
  return /* float array */[
          Curry._2(f, /* X */0, param[/* x */0]),
          Curry._2(f, /* Y */1, param[/* y */1]),
          Curry._2(f, /* Z */2, param[/* z */2])
        ];
}

var Vect3_record = /* module */[
  /* fold_index */fold_index$3,
  /* fold_index_2 */fold_index_2$3,
  /* map */map$3
];

function fold_index$4(init, f, a) {
  if (!a.length) {
    Pervasives.invalid_arg("fold_index");
  }
  var r = Curry._2(init, 0, a[0]);
  for(var i = 1 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    r = Curry._3(f, r, i, a[i]);
  }
  return r;
}

function fold_index_2$4(init, f, v1, v2) {
  if (v1.length === 0 || v2.length === 0 || v1.length !== v2.length) {
    Pervasives.invalid_arg("fold_index");
  }
  var r = Curry._3(init, 0, v1[0], v2[0]);
  for(var i = 1 ,i_finish = v1.length - 1 | 0; i <= i_finish; ++i){
    r = Curry._4(f, r, i, v1[i], v2[i]);
  }
  return r;
}

var Vect_array = /* module */[
  /* fold_index */fold_index$4,
  /* fold_index_2 */fold_index_2$4,
  /* map */$$Array.mapi
];

function Vector_operations(V) {
  var norm = function (v) {
    return Math.sqrt(Curry._3(V[/* fold_index */0], (function (_, elt) {
                      return elt * elt;
                    }), (function (acc, _, elt) {
                      return acc + elt * elt;
                    }), v));
  };
  var scale = function (s, v) {
    return Curry._2(V[/* map */2], (function (_, x) {
                  return x * s;
                }), v);
  };
  var dot = function (v1, v2) {
    return Curry._4(V[/* fold_index_2 */1], (function (_, f1, f2) {
                  return f1 * f2;
                }), (function (acc, _, f1, f2) {
                  return acc + f1 * f2;
                }), v1, v2);
  };
  var are_orthogonal = function (v1, v2) {
    return +(dot(v1, v2) === 0);
  };
  return /* module */[
          /* norm */norm,
          /* scale */scale,
          /* dot */dot,
          /* are_orthogonal */are_orthogonal
        ];
}

var Vect_abstr = /* module */[
  /* Vect2 */Vect2,
  /* Vect3 */Vect3,
  /* Vect2_record */Vect2_record,
  /* Vect3_record */Vect3_record,
  /* Vect_array */Vect_array,
  /* Vector_operations */Vector_operations
];

function norm(v) {
  return Math.sqrt(fold_index((function (_, elt) {
                    return elt * elt;
                  }), (function (acc, _, elt) {
                    return acc + elt * elt;
                  }), v));
}

function scale(s, v) {
  return map((function (_, x) {
                return x * s;
              }), v);
}

function dot(v1, v2) {
  return fold_index_2((function (_, f1, f2) {
                return f1 * f2;
              }), (function (acc, _, f1, f2) {
                return acc + f1 * f2;
              }), v1, v2);
}

function are_orthogonal(v1, v2) {
  return +(dot(v1, v2) === 0);
}

var IV2 = /* module */[
  /* norm */norm,
  /* scale */scale,
  /* dot */dot,
  /* are_orthogonal */are_orthogonal
];

function norm$1(v) {
  return Math.sqrt(fold_index$1((function (_, elt) {
                    return elt * elt;
                  }), (function (acc, _, elt) {
                    return acc + elt * elt;
                  }), v));
}

function scale$1(s, v) {
  return map$1((function (_, x) {
                return x * s;
              }), v);
}

function dot$1(v1, v2) {
  return fold_index_2$1((function (_, f1, f2) {
                return f1 * f2;
              }), (function (acc, _, f1, f2) {
                return acc + f1 * f2;
              }), v1, v2);
}

function are_orthogonal$1(v1, v2) {
  return +(dot$1(v1, v2) === 0);
}

var IV3 = /* module */[
  /* norm */norm$1,
  /* scale */scale$1,
  /* dot */dot$1,
  /* are_orthogonal */are_orthogonal$1
];

function norm$2(v) {
  return Math.sqrt(fold_index$2((function (_, elt) {
                    return elt * elt;
                  }), (function (acc, _, elt) {
                    return acc + elt * elt;
                  }), v));
}

function scale$2(s, v) {
  return map$2((function (_, x) {
                return x * s;
              }), v);
}

function dot$2(v1, v2) {
  return fold_index_2$2((function (_, f1, f2) {
                return f1 * f2;
              }), (function (acc, _, f1, f2) {
                return acc + f1 * f2;
              }), v1, v2);
}

function are_orthogonal$2(v1, v2) {
  return +(dot$2(v1, v2) === 0);
}

var IV2R = /* module */[
  /* norm */norm$2,
  /* scale */scale$2,
  /* dot */dot$2,
  /* are_orthogonal */are_orthogonal$2
];

function norm$3(v) {
  return Math.sqrt(fold_index$3((function (_, elt) {
                    return elt * elt;
                  }), (function (acc, _, elt) {
                    return acc + elt * elt;
                  }), v));
}

function scale$3(s, v) {
  return map$3((function (_, x) {
                return x * s;
              }), v);
}

function dot$3(v1, v2) {
  return fold_index_2$3((function (_, f1, f2) {
                return f1 * f2;
              }), (function (acc, _, f1, f2) {
                return acc + f1 * f2;
              }), v1, v2);
}

function are_orthogonal$3(v1, v2) {
  return +(dot$3(v1, v2) === 0);
}

var IV3R = /* module */[
  /* norm */norm$3,
  /* scale */scale$3,
  /* dot */dot$3,
  /* are_orthogonal */are_orthogonal$3
];

function norm$4(v) {
  return Math.sqrt(fold_index$4((function (_, elt) {
                    return elt * elt;
                  }), (function (acc, _, elt) {
                    return acc + elt * elt;
                  }), v));
}

function scale$4(s, v) {
  return $$Array.mapi((function (_, x) {
                return x * s;
              }), v);
}

function dot$4(v1, v2) {
  return fold_index_2$4((function (_, f1, f2) {
                return f1 * f2;
              }), (function (acc, _, f1, f2) {
                return acc + f1 * f2;
              }), v1, v2);
}

function are_orthogonal$4(v1, v2) {
  return +(dot$4(v1, v2) === 0);
}

var IVA = /* module */[
  /* norm */norm$4,
  /* scale */scale$4,
  /* dot */dot$4,
  /* are_orthogonal */are_orthogonal$4
];

function norm$5(param) {
  var y = param[/* y */1];
  var x = param[/* x */0];
  return Math.sqrt(x * x + y * y);
}

function scale$5(s, param) {
  return /* float array */[
          param[/* x */0] * s,
          param[/* y */1] * s
        ];
}

function dot$5(v1, v2) {
  return v1[/* x */0] * v2[/* x */0] + v1[/* y */1] * v2[/* y */1];
}

function are_orthogonal$5(v1, v2) {
  return +(dot$5(v1, v2) === 0);
}

var VR2 = /* module */[
  /* norm */norm$5,
  /* scale */scale$5,
  /* dot */dot$5,
  /* are_orthogonal */are_orthogonal$5
];

var Vect_instantiation = /* module */[
  /* IV2 */IV2,
  /* IV3 */IV3,
  /* IV2R */IV2R,
  /* IV3R */IV3R,
  /* IVA */IVA,
  /* VR2 */VR2
];

function $eq$bang$eq(a, b) {
  if (Caml_obj.caml_equal(a, b)) {
    return /* Ok */0;
  } else {
    return /* Error */[""];
  }
}

Micro_bench_types.add(/* :: */[
      /* tuple */[
        "vec2 record dot product",
        /* Int_group */Block.__(3, [/* tuple */[
              /* :: */[
                /* tuple */[
                  "functor",
                  (function (x) {
                      return dot$2(x, x);
                    })
                ],
                /* :: */[
                  /* tuple */[
                    "direct",
                    (function (x) {
                        return dot$5(x, x);
                      })
                  ],
                  /* [] */0
                ]
              ],
              (function (i) {
                  return /* float array */[
                          i,
                          i + 1 | 0
                        ];
                }),
              (function (i, res) {
                  return $eq$bang$eq(i * i + (i + 1 | 0) * (i + 1 | 0), res);
                }),
              /* :: */[
                /* tuple */[
                  /* Any */0,
                  /* Short */0
                ],
                /* [] */0
              ]
            ]])
      ],
      /* :: */[
        /* tuple */[
          "vec2 tuple dot product",
          /* Int */Block.__(1, [/* tuple */[
                (function (x) {
                    return dot(x, x);
                  }),
                (function (i) {
                    return /* tuple */[
                            i,
                            i + 1 | 0
                          ];
                  }),
                (function (i, res) {
                    return $eq$bang$eq(i * i + (i + 1 | 0) * (i + 1 | 0), res);
                  }),
                /* :: */[
                  /* tuple */[
                    /* Any */0,
                    /* Short */0
                  ],
                  /* [] */0
                ]
              ]])
        ],
        /* :: */[
          /* tuple */[
            "vec3 tuple dot product",
            /* Int */Block.__(1, [/* tuple */[
                  (function (x) {
                      return dot$1(x, x);
                    }),
                  (function (i) {
                      return /* tuple */[
                              i,
                              i + 1 | 0,
                              i + 2 | 0
                            ];
                    }),
                  (function (i, res) {
                      return $eq$bang$eq(i * i + (i + 1 | 0) * (i + 1 | 0) + (i + 2 | 0) * (i + 2 | 0), res);
                    }),
                  /* :: */[
                    /* tuple */[
                      /* Any */0,
                      /* Short */0
                    ],
                    /* [] */0
                  ]
                ]])
          ],
          /* :: */[
            /* tuple */[
              "vec3 record dot product",
              /* Int */Block.__(1, [/* tuple */[
                    (function (x) {
                        return dot$3(x, x);
                      }),
                    (function (i) {
                        return /* float array */[
                                i,
                                i + 1 | 0,
                                i + 2 | 0
                              ];
                      }),
                    (function (i, res) {
                        return $eq$bang$eq(i * i + (i + 1 | 0) * (i + 1 | 0) + (i + 2 | 0) * (i + 2 | 0), res);
                      }),
                    /* :: */[
                      /* tuple */[
                        /* Any */0,
                        /* Short */0
                      ],
                      /* [] */0
                    ]
                  ]])
            ],
            /* :: */[
              /* tuple */[
                "nothing",
                /* Int */Block.__(1, [/* tuple */[
                      (function () {
                          return /* () */0;
                        }),
                      (function () {
                          return /* () */0;
                        }),
                      (function (_, _$1) {
                          return /* Ok */0;
                        }),
                      /* :: */[
                        /* tuple */[
                          /* Any */0,
                          /* Short */0
                        ],
                        /* [] */0
                      ]
                    ]])
              ],
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var config = Micro_bench_run.Config[/* parse */1](/* () */0);

if (typeof config === "number") {
  Micro_bench_run.run(/* Some */[/* Some */[config]], Micro_bench_types.functions(/* () */0));
} else if (config[0] !== 4103979) {
  Micro_bench_run.run(/* Some */[/* Some */[config]], Micro_bench_types.functions(/* () */0));
} else {
  var conf = config[1];
  Fixture.run_n_times(1, (function () {
          var newrecord = conf.slice();
          return Micro_bench_run.run(/* Some */[/* Some */[/* `Run */[
                          4103979,
                          (newrecord[/* number_of_different_values */5] = 5000, newrecord)
                        ]]], Micro_bench_types.functions(/* () */0));
        }));
}

exports.Vect_abstr         = Vect_abstr;
exports.Vect_instantiation = Vect_instantiation;
exports.$eq$bang$eq        = $eq$bang$eq;
/*  Not a pure module */
