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
    expect(basket.add('bagel')).toEqual([new Order(1, 'bagel')])
    expect(basket.add('water')).toEqual([
      new Order(1, 'bagel'),
      new Order(2, 'water')
    ])
  })
})
