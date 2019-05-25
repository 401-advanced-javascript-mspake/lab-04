'use strict';

function arrayify(buffer, string) {

  const arr = [];

  while(buffer.includes(string)){
    let section = buffer.slice(0, buffer.indexOf(string));
    if (section.length) arr.push(section);
    buffer = buffer.slice(buffer.indexOf(string)+string.length);
  }
  arr.push(buffer);

  return arr;
}

module.exports = arrayify;