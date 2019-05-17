'use strict';

const stringToBuffer = require('../modules/string-to-buffer.js');
const sliceToArray = require('../modules/slice-to-array.js');


describe('Buffer Manipulation', () => {

  it('takes a string and turns it into a buffer', () => {
    expect(stringToBuffer('Hello')).toEqual(Buffer.from('Hello'));
  });

  it('Slices a buffer into an array of buffers at a givven charcode', () =>{
    let testBuffer = Buffer.from('Hello World');
    let result = [Buffer.from('Hello'), Buffer.from('World')];

    expect(sliceToArray(testBuffer, 0x20)).toEqual(result);
  });

});