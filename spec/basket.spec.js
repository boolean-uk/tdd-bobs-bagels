import Basket from '../src/basket.js'
import 'jasmine-expect'

describe('Bagel basket', () => {
  it('should be able to have new items added', () => {
    const basket = new Basket()
    basket.addItem('BGLO')

    expect(basket.contents.length).toEqual(1)
  })
})
