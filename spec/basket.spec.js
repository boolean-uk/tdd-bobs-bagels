import Basket, { Order } from '../src/basket.js'

describe('Basket', () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  })

  it('should exist', () => {
    expect(basket).toBeInstanceOf(Basket)
  })

  it('should be added an order', () => {
    basket.add('bagel')
    basket.add('banana')

    expect(basket.orders).toEqual([
      new Order(1, 'bagel'),
      new Order(2, 'banana')
    ])
  })
})
