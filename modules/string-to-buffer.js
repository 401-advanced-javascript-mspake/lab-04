'use strict';

function createBuffer(string) {
  let buffer = Buffer.alloc(1, string.charCodeAt(0));

  for (let i = 1; i < string.length; i++) {
    buffer = Buffer.concat([buffer, Buffer.alloc(1, string.charCodeAt(i))]);
  }

  return buffer;
}

module.exports = createBuffer;