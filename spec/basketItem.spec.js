/* eslint-disable no-undef */
const BasketItem = require('../src/basketItem')
const Item = require('../src/item')

describe('BasketItem', () => {
  it('totals the basket', () => {
    const bItem = new BasketItem(new Item('BGL1', 'Bagel 1', 13), 12)
    const finalPrice = 13 * 12

    expect(bItem.totalPrice()).toEqual(finalPrice)
  })
})
