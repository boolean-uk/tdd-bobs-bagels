const { Basket, Item } = require('../../src/basket')

describe('Basket', () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  })

  it('adds an item to the basket', () => {
    basket.addItem('BGLO')
    const addedItem = basket.items[0]

    // I compare the individual properties of the added item
    expect(addedItem.sku).toEqual('BGLO')
    expect(addedItem.price).toEqual('0.49')
    expect(addedItem.name).toEqual('Bagel')
    expect(addedItem.variant).toEqual('Onion')
    expect(addedItem.quantity).toEqual(1)
    expect(addedItem.fillings).toEqual([])
  })

  it('can add an item more than once to the basket', () => {
    basket.addItem('BGLO')
    basket.addItem('BGLO')
    expect(basket.items[0].quantity).toEqual(2)
  })

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

  it('cannot remove item not in the basket', () => {
    basket.addItem('BGLO')
    basket.addItem('BGLP')
    const result = basket.removeItem('BGLE')
    expect(result).toBe(false)
  })
})
