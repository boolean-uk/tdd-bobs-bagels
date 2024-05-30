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
    basket.addItem('BGLP')
    basket.addItem('BGLS')
    basket.addItem('COF')
    basket.removeItem('BGLS')

    const remainingItems = []
    basket.contents.forEach((item) => remainingItems.push(item.sku))

    expect(remainingItems).not.toContain('BGLS')
  })

  it('should only accept items up to the content limit', () => {
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

  it('should tell users the price of a specific item when requested', () => {
    const basket = new Basket()

    basket.checkPrice('COF')

    expect(basket.checkPrice('COF')).toEqual('0.99')
  })

  it('should give users the total price of their basket when they check out', () => {
    const basket = new Basket()

    basket.addItem('BGLO')
    basket.addItem('BGLS')
    basket.addItem('BGLP')

    expect(basket.checkOut()).toEqual('1.37')
  })

  it('should give users an order summary', () => {
    const basket = new Basket()

    basket.addItem('BGLO')
    basket.addItem('BGLO')
    basket.addItem('BGLP')

    expect(basket.orderSummary()).toEqual({
      BGLO: { quantity: 2, price: 0.98 },
      BGLP: { quantity: 1, price: 0.39 }
    })
  })

  it('should calculate discounts on onion bagels (6 for 2.49)', () => {
    const basket = new Basket(10)

    for (let i = 0; i < 8; i++) {
      basket.addItem('BGLO')
    }

    expect(basket.orderSummary()).toEqual({
      BGLO: { quantity: 8, price: 3.47 }
    })
  })

  it('should calculate discounts on plain bagels (12 for 3.99)', () => {
    const basket = new Basket(15)

    for (let i = 0; i < 16; i++) {
      basket.addItem('BGLP')
    }

    expect(basket.orderSummary()).toEqual({
      BGLP: { quantity: 15, price: 5.16 }
    })
  })

  it('should calculate discounts on everything bagels (6 for 2.49)', () => {
    const basket = new Basket(10)

    for (let i = 0; i < 8; i++) {
      basket.addItem('BGLE')
    }

    expect(basket.orderSummary()).toEqual({
      BGLE: { quantity: 8, price: 3.47 }
    })
  })
})
