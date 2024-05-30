import Basket from '../src/basket.js'
import 'jasmine-expect'

describe('Bagel basket', () => {
  it('should be able to have new items added', () => {
    const basket = new Basket()
    basket.addItem('BGLO')

    expect(basket.contents.length).toEqual(1)
  })

  it('should be able to have several new items added', () => {
    const basket = new Basket()
    basket.addItem('BGLO')
    basket.addItem('BGLE')
    basket.addItem('BGLS')

    expect(basket.contents.length).toEqual(3)
  })
})
