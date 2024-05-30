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
})
