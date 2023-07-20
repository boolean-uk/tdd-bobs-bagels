const Basket = require('../src/basket.js')
const Bagel = require('../src/bagel.js')

describe('Basket test - core', () => {
  it('should add bagel to basket', function () {
    const basket = new Basket(5)
    const bagel = new Bagel('plain', 0.49)
    basket.addBagel(bagel)

    expect(basket.products.length).toEqual(1)
  })

  it('should throw exception if basket capacity exceeded', function () {
    const basket = new Basket(1)
    const bagel1 = new Bagel('plain', 0.49)
    const bagel2 = new Bagel('plain', 0.49)
    basket.addBagel(bagel1)
    expect(() => basket.addBagel(bagel2)).toThrowError('Capacity exceeded')
  })

  it('should remove bagel from basket', function () {
    const basket = new Basket(5)
    const bagel = new Bagel('plain', 0.49)
    basket.removeBagel(bagel)

    expect(basket.products.length).toEqual(0)
  })

  it('should extend basket capacity', function () {
    const basket = new Basket(5)
    const newCapacity = 10
    basket.changeCapacity(newCapacity)

    expect(basket.capacity).toEqual(newCapacity)
  })

  it('should throw error if new capacity is smaller than products amount', function () {
    const basket = new Basket(5)
    const bagel1 = new Bagel('Plain', 0.49)
    const bagel2 = new Bagel('Egg', 0.49)
    basket.addBagel(bagel1)
    basket.addBagel(bagel2)
    const newCapacity = 1

    expect(() => basket.changeCapacity(newCapacity)).toThrowError(
      'You capacity cannot be smaller than products amount'
    )
  })

  it('should throw error when trying to remove item not stored in basket', function () {
    const basket = new Basket(1)
    const bagel = new Bagel('Plain', 0.49)

    expect(() => basket.removeBagel(bagel)).toThrowError(
      'Item is not in basket'
    )
  })
})
