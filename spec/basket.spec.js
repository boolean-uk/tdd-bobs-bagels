import BagelBakery from '../src/basket.js'

describe('BagelBakery', () => {
  let bagelBakery
  beforeEach(() => {
    bagelBakery = new BagelBakery()
  })

  it('should exist', () => {
    expect(bagelBakery).toBeInstanceOf(BagelBakery)
  })

  it('should create a new item', () => {
    const item = bagelBakery.addItem('salt')

    expect(item.id).toBe(1)
    expect(item.type).toBe('salt')
    expect(item.quantity).toBe(1)
    expect(item.price).toBe(0.65)
  })

  it('should add the new item to the basket', () => {
    const item1 = bagelBakery.addItem('salt')
    const item2 = bagelBakery.addItem('egg')

    expect(bagelBakery.basket.length).toBe(2)
  })

  it('should check if the item was added before to increase its quantity', () => {
    const item1 = bagelBakery.addItem('salt')
    const item2 = bagelBakery.addItem('salt')

    expect(bagelBakery.basket[0].quantity).toBe(2)
  })

  it('should check if the type of the item is available', () => {
    const item = bagelBakery.addItem('banana')

    expect(item).toBe('This Bagel is not available')
  })

  it('should remove an item from the basket', () => {
    bagelBakery.addItem('salt')
    bagelBakery.addItem('egg')

    bagelBakery.removeItem(1)

    expect(bagelBakery.basket.length).toBe(1)
  })

  it('should check if the item to remove exists in the basket', () => {
    bagelBakery.addItem('salt')
    bagelBakery.addItem('egg')

    const message = bagelBakery.removeItem(3)

    expect(message).toBe(
      'The item that you want to remove does not exist in the basket'
    )
  })

  it('should check when the basket is full when adding an item beyond the basket capacity', () => {
    bagelBakery.addItem('salt')
    bagelBakery.addItem('egg')
    bagelBakery.addItem('sesame')
    const item4 = bagelBakery.addItem('cheddar')

    expect(item4).toBe('You basket is full')
  })

  it('should create baskets with larger capacity when I need to', () => {
    bagelBakery.setBasketCapacity(10)

    bagelBakery.addItem('salt')
    bagelBakery.addItem('egg')
    bagelBakery.addItem('sesame')
    bagelBakery.addItem('cheddar')

    expect(bagelBakery.basket.length).toBe(4)
  })

  it('should get the price of an item before I adding it to the basket', () => {
    const itemPrice = bagelBakery.getItemPrice('salt')

    expect(itemPrice).toBe(0.65)
  })

  it('should check the item to get its price is available', () => {
    const itemPrice = bagelBakery.getItemPrice('salt')

    expect(itemPrice).toBe('This Bagel is not available')
  })
  // ---------
})
