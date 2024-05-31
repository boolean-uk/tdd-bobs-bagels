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
    basket.add('BGLP')
    basket.add('BGLE')
    basket.add('BGLS')

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

  it('should remove bagel from basket if quantity equals 1', () => {
    basket.add('BGLO')
    basket.add('BGSE')
    basket.add('BGSS')

    basket.remove('BGSE')

    expect(basket.basket.length).toBe(2)
  })

  it('should remove 1 of quantity of bagel from basket if quantity > 1', () => {
    basket.add('BGLO')
    basket.add('BGLO')
    basket.add('BGSE')
    basket.add('BGSS')

    basket.remove('BGLO')

    expect(basket.basket.length).toBe(3)
    expect(basket.basket[0].quantity).toBe(1)
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

  it('should set quantity to 0 if bagel is not in basket yet', () => {
    basket.add('BGLO')

    expect(basket.basket[0].quantity).toBe(1)
  })

  it('should set up the quantity if bagel is already in basket', () => {
    basket.add('BGLO')
    basket.add('BGLO')
    basket.add('BGLO')

    expect(basket.basket[0].quantity).toBe(3)
  })

  it('should print receipt', () => {
    basket.add('BGLO')
    basket.add('BGLO')
    basket.add('BGSE')
    basket.add('BGSS')

    expect(basket.printReceipt()).toMatch(/8.96/)
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
    const managerBasket = new Manager(6)

    managerBasket.createBasket()

    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLE')
    managerBasket.basket.add('BGLS')
    managerBasket.basket.add('COF')
    managerBasket.basket.add('BGSE')

    expect(managerBasket.basket.basket.length).toBe(6)

    expect(() => managerBasket.basket.add('BGSS')).toThrow('basket is full')
    expect(managerBasket.basket.basket.length).toBe(6)
  })

  it('ordering a special onion bagel order should give a discount', () => {
    const managerBasket = new Manager(30)

    managerBasket.createBasket()

    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')

    expect(managerBasket.basket.total).toBe(2.49)

    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')

    expect(Number(managerBasket.basket.total.toFixed(2))).toBe(4.98)
  })

  it('ordering a special bagel order should give a discount', () => {
    const managerBasket = new Manager(30)

    managerBasket.createBasket()

    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')

    expect(Number(managerBasket.basket.total.toFixed(2))).toBe(3.99)

    managerBasket.basket.add('BGLE')
    managerBasket.basket.add('BGLE')
    managerBasket.basket.add('BGLE')
    managerBasket.basket.add('BGLE')
    managerBasket.basket.add('BGLE')
    managerBasket.basket.add('BGLE')

    expect(Number(managerBasket.basket.total.toFixed(2))).toBe(6.48)
  })

  it('ordering a special bagel order and coffee should give a discount', () => {
    const managerBasket = new Manager(30)

    managerBasket.createBasket()
    managerBasket.basket.add('BGLO')
    managerBasket.basket.add('BGLO')

    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')
    managerBasket.basket.add('BGLP')

    managerBasket.basket.add('BGLE')
    managerBasket.basket.add('BGLE')
    managerBasket.basket.add('BGLE')
    managerBasket.basket.add('BGLE')
    managerBasket.basket.add('BGLE')
    managerBasket.basket.add('BGLE')

    managerBasket.basket.add('COF')
    managerBasket.basket.add('COF')
    managerBasket.basket.add('COF')

    expect(Number(managerBasket.basket.total.toFixed(2))).toBe(10.43)
  })

  it('ordering a coffee and plain bagel should give a discount', () => {
    const managerBasket = new Manager(30)

    managerBasket.createBasket()

    managerBasket.basket.add('BGLP')

    managerBasket.basket.add('COF')

    expect(Number(managerBasket.basket.total.toFixed(2))).toBe(1.25)
  })
})
