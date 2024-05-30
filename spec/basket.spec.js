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
    expect(basket.add('plain bagel')).toEqual([new Order(1, 'plain bagel', 0.25, 1)])
    expect(basket.add('blueberry bagel')).toEqual([
      new Order(1, 'plain bagel', 0.25, 1),
      new Order(2, 'blueberry bagel', 0.3, 1)
    ])

    expect(() => basket.add(1)).toThrowError('order not string provided')
    expect(() => basket.add('water')).toThrowError('item not found')
  })

  it('should remove an order', () => {
    basket.add('plain bagel')
    basket.add('blueberry bagel')

    expect(basket.remove(1)).toEqual([new Order(2, 'blueberry bagel', 0.3, 1)])
    expect(basket.remove(2)).toEqual([])
    expect(basket.add('garlic bagel')).toEqual([new Order(3, 'garlic bagel', 0.35, 1)])

    expect(() => basket.remove(4)).toThrowError('order not found')
  })

  it('should have an default maximum capacity', () => {
    basket.add('plain bagel')
    basket.add('blueberry bagel')
    basket.add('garlic bagel')
    basket.add('sesame bagel')
    basket.add('oat bagel')
    basket.add('cheddar bagel')
    basket.add('egg bagel')
    basket.add('asiago bagel')
    basket.add('multigrain bagel')
    expect(basket.add('chocolate bagel')).toEqual([
      new Order(1, 'plain bagel', 0.25, 1),
      new Order(2, 'blueberry bagel', 0.3, 1),
      new Order(3, 'garlic bagel', 0.35, 1),
      new Order(4, 'sesame bagel', 0.2, 1),
      new Order(5, 'oat bagel', 0.4, 1),
      new Order(6, 'cheddar bagel', 0.45, 1),
      new Order(7, 'egg bagel', 0.25, 1),
      new Order(8, 'asiago bagel', 0.5, 1),
      new Order(9, 'multigrain bagel', 0.25, 1),
      new Order(10, 'chocolate bagel', 0.2, 1)
    ])
    expect(basket.add('rainbow bagel')).toBe('The basket is full')
  })

  it('should have an dynamic maximum capacity', () => {
    basket.maxCapacity = 5

    basket.add('plain bagel')
    basket.add('blueberry bagel')
    basket.add('garlic bagel')
    basket.add('sesame bagel')
    basket.add('oat bagel')
    expect(basket.add('chocolate bagel')).toBe('The basket is full')
  })

  it('should show the price of the items', () => {
    expect(basket.checkPrice()).toEqual({
      "plain bagel": 0.25,
      "blueberry bagel": 0.3,
      "garlic bagel": 0.35,
      "sesame bagel": 0.2,
      "oat bagel": 0.4,
      "cheddar bagel": 0.45,
      "egg bagel": 0.25,
      "asiago bagel": 0.5,
      "multigrain bagel": 0.25,
      "chocolate bagel": 0.2,
      "rainbow bagel": 0.35
    })
  })

  it('should increment the order and its price', () => {
    basket.add('plain bagel')
    expect(basket.add('plain bagel')).toEqual([new Order(1, 'plain bagel', 0.5, 2)])
    expect(basket.add('plain bagel')).toEqual([new Order(1, 'plain bagel', 0.75, 3)])
    expect(basket.add('garlic bagel')).toEqual([
      new Order(1, 'plain bagel', 0.75, 3),
      new Order(2, 'garlic bagel', 0.35, 1)
    ])
  })
})
