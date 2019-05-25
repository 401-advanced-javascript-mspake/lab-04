'use strict';

const fs = require('fs');
const util = require('util');
const stringToBuffer = require('./modules/string-to-buffer.js');
const sliceToArray = require('./modules/slice-to-array.js');


//===============================

const readWithPromises = util.promisify(fs.readFile);

//===============================

const articleStart = stringToBuffer('\n\t<article>');
const articleEnd = stringToBuffer('\n</article>\n');

const h2Start = stringToBuffer('\n\t\t<h2>');
const h2End = stringToBuffer('</h2>');

const h3Start = stringToBuffer('\n\t\t<h3>');
const h3End = stringToBuffer('</h3>');

const liStart = stringToBuffer('\n\t\t\t<li>');
const liEnd = stringToBuffer('</li>');

const htmlEnd = stringToBuffer('\n</body>\n</html>');

//===============================

let sections;

let html = readWithPromises('./files/html-start.txt').then( data => data).catch(err => console.log(err));

let text = readWithPromises('./files/pair-programming.txt')
  .then( data => {
    sections = sliceToArray(data, '\n');
    let buffer = Buffer.alloc(articleStart.length, articleStart);

    for(let i in sections) {
      if( !(i % 2) && (i <= 6)) { sections[i] = Buffer.concat([h2Start, sections[i], h2End]);}
      else if( (i % 2) && (i > 6)) { sections[i] = Buffer.concat([h3Start, sections[i], h3End]);}
      else {
        sections[i] = sliceToArray(sections[i], '. ');
        for(let j in sections[i]) {
          sections[i][j] = Buffer.concat([liStart, sections[i][j], liEnd]);
        }
        sections[i] = Buffer.concat(sections[i]);
      }
    }
  
    for(let i = 0; i < sections.length; i++) {
      buffer = Buffer.concat([buffer, sections[i]]);
    }
  
    buffer = Buffer.concat([buffer, articleEnd, htmlEnd]);
    return buffer;
  })
  .catch(err => console.log(err));

Promise.all([html, text])
  .then( (values) => {
    let htmlPage = Buffer.concat(values);

    fs.writeFile('./files/index.html', htmlPage, (err, data) => {
      if(err) {console.log(err);}
      console.log('writting to file');
    });
  })
  .catch((err) => {console.log(err);});
