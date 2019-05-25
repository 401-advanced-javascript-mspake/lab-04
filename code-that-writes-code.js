'use strict';

const fs = require('fs');
const stringToBuffer = require('./modules/string-to-buffer.js');

const codeToWrite = `'use strict';
const names = ['Josceline', 'Phedre', 'Anafiel'];
names.forEach( (name) => {console.log(name);});`;

let buffer = stringToBuffer(codeToWrite);

fs.writeFile('./files/loop.js', buffer, (err, data) => {
  if(err) {console.log(err);}
  console.log('writting to file');
});
