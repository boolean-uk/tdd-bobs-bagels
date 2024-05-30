import Basket, { Order } from '../src/basket.js'

describe('Basket', () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  })

  it('should exist', () => {
    expect(basket).toBeInstanceOf(Basket)
  })

  it('should add an order', () => {
    expect(basket.add('bagel')).toEqual([new Order(1, 'bagel')])
    expect(basket.add('water')).toEqual([
      new Order(1, 'bagel'),
      new Order(2, 'water')
    ])
  })

  it('should remove an order', () => {
    basket.add('bagel')
    basket.add('water')

    expect(basket.remove(1)).toEqual([new Order(2, 'water')])
    expect(basket.remove(2)).toEqual([])
    expect(basket.add('banana')).toEqual([new Order(3, 'banana')])
  })
})
