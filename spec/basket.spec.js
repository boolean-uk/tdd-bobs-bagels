const Basket = require('../src/basket.js')

describe('add bagel to basket', () => {
  const basket = new Basket()

  it('add items to basket', () => {
    const result = basket.add('BGLO')

    expect(basket.list[0].sku).toEqual('BGLO')
  })
})
