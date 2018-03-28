import * as path from 'path'
import * as Database from 'better-sqlite3';
import * as glob from 'glob';
import { mayNull, Config } from './common';

const edge = 'MicrosoftEdge';

const db = new Database('results.sqlite');

const ITERATIONS = 10

db.exec(`CREATE TABLE IF NOT EXISTS timing
  (ix INTEGER NOT NULL,
   lang TEXT NOT NULL,
   bench TEXT NOT NULL,
   platform TEXT NOT NULL,
   transform TEXT NOT NULL,
   new_method TEXT NOT NULL,
   es_mode TEXT NOT NULL,
   js_args TEXT NOT NULL,
   getters TEXT NOT NULL,
   eval TEXT NOT NULL,
   estimator TEXT NOT NULL,
   yield_interval TEXT NOT NULL,
   resample_interval TEXT NOT NULL,
   running_time INTEGER,
   num_yields INTEGER,
   output TEXT);`);

db.exec(`CREATE TABLE IF NOT EXISTS variance
  (ix INTEGER NOT NULL,
   lang TEXT NOT NULL,
   bench TEXT NOT NULL,
   platform TEXT NOT NULL,
   transform TEXT NOT NULL,
   new_method TEXT NOT NULL,
   es_mode TEXT NOT NULL,
   js_args TEXT NOT NULL,
   getters TEXT NOT NULL,
   eval TEXT NOT NULL,
   estimator TEXT NOT NULL,
   yield_interval TEXT NOT NULL,
   resample_interval TEXT NOT NULL,
   variance TEXT,
   running_time INTEGER,
   num_yields INTEGER);`);

db.exec(`CREATE TABLE IF NOT EXISTS failures
  (lang TEXT NOT NULL,
   bench TEXT NOT NULL,
   platform TEXT NOT NULL,
   transform TEXT NOT NULL,
   new_method TEXT NOT NULL,
   es_mode TEXT NOT NULL,
   js_args TEXT NOT NULL,
   getters TEXT NOT NULL,
   eval TEXT NOT NULL,
   estimator TEXT NOT NULL,
   yield_interval TEXT NOT NULL,
   resample_interval TEXT NOT NULL);`);

db.exec(`CREATE UNIQUE INDEX IF NOT EXISTS timing_index ON timing
  (ix,lang,bench,platform,transform,new_method,es_mode,js_args,getters,eval,
  estimator,yield_interval,resample_interval);`);

db.exec(`CREATE UNIQUE INDEX IF NOT EXISTS variance_index ON variance
  (ix,lang,bench,platform,transform,new_method,es_mode,js_args,getters,eval,
    estimator,yield_interval,resample_interval);`);

db.exec(`CREATE UNIQUE INDEX IF NOT EXISTS failure_index ON failures
  (lang,bench,platform,transform,new_method,es_mode,js_args,getters,eval,estimator,
   yield_interval,resample_interval);`);

// 3 more needed: Java, Pyret, JavaScript
const langs = [ 'python_pyjs', 'ocaml', 'clojurescript', 'dart_dart2js',
  'scala', 'c++', 'scheme', 'java', 'javascript', 'skulpt' ];

const browsers = [ 'chrome', 'firefox', 'MicrosoftEdge', 'safari', 'ChromeBook' ];

