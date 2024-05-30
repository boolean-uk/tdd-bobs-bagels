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

    expect(() => basket.add(1)).toThrowError('item not string provided')
    expect(() => basket.add('')).toThrowError('string not valid')
    expect(() => basket.add('a')).toThrowError('string not valid')
  })

  it('should remove an order', () => {
    basket.add('bagel')
    basket.add('water')

    expect(basket.remove(1)).toEqual([new Order(2, 'water')])
    expect(basket.remove(2)).toEqual([])
    expect(basket.add('banana')).toEqual([new Order(3, 'banana')])

    expect(() => basket.remove(4)).toThrowError("order doesn't exist")
  })

  it('should have an default maximum capacity', () => {
    basket.add('bagel')
    basket.add('water')
    basket.add('bagel')
    basket.add('water')
    basket.add('bagel')
    basket.add('water')
    basket.add('bagel')
    basket.add('water')
    basket.add('bagel')
    expect(basket.add('water')).toEqual([
      new Order(1, 'bagel'),
      new Order(2, 'water'),
      new Order(3, 'bagel'),
      new Order(4, 'water'),
      new Order(5, 'bagel'),
      new Order(6, 'water'),
      new Order(7, 'bagel'),
      new Order(8, 'water'),
      new Order(9, 'bagel'),
      new Order(10, 'water')
    ])
    expect(basket.add('bagel')).toBe('The basket is full')
  })

  it('should have an dynamic maximum capacity', () => {
    basket.maxCapacity = 5

    basket.add('bagel')
    basket.add('water')
    basket.add('bagel')
    basket.add('water')
    basket.add('bagel')
    expect(basket.add('water')).toBe('The basket is full')
  })
})
