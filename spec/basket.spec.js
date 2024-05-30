import Basket from '../src/basket.js'

describe('Bagel list', () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  })

  it('basket exists and has items in it', () => {
    expect(basket).toBeInstanceOf(Basket)
  })
})
