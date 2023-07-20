describe('Basket functionality', () => {
  const Basket = require('E:\\Programming\\WebStorm 2023.1.1\\Projects\\tdd-bobs-bagels\\src\\basket.js')
  const Bagel = require('E:\\Programming\\WebStorm 2023.1.1\\Projects\\tdd-bobs-bagels\\src\\bagel.js')

  let basket
  let bagel
  let bagel2
  beforeEach(() => {
    basket = new Basket(2)
    bagel = new Bagel('bagel', 12)
    bagel2 = new Bagel('bagel2', 10)
  })

  it('check if the basket is full', () => {
    basket.add(bagel)
    expect(basket.isFull()).toBe(false)
    basket.add(bagel)
    expect(basket.isFull()).toBe(true)
  })

  it('should add bagel to the basket', () => {
    basket.add(bagel)
    basket.add(bagel)
    expect(basket.bagels.length).toBe(2)
    basket.add(bagel)
    expect(basket.bagels.length).toBe(2)
  })

  it('should check if the bagel in the basket', () => {
    basket.add(bagel)
    expect(basket.doesBagelExist(bagel2)).toBe(false)
    basket.add(bagel2)
    expect(basket.doesBagelExist(bagel2)).toBe(true)
  })

  it('should remove a bagel from the basket', () => {
    basket.add(bagel)
    expect(basket.bagels.includes(bagel)).toBe(true)
    basket.remove(bagel)
    expect(basket.bagels.includes(bagel)).toBe(false)
  })

  it('should remove a bagel from the basket', () => {
    basket.add(bagel)
    basket.add(bagel2)
    expect(basket.totalCost()).toBe(22)
    basket.remove(bagel)
    expect(basket.totalCost()).toBe(10)
  })

})