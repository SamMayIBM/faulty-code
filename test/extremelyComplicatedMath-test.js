const { expect } = require('chai')
const math = require('../src/badExtremelyComplicatedMath')
const codeEnforcement = require('serenity-code-enforcement')

describe('Checks on the math library', () => {
  describe('add', () => {
    it('Should add 2 numbers together and return the correct result', () => {
      const a = 1
      const b = 2
      expect(math.add(a, b)).to.equal(3)
    })
  })

  describe('Code Conformation Checks', () => {
    it('meets the standards of our coding guidelines', () => {
      // This is where your super awesome test goes to test if this repo meets our standards or not!
      expect(codeEnforcement.matchesEnforcementOptions(__dirname, codeEnforcement.presets.defaultPreset)).to.deep.equal({
        validated: true,
        failureReasons: []
      })
    })
  })
})