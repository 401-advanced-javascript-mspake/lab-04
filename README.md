![CF](http://i.imgur.com/7v5ASc8.png) LAB  
=================================================  
  
## Lab 04 - Buffers - File Transformers  
  
### Author: Morgana Spake  
  
### Links and Resources  
* [submission PR](https://github.com/401-advanced-javascript-mspake/lab-04/pull/1)    
* [travis](https://www.travis-ci.com/401-advanced-javascript-mspake/lab-04)  
  
### Modules  
#### `slice-to-array.js, string-to-buffer.js`  
##### Exported Values and Methods  
  
###### arrayify(buffer, string)  
Pass in a buffer and a charcode or string to match, it will slice the buffer at all instances of the given charcode/string, removing the given string, and return an array of the sliced pieces.  
  
###### createBuffer(string)  
Takes in a string and return a buffer.  
  
#### Running the app
* `npm install`  
* `node article-create.js`  
* `live-server`  
   
#### Tests  
* How do you run tests?  
`npm test` 
* What assertions were made?  
  * if a string gets passed to the string-to-buffer.js module, it will return a buffer.  
  * If a buffer and a string get passed to the slice-to-array.js module, it will return an array of buffers  
* What assertions need to be / should be made?  
  * Incorrect input  
  * Current code is specific to the given text file, not dynamic.  