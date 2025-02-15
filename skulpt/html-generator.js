const fs = require('fs');
const path = require('path');

const src = process.argv[2];
const dst = process.argv[3];
console.log({src, dst});

fs.writeFile(dst + '.html', `<html>
  <head>
    <script src="../skulpt.min.js" type="text/javascript"></script>
    <script src="../skulpt-stdlib.js" type="text/javascript"></script>
  <body>
    <textarea id="data" width="100%" height="100%"></textarea>
    <script src="${path.relative(path.dirname(dst), src)}" type="text/javascript"></script>
    <script>
function builtinRead(x) {
  console.log(x);
  if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
    throw "File not found: '" + x + "'";
  }

  var file = Sk.builtinFiles["files"][x];

  if (!file) {
    return new Promise(function (accept, reject) {
      function reqListener () {
        console.log(this);
        console.log(arguments);
        accept(this.responseText);
      }

      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", reqListener);
      oReq.open("GET", "%(root)s" + file);
      oReq.send();
    });
  }

  return file;
}

const before = Date.now();

Sk.configure({
  output: console.log,
  read: builtinRead,
});

Sk.misceval.asyncToPromise(function () {
  return Sk.misceval.callsimOrSuspend($compiledmod, "${path.basename(dst)}");
}).then(() => {
  const rt = Date.now() - before;
  const textarea = document.getElementById('data');
  textarea.value = "BEGIN STOPIFY BENCHMARK RESULTS\\n"+rt+",0,Infinity,NA\\nOK.\\n";
  document.title = "done";
}, (e) => {
  console.log("UNCAUGHT EXCEPTION: " + e);
  throw e;
})
    </script>
  </head>
  </body>
</html>
`, 'utf-8', (e) => {
    if (e) {
      throw new Error("Can't generate skulpt bench: " + e);
    }
  });
