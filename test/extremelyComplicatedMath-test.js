const { expect } = require('chai')
const math = require('../src/badExtremelyComplicatedMath')
const codeEnforcement = require('serenity-code-enforcement')
const serenityCodeEnforcement = require('serenity-code-enforcement')

describe('Checks on the math library', () => {
  describe('add', () => {
    it('Should add 2 numbers together and return the correct result', () => {
      const a = 1
      const b = 2
      expect(math.add(a, b)).to.equal(3)
    })
  })
  
  describe('Code Conformation Checks', () => {
    it('checks all files start with lower case', () => {

      const preset1 = {
        allFilesStartWithLowerCase: true,
      }
      
      // This is where your super awesome test goes to test if this repo meets our standards or not!
      expect(codeEnforcement.matchesEnforcementOptions("C:\\Users\\jamie\\faulty-code\\src", preset1)).to.deep.equal({
        validated: true,
        failureReasons: []
      })
    })

    it('checks all files use strict', () => {

      const preset1 = {
        useStrictEverywhere: true,
      }
      
      // This is where your super awesome test goes to test if this repo meets our standards or not!
      expect(codeEnforcement.matchesEnforcementOptions("C:\\Users\\jamie\\faulty-code\\src", preset1)).to.deep.equal({
        validated: true,
        failureReasons: []
      })
    })
    it('checks if a file has console.log in them, that this is reported', () => {

      const preset1 = {
        noConsoleLogs: true,
      }
      
      // This is where your super awesome test goes to test if this repo meets our standards or not!
      expect(codeEnforcement.matchesEnforcementOptions("C:\\Users\\jamie\\faulty-code\\src", preset1)).to.deep.equal({
        validated: false,
        failureReasons: ['On Line 80 in goodExtremelyComplicatedMath.js, Line 55 in badExtremelyComplicatedMath.js, there is a console.log or console.error ']
      })
    })
    it('checks all functions are in the format, function x () {}', () => {

      const preset1 = {
        functionKeywordForFunction: true,
      }
      
      // This is where your super awesome test goes to test if this repo meets our standards or not!
      expect(codeEnforcement.matchesEnforcementOptions("C:\\Users\\jamie\\faulty-code\\src", preset1)).to.deep.equal({
        validated:false,
        failureReasons: ["On Line 54 in badExtremelyComplicatedMath.js, Line 12 in badExtremelyComplicatedMath.js, the function(s) is/are not in the format, function x () {}"]
      })
    })
    it('checks all files end with a new line', () => {

      const preset1 = {
        allFilesEndWithNewLine: true,
      }
      
      // This is where your super awesome test goes to test if this repo meets our standards or not!
      expect(codeEnforcement.matchesEnforcementOptions("C:\\Users\\jamie\\faulty-code\\src", preset1)).to.deep.equal({
        validated: true,
        failureReasons: []
      })
    })

  })
})