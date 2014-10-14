# ghostify-pdf

A duplex stream using `pdf2ps - - | ps2pdf - -`

Converting a pdf to ghostscript and back again can fix
pdf issues. Eg. Adobe Reader doesn't print...

Yes fixing the pdf is a better solution, but in the meantime...

main.js:

``` js
var ghostifyPdf = require('ghostify-pdf');
var fix = ghostifyPdf();
fix.pipe(somewhere);
file.pipe(fix);
```

# install

With [npm](https://npmjs.org) do:

```
npm install ghostify-pdf
```

# test

```
npm test
```

# license

MIT
