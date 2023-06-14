const BasketList = require('../src/basket.js')

describe('add items to basket', () => {
  let bb
  beforeEach(() => {
    bb = new BasketList()
  })
  it('add a new item', () => {
    expect(bb.addToBasket('bagel')).toEqual([
      {
        quantity: 1
      }
    ])
  })
})