function initTiming(i: number, lang: string, bench: string, platform: string, config: Config) {

  const { transform, newMethod, esMode, jsArgs, getters, EVAL, estimator,
          yieldInterval, resampleInterval, output } = config;

  const r = db.prepare(
  `INSERT OR IGNORE INTO timing (ix, lang, bench, platform, transform, new_method,
es_mode, js_args, getters, eval, estimator, yield_interval, resample_interval, output)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
    .run(i, lang, bench, platform, mayNull(transform), mayNull(newMethod),
      mayNull(esMode), mayNull(jsArgs), mayNull(getters), mayNull(EVAL),
      mayNull(estimator), mayNull(yieldInterval), mayNull(resampleInterval),
      mayNull(output));

  if (r.changes > 0) {
    console.error(`Creating configuration ${i},${lang},${bench},${platform},${transform},${newMethod},${esMode},${jsArgs},${estimator},${yieldInterval},${resampleInterval}`);
  }
}

function pythonBenchmark(name: string) {
  // Run comparison benchmarks from paper figures
  if (!['b', 'binary_trees', 'deltablue', 'fib', 'float', 'nbody', 'pystone',
    'richards', 'scimark-fft', 'spectral_norm'].includes(name)) {
    return;
  }
  for (let i = 0; i < ITERATIONS; i++) {
    // Compare ES5 sane vs. insane mode in Chrome.
    const exp1_c1: Config = {
      transform: 'lazy',
      newMethod: 'direct',
      esMode: 'es5',
      jsArgs: 'faithful',
      estimator: 'countdown',
      yieldInterval: 1000000,
    };

    const exp1_c2: Config = {
      transform: 'lazy',
      newMethod: 'direct',
      esMode: 'sane',
      jsArgs: 'faithful',
      estimator: 'countdown',
      yieldInterval: 1000000,
    };

    initTiming(i, 'python_pyjs', name, 'chrome', exp1_c1);
    initTiming(i, 'python_pyjs', name, 'chrome', exp1_c2);

    // Compare Chrome and Edge for new method.
    const exp2: Config = {
      transform: 'lazy',
      newMethod: 'wrapper',
      esMode: 'sane',
      jsArgs: 'faithful',
      estimator: 'countdown',
      yieldInterval: 1000000
    }

    for (const browser of ['chrome', edge]) {
      initTiming(i, 'python_pyjs', name, browser, {...exp2, newMethod: 'direct'});
      initTiming(i, 'python_pyjs', name, browser, {...exp2, newMethod: 'wrapper'});
    }

    // Compare Chrome and Edge estimators.
    initTiming(i, 'python_pyjs', name, 'chrome',
      { ...exp2, newMethod: 'wrapper', estimator: 'velocity', yieldInterval: 100});
    initTiming(i, 'python_pyjs', name, edge,
      { ...exp2, newMethod: 'wrapper', estimator: 'velocity', yieldInterval: 100});
  }
}

const chromeConfig: Config = {
  transform: 'lazy',
  newMethod: 'wrapper',
  esMode: 'sane',
  jsArgs: 'simple',
  estimator: 'velocity',
  yieldInterval: 100
}

const safariConfig: Config = {
  transform: 'lazy',
  newMethod: 'direct',
  esMode: 'sane',
  jsArgs: 'simple',
  estimator: 'velocity',
  yieldInterval: 100
}

const edgeConfig: Config = {
  transform: 'retval',
  newMethod: 'direct',
  esMode: 'sane',
  jsArgs: 'simple',
  estimator: 'velocity',
  yieldInterval: 100
}

// TODO(rachit): This shouldn't be exported.
export function timeEstimatorComparisonBenchmarks() {

  const baseConfig: Config = {
    transform: 'lazy',
    newMethod: 'wrapper',
    esMode: 'sane',
    jsArgs: 'simple',
    estimator: 'exact',
    yieldInterval: 100
  }

  const c1: Config = {
    ...baseConfig,
    estimator: 'exact',
    yieldInterval: 100
  }

  const c2: Config = {
    ...baseConfig,
    estimator: 'countdown',
    yieldInterval: 1000000
  }

  const c3: Config = {
    ...baseConfig,
    estimator: 'velocity',
    yieldInterval: 100,
    resampleInterval: 250
  }

  for (let i = 0; i < ITERATIONS; i++) {
    initTiming(i, 'scala', 'Meteor', 'chrome', c1);
    initTiming(i, 'scala', 'Meteor', 'chrome', c2);
    initTiming(i, 'scala', 'Meteor', 'chrome', c3);
  }
}

function javascriptBenchmark(name: string) {

  // Enables full opts in a given configuration.
  function fullOpts(conf: Config): Config {
    return {
      ...conf,
      esMode: 'es5',
      jsArgs: 'full',
      getters: 'getters',
      EVAL: 'eval',
    }
  }

  for (let i = 0; i < ITERATIONS; i++) {

    for (const browser of browsers) {
      initTiming(i, 'javascript', name, browser, { transform: 'original' });
    }

    initTiming(i, 'javascript', name, 'ChromeBook', fullOpts(chromeConfig));
    initTiming(i, 'javascript', name, 'safari', fullOpts(safariConfig));
    initTiming(i, 'javascript', name, 'chrome', fullOpts(chromeConfig));
    initTiming(i, 'javascript', name, 'firefox', fullOpts(safariConfig));
    initTiming(i, 'javascript', name, edge, fullOpts(edgeConfig));
  }

}

function faithfulBenchmark(lang: string, bench: string) {

  function faithful(conf: Config): Config {
    return {
      ...conf,
      jsArgs: 'faithful'
    }
  }

  for (let i = 0; i < ITERATIONS; i++) {
    for (const browser of browsers) {
      initTiming(i, lang, bench, browser, { transform: 'original' });
    }

    initTiming(i, lang, bench, 'ChromeBook', faithful(chromeConfig));
    initTiming(i, lang, bench, 'safari', faithful(safariConfig));
    initTiming(i, lang, bench, 'chrome', faithful(chromeConfig));
    initTiming(i, lang, bench, 'firefox', faithful(safariConfig));
    initTiming(i, lang, bench, edge, faithful(edgeConfig));
  }
}

function pyretBenchmark(name: string) {
  // Benchmarks harness for pyret.
  if (name === 'benchmark-base') {
    return;
  }

  for (let i = 0; i < ITERATIONS; i++) {
    for (const b of browsers) {
      initTiming(i, 'pyret', name, b, { transform: 'native' });
      initTiming(i, 'pyret', name, b, { transform: 'original' });
      //edge uses retval
      if (b === 'MicrosoftEdge') {
        initTiming(i, 'pyret', name, b, edgeConfig);
      }
      else {
        initTiming(i, 'pyret', name, b, chromeConfig);
      }
    }
  }
}

function deepstackBenchmark(lang: string, name: string) {
  const config: Config = {
    transform: 'lazyDeep',
    newMethod: 'wrapper',
    esMode: 'sane',
    jsArgs: 'simple',
    estimator: 'reservoir',
    yieldInterval: 100
  }

  for (let i = 0; i < ITERATIONS; i++) {
    for (const b of browsers) {
      initTiming(i, lang, name, b, { ...config, transform: 'native' })
      initTiming(i, lang, name, b, config)
    }
  }
}

function skulptBenchmark(name: string) {
  for (let i = 0; i < ITERATIONS; i++) {
    initTiming(i, 'skulpt', name, 'chrome', { transform: 'original' });
  }
}
function benchmarksFor(lang: string, bench: string) {
  // These are the benchmarks we use in Section 2.
  switch(lang) {
    case 'javascript': {
      javascriptBenchmark(bench);
      break;
    }
    case 'java': {
      faithfulBenchmark(lang, bench)
      break;
    }
    case 'python_pyjs': {
      pythonBenchmark(bench);
      faithfulBenchmark(lang, bench)
      break;
    }
    default: {
      for (let i = 0; i < ITERATIONS; i++) {
        for (const browser of browsers) {
          initTiming(i, lang, bench, browser, { transform: 'original' });
        }

        initTiming(i, lang, bench, 'ChromeBook', chromeConfig);
        initTiming(i, lang, bench, 'safari',  safariConfig);
        initTiming(i, lang, bench, 'chrome',  chromeConfig);
        initTiming(i, lang, bench, 'firefox', safariConfig);
        initTiming(i, lang, bench, edge, edgeConfig);
      }
      break;
    }
  }
}

function createTimingTable() {

  const benchmarkFiles = langs
    .map(l => glob.sync(path.resolve(__dirname, `../../${l}/js-build/**/*.js`),
      { ignore: '**/base.js' }))
    .reduce((arr1, arr2) => arr1.concat(arr2))

  for (const path of benchmarkFiles) {
    const m = /^.*\/([^/]*)\/js-build\/([^.]*)\.js$/.exec(path);
    if (m === null) {
      console.error(`could not parse filename ${path}`);
      continue;
    }
    const lang = m[1];
    const bench = m[2];
    benchmarksFor(lang, bench);
  }

  // Pyret benchmarks
  const pyretBench = glob.sync(path.resolve(__dirname, '../../pyret/*.arr'))
  for (const path of pyretBench) {
    const m = /^.*\/([^/]*)\/([^.]*)\.arr/.exec(path);
    if (m === null) {
      console.error(`could not parse filename ${path}`);
      continue;
    }
    const bench = m[2];
    pyretBenchmark(bench);
  }

  // Pyret deepstacks
  const pyretdeepBench =
    glob.sync(path.resolve(__dirname, '../../pyret_deepstacks/*.arr'))

  for (const path of pyretdeepBench) {
    const m = /^.*\/([^/]*)\/([^.]*)\.arr/.exec(path);
    if (m === null) {
      console.error(`could not parse filename ${path}`);
      continue;
    }
    const lang = 'pyret_deepstacks'
    const bench = m[2];
    deepstackBenchmark(lang, bench);
  }

  // Skulpt benchmarks
  const skulptBench = glob.sync(path.resolve(__dirname, '../../skulpt/js-build/*.html'))
  for (const path of skulptBench) {
    const m = /^.*\/([^/]*)\/([^.]*)\.html/.exec(path);
    if (m === null) {
      console.error(`could not parse filename ${path}`);
      continue;
    }
    const bench = m[2];
    skulptBenchmark(bench);
  }

}

createTimingTable();
// Disable time estimator scala benchmark
// timeEstimatorComparisonBenchmarks();
