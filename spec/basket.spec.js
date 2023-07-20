const { Basket }= require('../src/basket.js')

describe("Basket tests", () => {
  let basket;

  beforeEach(() => {
    basket = new Basket(2)
  })

  it('should create a Basket class object', () => {
    expect(basket).toBeDefined
  })

  it('shoud add item to basket', () => {
    // Setup
    const item = {name: 'item', unitPrice: 19.99}
    basket.addItem(item)

    // Test
    expect(basket.items.length).toEqual(1)
  })

  it('should remove item from basket', () => {
    // Setup
    const item = {name: 'item', price: 19.99}
    basket.addItem(item)
    basket.remove(item)

    // Test
    expect(basket.items.length).toEqual(0)
  })

}) 