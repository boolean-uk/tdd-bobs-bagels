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
    basket.addItem("BGLP")

    // Test
    expect(basket.items.size).toEqual(1)
  })

  it('should remove item from basket', () => {
    // Setup
    basket.addItem("BGLP")
    basket.removeItem("BGLP")

    // Test
    expect(basket.items.size).toEqual(0)
  })

  it('should throw exception while trying to remove non-existent item from basket', () => {
    expect(() => basket.removeItem("BGLP")).toThrow()
  })

  it('should throw exception when trying to add item over basket capacity', () => {
    // Setup
    basket.addItem("BGLP")
    basket.addItem("BGLP")

    // Test
    expect(() => basket.addItem("BGLP")).toThrow()
  })

  it('should return it price', () => {
    // Test
    expect(basket.checkPrice("BGLS")).toEqual(0.49)
  })

  it('should be able to add the same item to basket more than once', () => {
    // Setup
    const item = basket.getItemBySku("BGLP");

    basket.addItem("BGLP")
    basket.addItem("BGLP")

    // Test
    expect(basket.items.get(item)).toEqual(2)
  })

  it('should calculate total price of items in basket', () => {
    // Setup
    basket.addItem("BGLP")
    basket.addItem("BGLP")

    expect(basket.getTotalPrice()).toEqual(0.78)
  })

  it('should calculate total price of items in basket combo of 6 same bagels', () => {
    // Setup
    basket = new Basket(20)
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")

    expect(basket.getTotalPrice()).toEqual(2.49)
  })

  it('should calculate total price of items in basket combo of 12 same bagels', () => {
    // Setup
    basket = new Basket(20)
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")

    expect(basket.getTotalPrice()).toEqual(3.99)
  })

  it('should calculate total price of items in basket combo of 6 same bagels and one coffee', () => {
    // Setup
    basket = new Basket(20)
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("COF")

    expect(basket.getTotalPrice()).toEqual(3.48)
  })

  it('should calculate total price of items in basket combo of 6 same bagels and one bagel sandwich', () => {
    // Setup
    basket = new Basket(20)
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGLP")
    basket.addItem("BGSS")

    expect(basket.getTotalPrice()).toEqual(5.48)
  })

}) 