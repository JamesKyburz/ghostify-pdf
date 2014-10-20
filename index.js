var spawn = require('win-spawn');
var duplexer = require('duplexer');

module.exports = ghostify;

function ghostify() {
  var pdf2ps = spawn('pdf2ps', ['-', '-']);
  var ps2pdf = spawn('ps2pdf', ['-', '-']);
  pdf2ps.stdout.pipe(ps2pdf.stdin);
  return duplexer(pdf2ps.stdin, ps2pdf.stdout);
}
