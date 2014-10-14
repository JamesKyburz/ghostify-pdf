var ghostify = require('../');
var fs = require('fs');
var test = require('tape');

test('verify it runs and doesn\'t blow up', function(t) {
  var file = fs.createReadStream(__dirname + '/test.pdf');
  var fix = ghostify();
  fix.pipe(process.stdout);
  file.pipe(fix);
  fix.on('end', function() {
    t.ok(true, 'If we got here hopefully all is good');
    t.end();
  });
});
