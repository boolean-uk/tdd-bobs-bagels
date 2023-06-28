const { Basket } = require('../src/basket.js')

describe('Basket method', () => {
  // happy path
  let basket
  beforeEach(() => {
    basket = new Basket()
  })

  it('addItemToBasket returns true when item is added', () => {
    // GIVEN
    const item = {
      name: 'Bagel',
      price: '2.90'
    }

    // WHEN
    const result = basket.addItemToBasket(item)

    // THEN
    expect(result).toEqual(true)
  })

  it('addItemToBasket returns false when provided with anything but an object', () => {
    // GIVEN
    const falseItem = 52

    // WHEN
    const result = basket.addItemToBasket(falseItem)

    // THEN

    expect(result).toEqual(false)
  })

  it('removeItemFromBasket returns true if item is removed', () => {
    // GIVEN
    const item = {
      name: 'Bagel',
      price: '2.90'
    }

    // WHEN
    basket.addItemToBasket(item)
    const result = basket.removeItemFromBasket(item)

    // THEN
    expect(result).toEqual(true)
  })

  it('removeItemFromBasket returns false if item does not exist in basket', () => {
    // GIVEN
    const item = {
      name: 'Bagel',
      price: '2.90'
    }

    // WHEN
    const result = basket.removeItemFromBasket(item)

    // THEN

    expect(result).toEqual(false)
  })

  it('setBasketCapacity returns true when basket size is updated', () => {
    const res = basket.setBasketCapacity(30)

    expect(res).toEqual(true)
  })

  it('getItemPrice returns item price', () => {
    const item = {
      name: 'Bagel',
      price: '2.90'
    }

    const res = basket.getItemPrice(item)

    expect(res).toEqual('2.90')
  })

  it('calculateTotal returns total price of all items in basket', () => {
    const item = {
      name: 'Bagel',
      price: '2.90'
    }

    basket.addItemToBasket(item)
    basket.addItemToBasket(item)
    basket.addItemToBasket(item)

    const res = basket.calculateTotal()

    expect(res).toEqual('8.70')
  })
})
