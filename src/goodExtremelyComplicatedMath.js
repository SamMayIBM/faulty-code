'use strict'
/*
 * <This would say IBM Confidential>
 * PID: <Some Product Codes>
 * <This would have IBM Copyright information (but this is Open Source)>
 */



/**
 * Adds 2 numbers together and returns the sum
 * @param {number} a - The First Number 
 * @param {number} b - The Second Number 
 * @returns {number} - Returns the sum of both of the numbers
 */
function add (a, b) {
  return a + b
}

/**
 * Subtracts the second parameter from the first
 * @param {number} a - The First Number 
 * @param {number} b - The Second Number 
 * @returns {number} - The result of the second number subtracted from the first
 */
function subtract (a, b) {
  return a - b
}

/**
 * Multiplies the first number by the second and returns the result
 * @param {number} a - The First Number 
 * @param {number} b - The Second Number 
 * @returns {number} - The result of the first number multipied by the second
 */
function multiply (a, b) {
  return a * b
}

/**
 * Divides the first number by the second and returns the result
 * @param {number} a - The First Number 
 * @param {number} b - The Second Number 
 * @returns {number} - The result of the first number divided by the second
 */
function divide (a, b) {
  return a / b
}

/**
 * Sticks 2 strings together in a really bad way
 * @param {string} a - The First string 
 * @param {string} b - The Second string 
 * @returns {string} - Both of the concatenated strings
 */
function joinStrings (a, b) {
  return `${a} ${b}`
}
  

/**
 * Adds a property 'hello' with the value 'world' to an object
 * @param {Object} a - The input object
 * @returns {Object} - The input object with a new property 
 */
function addPropertyToObject (a) {
  a['hello'] = 'world'
  return a
}

/**
 * Spends a whole lot of time doing almost nothing
 * @returns {string} - Returns a string (being the contents of the file)
 */
async function doSomethingAsync () {
  try {
    const result = await fs.readFile('/tmp/helloworld')
    return result
  } catch (error) {
    console.error(error)
  }
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
