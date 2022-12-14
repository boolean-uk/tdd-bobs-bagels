const { Basket } = require('../src/basket')

describe('bobs bagels', () => {
  it('An instance of Basket class has a basketCapacity of 10 by default', () => {
    const basket = new Basket()

    expect(basket.basketCapacity).toBe(10)
  })

  it('The manager can change the basket capacity', () => {
    const biggerBakset = new Basket(30)

    expect(biggerBakset.basketCapacity).toBe(30)
  })
})
