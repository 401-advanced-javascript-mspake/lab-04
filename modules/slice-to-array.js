'use strict';

function arrayify(buffer, charCode) {

  const arr = [];

  while(buffer.includes(charCode)){
    let section = buffer.slice(0, buffer.indexOf(charCode));
    if (section.length) arr.push(section);
    buffer = buffer.slice(buffer.indexOf(charCode)+1);
  }
  arr.push(buffer);

  return arr;
}

module.exports = arrayify;