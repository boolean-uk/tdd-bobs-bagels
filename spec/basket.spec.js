import Basket from '../src/basket.js'
import 'jasmine-expect'

describe('Bagel basket', () => {
  it('should be able to have new items added', () => {
    const basket = new Basket()
    basket.addItem('BGLO')

    expect(basket.contents.length).toEqual(1)
  })

  it('should be able to have several new items added (some of which being the same)', () => {
    const basket = new Basket()
    basket.addItem('BGLO')
    basket.addItem('BGLO')
    basket.addItem('BGLS')

    expect(basket.contents.length).toEqual(3)
  })

  it('should be able to have items removed', () => {
    const basket = new Basket()
    basket.addItem('BGLO')
    basket.addItem('BGLS')
    basket.addItem('BGLP')
    basket.addItem('BGLS')
    basket.addItem('COF')
    basket.removeItem('BGLP')

    const remainingItems = []

    for (let i = 0; i < basket.contents; i++) {
      remainingItems.push(basket.contents[i])
    }

    expect(remainingItems).not.toContain('BGLP')
  })

  it('should only accept items upto the content limit', () => {
    const basket = new Basket()
    basket.addItem('BGLO')
    basket.addItem('BGLS')
    basket.addItem('BGLP')
    basket.addItem('BGLS')
    basket.addItem('COF')

    expect(basket.addItem('BGSE')).toEqual('Sorry, your basket is full')
  })

  it('should accept adjustments to the default content limit', () => {
    const basket = new Basket(6)

    basket.addItem('BGLO')
    basket.addItem('BGLS')
    basket.addItem('BGLP')
    basket.addItem('BGLS')
    basket.addItem('COF')
    basket.addItem('BGSE')

    expect(basket.contents.length).toEqual(6)
  })

  it('should warn users if they try and remove an item that does not exist', () => {
    const basket = new Basket()

    basket.addItem('BGLO')
    basket.addItem('BGLS')

    expect(basket.removeItem('COF')).toEqual(
      'Your basket does not contain that item'
    )
  })
})
