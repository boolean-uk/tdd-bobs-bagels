import Basket, { Manager } from '../src/basket.js'

describe('Bagel basket', () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  })

  it('basket exists and has items in it', () => {
    expect(basket).toBeInstanceOf(Basket)
  })

  it('should be able to add bagel to basket if basket is empty', () => {
    const result = basket.add('BGLO')
    expect(result.length).toBe(1)
  })

  it('should not be able to add bagel to basket if basket is full', () => {
    basket.add('BGLO')
    basket.add('BGLO')
    basket.add('BGLO')
    basket.add('BGLO')

    expect(() => basket.add('BGLO')).toThrow('basket is full')
    expect(basket.basket.length).toBe(4)
  })

  it('should throw error if bagel not found', () => {
    expect(() => basket.add('BGLD')).toThrow('bagel not found')
  })

  it('should add price to total when adding bagel to basket', () => {
    basket.add('BGLO')
    basket.add('BGLO')
    basket.add('BGLO')
    basket.add('BGLO')

    expect(basket.total).toBe(1.96)
  })

  it('should check the price of a bagel', () => {
    expect(basket.price('BGLO')).toBe('0.49')
    expect(basket.price('BGSE')).toBe('2.99')
  })

  it('should throw error if bagel not found', () => {
    expect(() => basket.price('BGLD')).toThrow('bagel not found')
  })

  it('should show total price of basket', () => {
    expect(basket.checkOut()).toBe(0)

    basket.add('BGLO')
    basket.add('BGLO')
    basket.add('BGLO')
    basket.add('BGLO')

    expect(basket.checkOut()).toBe(1.96)
  })

  it('should remove bagel from basket', () => {
    basket.add('BGLO')
    basket.add('BGSE')
    basket.add('BGSS')

    basket.remove('BGSE')

    expect(basket.basket.length).toBe(2)
  })

  it('should throw error if bagel not found', () => {
    expect(() => basket.remove('BGLD')).toThrow('bagel not found')
  })

  it('should remove price of bagel from basket when bagel is removed', () => {
    basket.add('BGLO')
    basket.add('BGSE')
    basket.add('BGSS')

    basket.remove('BGSE')

    expect(basket.checkOut()).toBe(5.48)
  })
})

describe('Manager', () => {
  it('Manager can make basket', () => {
    const managerBasket = new Manager(8)
    expect(managerBasket).toBeInstanceOf(Manager)

    const result = managerBasket.createBasket()
    expect(result).toBeInstanceOf(Basket)
  })

  it('Manager can add more than 4 items', () => {
    const managerBasket = new Manager(8)

    managerBasket.createBasket()

    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')

    expect(managerBasket.basket.basket.length).toBe(7)

    managerBasket.basket.add('BGLO')

    expect(() => managerBasket.basket.add('BGLO')).toThrow('basket is full')
    expect(managerBasket.basket.basket.length).toBe(8)
  })
})
