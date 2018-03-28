import * as fs from 'fs';
import * as Database from 'better-sqlite3';

const db = new Database('results.sqlite', {
  readonly: true,
  fileMustExist: true
});

const fd = fs.openSync('javascript.csv', 'wx');
//const varianceFd = fs.openSync(`variance.csv`, 'wx');


const rows = db.prepare(`SELECT * FROM timing WHERE
  running_time IS NOT NULL`).all();
//const varianceRows = db.prepare(`SELECT * FROM variance WHERE
//  variance IS NOT NULL`).all();

function na(x: any): string {
  if (x === null) {
    return 'NA';
  }
  else {
    return String(x);
  }
}

// Running Time benchmark csv
fs.appendFileSync(fd,
  'Language,Benchmark,Platform,Transform,NewMethod,EsMode,JsArgs,Getters,Eval,Estimator,YieldInterval,ResampleInterval,RunningTime,NumYields\n');
for (const row of rows) {
  fs.appendFileSync(fd, `${row.lang},${row.bench},${row.platform},`);
  fs.appendFileSync(fd, `${na(row.transform)},${na(row.new_method)},`);
  fs.appendFileSync(fd, `${na(row.es_mode)},${na(row.js_args)},`);
  fs.appendFileSync(fd, `${na(row.getters)},${na(row["eval"])},${na(row.estimator)},`);
  fs.appendFileSync(fd, `${na(row.yield_interval)},`);
  fs.appendFileSync(fd, `${na(row.resample_interval)},`);
  fs.appendFileSync(fd, `${na(row.running_time)},`);
  fs.appendFileSync(fd, `${na(row.num_yields)}\n`);
}

// Variance benchmark csv
//fs.appendFileSync(<any>varianceFd,
//  'Language,Benchmark,Platform,Transform,NewMethod,EsMode,JsArgs,Estimator,Getters,Eval,YieldInterval,ResampleInterval,Iteration,Index,Variance,RunningTime,NumYields\n');
//for (const row of varianceRows) {
//  const variance = na(row.variance);
//  const lines = variance.split('\n');
//  lines.forEach(line => {
//    const factors = line.split(',');
//    const ix = factors[0];
//    const latency = factors[1];
//    fs.appendFileSync(varianceFd, `${row.lang},${row.bench},${row.platform},`);
//    fs.appendFileSync(varianceFd, `${na(row.transform)},${na(row.new_method)},`);
//    fs.appendFileSync(varianceFd, `${na(row.es_mode)},${na(row.js_args)},`);
//    fs.appendFileSync(varianceFd, `${na(row.getters)},${na(row["eval"])},`);
//    fs.appendFileSync(varianceFd, `${na(row.estimator)},`);
//    fs.appendFileSync(varianceFd, `${na(row.yield_interval)},`);
//    fs.appendFileSync(varianceFd, `${na(row.resample_interval)},`);
//    fs.appendFileSync(varianceFd, `${na(row.ix)},`);
//    fs.appendFileSync(varianceFd, `${ix},`);
//    fs.appendFileSync(varianceFd, `${latency},`);
//    fs.appendFileSync(varianceFd, `${row.running_time},`);
//    fs.appendFileSync(varianceFd, `${row.num_yields}\n`);
//  });
//}

fs.closeSync(fd);
//fs.closeSync(varianceFd);
