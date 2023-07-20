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
    expect(basket.items.size).toEqual(1)
  })

  it('should remove item from basket', () => {
    // Setup
    const item = {name: 'item', price: 19.99}
    basket.addItem(item)
    basket.removeItem(item)

    // Test
    expect(basket.items.size).toEqual(0)
  })

  it('should throw exception while trying to remove non-existent item from basket', () => {
    expect(() => basket.removeItem({name: 'non-existent'})).toThrow()
  })

  it('should throw exception when trying to add item over basket capacity', () => {
    // Setup
    const item = {name: 'apple', price: 1.11}
    basket.addItem(item)
    basket.addItem(item)

    // Test
    expect(() => basket.addItem(item)).toThrow()
  })

  it('should return it price', () => {
    const item = {name: 'apple', price: 1.11}

    expect(basket.checkPrice(item)).toEqual(1.11)
  })

}) 