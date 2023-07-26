'use strict'
// /**
//  * Adds 2 numbers together and returns the sum
//  * @param {number} a - The First Number 
//  * @param {number} b - The Second Number 
//  * @returns {number} - Returns the sum of both of the numbers
//  */
function add (a, b) {
  return a + b
}

const subtract = function (a, b) {
  return a - b
}

function multiply (a, b) {
  return a * b
}

function divide (a, b) {
  /* istanbul ignore next */
  
  return a / b
}

/**
 * Sticks 2 strings together in a really bad way
 * @param {string} a - The First string 
 * @param {string} b - The Second string 
 * @returns {string} - Both of the concatenated strings
 */
function joinStrings (a, b) {
  return a + ' ' + b
}

/**
 * Adds a property 'hello' with the value 'world' to an object
 * @param {object} a - The input object 
 */
function addPropertyToObject (a) {
  a['hello'] = 'world'
  return a
}

/**
 * Spends a whole lot of time doing almost nothing
 * @returns {string} - Returns a string (being the contents of the file)
 */
function doSomethingAsync () {
  return fs.readFile('/tmp/helloworld')
    .then(result => {
      return result
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  joinStrings,
  addPropertyToObject,
  doSomethingAsync
}
