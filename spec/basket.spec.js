const Basket = require('../src/basket.js')
const Bagel = require('../src/bagel.js')

describe('Basket test - core', () => {
  it('should add bagel to basket', function () {
    const basket = new Basket(5)
    const bagel = new Bagel('plain', 0.49)
    basket.addBagel(bagel)

    expect(basket.products.length).toEqual(1)
  })
})
