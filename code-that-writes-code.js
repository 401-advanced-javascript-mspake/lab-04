'use strict';

const fs = require('fs');

const codeToWrite = `'use strict';
const names = ['Josceline', 'Phedre', 'Anafiel'];
names.forEach( (name) => {console.log(name);});`;

let buffer = Buffer.alloc(1, codeToWrite.charCodeAt(0));

for (let i = 1; i < codeToWrite.length; i++) {
  buffer = Buffer.concat([buffer, Buffer.alloc(1, codeToWrite.charCodeAt(i))]);
}

fs.writeFile('./loop.js', buffer, (err, data) => {
  if(err) {console.log(err);}
  console.log('writting to file');
});
