const { Basket, Item } = require('../../src/basket')

describe('Add an item to the basket', () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  })

  // Adding item to the basket
  it('adds an item to the basket', () => {
    const item1 = 'BGLO'
    // const newItem = new Item(item1)
    basket.addItem(item1)
    expect(basket.items[0].sku).toEqual('BGLO')
  })

  // Removing item from the basket
  it('removes an item from the basket', () => {
    basket.addItem('BGLO')
    basket.removeItem('BGLO')
    expect(basket.items.length).toEqual(0)
  })

  it('should remove 2nd item from the basket', () => {
    basket.addItem('BGLO')
    basket.addItem('BGLP')
    basket.removeItem('BGLO')
    expect(basket.items[0].sku).toEqual('BGLP')
  })

  // isFullBasket()
  it('should return true if basket is full', () => {
    for (let i = 0; i < basket.capacity; i++) {
        basket.addItem('BGLO')
    }
    expect(basket.isBasketFull()).toBeTrue()
  })
})
