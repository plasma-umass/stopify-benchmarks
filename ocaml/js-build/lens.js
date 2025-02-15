/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var out_of_memory = /* tuple */[
  "Out_of_memory",
  0
];

var sys_error = /* tuple */[
  "Sys_error",
  -1
];

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var end_of_file = /* tuple */[
  "End_of_file",
  -4
];

var division_by_zero = /* tuple */[
  "Division_by_zero",
  -5
];

var not_found = /* tuple */[
  "Not_found",
  -6
];

var match_failure = /* tuple */[
  "Match_failure",
  -7
];

var stack_overflow = /* tuple */[
  "Stack_overflow",
  -8
];

var sys_blocked_io = /* tuple */[
  "Sys_blocked_io",
  -9
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

var undefined_recursive_module = /* tuple */[
  "Undefined_recursive_module",
  -11
];

out_of_memory.tag = 248;

sys_error.tag = 248;

failure.tag = 248;

invalid_argument.tag = 248;

end_of_file.tag = 248;

division_by_zero.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

stack_overflow.tag = 248;

sys_blocked_io.tag = 248;

assert_failure.tag = 248;

undefined_recursive_module.tag = 248;

exports.out_of_memory              = out_of_memory;
exports.sys_error                  = sys_error;
exports.failure                    = failure;
exports.invalid_argument           = invalid_argument;
exports.end_of_file                = end_of_file;
exports.division_by_zero           = division_by_zero;
exports.not_found                  = not_found;
exports.match_failure              = match_failure;
exports.stack_overflow             = stack_overflow;
exports.sys_blocked_io             = sys_blocked_io;
exports.assert_failure             = assert_failure;
exports.undefined_recursive_module = undefined_recursive_module;
/*  Not a pure module */


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_array = __webpack_require__(8);

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var arity = f.length;
    var arity$1 = arity ? arity : 1;
    var len = args.length;
    var d = arity$1 - len | 0;
    if (d) {
      if (d < 0) {
        _args = Caml_array.caml_array_sub(args, arity$1, -d | 0);
        _f = f.apply(null, Caml_array.caml_array_sub(args, 0, arity$1));
        continue ;
        
      } else {
        return (function(f,args){
        return function (x) {
          return app(f, args.concat(/* array */[x]));
        }
        }(f,args));
      }
    } else {
      return f.apply(null, args);
    }
  };
}

function curry_1(o, a0, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return o(a0);
      case 2 : 
          return (function (param) {
              return o(a0, param);
            });
      case 3 : 
          return (function (param, param$1) {
              return o(a0, param, param$1);
            });
      case 4 : 
          return (function (param, param$1, param$2) {
              return o(a0, param, param$1, param$2);
            });
      case 5 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, param, param$1, param$2, param$3);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, param, param$1, param$2, param$3, param$4);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4, param$5) {
              return o(a0, param, param$1, param$2, param$3, param$4, param$5);
            });
      
    }
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function __1(o) {
  var arity = o.length;
  if (arity === 1) {
    return o;
  } else {
    return (function (a0) {
        return _1(o, a0);
      });
  }
}

function curry_2(o, a0, a1, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return app(o(a0), /* array */[a1]);
      case 2 : 
          return o(a0, a1);
      case 3 : 
          return (function (param) {
              return o(a0, a1, param);
            });
      case 4 : 
          return (function (param, param$1) {
              return o(a0, a1, param, param$1);
            });
      case 5 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, param, param$1, param$2);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, param, param$1, param$2, param$3);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, a1, param, param$1, param$2, param$3, param$4);
            });
      
    }
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function __2(o) {
  var arity = o.length;
  if (arity === 2) {
    return o;
  } else {
    return (function (a0, a1) {
        return _2(o, a0, a1);
      });
  }
}

function curry_3(o, a0, a1, a2, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[a2]);
      case 3 : 
          return o(a0, a1, a2);
      case 4 : 
          return (function (param) {
              return o(a0, a1, a2, param);
            });
      case 5 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, param, param$1);
            });
      case 6 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, param, param$1, param$2);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, a2, param, param$1, param$2, param$3);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2
              ]);
  }
  
}

function _3(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    return curry_3(o, a0, a1, a2, arity);
  }
}

function __3(o) {
  var arity = o.length;
  if (arity === 3) {
    return o;
  } else {
    return (function (a0, a1, a2) {
        return _3(o, a0, a1, a2);
      });
  }
}

function curry_4(o, a0, a1, a2, a3, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[a3]);
      case 4 : 
          return o(a0, a1, a2, a3);
      case 5 : 
          return (function (param) {
              return o(a0, a1, a2, a3, param);
            });
      case 6 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, param, param$1);
            });
      case 7 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, a3, param, param$1, param$2);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3
              ]);
  }
  
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    return curry_4(o, a0, a1, a2, a3, arity);
  }
}

function __4(o) {
  var arity = o.length;
  if (arity === 4) {
    return o;
  } else {
    return (function (a0, a1, a2, a3) {
        return _4(o, a0, a1, a2, a3);
      });
  }
}

function curry_5(o, a0, a1, a2, a3, a4, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[a4]);
      case 5 : 
          return o(a0, a1, a2, a3, a4);
      case 6 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, param);
            });
      case 7 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, a4, param, param$1);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4
              ]);
  }
  
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;
  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    return curry_5(o, a0, a1, a2, a3, a4, arity);
  }
}

function __5(o) {
  var arity = o.length;
  if (arity === 5) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4) {
        return _5(o, a0, a1, a2, a3, a4);
      });
  }
}

function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[a5]);
      case 6 : 
          return o(a0, a1, a2, a3, a4, a5);
      case 7 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, a5, param);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  }
  
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;
  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
  }
}

function __6(o) {
  var arity = o.length;
  if (arity === 6) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5) {
        return _6(o, a0, a1, a2, a3, a4, a5);
      });
  }
}

function curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);
      case 7 : 
          return o(a0, a1, a2, a3, a4, a5, a6);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  }
  
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;
  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);
  }
}

function __7(o) {
  var arity = o.length;
  if (arity === 7) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6) {
        return _7(o, a0, a1, a2, a3, a4, a5, a6);
      });
  }
}

function curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6,
                      a7
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[
                      a6,
                      a7
                    ]);
      case 7 : 
          return app(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  }
  
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;
  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
  }
}

function __8(o) {
  var arity = o.length;
  if (arity === 8) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
      });
  }
}

exports.app     = app;
exports.curry_1 = curry_1;
exports._1      = _1;
exports.__1     = __1;
exports.curry_2 = curry_2;
exports._2      = _2;
exports.__2     = __2;
exports.curry_3 = curry_3;
exports._3      = _3;
exports.__3     = __3;
exports.curry_4 = curry_4;
exports._4      = _4;
exports.__4     = __4;
exports.curry_5 = curry_5;
exports._5      = _5;
exports.__5     = __5;
exports.curry_6 = curry_6;
exports._6      = _6;
exports.__6     = __6;
exports.curry_7 = curry_7;
exports._7      = _7;
exports.__7     = __7;
exports.curry_8 = curry_8;
exports._8      = _8;
exports.__8     = __8;
/* No side effect */


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Curry                    = __webpack_require__(1);
var Caml_io                  = __webpack_require__(14);
var Caml_obj                 = __webpack_require__(4);
var Caml_sys                 = __webpack_require__(15);
var Caml_format              = __webpack_require__(16);
var Caml_string              = __webpack_require__(3);
var Caml_exceptions          = __webpack_require__(9);
var Caml_missing_polyfill    = __webpack_require__(17);
var Caml_builtin_exceptions  = __webpack_require__(0);
var CamlinternalFormatBasics = __webpack_require__(21);

function failwith(s) {
  throw [
        Caml_builtin_exceptions.failure,
        s
      ];
}

function invalid_arg(s) {
  throw [
        Caml_builtin_exceptions.invalid_argument,
        s
      ];
}

var Exit = Caml_exceptions.create("Pervasives.Exit");

function min(x, y) {
  if (Caml_obj.caml_lessequal(x, y)) {
    return x;
  } else {
    return y;
  }
}

function max(x, y) {
  if (Caml_obj.caml_greaterequal(x, y)) {
    return x;
  } else {
    return y;
  }
}

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x | 0;
  }
}

function lnot(x) {
  return x ^ -1;
}

var min_int = -2147483648;

function $caret(a, b) {
  return a + b;
}

function char_of_int(n) {
  if (n < 0 || n > 255) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "char_of_int"
        ];
  } else {
    return n;
  }
}

function string_of_bool(b) {
  if (b) {
    return "true";
  } else {
    return "false";
  }
}

function bool_of_string(param) {
  switch (param) {
    case "false" : 
        return /* false */0;
    case "true" : 
        return /* true */1;
    default:
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "bool_of_string"
          ];
  }
}

function string_of_int(param) {
  return "" + param;
}

function valid_float_lexem(s) {
  var l = s.length;
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= l) {
      return $caret(s, ".");
    } else {
      var match = Caml_string.get(s, i);
      if (match >= 48) {
        if (match >= 58) {
          return s;
        } else {
          _i = i + 1 | 0;
          continue ;
          
        }
      } else if (match !== 45) {
        return s;
      } else {
        _i = i + 1 | 0;
        continue ;
        
      }
    }
  };
}

function string_of_float(f) {
  return valid_float_lexem(Caml_format.caml_format_float("%.12g", f));
}

function $at(l1, l2) {
  if (l1) {
    return /* :: */[
            l1[0],
            $at(l1[1], l2)
          ];
  } else {
    return l2;
  }
}

var stdin = Caml_io.stdin;

var stdout = Caml_io.stdout;

var stderr = Caml_io.stderr;

function open_out_gen(_, _$1, _$2) {
  return Caml_io.caml_ml_open_descriptor_out(Caml_missing_polyfill.not_implemented("caml_sys_open not implemented by bucklescript yet\n"));
}

function open_out(name) {
  return open_out_gen(/* :: */[
              /* Open_wronly */1,
              /* :: */[
                /* Open_creat */3,
                /* :: */[
                  /* Open_trunc */4,
                  /* :: */[
                    /* Open_text */7,
                    /* [] */0
                  ]
                ]
              ]
            ], 438, name);
}

function open_out_bin(name) {
  return open_out_gen(/* :: */[
              /* Open_wronly */1,
              /* :: */[
                /* Open_creat */3,
                /* :: */[
                  /* Open_trunc */4,
                  /* :: */[
                    /* Open_binary */6,
                    /* [] */0
                  ]
                ]
              ]
            ], 438, name);
}

function flush_all() {
  var _param = Caml_io.caml_ml_out_channels_list(/* () */0);
  while(true) {
    var param = _param;
    if (param) {
      try {
        Caml_io.caml_ml_flush(param[0]);
      }
      catch (exn){
        
      }
      _param = param[1];
      continue ;
      
    } else {
      return /* () */0;
    }
  };
}

function output_bytes(oc, s) {
  return Caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output_string(oc, s) {
  return Caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "output"
        ];
  } else {
    return Caml_io.caml_ml_output(oc, s, ofs, len);
  }
}

function output_substring(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "output_substring"
        ];
  } else {
    return Caml_io.caml_ml_output(oc, s, ofs, len);
  }
}

function output_value(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_output_value not implemented by bucklescript yet\n");
}

function close_out(oc) {
  Caml_io.caml_ml_flush(oc);
  return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
}

function close_out_noerr(oc) {
  try {
    Caml_io.caml_ml_flush(oc);
  }
  catch (exn){
    
  }
  try {
    return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
  }
  catch (exn$1){
    return /* () */0;
  }
}

function open_in_gen(_, _$1, _$2) {
  return Caml_io.caml_ml_open_descriptor_in(Caml_missing_polyfill.not_implemented("caml_sys_open not implemented by bucklescript yet\n"));
}

function open_in(name) {
  return open_in_gen(/* :: */[
              /* Open_rdonly */0,
              /* :: */[
                /* Open_text */7,
                /* [] */0
              ]
            ], 0, name);
}

function open_in_bin(name) {
  return open_in_gen(/* :: */[
              /* Open_rdonly */0,
              /* :: */[
                /* Open_binary */6,
                /* [] */0
              ]
            ], 0, name);
}

function input(_, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "input"
        ];
  } else {
    return Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
  }
}

function unsafe_really_input(_, _$1, _ofs, _len) {
  while(true) {
    var len = _len;
    var ofs = _ofs;
    if (len <= 0) {
      return /* () */0;
    } else {
      var r = Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
      if (r) {
        _len = len - r | 0;
        _ofs = ofs + r | 0;
        continue ;
        
      } else {
        throw Caml_builtin_exceptions.end_of_file;
      }
    }
  };
}

function really_input(ic, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "really_input"
        ];
  } else {
    return unsafe_really_input(ic, s, ofs, len);
  }
}

function really_input_string(ic, len) {
  var s = Caml_string.caml_create_string(len);
  really_input(ic, s, 0, len);
  return Caml_string.bytes_to_string(s);
}

function input_line(chan) {
  var build_result = function (buf, _pos, _param) {
    while(true) {
      var param = _param;
      var pos = _pos;
      if (param) {
        var hd = param[0];
        var len = hd.length;
        Caml_string.caml_blit_bytes(hd, 0, buf, pos - len | 0, len);
        _param = param[1];
        _pos = pos - len | 0;
        continue ;
        
      } else {
        return buf;
      }
    };
  };
  var scan = function (_accu, _len) {
    while(true) {
      var len = _len;
      var accu = _accu;
      var n = Caml_missing_polyfill.not_implemented("caml_ml_input_scan_line not implemented by bucklescript yet\n");
      if (n) {
        if (n > 0) {
          var res = Caml_string.caml_create_string(n - 1 | 0);
          Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
          Caml_io.caml_ml_input_char(chan);
          if (accu) {
            var len$1 = (len + n | 0) - 1 | 0;
            return build_result(Caml_string.caml_create_string(len$1), len$1, /* :: */[
                        res,
                        accu
                      ]);
          } else {
            return res;
          }
        } else {
          var beg = Caml_string.caml_create_string(-n | 0);
          Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
          _len = len - n | 0;
          _accu = /* :: */[
            beg,
            accu
          ];
          continue ;
          
        }
      } else if (accu) {
        return build_result(Caml_string.caml_create_string(len), len, accu);
      } else {
        throw Caml_builtin_exceptions.end_of_file;
      }
    };
  };
  return Caml_string.bytes_to_string(scan(/* [] */0, 0));
}

function close_in_noerr() {
  try {
    return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
  }
  catch (exn){
    return /* () */0;
  }
}

function print_char(c) {
  return Caml_io.caml_ml_output_char(stdout, c);
}

function print_string(s) {
  return output_string(stdout, s);
}

function print_bytes(s) {
  return output_bytes(stdout, s);
}

function print_int(i) {
  return output_string(stdout, "" + i);
}

function print_float(f) {
  return output_string(stdout, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
}

function print_endline(param) {
  console.log(param);
  return 0;
}

function print_newline() {
  Caml_io.caml_ml_output_char(stdout, /* "\n" */10);
  return Caml_io.caml_ml_flush(stdout);
}

function prerr_char(c) {
  return Caml_io.caml_ml_output_char(stderr, c);
}

function prerr_string(s) {
  return output_string(stderr, s);
}

function prerr_bytes(s) {
  return output_bytes(stderr, s);
}

function prerr_int(i) {
  return output_string(stderr, "" + i);
}

function prerr_float(f) {
  return output_string(stderr, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
}

function prerr_endline(param) {
  console.error(param);
  return 0;
}

function prerr_newline() {
  Caml_io.caml_ml_output_char(stderr, /* "\n" */10);
  return Caml_io.caml_ml_flush(stderr);
}

function read_line() {
  Caml_io.caml_ml_flush(stdout);
  return input_line(stdin);
}

function read_int() {
  return Caml_format.caml_int_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
}

function read_float() {
  return Caml_format.caml_float_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
}

function string_of_format(param) {
  return param[1];
}

function $caret$caret(param, param$1) {
  return /* Format */[
          CamlinternalFormatBasics.concat_fmt(param[0], param$1[0]),
          $caret(param[1], $caret("%,", param$1[1]))
        ];
}

var exit_function = [flush_all];

function at_exit(f) {
  var g = exit_function[0];
  exit_function[0] = (function () {
      Curry._1(f, /* () */0);
      return Curry._1(g, /* () */0);
    });
  return /* () */0;
}

function do_at_exit() {
  return Curry._1(exit_function[0], /* () */0);
}

function exit(retcode) {
  do_at_exit(/* () */0);
  return Caml_sys.caml_sys_exit(retcode);
}

var max_int = 2147483647;

var infinity = Infinity;

var neg_infinity = -Infinity;

var nan = NaN;

var max_float = Number.MAX_VALUE;

var min_float = Number.MIN_VALUE;

var epsilon_float = 2.220446049250313e-16;

var flush = Caml_io.caml_ml_flush;

var output_char = Caml_io.caml_ml_output_char;

var output_byte = Caml_io.caml_ml_output_char;

function output_binary_int(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_output_int not implemented by bucklescript yet\n");
}

function seek_out(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_out not implemented by bucklescript yet\n");
}

function pos_out() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_out not implemented by bucklescript yet\n");
}

function out_channel_length() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size not implemented by bucklescript yet\n");
}

function set_binary_mode_out(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode not implemented by bucklescript yet\n");
}

var input_char = Caml_io.caml_ml_input_char;

var input_byte = Caml_io.caml_ml_input_char;

function input_binary_int() {
  return Caml_missing_polyfill.not_implemented("caml_ml_input_int not implemented by bucklescript yet\n");
}

function input_value() {
  return Caml_missing_polyfill.not_implemented("caml_input_value not implemented by bucklescript yet\n");
}

function seek_in(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_in not implemented by bucklescript yet\n");
}

function pos_in() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_in not implemented by bucklescript yet\n");
}

function in_channel_length() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size not implemented by bucklescript yet\n");
}

function close_in() {
  return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
}

function set_binary_mode_in(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode not implemented by bucklescript yet\n");
}

function LargeFile_000(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_out_64 not implemented by bucklescript yet\n");
}

function LargeFile_001() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_out_64 not implemented by bucklescript yet\n");
}

function LargeFile_002() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size_64 not implemented by bucklescript yet\n");
}

function LargeFile_003(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_in_64 not implemented by bucklescript yet\n");
}

function LargeFile_004() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_in_64 not implemented by bucklescript yet\n");
}

function LargeFile_005() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size_64 not implemented by bucklescript yet\n");
}

var LargeFile = [
  LargeFile_000,
  LargeFile_001,
  LargeFile_002,
  LargeFile_003,
  LargeFile_004,
  LargeFile_005
];

exports.invalid_arg         = invalid_arg;
exports.failwith            = failwith;
exports.Exit                = Exit;
exports.min                 = min;
exports.max                 = max;
exports.abs                 = abs;
exports.max_int             = max_int;
exports.min_int             = min_int;
exports.lnot                = lnot;
exports.infinity            = infinity;
exports.neg_infinity        = neg_infinity;
exports.nan                 = nan;
exports.max_float           = max_float;
exports.min_float           = min_float;
exports.epsilon_float       = epsilon_float;
exports.$caret              = $caret;
exports.char_of_int         = char_of_int;
exports.string_of_bool      = string_of_bool;
exports.bool_of_string      = bool_of_string;
exports.string_of_int       = string_of_int;
exports.string_of_float     = string_of_float;
exports.$at                 = $at;
exports.stdin               = stdin;
exports.stdout              = stdout;
exports.stderr              = stderr;
exports.print_char          = print_char;
exports.print_string        = print_string;
exports.print_bytes         = print_bytes;
exports.print_int           = print_int;
exports.print_float         = print_float;
exports.print_endline       = print_endline;
exports.print_newline       = print_newline;
exports.prerr_char          = prerr_char;
exports.prerr_string        = prerr_string;
exports.prerr_bytes         = prerr_bytes;
exports.prerr_int           = prerr_int;
exports.prerr_float         = prerr_float;
exports.prerr_endline       = prerr_endline;
exports.prerr_newline       = prerr_newline;
exports.read_line           = read_line;
exports.read_int            = read_int;
exports.read_float          = read_float;
exports.open_out            = open_out;
exports.open_out_bin        = open_out_bin;
exports.open_out_gen        = open_out_gen;
exports.flush               = flush;
exports.flush_all           = flush_all;
exports.output_char         = output_char;
exports.output_string       = output_string;
exports.output_bytes        = output_bytes;
exports.output              = output;
exports.output_substring    = output_substring;
exports.output_byte         = output_byte;
exports.output_binary_int   = output_binary_int;
exports.output_value        = output_value;
exports.seek_out            = seek_out;
exports.pos_out             = pos_out;
exports.out_channel_length  = out_channel_length;
exports.close_out           = close_out;
exports.close_out_noerr     = close_out_noerr;
exports.set_binary_mode_out = set_binary_mode_out;
exports.open_in             = open_in;
exports.open_in_bin         = open_in_bin;
exports.open_in_gen         = open_in_gen;
exports.input_char          = input_char;
exports.input_line          = input_line;
exports.input               = input;
exports.really_input        = really_input;
exports.really_input_string = really_input_string;
exports.input_byte          = input_byte;
exports.input_binary_int    = input_binary_int;
exports.input_value         = input_value;
exports.seek_in             = seek_in;
exports.pos_in              = pos_in;
exports.in_channel_length   = in_channel_length;
exports.close_in            = close_in;
exports.close_in_noerr      = close_in_noerr;
exports.set_binary_mode_in  = set_binary_mode_in;
exports.LargeFile           = LargeFile;
exports.string_of_format    = string_of_format;
exports.$caret$caret        = $caret$caret;
exports.exit                = exit;
exports.at_exit             = at_exit;
exports.valid_float_lexem   = valid_float_lexem;
exports.unsafe_really_input = unsafe_really_input;
exports.do_at_exit          = do_at_exit;
/* No side effect */


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

function string_of_char(prim) {
  return String.fromCharCode(prim);
}

function caml_string_get(s, i) {
  if (i >= s.length || i < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}

function caml_create_string(len) {
  if (len < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.create"
        ];
  } else {
    return new Array(len);
  }
}

function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function caml_fill_string(s, i, l, c) {
  if (l > 0) {
    for(var k = i ,k_finish = (l + i | 0) - 1 | 0; k <= k_finish; ++k){
      s[k] = c;
    }
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_blit_string(s1, i1, s2, i2, len) {
  if (len > 0) {
    var off1 = s1.length - i1 | 0;
    if (len <= off1) {
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
      }
      return /* () */0;
    } else {
      for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
        s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
      }
      for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
        s2[i2 + i$2 | 0] = /* "\000" */0;
      }
      return /* () */0;
    }
  } else {
    return 0;
  }
}

function caml_blit_bytes(s1, i1, s2, i2, len) {
  if (len > 0) {
    if (s1 === s2) {
      var s1$1 = s1;
      var i1$1 = i1;
      var i2$1 = i2;
      var len$1 = len;
      if (i1$1 < i2$1) {
        var range_a = (s1$1.length - i2$1 | 0) - 1 | 0;
        var range_b = len$1 - 1 | 0;
        var range = range_a > range_b ? range_b : range_a;
        for(var j = range; j >= 0; --j){
          s1$1[i2$1 + j | 0] = s1$1[i1$1 + j | 0];
        }
        return /* () */0;
      } else if (i1$1 > i2$1) {
        var range_a$1 = (s1$1.length - i1$1 | 0) - 1 | 0;
        var range_b$1 = len$1 - 1 | 0;
        var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
        for(var k = 0; k <= range$1; ++k){
          s1$1[i2$1 + k | 0] = s1$1[i1$1 + k | 0];
        }
        return /* () */0;
      } else {
        return 0;
      }
    } else {
      var off1 = s1.length - i1 | 0;
      if (len <= off1) {
        for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
          s2[i2 + i | 0] = s1[i1 + i | 0];
        }
        return /* () */0;
      } else {
        for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
          s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
        }
        for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
          s2[i2 + i$2 | 0] = /* "\000" */0;
        }
        return /* () */0;
      }
    }
  } else {
    return 0;
  }
}

function bytes_of_string(s) {
  var len = s.length;
  var res = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    res[i] = s.charCodeAt(i);
  }
  return res;
}

function bytes_to_string(a) {
  var bytes = a;
  var i = 0;
  var len = a.length;
  var s = "";
  var s_len = len;
  if (i === 0 && len <= 4096 && len === bytes.length) {
    return String.fromCharCode.apply(null,bytes);
  } else {
    var offset = 0;
    while(s_len > 0) {
      var next = s_len < 1024 ? s_len : 1024;
      var tmp_bytes = new Array(next);
      caml_blit_bytes(bytes, offset, tmp_bytes, 0, next);
      s = s + String.fromCharCode.apply(null,tmp_bytes);
      s_len = s_len - next | 0;
      offset = offset + next | 0;
    };
    return s;
  }
}

function caml_string_of_char_array(chars) {
  var len = chars.length;
  var bytes = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    bytes[i] = chars[i];
  }
  return bytes_to_string(bytes);
}

function caml_is_printable(c) {
  if (c > 31) {
    return +(c < 127);
  } else {
    return /* false */0;
  }
}

function caml_string_get16(s, i) {
  return s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0;
}

function caml_string_get32(s, i) {
  return ((s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0) + (s.charCodeAt(i + 2 | 0) << 16) | 0) + (s.charCodeAt(i + 3 | 0) << 24) | 0;
}

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}

exports.bytes_of_string           = bytes_of_string;
exports.bytes_to_string           = bytes_to_string;
exports.caml_is_printable         = caml_is_printable;
exports.caml_string_of_char_array = caml_string_of_char_array;
exports.caml_string_get           = caml_string_get;
exports.caml_string_compare       = caml_string_compare;
exports.caml_create_string        = caml_create_string;
exports.caml_fill_string          = caml_fill_string;
exports.caml_blit_string          = caml_blit_string;
exports.caml_blit_bytes           = caml_blit_bytes;
exports.caml_string_get16         = caml_string_get16;
exports.caml_string_get32         = caml_string_get32;
exports.string_of_char            = string_of_char;
exports.get                       = get;
/* No side effect */


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Block                   = __webpack_require__(5);
var Caml_builtin_exceptions = __webpack_require__(0);

function caml_obj_dup(x) {
  var len = x.length | 0;
  var v = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    v[i] = x[i];
  }
  v.tag = x.tag | 0;
  return v;
}

function caml_obj_truncate(x, new_size) {
  var len = x.length | 0;
  if (new_size <= 0 || new_size > len) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Obj.truncate"
        ];
  } else if (len !== new_size) {
    for(var i = new_size ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      x[i] = 0;
    }
    x.length = new_size;
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_lazy_make_forward(x) {
  return Block.__(250, [x]);
}

function caml_update_dummy(x, y) {
  var len = y.length | 0;
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    x[i] = y[i];
  }
  var y_tag = y.tag | 0;
  if (y_tag !== 0) {
    x.tag = y_tag;
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function caml_compare(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return 0;
    } else {
      var a_type = typeof a;
      var b_type = typeof b;
      if (a_type === "string") {
        var x = a;
        var y = b;
        if (x < y) {
          return -1;
        } else if (x === y) {
          return 0;
        } else {
          return 1;
        }
      } else {
        var is_a_number = +(a_type === "number");
        var is_b_number = +(b_type === "number");
        if (is_a_number !== 0) {
          if (is_b_number !== 0) {
            return caml_int_compare(a, b);
          } else {
            return -1;
          }
        } else if (is_b_number !== 0) {
          return 1;
        } else if (a_type === "boolean" || a_type === "undefined" || a === null) {
          var x$1 = a;
          var y$1 = b;
          if (x$1 === y$1) {
            return 0;
          } else if (x$1 < y$1) {
            return -1;
          } else {
            return 1;
          }
        } else if (a_type === "function" || b_type === "function") {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "compare: functional value"
              ];
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
            
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
            
          } else if (tag_a === 248) {
            return caml_int_compare(a[1], b[1]);
          } else if (tag_a === 251) {
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            if (tag_a < tag_b) {
              return -1;
            } else {
              return 1;
            }
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while(true) {
                var i = _i;
                if (i === same_length) {
                  return 0;
                } else {
                  var res = caml_compare(a$1[i], b$1[i]);
                  if (res !== 0) {
                    return res;
                  } else {
                    _i = i + 1 | 0;
                    continue ;
                    
                  }
                }
              };
            } else if (len_a < len_b) {
              var a$2 = a;
              var b$2 = b;
              var _i$1 = 0;
              var short_length = len_a;
              while(true) {
                var i$1 = _i$1;
                if (i$1 === short_length) {
                  return -1;
                } else {
                  var res$1 = caml_compare(a$2[i$1], b$2[i$1]);
                  if (res$1 !== 0) {
                    return res$1;
                  } else {
                    _i$1 = i$1 + 1 | 0;
                    continue ;
                    
                  }
                }
              };
            } else {
              var a$3 = a;
              var b$3 = b;
              var _i$2 = 0;
              var short_length$1 = len_b;
              while(true) {
                var i$2 = _i$2;
                if (i$2 === short_length$1) {
                  return 1;
                } else {
                  var res$2 = caml_compare(a$3[i$2], b$3[i$2]);
                  if (res$2 !== 0) {
                    return res$2;
                  } else {
                    _i$2 = i$2 + 1 | 0;
                    continue ;
                    
                  }
                }
              };
            }
          }
        }
      }
    }
  };
}

function caml_equal(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return /* true */1;
    } else {
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
        return /* false */0;
      } else {
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "equal: functional value"
              ];
        } else if (b_type === "number" || b_type === "undefined" || b === null) {
          return /* false */0;
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
            
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
            
          } else if (tag_a === 248) {
            return +(a[1] === b[1]);
          } else if (tag_a === 251) {
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            return /* false */0;
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while(true) {
                var i = _i;
                if (i === same_length) {
                  return /* true */1;
                } else if (caml_equal(a$1[i], b$1[i])) {
                  _i = i + 1 | 0;
                  continue ;
                  
                } else {
                  return /* false */0;
                }
              };
            } else {
              return /* false */0;
            }
          }
        }
      }
    }
  };
}

function caml_notequal(a, b) {
  return 1 - caml_equal(a, b);
}

function caml_greaterequal(a, b) {
  return +(caml_compare(a, b) >= 0);
}

function caml_greaterthan(a, b) {
  return +(caml_compare(a, b) > 0);
}

function caml_lessequal(a, b) {
  return +(caml_compare(a, b) <= 0);
}

function caml_lessthan(a, b) {
  return +(caml_compare(a, b) < 0);
}

var caml_int32_compare = caml_int_compare;

var caml_nativeint_compare = caml_int_compare;

exports.caml_obj_dup           = caml_obj_dup;
exports.caml_obj_truncate      = caml_obj_truncate;
exports.caml_lazy_make_forward = caml_lazy_make_forward;
exports.caml_update_dummy      = caml_update_dummy;
exports.caml_int_compare       = caml_int_compare;
exports.caml_int32_compare     = caml_int32_compare;
exports.caml_nativeint_compare = caml_nativeint_compare;
exports.caml_compare           = caml_compare;
exports.caml_equal             = caml_equal;
exports.caml_notequal          = caml_notequal;
exports.caml_greaterequal      = caml_greaterequal;
exports.caml_greaterthan       = caml_greaterthan;
exports.caml_lessthan          = caml_lessthan;
exports.caml_lessequal         = caml_lessequal;
/* No side effect */


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



function __(tag, block) {
  block.tag = tag;
  return block;
}

exports.__ = __;
/* No side effect */


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

function div(x, y) {
  if (y === 0) {
    throw Caml_builtin_exceptions.division_by_zero;
  } else {
    return x / y | 0;
  }
}

function mod_(x, y) {
  if (y === 0) {
    throw Caml_builtin_exceptions.division_by_zero;
  } else {
    return x % y;
  }
}

function caml_bswap16(x) {
  return ((x & 255) << 8) | ((x & 65280) >>> 8);
}

function caml_int32_bswap(x) {
  return ((x & 255) << 24) | ((x & 65280) << 8) | ((x & 16711680) >>> 8) | ((x & 4278190080) >>> 24);
}

var imul = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);

var caml_nativeint_bswap = caml_int32_bswap;

exports.div                  = div;
exports.mod_                 = mod_;
exports.caml_bswap16         = caml_bswap16;
exports.caml_int32_bswap     = caml_int32_bswap;
exports.caml_nativeint_bswap = caml_nativeint_bswap;
exports.imul                 = imul;
/* imul Not a pure module */


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Curry                   = __webpack_require__(1);
var Caml_obj                = __webpack_require__(4);
var Pervasives              = __webpack_require__(2);
var Caml_builtin_exceptions = __webpack_require__(0);

function length(l) {
  var _len = 0;
  var _param = l;
  while(true) {
    var param = _param;
    var len = _len;
    if (param) {
      _param = param[1];
      _len = len + 1 | 0;
      continue ;
      
    } else {
      return len;
    }
  };
}

function hd(param) {
  if (param) {
    return param[0];
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "hd"
        ];
  }
}

function tl(param) {
  if (param) {
    return param[1];
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "tl"
        ];
  }
}

function nth(l, n) {
  if (n < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "List.nth"
        ];
  } else {
    var _l = l;
    var _n = n;
    while(true) {
      var n$1 = _n;
      var l$1 = _l;
      if (l$1) {
        if (n$1) {
          _n = n$1 - 1 | 0;
          _l = l$1[1];
          continue ;
          
        } else {
          return l$1[0];
        }
      } else {
        throw [
              Caml_builtin_exceptions.failure,
              "nth"
            ];
      }
    };
  }
}

function rev_append(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      _l2 = /* :: */[
        l1[0],
        l2
      ];
      _l1 = l1[1];
      continue ;
      
    } else {
      return l2;
    }
  };
}

function rev(l) {
  return rev_append(l, /* [] */0);
}

function flatten(param) {
  if (param) {
    return Pervasives.$at(param[0], flatten(param[1]));
  } else {
    return /* [] */0;
  }
}

function map(f, param) {
  if (param) {
    var r = Curry._1(f, param[0]);
    return /* :: */[
            r,
            map(f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi(i, f, param) {
  if (param) {
    var r = Curry._2(f, i, param[0]);
    return /* :: */[
            r,
            mapi(i + 1 | 0, f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi$1(f, l) {
  return mapi(0, f, l);
}

function rev_map(f, l) {
  var _accu = /* [] */0;
  var _param = l;
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[1];
      _accu = /* :: */[
        Curry._1(f, param[0]),
        accu
      ];
      continue ;
      
    } else {
      return accu;
    }
  };
}

function iter(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      Curry._1(f, param[0]);
      _param = param[1];
      continue ;
      
    } else {
      return /* () */0;
    }
  };
}

function iteri(f, l) {
  var _i = 0;
  var f$1 = f;
  var _param = l;
  while(true) {
    var param = _param;
    var i = _i;
    if (param) {
      Curry._2(f$1, i, param[0]);
      _param = param[1];
      _i = i + 1 | 0;
      continue ;
      
    } else {
      return /* () */0;
    }
  };
}

function fold_left(f, _accu, _l) {
  while(true) {
    var l = _l;
    var accu = _accu;
    if (l) {
      _l = l[1];
      _accu = Curry._2(f, accu, l[0]);
      continue ;
      
    } else {
      return accu;
    }
  };
}

function fold_right(f, l, accu) {
  if (l) {
    return Curry._2(f, l[0], fold_right(f, l[1], accu));
  } else {
    return accu;
  }
}

function map2(f, l1, l2) {
  if (l1) {
    if (l2) {
      var r = Curry._2(f, l1[0], l2[0]);
      return /* :: */[
              r,
              map2(f, l1[1], l2[1])
            ];
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.map2"
          ];
    }
  } else if (l2) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "List.map2"
        ];
  } else {
    return /* [] */0;
  }
}

function rev_map2(f, l1, l2) {
  var _accu = /* [] */0;
  var _l1 = l1;
  var _l2 = l2;
  while(true) {
    var l2$1 = _l2;
    var l1$1 = _l1;
    var accu = _accu;
    if (l1$1) {
      if (l2$1) {
        _l2 = l2$1[1];
        _l1 = l1$1[1];
        _accu = /* :: */[
          Curry._2(f, l1$1[0], l2$1[0]),
          accu
        ];
        continue ;
        
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.rev_map2"
            ];
      }
    } else if (l2$1) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.rev_map2"
          ];
    } else {
      return accu;
    }
  };
}

function iter2(f, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        Curry._2(f, l1[0], l2[0]);
        _l2 = l2[1];
        _l1 = l1[1];
        continue ;
        
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.iter2"
            ];
      }
    } else if (l2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.iter2"
          ];
    } else {
      return /* () */0;
    }
  };
}

function fold_left2(f, _accu, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    var accu = _accu;
    if (l1) {
      if (l2) {
        _l2 = l2[1];
        _l1 = l1[1];
        _accu = Curry._3(f, accu, l1[0], l2[0]);
        continue ;
        
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.fold_left2"
            ];
      }
    } else if (l2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.fold_left2"
          ];
    } else {
      return accu;
    }
  };
}

function fold_right2(f, l1, l2, accu) {
  if (l1) {
    if (l2) {
      return Curry._3(f, l1[0], l2[0], fold_right2(f, l1[1], l2[1], accu));
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.fold_right2"
          ];
    }
  } else if (l2) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "List.fold_right2"
        ];
  } else {
    return accu;
  }
}

function for_all(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Curry._1(p, param[0])) {
        _param = param[1];
        continue ;
        
      } else {
        return /* false */0;
      }
    } else {
      return /* true */1;
    }
  };
}

function exists(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Curry._1(p, param[0])) {
        return /* true */1;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  };
}

function for_all2(p, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        if (Curry._2(p, l1[0], l2[0])) {
          _l2 = l2[1];
          _l1 = l1[1];
          continue ;
          
        } else {
          return /* false */0;
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.for_all2"
            ];
      }
    } else if (l2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.for_all2"
          ];
    } else {
      return /* true */1;
    }
  };
}

function exists2(p, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        if (Curry._2(p, l1[0], l2[0])) {
          return /* true */1;
        } else {
          _l2 = l2[1];
          _l1 = l1[1];
          continue ;
          
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.exists2"
            ];
      }
    } else if (l2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.exists2"
          ];
    } else {
      return /* false */0;
    }
  };
}

function mem(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Caml_obj.caml_compare(param[0], x)) {
        _param = param[1];
        continue ;
        
      } else {
        return /* true */1;
      }
    } else {
      return /* false */0;
    }
  };
}

function memq(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (param[0] === x) {
        return /* true */1;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  };
}

function assoc(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var match = param[0];
      if (Caml_obj.caml_compare(match[0], x)) {
        _param = param[1];
        continue ;
        
      } else {
        return match[1];
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function assq(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var match = param[0];
      if (match[0] === x) {
        return match[1];
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function mem_assoc(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Caml_obj.caml_compare(param[0][0], x)) {
        _param = param[1];
        continue ;
        
      } else {
        return /* true */1;
      }
    } else {
      return /* false */0;
    }
  };
}

function mem_assq(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (param[0][0] === x) {
        return /* true */1;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  };
}

function remove_assoc(x, param) {
  if (param) {
    var l = param[1];
    var pair = param[0];
    if (Caml_obj.caml_compare(pair[0], x)) {
      return /* :: */[
              pair,
              remove_assoc(x, l)
            ];
    } else {
      return l;
    }
  } else {
    return /* [] */0;
  }
}

function remove_assq(x, param) {
  if (param) {
    var l = param[1];
    var pair = param[0];
    if (pair[0] === x) {
      return l;
    } else {
      return /* :: */[
              pair,
              remove_assq(x, l)
            ];
    }
  } else {
    return /* [] */0;
  }
}

function find(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var x = param[0];
      if (Curry._1(p, x)) {
        return x;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function find_all(p) {
  return (function (param) {
      var _accu = /* [] */0;
      var _param = param;
      while(true) {
        var param$1 = _param;
        var accu = _accu;
        if (param$1) {
          var l = param$1[1];
          var x = param$1[0];
          if (Curry._1(p, x)) {
            _param = l;
            _accu = /* :: */[
              x,
              accu
            ];
            continue ;
            
          } else {
            _param = l;
            continue ;
            
          }
        } else {
          return rev_append(accu, /* [] */0);
        }
      };
    });
}

function partition(p, l) {
  var _yes = /* [] */0;
  var _no = /* [] */0;
  var _param = l;
  while(true) {
    var param = _param;
    var no = _no;
    var yes = _yes;
    if (param) {
      var l$1 = param[1];
      var x = param[0];
      if (Curry._1(p, x)) {
        _param = l$1;
        _yes = /* :: */[
          x,
          yes
        ];
        continue ;
        
      } else {
        _param = l$1;
        _no = /* :: */[
          x,
          no
        ];
        continue ;
        
      }
    } else {
      return /* tuple */[
              rev_append(yes, /* [] */0),
              rev_append(no, /* [] */0)
            ];
    }
  };
}

function split(param) {
  if (param) {
    var match = param[0];
    var match$1 = split(param[1]);
    return /* tuple */[
            /* :: */[
              match[0],
              match$1[0]
            ],
            /* :: */[
              match[1],
              match$1[1]
            ]
          ];
  } else {
    return /* tuple */[
            /* [] */0,
            /* [] */0
          ];
  }
}

function combine(l1, l2) {
  if (l1) {
    if (l2) {
      return /* :: */[
              /* tuple */[
                l1[0],
                l2[0]
              ],
              combine(l1[1], l2[1])
            ];
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.combine"
          ];
    }
  } else if (l2) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "List.combine"
        ];
  } else {
    return /* [] */0;
  }
}

function merge(cmp, l1, l2) {
  if (l1) {
    if (l2) {
      var h2 = l2[0];
      var h1 = l1[0];
      if (Curry._2(cmp, h1, h2) <= 0) {
        return /* :: */[
                h1,
                merge(cmp, l1[1], l2)
              ];
      } else {
        return /* :: */[
                h2,
                merge(cmp, l1, l2[1])
              ];
      }
    } else {
      return l1;
    }
  } else {
    return l2;
  }
}

function chop(_k, _l) {
  while(true) {
    var l = _l;
    var k = _k;
    if (k) {
      if (l) {
        _l = l[1];
        _k = k - 1 | 0;
        continue ;
        
      } else {
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "list.ml",
                223,
                11
              ]
            ];
      }
    } else {
      return l;
    }
  };
}

function stable_sort(cmp, l) {
  var sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3) {
        exit = 1;
      } else if (l) {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            if (Curry._2(cmp, x1, x2) <= 0) {
              if (Curry._2(cmp, x2, x3) <= 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else if (Curry._2(cmp, x1, x3) <= 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              }
            } else if (Curry._2(cmp, x1, x3) <= 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ]
                    ];
            } else if (Curry._2(cmp, x2, x3) <= 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            } else {
              return /* :: */[
                      x3,
                      /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      } else {
        exit = 1;
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        if (Curry._2(cmp, x1$1, x2$1) <= 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = rev_sort(n1, l);
      var s2 = rev_sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var h2 = l2$1[0];
            var h1 = l1[0];
            if (Curry._2(cmp, h1, h2) > 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = l1[1];
              continue ;
              
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = l2$1[1];
              continue ;
              
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
    
  };
  var rev_sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3) {
        exit = 1;
      } else if (l) {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            if (Curry._2(cmp, x1, x2) > 0) {
              if (Curry._2(cmp, x2, x3) > 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else if (Curry._2(cmp, x1, x3) > 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              }
            } else if (Curry._2(cmp, x1, x3) > 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ]
                    ];
            } else if (Curry._2(cmp, x2, x3) > 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            } else {
              return /* :: */[
                      x3,
                      /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      } else {
        exit = 1;
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        if (Curry._2(cmp, x1$1, x2$1) > 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = sort(n1, l);
      var s2 = sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var h2 = l2$1[0];
            var h1 = l1[0];
            if (Curry._2(cmp, h1, h2) <= 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = l1[1];
              continue ;
              
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = l2$1[1];
              continue ;
              
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
    
  };
  var len = length(l);
  if (len < 2) {
    return l;
  } else {
    return sort(len, l);
  }
}

function sort_uniq(cmp, l) {
  var sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3) {
        exit = 1;
      } else if (l) {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = Curry._2(cmp, x1, x2);
            if (c) {
              if (c < 0) {
                var c$1 = Curry._2(cmp, x2, x3);
                if (c$1) {
                  if (c$1 < 0) {
                    return /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$2 = Curry._2(cmp, x1, x3);
                    if (c$2) {
                      if (c$2 < 0) {
                        return /* :: */[
                                x1,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x1,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x1,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                var c$3 = Curry._2(cmp, x1, x3);
                if (c$3) {
                  if (c$3 < 0) {
                    return /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$4 = Curry._2(cmp, x2, x3);
                    if (c$4) {
                      if (c$4 < 0) {
                        return /* :: */[
                                x2,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x2,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x2,
                              /* :: */[
                                x1,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                }
              }
            } else {
              var c$5 = Curry._2(cmp, x2, x3);
              if (c$5) {
                if (c$5 < 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                return /* :: */[
                        x2,
                        /* [] */0
                      ];
              }
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      } else {
        exit = 1;
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = Curry._2(cmp, x1$1, x2$1);
        if (c$6) {
          if (c$6 < 0) {
            return /* :: */[
                    x1$1,
                    /* :: */[
                      x2$1,
                      /* [] */0
                    ]
                  ];
          } else {
            return /* :: */[
                    x2$1,
                    /* :: */[
                      x1$1,
                      /* [] */0
                    ]
                  ];
          }
        } else {
          return /* :: */[
                  x1$1,
                  /* [] */0
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = rev_sort(n1, l);
      var s2 = rev_sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = Curry._2(cmp, h1, h2);
            if (c$7) {
              if (c$7 > 0) {
                _accu = /* :: */[
                  h1,
                  accu
                ];
                _l1 = t1;
                continue ;
                
              } else {
                _accu = /* :: */[
                  h2,
                  accu
                ];
                _l2 = t2;
                continue ;
                
              }
            } else {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l2 = t2;
              _l1 = t1;
              continue ;
              
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
    
  };
  var rev_sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3) {
        exit = 1;
      } else if (l) {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = Curry._2(cmp, x1, x2);
            if (c) {
              if (c > 0) {
                var c$1 = Curry._2(cmp, x2, x3);
                if (c$1) {
                  if (c$1 > 0) {
                    return /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$2 = Curry._2(cmp, x1, x3);
                    if (c$2) {
                      if (c$2 > 0) {
                        return /* :: */[
                                x1,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x1,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x1,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                var c$3 = Curry._2(cmp, x1, x3);
                if (c$3) {
                  if (c$3 > 0) {
                    return /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$4 = Curry._2(cmp, x2, x3);
                    if (c$4) {
                      if (c$4 > 0) {
                        return /* :: */[
                                x2,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x2,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x2,
                              /* :: */[
                                x1,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                }
              }
            } else {
              var c$5 = Curry._2(cmp, x2, x3);
              if (c$5) {
                if (c$5 > 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                return /* :: */[
                        x2,
                        /* [] */0
                      ];
              }
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      } else {
        exit = 1;
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = Curry._2(cmp, x1$1, x2$1);
        if (c$6) {
          if (c$6 > 0) {
            return /* :: */[
                    x1$1,
                    /* :: */[
                      x2$1,
                      /* [] */0
                    ]
                  ];
          } else {
            return /* :: */[
                    x2$1,
                    /* :: */[
                      x1$1,
                      /* [] */0
                    ]
                  ];
          }
        } else {
          return /* :: */[
                  x1$1,
                  /* [] */0
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = sort(n1, l);
      var s2 = sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = Curry._2(cmp, h1, h2);
            if (c$7) {
              if (c$7 < 0) {
                _accu = /* :: */[
                  h1,
                  accu
                ];
                _l1 = t1;
                continue ;
                
              } else {
                _accu = /* :: */[
                  h2,
                  accu
                ];
                _l2 = t2;
                continue ;
                
              }
            } else {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l2 = t2;
              _l1 = t1;
              continue ;
              
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
    
  };
  var len = length(l);
  if (len < 2) {
    return l;
  } else {
    return sort(len, l);
  }
}

var append = Pervasives.$at;

var concat = flatten;

var filter = find_all;

var sort = stable_sort;

var fast_sort = stable_sort;

exports.length       = length;
exports.hd           = hd;
exports.tl           = tl;
exports.nth          = nth;
exports.rev          = rev;
exports.append       = append;
exports.rev_append   = rev_append;
exports.concat       = concat;
exports.flatten      = flatten;
exports.iter         = iter;
exports.iteri        = iteri;
exports.map          = map;
exports.mapi         = mapi$1;
exports.rev_map      = rev_map;
exports.fold_left    = fold_left;
exports.fold_right   = fold_right;
exports.iter2        = iter2;
exports.map2         = map2;
exports.rev_map2     = rev_map2;
exports.fold_left2   = fold_left2;
exports.fold_right2  = fold_right2;
exports.for_all      = for_all;
exports.exists       = exists;
exports.for_all2     = for_all2;
exports.exists2      = exists2;
exports.mem          = mem;
exports.memq         = memq;
exports.find         = find;
exports.filter       = filter;
exports.find_all     = find_all;
exports.partition    = partition;
exports.assoc        = assoc;
exports.assq         = assq;
exports.mem_assoc    = mem_assoc;
exports.mem_assq     = mem_assq;
exports.remove_assoc = remove_assoc;
exports.remove_assq  = remove_assq;
exports.split        = split;
exports.combine      = combine;
exports.sort         = sort;
exports.stable_sort  = stable_sort;
exports.fast_sort    = fast_sort;
exports.sort_uniq    = sort_uniq;
exports.merge        = merge;
/* No side effect */


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  };
  return result;
}

function len(_acc, _l) {
  while(true) {
    var l = _l;
    var acc = _acc;
    if (l) {
      _l = l[1];
      _acc = l[0].length + acc | 0;
      continue ;
      
    } else {
      return acc;
    }
  };
}

function fill(arr, _i, _l) {
  while(true) {
    var l = _l;
    var i = _i;
    if (l) {
      var x = l[0];
      var l$1 = x.length;
      var k = i;
      var j = 0;
      while(j < l$1) {
        arr[k] = x[j];
        k = k + 1 | 0;
        j = j + 1 | 0;
      };
      _l = l[1];
      _i = k;
      continue ;
      
    } else {
      return /* () */0;
    }
  };
}

function caml_array_concat(l) {
  var v = len(0, l);
  var result = new Array(v);
  fill(result, 0, l);
  return result;
}

function caml_array_set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    xs[index] = newval;
    return /* () */0;
  }
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return xs[index];
  }
}

function caml_make_vect(len, init) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = init;
  }
  return b;
}

function caml_array_blit(a1, i1, a2, i2, len) {
  if (i2 <= i1) {
    for(var j = 0 ,j_finish = len - 1 | 0; j <= j_finish; ++j){
      a2[j + i2 | 0] = a1[j + i1 | 0];
    }
    return /* () */0;
  } else {
    for(var j$1 = len - 1 | 0; j$1 >= 0; --j$1){
      a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
    }
    return /* () */0;
  }
}

exports.caml_array_sub    = caml_array_sub;
exports.caml_array_concat = caml_array_concat;
exports.caml_make_vect    = caml_make_vect;
exports.caml_array_blit   = caml_array_blit;
exports.caml_array_get    = caml_array_get;
exports.caml_array_set    = caml_array_set;
/* No side effect */


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var id = [0];

function caml_set_oo_id(b) {
  b[1] = id[0];
  id[0] += 1;
  return b;
}

function get_id() {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = get_id(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}

function isCamlExceptionOrOpenVariant(e) {
  if (e === undefined) {
    return /* false */0;
  } else if (e.tag === 248) {
    return /* true */1;
  } else {
    var slot = e[0];
    if (slot !== undefined) {
      return +(slot.tag === 248);
    } else {
      return /* false */0;
    }
  }
}

exports.caml_set_oo_id               = caml_set_oo_id;
exports.get_id                       = get_id;
exports.create                       = create;
exports.isCamlExceptionOrOpenVariant = isCamlExceptionOrOpenVariant;
/* No side effect */


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_exceptions = __webpack_require__(9);

var $$Error = Caml_exceptions.create("Js_exn.Error");

function internalToOCamlException(e) {
  if (Caml_exceptions.isCamlExceptionOrOpenVariant(e)) {
    return e;
  } else {
    return [
            $$Error,
            e
          ];
  }
}

function raiseError(str) {
  throw new Error(str);
}

function raiseEvalError(str) {
  throw new EvalError(str);
}

function raiseRangeError(str) {
  throw new RangeError(str);
}

function raiseReferenceError(str) {
  throw new ReferenceError(str);
}

function raiseSyntaxError(str) {
  throw new SyntaxError(str);
}

function raiseTypeError(str) {
  throw new TypeError(str);
}

function raiseUriError(str) {
  throw new URIError(str);
}

exports.$$Error                  = $$Error;
exports.internalToOCamlException = internalToOCamlException;
exports.raiseError               = raiseError;
exports.raiseEvalError           = raiseEvalError;
exports.raiseRangeError          = raiseRangeError;
exports.raiseReferenceError      = raiseReferenceError;
exports.raiseSyntaxError         = raiseSyntaxError;
exports.raiseTypeError           = raiseTypeError;
exports.raiseUriError            = raiseUriError;
/* No side effect */


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Char                    = __webpack_require__(23);
var List                    = __webpack_require__(7);
var Curry                   = __webpack_require__(1);
var Caml_obj                = __webpack_require__(4);
var Caml_int32              = __webpack_require__(6);
var Pervasives              = __webpack_require__(2);
var Caml_string             = __webpack_require__(3);
var Caml_builtin_exceptions = __webpack_require__(0);

function make(n, c) {
  var s = Caml_string.caml_create_string(n);
  Caml_string.caml_fill_string(s, 0, n, c);
  return s;
}

function init(n, f) {
  var s = Caml_string.caml_create_string(n);
  for(var i = 0 ,i_finish = n - 1 | 0; i <= i_finish; ++i){
    s[i] = Curry._1(f, i);
  }
  return s;
}

var empty = [];

function copy(s) {
  var len = s.length;
  var r = Caml_string.caml_create_string(len);
  Caml_string.caml_blit_bytes(s, 0, r, 0, len);
  return r;
}

function to_string(b) {
  return Caml_string.bytes_to_string(copy(b));
}

function of_string(s) {
  return copy(Caml_string.bytes_of_string(s));
}

function sub(s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.sub / Bytes.sub"
        ];
  } else {
    var r = Caml_string.caml_create_string(len);
    Caml_string.caml_blit_bytes(s, ofs, r, 0, len);
    return r;
  }
}

function sub_string(b, ofs, len) {
  return Caml_string.bytes_to_string(sub(b, ofs, len));
}

function extend(s, left, right) {
  var len = (s.length + left | 0) + right | 0;
  var r = Caml_string.caml_create_string(len);
  var match = left < 0 ? /* tuple */[
      -left | 0,
      0
    ] : /* tuple */[
      0,
      left
    ];
  var dstoff = match[1];
  var srcoff = match[0];
  var cpylen = Pervasives.min(s.length - srcoff | 0, len - dstoff | 0);
  if (cpylen > 0) {
    Caml_string.caml_blit_bytes(s, srcoff, r, dstoff, cpylen);
  }
  return r;
}

function fill(s, ofs, len, c) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.fill / Bytes.fill"
        ];
  } else {
    return Caml_string.caml_fill_string(s, ofs, len, c);
  }
}

function blit(s1, ofs1, s2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Bytes.blit"
        ];
  } else {
    return Caml_string.caml_blit_bytes(s1, ofs1, s2, ofs2, len);
  }
}

function blit_string(s1, ofs1, s2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.blit / Bytes.blit_string"
        ];
  } else {
    return Caml_string.caml_blit_string(s1, ofs1, s2, ofs2, len);
  }
}

function iter(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    Curry._1(f, a[i]);
  }
  return /* () */0;
}

function iteri(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    Curry._2(f, i, a[i]);
  }
  return /* () */0;
}

function concat(sep, l) {
  if (l) {
    var hd = l[0];
    var num = [0];
    var len = [0];
    List.iter((function (s) {
            num[0] = num[0] + 1 | 0;
            len[0] = len[0] + s.length | 0;
            return /* () */0;
          }), l);
    var r = Caml_string.caml_create_string(len[0] + Caml_int32.imul(sep.length, num[0] - 1 | 0) | 0);
    Caml_string.caml_blit_bytes(hd, 0, r, 0, hd.length);
    var pos = [hd.length];
    List.iter((function (s) {
            Caml_string.caml_blit_bytes(sep, 0, r, pos[0], sep.length);
            pos[0] = pos[0] + sep.length | 0;
            Caml_string.caml_blit_bytes(s, 0, r, pos[0], s.length);
            pos[0] = pos[0] + s.length | 0;
            return /* () */0;
          }), l[1]);
    return r;
  } else {
    return empty;
  }
}

function cat(a, b) {
  return a.concat(b);
}

function is_space(param) {
  var switcher = param - 9 | 0;
  if (switcher > 4 || switcher < 0) {
    if (switcher !== 23) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  } else if (switcher !== 2) {
    return /* true */1;
  } else {
    return /* false */0;
  }
}

function trim(s) {
  var len = s.length;
  var i = 0;
  while(i < len && is_space(s[i])) {
    i = i + 1 | 0;
  };
  var j = len - 1 | 0;
  while(j >= i && is_space(s[j])) {
    j = j - 1 | 0;
  };
  if (j >= i) {
    return sub(s, i, (j - i | 0) + 1 | 0);
  } else {
    return empty;
  }
}

function escaped(s) {
  var n = 0;
  for(var i = 0 ,i_finish = s.length - 1 | 0; i <= i_finish; ++i){
    var match = s[i];
    var tmp;
    if (match >= 32) {
      var switcher = match - 34 | 0;
      tmp = switcher > 58 || switcher < 0 ? (
          switcher >= 93 ? 4 : 1
        ) : (
          switcher > 57 || switcher < 1 ? 2 : 1
        );
    } else {
      tmp = match >= 11 ? (
          match !== 13 ? 4 : 2
        ) : (
          match >= 8 ? 2 : 4
        );
    }
    n = n + tmp | 0;
  }
  if (n === s.length) {
    return copy(s);
  } else {
    var s$prime = Caml_string.caml_create_string(n);
    n = 0;
    for(var i$1 = 0 ,i_finish$1 = s.length - 1 | 0; i$1 <= i_finish$1; ++i$1){
      var c = s[i$1];
      var exit = 0;
      if (c >= 35) {
        if (c !== 92) {
          if (c >= 127) {
            exit = 1;
          } else {
            s$prime[n] = c;
          }
        } else {
          exit = 2;
        }
      } else if (c >= 32) {
        if (c >= 34) {
          exit = 2;
        } else {
          s$prime[n] = c;
        }
      } else if (c >= 14) {
        exit = 1;
      } else {
        switch (c) {
          case 8 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "b" */98;
              break;
          case 9 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "t" */116;
              break;
          case 10 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "n" */110;
              break;
          case 0 : 
          case 1 : 
          case 2 : 
          case 3 : 
          case 4 : 
          case 5 : 
          case 6 : 
          case 7 : 
          case 11 : 
          case 12 : 
              exit = 1;
              break;
          case 13 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "r" */114;
              break;
          
        }
      }
      switch (exit) {
        case 1 : 
            s$prime[n] = /* "\\" */92;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 100 | 0) | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 10 | 0) % 10 | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + c % 10 | 0;
            break;
        case 2 : 
            s$prime[n] = /* "\\" */92;
            n = n + 1 | 0;
            s$prime[n] = c;
            break;
        
      }
      n = n + 1 | 0;
    }
    return s$prime;
  }
}

function map(f, s) {
  var l = s.length;
  if (l) {
    var r = Caml_string.caml_create_string(l);
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = Curry._1(f, s[i]);
    }
    return r;
  } else {
    return s;
  }
}

function mapi(f, s) {
  var l = s.length;
  if (l) {
    var r = Caml_string.caml_create_string(l);
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = Curry._2(f, i, s[i]);
    }
    return r;
  } else {
    return s;
  }
}

function uppercase(s) {
  return map(Char.uppercase, s);
}

function lowercase(s) {
  return map(Char.lowercase, s);
}

function apply1(f, s) {
  if (s.length) {
    var r = copy(s);
    r[0] = Curry._1(f, s[0]);
    return r;
  } else {
    return s;
  }
}

function capitalize(s) {
  return apply1(Char.uppercase, s);
}

function uncapitalize(s) {
  return apply1(Char.lowercase, s);
}

function index_rec(s, lim, _i, c) {
  while(true) {
    var i = _i;
    if (i >= lim) {
      throw Caml_builtin_exceptions.not_found;
    } else if (s[i] === c) {
      return i;
    } else {
      _i = i + 1 | 0;
      continue ;
      
    }
  };
}

function index(s, c) {
  return index_rec(s, s.length, 0, c);
}

function index_from(s, i, c) {
  var l = s.length;
  if (i < 0 || i > l) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.index_from / Bytes.index_from"
        ];
  } else {
    return index_rec(s, l, i, c);
  }
}

function rindex_rec(s, _i, c) {
  while(true) {
    var i = _i;
    if (i < 0) {
      throw Caml_builtin_exceptions.not_found;
    } else if (s[i] === c) {
      return i;
    } else {
      _i = i - 1 | 0;
      continue ;
      
    }
  };
}

function rindex(s, c) {
  return rindex_rec(s, s.length - 1 | 0, c);
}

function rindex_from(s, i, c) {
  if (i < -1 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.rindex_from / Bytes.rindex_from"
        ];
  } else {
    return rindex_rec(s, i, c);
  }
}

function contains_from(s, i, c) {
  var l = s.length;
  if (i < 0 || i > l) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.contains_from / Bytes.contains_from"
        ];
  } else {
    try {
      index_rec(s, l, i, c);
      return /* true */1;
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        return /* false */0;
      } else {
        throw exn;
      }
    }
  }
}

function contains(s, c) {
  return contains_from(s, 0, c);
}

function rcontains_from(s, i, c) {
  if (i < 0 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.rcontains_from / Bytes.rcontains_from"
        ];
  } else {
    try {
      rindex_rec(s, i, c);
      return /* true */1;
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        return /* false */0;
      } else {
        throw exn;
      }
    }
  }
}

var compare = Caml_obj.caml_compare;

var unsafe_to_string = Caml_string.bytes_to_string;

var unsafe_of_string = Caml_string.bytes_of_string;

exports.make             = make;
exports.init             = init;
exports.empty            = empty;
exports.copy             = copy;
exports.of_string        = of_string;
exports.to_string        = to_string;
exports.sub              = sub;
exports.sub_string       = sub_string;
exports.extend           = extend;
exports.fill             = fill;
exports.blit             = blit;
exports.blit_string      = blit_string;
exports.concat           = concat;
exports.cat              = cat;
exports.iter             = iter;
exports.iteri            = iteri;
exports.map              = map;
exports.mapi             = mapi;
exports.trim             = trim;
exports.escaped          = escaped;
exports.index            = index;
exports.rindex           = rindex;
exports.index_from       = index_from;
exports.rindex_from      = rindex_from;
exports.contains         = contains;
exports.contains_from    = contains_from;
exports.rcontains_from   = rcontains_from;
exports.uppercase        = uppercase;
exports.lowercase        = lowercase;
exports.capitalize       = capitalize;
exports.uncapitalize     = uncapitalize;
exports.compare          = compare;
exports.unsafe_to_string = unsafe_to_string;
exports.unsafe_of_string = unsafe_of_string;
/* No side effect */


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Bytes                   = __webpack_require__(11);
var Curry                   = __webpack_require__(1);
var $$String                = __webpack_require__(13);
var Pervasives              = __webpack_require__(2);
var Caml_string             = __webpack_require__(3);
var Caml_builtin_exceptions = __webpack_require__(0);

function create(n) {
  var n$1 = n < 1 ? 1 : n;
  var s = Caml_string.caml_create_string(n$1);
  return /* record */[
          /* buffer */s,
          /* position */0,
          /* length */n$1,
          /* initial_buffer */s
        ];
}

function contents(b) {
  return Bytes.sub_string(b[/* buffer */0], 0, b[/* position */1]);
}

function to_bytes(b) {
  return Bytes.sub(b[/* buffer */0], 0, b[/* position */1]);
}

function sub(b, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (b[/* position */1] - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Buffer.sub"
        ];
  } else {
    return Bytes.sub_string(b[/* buffer */0], ofs, len);
  }
}

function blit(src, srcoff, dst, dstoff, len) {
  if (len < 0 || srcoff < 0 || srcoff > (src[/* position */1] - len | 0) || dstoff < 0 || dstoff > (dst.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Buffer.blit"
        ];
  } else {
    return Bytes.blit(src[/* buffer */0], srcoff, dst, dstoff, len);
  }
}

function nth(b, ofs) {
  if (ofs < 0 || ofs >= b[/* position */1]) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Buffer.nth"
        ];
  } else {
    return b[/* buffer */0][ofs];
  }
}

function length(b) {
  return b[/* position */1];
}

function clear(b) {
  b[/* position */1] = 0;
  return /* () */0;
}

function reset(b) {
  b[/* position */1] = 0;
  b[/* buffer */0] = b[/* initial_buffer */3];
  b[/* length */2] = b[/* buffer */0].length;
  return /* () */0;
}

function resize(b, more) {
  var len = b[/* length */2];
  var new_len = len;
  while((b[/* position */1] + more | 0) > new_len) {
    new_len = (new_len << 1);
  };
  var new_buffer = Caml_string.caml_create_string(new_len);
  Bytes.blit(b[/* buffer */0], 0, new_buffer, 0, b[/* position */1]);
  b[/* buffer */0] = new_buffer;
  b[/* length */2] = new_len;
  return /* () */0;
}

function add_char(b, c) {
  var pos = b[/* position */1];
  if (pos >= b[/* length */2]) {
    resize(b, 1);
  }
  b[/* buffer */0][pos] = c;
  b[/* position */1] = pos + 1 | 0;
  return /* () */0;
}

function add_substring(b, s, offset, len) {
  if (offset < 0 || len < 0 || (offset + len | 0) > s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Buffer.add_substring/add_subbytes"
        ];
  }
  var new_position = b[/* position */1] + len | 0;
  if (new_position > b[/* length */2]) {
    resize(b, len);
  }
  Bytes.blit_string(s, offset, b[/* buffer */0], b[/* position */1], len);
  b[/* position */1] = new_position;
  return /* () */0;
}

function add_subbytes(b, s, offset, len) {
  return add_substring(b, Caml_string.bytes_to_string(s), offset, len);
}

function add_string(b, s) {
  var len = s.length;
  var new_position = b[/* position */1] + len | 0;
  if (new_position > b[/* length */2]) {
    resize(b, len);
  }
  Bytes.blit_string(s, 0, b[/* buffer */0], b[/* position */1], len);
  b[/* position */1] = new_position;
  return /* () */0;
}

function add_bytes(b, s) {
  return add_string(b, Caml_string.bytes_to_string(s));
}

function add_buffer(b, bs) {
  return add_subbytes(b, bs[/* buffer */0], 0, bs[/* position */1]);
}

function add_channel(b, ic, len) {
  if (len < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Buffer.add_channel"
        ];
  }
  if ((b[/* position */1] + len | 0) > b[/* length */2]) {
    resize(b, len);
  }
  Pervasives.really_input(ic, b[/* buffer */0], b[/* position */1], len);
  b[/* position */1] = b[/* position */1] + len | 0;
  return /* () */0;
}

function output_buffer(oc, b) {
  return Pervasives.output(oc, b[/* buffer */0], 0, b[/* position */1]);
}

function closing(param) {
  if (param !== 40) {
    if (param !== 123) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            [
              "buffer.ml",
              126,
              9
            ]
          ];
    } else {
      return /* "}" */125;
    }
  } else {
    return /* ")" */41;
  }
}

function advance_to_closing(opening, closing, k, s, start) {
  var _k = k;
  var _i = start;
  var lim = s.length;
  while(true) {
    var i = _i;
    var k$1 = _k;
    if (i >= lim) {
      throw Caml_builtin_exceptions.not_found;
    } else if (Caml_string.get(s, i) === opening) {
      _i = i + 1 | 0;
      _k = k$1 + 1 | 0;
      continue ;
      
    } else if (Caml_string.get(s, i) === closing) {
      if (k$1) {
        _i = i + 1 | 0;
        _k = k$1 - 1 | 0;
        continue ;
        
      } else {
        return i;
      }
    } else {
      _i = i + 1 | 0;
      continue ;
      
    }
  };
}

function advance_to_non_alpha(s, start) {
  var _i = start;
  var lim = s.length;
  while(true) {
    var i = _i;
    if (i >= lim) {
      return lim;
    } else {
      var match = Caml_string.get(s, i);
      var exit = 0;
      if (match >= 91) {
        if (match >= 97) {
          if (match >= 123) {
            return i;
          } else {
            exit = 1;
          }
        } else if (match !== 95) {
          return i;
        } else {
          exit = 1;
        }
      } else if (match >= 58) {
        if (match >= 65) {
          exit = 1;
        } else {
          return i;
        }
      } else if (match >= 48) {
        exit = 1;
      } else {
        return i;
      }
      if (exit === 1) {
        _i = i + 1 | 0;
        continue ;
        
      }
      
    }
  };
}

function find_ident(s, start, lim) {
  if (start >= lim) {
    throw Caml_builtin_exceptions.not_found;
  } else {
    var c = Caml_string.get(s, start);
    var exit = 0;
    if (c !== 40) {
      if (c !== 123) {
        var stop = advance_to_non_alpha(s, start + 1 | 0);
        return /* tuple */[
                $$String.sub(s, start, stop - start | 0),
                stop
              ];
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var new_start = start + 1 | 0;
      var stop$1 = advance_to_closing(c, closing(c), 0, s, new_start);
      return /* tuple */[
              $$String.sub(s, new_start, (stop$1 - start | 0) - 1 | 0),
              stop$1 + 1 | 0
            ];
    }
    
  }
}

function add_substitute(b, f, s) {
  var lim = s.length;
  var _previous = /* " " */32;
  var _i = 0;
  while(true) {
    var i = _i;
    var previous = _previous;
    if (i < lim) {
      var current = Caml_string.get(s, i);
      if (current !== 36) {
        if (previous === /* "\\" */92) {
          add_char(b, /* "\\" */92);
          add_char(b, current);
          _i = i + 1 | 0;
          _previous = /* " " */32;
          continue ;
          
        } else if (current !== 92) {
          add_char(b, current);
          _i = i + 1 | 0;
          _previous = current;
          continue ;
          
        } else {
          _i = i + 1 | 0;
          _previous = current;
          continue ;
          
        }
      } else if (previous === /* "\\" */92) {
        add_char(b, current);
        _i = i + 1 | 0;
        _previous = /* " " */32;
        continue ;
        
      } else {
        var j = i + 1 | 0;
        var match = find_ident(s, j, lim);
        add_string(b, Curry._1(f, match[0]));
        _i = match[1];
        _previous = /* " " */32;
        continue ;
        
      }
    } else if (previous === /* "\\" */92) {
      return add_char(b, previous);
    } else {
      return 0;
    }
  };
}

exports.create         = create;
exports.contents       = contents;
exports.to_bytes       = to_bytes;
exports.sub            = sub;
exports.blit           = blit;
exports.nth            = nth;
exports.length         = length;
exports.clear          = clear;
exports.reset          = reset;
exports.add_char       = add_char;
exports.add_string     = add_string;
exports.add_bytes      = add_bytes;
exports.add_substring  = add_substring;
exports.add_subbytes   = add_subbytes;
exports.add_substitute = add_substitute;
exports.add_buffer     = add_buffer;
exports.add_channel    = add_channel;
exports.output_buffer  = output_buffer;
/* No side effect */


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var List        = __webpack_require__(7);
var Bytes       = __webpack_require__(11);
var Caml_int32  = __webpack_require__(6);
var Caml_string = __webpack_require__(3);

function make(n, c) {
  return Caml_string.bytes_to_string(Bytes.make(n, c));
}

function init(n, f) {
  return Caml_string.bytes_to_string(Bytes.init(n, f));
}

function copy(s) {
  return Caml_string.bytes_to_string(Bytes.copy(Caml_string.bytes_of_string(s)));
}

function sub(s, ofs, len) {
  return Caml_string.bytes_to_string(Bytes.sub(Caml_string.bytes_of_string(s), ofs, len));
}

function concat(sep, l) {
  if (l) {
    var hd = l[0];
    var num = [0];
    var len = [0];
    List.iter((function (s) {
            num[0] = num[0] + 1 | 0;
            len[0] = len[0] + s.length | 0;
            return /* () */0;
          }), l);
    var r = Caml_string.caml_create_string(len[0] + Caml_int32.imul(sep.length, num[0] - 1 | 0) | 0);
    Caml_string.caml_blit_string(hd, 0, r, 0, hd.length);
    var pos = [hd.length];
    List.iter((function (s) {
            Caml_string.caml_blit_string(sep, 0, r, pos[0], sep.length);
            pos[0] = pos[0] + sep.length | 0;
            Caml_string.caml_blit_string(s, 0, r, pos[0], s.length);
            pos[0] = pos[0] + s.length | 0;
            return /* () */0;
          }), l[1]);
    return Caml_string.bytes_to_string(r);
  } else {
    return "";
  }
}

function iter(f, s) {
  return Bytes.iter(f, Caml_string.bytes_of_string(s));
}

function iteri(f, s) {
  return Bytes.iteri(f, Caml_string.bytes_of_string(s));
}

function map(f, s) {
  return Caml_string.bytes_to_string(Bytes.map(f, Caml_string.bytes_of_string(s)));
}

function mapi(f, s) {
  return Caml_string.bytes_to_string(Bytes.mapi(f, Caml_string.bytes_of_string(s)));
}

function is_space(param) {
  var switcher = param - 9 | 0;
  if (switcher > 4 || switcher < 0) {
    if (switcher !== 23) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  } else if (switcher !== 2) {
    return /* true */1;
  } else {
    return /* false */0;
  }
}

function trim(s) {
  if (s === "" || !(is_space(s.charCodeAt(0)) || is_space(s.charCodeAt(s.length - 1 | 0)))) {
    return s;
  } else {
    return Caml_string.bytes_to_string(Bytes.trim(Caml_string.bytes_of_string(s)));
  }
}

function escaped(s) {
  var needs_escape = function (_i) {
    while(true) {
      var i = _i;
      if (i >= s.length) {
        return /* false */0;
      } else {
        var match = s.charCodeAt(i);
        if (match >= 32) {
          var switcher = match - 34 | 0;
          if (switcher > 58 || switcher < 0) {
            if (switcher >= 93) {
              return /* true */1;
            } else {
              _i = i + 1 | 0;
              continue ;
              
            }
          } else if (switcher > 57 || switcher < 1) {
            return /* true */1;
          } else {
            _i = i + 1 | 0;
            continue ;
            
          }
        } else {
          return /* true */1;
        }
      }
    };
  };
  if (needs_escape(0)) {
    return Caml_string.bytes_to_string(Bytes.escaped(Caml_string.bytes_of_string(s)));
  } else {
    return s;
  }
}

function index(s, c) {
  return Bytes.index(Caml_string.bytes_of_string(s), c);
}

function rindex(s, c) {
  return Bytes.rindex(Caml_string.bytes_of_string(s), c);
}

function index_from(s, i, c) {
  return Bytes.index_from(Caml_string.bytes_of_string(s), i, c);
}

function rindex_from(s, i, c) {
  return Bytes.rindex_from(Caml_string.bytes_of_string(s), i, c);
}

function contains(s, c) {
  return Bytes.contains(Caml_string.bytes_of_string(s), c);
}

function contains_from(s, i, c) {
  return Bytes.contains_from(Caml_string.bytes_of_string(s), i, c);
}

function rcontains_from(s, i, c) {
  return Bytes.rcontains_from(Caml_string.bytes_of_string(s), i, c);
}

function uppercase(s) {
  return Caml_string.bytes_to_string(Bytes.uppercase(Caml_string.bytes_of_string(s)));
}

function lowercase(s) {
  return Caml_string.bytes_to_string(Bytes.lowercase(Caml_string.bytes_of_string(s)));
}

function capitalize(s) {
  return Caml_string.bytes_to_string(Bytes.capitalize(Caml_string.bytes_of_string(s)));
}

function uncapitalize(s) {
  return Caml_string.bytes_to_string(Bytes.uncapitalize(Caml_string.bytes_of_string(s)));
}

var compare = Caml_string.caml_string_compare;

var fill = Bytes.fill;

var blit = Bytes.blit_string;

exports.make           = make;
exports.init           = init;
exports.copy           = copy;
exports.sub            = sub;
exports.fill           = fill;
exports.blit           = blit;
exports.concat         = concat;
exports.iter           = iter;
exports.iteri          = iteri;
exports.map            = map;
exports.mapi           = mapi;
exports.trim           = trim;
exports.escaped        = escaped;
exports.index          = index;
exports.rindex         = rindex;
exports.index_from     = index_from;
exports.rindex_from    = rindex_from;
exports.contains       = contains;
exports.contains_from  = contains_from;
exports.rcontains_from = rcontains_from;
exports.uppercase      = uppercase;
exports.lowercase      = lowercase;
exports.capitalize     = capitalize;
exports.uncapitalize   = uncapitalize;
exports.compare        = compare;
/* No side effect */


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var Curry                   = __webpack_require__(1);
var Caml_builtin_exceptions = __webpack_require__(0);

function $caret(prim, prim$1) {
  return prim + prim$1;
}

var stdin = undefined;

var stdout = /* record */[
  /* buffer */"",
  /* output */(function (_, s) {
      var v = s.length - 1 | 0;
      if (( (typeof process !== "undefined") && process.stdout && process.stdout.write)) {
        return ( process.stdout.write )(s);
      } else if (s[v] === "\n") {
        console.log(s.slice(0, v));
        return /* () */0;
      } else {
        console.log(s);
        return /* () */0;
      }
    })
];

var stderr = /* record */[
  /* buffer */"",
  /* output */(function (_, s) {
      var v = s.length - 1 | 0;
      if (s[v] === "\n") {
        console.log(s.slice(0, v));
        return /* () */0;
      } else {
        console.log(s);
        return /* () */0;
      }
    })
];

function caml_ml_open_descriptor_in() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_ml_open_descriptor_in not implemented"
      ];
}

function caml_ml_open_descriptor_out() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_ml_open_descriptor_out not implemented"
      ];
}

function caml_ml_flush(oc) {
  if (oc[/* buffer */0] !== "") {
    Curry._2(oc[/* output */1], oc, oc[/* buffer */0]);
    oc[/* buffer */0] = "";
    return /* () */0;
  } else {
    return 0;
  }
}

var node_std_output = (function (s){
   return (typeof process !== "undefined") && process.stdout && (process.stdout.write(s), true);
   }
);

function caml_ml_output(oc, str, offset, len) {
  var str$1 = offset === 0 && len === str.length ? str : str.slice(offset, len);
  if (( (typeof process !== "undefined") && process.stdout && process.stdout.write ) && oc === stdout) {
    return ( process.stdout.write )(str$1);
  } else {
    var id = str$1.lastIndexOf("\n");
    if (id < 0) {
      oc[/* buffer */0] = oc[/* buffer */0] + str$1;
      return /* () */0;
    } else {
      oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(0, id + 1 | 0);
      caml_ml_flush(oc);
      oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(id + 1 | 0);
      return /* () */0;
    }
  }
}

function caml_ml_output_char(oc, $$char) {
  return caml_ml_output(oc, String.fromCharCode($$char), 0, 1);
}

function caml_ml_input(_, _$1, _$2, _$3) {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_ml_input ic not implemented"
      ];
}

function caml_ml_input_char() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_ml_input_char not implemnted"
      ];
}

function caml_ml_out_channels_list() {
  return /* :: */[
          stdout,
          /* :: */[
            stderr,
            /* [] */0
          ]
        ];
}

exports.$caret                      = $caret;
exports.stdin                       = stdin;
exports.stdout                      = stdout;
exports.stderr                      = stderr;
exports.caml_ml_open_descriptor_in  = caml_ml_open_descriptor_in;
exports.caml_ml_open_descriptor_out = caml_ml_open_descriptor_out;
exports.caml_ml_flush               = caml_ml_flush;
exports.node_std_output             = node_std_output;
exports.caml_ml_output              = caml_ml_output;
exports.caml_ml_output_char         = caml_ml_output_char;
exports.caml_ml_input               = caml_ml_input;
exports.caml_ml_input_char          = caml_ml_input_char;
exports.caml_ml_out_channels_list   = caml_ml_out_channels_list;
/* stdin Not a pure module */

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var Caml_builtin_exceptions = __webpack_require__(0);

function caml_sys_getenv(s) {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    var match$1 = match.env[s];
    if (match$1 !== undefined) {
      return match$1;
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  } else {
    throw Caml_builtin_exceptions.not_found;
  }
}

function caml_sys_time() {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    return match.uptime();
  } else {
    return -1;
  }
}

function caml_sys_random_seed() {
  return /* array */[((Date.now() | 0) ^ 4294967295) * Math.random() | 0];
}

function caml_sys_system_command() {
  return 127;
}

function caml_sys_getcwd() {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    return match.cwd();
  } else {
    return "/";
  }
}

function caml_sys_get_argv() {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    if (match.argv == null) {
      return /* tuple */[
              "",
              /* array */[""]
            ];
    } else {
      return /* tuple */[
              match.argv[0],
              match.argv
            ];
    }
  } else {
    return /* tuple */[
            "",
            /* array */[""]
          ];
  }
}

function caml_sys_exit(exit_code) {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    return match.exit(exit_code);
  } else {
    return /* () */0;
  }
}

function caml_sys_is_directory() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_sys_is_directory not implemented"
      ];
}

function caml_sys_file_exists() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_sys_file_exists not implemented"
      ];
}

exports.caml_sys_getenv         = caml_sys_getenv;
exports.caml_sys_time           = caml_sys_time;
exports.caml_sys_random_seed    = caml_sys_random_seed;
exports.caml_sys_system_command = caml_sys_system_command;
exports.caml_sys_getcwd         = caml_sys_getcwd;
exports.caml_sys_get_argv       = caml_sys_get_argv;
exports.caml_sys_exit           = caml_sys_exit;
exports.caml_sys_is_directory   = caml_sys_is_directory;
exports.caml_sys_file_exists    = caml_sys_file_exists;
/* No side effect */

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Curry                   = __webpack_require__(1);
var Caml_int32              = __webpack_require__(6);
var Caml_int64              = __webpack_require__(26);
var Caml_utils              = __webpack_require__(20);
var Caml_builtin_exceptions = __webpack_require__(0);

function caml_failwith(s) {
  throw [
        Caml_builtin_exceptions.failure,
        s
      ];
}

function parse_digit(c) {
  if (c >= 65) {
    if (c >= 97) {
      if (c >= 123) {
        return -1;
      } else {
        return c - 87 | 0;
      }
    } else if (c >= 91) {
      return -1;
    } else {
      return c - 55 | 0;
    }
  } else if (c > 57 || c < 48) {
    return -1;
  } else {
    return c - /* "0" */48 | 0;
  }
}

function int_of_string_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    case 3 : 
        return 2;
    
  }
}

function parse_sign_and_base(s) {
  var sign = 1;
  var base = /* Dec */2;
  var i = 0;
  if (s[i] === "-") {
    sign = -1;
    i = i + 1 | 0;
  }
  var match = s.charCodeAt(i);
  var match$1 = s.charCodeAt(i + 1 | 0);
  if (match === 48) {
    if (match$1 >= 89) {
      if (match$1 !== 98) {
        if (match$1 !== 111) {
          if (match$1 === 120) {
            base = /* Hex */1;
            i = i + 2 | 0;
          }
          
        } else {
          base = /* Oct */0;
          i = i + 2 | 0;
        }
      } else {
        base = /* Bin */3;
        i = i + 2 | 0;
      }
    } else if (match$1 !== 66) {
      if (match$1 !== 79) {
        if (match$1 >= 88) {
          base = /* Hex */1;
          i = i + 2 | 0;
        }
        
      } else {
        base = /* Oct */0;
        i = i + 2 | 0;
      }
    } else {
      base = /* Bin */3;
      i = i + 2 | 0;
    }
  }
  return /* tuple */[
          i,
          sign,
          base
        ];
}

function caml_int_of_string(s) {
  var match = parse_sign_and_base(s);
  var i = match[0];
  var base = int_of_string_base(match[2]);
  var threshold = 4294967295;
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = parse_digit(c);
  if (d < 0 || d >= base) {
    throw [
          Caml_builtin_exceptions.failure,
          "int_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
          
        } else {
          var v = parse_digit(a);
          if (v < 0 || v >= base) {
            throw [
                  Caml_builtin_exceptions.failure,
                  "int_of_string"
                ];
          } else {
            var acc$1 = base * acc + v;
            if (acc$1 > threshold) {
              throw [
                    Caml_builtin_exceptions.failure,
                    "int_of_string"
                  ];
            } else {
              _k = k + 1 | 0;
              _acc = acc$1;
              continue ;
              
            }
          }
        }
      }
    };
  };
  var res = match[1] * aux(d, i + 1 | 0);
  var or_res = res | 0;
  if (base === 10 && res !== or_res) {
    throw [
          Caml_builtin_exceptions.failure,
          "int_of_string"
        ];
  }
  return or_res;
}

function caml_int64_of_string(s) {
  var match = parse_sign_and_base(s);
  var hbase = match[2];
  var i = match[0];
  var base = Caml_int64.of_int32(int_of_string_base(hbase));
  var sign = Caml_int64.of_int32(match[1]);
  var threshold;
  switch (hbase) {
    case 0 : 
        threshold = /* int64 */[
          /* hi */536870911,
          /* lo */4294967295
        ];
        break;
    case 1 : 
        threshold = /* int64 */[
          /* hi */268435455,
          /* lo */4294967295
        ];
        break;
    case 2 : 
        threshold = /* int64 */[
          /* hi */429496729,
          /* lo */2576980377
        ];
        break;
    case 3 : 
        threshold = /* int64 */[
          /* hi */2147483647,
          /* lo */4294967295
        ];
        break;
    
  }
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = Caml_int64.of_int32(parse_digit(c));
  if (Caml_int64.lt(d, /* int64 */[
          /* hi */0,
          /* lo */0
        ]) || Caml_int64.ge(d, base)) {
    throw [
          Caml_builtin_exceptions.failure,
          "int64_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
          
        } else {
          var v = Caml_int64.of_int32(parse_digit(a));
          if (Caml_int64.lt(v, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ]) || Caml_int64.ge(v, base) || Caml_int64.gt(acc, threshold)) {
            throw [
                  Caml_builtin_exceptions.failure,
                  "int64_of_string"
                ];
          } else {
            var acc$1 = Caml_int64.add(Caml_int64.mul(base, acc), v);
            _k = k + 1 | 0;
            _acc = acc$1;
            continue ;
            
          }
        }
      }
    };
  };
  var res = Caml_int64.mul(sign, aux(d, i + 1 | 0));
  var or_res = Caml_int64.or_(res, /* int64 */[
        /* hi */0,
        /* lo */0
      ]);
  if (Caml_int64.eq(base, /* int64 */[
          /* hi */0,
          /* lo */10
        ]) && Caml_int64.neq(res, or_res)) {
    throw [
          Caml_builtin_exceptions.failure,
          "int64_of_string"
        ];
  }
  return or_res;
}

function int_of_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    
  }
}

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function parse_format(fmt) {
  var len = fmt.length;
  if (len > 31) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "format_int: format too long"
        ];
  }
  var f = /* record */[
    /* justify */"+",
    /* signstyle */"-",
    /* filter */" ",
    /* alternate : false */0,
    /* base : Dec */2,
    /* signedconv : false */0,
    /* width */0,
    /* uppercase : false */0,
    /* sign */1,
    /* prec */-1,
    /* conv */"f"
  ];
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= len) {
      return f;
    } else {
      var c = fmt.charCodeAt(i);
      var exit = 0;
      if (c >= 69) {
        if (c >= 88) {
          if (c >= 121) {
            exit = 1;
          } else {
            switch (c - 88 | 0) {
              case 0 : 
                  f[/* base */4] = /* Hex */1;
                  f[/* uppercase */7] = /* true */1;
                  _i = i + 1 | 0;
                  continue ;
                  case 13 : 
              case 14 : 
              case 15 : 
                  exit = 5;
                  break;
              case 12 : 
              case 17 : 
                  exit = 4;
                  break;
              case 23 : 
                  f[/* base */4] = /* Oct */0;
                  _i = i + 1 | 0;
                  continue ;
                  case 29 : 
                  f[/* base */4] = /* Dec */2;
                  _i = i + 1 | 0;
                  continue ;
                  case 1 : 
              case 2 : 
              case 3 : 
              case 4 : 
              case 5 : 
              case 6 : 
              case 7 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 16 : 
              case 18 : 
              case 19 : 
              case 20 : 
              case 21 : 
              case 22 : 
              case 24 : 
              case 25 : 
              case 26 : 
              case 27 : 
              case 28 : 
              case 30 : 
              case 31 : 
                  exit = 1;
                  break;
              case 32 : 
                  f[/* base */4] = /* Hex */1;
                  _i = i + 1 | 0;
                  continue ;
                  
            }
          }
        } else if (c >= 72) {
          exit = 1;
        } else {
          f[/* signedconv */5] = /* true */1;
          f[/* uppercase */7] = /* true */1;
          f[/* conv */10] = String.fromCharCode(lowercase(c));
          _i = i + 1 | 0;
          continue ;
          
        }
      } else {
        var switcher = c - 32 | 0;
        if (switcher > 25 || switcher < 0) {
          exit = 1;
        } else {
          switch (switcher) {
            case 3 : 
                f[/* alternate */3] = /* true */1;
                _i = i + 1 | 0;
                continue ;
                case 0 : 
            case 11 : 
                exit = 2;
                break;
            case 13 : 
                f[/* justify */0] = "-";
                _i = i + 1 | 0;
                continue ;
                case 14 : 
                f[/* prec */9] = 0;
                var j = i + 1 | 0;
                while((function(j){
                    return function () {
                      var w = fmt.charCodeAt(j) - /* "0" */48 | 0;
                      return +(w >= 0 && w <= 9);
                    }
                    }(j))()) {
                  f[/* prec */9] = (Caml_int32.imul(f[/* prec */9], 10) + fmt.charCodeAt(j) | 0) - /* "0" */48 | 0;
                  j = j + 1 | 0;
                };
                _i = j;
                continue ;
                case 1 : 
            case 2 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 12 : 
            case 15 : 
                exit = 1;
                break;
            case 16 : 
                f[/* filter */2] = "0";
                _i = i + 1 | 0;
                continue ;
                case 17 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 23 : 
            case 24 : 
            case 25 : 
                exit = 3;
                break;
            
          }
        }
      }
      switch (exit) {
        case 1 : 
            _i = i + 1 | 0;
            continue ;
            case 2 : 
            f[/* signstyle */1] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            case 3 : 
            f[/* width */6] = 0;
            var j$1 = i;
            while((function(j$1){
                return function () {
                  var w = fmt.charCodeAt(j$1) - /* "0" */48 | 0;
                  return +(w >= 0 && w <= 9);
                }
                }(j$1))()) {
              f[/* width */6] = (Caml_int32.imul(f[/* width */6], 10) + fmt.charCodeAt(j$1) | 0) - /* "0" */48 | 0;
              j$1 = j$1 + 1 | 0;
            };
            _i = j$1;
            continue ;
            case 4 : 
            f[/* signedconv */5] = /* true */1;
            f[/* base */4] = /* Dec */2;
            _i = i + 1 | 0;
            continue ;
            case 5 : 
            f[/* signedconv */5] = /* true */1;
            f[/* conv */10] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            
      }
    }
  };
}

function finish_formatting(param, rawbuffer) {
  var justify = param[/* justify */0];
  var signstyle = param[/* signstyle */1];
  var filter = param[/* filter */2];
  var alternate = param[/* alternate */3];
  var base = param[/* base */4];
  var signedconv = param[/* signedconv */5];
  var width = param[/* width */6];
  var uppercase = param[/* uppercase */7];
  var sign = param[/* sign */8];
  var len = rawbuffer.length;
  if (signedconv && (sign < 0 || signstyle !== "-")) {
    len = len + 1 | 0;
  }
  if (alternate) {
    if (base) {
      if (base === /* Hex */1) {
        len = len + 2 | 0;
      }
      
    } else {
      len = len + 1 | 0;
    }
  }
  var buffer = "";
  if (justify === "+" && filter === " ") {
    for(var i = len ,i_finish = width - 1 | 0; i <= i_finish; ++i){
      buffer = buffer + filter;
    }
  }
  if (signedconv) {
    if (sign < 0) {
      buffer = buffer + "-";
    } else if (signstyle !== "-") {
      buffer = buffer + signstyle;
    }
    
  }
  if (alternate && base === /* Oct */0) {
    buffer = buffer + "0";
  }
  if (alternate && base === /* Hex */1) {
    buffer = buffer + "0x";
  }
  if (justify === "+" && filter === "0") {
    for(var i$1 = len ,i_finish$1 = width - 1 | 0; i$1 <= i_finish$1; ++i$1){
      buffer = buffer + filter;
    }
  }
  buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
  if (justify === "-") {
    for(var i$2 = len ,i_finish$2 = width - 1 | 0; i$2 <= i_finish$2; ++i$2){
      buffer = buffer + " ";
    }
  }
  return buffer;
}

function caml_format_int(fmt, i) {
  if (fmt === "%d") {
    return String(i);
  } else {
    var f = parse_format(fmt);
    var f$1 = f;
    var i$1 = i;
    var i$2 = i$1 < 0 ? (
        f$1[/* signedconv */5] ? (f$1[/* sign */8] = -1, -i$1) : (i$1 >>> 0)
      ) : i$1;
    var s = i$2.toString(int_of_base(f$1[/* base */4]));
    if (f$1[/* prec */9] >= 0) {
      f$1[/* filter */2] = " ";
      var n = f$1[/* prec */9] - s.length | 0;
      if (n > 0) {
        s = Caml_utils.repeat(n, "0") + s;
      }
      
    }
    return finish_formatting(f$1, s);
  }
}

function caml_int64_format(fmt, x) {
  var f = parse_format(fmt);
  var x$1 = f[/* signedconv */5] && Caml_int64.lt(x, /* int64 */[
        /* hi */0,
        /* lo */0
      ]) ? (f[/* sign */8] = -1, Caml_int64.neg(x)) : x;
  var s = "";
  var match = f[/* base */4];
  switch (match) {
    case 0 : 
        var wbase = /* int64 */[
          /* hi */0,
          /* lo */8
        ];
        var cvtbl = "01234567";
        if (Caml_int64.lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y = Caml_int64.discard_sign(x$1);
          var match$1 = Caml_int64.div_mod(y, wbase);
          var quotient = Caml_int64.add(/* int64 */[
                /* hi */268435456,
                /* lo */0
              ], match$1[0]);
          var modulus = match$1[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          while(Caml_int64.neq(quotient, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$2 = Caml_int64.div_mod(quotient, wbase);
            quotient = match$2[0];
            modulus = match$2[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          };
        } else {
          var match$3 = Caml_int64.div_mod(x$1, wbase);
          var quotient$1 = match$3[0];
          var modulus$1 = match$3[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          while(Caml_int64.neq(quotient$1, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$4 = Caml_int64.div_mod(quotient$1, wbase);
            quotient$1 = match$4[0];
            modulus$1 = match$4[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          };
        }
        break;
    case 1 : 
        s = Caml_int64.to_hex(x$1) + s;
        break;
    case 2 : 
        var wbase$1 = /* int64 */[
          /* hi */0,
          /* lo */10
        ];
        var cvtbl$1 = "0123456789";
        if (Caml_int64.lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y$1 = Caml_int64.discard_sign(x$1);
          var match$5 = Caml_int64.div_mod(y$1, wbase$1);
          var match$6 = Caml_int64.div_mod(Caml_int64.add(/* int64 */[
                    /* hi */0,
                    /* lo */8
                  ], match$5[1]), wbase$1);
          var quotient$2 = Caml_int64.add(Caml_int64.add(/* int64 */[
                    /* hi */214748364,
                    /* lo */3435973836
                  ], match$5[0]), match$6[0]);
          var modulus$2 = match$6[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          while(Caml_int64.neq(quotient$2, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$7 = Caml_int64.div_mod(quotient$2, wbase$1);
            quotient$2 = match$7[0];
            modulus$2 = match$7[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          };
        } else {
          var match$8 = Caml_int64.div_mod(x$1, wbase$1);
          var quotient$3 = match$8[0];
          var modulus$3 = match$8[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          while(Caml_int64.neq(quotient$3, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$9 = Caml_int64.div_mod(quotient$3, wbase$1);
            quotient$3 = match$9[0];
            modulus$3 = match$9[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          };
        }
        break;
    
  }
  if (f[/* prec */9] >= 0) {
    f[/* filter */2] = " ";
    var n = f[/* prec */9] - s.length | 0;
    if (n > 0) {
      s = Caml_utils.repeat(n, "0") + s;
    }
    
  }
  return finish_formatting(f, s);
}

function caml_format_float(fmt, x) {
  var f = parse_format(fmt);
  var prec = f[/* prec */9] < 0 ? 6 : f[/* prec */9];
  var x$1 = x < 0 ? (f[/* sign */8] = -1, -x) : x;
  var s = "";
  if (isNaN(x$1)) {
    s = "nan";
    f[/* filter */2] = " ";
  } else if (isFinite(x$1)) {
    var match = f[/* conv */10];
    switch (match) {
      case "e" : 
          s = x$1.toExponential(prec);
          var i = s.length;
          if (s[i - 3 | 0] === "e") {
            s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
          }
          break;
      case "f" : 
          s = x$1.toFixed(prec);
          break;
      case "g" : 
          var prec$1 = prec !== 0 ? prec : 1;
          s = x$1.toExponential(prec$1 - 1 | 0);
          var j = s.indexOf("e");
          var exp = Number(s.slice(j + 1 | 0)) | 0;
          if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
            var i$1 = j - 1 | 0;
            while(s[i$1] === "0") {
              i$1 = i$1 - 1 | 0;
            };
            if (s[i$1] === ".") {
              i$1 = i$1 - 1 | 0;
            }
            s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
            var i$2 = s.length;
            if (s[i$2 - 3 | 0] === "e") {
              s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
            }
            
          } else {
            var p = prec$1;
            if (exp < 0) {
              p = p - (exp + 1 | 0) | 0;
              s = x$1.toFixed(p);
            } else {
              while((function () {
                      s = x$1.toFixed(p);
                      return +(s.length > (prec$1 + 1 | 0));
                    })()) {
                p = p - 1 | 0;
              };
            }
            if (p !== 0) {
              var k = s.length - 1 | 0;
              while(s[k] === "0") {
                k = k - 1 | 0;
              };
              if (s[k] === ".") {
                k = k - 1 | 0;
              }
              s = s.slice(0, k + 1 | 0);
            }
            
          }
          break;
      default:
        
    }
  } else {
    s = "inf";
    f[/* filter */2] = " ";
  }
  return finish_formatting(f, s);
}

var float_of_string = (
  function (s, caml_failwith) {
    var res = +s;
    if ((s.length > 0) && (res === res))
        return res;
    s = s.replace(/_/g, "");
    res = +s;
    if (((s.length > 0) && (res === res)) || /^[+-]?nan$/i.test(s)) {
        return res;
    }
    ;
    if (/^ *0x[0-9a-f_]+p[+-]?[0-9_]+/i.test(s)) {
        var pidx = s.indexOf('p');
        pidx = (pidx == -1) ? s.indexOf('P') : pidx;
        var exp = +s.substring(pidx + 1);
        res = +s.substring(0, pidx);
        return res * Math.pow(2, exp);
    }
    if (/^\+?inf(inity)?$/i.test(s))
        return Infinity;
    if (/^-inf(inity)?$/i.test(s))
        return -Infinity;
    caml_failwith("float_of_string");
}

);

function caml_float_of_string(s) {
  return Curry._2(float_of_string, s, caml_failwith);
}

var caml_nativeint_format = caml_format_int;

var caml_int32_format = caml_format_int;

var caml_int32_of_string = caml_int_of_string;

var caml_nativeint_of_string = caml_int_of_string;

exports.caml_format_float        = caml_format_float;
exports.caml_format_int          = caml_format_int;
exports.caml_nativeint_format    = caml_nativeint_format;
exports.caml_int32_format        = caml_int32_format;
exports.caml_float_of_string     = caml_float_of_string;
exports.caml_int64_format        = caml_int64_format;
exports.caml_int_of_string       = caml_int_of_string;
exports.caml_int32_of_string     = caml_int32_of_string;
exports.caml_int64_of_string     = caml_int64_of_string;
exports.caml_nativeint_of_string = caml_nativeint_of_string;
/* float_of_string Not a pure module */


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var not_implemented = (function (s){ throw new Error(s)});

exports.not_implemented = not_implemented;
/* not_implemented Not a pure module */


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Curry              = __webpack_require__(1);
var Buffer             = __webpack_require__(12);
var Pervasives         = __webpack_require__(2);
var CamlinternalFormat = __webpack_require__(30);

function kfprintf(k, o, param) {
  return CamlinternalFormat.make_printf((function (o, acc) {
                CamlinternalFormat.output_acc(o, acc);
                return Curry._1(k, o);
              }), o, /* End_of_acc */0, param[0]);
}

function kbprintf(k, b, param) {
  return CamlinternalFormat.make_printf((function (b, acc) {
                CamlinternalFormat.bufput_acc(b, acc);
                return Curry._1(k, b);
              }), b, /* End_of_acc */0, param[0]);
}

function ikfprintf(k, oc, param) {
  return CamlinternalFormat.make_printf((function (oc, _) {
                return Curry._1(k, oc);
              }), oc, /* End_of_acc */0, param[0]);
}

function fprintf(oc, fmt) {
  return kfprintf((function () {
                return /* () */0;
              }), oc, fmt);
}

function bprintf(b, fmt) {
  return kbprintf((function () {
                return /* () */0;
              }), b, fmt);
}

function ifprintf(oc, fmt) {
  return ikfprintf((function () {
                return /* () */0;
              }), oc, fmt);
}

function printf(fmt) {
  return fprintf(Pervasives.stdout, fmt);
}

function eprintf(fmt) {
  return fprintf(Pervasives.stderr, fmt);
}

function ksprintf(k, param) {
  var k$prime = function (_, acc) {
    var buf = Buffer.create(64);
    CamlinternalFormat.strput_acc(buf, acc);
    return Curry._1(k, Buffer.contents(buf));
  };
  return CamlinternalFormat.make_printf(k$prime, /* () */0, /* End_of_acc */0, param[0]);
}

function sprintf(fmt) {
  return ksprintf((function (s) {
                return s;
              }), fmt);
}

var kprintf = ksprintf;

exports.fprintf   = fprintf;
exports.printf    = printf;
exports.eprintf   = eprintf;
exports.sprintf   = sprintf;
exports.bprintf   = bprintf;
exports.ifprintf  = ifprintf;
exports.kfprintf  = kfprintf;
exports.ikfprintf = ikfprintf;
exports.ksprintf  = ksprintf;
exports.kbprintf  = kbprintf;
exports.kprintf   = kprintf;
/* No side effect */


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var repeat = ( (String.prototype.repeat && function (count,self){return self.repeat(count)}) ||
                                                  function(count , self) {
        if (self.length == 0 || count == 0) {
            return '';
        }
        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (self.length * count >= 1 << 28) {
            throw new RangeError('repeat count must not overflow maximum string size');
        }
        var rpt = '';
        for (;;) {
            if ((count & 1) == 1) {
                rpt += self;
            }
            count >>>= 1;
            if (count == 0) {
                break;
            }
            self += self;
        }
        return rpt;
    }
);

exports.repeat = repeat;
/* repeat Not a pure module */


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Block = __webpack_require__(5);

function erase_rel(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          return /* Char_ty */Block.__(0, [erase_rel(param[0])]);
      case 1 : 
          return /* String_ty */Block.__(1, [erase_rel(param[0])]);
      case 2 : 
          return /* Int_ty */Block.__(2, [erase_rel(param[0])]);
      case 3 : 
          return /* Int32_ty */Block.__(3, [erase_rel(param[0])]);
      case 4 : 
          return /* Nativeint_ty */Block.__(4, [erase_rel(param[0])]);
      case 5 : 
          return /* Int64_ty */Block.__(5, [erase_rel(param[0])]);
      case 6 : 
          return /* Float_ty */Block.__(6, [erase_rel(param[0])]);
      case 7 : 
          return /* Bool_ty */Block.__(7, [erase_rel(param[0])]);
      case 8 : 
          return /* Format_arg_ty */Block.__(8, [
                    param[0],
                    erase_rel(param[1])
                  ]);
      case 9 : 
          var ty1 = param[0];
          return /* Format_subst_ty */Block.__(9, [
                    ty1,
                    ty1,
                    erase_rel(param[2])
                  ]);
      case 10 : 
          return /* Alpha_ty */Block.__(10, [erase_rel(param[0])]);
      case 11 : 
          return /* Theta_ty */Block.__(11, [erase_rel(param[0])]);
      case 12 : 
          return /* Any_ty */Block.__(12, [erase_rel(param[0])]);
      case 13 : 
          return /* Reader_ty */Block.__(13, [erase_rel(param[0])]);
      case 14 : 
          return /* Ignored_reader_ty */Block.__(14, [erase_rel(param[0])]);
      
    }
  }
}

function concat_fmtty(fmtty1, fmtty2) {
  if (typeof fmtty1 === "number") {
    return fmtty2;
  } else {
    switch (fmtty1.tag | 0) {
      case 0 : 
          return /* Char_ty */Block.__(0, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 1 : 
          return /* String_ty */Block.__(1, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 2 : 
          return /* Int_ty */Block.__(2, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 3 : 
          return /* Int32_ty */Block.__(3, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 4 : 
          return /* Nativeint_ty */Block.__(4, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 5 : 
          return /* Int64_ty */Block.__(5, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 6 : 
          return /* Float_ty */Block.__(6, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 7 : 
          return /* Bool_ty */Block.__(7, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 8 : 
          return /* Format_arg_ty */Block.__(8, [
                    fmtty1[0],
                    concat_fmtty(fmtty1[1], fmtty2)
                  ]);
      case 9 : 
          return /* Format_subst_ty */Block.__(9, [
                    fmtty1[0],
                    fmtty1[1],
                    concat_fmtty(fmtty1[2], fmtty2)
                  ]);
      case 10 : 
          return /* Alpha_ty */Block.__(10, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 11 : 
          return /* Theta_ty */Block.__(11, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 12 : 
          return /* Any_ty */Block.__(12, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 13 : 
          return /* Reader_ty */Block.__(13, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 14 : 
          return /* Ignored_reader_ty */Block.__(14, [concat_fmtty(fmtty1[0], fmtty2)]);
      
    }
  }
}

function concat_fmt(fmt1, fmt2) {
  if (typeof fmt1 === "number") {
    return fmt2;
  } else {
    switch (fmt1.tag | 0) {
      case 0 : 
          return /* Char */Block.__(0, [concat_fmt(fmt1[0], fmt2)]);
      case 1 : 
          return /* Caml_char */Block.__(1, [concat_fmt(fmt1[0], fmt2)]);
      case 2 : 
          return /* String */Block.__(2, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 3 : 
          return /* Caml_string */Block.__(3, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 4 : 
          return /* Int */Block.__(4, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 5 : 
          return /* Int32 */Block.__(5, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 6 : 
          return /* Nativeint */Block.__(6, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 7 : 
          return /* Int64 */Block.__(7, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 8 : 
          return /* Float */Block.__(8, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 9 : 
          return /* Bool */Block.__(9, [concat_fmt(fmt1[0], fmt2)]);
      case 10 : 
          return /* Flush */Block.__(10, [concat_fmt(fmt1[0], fmt2)]);
      case 11 : 
          return /* String_literal */Block.__(11, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 12 : 
          return /* Char_literal */Block.__(12, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 13 : 
          return /* Format_arg */Block.__(13, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 14 : 
          return /* Format_subst */Block.__(14, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 15 : 
          return /* Alpha */Block.__(15, [concat_fmt(fmt1[0], fmt2)]);
      case 16 : 
          return /* Theta */Block.__(16, [concat_fmt(fmt1[0], fmt2)]);
      case 17 : 
          return /* Formatting_lit */Block.__(17, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 18 : 
          return /* Formatting_gen */Block.__(18, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 19 : 
          return /* Reader */Block.__(19, [concat_fmt(fmt1[0], fmt2)]);
      case 20 : 
          return /* Scan_char_set */Block.__(20, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 21 : 
          return /* Scan_get_counter */Block.__(21, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 22 : 
          return /* Scan_next_char */Block.__(22, [concat_fmt(fmt1[0], fmt2)]);
      case 23 : 
          return /* Ignored_param */Block.__(23, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 24 : 
          return /* Custom */Block.__(24, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      
    }
  }
}

exports.concat_fmtty = concat_fmtty;
exports.erase_rel    = erase_rel;
exports.concat_fmt   = concat_fmt;
/* No side effect */


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_sys        = __webpack_require__(15);
var Caml_exceptions = __webpack_require__(9);

var is_js = /* true */1;

var match = Caml_sys.caml_sys_get_argv(/* () */0);

var big_endian = /* false */0;

var unix = /* true */1;

var win32 = /* false */0;

var cygwin = /* false */0;

var max_array_length = 2147483647;

var max_string_length = 2147483647;

var interactive = [/* false */0];

function set_signal(_, _$1) {
  return /* () */0;
}

var Break = Caml_exceptions.create("Sys.Break");

function catch_break() {
  return /* () */0;
}

var argv = match[1];

var executable_name = match[0];

var os_type = "Unix";

var word_size = 32;

var sigabrt = -1;

var sigalrm = -2;

var sigfpe = -3;

var sighup = -4;

var sigill = -5;

var sigint = -6;

var sigkill = -7;

var sigpipe = -8;

var sigquit = -9;

var sigsegv = -10;

var sigterm = -11;

var sigusr1 = -12;

var sigusr2 = -13;

var sigchld = -14;

var sigcont = -15;

var sigstop = -16;

var sigtstp = -17;

var sigttin = -18;

var sigttou = -19;

var sigvtalrm = -20;

var sigprof = -21;

var ocaml_version = "4.02.3+dev1-2015-07-10";

exports.argv              = argv;
exports.executable_name   = executable_name;
exports.interactive       = interactive;
exports.os_type           = os_type;
exports.unix              = unix;
exports.win32             = win32;
exports.cygwin            = cygwin;
exports.word_size         = word_size;
exports.big_endian        = big_endian;
exports.is_js             = is_js;
exports.max_string_length = max_string_length;
exports.max_array_length  = max_array_length;
exports.set_signal        = set_signal;
exports.sigabrt           = sigabrt;
exports.sigalrm           = sigalrm;
exports.sigfpe            = sigfpe;
exports.sighup            = sighup;
exports.sigill            = sigill;
exports.sigint            = sigint;
exports.sigkill           = sigkill;
exports.sigpipe           = sigpipe;
exports.sigquit           = sigquit;
exports.sigsegv           = sigsegv;
exports.sigterm           = sigterm;
exports.sigusr1           = sigusr1;
exports.sigusr2           = sigusr2;
exports.sigchld           = sigchld;
exports.sigcont           = sigcont;
exports.sigstop           = sigstop;
exports.sigtstp           = sigtstp;
exports.sigttin           = sigttin;
exports.sigttou           = sigttou;
exports.sigvtalrm         = sigvtalrm;
exports.sigprof           = sigprof;
exports.Break             = Break;
exports.catch_break       = catch_break;
exports.ocaml_version     = ocaml_version;
/* No side effect */


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_string             = __webpack_require__(3);
var Caml_builtin_exceptions = __webpack_require__(0);

function chr(n) {
  if (n < 0 || n > 255) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Char.chr"
        ];
  } else {
    return n;
  }
}

function escaped(c) {
  var exit = 0;
  if (c >= 40) {
    if (c !== 92) {
      exit = c >= 127 ? 1 : 2;
    } else {
      return "\\\\";
    }
  } else if (c >= 32) {
    if (c >= 39) {
      return "\\'";
    } else {
      exit = 2;
    }
  } else if (c >= 14) {
    exit = 1;
  } else {
    switch (c) {
      case 8 : 
          return "\\b";
      case 9 : 
          return "\\t";
      case 10 : 
          return "\\n";
      case 0 : 
      case 1 : 
      case 2 : 
      case 3 : 
      case 4 : 
      case 5 : 
      case 6 : 
      case 7 : 
      case 11 : 
      case 12 : 
          exit = 1;
          break;
      case 13 : 
          return "\\r";
      
    }
  }
  switch (exit) {
    case 1 : 
        var s = new Array(4);
        s[0] = /* "\\" */92;
        s[1] = 48 + (c / 100 | 0) | 0;
        s[2] = 48 + (c / 10 | 0) % 10 | 0;
        s[3] = 48 + c % 10 | 0;
        return Caml_string.bytes_to_string(s);
    case 2 : 
        var s$1 = new Array(1);
        s$1[0] = c;
        return Caml_string.bytes_to_string(s$1);
    
  }
}

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function uppercase(c) {
  if (c >= /* "a" */97 && c <= /* "z" */122 || c >= /* "\224" */224 && c <= /* "\246" */246 || c >= /* "\248" */248 && c <= /* "\254" */254) {
    return c - 32 | 0;
  } else {
    return c;
  }
}

function compare(c1, c2) {
  return c1 - c2 | 0;
}

exports.chr       = chr;
exports.escaped   = escaped;
exports.lowercase = lowercase;
exports.uppercase = uppercase;
exports.compare   = compare;
/* No side effect */


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Curry                   = __webpack_require__(1);
var Js_exn                  = __webpack_require__(10);
var Caml_array              = __webpack_require__(8);
var Caml_exceptions         = __webpack_require__(9);
var Caml_builtin_exceptions = __webpack_require__(0);

function init(l, f) {
  if (l) {
    if (l < 0) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Array.init"
          ];
    } else {
      var res = Caml_array.caml_make_vect(l, Curry._1(f, 0));
      for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
        res[i] = Curry._1(f, i);
      }
      return res;
    }
  } else {
    return /* array */[];
  }
}

function make_matrix(sx, sy, init) {
  var res = Caml_array.caml_make_vect(sx, /* array */[]);
  for(var x = 0 ,x_finish = sx - 1 | 0; x <= x_finish; ++x){
    res[x] = Caml_array.caml_make_vect(sy, init);
  }
  return res;
}

function copy(a) {
  var l = a.length;
  if (l) {
    return Caml_array.caml_array_sub(a, 0, l);
  } else {
    return /* array */[];
  }
}

function append(a1, a2) {
  var l1 = a1.length;
  if (l1) {
    if (a2.length) {
      return a1.concat(a2);
    } else {
      return Caml_array.caml_array_sub(a1, 0, l1);
    }
  } else {
    return copy(a2);
  }
}

function sub(a, ofs, len) {
  if (len < 0 || ofs > (a.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Array.sub"
        ];
  } else {
    return Caml_array.caml_array_sub(a, ofs, len);
  }
}

function fill(a, ofs, len, v) {
  if (ofs < 0 || len < 0 || ofs > (a.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Array.fill"
        ];
  } else {
    for(var i = ofs ,i_finish = (ofs + len | 0) - 1 | 0; i <= i_finish; ++i){
      a[i] = v;
    }
    return /* () */0;
  }
}

function blit(a1, ofs1, a2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (a1.length - len | 0) || ofs2 < 0 || ofs2 > (a2.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Array.blit"
        ];
  } else {
    return Caml_array.caml_array_blit(a1, ofs1, a2, ofs2, len);
  }
}

function iter(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    Curry._1(f, a[i]);
  }
  return /* () */0;
}

function map(f, a) {
  var l = a.length;
  if (l) {
    var r = Caml_array.caml_make_vect(l, Curry._1(f, a[0]));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = Curry._1(f, a[i]);
    }
    return r;
  } else {
    return /* array */[];
  }
}

function iteri(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    Curry._2(f, i, a[i]);
  }
  return /* () */0;
}

function mapi(f, a) {
  var l = a.length;
  if (l) {
    var r = Caml_array.caml_make_vect(l, Curry._2(f, 0, a[0]));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = Curry._2(f, i, a[i]);
    }
    return r;
  } else {
    return /* array */[];
  }
}

function to_list(a) {
  var _i = a.length - 1 | 0;
  var _res = /* [] */0;
  while(true) {
    var res = _res;
    var i = _i;
    if (i < 0) {
      return res;
    } else {
      _res = /* :: */[
        a[i],
        res
      ];
      _i = i - 1 | 0;
      continue ;
      
    }
  };
}

function list_length(_accu, _param) {
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[1];
      _accu = accu + 1 | 0;
      continue ;
      
    } else {
      return accu;
    }
  };
}

function of_list(l) {
  if (l) {
    var a = Caml_array.caml_make_vect(list_length(0, l), l[0]);
    var _i = 1;
    var _param = l[1];
    while(true) {
      var param = _param;
      var i = _i;
      if (param) {
        a[i] = param[0];
        _param = param[1];
        _i = i + 1 | 0;
        continue ;
        
      } else {
        return a;
      }
    };
  } else {
    return /* array */[];
  }
}

function fold_left(f, x, a) {
  var r = x;
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    r = Curry._2(f, r, a[i]);
  }
  return r;
}

function fold_right(f, a, x) {
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = Curry._2(f, a[i], r);
  }
  return r;
}

var Bottom = Caml_exceptions.create("Array.Bottom");

function sort(cmp, a) {
  var maxson = function (l, i) {
    var i31 = ((i + i | 0) + i | 0) + 1 | 0;
    var x = i31;
    if ((i31 + 2 | 0) < l) {
      if (Curry._2(cmp, Caml_array.caml_array_get(a, i31), Caml_array.caml_array_get(a, i31 + 1 | 0)) < 0) {
        x = i31 + 1 | 0;
      }
      if (Curry._2(cmp, Caml_array.caml_array_get(a, x), Caml_array.caml_array_get(a, i31 + 2 | 0)) < 0) {
        x = i31 + 2 | 0;
      }
      return x;
    } else if ((i31 + 1 | 0) < l && Curry._2(cmp, Caml_array.caml_array_get(a, i31), Caml_array.caml_array_get(a, i31 + 1 | 0)) < 0) {
      return i31 + 1 | 0;
    } else if (i31 < l) {
      return i31;
    } else {
      throw [
            Bottom,
            i
          ];
    }
  };
  var trickle = function (l, i, e) {
    try {
      var l$1 = l;
      var _i = i;
      var e$1 = e;
      while(true) {
        var i$1 = _i;
        var j = maxson(l$1, i$1);
        if (Curry._2(cmp, Caml_array.caml_array_get(a, j), e$1) > 0) {
          Caml_array.caml_array_set(a, i$1, Caml_array.caml_array_get(a, j));
          _i = j;
          continue ;
          
        } else {
          return Caml_array.caml_array_set(a, i$1, e$1);
        }
      };
    }
    catch (raw_exn){
      var exn = Js_exn.internalToOCamlException(raw_exn);
      if (exn[0] === Bottom) {
        return Caml_array.caml_array_set(a, exn[1], e);
      } else {
        throw exn;
      }
    }
  };
  var bubble = function (l, i) {
    try {
      var l$1 = l;
      var _i = i;
      while(true) {
        var i$1 = _i;
        var j = maxson(l$1, i$1);
        Caml_array.caml_array_set(a, i$1, Caml_array.caml_array_get(a, j));
        _i = j;
        continue ;
        
      };
    }
    catch (raw_exn){
      var exn = Js_exn.internalToOCamlException(raw_exn);
      if (exn[0] === Bottom) {
        return exn[1];
      } else {
        throw exn;
      }
    }
  };
  var trickleup = function (_i, e) {
    while(true) {
      var i = _i;
      var father = (i - 1 | 0) / 3 | 0;
      if (i === father) {
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "array.ml",
                168,
                4
              ]
            ];
      }
      if (Curry._2(cmp, Caml_array.caml_array_get(a, father), e) < 0) {
        Caml_array.caml_array_set(a, i, Caml_array.caml_array_get(a, father));
        if (father > 0) {
          _i = father;
          continue ;
          
        } else {
          return Caml_array.caml_array_set(a, 0, e);
        }
      } else {
        return Caml_array.caml_array_set(a, i, e);
      }
    };
  };
  var l = a.length;
  for(var i = ((l + 1 | 0) / 3 | 0) - 1 | 0; i >= 0; --i){
    trickle(l, i, Caml_array.caml_array_get(a, i));
  }
  for(var i$1 = l - 1 | 0; i$1 >= 2; --i$1){
    var e = Caml_array.caml_array_get(a, i$1);
    Caml_array.caml_array_set(a, i$1, Caml_array.caml_array_get(a, 0));
    trickleup(bubble(i$1, 0), e);
  }
  if (l > 1) {
    var e$1 = Caml_array.caml_array_get(a, 1);
    Caml_array.caml_array_set(a, 1, Caml_array.caml_array_get(a, 0));
    return Caml_array.caml_array_set(a, 0, e$1);
  } else {
    return 0;
  }
}

function stable_sort(cmp, a) {
  var merge = function (src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs) {
    var src1r = src1ofs + src1len | 0;
    var src2r = src2ofs + src2len | 0;
    var _i1 = src1ofs;
    var _s1 = Caml_array.caml_array_get(a, src1ofs);
    var _i2 = src2ofs;
    var _s2 = Caml_array.caml_array_get(src2, src2ofs);
    var _d = dstofs;
    while(true) {
      var d = _d;
      var s2 = _s2;
      var i2 = _i2;
      var s1 = _s1;
      var i1 = _i1;
      if (Curry._2(cmp, s1, s2) <= 0) {
        Caml_array.caml_array_set(dst, d, s1);
        var i1$1 = i1 + 1 | 0;
        if (i1$1 < src1r) {
          _d = d + 1 | 0;
          _s1 = Caml_array.caml_array_get(a, i1$1);
          _i1 = i1$1;
          continue ;
          
        } else {
          return blit(src2, i2, dst, d + 1 | 0, src2r - i2 | 0);
        }
      } else {
        Caml_array.caml_array_set(dst, d, s2);
        var i2$1 = i2 + 1 | 0;
        if (i2$1 < src2r) {
          _d = d + 1 | 0;
          _s2 = Caml_array.caml_array_get(src2, i2$1);
          _i2 = i2$1;
          continue ;
          
        } else {
          return blit(a, i1, dst, d + 1 | 0, src1r - i1 | 0);
        }
      }
    };
  };
  var isortto = function (srcofs, dst, dstofs, len) {
    for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      var e = Caml_array.caml_array_get(a, srcofs + i | 0);
      var j = (dstofs + i | 0) - 1 | 0;
      while(j >= dstofs && Curry._2(cmp, Caml_array.caml_array_get(dst, j), e) > 0) {
        Caml_array.caml_array_set(dst, j + 1 | 0, Caml_array.caml_array_get(dst, j));
        j = j - 1 | 0;
      };
      Caml_array.caml_array_set(dst, j + 1 | 0, e);
    }
    return /* () */0;
  };
  var sortto = function (srcofs, dst, dstofs, len) {
    if (len <= 5) {
      return isortto(srcofs, dst, dstofs, len);
    } else {
      var l1 = len / 2 | 0;
      var l2 = len - l1 | 0;
      sortto(srcofs + l1 | 0, dst, dstofs + l1 | 0, l2);
      sortto(srcofs, a, srcofs + l2 | 0, l1);
      return merge(srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs);
    }
  };
  var l = a.length;
  if (l <= 5) {
    return isortto(0, a, 0, l);
  } else {
    var l1 = l / 2 | 0;
    var l2 = l - l1 | 0;
    var t = Caml_array.caml_make_vect(l2, Caml_array.caml_array_get(a, 0));
    sortto(l1, t, 0, l2);
    sortto(0, a, l2, l1);
    return merge(l2, l1, t, 0, l2, a, 0);
  }
}

var create_matrix = make_matrix;

var concat = Caml_array.caml_array_concat;

var fast_sort = stable_sort;

exports.init          = init;
exports.make_matrix   = make_matrix;
exports.create_matrix = create_matrix;
exports.append        = append;
exports.concat        = concat;
exports.sub           = sub;
exports.copy          = copy;
exports.fill          = fill;
exports.blit          = blit;
exports.to_list       = to_list;
exports.of_list       = of_list;
exports.iter          = iter;
exports.map           = map;
exports.iteri         = iteri;
exports.mapi          = mapi;
exports.fold_left     = fold_left;
exports.fold_right    = fold_right;
exports.sort          = sort;
exports.stable_sort   = stable_sort;
exports.fast_sort     = fast_sort;
/* No side effect */


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.0, PLEASE EDIT WITH CARE


var List              = __webpack_require__(7);
var Block             = __webpack_require__(5);
var Curry             = __webpack_require__(1);
var Fixture           = __webpack_require__(27);
var Caml_int32        = __webpack_require__(6);
var Pervasives        = __webpack_require__(2);
var Micro_bench_run   = __webpack_require__(28);
var Micro_bench_types = __webpack_require__(39);

function $pipe$neg(f, g, x) {
  return Curry._1(g, Curry._1(f, x));
}

function modify(l, f, a) {
  var value = Curry._1(l[/* get */0], a);
  var new_value = Curry._1(f, value);
  return Curry._2(l[/* set */1], new_value, a);
}

function _get(a, l) {
  return Curry._1(l[/* get */0], a);
}

function _set(v, a, l) {
  return Curry._2(l[/* set */1], v, a);
}

function _modify(f, l) {
  return (function (param) {
      return modify(l, f, param);
    });
}

function compose(l1, l2) {
  var partial_arg = l1[/* get */0];
  var partial_arg$1 = l2[/* get */0];
  var partial_arg$2 = l1[/* set */1];
  return /* record */[
          /* get */(function (param) {
              return Curry._1(partial_arg, Curry._1(partial_arg$1, param));
            }),
          /* set */(function (param) {
              var partial_arg$3 = Curry._1(partial_arg$2, param);
              return (function (param) {
                  return modify(l2, partial_arg$3, param);
                });
            })
        ];
}

function pair(l1, l2) {
  return /* record */[
          /* get */(function (param) {
              return /* tuple */[
                      Curry._1(l1[/* get */0], param[0]),
                      Curry._1(l2[/* get */0], param[1])
                    ];
            }),
          /* set */(function (param, param$1) {
              return /* tuple */[
                      Curry._2(l1[/* set */1], param[0], param$1[0]),
                      Curry._2(l2[/* set */1], param[1], param$1[1])
                    ];
            })
        ];
}

function pair3(l1, l2, l3) {
  return /* record */[
          /* get */(function (param) {
              return /* tuple */[
                      Curry._1(l1[/* get */0], param[0]),
                      Curry._1(l2[/* get */0], param[1]),
                      Curry._1(l3[/* get */0], param[2])
                    ];
            }),
          /* set */(function (param, param$1) {
              return /* tuple */[
                      Curry._2(l1[/* set */1], param[0], param$1[0]),
                      Curry._2(l2[/* set */1], param[1], param$1[1]),
                      Curry._2(l3[/* set */1], param[2], param$1[2])
                    ];
            })
        ];
}

function cond(pred, lt, lf) {
  var choose = function (a) {
    if (Curry._1(pred, a)) {
      return lt;
    } else {
      return lf;
    }
  };
  return /* record */[
          /* get */(function (a) {
              var l = choose(a);
              return Curry._1(l[/* get */0], a);
            }),
          /* set */(function (b, a) {
              var l = choose(a);
              return Curry._2(l[/* set */1], b, a);
            })
        ];
}

function id_000(a) {
  return a;
}

function id_001(b, _) {
  return b;
}

var id = /* record */[
  id_000,
  id_001
];

function first_000(prim) {
  return prim[0];
}

function first_001(v, a) {
  return /* tuple */[
          v,
          a[1]
        ];
}

var first = /* record */[
  first_000,
  first_001
];

function second_000(prim) {
  return prim[1];
}

function second_001(v, a) {
  return /* tuple */[
          a[0],
          v
        ];
}

var second = /* record */[
  second_000,
  second_001
];

function list_map(l) {
  var partial_arg = l[/* get */0];
  var partial_arg$1 = l[/* set */1];
  return /* record */[
          /* get */(function (param) {
              return List.map(partial_arg, param);
            }),
          /* set */(function (param, param$1) {
              return List.map2(partial_arg$1, param, param$1);
            })
        ];
}

function xmap(f, g, l) {
  var partial_arg = l[/* get */0];
  var partial_arg$1 = l[/* set */1];
  return /* record */[
          /* get */(function (param) {
              return Curry._1(f, Curry._1(partial_arg, param));
            }),
          /* set */(function (param) {
              return Curry._1(partial_arg$1, Curry._1(g, param));
            })
        ];
}

function $caret$eq(l, v, a) {
  return Curry._2(l[/* set */1], v, a);
}

function $pipe$neg$neg(l1, l2) {
  return compose(l2, l1);
}

var $star$star$star = pair;

function $plus$eq(l, v) {
  return (function (param) {
      return modify(l, (function (param) {
                    return v + param | 0;
                  }), param);
    });
}

function $neg$eq(l, v) {
  return (function (param) {
      return modify(l, (function (param) {
                    return v - param | 0;
                  }), param);
    });
}

var Infix = /* module */[
  /* |. */_get,
  /* ^= */$caret$eq,
  /* ^%= */modify,
  /* |-- */$pipe$neg$neg,
  /* --| */compose,
  /* *** */$star$star$star,
  /* += */$plus$eq,
  /* -= */$neg$eq
];

var Lens_util = /* module */[
  /* |- */$pipe$neg,
  /* modify */modify,
  /* _get */_get,
  /* _set */_set,
  /* _modify */_modify,
  /* compose */compose,
  /* pair */pair,
  /* pair3 */pair3,
  /* cond */cond,
  /* id */id,
  /* first */first,
  /* second */second,
  /* list_map */list_map,
  /* xmap */xmap,
  /* Infix */Infix
];

function x_000(param) {
  return param[/* x */0];
}

function x_001(x, param) {
  return /* record */[
          /* x */x,
          /* y */param[/* y */1]
        ];
}

var x = /* record */[
  x_000,
  x_001
];

function y_000(param) {
  return param[/* y */1];
}

function y_001(y, param) {
  return /* record */[
          /* x */param[/* x */0],
          /* y */y
        ];
}

var y = /* record */[
  y_000,
  y_001
];

function p1_000(param) {
  return param[/* p1 */0];
}

function p1_001(p1, param) {
  return /* record */[
          /* p1 */p1,
          /* p2 */param[/* p2 */1]
        ];
}

var p1 = /* record */[
  p1_000,
  p1_001
];

function p2_000(param) {
  return param[/* p2 */1];
}

function p2_001(p2, param) {
  return /* record */[
          /* p1 */param[/* p1 */0],
          /* p2 */p2
        ];
}

var p2 = /* record */[
  p2_000,
  p2_001
];

function lens_rect_area(r) {
  var l = compose(x, p1);
  var l$1 = compose(x, p2);
  var l$2 = compose(y, p1);
  var l$3 = compose(y, p2);
  return Pervasives.abs(Caml_int32.imul(Curry._1(l[/* get */0], r) - Curry._1(l$1[/* get */0], r) | 0, Curry._1(l$2[/* get */0], r) - Curry._1(l$3[/* get */0], r) | 0));
}

function direct_rect_area(r) {
  return Pervasives.abs(Caml_int32.imul(r[/* p1 */0][/* x */0] - r[/* p2 */1][/* x */0] | 0, r[/* p1 */0][/* y */1] - r[/* p2 */1][/* y */1] | 0));
}

function prepare(i) {
  var p1_000 = /* x */1111 + i | 0;
  var p1_001 = /* y */2222 + i | 0;
  var p1 = /* record */[
    p1_000,
    p1_001
  ];
  var p2_000 = /* x */3333 + i | 0;
  var p2_001 = /* y */4444 + i | 0;
  var p2 = /* record */[
    p2_000,
    p2_001
  ];
  return /* record */[
          /* p1 */p1,
          /* p2 */p2
        ];
}

function check_rect_area(n, res) {
  var r = prepare(n);
  var s = Pervasives.abs(Caml_int32.imul(r[/* p1 */0][/* x */0] - r[/* p2 */1][/* x */0] | 0, r[/* p1 */0][/* y */1] - r[/* p2 */1][/* y */1] | 0));
  if (s === res) {
    return /* Ok */0;
  } else {
    return /* Error */["rect_area"];
  }
}

var range = /* :: */[
  /* tuple */[
    /* Any */0,
    /* Short */0
  ],
  /* [] */0
];

var rect_area_group = /* Int_group */Block.__(3, [/* tuple */[
      /* :: */[
        /* tuple */[
          "lens",
          lens_rect_area
        ],
        /* :: */[
          /* tuple */[
            "baseline",
            direct_rect_area
          ],
          /* [] */0
        ]
      ],
      prepare,
      check_rect_area,
      range
    ]]);

var functions_000 = /* tuple */[
  "rect_area",
  rect_area_group
];

var functions = /* :: */[
  functions_000,
  /* [] */0
];

Micro_bench_types.add(functions);

var config = Micro_bench_run.Config[/* parse */1](/* () */0);

if (typeof config === "number") {
  Micro_bench_run.run(/* Some */[/* Some */[config]], Micro_bench_types.functions(/* () */0));
} else if (config[0] !== 4103979) {
  Micro_bench_run.run(/* Some */[/* Some */[config]], Micro_bench_types.functions(/* () */0));
} else {
  var conf = config[1];
  Fixture.run_n_times(10, (function () {
          var newrecord = conf.slice();
          return Micro_bench_run.run(/* Some */[/* Some */[/* `Run */[
                          4103979,
                          (newrecord[/* number_of_different_values */5] = 1000, newrecord)
                        ]]], Micro_bench_types.functions(/* () */0));
        }));
}

exports.Lens_util        = Lens_util;
exports.x                = x;
exports.y                = y;
exports.p1               = p1;
exports.p2               = p2;
exports.lens_rect_area   = lens_rect_area;
exports.direct_rect_area = direct_rect_area;
exports.prepare          = prepare;
exports.check_rect_area  = check_rect_area;
exports.range            = range;
exports.rect_area_group  = rect_area_group;
exports.functions        = functions;
/*  Not a pure module */


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_obj                = __webpack_require__(4);
var Caml_int32              = __webpack_require__(6);
var Caml_utils              = __webpack_require__(20);
var Caml_builtin_exceptions = __webpack_require__(0);

var min_int = /* record */[
  /* hi */-2147483648,
  /* lo */0
];

var max_int = /* record */[
  /* hi */134217727,
  /* lo */1
];

var one = /* record */[
  /* hi */0,
  /* lo */1
];

var zero = /* record */[
  /* hi */0,
  /* lo */0
];

var neg_one = /* record */[
  /* hi */-1,
  /* lo */4294967295
];

function neg_signed(x) {
  return +((x & 2147483648) !== 0);
}

function add(param, param$1) {
  var other_low_ = param$1[/* lo */1];
  var this_low_ = param[/* lo */1];
  var lo = this_low_ + other_low_ & 4294967295;
  var overflow = neg_signed(this_low_) && (neg_signed(other_low_) || !neg_signed(lo)) || neg_signed(other_low_) && !neg_signed(lo) ? 1 : 0;
  var hi = param[/* hi */0] + param$1[/* hi */0] + overflow & 4294967295;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function not(param) {
  var hi = param[/* hi */0] ^ -1;
  var lo = param[/* lo */1] ^ -1;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function eq(x, y) {
  if (x[/* hi */0] === y[/* hi */0]) {
    return +(x[/* lo */1] === y[/* lo */1]);
  } else {
    return /* false */0;
  }
}

function neg(x) {
  if (eq(x, min_int)) {
    return min_int;
  } else {
    return add(not(x), one);
  }
}

function sub(x, y) {
  return add(x, neg(y));
}

function lsl_(x, numBits) {
  if (numBits) {
    var lo = x[/* lo */1];
    if (numBits >= 32) {
      return /* record */[
              /* hi */(lo << (numBits - 32 | 0)),
              /* lo */0
            ];
    } else {
      var hi = (lo >>> (32 - numBits | 0)) | (x[/* hi */0] << numBits);
      return /* record */[
              /* hi */hi,
              /* lo */((lo << numBits) >>> 0)
            ];
    }
  } else {
    return x;
  }
}

function lsr_(x, numBits) {
  if (numBits) {
    var hi = x[/* hi */0];
    var offset = numBits - 32 | 0;
    if (offset) {
      if (offset > 0) {
        var lo = (hi >>> offset);
        return /* record */[
                /* hi */0,
                /* lo */(lo >>> 0)
              ];
      } else {
        var hi$1 = (hi >>> numBits);
        var lo$1 = (hi << (-offset | 0)) | (x[/* lo */1] >>> numBits);
        return /* record */[
                /* hi */hi$1,
                /* lo */(lo$1 >>> 0)
              ];
      }
    } else {
      return /* record */[
              /* hi */0,
              /* lo */(hi >>> 0)
            ];
    }
  } else {
    return x;
  }
}

function asr_(x, numBits) {
  if (numBits) {
    var hi = x[/* hi */0];
    if (numBits < 32) {
      var hi$1 = (hi >> numBits);
      var lo = (hi << (32 - numBits | 0)) | (x[/* lo */1] >>> numBits);
      return /* record */[
              /* hi */hi$1,
              /* lo */(lo >>> 0)
            ];
    } else {
      var lo$1 = (hi >> (numBits - 32 | 0));
      return /* record */[
              /* hi */hi >= 0 ? 0 : -1,
              /* lo */(lo$1 >>> 0)
            ];
    }
  } else {
    return x;
  }
}

function is_zero(param) {
  if (param[/* hi */0] !== 0 || param[/* lo */1] !== 0) {
    return /* false */0;
  } else {
    return /* true */1;
  }
}

function mul(_this, _other) {
  while(true) {
    var other = _other;
    var $$this = _this;
    var exit = 0;
    var lo;
    var this_hi = $$this[/* hi */0];
    var exit$1 = 0;
    var exit$2 = 0;
    var exit$3 = 0;
    if (this_hi !== 0) {
      exit$3 = 4;
    } else if ($$this[/* lo */1] !== 0) {
      exit$3 = 4;
    } else {
      return zero;
    }
    if (exit$3 === 4) {
      if (other[/* hi */0] !== 0) {
        exit$2 = 3;
      } else if (other[/* lo */1] !== 0) {
        exit$2 = 3;
      } else {
        return zero;
      }
    }
    if (exit$2 === 3) {
      if (this_hi !== -2147483648) {
        exit$1 = 2;
      } else if ($$this[/* lo */1] !== 0) {
        exit$1 = 2;
      } else {
        lo = other[/* lo */1];
        exit = 1;
      }
    }
    if (exit$1 === 2) {
      var other_hi = other[/* hi */0];
      var lo$1 = $$this[/* lo */1];
      var exit$4 = 0;
      if (other_hi !== -2147483648) {
        exit$4 = 3;
      } else if (other[/* lo */1] !== 0) {
        exit$4 = 3;
      } else {
        lo = lo$1;
        exit = 1;
      }
      if (exit$4 === 3) {
        var other_lo = other[/* lo */1];
        if (this_hi < 0) {
          if (other_hi < 0) {
            _other = neg(other);
            _this = neg($$this);
            continue ;
            
          } else {
            return neg(mul(neg($$this), other));
          }
        } else if (other_hi < 0) {
          return neg(mul($$this, neg(other)));
        } else {
          var a48 = (this_hi >>> 16);
          var a32 = this_hi & 65535;
          var a16 = (lo$1 >>> 16);
          var a00 = lo$1 & 65535;
          var b48 = (other_hi >>> 16);
          var b32 = other_hi & 65535;
          var b16 = (other_lo >>> 16);
          var b00 = other_lo & 65535;
          var c48 = 0;
          var c32 = 0;
          var c16 = 0;
          var c00 = a00 * b00;
          c16 = (c00 >>> 16) + a16 * b00;
          c32 = (c16 >>> 16);
          c16 = (c16 & 65535) + a00 * b16;
          c32 = c32 + (c16 >>> 16) + a32 * b00;
          c48 = (c32 >>> 16);
          c32 = (c32 & 65535) + a16 * b16;
          c48 += (c32 >>> 16);
          c32 = (c32 & 65535) + a00 * b32;
          c48 += (c32 >>> 16);
          c32 = c32 & 65535;
          c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
          var hi = c32 | (c48 << 16);
          var lo$2 = c00 & 65535 | ((c16 & 65535) << 16);
          return /* record */[
                  /* hi */hi,
                  /* lo */(lo$2 >>> 0)
                ];
        }
      }
      
    }
    if (exit === 1) {
      if ((lo & 1) === 0) {
        return zero;
      } else {
        return min_int;
      }
    }
    
  };
}

function swap(param) {
  var hi = Caml_int32.caml_int32_bswap(param[/* lo */1]);
  var lo = Caml_int32.caml_int32_bswap(param[/* hi */0]);
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function xor(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] ^ param$1[/* hi */0],
          /* lo */((param[/* lo */1] ^ param$1[/* lo */1]) >>> 0)
        ];
}

function or_(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] | param$1[/* hi */0],
          /* lo */((param[/* lo */1] | param$1[/* lo */1]) >>> 0)
        ];
}

function and_(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] & param$1[/* hi */0],
          /* lo */((param[/* lo */1] & param$1[/* lo */1]) >>> 0)
        ];
}

function ge(param, param$1) {
  var other_hi = param$1[/* hi */0];
  var hi = param[/* hi */0];
  if (hi > other_hi) {
    return /* true */1;
  } else if (hi < other_hi) {
    return /* false */0;
  } else {
    return +(param[/* lo */1] >= param$1[/* lo */1]);
  }
}

function neq(x, y) {
  return 1 - eq(x, y);
}

function lt(x, y) {
  return 1 - ge(x, y);
}

function gt(x, y) {
  if (x[/* hi */0] > y[/* hi */0]) {
    return /* true */1;
  } else if (x[/* hi */0] < y[/* hi */0]) {
    return /* false */0;
  } else {
    return +(x[/* lo */1] > y[/* lo */1]);
  }
}

function le(x, y) {
  return 1 - gt(x, y);
}

function to_float(param) {
  return param[/* hi */0] * (0x100000000) + param[/* lo */1];
}

var two_ptr_32_dbl = Math.pow(2, 32);

var two_ptr_63_dbl = Math.pow(2, 63);

var neg_two_ptr_63 = -Math.pow(2, 63);

function of_float(x) {
  if (isNaN(x) || !isFinite(x)) {
    return zero;
  } else if (x <= neg_two_ptr_63) {
    return min_int;
  } else if (x + 1 >= two_ptr_63_dbl) {
    return max_int;
  } else if (x < 0) {
    return neg(of_float(-x));
  } else {
    var hi = x / two_ptr_32_dbl | 0;
    var lo = x % two_ptr_32_dbl | 0;
    return /* record */[
            /* hi */hi,
            /* lo */(lo >>> 0)
          ];
  }
}

function div(_self, _other) {
  while(true) {
    var other = _other;
    var self = _self;
    var self_hi = self[/* hi */0];
    var exit = 0;
    var exit$1 = 0;
    if (other[/* hi */0] !== 0) {
      exit$1 = 2;
    } else if (other[/* lo */1] !== 0) {
      exit$1 = 2;
    } else {
      throw Caml_builtin_exceptions.division_by_zero;
    }
    if (exit$1 === 2) {
      if (self_hi !== -2147483648) {
        if (self_hi !== 0) {
          exit = 1;
        } else if (self[/* lo */1] !== 0) {
          exit = 1;
        } else {
          return zero;
        }
      } else if (self[/* lo */1] !== 0) {
        exit = 1;
      } else if (eq(other, one) || eq(other, neg_one)) {
        return self;
      } else if (eq(other, min_int)) {
        return one;
      } else {
        var other_hi = other[/* hi */0];
        var half_this = asr_(self, 1);
        var approx = lsl_(div(half_this, other), 1);
        var exit$2 = 0;
        if (approx[/* hi */0] !== 0) {
          exit$2 = 3;
        } else if (approx[/* lo */1] !== 0) {
          exit$2 = 3;
        } else if (other_hi < 0) {
          return one;
        } else {
          return neg(one);
        }
        if (exit$2 === 3) {
          var y = mul(other, approx);
          var rem = add(self, neg(y));
          return add(approx, div(rem, other));
        }
        
      }
    }
    if (exit === 1) {
      var other_hi$1 = other[/* hi */0];
      var exit$3 = 0;
      if (other_hi$1 !== -2147483648) {
        exit$3 = 2;
      } else if (other[/* lo */1] !== 0) {
        exit$3 = 2;
      } else {
        return zero;
      }
      if (exit$3 === 2) {
        if (self_hi < 0) {
          if (other_hi$1 < 0) {
            _other = neg(other);
            _self = neg(self);
            continue ;
            
          } else {
            return neg(div(neg(self), other));
          }
        } else if (other_hi$1 < 0) {
          return neg(div(self, neg(other)));
        } else {
          var res = zero;
          var rem$1 = self;
          while(ge(rem$1, other)) {
            var approx$1 = Math.max(1, Math.floor(to_float(rem$1) / to_float(other)));
            var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
            var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
            var approxRes = of_float(approx$1);
            var approxRem = mul(approxRes, other);
            while(approxRem[/* hi */0] < 0 || gt(approxRem, rem$1)) {
              approx$1 -= delta;
              approxRes = of_float(approx$1);
              approxRem = mul(approxRes, other);
            };
            if (is_zero(approxRes)) {
              approxRes = one;
            }
            res = add(res, approxRes);
            rem$1 = add(rem$1, neg(approxRem));
          };
          return res;
        }
      }
      
    }
    
  };
}

function mod_(self, other) {
  var y = mul(div(self, other), other);
  return add(self, neg(y));
}

function div_mod(self, other) {
  var quotient = div(self, other);
  var y = mul(quotient, other);
  return /* tuple */[
          quotient,
          add(self, neg(y))
        ];
}

function compare(self, other) {
  var v = Caml_obj.caml_nativeint_compare(self[/* hi */0], other[/* hi */0]);
  if (v) {
    return v;
  } else {
    return Caml_obj.caml_nativeint_compare(self[/* lo */1], other[/* lo */1]);
  }
}

function of_int32(lo) {
  return /* record */[
          /* hi */lo < 0 ? -1 : 0,
          /* lo */(lo >>> 0)
        ];
}

function to_int32(x) {
  return x[/* lo */1] | 0;
}

function to_hex(x) {
  var aux = function (v) {
    return (v >>> 0).toString(16);
  };
  var match = x[/* hi */0];
  var match$1 = x[/* lo */1];
  var exit = 0;
  if (match !== 0) {
    exit = 1;
  } else if (match$1 !== 0) {
    exit = 1;
  } else {
    return "0";
  }
  if (exit === 1) {
    if (match$1 !== 0) {
      if (match !== 0) {
        var lo = aux(x[/* lo */1]);
        var pad = 8 - lo.length | 0;
        if (pad <= 0) {
          return aux(x[/* hi */0]) + lo;
        } else {
          return aux(x[/* hi */0]) + (Caml_utils.repeat(pad, "0") + lo);
        }
      } else {
        return aux(x[/* lo */1]);
      }
    } else {
      return aux(x[/* hi */0]) + "00000000";
    }
  }
  
}

function discard_sign(x) {
  return /* record */[
          /* hi */2147483647 & x[/* hi */0],
          /* lo */x[/* lo */1]
        ];
}

function float_of_bits(x) {
  var int32 = new Int32Array(/* array */[
        x[/* lo */1],
        x[/* hi */0]
      ]);
  return new Float64Array(int32.buffer)[0];
}

function bits_of_float(x) {
  var u = new Float64Array(/* float array */[x]);
  var int32 = new Int32Array(u.buffer);
  var x$1 = int32[1];
  var hi = x$1;
  var x$2 = int32[0];
  var lo = x$2;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function get64(s, i) {
  var hi = (s.charCodeAt(i + 4 | 0) << 32) | (s.charCodeAt(i + 5 | 0) << 40) | (s.charCodeAt(i + 6 | 0) << 48) | (s.charCodeAt(i + 7 | 0) << 56);
  var lo = s.charCodeAt(i) | (s.charCodeAt(i + 1 | 0) << 8) | (s.charCodeAt(i + 2 | 0) << 16) | (s.charCodeAt(i + 3 | 0) << 24);
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

exports.min_int       = min_int;
exports.max_int       = max_int;
exports.one           = one;
exports.zero          = zero;
exports.not           = not;
exports.of_int32      = of_int32;
exports.to_int32      = to_int32;
exports.add           = add;
exports.neg           = neg;
exports.sub           = sub;
exports.lsl_          = lsl_;
exports.lsr_          = lsr_;
exports.asr_          = asr_;
exports.is_zero       = is_zero;
exports.mul           = mul;
exports.xor           = xor;
exports.or_           = or_;
exports.and_          = and_;
exports.swap          = swap;
exports.ge            = ge;
exports.eq            = eq;
exports.neq           = neq;
exports.lt            = lt;
exports.gt            = gt;
exports.le            = le;
exports.to_float      = to_float;
exports.of_float      = of_float;
exports.div           = div;
exports.mod_          = mod_;
exports.div_mod       = div_mod;
exports.compare       = compare;
exports.to_hex        = to_hex;
exports.discard_sign  = discard_sign;
exports.float_of_bits = float_of_bits;
exports.bits_of_float = bits_of_float;
exports.get64         = get64;
/* two_ptr_32_dbl Not a pure module */


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.0, PLEASE EDIT WITH CARE


var Curry = __webpack_require__(1);

function run_n_times(n, f) {
  for(var _for = 1; _for <= n; ++_for){
    Curry._1(f, /* () */0);
  }
  return /* () */0;
}

exports.run_n_times = run_n_times;
/* No side effect */


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.0, PLEASE EDIT WITH CARE


var Arg        = __webpack_require__(29);
var $$Set      = __webpack_require__(33);
var Sys        = __webpack_require__(22);
var List       = __webpack_require__(7);
var $$Array    = __webpack_require__(24);
var Block      = __webpack_require__(5);
var Curry      = __webpack_require__(1);
var Js_exn     = __webpack_require__(10);
var Printf     = __webpack_require__(18);
var $$String   = __webpack_require__(13);
var Caml_gc    = __webpack_require__(34);
var Caml_obj   = __webpack_require__(4);
var Caml_sys   = __webpack_require__(15);
var Printexc   = __webpack_require__(35);
var Caml_array = __webpack_require__(8);
var Caml_int32 = __webpack_require__(6);
var Pervasives = __webpack_require__(2);

function compare_cost(c1, c2) {
  switch (c1) {
    case 0 : 
        if (c2 !== 0) {
          return -1;
        } else {
          return 0;
        }
    case 1 : 
        switch (c2) {
          case 0 : 
              return 1;
          case 1 : 
              return 0;
          case 2 : 
              return -1;
          
        }
        break;
    case 2 : 
        switch (c2) {
          case 0 : 
          case 1 : 
              return 1;
          case 2 : 
              return 0;
          
        }
        break;
    
  }
}

function print_list(_param) {
  while(true) {
    var param = _param;
    if (param) {
      var t = param[1];
      var s = param[0];
      if (t) {
        Pervasives.print_string(s);
        Pervasives.print_char(/* " " */32);
        _param = t;
        continue ;
        
      } else {
        console.log(s);
        return /* () */0;
      }
    } else {
      return /* () */0;
    }
  };
}

function prerr_list(_param) {
  while(true) {
    var param = _param;
    if (param) {
      var t = param[1];
      var s = param[0];
      if (t) {
        Pervasives.prerr_string(s);
        Pervasives.prerr_char(/* " " */32);
        _param = t;
        continue ;
        
      } else {
        console.error(s);
        return /* () */0;
      }
    } else {
      return /* () */0;
    }
  };
}

var include = $$Set.Make([$$String.compare]);

var empty = include[0];

var add = include[3];

var singleton = include[4];

function of_list(l) {
  return List.fold_right(add, l, empty);
}

var StringSet_001 = /* is_empty */include[1];

var StringSet_002 = /* mem */include[2];

var StringSet_005 = /* remove */include[5];

var StringSet_006 = /* union */include[6];

var StringSet_007 = /* inter */include[7];

var StringSet_008 = /* diff */include[8];

var StringSet_009 = /* compare */include[9];

var StringSet_010 = /* equal */include[10];

var StringSet_011 = /* subset */include[11];

var StringSet_012 = /* iter */include[12];

var StringSet_013 = /* fold */include[13];

var StringSet_014 = /* for_all */include[14];

var StringSet_015 = /* exists */include[15];

var StringSet_016 = /* filter */include[16];

var StringSet_017 = /* partition */include[17];

var StringSet_018 = /* cardinal */include[18];

var StringSet_019 = /* elements */include[19];

var StringSet_020 = /* min_elt */include[20];

var StringSet_021 = /* max_elt */include[21];

var StringSet_022 = /* choose */include[22];

var StringSet_023 = /* split */include[23];

var StringSet_024 = /* find */include[24];

var StringSet = /* module */[
  /* empty */empty,
  StringSet_001,
  StringSet_002,
  /* add */add,
  /* singleton */singleton,
  StringSet_005,
  StringSet_006,
  StringSet_007,
  StringSet_008,
  StringSet_009,
  StringSet_010,
  StringSet_011,
  StringSet_012,
  StringSet_013,
  StringSet_014,
  StringSet_015,
  StringSet_016,
  StringSet_017,
  StringSet_018,
  StringSet_019,
  StringSet_020,
  StringSet_021,
  StringSet_022,
  StringSet_023,
  StringSet_024,
  /* of_list */of_list
];

var iround_lbound = Pervasives.min_int;

var iround_ubound = Pervasives.min(Pervasives.max_int, Math.pow(2.0, 62.0) - 512);

function iround_towards_zero_exn(t) {
  if (t >= iround_lbound && t <= iround_ubound) {
    return t | 0;
  } else {
    return Pervasives.invalid_arg("Float.iround_towards_zero_exn: argument (" + (Pervasives.string_of_float(t) + ") is out of range or NaN"));
  }
}

var Float = /* module */[
  /* iround_lbound */iround_lbound,
  /* iround_ubound */iround_ubound,
  /* iround_towards_zero_exn */iround_towards_zero_exn
];

function now() {
  return Caml_sys.caml_sys_time(/* () */0);
}

function diff(t1, t2) {
  return t1 - t2;
}

function of_sec(v) {
  return v;
}

function to_float(v) {
  return v;
}

function to_ns(v) {
  return v * 1E9;
}

function to_string(v) {
  return Pervasives.string_of_float(v) + "s";
}

var Time_001 = /* Span */[
  of_sec,
  to_float,
  to_ns,
  to_string
];

var Time = /* module */[
  /* now */now,
  Time_001,
  /* diff */diff
];

var time_quota = Curry._1(Time_001[/* of_sec */0], 10.0);

var Defaults = /* module */[
  /* geometric_scale */1.01,
  /* stabilize_gc_between_runs : false */0,
  /* no_compactions : false */0,
  /* time_quota_float */10.0,
  /* time_quota */time_quota,
  /* number_of_different_values */1,
  /* maximal_cost : Short */0,
  /* selection : None */0,
  /* test_only : false */0,
  /* verbosity : Low */3804276
];

function create($staropt$star, $staropt$star$1, $staropt$star$2, $staropt$star$3, $staropt$star$4, $staropt$star$5, $staropt$star$6, $staropt$star$7, $staropt$star$8, output_file, _) {
  var verbosity = $staropt$star ? $staropt$star[0] : /* Low */3804276;
  var no_compactions = $staropt$star$1 ? $staropt$star$1[0] : /* false */0;
  var time_quota$1 = $staropt$star$2 ? $staropt$star$2[0] : time_quota;
  var sampling_type = $staropt$star$3 ? $staropt$star$3[0] : /* `Geometric */[
      588000097,
      1.01
    ];
  var stabilize_gc_between_runs = $staropt$star$4 ? $staropt$star$4[0] : /* false */0;
  var number_of_different_values = $staropt$star$5 ? $staropt$star$5[0] : 1;
  var maximal_cost = $staropt$star$6 ? $staropt$star$6[0] : /* Short */0;
  var selection = $staropt$star$7 ? $staropt$star$7[0] : /* None */0;
  var test_only = $staropt$star$8 ? $staropt$star$8[0] : /* false */0;
  return /* record */[
          /* verbosity */verbosity,
          /* no_compactions */no_compactions,
          /* time_quota */time_quota$1,
          /* sampling_type */sampling_type,
          /* stabilize_gc_between_runs */stabilize_gc_between_runs,
          /* number_of_different_values */number_of_different_values,
          /* maximal_cost */maximal_cost,
          /* selection */selection,
          /* test_only */test_only,
          /* output_file */output_file
        ];
}

function parse() {
  var verbosity = [/* None */0];
  var no_compactions = [/* None */0];
  var time_quota = [/* None */0];
  var sampling_type = [/* None */0];
  var stabilize_gc_between_runs = [/* None */0];
  var number_of_different_values = [/* None */0];
  var maximal_cost = [/* Short */0];
  var test_only = [/* None */0];
  var set = function (r, v) {
    return /* Unit */Block.__(0, [(function () {
                  r[0] = /* Some */[v];
                  return /* () */0;
                })]);
  };
  var set_quota = /* Float */Block.__(8, [(function (v) {
          time_quota[0] = /* Some */[Curry._1(Time_001[/* of_sec */0], v)];
          return /* () */0;
        })]);
  var set_sampling = /* Int */Block.__(6, [(function (i) {
          sampling_type[0] = /* Some */[/* `Linear */[
              557106693,
              i
            ]];
          return /* () */0;
        })]);
  var set_int = function (r) {
    return /* Int */Block.__(6, [(function (i) {
                  r[0] = /* Some */[i];
                  return /* () */0;
                })]);
  };
  var set_cost = function (c) {
    return /* Unit */Block.__(0, [(function () {
                  if (compare_cost(maximal_cost[0], c) < 0) {
                    maximal_cost[0] = c;
                    return /* () */0;
                  } else {
                    return 0;
                  }
                })]);
  };
  var set_float = function (r) {
    return /* String */Block.__(4, [(function (i) {
                  r[0] = /* Some */[i];
                  return /* () */0;
                })]);
  };
  var list = [/* false */0];
  var raw_list = [/* false */0];
  var count = [/* false */0];
  var output_file = [/* None */0];
  var selection = [/* None */0];
  var spec_000 = /* tuple */[
    "-v",
    set(verbosity, /* High */803693442),
    " high verbosity"
  ];
  var spec_001 = /* :: */[
    /* tuple */[
      "--no-compaction",
      set(no_compactions, /* true */1),
      " no compaction"
    ],
    /* :: */[
      /* tuple */[
        "--time-quota",
        set_quota,
        "t time_quota"
      ],
      /* :: */[
        /* tuple */[
          "-q",
          set_quota,
          " alias of --time-quota"
        ],
        /* :: */[
          /* tuple */[
            "--linear-sampling",
            set_sampling,
            "n set linear sampling type with the given step size"
          ],
          /* :: */[
            /* tuple */[
              "--stabilize-gc",
              set(stabilize_gc_between_runs, /* true */1),
              " stabilize gc between runs"
            ],
            /* :: */[
              /* tuple */[
                "--different-values",
                set_int(number_of_different_values),
                "n number of different values"
              ],
              /* :: */[
                /* tuple */[
                  "-n",
                  set_int(number_of_different_values),
                  " alias of --different-values"
                ],
                /* :: */[
                  /* tuple */[
                    "--long",
                    set_cost(/* Long */1),
                    " allow running long test"
                  ],
                  /* :: */[
                    /* tuple */[
                      "--longer",
                      set_cost(/* Longer */2),
                      " allow running longer test"
                    ],
                    /* :: */[
                      /* tuple */[
                        "--test",
                        set(test_only, /* true */1),
                        " don't run benchmarks"
                      ],
                      /* :: */[
                        /* tuple */[
                          "-t",
                          set(test_only, /* true */1),
                          " alias of --test"
                        ],
                        /* :: */[
                          /* tuple */[
                            "--list",
                            /* Set */Block.__(2, [list]),
                            " list available benchmarks"
                          ],
                          /* :: */[
                            /* tuple */[
                              "-l",
                              /* Set */Block.__(2, [list]),
                              " alias of --list"
                            ],
                            /* :: */[
                              /* tuple */[
                                "--raw-list",
                                /* Set */Block.__(2, [raw_list]),
                                " list available benchmarks"
                              ],
                              /* :: */[
                                /* tuple */[
                                  "--count",
                                  /* Set */Block.__(2, [count]),
                                  " print number of benchmarks"
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "-o",
                                    set_float(output_file),
                                    " set output file"
                                  ],
                                  /* [] */0
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ];
  var spec = /* :: */[
    spec_000,
    spec_001
  ];
  var doc = Sys.executable_name + " [options] [selection]";
  Arg.parse(Arg.align(/* None */0, spec), (function (s) {
          var match = selection[0];
          if (match) {
            selection[0] = /* Some */[Curry._2(add, s, match[0])];
            return /* () */0;
          } else {
            selection[0] = /* Some */[Curry._1(singleton, s)];
            return /* () */0;
          }
        }), doc);
  if (count[0]) {
    return /* Count */-577719121;
  } else if (list[0] || raw_list[0]) {
    return /* `List */[
            848054398,
            raw_list[0]
          ];
  } else {
    return /* `Run */[
            4103979,
            create(verbosity[0], no_compactions[0], time_quota[0], sampling_type[0], stabilize_gc_between_runs[0], number_of_different_values[0], /* Some */[maximal_cost[0]], /* Some */[selection[0]], test_only[0], output_file[0], /* () */0)
          ];
  }
}

var Config = /* module */[
  /* create */create,
  /* parse */parse
];

function create$1() {
  return /* record */[
          /* runs */0,
          /* cycles */0,
          /* nanos */0,
          /* compactions */0,
          /* minor_allocated */0,
          /* major_allocated */0,
          /* promoted */0,
          /* major_collections */0,
          /* minor_collections */0
        ];
}

function output(oc, m) {
  var out = function (i) {
    Pervasives.output_string(oc, Pervasives.string_of_int(i));
    return Pervasives.output_char(oc, /* " " */32);
  };
  out(m[/* runs */0]);
  out(m[/* cycles */1]);
  out(m[/* nanos */2]);
  out(m[/* compactions */3]);
  out(m[/* minor_allocated */4]);
  out(m[/* major_allocated */5]);
  out(m[/* promoted */6]);
  out(m[/* major_collections */7]);
  out(m[/* minor_collections */8]);
  return Pervasives.output_char(oc, /* "\n" */10);
}

var Measurement_sample = /* module */[
  /* create */create$1,
  /* output */output
];

function create$2(name, group, parameter, largest_run, sample_count, samples) {
  return /* record */[
          /* name */name,
          /* group */group,
          /* parameter */parameter,
          /* largest_run */largest_run,
          /* sample_count */sample_count,
          /* samples */samples
        ];
}

function output$1(oc, t) {
  Pervasives.output_string(oc, t[/* name */0]);
  Pervasives.output_char(oc, /* "\n" */10);
  var match = t[/* group */1];
  if (match) {
    Pervasives.output_string(oc, "group: ");
    Pervasives.output_string(oc, match[0]);
    Pervasives.output_char(oc, /* "\n" */10);
  }
  var match$1 = t[/* parameter */2];
  if (match$1) {
    Pervasives.output_string(oc, "parameter: ");
    Pervasives.output_string(oc, Pervasives.string_of_int(match$1[0]));
    Pervasives.output_char(oc, /* "\n" */10);
  }
  Pervasives.output_char(oc, /* "\n" */10);
  for(var i = 0 ,i_finish = t[/* sample_count */4] - 1 | 0; i <= i_finish; ++i){
    output(oc, Caml_array.caml_array_get(t[/* samples */5], i));
  }
  return Pervasives.output_char(oc, /* "\n" */10);
}

var Measurement = /* module */[
  /* create */create$2,
  /* output */output$1
];

function stabilize_gc() {
  var _failsafe = 10;
  var _last_heap_live_words = 0;
  while(true) {
    var last_heap_live_words = _last_heap_live_words;
    var failsafe = _failsafe;
    if (failsafe <= 0) {
      Pervasives.failwith("unable to stabilize the number of live words in the major heap");
    }
    Caml_gc.caml_gc_compaction(/* () */0);
    var stat = Caml_gc.caml_gc_stat(/* () */0);
    if (stat[/* live_words */7] !== last_heap_live_words) {
      _last_heap_live_words = stat[/* live_words */7];
      _failsafe = failsafe - 1 | 0;
      continue ;
      
    } else {
      return 0;
    }
  };
}

function pick_any(n) {
  var num = function (k) {
    return Caml_int32.imul(k, k) % 4028033;
  };
  var rd = function (n0) {
    var n1 = num(n0);
    var n2 = num(n1);
    var n3 = num(n2);
    var n4 = num(n3);
    return /* tuple */[
            ((n1 % 16 + (n2 % 16 << 4) | 0) + (n3 % 16 << 8) | 0) + (n4 % 16 << 12) | 0,
            n4
          ];
  };
  var aux = function (n, k) {
    if (n) {
      var match = rd(k);
      return /* :: */[
              match[0] - 32768 | 0,
              aux(n - 1 | 0, match[1])
            ];
    } else {
      return /* [] */0;
    }
  };
  return aux(n, 42);
}

function range(x, y) {
  if (x > y) {
    return /* [] */0;
  } else {
    return /* :: */[
            x,
            range(x + 1 | 0, y)
          ];
  }
}

function pick_range(n, param) {
  var y = param[1];
  var x = param[0];
  if (n !== 0) {
    if (n !== 1) {
      var match = x < y ? /* tuple */[
          x,
          y
        ] : /* tuple */[
          y,
          x
        ];
      var y$1 = match[1];
      var x$1 = match[0];
      var d = y$1 - x$1 | 0;
      if (d < n) {
        return range(x$1, y$1);
      } else {
        var v = Caml_int32.div(d, n - 1 | 0);
        return List.map((function (i) {
                      return x$1 + Caml_int32.imul(i, v) | 0;
                    }), range(0, n - 1 | 0));
      }
    } else {
      return /* :: */[
              x,
              /* [] */0
            ];
    }
  } else {
    return /* [] */0;
  }
}

function pick_list(n, l) {
  if (n <= 0 || !l) {
    return /* [] */0;
  } else {
    return /* :: */[
            l[0],
            pick_list(n - 1 | 0, l[1])
          ];
  }
}

function pick_values(n, param) {
  if (typeof param === "number") {
    return pick_any(n);
  } else if (param.tag) {
    return pick_list(n, param[0]);
  } else {
    return pick_range(n, /* tuple */[
                param[0],
                param[1]
              ]);
  }
}

function pick(n, max_cost, l) {
  var l$1 = List.filter((function (param) {
            return +(compare_cost(param[1], max_cost) <= 0);
          }))(l);
  var l$2 = List.sort((function (param, param$1) {
          return compare_cost(param[1], param$1[1]);
        }), l$1);
  var l$3 = List.map((function (prim) {
          return prim[0];
        }), l$2);
  var l$4 = pick_list(n, l$3);
  var len = List.length(l$4);
  if (len) {
    var match = n <= len ? /* tuple */[
        1,
        0
      ] : /* tuple */[
        Caml_int32.div(n, len),
        Caml_int32.mod_(n, len)
      ];
    var r = match[1];
    var q = match[0];
    var a = $$Array.mapi((function (i, range) {
            var n = i < r ? q + 1 | 0 : q;
            return pick_values(n, range);
          }), $$Array.of_list(l$4));
    return List.concat($$Array.to_list(a));
  } else {
    return /* [] */0;
  }
}

var errors = [/* false */0];

function in_selection(_, _$1) {
  return /* true */1;
}

function test(param, item) {
  var max_cost = param[/* maximal_cost */6];
  var n = param[/* number_of_different_values */5];
  var verbosity = param[/* verbosity */0];
  var run_unit = function (name, f, test) {
    if (verbosity === /* High */803693442) {
      print_list(/* :: */[
            "running test",
            /* :: */[
              name,
              /* [] */0
            ]
          ]);
    }
    try {
      var match = Curry._1(test, Curry._1(f, /* () */0));
      if (match) {
        errors[0] = /* true */1;
        return prerr_list(/* :: */[
                    "test",
                    /* :: */[
                      name,
                      /* :: */[
                        "failed with message",
                        /* :: */[
                          match[0],
                          /* [] */0
                        ]
                      ]
                    ]
                  ]);
      } else {
        return /* () */0;
      }
    }
    catch (raw_exn){
      var exn = Js_exn.internalToOCamlException(raw_exn);
      return prerr_list(/* :: */[
                  "test",
                  /* :: */[
                    name,
                    /* :: */[
                      "failed with exception",
                      /* :: */[
                        Printexc.to_string(exn),
                        /* [] */0
                      ]
                    ]
                  ]
                ]);
    }
  };
  var run_int = function (name, f, prepare, test, costs) {
    var aux = function (v) {
      if (verbosity === /* High */803693442) {
        print_list(/* :: */[
              "running test",
              /* :: */[
                name,
                /* :: */[
                  "with argument",
                  /* :: */[
                    Pervasives.string_of_int(v),
                    /* [] */0
                  ]
                ]
              ]
            ]);
      }
      try {
        var match = Curry._2(test, v, Curry._1(f, Curry._1(prepare, v)));
        if (match) {
          errors[0] = /* true */1;
          return prerr_list(/* :: */[
                      "test",
                      /* :: */[
                        name,
                        /* :: */[
                          "with parameter",
                          /* :: */[
                            Pervasives.string_of_int(v),
                            /* :: */[
                              "failed with message",
                              /* :: */[
                                match[0],
                                /* [] */0
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]);
        } else {
          return /* () */0;
        }
      }
      catch (raw_exn){
        var exn = Js_exn.internalToOCamlException(raw_exn);
        return prerr_list(/* :: */[
                    "test",
                    /* :: */[
                      name,
                      /* :: */[
                        "with parameter",
                        /* :: */[
                          Pervasives.string_of_int(v),
                          /* :: */[
                            "failed with exception",
                            /* :: */[
                              Printexc.to_string(exn),
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]);
      }
    };
    return List.iter(aux, pick(n, max_cost, costs));
  };
  var match = item[1];
  var name = item[0];
  switch (match.tag | 0) {
    case 0 : 
        var match$1 = match[0];
        if (compare_cost(match$1[2], max_cost) <= 0 && /* true */1) {
          return run_unit(name, match$1[0], match$1[1]);
        } else {
          return 0;
        }
    case 1 : 
        var match$2 = match[0];
        return run_int(name, match$2[0], match$2[1], match$2[2], match$2[3]);
    case 2 : 
        var match$3 = match[0];
        var test$1 = match$3[1];
        if (compare_cost(match$3[2], max_cost) <= 0 && /* true */1) {
          var aux = function (param) {
            var name$1 = name + ("." + param[0]);
            return run_unit(name$1, param[1], test$1);
          };
          return List.iter(aux, match$3[0]);
        } else {
          return 0;
        }
        break;
    case 3 : 
        var match$4 = match[0];
        var costs = match$4[3];
        var test$2 = match$4[2];
        var prepare = match$4[1];
        var aux$1 = function (param) {
          var name$1 = name + ("." + param[0]);
          return run_int(name$1, param[1], prepare, test$2, costs);
        };
        return List.iter(aux$1, match$4[0]);
    
  }
}

function string_of_cost(param) {
  switch (param) {
    case 0 : 
        return "short";
    case 1 : 
        return "long";
    case 2 : 
        return "longer";
    
  }
}

function string_of_range(param) {
  if (typeof param === "number") {
    return "any";
  } else if (param.tag) {
    return "[" + ($$String.concat("; ", List.map(Pervasives.string_of_int, param[0])) + "]");
  } else {
    return "[" + (Pervasives.string_of_int(param[0]) + (" ... " + (Pervasives.string_of_int(param[1]) + "]")));
  }
}

function list(output, l) {
  return List.iter((function (param) {
                var match = param[1];
                var name = param[0];
                switch (match.tag | 0) {
                  case 0 : 
                      return Curry._2(Printf.fprintf(output, /* Format */[
                                      /* String_literal */Block.__(11, [
                                          "  ",
                                          /* String */Block.__(2, [
                                              /* No_padding */0,
                                              /* String_literal */Block.__(11, [
                                                  ": ",
                                                  /* String */Block.__(2, [
                                                      /* No_padding */0,
                                                      /* Char_literal */Block.__(12, [
                                                          /* "\n" */10,
                                                          /* End_of_format */0
                                                        ])
                                                    ])
                                                ])
                                            ])
                                        ]),
                                      "  %s: %s\n"
                                    ]), name, string_of_cost(match[0][2]));
                  case 1 : 
                      Curry._1(Printf.fprintf(output, /* Format */[
                                /* String_literal */Block.__(11, [
                                    "  ",
                                    /* String */Block.__(2, [
                                        /* No_padding */0,
                                        /* String_literal */Block.__(11, [
                                            ":\n",
                                            /* End_of_format */0
                                          ])
                                      ])
                                  ]),
                                "  %s:\n"
                              ]), name);
                      return List.iter((function (param) {
                                    return Curry._2(Printf.fprintf(output, /* Format */[
                                                    /* String_literal */Block.__(11, [
                                                        "    ",
                                                        /* String */Block.__(2, [
                                                            /* No_padding */0,
                                                            /* String_literal */Block.__(11, [
                                                                ": ",
                                                                /* String */Block.__(2, [
                                                                    /* No_padding */0,
                                                                    /* Char_literal */Block.__(12, [
                                                                        /* "\n" */10,
                                                                        /* End_of_format */0
                                                                      ])
                                                                  ])
                                                              ])
                                                          ])
                                                      ]),
                                                    "    %s: %s\n"
                                                  ]), string_of_cost(param[1]), string_of_range(param[0]));
                                  }), match[0][3]);
                  case 2 : 
                      var match$1 = match[0];
                      Curry._2(Printf.fprintf(output, /* Format */[
                                /* String_literal */Block.__(11, [
                                    "  ",
                                    /* String */Block.__(2, [
                                        /* No_padding */0,
                                        /* String_literal */Block.__(11, [
                                            ": ",
                                            /* String */Block.__(2, [
                                                /* No_padding */0,
                                                /* Char_literal */Block.__(12, [
                                                    /* "\n" */10,
                                                    /* End_of_format */0
                                                  ])
                                              ])
                                          ])
                                      ])
                                  ]),
                                "  %s: %s\n"
                              ]), name, string_of_cost(match$1[2]));
                      return List.iter((function (param) {
                                    return Curry._1(Printf.fprintf(output, /* Format */[
                                                    /* String_literal */Block.__(11, [
                                                        "  - ",
                                                        /* String */Block.__(2, [
                                                            /* No_padding */0,
                                                            /* Char_literal */Block.__(12, [
                                                                /* "\n" */10,
                                                                /* End_of_format */0
                                                              ])
                                                          ])
                                                      ]),
                                                    "  - %s\n"
                                                  ]), param[0]);
                                  }), match$1[0]);
                  case 3 : 
                      var match$2 = match[0];
                      Curry._1(Printf.fprintf(output, /* Format */[
                                /* String_literal */Block.__(11, [
                                    "  ",
                                    /* String */Block.__(2, [
                                        /* No_padding */0,
                                        /* String_literal */Block.__(11, [
                                            ":\n",
                                            /* End_of_format */0
                                          ])
                                      ])
                                  ]),
                                "  %s:\n"
                              ]), name);
                      List.iter((function (param) {
                              return Curry._2(Printf.fprintf(output, /* Format */[
                                              /* String_literal */Block.__(11, [
                                                  "    ",
                                                  /* String */Block.__(2, [
                                                      /* No_padding */0,
                                                      /* String_literal */Block.__(11, [
                                                          ": ",
                                                          /* String */Block.__(2, [
                                                              /* No_padding */0,
                                                              /* Char_literal */Block.__(12, [
                                                                  /* "\n" */10,
                                                                  /* End_of_format */0
                                                                ])
                                                            ])
                                                        ])
                                                    ])
                                                ]),
                                              "    %s: %s\n"
                                            ]), string_of_cost(param[1]), string_of_range(param[0]));
                            }), match$2[3]);
                      return List.iter((function (param) {
                                    return Curry._1(Printf.fprintf(output, /* Format */[
                                                    /* String_literal */Block.__(11, [
                                                        "  - ",
                                                        /* String */Block.__(2, [
                                                            /* No_padding */0,
                                                            /* Char_literal */Block.__(12, [
                                                                /* "\n" */10,
                                                                /* End_of_format */0
                                                              ])
                                                          ])
                                                      ]),
                                                    "  - %s\n"
                                                  ]), param[0]);
                                  }), match$2[0]);
                  
                }
              }), l);
}

var Tester = /* module */[
  /* pick_any */pick_any,
  /* range */range,
  /* pick_range */pick_range,
  /* pick_list */pick_list,
  /* pick_values */pick_values,
  /* pick */pick,
  /* errors */errors,
  /* in_selection */in_selection,
  /* test */test,
  /* string_of_cost */string_of_cost,
  /* string_of_range */string_of_range,
  /* list */list
];

function exceeded_allowed_time(allowed_time_span, t1) {
  var t2 = Caml_sys.caml_sys_time(/* () */0);
  return Caml_obj.caml_greaterthan(t2 - t1, allowed_time_span);
}

function run_tests(config, functions) {
  return List.iter((function (param) {
                return test(config, param);
              }), functions);
}

function run_all(config, functions) {
  run_tests(config, functions);
  if (errors[0]) {
    return Pervasives.exit(1);
  } else {
    return /* [] */0;
  }
}

function with_output(funct, output_file) {
  var output = output_file ? Pervasives.open_out(output_file[0]) : Pervasives.stdout;
  try {
    return Curry._1(funct, output);
  }
  catch (e){
    Pervasives.close_out(output);
    throw e;
  }
}

function run($staropt$star, functions) {
  var conf = $staropt$star ? $staropt$star[0] : /* Some */[parse(/* () */0)];
  if (conf) {
    var match = conf[0];
    if (typeof match === "number") {
      var f = function (output) {
        return Curry._1(Printf.fprintf(output, /* Format */[
                        /* Int */Block.__(4, [
                            /* Int_i */3,
                            /* No_padding */0,
                            /* No_precision */0,
                            /* End_of_format */0
                          ]),
                        "%i"
                      ]), List.fold_left((function (acc, param) {
                          var funs = param[1];
                          switch (funs.tag | 0) {
                            case 0 : 
                            case 1 : 
                                return acc + 1 | 0;
                            case 2 : 
                            case 3 : 
                                return acc + List.length(funs[0][0]) | 0;
                            
                          }
                        }), 0, functions));
      };
      return with_output(f, /* None */0);
    } else if (match[0] >= 848054398) {
      var raw = match[1];
      var f$1 = function (output) {
        if (raw) {
          return List.iter((function (param) {
                        return Curry._1(Printf.fprintf(output, /* Format */[
                                        /* String */Block.__(2, [
                                            /* No_padding */0,
                                            /* Char_literal */Block.__(12, [
                                                /* "\n" */10,
                                                /* End_of_format */0
                                              ])
                                          ]),
                                        "%s\n"
                                      ]), param[0]);
                      }), functions);
        } else {
          Printf.fprintf(output, /* Format */[
                /* String_literal */Block.__(11, [
                    "benchmarks:\n",
                    /* End_of_format */0
                  ]),
                "benchmarks:\n"
              ]);
          return list(output, functions);
        }
      };
      return with_output(f$1, /* None */0);
    } else {
      var newrecord = match[1].slice();
      var results = run_all((newrecord[/* verbosity */0] = /* High */803693442, newrecord[/* maximal_cost */6] = /* Longer */2, newrecord), functions);
      return List.iter((function (param) {
                    return output$1(Pervasives.stdout, param);
                  }), results);
    }
  } else {
    return Pervasives.failwith("error");
  }
}

exports.compare_cost          = compare_cost;
exports.print_list            = print_list;
exports.prerr_list            = prerr_list;
exports.StringSet             = StringSet;
exports.Float                 = Float;
exports.Time                  = Time;
exports.Defaults              = Defaults;
exports.Config                = Config;
exports.Measurement_sample    = Measurement_sample;
exports.Measurement           = Measurement;
exports.stabilize_gc          = stabilize_gc;
exports.Tester                = Tester;
exports.exceeded_allowed_time = exceeded_allowed_time;
exports.run_tests             = run_tests;
exports.run_all               = run_all;
exports.with_output           = with_output;
exports.run                   = run;
/* include Not a pure module */


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Sys                     = __webpack_require__(22);
var List                    = __webpack_require__(7);
var Block                   = __webpack_require__(5);
var Bytes                   = __webpack_require__(11);
var Curry                   = __webpack_require__(1);
var Buffer                  = __webpack_require__(12);
var Js_exn                  = __webpack_require__(10);
var Printf                  = __webpack_require__(18);
var $$String                = __webpack_require__(13);
var Caml_obj                = __webpack_require__(4);
var Caml_array              = __webpack_require__(8);
var Pervasives              = __webpack_require__(2);
var Caml_format             = __webpack_require__(16);
var Caml_string             = __webpack_require__(3);
var Caml_exceptions         = __webpack_require__(9);
var Caml_builtin_exceptions = __webpack_require__(0);

var Bad = Caml_exceptions.create("Arg.Bad");

var Help = Caml_exceptions.create("Arg.Help");

var Stop = Caml_exceptions.create("Arg.Stop");

function assoc3(x, _l) {
  while(true) {
    var l = _l;
    if (l) {
      var match = l[0];
      if (Caml_obj.caml_equal(match[0], x)) {
        return match[1];
      } else {
        _l = l[1];
        continue ;
        
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function make_symlist(prefix, sep, suffix, l) {
  if (l) {
    return List.fold_left((function (x, y) {
                  return x + (sep + y);
                }), prefix + l[0], l[1]) + suffix;
  } else {
    return "<none>";
  }
}

function help_action() {
  throw [
        Stop,
        /* Unknown */Block.__(0, ["-help"])
      ];
}

function add_help(speclist) {
  var add1;
  try {
    assoc3("-help", speclist);
    add1 = /* [] */0;
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      add1 = /* :: */[
        /* tuple */[
          "-help",
          /* Unit */Block.__(0, [help_action]),
          " Display this list of options"
        ],
        /* [] */0
      ];
    } else {
      throw exn;
    }
  }
  var add2;
  try {
    assoc3("--help", speclist);
    add2 = /* [] */0;
  }
  catch (exn$1){
    if (exn$1 === Caml_builtin_exceptions.not_found) {
      add2 = /* :: */[
        /* tuple */[
          "--help",
          /* Unit */Block.__(0, [help_action]),
          " Display this list of options"
        ],
        /* [] */0
      ];
    } else {
      throw exn$1;
    }
  }
  return Pervasives.$at(speclist, Pervasives.$at(add1, add2));
}

function usage_b(buf, speclist, errmsg) {
  Curry._1(Printf.bprintf(buf, /* Format */[
            /* String */Block.__(2, [
                /* No_padding */0,
                /* Char_literal */Block.__(12, [
                    /* "\n" */10,
                    /* End_of_format */0
                  ])
              ]),
            "%s\n"
          ]), errmsg);
  return List.iter((function (param) {
                var buf$1 = buf;
                var param$1 = param;
                var doc = param$1[2];
                if (doc.length) {
                  var spec = param$1[1];
                  var key = param$1[0];
                  if (spec.tag === 11) {
                    return Curry._3(Printf.bprintf(buf$1, /* Format */[
                                    /* String_literal */Block.__(11, [
                                        "  ",
                                        /* String */Block.__(2, [
                                            /* No_padding */0,
                                            /* Char_literal */Block.__(12, [
                                                /* " " */32,
                                                /* String */Block.__(2, [
                                                    /* No_padding */0,
                                                    /* String */Block.__(2, [
                                                        /* No_padding */0,
                                                        /* Char_literal */Block.__(12, [
                                                            /* "\n" */10,
                                                            /* End_of_format */0
                                                          ])
                                                      ])
                                                  ])
                                              ])
                                          ])
                                      ]),
                                    "  %s %s%s\n"
                                  ]), key, make_symlist("{", "|", "}", spec[0]), doc);
                  } else {
                    return Curry._2(Printf.bprintf(buf$1, /* Format */[
                                    /* String_literal */Block.__(11, [
                                        "  ",
                                        /* String */Block.__(2, [
                                            /* No_padding */0,
                                            /* Char_literal */Block.__(12, [
                                                /* " " */32,
                                                /* String */Block.__(2, [
                                                    /* No_padding */0,
                                                    /* Char_literal */Block.__(12, [
                                                        /* "\n" */10,
                                                        /* End_of_format */0
                                                      ])
                                                  ])
                                              ])
                                          ])
                                      ]),
                                    "  %s %s\n"
                                  ]), key, doc);
                  }
                } else {
                  return 0;
                }
              }), add_help(speclist));
}

function usage_string(speclist, errmsg) {
  var b = Buffer.create(200);
  usage_b(b, speclist, errmsg);
  return Buffer.contents(b);
}

function usage(speclist, errmsg) {
  return Curry._1(Printf.eprintf(/* Format */[
                  /* String */Block.__(2, [
                      /* No_padding */0,
                      /* End_of_format */0
                    ]),
                  "%s"
                ]), usage_string(speclist, errmsg));
}

var current = [0];

function parse_argv_dynamic($staropt$star, argv, speclist, anonfun, errmsg) {
  var current$1 = $staropt$star ? $staropt$star[0] : current;
  var l = argv.length;
  var b = Buffer.create(200);
  var initpos = current$1[0];
  var stop = function (error) {
    var progname = initpos < l ? Caml_array.caml_array_get(argv, initpos) : "(?)";
    switch (error.tag | 0) {
      case 0 : 
          var s = error[0];
          switch (s) {
            case "--help" : 
            case "-help" : 
                break;
            default:
              Curry._2(Printf.bprintf(b, /* Format */[
                        /* String */Block.__(2, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": unknown option '",
                                /* String */Block.__(2, [
                                    /* No_padding */0,
                                    /* String_literal */Block.__(11, [
                                        "'.\n",
                                        /* End_of_format */0
                                      ])
                                  ])
                              ])
                          ]),
                        "%s: unknown option '%s'.\n"
                      ]), progname, s);
          }
          break;
      case 1 : 
          Curry._4(Printf.bprintf(b, /* Format */[
                    /* String */Block.__(2, [
                        /* No_padding */0,
                        /* String_literal */Block.__(11, [
                            ": wrong argument '",
                            /* String */Block.__(2, [
                                /* No_padding */0,
                                /* String_literal */Block.__(11, [
                                    "'; option '",
                                    /* String */Block.__(2, [
                                        /* No_padding */0,
                                        /* String_literal */Block.__(11, [
                                            "' expects ",
                                            /* String */Block.__(2, [
                                                /* No_padding */0,
                                                /* String_literal */Block.__(11, [
                                                    ".\n",
                                                    /* End_of_format */0
                                                  ])
                                              ])
                                          ])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "%s: wrong argument '%s'; option '%s' expects %s.\n"
                  ]), progname, error[1], error[0], error[2]);
          break;
      case 2 : 
          Curry._2(Printf.bprintf(b, /* Format */[
                    /* String */Block.__(2, [
                        /* No_padding */0,
                        /* String_literal */Block.__(11, [
                            ": option '",
                            /* String */Block.__(2, [
                                /* No_padding */0,
                                /* String_literal */Block.__(11, [
                                    "' needs an argument.\n",
                                    /* End_of_format */0
                                  ])
                              ])
                          ])
                      ]),
                    "%s: option '%s' needs an argument.\n"
                  ]), progname, error[0]);
          break;
      case 3 : 
          Curry._2(Printf.bprintf(b, /* Format */[
                    /* String */Block.__(2, [
                        /* No_padding */0,
                        /* String_literal */Block.__(11, [
                            ": ",
                            /* String */Block.__(2, [
                                /* No_padding */0,
                                /* String_literal */Block.__(11, [
                                    ".\n",
                                    /* End_of_format */0
                                  ])
                              ])
                          ])
                      ]),
                    "%s: %s.\n"
                  ]), progname, error[0]);
          break;
      
    }
    usage_b(b, speclist[0], errmsg);
    if (Caml_obj.caml_equal(error, /* Unknown */Block.__(0, ["-help"])) || Caml_obj.caml_equal(error, /* Unknown */Block.__(0, ["--help"]))) {
      throw [
            Help,
            Buffer.contents(b)
          ];
    } else {
      throw [
            Bad,
            Buffer.contents(b)
          ];
    }
  };
  current$1[0] = current$1[0] + 1 | 0;
  while(current$1[0] < l) {
    var s = Caml_array.caml_array_get(argv, current$1[0]);
    if (s.length >= 1 && Caml_string.get(s, 0) === /* "-" */45) {
      var action;
      try {
        action = assoc3(s, speclist[0]);
      }
      catch (exn){
        if (exn === Caml_builtin_exceptions.not_found) {
          action = stop(/* Unknown */Block.__(0, [s]));
        } else {
          throw exn;
        }
      }
      try {
        var treat_action = (function(s){
        return function treat_action(param) {
          switch (param.tag | 0) {
            case 0 : 
                return Curry._1(param[0], /* () */0);
            case 1 : 
                if ((current$1[0] + 1 | 0) < l) {
                  var arg = Caml_array.caml_array_get(argv, current$1[0] + 1 | 0);
                  try {
                    Curry._1(param[0], Pervasives.bool_of_string(arg));
                  }
                  catch (raw_exn){
                    var exn = Js_exn.internalToOCamlException(raw_exn);
                    if (exn[0] === Caml_builtin_exceptions.invalid_argument) {
                      if (exn[1] === "bool_of_string") {
                        throw [
                              Stop,
                              /* Wrong */Block.__(1, [
                                  s,
                                  arg,
                                  "a boolean"
                                ])
                            ];
                      } else {
                        throw exn;
                      }
                    } else {
                      throw exn;
                    }
                  }
                  current$1[0] = current$1[0] + 1 | 0;
                  return /* () */0;
                } else {
                  throw [
                        Stop,
                        /* Missing */Block.__(2, [s])
                      ];
                }
                break;
            case 2 : 
                param[0][0] = /* true */1;
                return /* () */0;
            case 3 : 
                param[0][0] = /* false */0;
                return /* () */0;
            case 4 : 
                if ((current$1[0] + 1 | 0) < l) {
                  Curry._1(param[0], Caml_array.caml_array_get(argv, current$1[0] + 1 | 0));
                  current$1[0] = current$1[0] + 1 | 0;
                  return /* () */0;
                } else {
                  throw [
                        Stop,
                        /* Missing */Block.__(2, [s])
                      ];
                }
                break;
            case 5 : 
                if ((current$1[0] + 1 | 0) < l) {
                  param[0][0] = Caml_array.caml_array_get(argv, current$1[0] + 1 | 0);
                  current$1[0] = current$1[0] + 1 | 0;
                  return /* () */0;
                } else {
                  throw [
                        Stop,
                        /* Missing */Block.__(2, [s])
                      ];
                }
                break;
            case 6 : 
                if ((current$1[0] + 1 | 0) < l) {
                  var arg$1 = Caml_array.caml_array_get(argv, current$1[0] + 1 | 0);
                  try {
                    Curry._1(param[0], Caml_format.caml_int_of_string(arg$1));
                  }
                  catch (raw_exn$1){
                    var exn$1 = Js_exn.internalToOCamlException(raw_exn$1);
                    if (exn$1[0] === Caml_builtin_exceptions.failure) {
                      if (exn$1[1] === "int_of_string") {
                        throw [
                              Stop,
                              /* Wrong */Block.__(1, [
                                  s,
                                  arg$1,
                                  "an integer"
                                ])
                            ];
                      } else {
                        throw exn$1;
                      }
                    } else {
                      throw exn$1;
                    }
                  }
                  current$1[0] = current$1[0] + 1 | 0;
                  return /* () */0;
                } else {
                  throw [
                        Stop,
                        /* Missing */Block.__(2, [s])
                      ];
                }
                break;
            case 7 : 
                if ((current$1[0] + 1 | 0) < l) {
                  var arg$2 = Caml_array.caml_array_get(argv, current$1[0] + 1 | 0);
                  try {
                    param[0][0] = Caml_format.caml_int_of_string(arg$2);
                  }
                  catch (raw_exn$2){
                    var exn$2 = Js_exn.internalToOCamlException(raw_exn$2);
                    if (exn$2[0] === Caml_builtin_exceptions.failure) {
                      if (exn$2[1] === "int_of_string") {
                        throw [
                              Stop,
                              /* Wrong */Block.__(1, [
                                  s,
                                  arg$2,
                                  "an integer"
                                ])
                            ];
                      } else {
                        throw exn$2;
                      }
                    } else {
                      throw exn$2;
                    }
                  }
                  current$1[0] = current$1[0] + 1 | 0;
                  return /* () */0;
                } else {
                  throw [
                        Stop,
                        /* Missing */Block.__(2, [s])
                      ];
                }
                break;
            case 8 : 
                if ((current$1[0] + 1 | 0) < l) {
                  var arg$3 = Caml_array.caml_array_get(argv, current$1[0] + 1 | 0);
                  try {
                    Curry._1(param[0], Caml_format.caml_float_of_string(arg$3));
                  }
                  catch (raw_exn$3){
                    var exn$3 = Js_exn.internalToOCamlException(raw_exn$3);
                    if (exn$3[0] === Caml_builtin_exceptions.failure) {
                      if (exn$3[1] === "float_of_string") {
                        throw [
                              Stop,
                              /* Wrong */Block.__(1, [
                                  s,
                                  arg$3,
                                  "a float"
                                ])
                            ];
                      } else {
                        throw exn$3;
                      }
                    } else {
                      throw exn$3;
                    }
                  }
                  current$1[0] = current$1[0] + 1 | 0;
                  return /* () */0;
                } else {
                  throw [
                        Stop,
                        /* Missing */Block.__(2, [s])
                      ];
                }
                break;
            case 9 : 
                if ((current$1[0] + 1 | 0) < l) {
                  var arg$4 = Caml_array.caml_array_get(argv, current$1[0] + 1 | 0);
                  try {
                    param[0][0] = Caml_format.caml_float_of_string(arg$4);
                  }
                  catch (raw_exn$4){
                    var exn$4 = Js_exn.internalToOCamlException(raw_exn$4);
                    if (exn$4[0] === Caml_builtin_exceptions.failure) {
                      if (exn$4[1] === "float_of_string") {
                        throw [
                              Stop,
                              /* Wrong */Block.__(1, [
                                  s,
                                  arg$4,
                                  "a float"
                                ])
                            ];
                      } else {
                        throw exn$4;
                      }
                    } else {
                      throw exn$4;
                    }
                  }
                  current$1[0] = current$1[0] + 1 | 0;
                  return /* () */0;
                } else {
                  throw [
                        Stop,
                        /* Missing */Block.__(2, [s])
                      ];
                }
                break;
            case 10 : 
                return List.iter(treat_action, param[0]);
            case 11 : 
                if ((current$1[0] + 1 | 0) < l) {
                  var symb = param[0];
                  var arg$5 = Caml_array.caml_array_get(argv, current$1[0] + 1 | 0);
                  if (List.mem(arg$5, symb)) {
                    Curry._1(param[1], Caml_array.caml_array_get(argv, current$1[0] + 1 | 0));
                    current$1[0] = current$1[0] + 1 | 0;
                    return /* () */0;
                  } else {
                    throw [
                          Stop,
                          /* Wrong */Block.__(1, [
                              s,
                              arg$5,
                              "one of: " + make_symlist("", " ", "", symb)
                            ])
                        ];
                  }
                } else {
                  throw [
                        Stop,
                        /* Missing */Block.__(2, [s])
                      ];
                }
                break;
            case 12 : 
                var f = param[0];
                while(current$1[0] < (l - 1 | 0)) {
                  Curry._1(f, Caml_array.caml_array_get(argv, current$1[0] + 1 | 0));
                  current$1[0] = current$1[0] + 1 | 0;
                };
                return /* () */0;
            
          }
        }
        }(s));
        treat_action(action);
      }
      catch (raw_exn){
        var exn$1 = Js_exn.internalToOCamlException(raw_exn);
        if (exn$1[0] === Bad) {
          stop(/* Message */Block.__(3, [exn$1[1]]));
        } else if (exn$1[0] === Stop) {
          stop(exn$1[1]);
        } else {
          throw exn$1;
        }
      }
      current$1[0] = current$1[0] + 1 | 0;
    } else {
      try {
        Curry._1(anonfun, s);
      }
      catch (raw_exn$1){
        var exn$2 = Js_exn.internalToOCamlException(raw_exn$1);
        if (exn$2[0] === Bad) {
          stop(/* Message */Block.__(3, [exn$2[1]]));
        } else {
          throw exn$2;
        }
      }
      current$1[0] = current$1[0] + 1 | 0;
    }
  };
  return /* () */0;
}

function parse_argv($staropt$star, argv, speclist, anonfun, errmsg) {
  var current$1 = $staropt$star ? $staropt$star[0] : current;
  return parse_argv_dynamic(/* Some */[current$1], argv, [speclist], anonfun, errmsg);
}

function parse(l, f, msg) {
  try {
    return parse_argv(/* None */0, Sys.argv, l, f, msg);
  }
  catch (raw_exn){
    var exn = Js_exn.internalToOCamlException(raw_exn);
    if (exn[0] === Bad) {
      Curry._1(Printf.eprintf(/* Format */[
                /* String */Block.__(2, [
                    /* No_padding */0,
                    /* End_of_format */0
                  ]),
                "%s"
              ]), exn[1]);
      return Pervasives.exit(2);
    } else if (exn[0] === Help) {
      Curry._1(Printf.printf(/* Format */[
                /* String */Block.__(2, [
                    /* No_padding */0,
                    /* End_of_format */0
                  ]),
                "%s"
              ]), exn[1]);
      return Pervasives.exit(0);
    } else {
      throw exn;
    }
  }
}

function parse_dynamic(l, f, msg) {
  try {
    return parse_argv_dynamic(/* None */0, Sys.argv, l, f, msg);
  }
  catch (raw_exn){
    var exn = Js_exn.internalToOCamlException(raw_exn);
    if (exn[0] === Bad) {
      Curry._1(Printf.eprintf(/* Format */[
                /* String */Block.__(2, [
                    /* No_padding */0,
                    /* End_of_format */0
                  ]),
                "%s"
              ]), exn[1]);
      return Pervasives.exit(2);
    } else if (exn[0] === Help) {
      Curry._1(Printf.printf(/* Format */[
                /* String */Block.__(2, [
                    /* No_padding */0,
                    /* End_of_format */0
                  ]),
                "%s"
              ]), exn[1]);
      return Pervasives.exit(0);
    } else {
      throw exn;
    }
  }
}

function second_word(s) {
  var len = s.length;
  try {
    var _n = Bytes.index(Caml_string.bytes_of_string(s), /* " " */32);
    while(true) {
      var n = _n;
      if (n >= len) {
        return len;
      } else if (Caml_string.get(s, n) === /* " " */32) {
        _n = n + 1 | 0;
        continue ;
        
      } else {
        return n;
      }
    };
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      return len;
    } else {
      throw exn;
    }
  }
}

function max_arg_len(cur, param) {
  var kwd = param[0];
  if (param[1].tag === 11) {
    return Pervasives.max(cur, kwd.length);
  } else {
    return Pervasives.max(cur, kwd.length + second_word(param[2]) | 0);
  }
}

function align($staropt$star, speclist) {
  var limit = $staropt$star ? $staropt$star[0] : Pervasives.max_int;
  var completed = add_help(speclist);
  var len = List.fold_left(max_arg_len, 0, completed);
  var len$1 = Pervasives.min(len, limit);
  return List.map((function (param) {
                var len$2 = len$1;
                var ksd = param;
                var spec = ksd[1];
                var kwd = ksd[0];
                if (ksd[2] === "") {
                  return ksd;
                } else if (spec.tag === 11) {
                  var msg = ksd[2];
                  var cutcol = second_word(msg);
                  var n = Pervasives.max(0, len$2 - cutcol | 0) + 3 | 0;
                  var spaces = Caml_string.bytes_to_string(Bytes.make(n, /* " " */32));
                  return /* tuple */[
                          kwd,
                          spec,
                          "\n" + (spaces + msg)
                        ];
                } else {
                  var msg$1 = ksd[2];
                  var cutcol$1 = second_word(msg$1);
                  var kwd_len = kwd.length;
                  var diff = (len$2 - kwd_len | 0) - cutcol$1 | 0;
                  if (diff <= 0) {
                    return /* tuple */[
                            kwd,
                            spec,
                            msg$1
                          ];
                  } else {
                    var spaces$1 = Caml_string.bytes_to_string(Bytes.make(diff, /* " " */32));
                    var prefix = $$String.sub(msg$1, 0, cutcol$1);
                    var suffix = $$String.sub(msg$1, cutcol$1, msg$1.length - cutcol$1 | 0);
                    return /* tuple */[
                            kwd,
                            spec,
                            prefix + (spaces$1 + suffix)
                          ];
                  }
                }
              }), completed);
}

exports.parse              = parse;
exports.parse_dynamic      = parse_dynamic;
exports.parse_argv         = parse_argv;
exports.parse_argv_dynamic = parse_argv_dynamic;
exports.Help               = Help;
exports.Bad                = Bad;
exports.usage              = usage;
exports.usage_string       = usage_string;
exports.align              = align;
exports.current            = current;
/* No side effect */


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Char                     = __webpack_require__(23);
var Block                    = __webpack_require__(5);
var Bytes                    = __webpack_require__(11);
var Curry                    = __webpack_require__(1);
var Buffer                   = __webpack_require__(12);
var Js_exn                   = __webpack_require__(10);
var $$String                 = __webpack_require__(13);
var Caml_io                  = __webpack_require__(14);
var Caml_obj                 = __webpack_require__(4);
var Caml_bytes               = __webpack_require__(31);
var Caml_float               = __webpack_require__(32);
var Caml_int32               = __webpack_require__(6);
var Pervasives               = __webpack_require__(2);
var Caml_format              = __webpack_require__(16);
var Caml_string              = __webpack_require__(3);
var Caml_exceptions          = __webpack_require__(9);
var Caml_builtin_exceptions  = __webpack_require__(0);
var CamlinternalFormatBasics = __webpack_require__(21);

function create_char_set() {
  return Bytes.make(32, /* "\000" */0);
}

function add_in_char_set(char_set, c) {
  var str_ind = (c >>> 3);
  var mask = (1 << (c & 7));
  char_set[str_ind] = Pervasives.char_of_int(Caml_bytes.get(char_set, str_ind) | mask);
  return /* () */0;
}

var freeze_char_set = Bytes.to_string;

function rev_char_set(char_set) {
  var char_set$prime = Bytes.make(32, /* "\000" */0);
  for(var i = 0; i <= 31; ++i){
    char_set$prime[i] = Pervasives.char_of_int(Caml_string.get(char_set, i) ^ 255);
  }
  return Caml_string.bytes_to_string(char_set$prime);
}

function is_in_char_set(char_set, c) {
  var str_ind = (c >>> 3);
  var mask = (1 << (c & 7));
  return +((Caml_string.get(char_set, str_ind) & mask) !== 0);
}

function pad_of_pad_opt(pad_opt) {
  if (pad_opt) {
    return /* Lit_padding */Block.__(0, [
              /* Right */1,
              pad_opt[0]
            ]);
  } else {
    return /* No_padding */0;
  }
}

function prec_of_prec_opt(prec_opt) {
  if (prec_opt) {
    return /* Lit_precision */[prec_opt[0]];
  } else {
    return /* No_precision */0;
  }
}

function param_format_of_ignored_format(ign, fmt) {
  if (typeof ign === "number") {
    switch (ign) {
      case 0 : 
          return /* Param_format_EBB */[/* Char */Block.__(0, [fmt])];
      case 1 : 
          return /* Param_format_EBB */[/* Caml_char */Block.__(1, [fmt])];
      case 2 : 
          return /* Param_format_EBB */[/* Bool */Block.__(9, [fmt])];
      case 3 : 
          return /* Param_format_EBB */[/* Reader */Block.__(19, [fmt])];
      case 4 : 
          return /* Param_format_EBB */[/* Scan_next_char */Block.__(22, [fmt])];
      
    }
  } else {
    switch (ign.tag | 0) {
      case 0 : 
          return /* Param_format_EBB */[/* String */Block.__(2, [
                      pad_of_pad_opt(ign[0]),
                      fmt
                    ])];
      case 1 : 
          return /* Param_format_EBB */[/* Caml_string */Block.__(3, [
                      pad_of_pad_opt(ign[0]),
                      fmt
                    ])];
      case 2 : 
          return /* Param_format_EBB */[/* Int */Block.__(4, [
                      ign[0],
                      pad_of_pad_opt(ign[1]),
                      /* No_precision */0,
                      fmt
                    ])];
      case 3 : 
          return /* Param_format_EBB */[/* Int32 */Block.__(5, [
                      ign[0],
                      pad_of_pad_opt(ign[1]),
                      /* No_precision */0,
                      fmt
                    ])];
      case 4 : 
          return /* Param_format_EBB */[/* Nativeint */Block.__(6, [
                      ign[0],
                      pad_of_pad_opt(ign[1]),
                      /* No_precision */0,
                      fmt
                    ])];
      case 5 : 
          return /* Param_format_EBB */[/* Int64 */Block.__(7, [
                      ign[0],
                      pad_of_pad_opt(ign[1]),
                      /* No_precision */0,
                      fmt
                    ])];
      case 6 : 
          return /* Param_format_EBB */[/* Float */Block.__(8, [
                      /* Float_f */0,
                      pad_of_pad_opt(ign[0]),
                      prec_of_prec_opt(ign[1]),
                      fmt
                    ])];
      case 7 : 
          return /* Param_format_EBB */[/* Format_arg */Block.__(13, [
                      ign[0],
                      ign[1],
                      fmt
                    ])];
      case 8 : 
          return /* Param_format_EBB */[/* Format_subst */Block.__(14, [
                      ign[0],
                      ign[1],
                      fmt
                    ])];
      case 9 : 
          return /* Param_format_EBB */[/* Scan_char_set */Block.__(20, [
                      ign[0],
                      ign[1],
                      fmt
                    ])];
      case 10 : 
          return /* Param_format_EBB */[/* Scan_get_counter */Block.__(21, [
                      ign[0],
                      fmt
                    ])];
      
    }
  }
}

function buffer_check_size(buf, overhead) {
  var len = buf[/* bytes */1].length;
  var min_len = buf[/* ind */0] + overhead | 0;
  if (min_len > len) {
    var new_len = Pervasives.max((len << 1), min_len);
    var new_str = Caml_string.caml_create_string(new_len);
    Bytes.blit(buf[/* bytes */1], 0, new_str, 0, len);
    buf[/* bytes */1] = new_str;
    return /* () */0;
  } else {
    return 0;
  }
}

function buffer_add_char(buf, c) {
  buffer_check_size(buf, 1);
  buf[/* bytes */1][buf[/* ind */0]] = c;
  buf[/* ind */0] = buf[/* ind */0] + 1 | 0;
  return /* () */0;
}

function buffer_add_string(buf, s) {
  var str_len = s.length;
  buffer_check_size(buf, str_len);
  $$String.blit(s, 0, buf[/* bytes */1], buf[/* ind */0], str_len);
  buf[/* ind */0] = buf[/* ind */0] + str_len | 0;
  return /* () */0;
}

function buffer_contents(buf) {
  return Bytes.sub_string(buf[/* bytes */1], 0, buf[/* ind */0]);
}

function char_of_iconv(iconv) {
  switch (iconv) {
    case 0 : 
    case 1 : 
    case 2 : 
        return /* "d" */100;
    case 3 : 
    case 4 : 
    case 5 : 
        return /* "i" */105;
    case 6 : 
    case 7 : 
        return /* "x" */120;
    case 8 : 
    case 9 : 
        return /* "X" */88;
    case 10 : 
    case 11 : 
        return /* "o" */111;
    case 12 : 
        return /* "u" */117;
    
  }
}

function char_of_fconv(fconv) {
  switch (fconv) {
    case 0 : 
    case 1 : 
    case 2 : 
        return /* "f" */102;
    case 3 : 
    case 4 : 
    case 5 : 
        return /* "e" */101;
    case 6 : 
    case 7 : 
    case 8 : 
        return /* "E" */69;
    case 9 : 
    case 10 : 
    case 11 : 
        return /* "g" */103;
    case 12 : 
    case 13 : 
    case 14 : 
        return /* "G" */71;
    case 15 : 
        return /* "F" */70;
    
  }
}

function char_of_counter(counter) {
  switch (counter) {
    case 0 : 
        return /* "l" */108;
    case 1 : 
        return /* "n" */110;
    case 2 : 
        return /* "N" */78;
    
  }
}

function bprint_char_set(buf, char_set) {
  var print_char = function (buf, i) {
    var c = Pervasives.char_of_int(i);
    if (c !== 37) {
      if (c !== 64) {
        return buffer_add_char(buf, c);
      } else {
        buffer_add_char(buf, /* "%" */37);
        return buffer_add_char(buf, /* "@" */64);
      }
    } else {
      buffer_add_char(buf, /* "%" */37);
      return buffer_add_char(buf, /* "%" */37);
    }
  };
  var print_out = function (set, _i) {
    while(true) {
      var i = _i;
      if (i < 256) {
        if (is_in_char_set(set, Pervasives.char_of_int(i))) {
          var set$1 = set;
          var i$1 = i;
          var match = Pervasives.char_of_int(i$1);
          var switcher = match - 45 | 0;
          if (switcher > 48 || switcher < 0) {
            if (switcher >= 210) {
              return print_char(buf, 255);
            } else {
              return print_second(set$1, i$1 + 1 | 0);
            }
          } else if (switcher > 47 || switcher < 1) {
            return print_out(set$1, i$1 + 1 | 0);
          } else {
            return print_second(set$1, i$1 + 1 | 0);
          }
        } else {
          _i = i + 1 | 0;
          continue ;
          
        }
      } else {
        return 0;
      }
    };
  };
  var print_second = function (set, i) {
    if (is_in_char_set(set, Pervasives.char_of_int(i))) {
      var match = Pervasives.char_of_int(i);
      var exit = 0;
      var switcher = match - 45 | 0;
      if (switcher > 48 || switcher < 0) {
        if (switcher >= 210) {
          print_char(buf, 254);
          return print_char(buf, 255);
        } else {
          exit = 1;
        }
      } else if (switcher > 47 || switcher < 1) {
        if (is_in_char_set(set, Pervasives.char_of_int(i + 1 | 0))) {
          exit = 1;
        } else {
          print_char(buf, i - 1 | 0);
          return print_out(set, i + 1 | 0);
        }
      } else {
        exit = 1;
      }
      if (exit === 1) {
        if (is_in_char_set(set, Pervasives.char_of_int(i + 1 | 0))) {
          var set$1 = set;
          var i$1 = i - 1 | 0;
          var _j = i + 2 | 0;
          while(true) {
            var j = _j;
            if (j === 256 || !is_in_char_set(set$1, Pervasives.char_of_int(j))) {
              print_char(buf, i$1);
              print_char(buf, /* "-" */45);
              print_char(buf, j - 1 | 0);
              if (j < 256) {
                return print_out(set$1, j + 1 | 0);
              } else {
                return 0;
              }
            } else {
              _j = j + 1 | 0;
              continue ;
              
            }
          };
        } else {
          print_char(buf, i - 1 | 0);
          print_char(buf, i);
          return print_out(set, i + 2 | 0);
        }
      }
      
    } else {
      print_char(buf, i - 1 | 0);
      return print_out(set, i + 1 | 0);
    }
  };
  var print_start = function (set) {
    var is_alone = function (c) {
      var match_000 = Char.chr(c - 1 | 0);
      var match_001 = Char.chr(c + 1 | 0);
      if (is_in_char_set(set, c)) {
        return 1 - (is_in_char_set(set, match_000) && is_in_char_set(set, match_001));
      } else {
        return /* false */0;
      }
    };
    if (is_alone(/* "]" */93)) {
      buffer_add_char(buf, /* "]" */93);
    }
    print_out(set, 1);
    if (is_alone(/* "-" */45)) {
      return buffer_add_char(buf, /* "-" */45);
    } else {
      return 0;
    }
  };
  buffer_add_char(buf, /* "[" */91);
  print_start(is_in_char_set(char_set, /* "\000" */0) ? (buffer_add_char(buf, /* "^" */94), rev_char_set(char_set)) : char_set);
  return buffer_add_char(buf, /* "]" */93);
}

function bprint_padty(buf, padty) {
  switch (padty) {
    case 0 : 
        return buffer_add_char(buf, /* "-" */45);
    case 1 : 
        return /* () */0;
    case 2 : 
        return buffer_add_char(buf, /* "0" */48);
    
  }
}

function bprint_ignored_flag(buf, ign_flag) {
  if (ign_flag) {
    return buffer_add_char(buf, /* "_" */95);
  } else {
    return 0;
  }
}

function bprint_pad_opt(buf, pad_opt) {
  if (pad_opt) {
    return buffer_add_string(buf, "" + pad_opt[0]);
  } else {
    return /* () */0;
  }
}

function bprint_padding(buf, pad) {
  if (typeof pad === "number") {
    return /* () */0;
  } else {
    bprint_padty(buf, pad[0]);
    if (pad.tag) {
      return buffer_add_char(buf, /* "*" */42);
    } else {
      return buffer_add_string(buf, "" + pad[1]);
    }
  }
}

function bprint_precision(buf, prec) {
  if (typeof prec === "number") {
    if (prec !== 0) {
      return buffer_add_string(buf, ".*");
    } else {
      return /* () */0;
    }
  } else {
    buffer_add_char(buf, /* "." */46);
    return buffer_add_string(buf, "" + prec[0]);
  }
}

function bprint_iconv_flag(buf, iconv) {
  switch (iconv) {
    case 1 : 
    case 4 : 
        return buffer_add_char(buf, /* "+" */43);
    case 2 : 
    case 5 : 
        return buffer_add_char(buf, /* " " */32);
    case 7 : 
    case 9 : 
    case 11 : 
        return buffer_add_char(buf, /* "#" */35);
    case 0 : 
    case 3 : 
    case 6 : 
    case 8 : 
    case 10 : 
    case 12 : 
        return /* () */0;
    
  }
}

function bprint_int_fmt(buf, ign_flag, iconv, pad, prec) {
  buffer_add_char(buf, /* "%" */37);
  bprint_ignored_flag(buf, ign_flag);
  bprint_iconv_flag(buf, iconv);
  bprint_padding(buf, pad);
  bprint_precision(buf, prec);
  return buffer_add_char(buf, char_of_iconv(iconv));
}

function bprint_altint_fmt(buf, ign_flag, iconv, pad, prec, c) {
  buffer_add_char(buf, /* "%" */37);
  bprint_ignored_flag(buf, ign_flag);
  bprint_iconv_flag(buf, iconv);
  bprint_padding(buf, pad);
  bprint_precision(buf, prec);
  buffer_add_char(buf, c);
  return buffer_add_char(buf, char_of_iconv(iconv));
}

function bprint_fconv_flag(buf, fconv) {
  switch (fconv) {
    case 1 : 
    case 4 : 
    case 7 : 
    case 10 : 
    case 13 : 
        return buffer_add_char(buf, /* "+" */43);
    case 2 : 
    case 5 : 
    case 8 : 
    case 11 : 
    case 14 : 
        return buffer_add_char(buf, /* " " */32);
    case 0 : 
    case 3 : 
    case 6 : 
    case 9 : 
    case 12 : 
    case 15 : 
        return /* () */0;
    
  }
}

function bprint_float_fmt(buf, ign_flag, fconv, pad, prec) {
  buffer_add_char(buf, /* "%" */37);
  bprint_ignored_flag(buf, ign_flag);
  bprint_fconv_flag(buf, fconv);
  bprint_padding(buf, pad);
  bprint_precision(buf, prec);
  return buffer_add_char(buf, char_of_fconv(fconv));
}

function string_of_formatting_lit(formatting_lit) {
  if (typeof formatting_lit === "number") {
    switch (formatting_lit) {
      case 0 : 
          return "@]";
      case 1 : 
          return "@}";
      case 2 : 
          return "@?";
      case 3 : 
          return "@\n";
      case 4 : 
          return "@.";
      case 5 : 
          return "@@";
      case 6 : 
          return "@%";
      
    }
  } else {
    switch (formatting_lit.tag | 0) {
      case 0 : 
      case 1 : 
          return formatting_lit[0];
      case 2 : 
          return "@" + Caml_string.bytes_to_string(Bytes.make(1, formatting_lit[0]));
      
    }
  }
}

function string_of_formatting_gen(formatting_gen) {
  return formatting_gen[0][1];
}

function bprint_char_literal(buf, chr) {
  if (chr !== 37) {
    return buffer_add_char(buf, chr);
  } else {
    return buffer_add_string(buf, "%%");
  }
}

function bprint_string_literal(buf, str) {
  for(var i = 0 ,i_finish = str.length - 1 | 0; i <= i_finish; ++i){
    bprint_char_literal(buf, Caml_string.get(str, i));
  }
  return /* () */0;
}

function bprint_fmtty(buf, _fmtty) {
  while(true) {
    var fmtty = _fmtty;
    if (typeof fmtty === "number") {
      return /* () */0;
    } else {
      switch (fmtty.tag | 0) {
        case 0 : 
            buffer_add_string(buf, "%c");
            _fmtty = fmtty[0];
            continue ;
            case 1 : 
            buffer_add_string(buf, "%s");
            _fmtty = fmtty[0];
            continue ;
            case 2 : 
            buffer_add_string(buf, "%i");
            _fmtty = fmtty[0];
            continue ;
            case 3 : 
            buffer_add_string(buf, "%li");
            _fmtty = fmtty[0];
            continue ;
            case 4 : 
            buffer_add_string(buf, "%ni");
            _fmtty = fmtty[0];
            continue ;
            case 5 : 
            buffer_add_string(buf, "%Li");
            _fmtty = fmtty[0];
            continue ;
            case 6 : 
            buffer_add_string(buf, "%f");
            _fmtty = fmtty[0];
            continue ;
            case 7 : 
            buffer_add_string(buf, "%B");
            _fmtty = fmtty[0];
            continue ;
            case 8 : 
            buffer_add_string(buf, "%{");
            bprint_fmtty(buf, fmtty[0]);
            buffer_add_string(buf, "%}");
            _fmtty = fmtty[1];
            continue ;
            case 9 : 
            buffer_add_string(buf, "%(");
            bprint_fmtty(buf, fmtty[0]);
            buffer_add_string(buf, "%)");
            _fmtty = fmtty[2];
            continue ;
            case 10 : 
            buffer_add_string(buf, "%a");
            _fmtty = fmtty[0];
            continue ;
            case 11 : 
            buffer_add_string(buf, "%t");
            _fmtty = fmtty[0];
            continue ;
            case 12 : 
            buffer_add_string(buf, "%?");
            _fmtty = fmtty[0];
            continue ;
            case 13 : 
            buffer_add_string(buf, "%r");
            _fmtty = fmtty[0];
            continue ;
            case 14 : 
            buffer_add_string(buf, "%_r");
            _fmtty = fmtty[0];
            continue ;
            
      }
    }
  };
}

function int_of_custom_arity(param) {
  if (param) {
    return 1 + int_of_custom_arity(param[0]) | 0;
  } else {
    return 0;
  }
}

function bprint_fmt(buf, fmt) {
  var _fmt = fmt;
  var _ign_flag = /* false */0;
  while(true) {
    var ign_flag = _ign_flag;
    var fmt$1 = _fmt;
    if (typeof fmt$1 === "number") {
      return /* () */0;
    } else {
      switch (fmt$1.tag | 0) {
        case 0 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "c" */99);
            _ign_flag = /* false */0;
            _fmt = fmt$1[0];
            continue ;
            case 1 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "C" */67);
            _ign_flag = /* false */0;
            _fmt = fmt$1[0];
            continue ;
            case 2 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_padding(buf, fmt$1[0]);
            buffer_add_char(buf, /* "s" */115);
            _ign_flag = /* false */0;
            _fmt = fmt$1[1];
            continue ;
            case 3 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_padding(buf, fmt$1[0]);
            buffer_add_char(buf, /* "S" */83);
            _ign_flag = /* false */0;
            _fmt = fmt$1[1];
            continue ;
            case 4 : 
            bprint_int_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2]);
            _ign_flag = /* false */0;
            _fmt = fmt$1[3];
            continue ;
            case 5 : 
            bprint_altint_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2], /* "l" */108);
            _ign_flag = /* false */0;
            _fmt = fmt$1[3];
            continue ;
            case 6 : 
            bprint_altint_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2], /* "n" */110);
            _ign_flag = /* false */0;
            _fmt = fmt$1[3];
            continue ;
            case 7 : 
            bprint_altint_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2], /* "L" */76);
            _ign_flag = /* false */0;
            _fmt = fmt$1[3];
            continue ;
            case 8 : 
            bprint_float_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2]);
            _ign_flag = /* false */0;
            _fmt = fmt$1[3];
            continue ;
            case 9 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "B" */66);
            _ign_flag = /* false */0;
            _fmt = fmt$1[0];
            continue ;
            case 10 : 
            buffer_add_string(buf, "%!");
            _fmt = fmt$1[0];
            continue ;
            case 11 : 
            bprint_string_literal(buf, fmt$1[0]);
            _fmt = fmt$1[1];
            continue ;
            case 12 : 
            bprint_char_literal(buf, fmt$1[0]);
            _fmt = fmt$1[1];
            continue ;
            case 13 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_pad_opt(buf, fmt$1[0]);
            buffer_add_char(buf, /* "{" */123);
            bprint_fmtty(buf, fmt$1[1]);
            buffer_add_char(buf, /* "%" */37);
            buffer_add_char(buf, /* "}" */125);
            _ign_flag = /* false */0;
            _fmt = fmt$1[2];
            continue ;
            case 14 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_pad_opt(buf, fmt$1[0]);
            buffer_add_char(buf, /* "(" */40);
            bprint_fmtty(buf, fmt$1[1]);
            buffer_add_char(buf, /* "%" */37);
            buffer_add_char(buf, /* ")" */41);
            _ign_flag = /* false */0;
            _fmt = fmt$1[2];
            continue ;
            case 15 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "a" */97);
            _ign_flag = /* false */0;
            _fmt = fmt$1[0];
            continue ;
            case 16 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "t" */116);
            _ign_flag = /* false */0;
            _fmt = fmt$1[0];
            continue ;
            case 17 : 
            bprint_string_literal(buf, string_of_formatting_lit(fmt$1[0]));
            _fmt = fmt$1[1];
            continue ;
            case 18 : 
            bprint_string_literal(buf, "@{");
            bprint_string_literal(buf, string_of_formatting_gen(fmt$1[0]));
            _fmt = fmt$1[1];
            continue ;
            case 19 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, /* "r" */114);
            _ign_flag = /* false */0;
            _fmt = fmt$1[0];
            continue ;
            case 20 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_pad_opt(buf, fmt$1[0]);
            bprint_char_set(buf, fmt$1[1]);
            _ign_flag = /* false */0;
            _fmt = fmt$1[2];
            continue ;
            case 21 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            buffer_add_char(buf, char_of_counter(fmt$1[0]));
            _ign_flag = /* false */0;
            _fmt = fmt$1[1];
            continue ;
            case 22 : 
            buffer_add_char(buf, /* "%" */37);
            bprint_ignored_flag(buf, ign_flag);
            bprint_string_literal(buf, "0c");
            _ign_flag = /* false */0;
            _fmt = fmt$1[0];
            continue ;
            case 23 : 
            var match = param_format_of_ignored_format(fmt$1[0], fmt$1[1]);
            _ign_flag = /* true */1;
            _fmt = match[0];
            continue ;
            case 24 : 
            for(var _i = 1 ,_i_finish = int_of_custom_arity(fmt$1[0]); _i <= _i_finish; ++_i){
              buffer_add_char(buf, /* "%" */37);
              bprint_ignored_flag(buf, ign_flag);
              buffer_add_char(buf, /* "?" */63);
            }
            _ign_flag = /* false */0;
            _fmt = fmt$1[2];
            continue ;
            
      }
    }
  };
}

function string_of_fmt(fmt) {
  var buf = /* record */[
    /* ind */0,
    /* bytes */new Array(16)
  ];
  bprint_fmt(buf, fmt);
  return buffer_contents(buf);
}

function symm(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          return /* Char_ty */Block.__(0, [symm(param[0])]);
      case 1 : 
          return /* String_ty */Block.__(1, [symm(param[0])]);
      case 2 : 
          return /* Int_ty */Block.__(2, [symm(param[0])]);
      case 3 : 
          return /* Int32_ty */Block.__(3, [symm(param[0])]);
      case 4 : 
          return /* Nativeint_ty */Block.__(4, [symm(param[0])]);
      case 5 : 
          return /* Int64_ty */Block.__(5, [symm(param[0])]);
      case 6 : 
          return /* Float_ty */Block.__(6, [symm(param[0])]);
      case 7 : 
          return /* Bool_ty */Block.__(7, [symm(param[0])]);
      case 8 : 
          return /* Format_arg_ty */Block.__(8, [
                    param[0],
                    symm(param[1])
                  ]);
      case 9 : 
          return /* Format_subst_ty */Block.__(9, [
                    param[1],
                    param[0],
                    symm(param[2])
                  ]);
      case 10 : 
          return /* Alpha_ty */Block.__(10, [symm(param[0])]);
      case 11 : 
          return /* Theta_ty */Block.__(11, [symm(param[0])]);
      case 12 : 
          return /* Any_ty */Block.__(12, [symm(param[0])]);
      case 13 : 
          return /* Reader_ty */Block.__(13, [symm(param[0])]);
      case 14 : 
          return /* Ignored_reader_ty */Block.__(14, [symm(param[0])]);
      
    }
  }
}

function fmtty_rel_det(param) {
  if (typeof param === "number") {
    return /* tuple */[
            (function () {
                return /* Refl */0;
              }),
            (function () {
                return /* Refl */0;
              }),
            (function () {
                return /* Refl */0;
              }),
            (function () {
                return /* Refl */0;
              })
          ];
  } else {
    switch (param.tag | 0) {
      case 0 : 
          var match = fmtty_rel_det(param[0]);
          var af = match[1];
          var fa = match[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match[2],
                  match[3]
                ];
      case 1 : 
          var match$1 = fmtty_rel_det(param[0]);
          var af$1 = match$1[1];
          var fa$1 = match$1[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$1[2],
                  match$1[3]
                ];
      case 2 : 
          var match$2 = fmtty_rel_det(param[0]);
          var af$2 = match$2[1];
          var fa$2 = match$2[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$2[2],
                  match$2[3]
                ];
      case 3 : 
          var match$3 = fmtty_rel_det(param[0]);
          var af$3 = match$3[1];
          var fa$3 = match$3[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$3, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$3, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$3[2],
                  match$3[3]
                ];
      case 4 : 
          var match$4 = fmtty_rel_det(param[0]);
          var af$4 = match$4[1];
          var fa$4 = match$4[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$4, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$4, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$4[2],
                  match$4[3]
                ];
      case 5 : 
          var match$5 = fmtty_rel_det(param[0]);
          var af$5 = match$5[1];
          var fa$5 = match$5[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$5, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$5, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$5[2],
                  match$5[3]
                ];
      case 6 : 
          var match$6 = fmtty_rel_det(param[0]);
          var af$6 = match$6[1];
          var fa$6 = match$6[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$6, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$6, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$6[2],
                  match$6[3]
                ];
      case 7 : 
          var match$7 = fmtty_rel_det(param[0]);
          var af$7 = match$7[1];
          var fa$7 = match$7[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$7, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$7, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$7[2],
                  match$7[3]
                ];
      case 8 : 
          var match$8 = fmtty_rel_det(param[1]);
          var af$8 = match$8[1];
          var fa$8 = match$8[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$8, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$8, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$8[2],
                  match$8[3]
                ];
      case 9 : 
          var match$9 = fmtty_rel_det(param[2]);
          var de = match$9[3];
          var ed = match$9[2];
          var af$9 = match$9[1];
          var fa$9 = match$9[0];
          var ty = trans(symm(param[0]), param[1]);
          var match$10 = fmtty_rel_det(ty);
          var jd = match$10[3];
          var dj = match$10[2];
          var ga = match$10[1];
          var ag = match$10[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$9, /* Refl */0);
                      Curry._1(ag, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(ga, /* Refl */0);
                      Curry._1(af$9, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(ed, /* Refl */0);
                      Curry._1(dj, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(jd, /* Refl */0);
                      Curry._1(de, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      case 10 : 
          var match$11 = fmtty_rel_det(param[0]);
          var af$10 = match$11[1];
          var fa$10 = match$11[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$10, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$10, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$11[2],
                  match$11[3]
                ];
      case 11 : 
          var match$12 = fmtty_rel_det(param[0]);
          var af$11 = match$12[1];
          var fa$11 = match$12[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$11, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$11, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$12[2],
                  match$12[3]
                ];
      case 12 : 
          var match$13 = fmtty_rel_det(param[0]);
          var af$12 = match$13[1];
          var fa$12 = match$13[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$12, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$12, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$13[2],
                  match$13[3]
                ];
      case 13 : 
          var match$14 = fmtty_rel_det(param[0]);
          var de$1 = match$14[3];
          var ed$1 = match$14[2];
          var af$13 = match$14[1];
          var fa$13 = match$14[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$13, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$13, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(ed$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(de$1, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      case 14 : 
          var match$15 = fmtty_rel_det(param[0]);
          var de$2 = match$15[3];
          var ed$2 = match$15[2];
          var af$14 = match$15[1];
          var fa$14 = match$15[0];
          return /* tuple */[
                  (function () {
                      Curry._1(fa$14, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(af$14, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(ed$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      Curry._1(de$2, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      
    }
  }
}

function trans(ty1, ty2) {
  var exit = 0;
  if (typeof ty1 === "number") {
    if (typeof ty2 === "number") {
      return /* End_of_fmtty */0;
    } else {
      switch (ty2.tag | 0) {
        case 8 : 
            exit = 6;
            break;
        case 9 : 
            exit = 7;
            break;
        case 10 : 
            exit = 1;
            break;
        case 11 : 
            exit = 2;
            break;
        case 12 : 
            exit = 3;
            break;
        case 13 : 
            exit = 4;
            break;
        case 14 : 
            exit = 5;
            break;
        default:
          throw [
                Caml_builtin_exceptions.assert_failure,
                [
                  "camlinternalFormat.ml",
                  816,
                  23
                ]
              ];
      }
    }
  } else {
    switch (ty1.tag | 0) {
      case 0 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 0 : 
                  return /* Char_ty */Block.__(0, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 1 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 1 : 
                  return /* String_ty */Block.__(1, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 2 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 2 : 
                  return /* Int_ty */Block.__(2, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 3 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 3 : 
                  return /* Int32_ty */Block.__(3, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 4 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 4 : 
                  return /* Nativeint_ty */Block.__(4, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 5 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 5 : 
                  return /* Int64_ty */Block.__(5, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 6 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 6 : 
                  return /* Float_ty */Block.__(6, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 7 : 
          if (typeof ty2 === "number") {
            exit = 8;
          } else {
            switch (ty2.tag | 0) {
              case 7 : 
                  return /* Bool_ty */Block.__(7, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  exit = 7;
                  break;
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              
            }
          }
          break;
      case 8 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    802,
                    26
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 8 : 
                  return /* Format_arg_ty */Block.__(8, [
                            trans(ty1[0], ty2[0]),
                            trans(ty1[1], ty2[1])
                          ]);
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        802,
                        26
                      ]
                    ];
            }
          }
          break;
      case 9 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    812,
                    28
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 8 : 
                  exit = 6;
                  break;
              case 9 : 
                  var ty = trans(symm(ty1[1]), ty2[0]);
                  var match = fmtty_rel_det(ty);
                  Curry._1(match[1], /* Refl */0);
                  Curry._1(match[3], /* Refl */0);
                  return /* Format_subst_ty */Block.__(9, [
                            ty1[0],
                            ty2[1],
                            trans(ty1[2], ty2[2])
                          ]);
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  exit = 5;
                  break;
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        812,
                        28
                      ]
                    ];
            }
          }
          break;
      case 10 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    780,
                    21
                  ]
                ];
          } else if (ty2.tag === 10) {
            return /* Alpha_ty */Block.__(10, [trans(ty1[0], ty2[0])]);
          } else {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    780,
                    21
                  ]
                ];
          }
          break;
      case 11 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    784,
                    21
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  return /* Theta_ty */Block.__(11, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        784,
                        21
                      ]
                    ];
            }
          }
          break;
      case 12 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    788,
                    19
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  return /* Any_ty */Block.__(12, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        788,
                        19
                      ]
                    ];
            }
          }
          break;
      case 13 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    792,
                    22
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  return /* Reader_ty */Block.__(13, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        792,
                        22
                      ]
                    ];
            }
          }
          break;
      case 14 : 
          if (typeof ty2 === "number") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    797,
                    30
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit = 1;
                  break;
              case 11 : 
                  exit = 2;
                  break;
              case 12 : 
                  exit = 3;
                  break;
              case 13 : 
                  exit = 4;
                  break;
              case 14 : 
                  return /* Ignored_reader_ty */Block.__(14, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        797,
                        30
                      ]
                    ];
            }
          }
          break;
      
    }
  }
  switch (exit) {
    case 1 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                781,
                21
              ]
            ];
    case 2 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                785,
                21
              ]
            ];
    case 3 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                789,
                19
              ]
            ];
    case 4 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                793,
                22
              ]
            ];
    case 5 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                798,
                30
              ]
            ];
    case 6 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                803,
                26
              ]
            ];
    case 7 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                813,
                28
              ]
            ];
    case 8 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                817,
                23
              ]
            ];
    
  }
}

function fmtty_of_formatting_gen(formatting_gen) {
  return fmtty_of_fmt(formatting_gen[0][0]);
}

function fmtty_of_fmt(_fmtty) {
  while(true) {
    var fmtty = _fmtty;
    var exit = 0;
    if (typeof fmtty === "number") {
      return /* End_of_fmtty */0;
    } else {
      switch (fmtty.tag | 0) {
        case 2 : 
        case 3 : 
            exit = 1;
            break;
        case 4 : 
            var ty_rest = fmtty_of_fmt(fmtty[3]);
            var prec_ty = fmtty_of_precision_fmtty(fmtty[2], /* Int_ty */Block.__(2, [ty_rest]));
            return fmtty_of_padding_fmtty(fmtty[1], prec_ty);
        case 5 : 
            var ty_rest$1 = fmtty_of_fmt(fmtty[3]);
            var prec_ty$1 = fmtty_of_precision_fmtty(fmtty[2], /* Int32_ty */Block.__(3, [ty_rest$1]));
            return fmtty_of_padding_fmtty(fmtty[1], prec_ty$1);
        case 6 : 
            var ty_rest$2 = fmtty_of_fmt(fmtty[3]);
            var prec_ty$2 = fmtty_of_precision_fmtty(fmtty[2], /* Nativeint_ty */Block.__(4, [ty_rest$2]));
            return fmtty_of_padding_fmtty(fmtty[1], prec_ty$2);
        case 7 : 
            var ty_rest$3 = fmtty_of_fmt(fmtty[3]);
            var prec_ty$3 = fmtty_of_precision_fmtty(fmtty[2], /* Int64_ty */Block.__(5, [ty_rest$3]));
            return fmtty_of_padding_fmtty(fmtty[1], prec_ty$3);
        case 8 : 
            var ty_rest$4 = fmtty_of_fmt(fmtty[3]);
            var prec_ty$4 = fmtty_of_precision_fmtty(fmtty[2], /* Float_ty */Block.__(6, [ty_rest$4]));
            return fmtty_of_padding_fmtty(fmtty[1], prec_ty$4);
        case 9 : 
            return /* Bool_ty */Block.__(7, [fmtty_of_fmt(fmtty[0])]);
        case 10 : 
            _fmtty = fmtty[0];
            continue ;
            case 13 : 
            return /* Format_arg_ty */Block.__(8, [
                      fmtty[1],
                      fmtty_of_fmt(fmtty[2])
                    ]);
        case 14 : 
            var ty = fmtty[1];
            return /* Format_subst_ty */Block.__(9, [
                      ty,
                      ty,
                      fmtty_of_fmt(fmtty[2])
                    ]);
        case 15 : 
            return /* Alpha_ty */Block.__(10, [fmtty_of_fmt(fmtty[0])]);
        case 16 : 
            return /* Theta_ty */Block.__(11, [fmtty_of_fmt(fmtty[0])]);
        case 11 : 
        case 12 : 
        case 17 : 
            _fmtty = fmtty[1];
            continue ;
            case 18 : 
            return CamlinternalFormatBasics.concat_fmtty(fmtty_of_formatting_gen(fmtty[0]), fmtty_of_fmt(fmtty[1]));
        case 19 : 
            return /* Reader_ty */Block.__(13, [fmtty_of_fmt(fmtty[0])]);
        case 20 : 
            return /* String_ty */Block.__(1, [fmtty_of_fmt(fmtty[2])]);
        case 21 : 
            return /* Int_ty */Block.__(2, [fmtty_of_fmt(fmtty[1])]);
        case 23 : 
            var ign = fmtty[0];
            var fmt = fmtty[1];
            if (typeof ign === "number") {
              if (ign === 3) {
                return /* Ignored_reader_ty */Block.__(14, [fmtty_of_fmt(fmt)]);
              } else {
                return fmtty_of_fmt(fmt);
              }
            } else if (ign.tag === 8) {
              return CamlinternalFormatBasics.concat_fmtty(ign[1], fmtty_of_fmt(fmt));
            } else {
              return fmtty_of_fmt(fmt);
            }
        case 24 : 
            return fmtty_of_custom(fmtty[0], fmtty_of_fmt(fmtty[2]));
        default:
          return /* Char_ty */Block.__(0, [fmtty_of_fmt(fmtty[0])]);
      }
    }
    if (exit === 1) {
      return fmtty_of_padding_fmtty(fmtty[0], /* String_ty */Block.__(1, [fmtty_of_fmt(fmtty[1])]));
    }
    
  };
}

function fmtty_of_custom(arity, fmtty) {
  if (arity) {
    return /* Any_ty */Block.__(12, [fmtty_of_custom(arity[0], fmtty)]);
  } else {
    return fmtty;
  }
}

function fmtty_of_padding_fmtty(pad, fmtty) {
  if (typeof pad === "number" || !pad.tag) {
    return fmtty;
  } else {
    return /* Int_ty */Block.__(2, [fmtty]);
  }
}

function fmtty_of_precision_fmtty(prec, fmtty) {
  if (typeof prec === "number" && prec !== 0) {
    return /* Int_ty */Block.__(2, [fmtty]);
  } else {
    return fmtty;
  }
}

var Type_mismatch = Caml_exceptions.create("CamlinternalFormat.Type_mismatch");

function type_padding(pad, fmtty) {
  if (typeof pad === "number") {
    return /* Padding_fmtty_EBB */[
            /* No_padding */0,
            fmtty
          ];
  } else if (pad.tag) {
    if (typeof fmtty === "number") {
      throw Type_mismatch;
    } else if (fmtty.tag === 2) {
      return /* Padding_fmtty_EBB */[
              /* Arg_padding */Block.__(1, [pad[0]]),
              fmtty[0]
            ];
    } else {
      throw Type_mismatch;
    }
  } else {
    return /* Padding_fmtty_EBB */[
            /* Lit_padding */Block.__(0, [
                pad[0],
                pad[1]
              ]),
            fmtty
          ];
  }
}

function type_padprec(pad, prec, fmtty) {
  var match = type_padding(pad, fmtty);
  if (typeof prec === "number") {
    if (prec !== 0) {
      var match$1 = match[1];
      if (typeof match$1 === "number") {
        throw Type_mismatch;
      } else if (match$1.tag === 2) {
        return /* Padprec_fmtty_EBB */[
                match[0],
                /* Arg_precision */1,
                match$1[0]
              ];
      } else {
        throw Type_mismatch;
      }
    } else {
      return /* Padprec_fmtty_EBB */[
              match[0],
              /* No_precision */0,
              match[1]
            ];
    }
  } else {
    return /* Padprec_fmtty_EBB */[
            match[0],
            /* Lit_precision */[prec[0]],
            match[1]
          ];
  }
}

function type_ignored_param_one(ign, fmt, fmtty) {
  var match = type_format_gen(fmt, fmtty);
  return /* Fmt_fmtty_EBB */[
          /* Ignored_param */Block.__(23, [
              ign,
              match[0]
            ]),
          match[1]
        ];
}

function type_format_gen(fmt, fmtty) {
  if (typeof fmt === "number") {
    return /* Fmt_fmtty_EBB */[
            /* End_of_format */0,
            fmtty
          ];
  } else {
    switch (fmt.tag | 0) {
      case 0 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Char */Block.__(0, [match[0]]),
                    match[1]
                  ];
          }
          break;
      case 1 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match$1 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Caml_char */Block.__(1, [match$1[0]]),
                    match$1[1]
                  ];
          }
          break;
      case 2 : 
          var match$2 = type_padding(fmt[0], fmtty);
          var match$3 = match$2[1];
          if (typeof match$3 === "number") {
            throw Type_mismatch;
          } else if (match$3.tag === 1) {
            var match$4 = type_format_gen(fmt[1], match$3[0]);
            return /* Fmt_fmtty_EBB */[
                    /* String */Block.__(2, [
                        match$2[0],
                        match$4[0]
                      ]),
                    match$4[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 3 : 
          var match$5 = type_padding(fmt[0], fmtty);
          var match$6 = match$5[1];
          if (typeof match$6 === "number") {
            throw Type_mismatch;
          } else if (match$6.tag === 1) {
            var match$7 = type_format_gen(fmt[1], match$6[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Caml_string */Block.__(3, [
                        match$5[0],
                        match$7[0]
                      ]),
                    match$7[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 4 : 
          var match$8 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$9 = match$8[2];
          if (typeof match$9 === "number") {
            throw Type_mismatch;
          } else if (match$9.tag === 2) {
            var match$10 = type_format_gen(fmt[3], match$9[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int */Block.__(4, [
                        fmt[0],
                        match$8[0],
                        match$8[1],
                        match$10[0]
                      ]),
                    match$10[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 5 : 
          var match$11 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$12 = match$11[2];
          if (typeof match$12 === "number") {
            throw Type_mismatch;
          } else if (match$12.tag === 3) {
            var match$13 = type_format_gen(fmt[3], match$12[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int32 */Block.__(5, [
                        fmt[0],
                        match$11[0],
                        match$11[1],
                        match$13[0]
                      ]),
                    match$13[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 6 : 
          var match$14 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$15 = match$14[2];
          if (typeof match$15 === "number") {
            throw Type_mismatch;
          } else if (match$15.tag === 4) {
            var match$16 = type_format_gen(fmt[3], match$15[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Nativeint */Block.__(6, [
                        fmt[0],
                        match$14[0],
                        match$14[1],
                        match$16[0]
                      ]),
                    match$16[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 7 : 
          var match$17 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$18 = match$17[2];
          if (typeof match$18 === "number") {
            throw Type_mismatch;
          } else if (match$18.tag === 5) {
            var match$19 = type_format_gen(fmt[3], match$18[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int64 */Block.__(7, [
                        fmt[0],
                        match$17[0],
                        match$17[1],
                        match$19[0]
                      ]),
                    match$19[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 8 : 
          var match$20 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$21 = match$20[2];
          if (typeof match$21 === "number") {
            throw Type_mismatch;
          } else if (match$21.tag === 6) {
            var match$22 = type_format_gen(fmt[3], match$21[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Float */Block.__(8, [
                        fmt[0],
                        match$20[0],
                        match$20[1],
                        match$22[0]
                      ]),
                    match$22[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 9 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 7) {
            var match$23 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Bool */Block.__(9, [match$23[0]]),
                    match$23[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 10 : 
          var match$24 = type_format_gen(fmt[0], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Flush */Block.__(10, [match$24[0]]),
                  match$24[1]
                ];
      case 11 : 
          var match$25 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* String_literal */Block.__(11, [
                      fmt[0],
                      match$25[0]
                    ]),
                  match$25[1]
                ];
      case 12 : 
          var match$26 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Char_literal */Block.__(12, [
                      fmt[0],
                      match$26[0]
                    ]),
                  match$26[1]
                ];
      case 13 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 8) {
            var sub_fmtty$prime = fmtty[0];
            if (Caml_obj.caml_notequal(/* Fmtty_EBB */[fmt[1]], /* Fmtty_EBB */[sub_fmtty$prime])) {
              throw Type_mismatch;
            }
            var match$27 = type_format_gen(fmt[2], fmtty[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Format_arg */Block.__(13, [
                        fmt[0],
                        sub_fmtty$prime,
                        match$27[0]
                      ]),
                    match$27[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 14 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 9) {
            var sub_fmtty1 = fmtty[0];
            if (Caml_obj.caml_notequal(/* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(fmt[1])], /* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub_fmtty1)])) {
              throw Type_mismatch;
            }
            var match$28 = type_format_gen(fmt[2], CamlinternalFormatBasics.erase_rel(fmtty[2]));
            return /* Fmt_fmtty_EBB */[
                    /* Format_subst */Block.__(14, [
                        fmt[0],
                        sub_fmtty1,
                        match$28[0]
                      ]),
                    match$28[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 15 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 10) {
            var match$29 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Alpha */Block.__(15, [match$29[0]]),
                    match$29[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 16 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 11) {
            var match$30 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Theta */Block.__(16, [match$30[0]]),
                    match$30[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 17 : 
          var match$31 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Formatting_lit */Block.__(17, [
                      fmt[0],
                      match$31[0]
                    ]),
                  match$31[1]
                ];
      case 18 : 
          var formatting_gen = fmt[0];
          var fmt0 = fmt[1];
          var fmtty0 = fmtty;
          if (formatting_gen.tag) {
            var match$32 = formatting_gen[0];
            var match$33 = type_format_gen(match$32[0], fmtty0);
            var match$34 = type_format_gen(fmt0, match$33[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Formatting_gen */Block.__(18, [
                        /* Open_box */Block.__(1, [/* Format */[
                              match$33[0],
                              match$32[1]
                            ]]),
                        match$34[0]
                      ]),
                    match$34[1]
                  ];
          } else {
            var match$35 = formatting_gen[0];
            var match$36 = type_format_gen(match$35[0], fmtty0);
            var match$37 = type_format_gen(fmt0, match$36[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Formatting_gen */Block.__(18, [
                        /* Open_tag */Block.__(0, [/* Format */[
                              match$36[0],
                              match$35[1]
                            ]]),
                        match$37[0]
                      ]),
                    match$37[1]
                  ];
          }
      case 19 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 13) {
            var match$38 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Reader */Block.__(19, [match$38[0]]),
                    match$38[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 20 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 1) {
            var match$39 = type_format_gen(fmt[2], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Scan_char_set */Block.__(20, [
                        fmt[0],
                        fmt[1],
                        match$39[0]
                      ]),
                    match$39[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 21 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 2) {
            var match$40 = type_format_gen(fmt[1], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Scan_get_counter */Block.__(21, [
                        fmt[0],
                        match$40[0]
                      ]),
                    match$40[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 23 : 
          var ign = fmt[0];
          var fmt$1 = fmt[1];
          var fmtty$1 = fmtty;
          if (typeof ign === "number") {
            if (ign === 3) {
              if (typeof fmtty$1 === "number") {
                throw Type_mismatch;
              } else if (fmtty$1.tag === 14) {
                var match$41 = type_format_gen(fmt$1, fmtty$1[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Ignored_param */Block.__(23, [
                            /* Ignored_reader */3,
                            match$41[0]
                          ]),
                        match$41[1]
                      ];
              } else {
                throw Type_mismatch;
              }
            } else {
              return type_ignored_param_one(ign, fmt$1, fmtty$1);
            }
          } else {
            switch (ign.tag | 0) {
              case 7 : 
                  return type_ignored_param_one(/* Ignored_format_arg */Block.__(7, [
                                ign[0],
                                ign[1]
                              ]), fmt$1, fmtty$1);
              case 8 : 
                  var match$42 = type_ignored_format_substitution(ign[1], fmt$1, fmtty$1);
                  var match$43 = match$42[1];
                  return /* Fmt_fmtty_EBB */[
                          /* Ignored_param */Block.__(23, [
                              /* Ignored_format_subst */Block.__(8, [
                                  ign[0],
                                  match$42[0]
                                ]),
                              match$43[0]
                            ]),
                          match$43[1]
                        ];
              default:
                return type_ignored_param_one(ign, fmt$1, fmtty$1);
            }
          }
      case 22 : 
      case 24 : 
          throw Type_mismatch;
      
    }
  }
}

function type_ignored_format_substitution(sub_fmtty, fmt, fmtty) {
  if (typeof sub_fmtty === "number") {
    return /* Fmtty_fmt_EBB */[
            /* End_of_fmtty */0,
            type_format_gen(fmt, fmtty)
          ];
  } else {
    switch (sub_fmtty.tag | 0) {
      case 0 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Char_ty */Block.__(0, [match[0]]),
                    match[1]
                  ];
          }
          break;
      case 1 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 1) {
            var match$1 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* String_ty */Block.__(1, [match$1[0]]),
                    match$1[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 2 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 2) {
            var match$2 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int_ty */Block.__(2, [match$2[0]]),
                    match$2[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 3 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 3) {
            var match$3 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int32_ty */Block.__(3, [match$3[0]]),
                    match$3[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 4 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 4) {
            var match$4 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Nativeint_ty */Block.__(4, [match$4[0]]),
                    match$4[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 5 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 5) {
            var match$5 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int64_ty */Block.__(5, [match$5[0]]),
                    match$5[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 6 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 6) {
            var match$6 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Float_ty */Block.__(6, [match$6[0]]),
                    match$6[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 7 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 7) {
            var match$7 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Bool_ty */Block.__(7, [match$7[0]]),
                    match$7[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 8 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 8) {
            var sub2_fmtty$prime = fmtty[0];
            if (Caml_obj.caml_notequal(/* Fmtty_EBB */[sub_fmtty[0]], /* Fmtty_EBB */[sub2_fmtty$prime])) {
              throw Type_mismatch;
            }
            var match$8 = type_ignored_format_substitution(sub_fmtty[1], fmt, fmtty[1]);
            return /* Fmtty_fmt_EBB */[
                    /* Format_arg_ty */Block.__(8, [
                        sub2_fmtty$prime,
                        match$8[0]
                      ]),
                    match$8[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 9 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 9) {
            var sub2_fmtty$prime$1 = fmtty[1];
            var sub1_fmtty$prime = fmtty[0];
            if (Caml_obj.caml_notequal(/* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub_fmtty[0])], /* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub1_fmtty$prime)])) {
              throw Type_mismatch;
            }
            if (Caml_obj.caml_notequal(/* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub_fmtty[1])], /* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub2_fmtty$prime$1)])) {
              throw Type_mismatch;
            }
            var sub_fmtty$prime = trans(symm(sub1_fmtty$prime), sub2_fmtty$prime$1);
            var match$9 = fmtty_rel_det(sub_fmtty$prime);
            Curry._1(match$9[1], /* Refl */0);
            Curry._1(match$9[3], /* Refl */0);
            var match$10 = type_ignored_format_substitution(CamlinternalFormatBasics.erase_rel(sub_fmtty[2]), fmt, fmtty[2]);
            return /* Fmtty_fmt_EBB */[
                    /* Format_subst_ty */Block.__(9, [
                        sub1_fmtty$prime,
                        sub2_fmtty$prime$1,
                        symm(match$10[0])
                      ]),
                    match$10[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 10 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 10) {
            var match$11 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Alpha_ty */Block.__(10, [match$11[0]]),
                    match$11[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 11 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 11) {
            var match$12 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Theta_ty */Block.__(11, [match$12[0]]),
                    match$12[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 12 : 
          throw Type_mismatch;
      case 13 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 13) {
            var match$13 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Reader_ty */Block.__(13, [match$13[0]]),
                    match$13[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 14 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 14) {
            var match$14 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Ignored_reader_ty */Block.__(14, [match$14[0]]),
                    match$14[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      
    }
  }
}

function type_format(fmt, fmtty) {
  var match = type_format_gen(fmt, fmtty);
  if (typeof match[1] === "number") {
    return match[0];
  } else {
    throw Type_mismatch;
  }
}

function recast(fmt, fmtty) {
  return type_format(fmt, CamlinternalFormatBasics.erase_rel(symm(fmtty)));
}

function fix_padding(padty, width, str) {
  var len = str.length;
  var match_000 = Pervasives.abs(width);
  var match_001 = width < 0 ? /* Left */0 : padty;
  var width$1 = match_000;
  if (width$1 <= len) {
    return str;
  } else {
    var padty$1 = match_001;
    var res = Bytes.make(width$1, padty$1 === /* Zeros */2 ? /* "0" */48 : /* " " */32);
    switch (padty$1) {
      case 0 : 
          $$String.blit(str, 0, res, 0, len);
          break;
      case 1 : 
          $$String.blit(str, 0, res, width$1 - len | 0, len);
          break;
      case 2 : 
          if (len > 0 && (Caml_string.get(str, 0) === /* "+" */43 || Caml_string.get(str, 0) === /* "-" */45 || Caml_string.get(str, 0) === /* " " */32)) {
            res[0] = Caml_string.get(str, 0);
            $$String.blit(str, 1, res, (width$1 - len | 0) + 1 | 0, len - 1 | 0);
          } else if (len > 1 && Caml_string.get(str, 0) === /* "0" */48 && (Caml_string.get(str, 1) === /* "x" */120 || Caml_string.get(str, 1) === /* "X" */88)) {
            res[1] = Caml_string.get(str, 1);
            $$String.blit(str, 2, res, (width$1 - len | 0) + 2 | 0, len - 2 | 0);
          } else {
            $$String.blit(str, 0, res, width$1 - len | 0, len);
          }
          break;
      
    }
    return Caml_string.bytes_to_string(res);
  }
}

function fix_int_precision(prec, str) {
  var prec$1 = Pervasives.abs(prec);
  var len = str.length;
  var c = Caml_string.get(str, 0);
  var exit = 0;
  if (c >= 58) {
    if (c >= 71) {
      if (c > 102 || c < 97) {
        return str;
      } else {
        exit = 2;
      }
    } else if (c >= 65) {
      exit = 2;
    } else {
      return str;
    }
  } else if (c !== 32) {
    if (c >= 43) {
      switch (c - 43 | 0) {
        case 0 : 
        case 2 : 
            exit = 1;
            break;
        case 1 : 
        case 3 : 
        case 4 : 
            return str;
        case 5 : 
            if ((prec$1 + 2 | 0) > len && len > 1 && (Caml_string.get(str, 1) === /* "x" */120 || Caml_string.get(str, 1) === /* "X" */88)) {
              var res = Bytes.make(prec$1 + 2 | 0, /* "0" */48);
              res[1] = Caml_string.get(str, 1);
              $$String.blit(str, 2, res, (prec$1 - len | 0) + 4 | 0, len - 2 | 0);
              return Caml_string.bytes_to_string(res);
            } else {
              exit = 2;
            }
            break;
        case 6 : 
        case 7 : 
        case 8 : 
        case 9 : 
        case 10 : 
        case 11 : 
        case 12 : 
        case 13 : 
        case 14 : 
            exit = 2;
            break;
        
      }
    } else {
      return str;
    }
  } else {
    exit = 1;
  }
  switch (exit) {
    case 1 : 
        if ((prec$1 + 1 | 0) > len) {
          var res$1 = Bytes.make(prec$1 + 1 | 0, /* "0" */48);
          res$1[0] = c;
          $$String.blit(str, 1, res$1, (prec$1 - len | 0) + 2 | 0, len - 1 | 0);
          return Caml_string.bytes_to_string(res$1);
        } else {
          return str;
        }
        break;
    case 2 : 
        if (prec$1 > len) {
          var res$2 = Bytes.make(prec$1, /* "0" */48);
          $$String.blit(str, 0, res$2, prec$1 - len | 0, len);
          return Caml_string.bytes_to_string(res$2);
        } else {
          return str;
        }
        break;
    
  }
}

function string_to_caml_string(str) {
  return $$String.concat($$String.escaped(str), /* :: */[
              "\"",
              /* :: */[
                "\"",
                /* [] */0
              ]
            ]);
}

function format_of_iconv(iconv) {
  switch (iconv) {
    case 0 : 
        return "%d";
    case 1 : 
        return "%+d";
    case 2 : 
        return "% d";
    case 3 : 
        return "%i";
    case 4 : 
        return "%+i";
    case 5 : 
        return "% i";
    case 6 : 
        return "%x";
    case 7 : 
        return "%#x";
    case 8 : 
        return "%X";
    case 9 : 
        return "%#X";
    case 10 : 
        return "%o";
    case 11 : 
        return "%#o";
    case 12 : 
        return "%u";
    
  }
}

function format_of_aconv(iconv, c) {
  var seps;
  switch (iconv) {
    case 0 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "d",
            /* [] */0
          ]
        ];
        break;
    case 1 : 
        seps = /* :: */[
          "%+",
          /* :: */[
            "d",
            /* [] */0
          ]
        ];
        break;
    case 2 : 
        seps = /* :: */[
          "% ",
          /* :: */[
            "d",
            /* [] */0
          ]
        ];
        break;
    case 3 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "i",
            /* [] */0
          ]
        ];
        break;
    case 4 : 
        seps = /* :: */[
          "%+",
          /* :: */[
            "i",
            /* [] */0
          ]
        ];
        break;
    case 5 : 
        seps = /* :: */[
          "% ",
          /* :: */[
            "i",
            /* [] */0
          ]
        ];
        break;
    case 6 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "x",
            /* [] */0
          ]
        ];
        break;
    case 7 : 
        seps = /* :: */[
          "%#",
          /* :: */[
            "x",
            /* [] */0
          ]
        ];
        break;
    case 8 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "X",
            /* [] */0
          ]
        ];
        break;
    case 9 : 
        seps = /* :: */[
          "%#",
          /* :: */[
            "X",
            /* [] */0
          ]
        ];
        break;
    case 10 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "o",
            /* [] */0
          ]
        ];
        break;
    case 11 : 
        seps = /* :: */[
          "%#",
          /* :: */[
            "o",
            /* [] */0
          ]
        ];
        break;
    case 12 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "u",
            /* [] */0
          ]
        ];
        break;
    
  }
  return $$String.concat(Caml_string.bytes_to_string(Bytes.make(1, c)), seps);
}

function format_of_fconv(fconv, prec) {
  if (fconv === /* Float_F */15) {
    return "%.12g";
  } else {
    var prec$1 = Pervasives.abs(prec);
    var symb = char_of_fconv(fconv);
    var buf = /* record */[
      /* ind */0,
      /* bytes */new Array(16)
    ];
    buffer_add_char(buf, /* "%" */37);
    bprint_fconv_flag(buf, fconv);
    buffer_add_char(buf, /* "." */46);
    buffer_add_string(buf, "" + prec$1);
    buffer_add_char(buf, symb);
    return buffer_contents(buf);
  }
}

function convert_int(iconv, n) {
  return Caml_format.caml_format_int(format_of_iconv(iconv), n);
}

function convert_int32(iconv, n) {
  return Caml_format.caml_int32_format(format_of_aconv(iconv, /* "l" */108), n);
}

function convert_nativeint(iconv, n) {
  return Caml_format.caml_nativeint_format(format_of_aconv(iconv, /* "n" */110), n);
}

function convert_int64(iconv, n) {
  return Caml_format.caml_int64_format(format_of_aconv(iconv, /* "L" */76), n);
}

function convert_float(fconv, prec, x) {
  var prec$1 = Pervasives.abs(prec);
  var str = Caml_format.caml_format_float(format_of_fconv(fconv, prec$1), x);
  if (fconv !== /* Float_F */15) {
    return str;
  } else {
    var len = str.length;
    var is_valid = function (_i) {
      while(true) {
        var i = _i;
        if (i === len) {
          return /* false */0;
        } else {
          var match = Caml_string.get(str, i);
          var switcher = match - 46 | 0;
          if (switcher > 23 || switcher < 0) {
            if (switcher !== 55) {
              _i = i + 1 | 0;
              continue ;
              
            } else {
              return /* true */1;
            }
          } else if (switcher > 22 || switcher < 1) {
            return /* true */1;
          } else {
            _i = i + 1 | 0;
            continue ;
            
          }
        }
      };
    };
    var match = Caml_float.caml_classify_float(x);
    if (match !== 3) {
      if (match >= 4) {
        return "nan";
      } else if (is_valid(0)) {
        return str;
      } else {
        return str + ".";
      }
    } else if (x < 0.0) {
      return "neg_infinity";
    } else {
      return "infinity";
    }
  }
}

function format_caml_char(c) {
  return $$String.concat(Char.escaped(c), /* :: */[
              "'",
              /* :: */[
                "'",
                /* [] */0
              ]
            ]);
}

function string_of_fmtty(fmtty) {
  var buf = /* record */[
    /* ind */0,
    /* bytes */new Array(16)
  ];
  bprint_fmtty(buf, fmtty);
  return buffer_contents(buf);
}

function make_printf(_k, o, _acc, _fmt) {
  while(true) {
    var fmt = _fmt;
    var acc = _acc;
    var k = _k;
    if (typeof fmt === "number") {
      return Curry._2(k, o, acc);
    } else {
      switch (fmt.tag | 0) {
        case 0 : 
            var rest = fmt[0];
            return (function(k,acc,rest){
            return function (c) {
              var new_acc = /* Acc_data_char */Block.__(5, [
                  acc,
                  c
                ]);
              return make_printf(k, o, new_acc, rest);
            }
            }(k,acc,rest));
        case 1 : 
            var rest$1 = fmt[0];
            return (function(k,acc,rest$1){
            return function (c) {
              var new_acc_001 = format_caml_char(c);
              var new_acc = /* Acc_data_string */Block.__(4, [
                  acc,
                  new_acc_001
                ]);
              return make_printf(k, o, new_acc, rest$1);
            }
            }(k,acc,rest$1));
        case 2 : 
            return make_string_padding(k, o, acc, fmt[1], fmt[0], (function (str) {
                          return str;
                        }));
        case 3 : 
            return make_string_padding(k, o, acc, fmt[1], fmt[0], string_to_caml_string);
        case 4 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int, fmt[0]);
        case 5 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int32, fmt[0]);
        case 6 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_nativeint, fmt[0]);
        case 7 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int64, fmt[0]);
        case 8 : 
            var k$1 = k;
            var o$1 = o;
            var acc$1 = acc;
            var fmt$1 = fmt[3];
            var pad = fmt[1];
            var prec = fmt[2];
            var fconv = fmt[0];
            if (typeof pad === "number") {
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv){
                  return function (p, x) {
                    var str = convert_float(fconv, p, x);
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv){
                  return function (x) {
                    var str = convert_float(fconv, 6, x);
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv));
                }
              } else {
                var p = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,p){
                return function (x) {
                  var str = convert_float(fconv, p, x);
                  return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,p));
              }
            } else if (pad.tag) {
              var padty = pad[0];
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty){
                  return function (w, p, x) {
                    var str = fix_padding(padty, w, convert_float(fconv, p, x));
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty){
                  return function (w, x) {
                    var str = convert_float(fconv, 6, x);
                    var str$prime = fix_padding(padty, w, str);
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str$prime
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty));
                }
              } else {
                var p$1 = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,padty,p$1){
                return function (w, x) {
                  var str = fix_padding(padty, w, convert_float(fconv, p$1, x));
                  return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,padty,p$1));
              }
            } else {
              var w = pad[1];
              var padty$1 = pad[0];
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w){
                  return function (p, x) {
                    var str = fix_padding(padty$1, w, convert_float(fconv, p, x));
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w){
                  return function (x) {
                    var str = convert_float(fconv, 6, x);
                    var str$prime = fix_padding(padty$1, w, str);
                    return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                  acc$1,
                                  str$prime
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w));
                }
              } else {
                var p$2 = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w,p$2){
                return function (x) {
                  var str = fix_padding(padty$1, w, convert_float(fconv, p$2, x));
                  return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w,p$2));
              }
            }
        case 9 : 
            var rest$2 = fmt[0];
            return (function(k,acc,rest$2){
            return function (b) {
              return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                            acc,
                            b ? "true" : "false"
                          ]), rest$2);
            }
            }(k,acc,rest$2));
        case 10 : 
            _fmt = fmt[0];
            _acc = /* Acc_flush */Block.__(7, [acc]);
            continue ;
            case 11 : 
            _fmt = fmt[1];
            _acc = /* Acc_string_literal */Block.__(2, [
                acc,
                fmt[0]
              ]);
            continue ;
            case 12 : 
            _fmt = fmt[1];
            _acc = /* Acc_char_literal */Block.__(3, [
                acc,
                fmt[0]
              ]);
            continue ;
            case 13 : 
            var rest$3 = fmt[2];
            var ty = string_of_fmtty(fmt[1]);
            return (function(k,acc,rest$3,ty){
            return function () {
              return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                            acc,
                            ty
                          ]), rest$3);
            }
            }(k,acc,rest$3,ty));
        case 14 : 
            var rest$4 = fmt[2];
            var fmtty = fmt[1];
            return (function(k,acc,fmtty,rest$4){
            return function (param) {
              return make_printf(k, o, acc, CamlinternalFormatBasics.concat_fmt(recast(param[0], fmtty), rest$4));
            }
            }(k,acc,fmtty,rest$4));
        case 15 : 
            var rest$5 = fmt[0];
            return (function(k,acc,rest$5){
            return function (f, x) {
              return make_printf(k, o, /* Acc_delay */Block.__(6, [
                            acc,
                            (function (o) {
                                return Curry._2(f, o, x);
                              })
                          ]), rest$5);
            }
            }(k,acc,rest$5));
        case 16 : 
            var rest$6 = fmt[0];
            return (function(k,acc,rest$6){
            return function (f) {
              return make_printf(k, o, /* Acc_delay */Block.__(6, [
                            acc,
                            f
                          ]), rest$6);
            }
            }(k,acc,rest$6));
        case 17 : 
            _fmt = fmt[1];
            _acc = /* Acc_formatting_lit */Block.__(0, [
                acc,
                fmt[0]
              ]);
            continue ;
            case 18 : 
            var match = fmt[0];
            if (match.tag) {
              var rest$7 = fmt[1];
              var k$prime = (function(k,acc,rest$7){
              return function k$prime(koc, kacc) {
                return make_printf(k, koc, /* Acc_formatting_gen */Block.__(1, [
                              acc,
                              /* Acc_open_box */Block.__(1, [kacc])
                            ]), rest$7);
              }
              }(k,acc,rest$7));
              _fmt = match[0][0];
              _acc = /* End_of_acc */0;
              _k = k$prime;
              continue ;
              
            } else {
              var rest$8 = fmt[1];
              var k$prime$1 = (function(k,acc,rest$8){
              return function k$prime$1(koc, kacc) {
                return make_printf(k, koc, /* Acc_formatting_gen */Block.__(1, [
                              acc,
                              /* Acc_open_tag */Block.__(0, [kacc])
                            ]), rest$8);
              }
              }(k,acc,rest$8));
              _fmt = match[0][0];
              _acc = /* End_of_acc */0;
              _k = k$prime$1;
              continue ;
              
            }
            break;
        case 19 : 
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    1449,
                    4
                  ]
                ];
        case 20 : 
            var rest$9 = fmt[2];
            var new_acc = /* Acc_invalid_arg */Block.__(8, [
                acc,
                "Printf: bad conversion %["
              ]);
            return (function(k,rest$9,new_acc){
            return function () {
              return make_printf(k, o, new_acc, rest$9);
            }
            }(k,rest$9,new_acc));
        case 21 : 
            var rest$10 = fmt[1];
            return (function(k,acc,rest$10){
            return function (n) {
              var new_acc_001 = Caml_format.caml_format_int("%u", n);
              var new_acc = /* Acc_data_string */Block.__(4, [
                  acc,
                  new_acc_001
                ]);
              return make_printf(k, o, new_acc, rest$10);
            }
            }(k,acc,rest$10));
        case 22 : 
            var rest$11 = fmt[0];
            return (function(k,acc,rest$11){
            return function (c) {
              var new_acc = /* Acc_data_char */Block.__(5, [
                  acc,
                  c
                ]);
              return make_printf(k, o, new_acc, rest$11);
            }
            }(k,acc,rest$11));
        case 23 : 
            var k$2 = k;
            var o$2 = o;
            var acc$2 = acc;
            var ign = fmt[0];
            var fmt$2 = fmt[1];
            if (typeof ign === "number") {
              if (ign === 3) {
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        1517,
                        39
                      ]
                    ];
              } else {
                return make_invalid_arg(k$2, o$2, acc$2, fmt$2);
              }
            } else if (ign.tag === 8) {
              return make_from_fmtty(k$2, o$2, acc$2, ign[1], fmt$2);
            } else {
              return make_invalid_arg(k$2, o$2, acc$2, fmt$2);
            }
        case 24 : 
            return make_custom(k, o, acc, fmt[2], fmt[0], Curry._1(fmt[1], /* () */0));
        
      }
    }
  };
}

function make_from_fmtty(k, o, acc, fmtty, fmt) {
  if (typeof fmtty === "number") {
    return make_invalid_arg(k, o, acc, fmt);
  } else {
    switch (fmtty.tag | 0) {
      case 0 : 
          var rest = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest, fmt);
            });
      case 1 : 
          var rest$1 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$1, fmt);
            });
      case 2 : 
          var rest$2 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$2, fmt);
            });
      case 3 : 
          var rest$3 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$3, fmt);
            });
      case 4 : 
          var rest$4 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$4, fmt);
            });
      case 5 : 
          var rest$5 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$5, fmt);
            });
      case 6 : 
          var rest$6 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$6, fmt);
            });
      case 7 : 
          var rest$7 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$7, fmt);
            });
      case 8 : 
          var rest$8 = fmtty[1];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$8, fmt);
            });
      case 9 : 
          var rest$9 = fmtty[2];
          var ty = trans(symm(fmtty[0]), fmtty[1]);
          return (function () {
              return make_from_fmtty(k, o, acc, CamlinternalFormatBasics.concat_fmtty(ty, rest$9), fmt);
            });
      case 10 : 
          var rest$10 = fmtty[0];
          return (function (_, _$1) {
              return make_from_fmtty(k, o, acc, rest$10, fmt);
            });
      case 11 : 
          var rest$11 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$11, fmt);
            });
      case 12 : 
          var rest$12 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$12, fmt);
            });
      case 13 : 
          throw [
                Caml_builtin_exceptions.assert_failure,
                [
                  "camlinternalFormat.ml",
                  1540,
                  31
                ]
              ];
      case 14 : 
          throw [
                Caml_builtin_exceptions.assert_failure,
                [
                  "camlinternalFormat.ml",
                  1541,
                  31
                ]
              ];
      
    }
  }
}

function make_invalid_arg(k, o, acc, fmt) {
  return make_printf(k, o, /* Acc_invalid_arg */Block.__(8, [
                acc,
                "Printf: bad conversion %_"
              ]), fmt);
}

function make_string_padding(k, o, acc, fmt, pad, trans) {
  if (typeof pad === "number") {
    return (function (x) {
        var new_acc_001 = Curry._1(trans, x);
        var new_acc = /* Acc_data_string */Block.__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  } else if (pad.tag) {
    var padty = pad[0];
    return (function (w, x) {
        var new_acc_001 = fix_padding(padty, w, Curry._1(trans, x));
        var new_acc = /* Acc_data_string */Block.__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  } else {
    var width = pad[1];
    var padty$1 = pad[0];
    return (function (x) {
        var new_acc_001 = fix_padding(padty$1, width, Curry._1(trans, x));
        var new_acc = /* Acc_data_string */Block.__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  }
}

function make_int_padding_precision(k, o, acc, fmt, pad, prec, trans, iconv) {
  if (typeof pad === "number") {
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (p, x) {
            var str = fix_int_precision(p, Curry._2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (x) {
            var str = Curry._2(trans, iconv, x);
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p = prec[0];
      return (function (x) {
          var str = fix_int_precision(p, Curry._2(trans, iconv, x));
          return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  } else if (pad.tag) {
    var padty = pad[0];
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (w, p, x) {
            var str = fix_padding(padty, w, fix_int_precision(p, Curry._2(trans, iconv, x)));
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (w, x) {
            var str = fix_padding(padty, w, Curry._2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p$1 = prec[0];
      return (function (w, x) {
          var str = fix_padding(padty, w, fix_int_precision(p$1, Curry._2(trans, iconv, x)));
          return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  } else {
    var w = pad[1];
    var padty$1 = pad[0];
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (p, x) {
            var str = fix_padding(padty$1, w, fix_int_precision(p, Curry._2(trans, iconv, x)));
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (x) {
            var str = fix_padding(padty$1, w, Curry._2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p$2 = prec[0];
      return (function (x) {
          var str = fix_padding(padty$1, w, fix_int_precision(p$2, Curry._2(trans, iconv, x)));
          return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  }
}

function make_custom(k, o, acc, rest, arity, f) {
  if (arity) {
    var arity$1 = arity[0];
    return (function (x) {
        return make_custom(k, o, acc, rest, arity$1, Curry._1(f, x));
      });
  } else {
    return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                  acc,
                  f
                ]), rest);
  }
}

function output_acc(o, _acc) {
  while(true) {
    var acc = _acc;
    var exit = 0;
    if (typeof acc === "number") {
      return /* () */0;
    } else {
      switch (acc.tag | 0) {
        case 0 : 
            var s = string_of_formatting_lit(acc[1]);
            output_acc(o, acc[0]);
            return Pervasives.output_string(o, s);
        case 1 : 
            var match = acc[1];
            var p = acc[0];
            output_acc(o, p);
            if (match.tag) {
              Pervasives.output_string(o, "@[");
              _acc = match[0];
              continue ;
              
            } else {
              Pervasives.output_string(o, "@{");
              _acc = match[0];
              continue ;
              
            }
            break;
        case 2 : 
        case 4 : 
            exit = 1;
            break;
        case 3 : 
        case 5 : 
            exit = 2;
            break;
        case 6 : 
            output_acc(o, acc[0]);
            return Curry._1(acc[1], o);
        case 7 : 
            output_acc(o, acc[0]);
            return Caml_io.caml_ml_flush(o);
        case 8 : 
            output_acc(o, acc[0]);
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  acc[1]
                ];
        
      }
    }
    switch (exit) {
      case 1 : 
          output_acc(o, acc[0]);
          return Pervasives.output_string(o, acc[1]);
      case 2 : 
          output_acc(o, acc[0]);
          return Caml_io.caml_ml_output_char(o, acc[1]);
      
    }
  };
}

function bufput_acc(b, _acc) {
  while(true) {
    var acc = _acc;
    var exit = 0;
    if (typeof acc === "number") {
      return /* () */0;
    } else {
      switch (acc.tag | 0) {
        case 0 : 
            var s = string_of_formatting_lit(acc[1]);
            bufput_acc(b, acc[0]);
            return Buffer.add_string(b, s);
        case 1 : 
            var match = acc[1];
            var p = acc[0];
            bufput_acc(b, p);
            if (match.tag) {
              Buffer.add_string(b, "@[");
              _acc = match[0];
              continue ;
              
            } else {
              Buffer.add_string(b, "@{");
              _acc = match[0];
              continue ;
              
            }
            break;
        case 2 : 
        case 4 : 
            exit = 1;
            break;
        case 3 : 
        case 5 : 
            exit = 2;
            break;
        case 6 : 
            bufput_acc(b, acc[0]);
            return Curry._1(acc[1], b);
        case 7 : 
            _acc = acc[0];
            continue ;
            case 8 : 
            bufput_acc(b, acc[0]);
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  acc[1]
                ];
        
      }
    }
    switch (exit) {
      case 1 : 
          bufput_acc(b, acc[0]);
          return Buffer.add_string(b, acc[1]);
      case 2 : 
          bufput_acc(b, acc[0]);
          return Buffer.add_char(b, acc[1]);
      
    }
  };
}

function strput_acc(b, _acc) {
  while(true) {
    var acc = _acc;
    var exit = 0;
    if (typeof acc === "number") {
      return /* () */0;
    } else {
      switch (acc.tag | 0) {
        case 0 : 
            var s = string_of_formatting_lit(acc[1]);
            strput_acc(b, acc[0]);
            return Buffer.add_string(b, s);
        case 1 : 
            var match = acc[1];
            var p = acc[0];
            strput_acc(b, p);
            if (match.tag) {
              Buffer.add_string(b, "@[");
              _acc = match[0];
              continue ;
              
            } else {
              Buffer.add_string(b, "@{");
              _acc = match[0];
              continue ;
              
            }
            break;
        case 2 : 
        case 4 : 
            exit = 1;
            break;
        case 3 : 
        case 5 : 
            exit = 2;
            break;
        case 6 : 
            strput_acc(b, acc[0]);
            return Buffer.add_string(b, Curry._1(acc[1], /* () */0));
        case 7 : 
            _acc = acc[0];
            continue ;
            case 8 : 
            strput_acc(b, acc[0]);
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  acc[1]
                ];
        
      }
    }
    switch (exit) {
      case 1 : 
          strput_acc(b, acc[0]);
          return Buffer.add_string(b, acc[1]);
      case 2 : 
          strput_acc(b, acc[0]);
          return Buffer.add_char(b, acc[1]);
      
    }
  };
}

function failwith_message(param) {
  var buf = Buffer.create(256);
  var k = function (_, acc) {
    strput_acc(buf, acc);
    var s = Buffer.contents(buf);
    throw [
          Caml_builtin_exceptions.failure,
          s
        ];
  };
  return make_printf(k, /* () */0, /* End_of_acc */0, param[0]);
}

function open_box_of_string(str) {
  if (str === "") {
    return /* tuple */[
            0,
            /* Pp_box */4
          ];
  } else {
    var len = str.length;
    var invalid_box = function () {
      return Curry._1(failwith_message(/* Format */[
                      /* String_literal */Block.__(11, [
                          "invalid box description ",
                          /* Caml_string */Block.__(3, [
                              /* No_padding */0,
                              /* End_of_format */0
                            ])
                        ]),
                      "invalid box description %S"
                    ]), str);
    };
    var parse_spaces = function (_i) {
      while(true) {
        var i = _i;
        if (i === len) {
          return i;
        } else {
          var match = Caml_string.get(str, i);
          if (match !== 9) {
            if (match !== 32) {
              return i;
            } else {
              _i = i + 1 | 0;
              continue ;
              
            }
          } else {
            _i = i + 1 | 0;
            continue ;
            
          }
        }
      };
    };
    var parse_lword = function (_, _j) {
      while(true) {
        var j = _j;
        if (j === len) {
          return j;
        } else {
          var match = Caml_string.get(str, j);
          if (match > 122 || match < 97) {
            return j;
          } else {
            _j = j + 1 | 0;
            continue ;
            
          }
        }
      };
    };
    var parse_int = function (_, _j) {
      while(true) {
        var j = _j;
        if (j === len) {
          return j;
        } else {
          var match = Caml_string.get(str, j);
          if (match >= 48) {
            if (match >= 58) {
              return j;
            } else {
              _j = j + 1 | 0;
              continue ;
              
            }
          } else if (match !== 45) {
            return j;
          } else {
            _j = j + 1 | 0;
            continue ;
            
          }
        }
      };
    };
    var wstart = parse_spaces(0);
    var wend = parse_lword(wstart, wstart);
    var box_name = $$String.sub(str, wstart, wend - wstart | 0);
    var nstart = parse_spaces(wend);
    var nend = parse_int(nstart, nstart);
    var indent;
    if (nstart === nend) {
      indent = 0;
    } else {
      try {
        indent = Caml_format.caml_int_of_string($$String.sub(str, nstart, nend - nstart | 0));
      }
      catch (raw_exn){
        var exn = Js_exn.internalToOCamlException(raw_exn);
        if (exn[0] === Caml_builtin_exceptions.failure) {
          indent = invalid_box(/* () */0);
        } else {
          throw exn;
        }
      }
    }
    var exp_end = parse_spaces(nend);
    if (exp_end !== len) {
      invalid_box(/* () */0);
    }
    var box_type;
    switch (box_name) {
      case "" : 
      case "b" : 
          box_type = /* Pp_box */4;
          break;
      case "h" : 
          box_type = /* Pp_hbox */0;
          break;
      case "hov" : 
          box_type = /* Pp_hovbox */3;
          break;
      case "hv" : 
          box_type = /* Pp_hvbox */2;
          break;
      case "v" : 
          box_type = /* Pp_vbox */1;
          break;
      default:
        box_type = invalid_box(/* () */0);
    }
    return /* tuple */[
            indent,
            box_type
          ];
  }
}

function make_padding_fmt_ebb(pad, fmt) {
  if (typeof pad === "number") {
    return /* Padding_fmt_EBB */[
            /* No_padding */0,
            fmt
          ];
  } else if (pad.tag) {
    return /* Padding_fmt_EBB */[
            /* Arg_padding */Block.__(1, [pad[0]]),
            fmt
          ];
  } else {
    return /* Padding_fmt_EBB */[
            /* Lit_padding */Block.__(0, [
                pad[0],
                pad[1]
              ]),
            fmt
          ];
  }
}

function make_precision_fmt_ebb(prec, fmt) {
  if (typeof prec === "number") {
    if (prec !== 0) {
      return /* Precision_fmt_EBB */[
              /* Arg_precision */1,
              fmt
            ];
    } else {
      return /* Precision_fmt_EBB */[
              /* No_precision */0,
              fmt
            ];
    }
  } else {
    return /* Precision_fmt_EBB */[
            /* Lit_precision */[prec[0]],
            fmt
          ];
  }
}

function make_padprec_fmt_ebb(pad, prec, fmt) {
  var match = make_precision_fmt_ebb(prec, fmt);
  var fmt$prime = match[1];
  var prec$1 = match[0];
  if (typeof pad === "number") {
    return /* Padprec_fmt_EBB */[
            /* No_padding */0,
            prec$1,
            fmt$prime
          ];
  } else if (pad.tag) {
    return /* Padprec_fmt_EBB */[
            /* Arg_padding */Block.__(1, [pad[0]]),
            prec$1,
            fmt$prime
          ];
  } else {
    return /* Padprec_fmt_EBB */[
            /* Lit_padding */Block.__(0, [
                pad[0],
                pad[1]
              ]),
            prec$1,
            fmt$prime
          ];
  }
}

function fmt_ebb_of_string(legacy_behavior, str) {
  var legacy_behavior$1 = legacy_behavior ? legacy_behavior[0] : /* true */1;
  var invalid_format_message = function (str_ind, msg) {
    return Curry._3(failwith_message(/* Format */[
                    /* String_literal */Block.__(11, [
                        "invalid format ",
                        /* Caml_string */Block.__(3, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": at character number ",
                                /* Int */Block.__(4, [
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* String_literal */Block.__(11, [
                                        ", ",
                                        /* String */Block.__(2, [
                                            /* No_padding */0,
                                            /* End_of_format */0
                                          ])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "invalid format %S: at character number %d, %s"
                  ]), str, str_ind, msg);
  };
  var invalid_format_without = function (str_ind, c, s) {
    return Curry._4(failwith_message(/* Format */[
                    /* String_literal */Block.__(11, [
                        "invalid format ",
                        /* Caml_string */Block.__(3, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": at character number ",
                                /* Int */Block.__(4, [
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* String_literal */Block.__(11, [
                                        ", '",
                                        /* Char */Block.__(0, [/* String_literal */Block.__(11, [
                                                "' without ",
                                                /* String */Block.__(2, [
                                                    /* No_padding */0,
                                                    /* End_of_format */0
                                                  ])
                                              ])])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "invalid format %S: at character number %d, '%c' without %s"
                  ]), str, str_ind, c, s);
  };
  var expected_character = function (str_ind, expected, read) {
    return Curry._4(failwith_message(/* Format */[
                    /* String_literal */Block.__(11, [
                        "invalid format ",
                        /* Caml_string */Block.__(3, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": at character number ",
                                /* Int */Block.__(4, [
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* String_literal */Block.__(11, [
                                        ", ",
                                        /* String */Block.__(2, [
                                            /* No_padding */0,
                                            /* String_literal */Block.__(11, [
                                                " expected, read ",
                                                /* Caml_char */Block.__(1, [/* End_of_format */0])
                                              ])
                                          ])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "invalid format %S: at character number %d, %s expected, read %C"
                  ]), str, str_ind, expected, read);
  };
  var compute_int_conv = function (pct_ind, str_ind, _plus, _sharp, _space, symb) {
    while(true) {
      var space = _space;
      var sharp = _sharp;
      var plus = _plus;
      var exit = 0;
      var exit$1 = 0;
      if (plus !== 0) {
        if (sharp !== 0) {
          exit$1 = 2;
        } else if (space !== 0) {
          exit = 1;
        } else if (symb !== 100) {
          if (symb !== 105) {
            exit = 1;
          } else {
            return /* Int_pi */4;
          }
        } else {
          return /* Int_pd */1;
        }
      } else if (sharp !== 0) {
        if (space !== 0) {
          exit$1 = 2;
        } else if (symb !== 88) {
          if (symb !== 111) {
            if (symb !== 120) {
              exit$1 = 2;
            } else {
              return /* Int_Cx */7;
            }
          } else {
            return /* Int_Co */11;
          }
        } else {
          return /* Int_CX */9;
        }
      } else if (space !== 0) {
        if (symb !== 100) {
          if (symb !== 105) {
            exit = 1;
          } else {
            return /* Int_si */5;
          }
        } else {
          return /* Int_sd */2;
        }
      } else {
        var switcher = symb - 88 | 0;
        if (switcher > 32 || switcher < 0) {
          exit = 1;
        } else {
          switch (switcher) {
            case 0 : 
                return /* Int_X */8;
            case 12 : 
                return /* Int_d */0;
            case 17 : 
                return /* Int_i */3;
            case 23 : 
                return /* Int_o */10;
            case 29 : 
                return /* Int_u */12;
            case 1 : 
            case 2 : 
            case 3 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 11 : 
            case 13 : 
            case 14 : 
            case 15 : 
            case 16 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 24 : 
            case 25 : 
            case 26 : 
            case 27 : 
            case 28 : 
            case 30 : 
            case 31 : 
                exit = 1;
                break;
            case 32 : 
                return /* Int_x */6;
            
          }
        }
      }
      if (exit$1 === 2) {
        var exit$2 = 0;
        var switcher$1 = symb - 88 | 0;
        if (switcher$1 > 32 || switcher$1 < 0) {
          exit = 1;
        } else {
          switch (switcher$1) {
            case 0 : 
                if (legacy_behavior$1) {
                  return /* Int_CX */9;
                } else {
                  exit = 1;
                }
                break;
            case 23 : 
                if (legacy_behavior$1) {
                  return /* Int_Co */11;
                } else {
                  exit = 1;
                }
                break;
            case 12 : 
            case 17 : 
            case 29 : 
                exit$2 = 3;
                break;
            case 1 : 
            case 2 : 
            case 3 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 11 : 
            case 13 : 
            case 14 : 
            case 15 : 
            case 16 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 24 : 
            case 25 : 
            case 26 : 
            case 27 : 
            case 28 : 
            case 30 : 
            case 31 : 
                exit = 1;
                break;
            case 32 : 
                if (legacy_behavior$1) {
                  return /* Int_Cx */7;
                } else {
                  exit = 1;
                }
                break;
            
          }
        }
        if (exit$2 === 3) {
          if (legacy_behavior$1) {
            _sharp = /* false */0;
            continue ;
            
          } else {
            return incompatible_flag(pct_ind, str_ind, symb, "'#'");
          }
        }
        
      }
      if (exit === 1) {
        if (plus !== 0) {
          if (space !== 0) {
            if (legacy_behavior$1) {
              _space = /* false */0;
              continue ;
              
            } else {
              return incompatible_flag(pct_ind, str_ind, /* " " */32, "'+'");
            }
          } else if (legacy_behavior$1) {
            _plus = /* false */0;
            continue ;
            
          } else {
            return incompatible_flag(pct_ind, str_ind, symb, "'+'");
          }
        } else if (space !== 0) {
          if (legacy_behavior$1) {
            _space = /* false */0;
            continue ;
            
          } else {
            return incompatible_flag(pct_ind, str_ind, symb, "' '");
          }
        } else {
          throw [
                Caml_builtin_exceptions.assert_failure,
                [
                  "camlinternalFormat.ml",
                  2719,
                  28
                ]
              ];
        }
      }
      
    };
  };
  var incompatible_flag = function (pct_ind, str_ind, symb, option) {
    var subfmt = $$String.sub(str, pct_ind, str_ind - pct_ind | 0);
    return Curry._5(failwith_message(/* Format */[
                    /* String_literal */Block.__(11, [
                        "invalid format ",
                        /* Caml_string */Block.__(3, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": at character number ",
                                /* Int */Block.__(4, [
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* String_literal */Block.__(11, [
                                        ", ",
                                        /* String */Block.__(2, [
                                            /* No_padding */0,
                                            /* String_literal */Block.__(11, [
                                                " is incompatible with '",
                                                /* Char */Block.__(0, [/* String_literal */Block.__(11, [
                                                        "' in sub-format ",
                                                        /* Caml_string */Block.__(3, [
                                                            /* No_padding */0,
                                                            /* End_of_format */0
                                                          ])
                                                      ])])
                                              ])
                                          ])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "invalid format %S: at character number %d, %s is incompatible with '%c' in sub-format %S"
                  ]), str, pct_ind, option, symb, subfmt);
  };
  var parse_positive = function (_str_ind, end_ind, _acc) {
    while(true) {
      var acc = _acc;
      var str_ind = _str_ind;
      if (str_ind === end_ind) {
        invalid_format_message(end_ind, "unexpected end of format");
      }
      var c = Caml_string.get(str, str_ind);
      if (c > 57 || c < 48) {
        return /* tuple */[
                str_ind,
                acc
              ];
      } else {
        var new_acc = Caml_int32.imul(acc, 10) + (c - /* "0" */48 | 0) | 0;
        _acc = new_acc;
        _str_ind = str_ind + 1 | 0;
        continue ;
        
      }
    };
  };
  var parse_after_precision = function (pct_ind, str_ind, end_ind, minus, plus, sharp, space, ign, pad, prec) {
    if (str_ind === end_ind) {
      invalid_format_message(end_ind, "unexpected end of format");
    }
    var parse_conv = function (padprec) {
      return parse_conversion(pct_ind, str_ind + 1 | 0, end_ind, plus, sharp, space, ign, pad, prec, padprec, Caml_string.get(str, str_ind));
    };
    if (typeof pad === "number") {
      var exit = 0;
      if (typeof prec === "number") {
        if (prec !== 0) {
          exit = 1;
        } else {
          return parse_conv(/* No_padding */0);
        }
      } else {
        exit = 1;
      }
      if (exit === 1) {
        if (minus !== 0) {
          if (typeof prec === "number") {
            return parse_conv(/* Arg_padding */Block.__(1, [/* Left */0]));
          } else {
            return parse_conv(/* Lit_padding */Block.__(0, [
                          /* Left */0,
                          prec[0]
                        ]));
          }
        } else if (typeof prec === "number") {
          return parse_conv(/* Arg_padding */Block.__(1, [/* Right */1]));
        } else {
          return parse_conv(/* Lit_padding */Block.__(0, [
                        /* Right */1,
                        prec[0]
                      ]));
        }
      }
      
    } else {
      return parse_conv(pad);
    }
  };
  var parse_after_padding = function (pct_ind, str_ind, end_ind, minus, plus, sharp, space, ign, pad) {
    if (str_ind === end_ind) {
      invalid_format_message(end_ind, "unexpected end of format");
    }
    var symb = Caml_string.get(str, str_ind);
    if (symb !== 46) {
      return parse_conversion(pct_ind, str_ind + 1 | 0, end_ind, plus, sharp, space, ign, pad, /* No_precision */0, pad, symb);
    } else {
      var pct_ind$1 = pct_ind;
      var str_ind$1 = str_ind + 1 | 0;
      var end_ind$1 = end_ind;
      var minus$1 = minus;
      var plus$1 = plus;
      var sharp$1 = sharp;
      var space$1 = space;
      var ign$1 = ign;
      var pad$1 = pad;
      if (str_ind$1 === end_ind$1) {
        invalid_format_message(end_ind$1, "unexpected end of format");
      }
      var parse_literal = function (minus, str_ind) {
        var match = parse_positive(str_ind, end_ind$1, 0);
        return parse_after_precision(pct_ind$1, match[0], end_ind$1, minus, plus$1, sharp$1, space$1, ign$1, pad$1, /* Lit_precision */[match[1]]);
      };
      var symb$1 = Caml_string.get(str, str_ind$1);
      var exit = 0;
      var exit$1 = 0;
      if (symb$1 >= 48) {
        if (symb$1 >= 58) {
          exit = 1;
        } else {
          return parse_literal(minus$1, str_ind$1);
        }
      } else if (symb$1 >= 42) {
        switch (symb$1 - 42 | 0) {
          case 0 : 
              return parse_after_precision(pct_ind$1, str_ind$1 + 1 | 0, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, pad$1, /* Arg_precision */1);
          case 1 : 
          case 3 : 
              exit$1 = 2;
              break;
          case 2 : 
          case 4 : 
          case 5 : 
              exit = 1;
              break;
          
        }
      } else {
        exit = 1;
      }
      if (exit$1 === 2) {
        if (legacy_behavior$1) {
          return parse_literal(minus$1 || +(symb$1 === /* "-" */45), str_ind$1 + 1 | 0);
        } else {
          exit = 1;
        }
      }
      if (exit === 1) {
        if (legacy_behavior$1) {
          return parse_after_precision(pct_ind$1, str_ind$1, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, pad$1, /* Lit_precision */[0]);
        } else {
          return invalid_format_without(str_ind$1 - 1 | 0, /* "." */46, "precision");
        }
      }
      
    }
  };
  var parse_literal = function (lit_start, _str_ind, end_ind) {
    while(true) {
      var str_ind = _str_ind;
      if (str_ind === end_ind) {
        return add_literal(lit_start, str_ind, /* End_of_format */0);
      } else {
        var match = Caml_string.get(str, str_ind);
        if (match !== 37) {
          if (match !== 64) {
            _str_ind = str_ind + 1 | 0;
            continue ;
            
          } else {
            var match$1 = parse_after_at(str_ind + 1 | 0, end_ind);
            return add_literal(lit_start, str_ind, match$1[0]);
          }
        } else {
          var match$2 = parse_format(str_ind, end_ind);
          return add_literal(lit_start, str_ind, match$2[0]);
        }
      }
    };
  };
  var parse_format = function (pct_ind, end_ind) {
    var pct_ind$1 = pct_ind;
    var str_ind = pct_ind + 1 | 0;
    var end_ind$1 = end_ind;
    if (str_ind === end_ind$1) {
      invalid_format_message(end_ind$1, "unexpected end of format");
    }
    var match = Caml_string.get(str, str_ind);
    if (match !== 95) {
      return parse_flags(pct_ind$1, str_ind, end_ind$1, /* false */0);
    } else {
      return parse_flags(pct_ind$1, str_ind + 1 | 0, end_ind$1, /* true */1);
    }
  };
  var parse_after_at = function (str_ind, end_ind) {
    if (str_ind === end_ind) {
      return /* Fmt_EBB */[/* Char_literal */Block.__(12, [
                  /* "@" */64,
                  /* End_of_format */0
                ])];
    } else {
      var c = Caml_string.get(str, str_ind);
      var exit = 0;
      if (c >= 65) {
        if (c >= 94) {
          var switcher = c - 123 | 0;
          if (switcher > 2 || switcher < 0) {
            exit = 1;
          } else {
            switch (switcher) {
              case 0 : 
                  return parse_tag(/* true */1, str_ind + 1 | 0, end_ind);
              case 1 : 
                  exit = 1;
                  break;
              case 2 : 
                  var beg_ind = str_ind + 1 | 0;
                  var match = parse_literal(beg_ind, beg_ind, end_ind);
                  return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                              /* Close_tag */1,
                              match[0]
                            ])];
              
            }
          }
        } else if (c >= 91) {
          switch (c - 91 | 0) {
            case 0 : 
                return parse_tag(/* false */0, str_ind + 1 | 0, end_ind);
            case 1 : 
                exit = 1;
                break;
            case 2 : 
                var beg_ind$1 = str_ind + 1 | 0;
                var match$1 = parse_literal(beg_ind$1, beg_ind$1, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* Close_box */0,
                            match$1[0]
                          ])];
            
          }
        } else {
          exit = 1;
        }
      } else if (c !== 10) {
        if (c >= 32) {
          switch (c - 32 | 0) {
            case 0 : 
                var beg_ind$2 = str_ind + 1 | 0;
                var match$2 = parse_literal(beg_ind$2, beg_ind$2, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* Break */Block.__(0, [
                                "@ ",
                                1,
                                0
                              ]),
                            match$2[0]
                          ])];
            case 5 : 
                if ((str_ind + 1 | 0) < end_ind && Caml_string.get(str, str_ind + 1 | 0) === /* "%" */37) {
                  var beg_ind$3 = str_ind + 2 | 0;
                  var match$3 = parse_literal(beg_ind$3, beg_ind$3, end_ind);
                  return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                              /* Escaped_percent */6,
                              match$3[0]
                            ])];
                } else {
                  var match$4 = parse_literal(str_ind, str_ind, end_ind);
                  return /* Fmt_EBB */[/* Char_literal */Block.__(12, [
                              /* "@" */64,
                              match$4[0]
                            ])];
                }
                break;
            case 12 : 
                var beg_ind$4 = str_ind + 1 | 0;
                var match$5 = parse_literal(beg_ind$4, beg_ind$4, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* Break */Block.__(0, [
                                "@,",
                                0,
                                0
                              ]),
                            match$5[0]
                          ])];
            case 14 : 
                var beg_ind$5 = str_ind + 1 | 0;
                var match$6 = parse_literal(beg_ind$5, beg_ind$5, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* Flush_newline */4,
                            match$6[0]
                          ])];
            case 27 : 
                var str_ind$1 = str_ind + 1 | 0;
                var end_ind$1 = end_ind;
                var match$7;
                try {
                  if (str_ind$1 === end_ind$1 || Caml_string.get(str, str_ind$1) !== /* "<" */60) {
                    throw Caml_builtin_exceptions.not_found;
                  }
                  var str_ind_1 = parse_spaces(str_ind$1 + 1 | 0, end_ind$1);
                  var match$8 = Caml_string.get(str, str_ind_1);
                  var exit$1 = 0;
                  if (match$8 >= 48) {
                    if (match$8 >= 58) {
                      throw Caml_builtin_exceptions.not_found;
                    } else {
                      exit$1 = 1;
                    }
                  } else if (match$8 !== 45) {
                    throw Caml_builtin_exceptions.not_found;
                  } else {
                    exit$1 = 1;
                  }
                  if (exit$1 === 1) {
                    var match$9 = parse_integer(str_ind_1, end_ind$1);
                    var width = match$9[1];
                    var str_ind_3 = parse_spaces(match$9[0], end_ind$1);
                    var match$10 = Caml_string.get(str, str_ind_3);
                    var switcher$1 = match$10 - 45 | 0;
                    if (switcher$1 > 12 || switcher$1 < 0) {
                      if (switcher$1 !== 17) {
                        throw Caml_builtin_exceptions.not_found;
                      } else {
                        var s = $$String.sub(str, str_ind$1 - 2 | 0, (str_ind_3 - str_ind$1 | 0) + 3 | 0);
                        match$7 = /* tuple */[
                          str_ind_3 + 1 | 0,
                          /* Break */Block.__(0, [
                              s,
                              width,
                              0
                            ])
                        ];
                      }
                    } else if (switcher$1 === 2 || switcher$1 === 1) {
                      throw Caml_builtin_exceptions.not_found;
                    } else {
                      var match$11 = parse_integer(str_ind_3, end_ind$1);
                      var str_ind_5 = parse_spaces(match$11[0], end_ind$1);
                      if (Caml_string.get(str, str_ind_5) !== /* ">" */62) {
                        throw Caml_builtin_exceptions.not_found;
                      }
                      var s$1 = $$String.sub(str, str_ind$1 - 2 | 0, (str_ind_5 - str_ind$1 | 0) + 3 | 0);
                      match$7 = /* tuple */[
                        str_ind_5 + 1 | 0,
                        /* Break */Block.__(0, [
                            s$1,
                            width,
                            match$11[1]
                          ])
                      ];
                    }
                  }
                  
                }
                catch (raw_exn){
                  var exn = Js_exn.internalToOCamlException(raw_exn);
                  if (exn === Caml_builtin_exceptions.not_found) {
                    match$7 = /* tuple */[
                      str_ind$1,
                      /* Break */Block.__(0, [
                          "@;",
                          1,
                          0
                        ])
                    ];
                  } else if (exn[0] === Caml_builtin_exceptions.failure) {
                    match$7 = /* tuple */[
                      str_ind$1,
                      /* Break */Block.__(0, [
                          "@;",
                          1,
                          0
                        ])
                    ];
                  } else {
                    throw exn;
                  }
                }
                var next_ind = match$7[0];
                var match$12 = parse_literal(next_ind, next_ind, end_ind$1);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            match$7[1],
                            match$12[0]
                          ])];
            case 28 : 
                var str_ind$2 = str_ind + 1 | 0;
                var end_ind$2 = end_ind;
                var match$13;
                try {
                  var str_ind_1$1 = parse_spaces(str_ind$2, end_ind$2);
                  var match$14 = Caml_string.get(str, str_ind_1$1);
                  var exit$2 = 0;
                  if (match$14 >= 48) {
                    if (match$14 >= 58) {
                      match$13 = /* None */0;
                    } else {
                      exit$2 = 1;
                    }
                  } else if (match$14 !== 45) {
                    match$13 = /* None */0;
                  } else {
                    exit$2 = 1;
                  }
                  if (exit$2 === 1) {
                    var match$15 = parse_integer(str_ind_1$1, end_ind$2);
                    var str_ind_3$1 = parse_spaces(match$15[0], end_ind$2);
                    if (Caml_string.get(str, str_ind_3$1) !== /* ">" */62) {
                      throw Caml_builtin_exceptions.not_found;
                    }
                    var s$2 = $$String.sub(str, str_ind$2 - 2 | 0, (str_ind_3$1 - str_ind$2 | 0) + 3 | 0);
                    match$13 = /* Some */[/* tuple */[
                        str_ind_3$1 + 1 | 0,
                        /* Magic_size */Block.__(1, [
                            s$2,
                            match$15[1]
                          ])
                      ]];
                  }
                  
                }
                catch (raw_exn$1){
                  var exn$1 = Js_exn.internalToOCamlException(raw_exn$1);
                  if (exn$1 === Caml_builtin_exceptions.not_found) {
                    match$13 = /* None */0;
                  } else if (exn$1[0] === Caml_builtin_exceptions.failure) {
                    match$13 = /* None */0;
                  } else {
                    throw exn$1;
                  }
                }
                if (match$13) {
                  var match$16 = match$13[0];
                  var next_ind$1 = match$16[0];
                  var match$17 = parse_literal(next_ind$1, next_ind$1, end_ind$2);
                  return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                              match$16[1],
                              match$17[0]
                            ])];
                } else {
                  var match$18 = parse_literal(str_ind$2, str_ind$2, end_ind$2);
                  return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                              /* Scan_indic */Block.__(2, [/* "<" */60]),
                              match$18[0]
                            ])];
                }
            case 1 : 
            case 2 : 
            case 3 : 
            case 4 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 11 : 
            case 13 : 
            case 15 : 
            case 16 : 
            case 17 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 23 : 
            case 24 : 
            case 25 : 
            case 26 : 
            case 29 : 
            case 30 : 
                exit = 1;
                break;
            case 31 : 
                var beg_ind$6 = str_ind + 1 | 0;
                var match$19 = parse_literal(beg_ind$6, beg_ind$6, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* FFlush */2,
                            match$19[0]
                          ])];
            case 32 : 
                var beg_ind$7 = str_ind + 1 | 0;
                var match$20 = parse_literal(beg_ind$7, beg_ind$7, end_ind);
                return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                            /* Escaped_at */5,
                            match$20[0]
                          ])];
            
          }
        } else {
          exit = 1;
        }
      } else {
        var beg_ind$8 = str_ind + 1 | 0;
        var match$21 = parse_literal(beg_ind$8, beg_ind$8, end_ind);
        return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                    /* Force_newline */3,
                    match$21[0]
                  ])];
      }
      if (exit === 1) {
        var beg_ind$9 = str_ind + 1 | 0;
        var match$22 = parse_literal(beg_ind$9, beg_ind$9, end_ind);
        return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                    /* Scan_indic */Block.__(2, [c]),
                    match$22[0]
                  ])];
      }
      
    }
  };
  var add_literal = function (lit_start, str_ind, fmt) {
    var size = str_ind - lit_start | 0;
    if (size !== 0) {
      if (size !== 1) {
        return /* Fmt_EBB */[/* String_literal */Block.__(11, [
                    $$String.sub(str, lit_start, size),
                    fmt
                  ])];
      } else {
        return /* Fmt_EBB */[/* Char_literal */Block.__(12, [
                    Caml_string.get(str, lit_start),
                    fmt
                  ])];
      }
    } else {
      return /* Fmt_EBB */[fmt];
    }
  };
  var parse_spaces = function (_str_ind, end_ind) {
    while(true) {
      var str_ind = _str_ind;
      if (str_ind === end_ind) {
        invalid_format_message(end_ind, "unexpected end of format");
      }
      if (Caml_string.get(str, str_ind) === /* " " */32) {
        _str_ind = str_ind + 1 | 0;
        continue ;
        
      } else {
        return str_ind;
      }
    };
  };
  var parse_integer = function (str_ind, end_ind) {
    if (str_ind === end_ind) {
      invalid_format_message(end_ind, "unexpected end of format");
    }
    var match = Caml_string.get(str, str_ind);
    if (match >= 48) {
      if (match >= 58) {
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                2624,
                11
              ]
            ];
      } else {
        return parse_positive(str_ind, end_ind, 0);
      }
    } else if (match !== 45) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            [
              "camlinternalFormat.ml",
              2624,
              11
            ]
          ];
    } else {
      if ((str_ind + 1 | 0) === end_ind) {
        invalid_format_message(end_ind, "unexpected end of format");
      }
      var c = Caml_string.get(str, str_ind + 1 | 0);
      if (c > 57 || c < 48) {
        return expected_character(str_ind + 1 | 0, "digit", c);
      } else {
        var match$1 = parse_positive(str_ind + 1 | 0, end_ind, 0);
        return /* tuple */[
                match$1[0],
                -match$1[1] | 0
              ];
      }
    }
  };
  var compute_float_conv = function (pct_ind, str_ind, _plus, _space, symb) {
    while(true) {
      var space = _space;
      var plus = _plus;
      if (plus !== 0) {
        if (space !== 0) {
          if (legacy_behavior$1) {
            _space = /* false */0;
            continue ;
            
          } else {
            return incompatible_flag(pct_ind, str_ind, /* " " */32, "'+'");
          }
        } else {
          var exit = 0;
          if (symb >= 72) {
            var switcher = symb - 101 | 0;
            if (switcher > 2 || switcher < 0) {
              exit = 1;
            } else {
              switch (switcher) {
                case 0 : 
                    return /* Float_pe */4;
                case 1 : 
                    return /* Float_pf */1;
                case 2 : 
                    return /* Float_pg */10;
                
              }
            }
          } else if (symb >= 69) {
            switch (symb - 69 | 0) {
              case 0 : 
                  return /* Float_pE */7;
              case 1 : 
                  exit = 1;
                  break;
              case 2 : 
                  return /* Float_pG */13;
              
            }
          } else {
            exit = 1;
          }
          if (exit === 1) {
            if (legacy_behavior$1) {
              _plus = /* false */0;
              continue ;
              
            } else {
              return incompatible_flag(pct_ind, str_ind, symb, "'+'");
            }
          }
          
        }
      } else if (space !== 0) {
        var exit$1 = 0;
        if (symb >= 72) {
          var switcher$1 = symb - 101 | 0;
          if (switcher$1 > 2 || switcher$1 < 0) {
            exit$1 = 1;
          } else {
            switch (switcher$1) {
              case 0 : 
                  return /* Float_se */5;
              case 1 : 
                  return /* Float_sf */2;
              case 2 : 
                  return /* Float_sg */11;
              
            }
          }
        } else if (symb >= 69) {
          switch (symb - 69 | 0) {
            case 0 : 
                return /* Float_sE */8;
            case 1 : 
                exit$1 = 1;
                break;
            case 2 : 
                return /* Float_sG */14;
            
          }
        } else {
          exit$1 = 1;
        }
        if (exit$1 === 1) {
          if (legacy_behavior$1) {
            _space = /* false */0;
            continue ;
            
          } else {
            return incompatible_flag(pct_ind, str_ind, symb, "' '");
          }
        }
        
      } else if (symb >= 72) {
        var switcher$2 = symb - 101 | 0;
        if (switcher$2 > 2 || switcher$2 < 0) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                [
                  "camlinternalFormat.ml",
                  2747,
                  25
                ]
              ];
        } else {
          switch (switcher$2) {
            case 0 : 
                return /* Float_e */3;
            case 1 : 
                return /* Float_f */0;
            case 2 : 
                return /* Float_g */9;
            
          }
        }
      } else if (symb >= 69) {
        switch (symb - 69 | 0) {
          case 0 : 
              return /* Float_E */6;
          case 1 : 
              return /* Float_F */15;
          case 2 : 
              return /* Float_G */12;
          
        }
      } else {
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "camlinternalFormat.ml",
                2747,
                25
              ]
            ];
      }
    };
  };
  var search_subformat_end = function (_str_ind, end_ind, c) {
    while(true) {
      var str_ind = _str_ind;
      if (str_ind === end_ind) {
        Curry._3(failwith_message(/* Format */[
                  /* String_literal */Block.__(11, [
                      "invalid format ",
                      /* Caml_string */Block.__(3, [
                          /* No_padding */0,
                          /* String_literal */Block.__(11, [
                              ": unclosed sub-format, expected \"",
                              /* Char_literal */Block.__(12, [
                                  /* "%" */37,
                                  /* Char */Block.__(0, [/* String_literal */Block.__(11, [
                                          "\" at character number ",
                                          /* Int */Block.__(4, [
                                              /* Int_d */0,
                                              /* No_padding */0,
                                              /* No_precision */0,
                                              /* End_of_format */0
                                            ])
                                        ])])
                                ])
                            ])
                        ])
                    ]),
                  "invalid format %S: unclosed sub-format, expected \"%%%c\" at character number %d"
                ]), str, c, end_ind);
      }
      var match = Caml_string.get(str, str_ind);
      if (match !== 37) {
        _str_ind = str_ind + 1 | 0;
        continue ;
        
      } else {
        if ((str_ind + 1 | 0) === end_ind) {
          invalid_format_message(end_ind, "unexpected end of format");
        }
        if (Caml_string.get(str, str_ind + 1 | 0) === c) {
          return str_ind;
        } else {
          var match$1 = Caml_string.get(str, str_ind + 1 | 0);
          var exit = 0;
          if (match$1 >= 95) {
            if (match$1 >= 123) {
              if (match$1 >= 126) {
                exit = 1;
              } else {
                switch (match$1 - 123 | 0) {
                  case 0 : 
                      var sub_end = search_subformat_end(str_ind + 2 | 0, end_ind, /* "}" */125);
                      _str_ind = sub_end + 2 | 0;
                      continue ;
                      case 1 : 
                      exit = 1;
                      break;
                  case 2 : 
                      return expected_character(str_ind + 1 | 0, "character ')'", /* "}" */125);
                  
                }
              }
            } else if (match$1 >= 96) {
              exit = 1;
            } else {
              if ((str_ind + 2 | 0) === end_ind) {
                invalid_format_message(end_ind, "unexpected end of format");
              }
              var match$2 = Caml_string.get(str, str_ind + 2 | 0);
              if (match$2 !== 40) {
                if (match$2 !== 123) {
                  _str_ind = str_ind + 3 | 0;
                  continue ;
                  
                } else {
                  var sub_end$1 = search_subformat_end(str_ind + 3 | 0, end_ind, /* "}" */125);
                  _str_ind = sub_end$1 + 2 | 0;
                  continue ;
                  
                }
              } else {
                var sub_end$2 = search_subformat_end(str_ind + 3 | 0, end_ind, /* ")" */41);
                _str_ind = sub_end$2 + 2 | 0;
                continue ;
                
              }
            }
          } else if (match$1 !== 40) {
            if (match$1 !== 41) {
              exit = 1;
            } else {
              return expected_character(str_ind + 1 | 0, "character '}'", /* ")" */41);
            }
          } else {
            var sub_end$3 = search_subformat_end(str_ind + 2 | 0, end_ind, /* ")" */41);
            _str_ind = sub_end$3 + 2 | 0;
            continue ;
            
          }
          if (exit === 1) {
            _str_ind = str_ind + 2 | 0;
            continue ;
            
          }
          
        }
      }
    };
  };
  var parse_conversion = function (pct_ind, str_ind, end_ind, plus, sharp, space, ign, pad, prec, padprec, symb) {
    var plus_used = /* false */0;
    var sharp_used = /* false */0;
    var space_used = /* false */0;
    var ign_used = [/* false */0];
    var pad_used = /* false */0;
    var prec_used = [/* false */0];
    var check_no_0 = function (symb, pad) {
      if (typeof pad === "number") {
        return pad;
      } else if (pad.tag) {
        if (pad[0] >= 2) {
          if (legacy_behavior$1) {
            return /* Arg_padding */Block.__(1, [/* Right */1]);
          } else {
            return incompatible_flag(pct_ind, str_ind, symb, "0");
          }
        } else {
          return pad;
        }
      } else if (pad[0] >= 2) {
        if (legacy_behavior$1) {
          return /* Lit_padding */Block.__(0, [
                    /* Right */1,
                    pad[1]
                  ]);
        } else {
          return incompatible_flag(pct_ind, str_ind, symb, "0");
        }
      } else {
        return pad;
      }
    };
    var opt_of_pad = function (c, pad) {
      if (typeof pad === "number") {
        return /* None */0;
      } else if (pad.tag) {
        return incompatible_flag(pct_ind, str_ind, c, "'*'");
      } else {
        switch (pad[0]) {
          case 0 : 
              if (legacy_behavior$1) {
                return /* Some */[pad[1]];
              } else {
                return incompatible_flag(pct_ind, str_ind, c, "'-'");
              }
          case 1 : 
              return /* Some */[pad[1]];
          case 2 : 
              if (legacy_behavior$1) {
                return /* Some */[pad[1]];
              } else {
                return incompatible_flag(pct_ind, str_ind, c, "'0'");
              }
          
        }
      }
    };
    var get_prec_opt = function () {
      prec_used[0] = /* true */1;
      if (typeof prec === "number") {
        if (prec !== 0) {
          return incompatible_flag(pct_ind, str_ind, /* "_" */95, "'*'");
        } else {
          return /* None */0;
        }
      } else {
        return /* Some */[prec[0]];
      }
    };
    var fmt_result;
    var exit = 0;
    var exit$1 = 0;
    var exit$2 = 0;
    if (symb >= 124) {
      exit$1 = 6;
    } else {
      switch (symb) {
        case 33 : 
            var match = parse_literal(str_ind, str_ind, end_ind);
            fmt_result = /* Fmt_EBB */[/* Flush */Block.__(10, [match[0]])];
            break;
        case 40 : 
            var sub_end = search_subformat_end(str_ind, end_ind, /* ")" */41);
            var beg_ind = sub_end + 2 | 0;
            var match$1 = parse_literal(beg_ind, beg_ind, end_ind);
            var fmt_rest = match$1[0];
            var match$2 = parse_literal(str_ind, str_ind, sub_end);
            var sub_fmtty = fmtty_of_fmt(match$2[0]);
            if (ign_used[0] = /* true */1, ign) {
              pad_used = /* true */1;
              var ignored_000 = opt_of_pad(/* "_" */95, pad);
              var ignored = /* Ignored_format_subst */Block.__(8, [
                  ignored_000,
                  sub_fmtty
                ]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored,
                    fmt_rest
                  ])];
            } else {
              pad_used = /* true */1;
              fmt_result = /* Fmt_EBB */[/* Format_subst */Block.__(14, [
                    opt_of_pad(/* "(" */40, pad),
                    sub_fmtty,
                    fmt_rest
                  ])];
            }
            break;
        case 44 : 
            fmt_result = parse_literal(str_ind, str_ind, end_ind);
            break;
        case 37 : 
        case 64 : 
            exit$1 = 4;
            break;
        case 67 : 
            var match$3 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$1 = match$3[0];
            fmt_result = (ign_used[0] = /* true */1, ign) ? /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    /* Ignored_caml_char */1,
                    fmt_rest$1
                  ])] : /* Fmt_EBB */[/* Caml_char */Block.__(1, [fmt_rest$1])];
            break;
        case 78 : 
            var match$4 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$2 = match$4[0];
            if (ign_used[0] = /* true */1, ign) {
              var ignored$1 = /* Ignored_scan_get_counter */Block.__(10, [/* Token_counter */2]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$1,
                    fmt_rest$2
                  ])];
            } else {
              fmt_result = /* Fmt_EBB */[/* Scan_get_counter */Block.__(21, [
                    /* Token_counter */2,
                    fmt_rest$2
                  ])];
            }
            break;
        case 83 : 
            pad_used = /* true */1;
            var pad$1 = check_no_0(symb, padprec);
            var match$5 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$3 = match$5[0];
            if (ign_used[0] = /* true */1, ign) {
              pad_used = /* true */1;
              var ignored$2 = /* Ignored_caml_string */Block.__(1, [opt_of_pad(/* "_" */95, padprec)]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$2,
                    fmt_rest$3
                  ])];
            } else {
              var match$6 = make_padding_fmt_ebb(pad$1, fmt_rest$3);
              fmt_result = /* Fmt_EBB */[/* Caml_string */Block.__(3, [
                    match$6[0],
                    match$6[1]
                  ])];
            }
            break;
        case 91 : 
            var match$7 = parse_char_set(str_ind, end_ind);
            var char_set = match$7[1];
            var next_ind = match$7[0];
            var match$8 = parse_literal(next_ind, next_ind, end_ind);
            var fmt_rest$4 = match$8[0];
            if (ign_used[0] = /* true */1, ign) {
              pad_used = /* true */1;
              var ignored_000$1 = opt_of_pad(/* "_" */95, pad);
              var ignored$3 = /* Ignored_scan_char_set */Block.__(9, [
                  ignored_000$1,
                  char_set
                ]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$3,
                    fmt_rest$4
                  ])];
            } else {
              pad_used = /* true */1;
              fmt_result = /* Fmt_EBB */[/* Scan_char_set */Block.__(20, [
                    opt_of_pad(/* "[" */91, pad),
                    char_set,
                    fmt_rest$4
                  ])];
            }
            break;
        case 32 : 
        case 35 : 
        case 43 : 
        case 45 : 
        case 95 : 
            exit$1 = 5;
            break;
        case 97 : 
            var match$9 = parse_literal(str_ind, str_ind, end_ind);
            fmt_result = /* Fmt_EBB */[/* Alpha */Block.__(15, [match$9[0]])];
            break;
        case 66 : 
        case 98 : 
            exit$1 = 3;
            break;
        case 99 : 
            var char_format = function (fmt_rest) {
              if (ign_used[0] = /* true */1, ign) {
                return /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                            /* Ignored_char */0,
                            fmt_rest
                          ])];
              } else {
                return /* Fmt_EBB */[/* Char */Block.__(0, [fmt_rest])];
              }
            };
            var scan_format = function (fmt_rest) {
              if (ign_used[0] = /* true */1, ign) {
                return /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                            /* Ignored_scan_next_char */4,
                            fmt_rest
                          ])];
              } else {
                return /* Fmt_EBB */[/* Scan_next_char */Block.__(22, [fmt_rest])];
              }
            };
            var match$10 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$5 = match$10[0];
            pad_used = /* true */1;
            var match$11 = opt_of_pad(/* "c" */99, pad);
            fmt_result = match$11 ? (
                match$11[0] !== 0 ? (
                    legacy_behavior$1 ? char_format(fmt_rest$5) : invalid_format_message(str_ind, "non-zero widths are unsupported for %c conversions")
                  ) : scan_format(fmt_rest$5)
              ) : char_format(fmt_rest$5);
            break;
        case 69 : 
        case 70 : 
        case 71 : 
        case 101 : 
        case 102 : 
        case 103 : 
            exit$1 = 2;
            break;
        case 76 : 
        case 108 : 
        case 110 : 
            exit$2 = 8;
            break;
        case 114 : 
            var match$12 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$6 = match$12[0];
            fmt_result = (ign_used[0] = /* true */1, ign) ? /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    /* Ignored_reader */3,
                    fmt_rest$6
                  ])] : /* Fmt_EBB */[/* Reader */Block.__(19, [fmt_rest$6])];
            break;
        case 115 : 
            pad_used = /* true */1;
            var pad$2 = check_no_0(symb, padprec);
            var match$13 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$7 = match$13[0];
            if (ign_used[0] = /* true */1, ign) {
              pad_used = /* true */1;
              var ignored$4 = /* Ignored_string */Block.__(0, [opt_of_pad(/* "_" */95, padprec)]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$4,
                    fmt_rest$7
                  ])];
            } else {
              var match$14 = make_padding_fmt_ebb(pad$2, fmt_rest$7);
              fmt_result = /* Fmt_EBB */[/* String */Block.__(2, [
                    match$14[0],
                    match$14[1]
                  ])];
            }
            break;
        case 116 : 
            var match$15 = parse_literal(str_ind, str_ind, end_ind);
            fmt_result = /* Fmt_EBB */[/* Theta */Block.__(16, [match$15[0]])];
            break;
        case 88 : 
        case 100 : 
        case 105 : 
        case 111 : 
        case 117 : 
        case 120 : 
            exit$2 = 7;
            break;
        case 0 : 
        case 1 : 
        case 2 : 
        case 3 : 
        case 4 : 
        case 5 : 
        case 6 : 
        case 7 : 
        case 8 : 
        case 9 : 
        case 10 : 
        case 11 : 
        case 12 : 
        case 13 : 
        case 14 : 
        case 15 : 
        case 16 : 
        case 17 : 
        case 18 : 
        case 19 : 
        case 20 : 
        case 21 : 
        case 22 : 
        case 23 : 
        case 24 : 
        case 25 : 
        case 26 : 
        case 27 : 
        case 28 : 
        case 29 : 
        case 30 : 
        case 31 : 
        case 34 : 
        case 36 : 
        case 38 : 
        case 39 : 
        case 41 : 
        case 42 : 
        case 46 : 
        case 47 : 
        case 48 : 
        case 49 : 
        case 50 : 
        case 51 : 
        case 52 : 
        case 53 : 
        case 54 : 
        case 55 : 
        case 56 : 
        case 57 : 
        case 58 : 
        case 59 : 
        case 60 : 
        case 61 : 
        case 62 : 
        case 63 : 
        case 65 : 
        case 68 : 
        case 72 : 
        case 73 : 
        case 74 : 
        case 75 : 
        case 77 : 
        case 79 : 
        case 80 : 
        case 81 : 
        case 82 : 
        case 84 : 
        case 85 : 
        case 86 : 
        case 87 : 
        case 89 : 
        case 90 : 
        case 92 : 
        case 93 : 
        case 94 : 
        case 96 : 
        case 104 : 
        case 106 : 
        case 107 : 
        case 109 : 
        case 112 : 
        case 113 : 
        case 118 : 
        case 119 : 
        case 121 : 
        case 122 : 
            exit$1 = 6;
            break;
        case 123 : 
            var sub_end$1 = search_subformat_end(str_ind, end_ind, /* "}" */125);
            var match$16 = parse_literal(str_ind, str_ind, sub_end$1);
            var beg_ind$1 = sub_end$1 + 2 | 0;
            var match$17 = parse_literal(beg_ind$1, beg_ind$1, end_ind);
            var fmt_rest$8 = match$17[0];
            var sub_fmtty$1 = fmtty_of_fmt(match$16[0]);
            if (ign_used[0] = /* true */1, ign) {
              pad_used = /* true */1;
              var ignored_000$2 = opt_of_pad(/* "_" */95, pad);
              var ignored$5 = /* Ignored_format_arg */Block.__(7, [
                  ignored_000$2,
                  sub_fmtty$1
                ]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$5,
                    fmt_rest$8
                  ])];
            } else {
              pad_used = /* true */1;
              fmt_result = /* Fmt_EBB */[/* Format_arg */Block.__(13, [
                    opt_of_pad(/* "{" */123, pad),
                    sub_fmtty$1,
                    fmt_rest$8
                  ])];
            }
            break;
        
      }
    }
    switch (exit$2) {
      case 7 : 
          plus_used = /* true */1;
          sharp_used = /* true */1;
          space_used = /* true */1;
          var iconv = compute_int_conv(pct_ind, str_ind, plus, sharp, space, symb);
          var match$18 = parse_literal(str_ind, str_ind, end_ind);
          var fmt_rest$9 = match$18[0];
          if (ign_used[0] = /* true */1, ign) {
            pad_used = /* true */1;
            var ignored_001 = opt_of_pad(/* "_" */95, pad);
            var ignored$6 = /* Ignored_int */Block.__(2, [
                iconv,
                ignored_001
              ]);
            fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                  ignored$6,
                  fmt_rest$9
                ])];
          } else {
            pad_used = /* true */1;
            prec_used[0] = /* true */1;
            var pad$3;
            var exit$3 = 0;
            if (typeof prec === "number" && prec === 0) {
              pad$3 = pad;
            } else {
              exit$3 = 9;
            }
            if (exit$3 === 9) {
              pad$3 = typeof pad === "number" ? /* No_padding */0 : (
                  pad.tag ? (
                      pad[0] >= 2 ? (
                          legacy_behavior$1 ? /* Arg_padding */Block.__(1, [/* Right */1]) : incompatible_flag(pct_ind, str_ind, /* "0" */48, "precision")
                        ) : pad
                    ) : (
                      pad[0] >= 2 ? (
                          legacy_behavior$1 ? /* Lit_padding */Block.__(0, [
                                /* Right */1,
                                pad[1]
                              ]) : incompatible_flag(pct_ind, str_ind, /* "0" */48, "precision")
                        ) : pad
                    )
                );
            }
            var match$19 = make_padprec_fmt_ebb(pad$3, (prec_used[0] = /* true */1, prec), fmt_rest$9);
            fmt_result = /* Fmt_EBB */[/* Int */Block.__(4, [
                  iconv,
                  match$19[0],
                  match$19[1],
                  match$19[2]
                ])];
          }
          break;
      case 8 : 
          if (str_ind === end_ind || !is_int_base(Caml_string.get(str, str_ind))) {
            var match$20 = parse_literal(str_ind, str_ind, end_ind);
            var fmt_rest$10 = match$20[0];
            var counter = counter_of_char(symb);
            if (ign_used[0] = /* true */1, ign) {
              var ignored$7 = /* Ignored_scan_get_counter */Block.__(10, [counter]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$7,
                    fmt_rest$10
                  ])];
            } else {
              fmt_result = /* Fmt_EBB */[/* Scan_get_counter */Block.__(21, [
                    counter,
                    fmt_rest$10
                  ])];
            }
          } else {
            exit$1 = 6;
          }
          break;
      
    }
    switch (exit$1) {
      case 2 : 
          plus_used = /* true */1;
          space_used = /* true */1;
          var fconv = compute_float_conv(pct_ind, str_ind, plus, space, symb);
          var match$21 = parse_literal(str_ind, str_ind, end_ind);
          var fmt_rest$11 = match$21[0];
          if (ign_used[0] = /* true */1, ign) {
            pad_used = /* true */1;
            var ignored_000$3 = opt_of_pad(/* "_" */95, pad);
            var ignored_001$1 = get_prec_opt(/* () */0);
            var ignored$8 = /* Ignored_float */Block.__(6, [
                ignored_000$3,
                ignored_001$1
              ]);
            fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                  ignored$8,
                  fmt_rest$11
                ])];
          } else {
            pad_used = /* true */1;
            var match$22 = make_padprec_fmt_ebb(pad, (prec_used[0] = /* true */1, prec), fmt_rest$11);
            fmt_result = /* Fmt_EBB */[/* Float */Block.__(8, [
                  fconv,
                  match$22[0],
                  match$22[1],
                  match$22[2]
                ])];
          }
          break;
      case 3 : 
          var match$23 = parse_literal(str_ind, str_ind, end_ind);
          var fmt_rest$12 = match$23[0];
          fmt_result = (ign_used[0] = /* true */1, ign) ? /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                  /* Ignored_bool */2,
                  fmt_rest$12
                ])] : /* Fmt_EBB */[/* Bool */Block.__(9, [fmt_rest$12])];
          break;
      case 4 : 
          var match$24 = parse_literal(str_ind, str_ind, end_ind);
          fmt_result = /* Fmt_EBB */[/* Char_literal */Block.__(12, [
                symb,
                match$24[0]
              ])];
          break;
      case 5 : 
          fmt_result = Curry._3(failwith_message(/* Format */[
                    /* String_literal */Block.__(11, [
                        "invalid format ",
                        /* Caml_string */Block.__(3, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": at character number ",
                                /* Int */Block.__(4, [
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* String_literal */Block.__(11, [
                                        ", flag ",
                                        /* Caml_char */Block.__(1, [/* String_literal */Block.__(11, [
                                                " is only allowed after the '",
                                                /* Char_literal */Block.__(12, [
                                                    /* "%" */37,
                                                    /* String_literal */Block.__(11, [
                                                        "', before padding and precision",
                                                        /* End_of_format */0
                                                      ])
                                                  ])
                                              ])])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "invalid format %S: at character number %d, flag %C is only allowed after the '%%', before padding and precision"
                  ]), str, pct_ind, symb);
          break;
      case 6 : 
          if (symb >= 108) {
            if (symb >= 111) {
              exit = 1;
            } else {
              switch (symb - 108 | 0) {
                case 0 : 
                    plus_used = /* true */1;
                    sharp_used = /* true */1;
                    space_used = /* true */1;
                    var iconv$1 = compute_int_conv(pct_ind, str_ind + 1 | 0, plus, sharp, space, Caml_string.get(str, str_ind));
                    var beg_ind$2 = str_ind + 1 | 0;
                    var match$25 = parse_literal(beg_ind$2, beg_ind$2, end_ind);
                    var fmt_rest$13 = match$25[0];
                    if (ign_used[0] = /* true */1, ign) {
                      pad_used = /* true */1;
                      var ignored_001$2 = opt_of_pad(/* "_" */95, pad);
                      var ignored$9 = /* Ignored_int32 */Block.__(3, [
                          iconv$1,
                          ignored_001$2
                        ]);
                      fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                            ignored$9,
                            fmt_rest$13
                          ])];
                    } else {
                      pad_used = /* true */1;
                      var match$26 = make_padprec_fmt_ebb(pad, (prec_used[0] = /* true */1, prec), fmt_rest$13);
                      fmt_result = /* Fmt_EBB */[/* Int32 */Block.__(5, [
                            iconv$1,
                            match$26[0],
                            match$26[1],
                            match$26[2]
                          ])];
                    }
                    break;
                case 1 : 
                    exit = 1;
                    break;
                case 2 : 
                    plus_used = /* true */1;
                    sharp_used = /* true */1;
                    space_used = /* true */1;
                    var iconv$2 = compute_int_conv(pct_ind, str_ind + 1 | 0, plus, sharp, space, Caml_string.get(str, str_ind));
                    var beg_ind$3 = str_ind + 1 | 0;
                    var match$27 = parse_literal(beg_ind$3, beg_ind$3, end_ind);
                    var fmt_rest$14 = match$27[0];
                    if (ign_used[0] = /* true */1, ign) {
                      pad_used = /* true */1;
                      var ignored_001$3 = opt_of_pad(/* "_" */95, pad);
                      var ignored$10 = /* Ignored_nativeint */Block.__(4, [
                          iconv$2,
                          ignored_001$3
                        ]);
                      fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                            ignored$10,
                            fmt_rest$14
                          ])];
                    } else {
                      pad_used = /* true */1;
                      var match$28 = make_padprec_fmt_ebb(pad, (prec_used[0] = /* true */1, prec), fmt_rest$14);
                      fmt_result = /* Fmt_EBB */[/* Nativeint */Block.__(6, [
                            iconv$2,
                            match$28[0],
                            match$28[1],
                            match$28[2]
                          ])];
                    }
                    break;
                
              }
            }
          } else if (symb !== 76) {
            exit = 1;
          } else {
            plus_used = /* true */1;
            sharp_used = /* true */1;
            space_used = /* true */1;
            var iconv$3 = compute_int_conv(pct_ind, str_ind + 1 | 0, plus, sharp, space, Caml_string.get(str, str_ind));
            var beg_ind$4 = str_ind + 1 | 0;
            var match$29 = parse_literal(beg_ind$4, beg_ind$4, end_ind);
            var fmt_rest$15 = match$29[0];
            if (ign_used[0] = /* true */1, ign) {
              pad_used = /* true */1;
              var ignored_001$4 = opt_of_pad(/* "_" */95, pad);
              var ignored$11 = /* Ignored_int64 */Block.__(5, [
                  iconv$3,
                  ignored_001$4
                ]);
              fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                    ignored$11,
                    fmt_rest$15
                  ])];
            } else {
              pad_used = /* true */1;
              var match$30 = make_padprec_fmt_ebb(pad, (prec_used[0] = /* true */1, prec), fmt_rest$15);
              fmt_result = /* Fmt_EBB */[/* Int64 */Block.__(7, [
                    iconv$3,
                    match$30[0],
                    match$30[1],
                    match$30[2]
                  ])];
            }
          }
          break;
      
    }
    if (exit === 1) {
      fmt_result = Curry._3(failwith_message(/* Format */[
                /* String_literal */Block.__(11, [
                    "invalid format ",
                    /* Caml_string */Block.__(3, [
                        /* No_padding */0,
                        /* String_literal */Block.__(11, [
                            ": at character number ",
                            /* Int */Block.__(4, [
                                /* Int_d */0,
                                /* No_padding */0,
                                /* No_precision */0,
                                /* String_literal */Block.__(11, [
                                    ", invalid conversion \"",
                                    /* Char_literal */Block.__(12, [
                                        /* "%" */37,
                                        /* Char */Block.__(0, [/* Char_literal */Block.__(12, [
                                                /* "\"" */34,
                                                /* End_of_format */0
                                              ])])
                                      ])
                                  ])
                              ])
                          ])
                      ])
                  ]),
                "invalid format %S: at character number %d, invalid conversion \"%%%c\""
              ]), str, str_ind - 1 | 0, symb);
    }
    if (!legacy_behavior$1) {
      if (!plus_used && plus) {
        incompatible_flag(pct_ind, str_ind, symb, "'+'");
      }
      if (!sharp_used && sharp) {
        incompatible_flag(pct_ind, str_ind, symb, "'#'");
      }
      if (!space_used && space) {
        incompatible_flag(pct_ind, str_ind, symb, "' '");
      }
      if (!pad_used && Caml_obj.caml_notequal(/* Padding_EBB */[pad], /* Padding_EBB */[/* No_padding */0])) {
        incompatible_flag(pct_ind, str_ind, symb, "`padding'");
      }
      if (!prec_used[0] && Caml_obj.caml_notequal(/* Precision_EBB */[prec], /* Precision_EBB */[/* No_precision */0])) {
        incompatible_flag(pct_ind, str_ind, ign ? /* "_" */95 : symb, "`precision'");
      }
      if (ign && plus) {
        incompatible_flag(pct_ind, str_ind, /* "_" */95, "'+'");
      }
      
    }
    if (!ign_used[0] && ign) {
      var exit$4 = 0;
      if (symb >= 38) {
        if (symb !== 44) {
          if (symb !== 64) {
            exit$4 = 1;
          } else if (!legacy_behavior$1) {
            exit$4 = 1;
          }
          
        } else if (!legacy_behavior$1) {
          exit$4 = 1;
        }
        
      } else if (symb !== 33) {
        if (symb >= 37) {
          if (!legacy_behavior$1) {
            exit$4 = 1;
          }
          
        } else {
          exit$4 = 1;
        }
      } else if (!legacy_behavior$1) {
        exit$4 = 1;
      }
      if (exit$4 === 1) {
        incompatible_flag(pct_ind, str_ind, symb, "'_'");
      }
      
    }
    return fmt_result;
  };
  var parse_flags = function (pct_ind, str_ind, end_ind, ign) {
    var zero = [/* false */0];
    var minus = [/* false */0];
    var plus = [/* false */0];
    var space = [/* false */0];
    var sharp = [/* false */0];
    var set_flag = function (str_ind, flag) {
      if (flag[0] && !legacy_behavior$1) {
        Curry._3(failwith_message(/* Format */[
                  /* String_literal */Block.__(11, [
                      "invalid format ",
                      /* Caml_string */Block.__(3, [
                          /* No_padding */0,
                          /* String_literal */Block.__(11, [
                              ": at character number ",
                              /* Int */Block.__(4, [
                                  /* Int_d */0,
                                  /* No_padding */0,
                                  /* No_precision */0,
                                  /* String_literal */Block.__(11, [
                                      ", duplicate flag ",
                                      /* Caml_char */Block.__(1, [/* End_of_format */0])
                                    ])
                                ])
                            ])
                        ])
                    ]),
                  "invalid format %S: at character number %d, duplicate flag %C"
                ]), str, str_ind, Caml_string.get(str, str_ind));
      }
      flag[0] = /* true */1;
      return /* () */0;
    };
    var _str_ind = str_ind;
    while(true) {
      var str_ind$1 = _str_ind;
      if (str_ind$1 === end_ind) {
        invalid_format_message(end_ind, "unexpected end of format");
      }
      var match = Caml_string.get(str, str_ind$1);
      var exit = 0;
      var switcher = match - 32 | 0;
      if (switcher > 16 || switcher < 0) {
        exit = 1;
      } else {
        switch (switcher) {
          case 0 : 
              set_flag(str_ind$1, space);
              _str_ind = str_ind$1 + 1 | 0;
              continue ;
              case 3 : 
              set_flag(str_ind$1, sharp);
              _str_ind = str_ind$1 + 1 | 0;
              continue ;
              case 11 : 
              set_flag(str_ind$1, plus);
              _str_ind = str_ind$1 + 1 | 0;
              continue ;
              case 13 : 
              set_flag(str_ind$1, minus);
              _str_ind = str_ind$1 + 1 | 0;
              continue ;
              case 1 : 
          case 2 : 
          case 4 : 
          case 5 : 
          case 6 : 
          case 7 : 
          case 8 : 
          case 9 : 
          case 10 : 
          case 12 : 
          case 14 : 
          case 15 : 
              exit = 1;
              break;
          case 16 : 
              set_flag(str_ind$1, zero);
              _str_ind = str_ind$1 + 1 | 0;
              continue ;
              
        }
      }
      if (exit === 1) {
        var pct_ind$1 = pct_ind;
        var str_ind$2 = str_ind$1;
        var end_ind$1 = end_ind;
        var zero$1 = zero[0];
        var minus$1 = minus[0];
        var plus$1 = plus[0];
        var sharp$1 = sharp[0];
        var space$1 = space[0];
        var ign$1 = ign;
        if (str_ind$2 === end_ind$1) {
          invalid_format_message(end_ind$1, "unexpected end of format");
        }
        var padty = zero$1 !== 0 ? (
            minus$1 !== 0 ? (
                legacy_behavior$1 ? /* Left */0 : incompatible_flag(pct_ind$1, str_ind$2, /* "-" */45, "0")
              ) : /* Zeros */2
          ) : (
            minus$1 !== 0 ? /* Left */0 : /* Right */1
          );
        var match$1 = Caml_string.get(str, str_ind$2);
        var exit$1 = 0;
        if (match$1 >= 48) {
          if (match$1 >= 58) {
            exit$1 = 1;
          } else {
            var match$2 = parse_positive(str_ind$2, end_ind$1, 0);
            return parse_after_padding(pct_ind$1, match$2[0], end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* Lit_padding */Block.__(0, [
                          padty,
                          match$2[1]
                        ]));
          }
        } else if (match$1 !== 42) {
          exit$1 = 1;
        } else {
          return parse_after_padding(pct_ind$1, str_ind$2 + 1 | 0, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* Arg_padding */Block.__(1, [padty]));
        }
        if (exit$1 === 1) {
          switch (padty) {
            case 0 : 
                if (!legacy_behavior$1) {
                  invalid_format_without(str_ind$2 - 1 | 0, /* "-" */45, "padding");
                }
                return parse_after_padding(pct_ind$1, str_ind$2, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* No_padding */0);
            case 1 : 
                return parse_after_padding(pct_ind$1, str_ind$2, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* No_padding */0);
            case 2 : 
                return parse_after_padding(pct_ind$1, str_ind$2, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* Lit_padding */Block.__(0, [
                              /* Right */1,
                              0
                            ]));
            
          }
        }
        
      }
      
    };
  };
  var is_int_base = function (symb) {
    var switcher = symb - 88 | 0;
    if (switcher > 32 || switcher < 0) {
      return /* false */0;
    } else {
      switch (switcher) {
        case 1 : 
        case 2 : 
        case 3 : 
        case 4 : 
        case 5 : 
        case 6 : 
        case 7 : 
        case 8 : 
        case 9 : 
        case 10 : 
        case 11 : 
        case 13 : 
        case 14 : 
        case 15 : 
        case 16 : 
        case 18 : 
        case 19 : 
        case 20 : 
        case 21 : 
        case 22 : 
        case 24 : 
        case 25 : 
        case 26 : 
        case 27 : 
        case 28 : 
        case 30 : 
        case 31 : 
            return /* false */0;
        case 0 : 
        case 12 : 
        case 17 : 
        case 23 : 
        case 29 : 
        case 32 : 
            return /* true */1;
        
      }
    }
  };
  var counter_of_char = function (symb) {
    var exit = 0;
    if (symb >= 108) {
      if (symb >= 111) {
        exit = 1;
      } else {
        switch (symb - 108 | 0) {
          case 0 : 
              return /* Line_counter */0;
          case 1 : 
              exit = 1;
              break;
          case 2 : 
              return /* Char_counter */1;
          
        }
      }
    } else if (symb !== 76) {
      exit = 1;
    } else {
      return /* Token_counter */2;
    }
    if (exit === 1) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            [
              "camlinternalFormat.ml",
              2686,
              34
            ]
          ];
    }
    
  };
  var parse_char_set = function (str_ind, end_ind) {
    if (str_ind === end_ind) {
      invalid_format_message(end_ind, "unexpected end of format");
    }
    var char_set = Bytes.make(32, /* "\000" */0);
    var add_range = function (c, c$prime) {
      for(var i = c; i <= c$prime; ++i){
        add_in_char_set(char_set, Pervasives.char_of_int(i));
      }
      return /* () */0;
    };
    var fail_single_percent = function (str_ind) {
      return Curry._2(failwith_message(/* Format */[
                      /* String_literal */Block.__(11, [
                          "invalid format ",
                          /* Caml_string */Block.__(3, [
                              /* No_padding */0,
                              /* String_literal */Block.__(11, [
                                  ": '",
                                  /* Char_literal */Block.__(12, [
                                      /* "%" */37,
                                      /* String_literal */Block.__(11, [
                                          "' alone is not accepted in character sets, use ",
                                          /* Char_literal */Block.__(12, [
                                              /* "%" */37,
                                              /* Char_literal */Block.__(12, [
                                                  /* "%" */37,
                                                  /* String_literal */Block.__(11, [
                                                      " instead at position ",
                                                      /* Int */Block.__(4, [
                                                          /* Int_d */0,
                                                          /* No_padding */0,
                                                          /* No_precision */0,
                                                          /* Char_literal */Block.__(12, [
                                                              /* "." */46,
                                                              /* End_of_format */0
                                                            ])
                                                        ])
                                                    ])
                                                ])
                                            ])
                                        ])
                                    ])
                                ])
                            ])
                        ]),
                      "invalid format %S: '%%' alone is not accepted in character sets, use %%%% instead at position %d."
                    ]), str, str_ind);
    };
    var parse_char_set_after_char = function (_str_ind, end_ind, _c) {
      while(true) {
        var c = _c;
        var str_ind = _str_ind;
        if (str_ind === end_ind) {
          invalid_format_message(end_ind, "unexpected end of format");
        }
        var c$prime = Caml_string.get(str, str_ind);
        var exit = 0;
        var exit$1 = 0;
        if (c$prime >= 46) {
          if (c$prime !== 64) {
            if (c$prime !== 93) {
              exit = 1;
            } else {
              add_in_char_set(char_set, c);
              return str_ind + 1 | 0;
            }
          } else {
            exit$1 = 2;
          }
        } else if (c$prime !== 37) {
          if (c$prime >= 45) {
            var str_ind$1 = str_ind + 1 | 0;
            var end_ind$1 = end_ind;
            var c$1 = c;
            if (str_ind$1 === end_ind$1) {
              invalid_format_message(end_ind$1, "unexpected end of format");
            }
            var c$prime$1 = Caml_string.get(str, str_ind$1);
            if (c$prime$1 !== 37) {
              if (c$prime$1 !== 93) {
                add_range(c$1, c$prime$1);
                return parse_char_set_content(str_ind$1 + 1 | 0, end_ind$1);
              } else {
                add_in_char_set(char_set, c$1);
                add_in_char_set(char_set, /* "-" */45);
                return str_ind$1 + 1 | 0;
              }
            } else {
              if ((str_ind$1 + 1 | 0) === end_ind$1) {
                invalid_format_message(end_ind$1, "unexpected end of format");
              }
              var c$prime$2 = Caml_string.get(str, str_ind$1 + 1 | 0);
              var exit$2 = 0;
              if (c$prime$2 !== 37) {
                if (c$prime$2 !== 64) {
                  return fail_single_percent(str_ind$1);
                } else {
                  exit$2 = 1;
                }
              } else {
                exit$2 = 1;
              }
              if (exit$2 === 1) {
                add_range(c$1, c$prime$2);
                return parse_char_set_content(str_ind$1 + 2 | 0, end_ind$1);
              }
              
            }
          } else {
            exit = 1;
          }
        } else {
          exit$1 = 2;
        }
        if (exit$1 === 2) {
          if (c === /* "%" */37) {
            add_in_char_set(char_set, c$prime);
            return parse_char_set_content(str_ind + 1 | 0, end_ind);
          } else {
            exit = 1;
          }
        }
        if (exit === 1) {
          if (c === /* "%" */37) {
            fail_single_percent(str_ind);
          }
          add_in_char_set(char_set, c);
          _c = c$prime;
          _str_ind = str_ind + 1 | 0;
          continue ;
          
        }
        
      };
    };
    var parse_char_set_content = function (_str_ind, end_ind) {
      while(true) {
        var str_ind = _str_ind;
        if (str_ind === end_ind) {
          invalid_format_message(end_ind, "unexpected end of format");
        }
        var c = Caml_string.get(str, str_ind);
        if (c !== 45) {
          if (c !== 93) {
            return parse_char_set_after_char(str_ind + 1 | 0, end_ind, c);
          } else {
            return str_ind + 1 | 0;
          }
        } else {
          add_in_char_set(char_set, /* "-" */45);
          _str_ind = str_ind + 1 | 0;
          continue ;
          
        }
      };
    };
    var parse_char_set_start = function (str_ind, end_ind) {
      if (str_ind === end_ind) {
        invalid_format_message(end_ind, "unexpected end of format");
      }
      var c = Caml_string.get(str, str_ind);
      return parse_char_set_after_char(str_ind + 1 | 0, end_ind, c);
    };
    if (str_ind === end_ind) {
      invalid_format_message(end_ind, "unexpected end of format");
    }
    var match = Caml_string.get(str, str_ind);
    var match$1 = match !== 94 ? /* tuple */[
        str_ind,
        /* false */0
      ] : /* tuple */[
        str_ind + 1 | 0,
        /* true */1
      ];
    var next_ind = parse_char_set_start(match$1[0], end_ind);
    var char_set$1 = Bytes.to_string(char_set);
    return /* tuple */[
            next_ind,
            match$1[1] ? rev_char_set(char_set$1) : char_set$1
          ];
  };
  var check_open_box = function (fmt) {
    if (typeof fmt === "number") {
      return /* () */0;
    } else if (fmt.tag === 11) {
      if (typeof fmt[1] === "number") {
        try {
          open_box_of_string(fmt[0]);
          return /* () */0;
        }
        catch (raw_exn){
          var exn = Js_exn.internalToOCamlException(raw_exn);
          if (exn[0] === Caml_builtin_exceptions.failure) {
            return /* () */0;
          } else {
            throw exn;
          }
        }
      } else {
        return /* () */0;
      }
    } else {
      return /* () */0;
    }
  };
  var parse_tag = function (is_open_tag, str_ind, end_ind) {
    try {
      if (str_ind === end_ind) {
        throw Caml_builtin_exceptions.not_found;
      }
      var match = Caml_string.get(str, str_ind);
      if (match !== 60) {
        throw Caml_builtin_exceptions.not_found;
      } else {
        var ind = $$String.index_from(str, str_ind + 1 | 0, /* ">" */62);
        if (ind >= end_ind) {
          throw Caml_builtin_exceptions.not_found;
        }
        var sub_str = $$String.sub(str, str_ind, (ind - str_ind | 0) + 1 | 0);
        var beg_ind = ind + 1 | 0;
        var match$1 = parse_literal(beg_ind, beg_ind, end_ind);
        var match$2 = parse_literal(str_ind, str_ind, ind + 1 | 0);
        var sub_fmt = match$2[0];
        var sub_format = /* Format */[
          sub_fmt,
          sub_str
        ];
        var formatting = is_open_tag ? /* Open_tag */Block.__(0, [sub_format]) : (check_open_box(sub_fmt), /* Open_box */Block.__(1, [sub_format]));
        return /* Fmt_EBB */[/* Formatting_gen */Block.__(18, [
                    formatting,
                    match$1[0]
                  ])];
      }
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        var match$3 = parse_literal(str_ind, str_ind, end_ind);
        var sub_format$1 = /* Format */[
          /* End_of_format */0,
          ""
        ];
        var formatting$1 = is_open_tag ? /* Open_tag */Block.__(0, [sub_format$1]) : /* Open_box */Block.__(1, [sub_format$1]);
        return /* Fmt_EBB */[/* Formatting_gen */Block.__(18, [
                    formatting$1,
                    match$3[0]
                  ])];
      } else {
        throw exn;
      }
    }
  };
  return parse_literal(0, 0, str.length);
}

function format_of_string_fmtty(str, fmtty) {
  var match = fmt_ebb_of_string(/* None */0, str);
  try {
    return /* Format */[
            type_format(match[0], fmtty),
            str
          ];
  }
  catch (exn){
    if (exn === Type_mismatch) {
      return Curry._2(failwith_message(/* Format */[
                      /* String_literal */Block.__(11, [
                          "bad input: format type mismatch between ",
                          /* Caml_string */Block.__(3, [
                              /* No_padding */0,
                              /* String_literal */Block.__(11, [
                                  " and ",
                                  /* Caml_string */Block.__(3, [
                                      /* No_padding */0,
                                      /* End_of_format */0
                                    ])
                                ])
                            ])
                        ]),
                      "bad input: format type mismatch between %S and %S"
                    ]), str, string_of_fmtty(fmtty));
    } else {
      throw exn;
    }
  }
}

function format_of_string_format(str, param) {
  var match = fmt_ebb_of_string(/* None */0, str);
  try {
    return /* Format */[
            type_format(match[0], fmtty_of_fmt(param[0])),
            str
          ];
  }
  catch (exn){
    if (exn === Type_mismatch) {
      return Curry._2(failwith_message(/* Format */[
                      /* String_literal */Block.__(11, [
                          "bad input: format type mismatch between ",
                          /* Caml_string */Block.__(3, [
                              /* No_padding */0,
                              /* String_literal */Block.__(11, [
                                  " and ",
                                  /* Caml_string */Block.__(3, [
                                      /* No_padding */0,
                                      /* End_of_format */0
                                    ])
                                ])
                            ])
                        ]),
                      "bad input: format type mismatch between %S and %S"
                    ]), str, param[1]);
    } else {
      throw exn;
    }
  }
}

exports.is_in_char_set                 = is_in_char_set;
exports.rev_char_set                   = rev_char_set;
exports.create_char_set                = create_char_set;
exports.add_in_char_set                = add_in_char_set;
exports.freeze_char_set                = freeze_char_set;
exports.param_format_of_ignored_format = param_format_of_ignored_format;
exports.make_printf                    = make_printf;
exports.output_acc                     = output_acc;
exports.bufput_acc                     = bufput_acc;
exports.strput_acc                     = strput_acc;
exports.type_format                    = type_format;
exports.fmt_ebb_of_string              = fmt_ebb_of_string;
exports.format_of_string_fmtty         = format_of_string_fmtty;
exports.format_of_string_format        = format_of_string_format;
exports.char_of_iconv                  = char_of_iconv;
exports.string_of_formatting_lit       = string_of_formatting_lit;
exports.string_of_formatting_gen       = string_of_formatting_gen;
exports.string_of_fmtty                = string_of_fmtty;
exports.string_of_fmt                  = string_of_fmt;
exports.open_box_of_string             = open_box_of_string;
exports.symm                           = symm;
exports.trans                          = trans;
exports.recast                         = recast;
/* No side effect */


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s[i];
  }
}

exports.get = get;
/* No side effect */


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



function caml_int32_float_of_bits(x) {
  var int32 = new Int32Array(/* array */[x]);
  var float32 = new Float32Array(int32.buffer);
  return float32[0];
}

function caml_int32_bits_of_float(x) {
  var float32 = new Float32Array(/* float array */[x]);
  return new Int32Array(float32.buffer)[0];
}

function caml_classify_float(x) {
  if (isFinite(x)) {
    if (Math.abs(x) >= 2.2250738585072014e-308) {
      return /* FP_normal */0;
    } else if (x !== 0) {
      return /* FP_subnormal */1;
    } else {
      return /* FP_zero */2;
    }
  } else if (isNaN(x)) {
    return /* FP_nan */4;
  } else {
    return /* FP_infinite */3;
  }
}

function caml_modf_float(x) {
  if (isFinite(x)) {
    var neg = +(1 / x < 0);
    var x$1 = Math.abs(x);
    var i = Math.floor(x$1);
    var f = x$1 - i;
    if (neg) {
      return /* tuple */[
              -f,
              -i
            ];
    } else {
      return /* tuple */[
              f,
              i
            ];
    }
  } else if (isNaN(x)) {
    return /* tuple */[
            NaN,
            NaN
          ];
  } else {
    return /* tuple */[
            1 / x,
            x
          ];
  }
}

function caml_ldexp_float(x, exp) {
  var match_000 = [x];
  var match_001 = [exp];
  var exp$prime = match_001;
  var x$prime = match_000;
  if (exp$prime[0] > 1023) {
    exp$prime[0] -= 1023;
    x$prime[0] = x$prime[0] * Math.pow(2, 1023);
    if (exp$prime[0] > 1023) {
      exp$prime[0] -= 1023;
      x$prime[0] = x$prime[0] * Math.pow(2, 1023);
    }
    
  } else if (exp$prime[0] < -1023) {
    exp$prime[0] += 1023;
    x$prime[0] = x$prime[0] * Math.pow(2, -1023);
  }
  return x$prime[0] * Math.pow(2, exp$prime[0]);
}

function caml_frexp_float(x) {
  if (x === 0 || !isFinite(x)) {
    return /* tuple */[
            x,
            0
          ];
  } else {
    var neg = +(x < 0);
    var x$prime = Math.abs(x);
    var exp = Math.floor(Math.LOG2E * Math.log(x$prime)) + 1;
    x$prime = x$prime * Math.pow(2, -exp);
    if (x$prime < 0.5) {
      x$prime = x$prime * 2;
      exp -= 1;
    }
    if (neg) {
      x$prime = -x$prime;
    }
    return /* tuple */[
            x$prime,
            exp | 0
          ];
  }
}

function caml_float_compare(x, y) {
  if (x === y) {
    return 0;
  } else if (x < y) {
    return -1;
  } else if (x > y || x === x) {
    return 1;
  } else if (y === y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_copysign_float(x, y) {
  var x$1 = Math.abs(x);
  var y$1 = y === 0 ? 1 / y : y;
  if (y$1 < 0) {
    return -x$1;
  } else {
    return x$1;
  }
}

function caml_expm1_float(x) {
  var y = Math.exp(x);
  var z = y - 1;
  if (Math.abs(x) > 1) {
    return z;
  } else if (z === 0) {
    return x;
  } else {
    return x * z / Math.log(y);
  }
}

function caml_hypot_float(x, y) {
  var match_000 = Math.abs(x);
  var match_001 = Math.abs(y);
  var y0 = match_001;
  var x0 = match_000;
  var a = Math.max(x0, y0);
  var b = Math.min(x0, y0) / (
    a !== 0 ? a : 1
  );
  return a * Math.sqrt(1 + b * b);
}

function caml_log10_float(x) {
  return Math.LOG10E * Math.log(x);
}

exports.caml_int32_float_of_bits = caml_int32_float_of_bits;
exports.caml_int32_bits_of_float = caml_int32_bits_of_float;
exports.caml_classify_float      = caml_classify_float;
exports.caml_modf_float          = caml_modf_float;
exports.caml_ldexp_float         = caml_ldexp_float;
exports.caml_frexp_float         = caml_frexp_float;
exports.caml_float_compare       = caml_float_compare;
exports.caml_copysign_float      = caml_copysign_float;
exports.caml_expm1_float         = caml_expm1_float;
exports.caml_hypot_float         = caml_hypot_float;
exports.caml_log10_float         = caml_log10_float;
/* No side effect */


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var List                    = __webpack_require__(7);
var Curry                   = __webpack_require__(1);
var Caml_builtin_exceptions = __webpack_require__(0);

function Make(funarg) {
  var height = function (param) {
    if (param) {
      return param[3];
    } else {
      return 0;
    }
  };
  var create = function (l, v, r) {
    var hl = l ? l[3] : 0;
    var hr = r ? r[3] : 0;
    return /* Node */[
            l,
            v,
            r,
            hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          ];
  };
  var bal = function (l, v, r) {
    var hl = l ? l[3] : 0;
    var hr = r ? r[3] : 0;
    if (hl > (hr + 2 | 0)) {
      if (l) {
        var lr = l[2];
        var lv = l[1];
        var ll = l[0];
        if (height(ll) >= height(lr)) {
          return create(ll, lv, create(lr, v, r));
        } else if (lr) {
          return create(create(ll, lv, lr[0]), lr[1], create(lr[2], v, r));
        } else {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "Set.bal"
              ];
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Set.bal"
            ];
      }
    } else if (hr > (hl + 2 | 0)) {
      if (r) {
        var rr = r[2];
        var rv = r[1];
        var rl = r[0];
        if (height(rr) >= height(rl)) {
          return create(create(l, v, rl), rv, rr);
        } else if (rl) {
          return create(create(l, v, rl[0]), rl[1], create(rl[2], rv, rr));
        } else {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "Set.bal"
              ];
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Set.bal"
            ];
      }
    } else {
      return /* Node */[
              l,
              v,
              r,
              hl >= hr ? hl + 1 | 0 : hr + 1 | 0
            ];
    }
  };
  var add = function (x, t) {
    if (t) {
      var r = t[2];
      var v = t[1];
      var l = t[0];
      var c = Curry._2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          return bal(add(x, l), v, r);
        } else {
          return bal(l, v, add(x, r));
        }
      } else {
        return t;
      }
    } else {
      return /* Node */[
              /* Empty */0,
              x,
              /* Empty */0,
              1
            ];
    }
  };
  var singleton = function (x) {
    return /* Node */[
            /* Empty */0,
            x,
            /* Empty */0,
            1
          ];
  };
  var add_min_element = function (v, param) {
    if (param) {
      return bal(add_min_element(v, param[0]), param[1], param[2]);
    } else {
      return singleton(v);
    }
  };
  var add_max_element = function (v, param) {
    if (param) {
      return bal(param[0], param[1], add_max_element(v, param[2]));
    } else {
      return singleton(v);
    }
  };
  var join = function (l, v, r) {
    if (l) {
      if (r) {
        var rh = r[3];
        var lh = l[3];
        if (lh > (rh + 2 | 0)) {
          return bal(l[0], l[1], join(l[2], v, r));
        } else if (rh > (lh + 2 | 0)) {
          return bal(join(l, v, r[0]), r[1], r[2]);
        } else {
          return create(l, v, r);
        }
      } else {
        return add_max_element(v, l);
      }
    } else {
      return add_min_element(v, r);
    }
  };
  var min_elt = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var l = param[0];
        if (l) {
          _param = l;
          continue ;
          
        } else {
          return param[1];
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
  };
  var max_elt = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var r = param[2];
        if (r) {
          _param = r;
          continue ;
          
        } else {
          return param[1];
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
  };
  var remove_min_elt = function (param) {
    if (param) {
      var l = param[0];
      if (l) {
        return bal(remove_min_elt(l), param[1], param[2]);
      } else {
        return param[2];
      }
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Set.remove_min_elt"
          ];
    }
  };
  var concat = function (t1, t2) {
    if (t1) {
      if (t2) {
        return join(t1, min_elt(t2), remove_min_elt(t2));
      } else {
        return t1;
      }
    } else {
      return t2;
    }
  };
  var split = function (x, param) {
    if (param) {
      var r = param[2];
      var v = param[1];
      var l = param[0];
      var c = Curry._2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          var match = split(x, l);
          return /* tuple */[
                  match[0],
                  match[1],
                  join(match[2], v, r)
                ];
        } else {
          var match$1 = split(x, r);
          return /* tuple */[
                  join(l, v, match$1[0]),
                  match$1[1],
                  match$1[2]
                ];
        }
      } else {
        return /* tuple */[
                l,
                /* true */1,
                r
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* false */0,
              /* Empty */0
            ];
    }
  };
  var is_empty = function (param) {
    if (param) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  };
  var mem = function (x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var c = Curry._2(funarg[/* compare */0], x, param[1]);
        if (c) {
          _param = c < 0 ? param[0] : param[2];
          continue ;
          
        } else {
          return /* true */1;
        }
      } else {
        return /* false */0;
      }
    };
  };
  var remove = function (x, param) {
    if (param) {
      var r = param[2];
      var v = param[1];
      var l = param[0];
      var c = Curry._2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          return bal(remove(x, l), v, r);
        } else {
          return bal(l, v, remove(x, r));
        }
      } else {
        var t1 = l;
        var t2 = r;
        if (t1) {
          if (t2) {
            return bal(t1, min_elt(t2), remove_min_elt(t2));
          } else {
            return t1;
          }
        } else {
          return t2;
        }
      }
    } else {
      return /* Empty */0;
    }
  };
  var union = function (s1, s2) {
    if (s1) {
      if (s2) {
        var h2 = s2[3];
        var v2 = s2[1];
        var h1 = s1[3];
        var v1 = s1[1];
        if (h1 >= h2) {
          if (h2 === 1) {
            return add(v2, s1);
          } else {
            var match = split(v1, s2);
            return join(union(s1[0], match[0]), v1, union(s1[2], match[2]));
          }
        } else if (h1 === 1) {
          return add(v1, s2);
        } else {
          var match$1 = split(v2, s1);
          return join(union(match$1[0], s2[0]), v2, union(match$1[2], s2[2]));
        }
      } else {
        return s1;
      }
    } else {
      return s2;
    }
  };
  var inter = function (s1, s2) {
    if (s1) {
      if (s2) {
        var r1 = s1[2];
        var v1 = s1[1];
        var l1 = s1[0];
        var match = split(v1, s2);
        var l2 = match[0];
        if (match[1] !== 0) {
          return join(inter(l1, l2), v1, inter(r1, match[2]));
        } else {
          return concat(inter(l1, l2), inter(r1, match[2]));
        }
      } else {
        return /* Empty */0;
      }
    } else {
      return /* Empty */0;
    }
  };
  var diff = function (s1, s2) {
    if (s1) {
      if (s2) {
        var r1 = s1[2];
        var v1 = s1[1];
        var l1 = s1[0];
        var match = split(v1, s2);
        var l2 = match[0];
        if (match[1] !== 0) {
          return concat(diff(l1, l2), diff(r1, match[2]));
        } else {
          return join(diff(l1, l2), v1, diff(r1, match[2]));
        }
      } else {
        return s1;
      }
    } else {
      return /* Empty */0;
    }
  };
  var cons_enum = function (_s, _e) {
    while(true) {
      var e = _e;
      var s = _s;
      if (s) {
        _e = /* More */[
          s[1],
          s[2],
          e
        ];
        _s = s[0];
        continue ;
        
      } else {
        return e;
      }
    };
  };
  var compare = function (s1, s2) {
    var _e1 = cons_enum(s1, /* End */0);
    var _e2 = cons_enum(s2, /* End */0);
    while(true) {
      var e2 = _e2;
      var e1 = _e1;
      if (e1) {
        if (e2) {
          var c = Curry._2(funarg[/* compare */0], e1[0], e2[0]);
          if (c !== 0) {
            return c;
          } else {
            _e2 = cons_enum(e2[1], e2[2]);
            _e1 = cons_enum(e1[1], e1[2]);
            continue ;
            
          }
        } else {
          return 1;
        }
      } else if (e2) {
        return -1;
      } else {
        return 0;
      }
    };
  };
  var equal = function (s1, s2) {
    return +(compare(s1, s2) === 0);
  };
  var subset = function (_s1, _s2) {
    while(true) {
      var s2 = _s2;
      var s1 = _s1;
      if (s1) {
        if (s2) {
          var r2 = s2[2];
          var l2 = s2[0];
          var r1 = s1[2];
          var v1 = s1[1];
          var l1 = s1[0];
          var c = Curry._2(funarg[/* compare */0], v1, s2[1]);
          if (c) {
            if (c < 0) {
              if (subset(/* Node */[
                      l1,
                      v1,
                      /* Empty */0,
                      0
                    ], l2)) {
                _s1 = r1;
                continue ;
                
              } else {
                return /* false */0;
              }
            } else if (subset(/* Node */[
                    /* Empty */0,
                    v1,
                    r1,
                    0
                  ], r2)) {
              _s1 = l1;
              continue ;
              
            } else {
              return /* false */0;
            }
          } else if (subset(l1, l2)) {
            _s2 = r2;
            _s1 = r1;
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* false */0;
        }
      } else {
        return /* true */1;
      }
    };
  };
  var iter = function (f, _param) {
    while(true) {
      var param = _param;
      if (param) {
        iter(f, param[0]);
        Curry._1(f, param[1]);
        _param = param[2];
        continue ;
        
      } else {
        return /* () */0;
      }
    };
  };
  var fold = function (f, _s, _accu) {
    while(true) {
      var accu = _accu;
      var s = _s;
      if (s) {
        _accu = Curry._2(f, s[1], fold(f, s[0], accu));
        _s = s[2];
        continue ;
        
      } else {
        return accu;
      }
    };
  };
  var for_all = function (p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (Curry._1(p, param[1])) {
          if (for_all(p, param[0])) {
            _param = param[2];
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* false */0;
        }
      } else {
        return /* true */1;
      }
    };
  };
  var exists = function (p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (Curry._1(p, param[1])) {
          return /* true */1;
        } else if (exists(p, param[0])) {
          return /* true */1;
        } else {
          _param = param[2];
          continue ;
          
        }
      } else {
        return /* false */0;
      }
    };
  };
  var filter = function (p, param) {
    if (param) {
      var v = param[1];
      var l$prime = filter(p, param[0]);
      var pv = Curry._1(p, v);
      var r$prime = filter(p, param[2]);
      if (pv) {
        return join(l$prime, v, r$prime);
      } else {
        return concat(l$prime, r$prime);
      }
    } else {
      return /* Empty */0;
    }
  };
  var partition = function (p, param) {
    if (param) {
      var v = param[1];
      var match = partition(p, param[0]);
      var lf = match[1];
      var lt = match[0];
      var pv = Curry._1(p, v);
      var match$1 = partition(p, param[2]);
      var rf = match$1[1];
      var rt = match$1[0];
      if (pv) {
        return /* tuple */[
                join(lt, v, rt),
                concat(lf, rf)
              ];
      } else {
        return /* tuple */[
                concat(lt, rt),
                join(lf, v, rf)
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* Empty */0
            ];
    }
  };
  var cardinal = function (param) {
    if (param) {
      return (cardinal(param[0]) + 1 | 0) + cardinal(param[2]) | 0;
    } else {
      return 0;
    }
  };
  var elements_aux = function (_accu, _param) {
    while(true) {
      var param = _param;
      var accu = _accu;
      if (param) {
        _param = param[0];
        _accu = /* :: */[
          param[1],
          elements_aux(accu, param[2])
        ];
        continue ;
        
      } else {
        return accu;
      }
    };
  };
  var elements = function (s) {
    return elements_aux(/* [] */0, s);
  };
  var find = function (x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var v = param[1];
        var c = Curry._2(funarg[/* compare */0], x, v);
        if (c) {
          _param = c < 0 ? param[0] : param[2];
          continue ;
          
        } else {
          return v;
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
  };
  var of_list = function (l) {
    if (l) {
      var match = l[1];
      var x0 = l[0];
      if (match) {
        var match$1 = match[1];
        var x1 = match[0];
        if (match$1) {
          var match$2 = match$1[1];
          var x2 = match$1[0];
          if (match$2) {
            var match$3 = match$2[1];
            var x3 = match$2[0];
            if (match$3) {
              if (match$3[1]) {
                var l$1 = List.sort_uniq(funarg[/* compare */0], l);
                var sub = function (n, l) {
                  var exit = 0;
                  if (n > 3 || n < 0) {
                    exit = 1;
                  } else {
                    switch (n) {
                      case 0 : 
                          return /* tuple */[
                                  /* Empty */0,
                                  l
                                ];
                      case 1 : 
                          if (l) {
                            return /* tuple */[
                                    /* Node */[
                                      /* Empty */0,
                                      l[0],
                                      /* Empty */0,
                                      1
                                    ],
                                    l[1]
                                  ];
                          } else {
                            exit = 1;
                          }
                          break;
                      case 2 : 
                          if (l) {
                            var match = l[1];
                            if (match) {
                              return /* tuple */[
                                      /* Node */[
                                        /* Node */[
                                          /* Empty */0,
                                          l[0],
                                          /* Empty */0,
                                          1
                                        ],
                                        match[0],
                                        /* Empty */0,
                                        2
                                      ],
                                      match[1]
                                    ];
                            } else {
                              exit = 1;
                            }
                          } else {
                            exit = 1;
                          }
                          break;
                      case 3 : 
                          if (l) {
                            var match$1 = l[1];
                            if (match$1) {
                              var match$2 = match$1[1];
                              if (match$2) {
                                return /* tuple */[
                                        /* Node */[
                                          /* Node */[
                                            /* Empty */0,
                                            l[0],
                                            /* Empty */0,
                                            1
                                          ],
                                          match$1[0],
                                          /* Node */[
                                            /* Empty */0,
                                            match$2[0],
                                            /* Empty */0,
                                            1
                                          ],
                                          2
                                        ],
                                        match$2[1]
                                      ];
                              } else {
                                exit = 1;
                              }
                            } else {
                              exit = 1;
                            }
                          } else {
                            exit = 1;
                          }
                          break;
                      
                    }
                  }
                  if (exit === 1) {
                    var nl = n / 2 | 0;
                    var match$3 = sub(nl, l);
                    var l$1 = match$3[1];
                    if (l$1) {
                      var match$4 = sub((n - nl | 0) - 1 | 0, l$1[1]);
                      return /* tuple */[
                              create(match$3[0], l$1[0], match$4[0]),
                              match$4[1]
                            ];
                    } else {
                      throw [
                            Caml_builtin_exceptions.assert_failure,
                            [
                              "set.ml",
                              372,
                              18
                            ]
                          ];
                    }
                  }
                  
                };
                return sub(List.length(l$1), l$1)[0];
              } else {
                return add(match$3[0], add(x3, add(x2, add(x1, singleton(x0)))));
              }
            } else {
              return add(x3, add(x2, add(x1, singleton(x0))));
            }
          } else {
            return add(x2, add(x1, singleton(x0)));
          }
        } else {
          return add(x1, singleton(x0));
        }
      } else {
        return singleton(x0);
      }
    } else {
      return /* Empty */0;
    }
  };
  return [
          /* Empty */0,
          is_empty,
          mem,
          add,
          singleton,
          remove,
          union,
          inter,
          diff,
          compare,
          equal,
          subset,
          iter,
          fold,
          for_all,
          exists,
          filter,
          partition,
          cardinal,
          elements,
          min_elt,
          max_elt,
          min_elt,
          split,
          find,
          of_list
        ];
}

exports.Make = Make;
/* No side effect */


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var dummy_stat = /* record */[
  /* minor_words */0,
  /* promoted_words */0,
  /* major_words */0,
  /* minor_collections */0,
  /* major_collections */0,
  /* heap_words */0,
  /* heap_chunks */0,
  /* live_words */0,
  /* live_blocks */0,
  /* free_words */0,
  /* free_blocks */0,
  /* largest_free */0,
  /* fragments */0,
  /* compactions */0,
  /* top_heap_words */0,
  /* stack_size */0
];

function caml_gc_stat() {
  return dummy_stat;
}

function caml_gc_quick_stat() {
  return dummy_stat;
}

function caml_gc_counters() {
  return /* tuple */[
          0,
          0,
          0
        ];
}

function caml_gc_get() {
  return /* record */[
          /* minor_heap_size */0,
          /* major_heap_increment */0,
          /* space_overhead */0,
          /* verbose */0,
          /* max_overhead */0,
          /* stack_limit */0,
          /* allocation_policy */0
        ];
}

function caml_gc_set() {
  return /* () */0;
}

function caml_gc_minor() {
  return /* () */0;
}

function caml_gc_major_slice() {
  return 0;
}

function caml_gc_major() {
  return /* () */0;
}

function caml_gc_full_major() {
  return /* () */0;
}

function caml_gc_compaction() {
  return /* () */0;
}

function caml_final_register(_, _$1) {
  return /* () */0;
}

function caml_final_release() {
  return /* () */0;
}

exports.caml_gc_stat        = caml_gc_stat;
exports.caml_gc_quick_stat  = caml_gc_quick_stat;
exports.caml_gc_counters    = caml_gc_counters;
exports.caml_gc_get         = caml_gc_get;
exports.caml_gc_set         = caml_gc_set;
exports.caml_gc_minor       = caml_gc_minor;
exports.caml_gc_major_slice = caml_gc_major_slice;
exports.caml_gc_major       = caml_gc_major;
exports.caml_gc_full_major  = caml_gc_full_major;
exports.caml_gc_compaction  = caml_gc_compaction;
exports.caml_final_register = caml_final_register;
exports.caml_final_release  = caml_final_release;
/* No side effect */


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Obj                     = __webpack_require__(36);
var $$Array                 = __webpack_require__(24);
var Block                   = __webpack_require__(5);
var Curry                   = __webpack_require__(1);
var Buffer                  = __webpack_require__(12);
var Js_exn                  = __webpack_require__(10);
var Printf                  = __webpack_require__(18);
var Caml_io                 = __webpack_require__(14);
var Caml_array              = __webpack_require__(8);
var Pervasives              = __webpack_require__(2);
var Caml_backtrace          = __webpack_require__(38);
var Caml_builtin_exceptions = __webpack_require__(0);

var printers = [/* [] */0];

var locfmt = /* Format */[
  /* String_literal */Block.__(11, [
      "File \"",
      /* String */Block.__(2, [
          /* No_padding */0,
          /* String_literal */Block.__(11, [
              "\", line ",
              /* Int */Block.__(4, [
                  /* Int_d */0,
                  /* No_padding */0,
                  /* No_precision */0,
                  /* String_literal */Block.__(11, [
                      ", characters ",
                      /* Int */Block.__(4, [
                          /* Int_d */0,
                          /* No_padding */0,
                          /* No_precision */0,
                          /* Char_literal */Block.__(12, [
                              /* "-" */45,
                              /* Int */Block.__(4, [
                                  /* Int_d */0,
                                  /* No_padding */0,
                                  /* No_precision */0,
                                  /* String_literal */Block.__(11, [
                                      ": ",
                                      /* String */Block.__(2, [
                                          /* No_padding */0,
                                          /* End_of_format */0
                                        ])
                                    ])
                                ])
                            ])
                        ])
                    ])
                ])
            ])
        ])
    ]),
  "File \"%s\", line %d, characters %d-%d: %s"
];

function field(x, i) {
  var f = x[i];
  if (f.length === undefined) {
    return Curry._1(Printf.sprintf(/* Format */[
                    /* Int */Block.__(4, [
                        /* Int_d */0,
                        /* No_padding */0,
                        /* No_precision */0,
                        /* End_of_format */0
                      ]),
                    "%d"
                  ]), f);
  } else if ((f.tag | 0) === Obj.string_tag) {
    return Curry._1(Printf.sprintf(/* Format */[
                    /* Caml_string */Block.__(3, [
                        /* No_padding */0,
                        /* End_of_format */0
                      ]),
                    "%S"
                  ]), f);
  } else if ((f.tag | 0) === Obj.double_tag) {
    return Pervasives.string_of_float(f);
  } else {
    return "_";
  }
}

function other_fields(x, i) {
  if (i >= x.length) {
    return "";
  } else {
    return Curry._2(Printf.sprintf(/* Format */[
                    /* String_literal */Block.__(11, [
                        ", ",
                        /* String */Block.__(2, [
                            /* No_padding */0,
                            /* String */Block.__(2, [
                                /* No_padding */0,
                                /* End_of_format */0
                              ])
                          ])
                      ]),
                    ", %s%s"
                  ]), field(x, i), other_fields(x, i + 1 | 0));
  }
}

function fields(x) {
  var n = x.length;
  if (n > 2 || n < 0) {
    return Curry._2(Printf.sprintf(/* Format */[
                    /* Char_literal */Block.__(12, [
                        /* "(" */40,
                        /* String */Block.__(2, [
                            /* No_padding */0,
                            /* String */Block.__(2, [
                                /* No_padding */0,
                                /* Char_literal */Block.__(12, [
                                    /* ")" */41,
                                    /* End_of_format */0
                                  ])
                              ])
                          ])
                      ]),
                    "(%s%s)"
                  ]), field(x, 1), other_fields(x, 2));
  } else {
    switch (n) {
      case 0 : 
      case 1 : 
          return "";
      case 2 : 
          return Curry._1(Printf.sprintf(/* Format */[
                          /* Char_literal */Block.__(12, [
                              /* "(" */40,
                              /* String */Block.__(2, [
                                  /* No_padding */0,
                                  /* Char_literal */Block.__(12, [
                                      /* ")" */41,
                                      /* End_of_format */0
                                    ])
                                ])
                            ]),
                          "(%s)"
                        ]), field(x, 1));
      
    }
  }
}

function to_string(x) {
  var _param = printers[0];
  while(true) {
    var param = _param;
    if (param) {
      var match;
      try {
        match = Curry._1(param[0], x);
      }
      catch (exn){
        match = /* None */0;
      }
      if (match) {
        return match[0];
      } else {
        _param = param[1];
        continue ;
        
      }
    } else if (x === Caml_builtin_exceptions.out_of_memory) {
      return "Out of memory";
    } else if (x === Caml_builtin_exceptions.stack_overflow) {
      return "Stack overflow";
    } else if (x[0] === Caml_builtin_exceptions.match_failure) {
      var match$1 = x[1];
      var $$char = match$1[2];
      return Curry._5(Printf.sprintf(locfmt), match$1[0], match$1[1], $$char, $$char + 5 | 0, "Pattern matching failed");
    } else if (x[0] === Caml_builtin_exceptions.assert_failure) {
      var match$2 = x[1];
      var $$char$1 = match$2[2];
      return Curry._5(Printf.sprintf(locfmt), match$2[0], match$2[1], $$char$1, $$char$1 + 6 | 0, "Assertion failed");
    } else if (x[0] === Caml_builtin_exceptions.undefined_recursive_module) {
      var match$3 = x[1];
      var $$char$2 = match$3[2];
      return Curry._5(Printf.sprintf(locfmt), match$3[0], match$3[1], $$char$2, $$char$2 + 6 | 0, "Undefined recursive module");
    } else if ((x.tag | 0) !== 0) {
      return x[0];
    } else {
      var constructor = x[0][0];
      return constructor + fields(x);
    }
  };
}

function print(fct, arg) {
  try {
    return Curry._1(fct, arg);
  }
  catch (raw_x){
    var x = Js_exn.internalToOCamlException(raw_x);
    Curry._1(Printf.eprintf(/* Format */[
              /* String_literal */Block.__(11, [
                  "Uncaught exception: ",
                  /* String */Block.__(2, [
                      /* No_padding */0,
                      /* Char_literal */Block.__(12, [
                          /* "\n" */10,
                          /* End_of_format */0
                        ])
                    ])
                ]),
              "Uncaught exception: %s\n"
            ]), to_string(x));
    Caml_io.caml_ml_flush(Pervasives.stderr);
    throw x;
  }
}

function $$catch(fct, arg) {
  try {
    return Curry._1(fct, arg);
  }
  catch (raw_x){
    var x = Js_exn.internalToOCamlException(raw_x);
    Caml_io.caml_ml_flush(Pervasives.stdout);
    Curry._1(Printf.eprintf(/* Format */[
              /* String_literal */Block.__(11, [
                  "Uncaught exception: ",
                  /* String */Block.__(2, [
                      /* No_padding */0,
                      /* Char_literal */Block.__(12, [
                          /* "\n" */10,
                          /* End_of_format */0
                        ])
                    ])
                ]),
              "Uncaught exception: %s\n"
            ]), to_string(x));
    return Pervasives.exit(2);
  }
}

function convert_raw_backtrace(rbckt) {
  try {
    return /* Some */[$$Array.map(Caml_backtrace.caml_convert_raw_backtrace_slot, rbckt)];
  }
  catch (raw_exn){
    var exn = Js_exn.internalToOCamlException(raw_exn);
    if (exn[0] === Caml_builtin_exceptions.failure) {
      return /* None */0;
    } else {
      throw exn;
    }
  }
}

function format_backtrace_slot(pos, slot) {
  var info = function (is_raise) {
    if (is_raise) {
      if (pos) {
        return "Re-raised at";
      } else {
        return "Raised at";
      }
    } else if (pos) {
      return "Called from";
    } else {
      return "Raised by primitive operation at";
    }
  };
  if (slot.tag) {
    if (slot[0] !== 0) {
      return /* None */0;
    } else {
      return /* Some */[Curry._1(Printf.sprintf(/* Format */[
                        /* String */Block.__(2, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                " unknown location",
                                /* End_of_format */0
                              ])
                          ]),
                        "%s unknown location"
                      ]), info(/* false */0))];
    }
  } else {
    return /* Some */[Curry._5(Printf.sprintf(/* Format */[
                      /* String */Block.__(2, [
                          /* No_padding */0,
                          /* String_literal */Block.__(11, [
                              " file \"",
                              /* String */Block.__(2, [
                                  /* No_padding */0,
                                  /* String_literal */Block.__(11, [
                                      "\", line ",
                                      /* Int */Block.__(4, [
                                          /* Int_d */0,
                                          /* No_padding */0,
                                          /* No_precision */0,
                                          /* String_literal */Block.__(11, [
                                              ", characters ",
                                              /* Int */Block.__(4, [
                                                  /* Int_d */0,
                                                  /* No_padding */0,
                                                  /* No_precision */0,
                                                  /* Char_literal */Block.__(12, [
                                                      /* "-" */45,
                                                      /* Int */Block.__(4, [
                                                          /* Int_d */0,
                                                          /* No_padding */0,
                                                          /* No_precision */0,
                                                          /* End_of_format */0
                                                        ])
                                                    ])
                                                ])
                                            ])
                                        ])
                                    ])
                                ])
                            ])
                        ]),
                      "%s file \"%s\", line %d, characters %d-%d"
                    ]), info(slot[0]), slot[1], slot[2], slot[3], slot[4])];
  }
}

function print_raw_backtrace(outchan, raw_backtrace) {
  var outchan$1 = outchan;
  var backtrace = convert_raw_backtrace(raw_backtrace);
  if (backtrace) {
    var a = backtrace[0];
    for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
      var match = format_backtrace_slot(i, Caml_array.caml_array_get(a, i));
      if (match) {
        Curry._1(Printf.fprintf(outchan$1, /* Format */[
                  /* String */Block.__(2, [
                      /* No_padding */0,
                      /* Char_literal */Block.__(12, [
                          /* "\n" */10,
                          /* End_of_format */0
                        ])
                    ]),
                  "%s\n"
                ]), match[0]);
      }
      
    }
    return /* () */0;
  } else {
    return Printf.fprintf(outchan$1, /* Format */[
                /* String_literal */Block.__(11, [
                    "(Program not linked with -g, cannot print stack backtrace)\n",
                    /* End_of_format */0
                  ]),
                "(Program not linked with -g, cannot print stack backtrace)\n"
              ]);
  }
}

function print_backtrace(outchan) {
  return print_raw_backtrace(outchan, /* () */0);
}

function backtrace_to_string(backtrace) {
  if (backtrace) {
    var a = backtrace[0];
    var b = Buffer.create(1024);
    for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
      var match = format_backtrace_slot(i, Caml_array.caml_array_get(a, i));
      if (match) {
        Curry._1(Printf.bprintf(b, /* Format */[
                  /* String */Block.__(2, [
                      /* No_padding */0,
                      /* Char_literal */Block.__(12, [
                          /* "\n" */10,
                          /* End_of_format */0
                        ])
                    ]),
                  "%s\n"
                ]), match[0]);
      }
      
    }
    return Buffer.contents(b);
  } else {
    return "(Program not linked with -g, cannot print stack backtrace)\n";
  }
}

function raw_backtrace_to_string(raw_backtrace) {
  return backtrace_to_string(convert_raw_backtrace(raw_backtrace));
}

function backtrace_slot_is_raise(param) {
  return param[0];
}

function backtrace_slot_location(param) {
  if (param.tag) {
    return /* None */0;
  } else {
    return /* Some */[/* record */[
              /* filename */param[1],
              /* line_number */param[2],
              /* start_char */param[3],
              /* end_char */param[4]
            ]];
  }
}

function backtrace_slots(raw_backtrace) {
  var match = convert_raw_backtrace(raw_backtrace);
  if (match) {
    var backtrace = match[0];
    var usable_slot = function (param) {
      if (param.tag) {
        return /* false */0;
      } else {
        return /* true */1;
      }
    };
    var exists_usable = function (_i) {
      while(true) {
        var i = _i;
        if (i !== -1) {
          if (usable_slot(Caml_array.caml_array_get(backtrace, i))) {
            return /* true */1;
          } else {
            _i = i - 1 | 0;
            continue ;
            
          }
        } else {
          return /* false */0;
        }
      };
    };
    if (exists_usable(backtrace.length - 1 | 0)) {
      return /* Some */[backtrace];
    } else {
      return /* None */0;
    }
  } else {
    return /* None */0;
  }
}

function raw_backtrace_length(bckt) {
  return bckt.length;
}

var get_raw_backtrace_slot = Caml_array.caml_array_get;

function get_backtrace() {
  return backtrace_to_string(convert_raw_backtrace(/* () */0));
}

function register_printer(fn) {
  printers[0] = /* :: */[
    fn,
    printers[0]
  ];
  return /* () */0;
}

function exn_slot(x) {
  if (x.tag) {
    return x;
  } else {
    return x[0];
  }
}

function exn_slot_id(x) {
  var slot = exn_slot(x);
  return slot[1];
}

function exn_slot_name(x) {
  var slot = exn_slot(x);
  return slot[0];
}

var uncaught_exception_handler = [/* None */0];

function set_uncaught_exception_handler(fn) {
  uncaught_exception_handler[0] = /* Some */[fn];
  return /* () */0;
}

function record_backtrace() {
  return /* () */0;
}

function backtrace_status() {
  return /* () */0;
}

function get_raw_backtrace() {
  return /* () */0;
}

function get_callstack() {
  return /* () */0;
}

var Slot = [
  backtrace_slot_is_raise,
  backtrace_slot_location,
  format_backtrace_slot
];

var convert_raw_backtrace_slot = Caml_backtrace.caml_convert_raw_backtrace_slot;

exports.to_string                      = to_string;
exports.print                          = print;
exports.$$catch                        = $$catch;
exports.print_backtrace                = print_backtrace;
exports.get_backtrace                  = get_backtrace;
exports.record_backtrace               = record_backtrace;
exports.backtrace_status               = backtrace_status;
exports.register_printer               = register_printer;
exports.get_raw_backtrace              = get_raw_backtrace;
exports.print_raw_backtrace            = print_raw_backtrace;
exports.raw_backtrace_to_string        = raw_backtrace_to_string;
exports.get_callstack                  = get_callstack;
exports.set_uncaught_exception_handler = set_uncaught_exception_handler;
exports.backtrace_slots                = backtrace_slots;
exports.Slot                           = Slot;
exports.raw_backtrace_length           = raw_backtrace_length;
exports.get_raw_backtrace_slot         = get_raw_backtrace_slot;
exports.convert_raw_backtrace_slot     = convert_raw_backtrace_slot;
exports.exn_slot_id                    = exn_slot_id;
exports.exn_slot_name                  = exn_slot_name;
/* No side effect */


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Marshal                 = __webpack_require__(37);
var Caml_array              = __webpack_require__(8);
var Caml_missing_polyfill   = __webpack_require__(17);
var Caml_builtin_exceptions = __webpack_require__(0);

var double_field = Caml_array.caml_array_get;

var set_double_field = Caml_array.caml_array_set;

function marshal() {
  return Caml_missing_polyfill.not_implemented("caml_output_value_to_string not implemented by bucklescript yet\n");
}

function unmarshal(str, pos) {
  return /* tuple */[
          Marshal.from_bytes(str, pos),
          pos + Marshal.total_size(str, pos) | 0
        ];
}

function extension_slot(x) {
  var slot = x.length !== undefined && (x.tag | 0) !== 248 && x.length >= 1 ? x[0] : x;
  var name;
  if (slot.length !== undefined && slot.tag === 248) {
    name = slot[0];
  } else {
    throw Caml_builtin_exceptions.not_found;
  }
  if (name.tag === 252) {
    return slot;
  } else {
    throw Caml_builtin_exceptions.not_found;
  }
}

function extension_name(x) {
  try {
    var slot = extension_slot(x);
    return slot[0];
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Obj.extension_name"
          ];
    } else {
      throw exn;
    }
  }
}

function extension_id(x) {
  try {
    var slot = extension_slot(x);
    return slot[1];
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Obj.extension_id"
          ];
    } else {
      throw exn;
    }
  }
}

function extension_slot$1(x) {
  try {
    return extension_slot(x);
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Obj.extension_slot"
          ];
    } else {
      throw exn;
    }
  }
}

var first_non_constant_constructor_tag = 0;

var last_non_constant_constructor_tag = 245;

var lazy_tag = 246;

var closure_tag = 247;

var object_tag = 248;

var infix_tag = 249;

var forward_tag = 250;

var no_scan_tag = 251;

var abstract_tag = 251;

var string_tag = 252;

var double_tag = 253;

var double_array_tag = 254;

var custom_tag = 255;

var final_tag = 255;

var int_tag = 1000;

var out_of_heap_tag = 1001;

var unaligned_tag = 1002;

exports.double_field                       = double_field;
exports.set_double_field                   = set_double_field;
exports.first_non_constant_constructor_tag = first_non_constant_constructor_tag;
exports.last_non_constant_constructor_tag  = last_non_constant_constructor_tag;
exports.lazy_tag                           = lazy_tag;
exports.closure_tag                        = closure_tag;
exports.object_tag                         = object_tag;
exports.infix_tag                          = infix_tag;
exports.forward_tag                        = forward_tag;
exports.no_scan_tag                        = no_scan_tag;
exports.abstract_tag                       = abstract_tag;
exports.string_tag                         = string_tag;
exports.double_tag                         = double_tag;
exports.double_array_tag                   = double_array_tag;
exports.custom_tag                         = custom_tag;
exports.final_tag                          = final_tag;
exports.int_tag                            = int_tag;
exports.out_of_heap_tag                    = out_of_heap_tag;
exports.unaligned_tag                      = unaligned_tag;
exports.extension_name                     = extension_name;
exports.extension_id                       = extension_id;
exports.extension_slot                     = extension_slot$1;
exports.marshal                            = marshal;
exports.unmarshal                          = unmarshal;
/* No side effect */


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_string             = __webpack_require__(3);
var Caml_missing_polyfill   = __webpack_require__(17);
var Caml_builtin_exceptions = __webpack_require__(0);

function to_buffer(buff, ofs, len, _, _$1) {
  if (ofs < 0 || len < 0 || ofs > (buff.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Marshal.to_buffer: substring out of bounds"
        ];
  } else {
    return Caml_missing_polyfill.not_implemented("caml_output_value_to_buffer not implemented by bucklescript yet\n");
  }
}

function data_size(buff, ofs) {
  if (ofs < 0 || ofs > (buff.length - 20 | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Marshal.data_size"
        ];
  } else {
    return Caml_missing_polyfill.not_implemented("caml_marshal_data_size not implemented by bucklescript yet\n");
  }
}

function total_size(buff, ofs) {
  return 20 + data_size(buff, ofs) | 0;
}

function from_bytes(buff, ofs) {
  if (ofs < 0 || ofs > (buff.length - 20 | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Marshal.from_bytes"
        ];
  } else {
    var len = Caml_missing_polyfill.not_implemented("caml_marshal_data_size not implemented by bucklescript yet\n");
    if (ofs > (buff.length - (20 + len | 0) | 0)) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Marshal.from_bytes"
          ];
    } else {
      return Caml_missing_polyfill.not_implemented("caml_input_value_from_string not implemented by bucklescript yet\n");
    }
  }
}

function from_string(buff, ofs) {
  return from_bytes(Caml_string.bytes_of_string(buff), ofs);
}

function to_channel(_, _$1, _$2) {
  return Caml_missing_polyfill.not_implemented("caml_output_value not implemented by bucklescript yet\n");
}

function from_channel() {
  return Caml_missing_polyfill.not_implemented("caml_input_value not implemented by bucklescript yet\n");
}

var header_size = 20;

exports.to_channel   = to_channel;
exports.to_buffer    = to_buffer;
exports.from_channel = from_channel;
exports.from_bytes   = from_bytes;
exports.from_string  = from_string;
exports.header_size  = header_size;
exports.data_size    = data_size;
exports.total_size   = total_size;
/* No side effect */


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

function caml_convert_raw_backtrace_slot() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_convert_raw_backtrace_slot unimplemented"
      ];
}

exports.caml_convert_raw_backtrace_slot = caml_convert_raw_backtrace_slot;
/* No side effect */


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.0.0, PLEASE EDIT WITH CARE


var Pervasives = __webpack_require__(2);

var r = [/* [] */0];

function add(l) {
  r[0] = Pervasives.$at(r[0], l);
  return /* () */0;
}

function functions() {
  return r[0];
}

exports.r         = r;
exports.add       = add;
exports.functions = functions;
/* No side effect */


/***/ })
/******/ ]);