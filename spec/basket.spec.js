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
    const basket = new Basket(0)
    const bagel = new Bagel('plain', 0.49)
    expect(() => basket.addBagel(bagel)).toThrow(new Error('Capacity exceeded'))
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
    basket.extendBasket(newCapacity)

    expect(basket.capacity).toEqual(newCapacity)
  })
})
