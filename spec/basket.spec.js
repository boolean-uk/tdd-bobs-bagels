import Basket from '../src/basket.js'

describe('Bagel list', () => {
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
    basket.add('BGLO')
    basket.add('BGLO')
    basket.add('BGLO')
    basket.add('BGLO')

    expect(basket.checkOut()).toBe(1.96)
  })
})
