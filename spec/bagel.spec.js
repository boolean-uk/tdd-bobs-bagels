describe('Bagel functionality', () => {
  const Bagel = require('E:\\Programming\\WebStorm 2023.1.1\\Projects\\tdd-bobs-bagels\\src\\bagel.js')

  let bagel
  let bagel2
  beforeEach(() => {
    bagel = new Bagel('bagel', 12)
    bagel2 = new Bagel('bagel2', 10)
  })

  it('should return cost of a bagel', () => {
    expect(bagel.getPrice()).toBe(12)
    expect(bagel2.getPrice()).toBe(10)
  })

})
