describe('Basket functionality', () => {
  const Basket = require('../src/basket.js')
  const Bagel = require('../src/bagel.js')

  let basket
  let bagel
  let bagel2
  beforeEach(() => {
    basket = new Basket(2)
    bagel = new Bagel('BGLO','bagel', 12)
    bagel2 = new Bagel('BGLO', 'bagel2', 10)
  })

  it('check if the basket is full', () => {
    basket.add(bagel)
    expect(basket.isFull()).toBe(false)
    basket.add(bagel)
    expect(basket.isFull()).toBe(true)
  })

  it('should add bagel to the basket', () => {
    basket.add(bagel)
    basket.add(bagel)
    expect(basket.products.length).toBe(2)
    basket.add(bagel)
    expect(basket.products.length).toBe(2)
  })

  it('should check if the bagel in the basket', () => {
    basket.add(bagel)
    expect(basket.doesBagelExist(bagel2)).toBe(false)
    basket.add(bagel2)
    expect(basket.doesBagelExist(bagel2)).toBe(true)
  })

  it('should remove a bagel from the basket', () => {
    basket.add(bagel)
    expect(basket.products.includes(bagel)).toBe(true)
    basket.remove(bagel)
    expect(basket.products.includes(bagel)).toBe(false)
  })

  it('should remove a bagel from the basket', () => {
    basket.add(bagel)
    basket.add(bagel2)
    expect(basket.totalCost()).toBe(22)
    basket.remove(bagel)
    expect(basket.totalCost()).toBe(10)
  })

  it("returns an object with quantities of each product", function() {
    basket.add(bagel)
    basket.add(bagel2)

    const quantities = basket.getProductQuantities();

    expect(quantities).toEqual({ "BGLO": 2});
  });

  it("returns an empty object if there are no products", function() {
    // Setup
    basket.products = [];

    // Execute
    const quantities = basket.getProductQuantities();

    // Verify
    expect(quantities).toEqual({});
  });

  it("calculates discounts correctly", function() {
    basket.add(bagel)
    basket.add(bagel)
    basket.add(bagel)
    basket.add(bagel)
    basket.add(bagel)
    basket.add(bagel)
    let discounts = basket.calculateDiscounts();
    let totalDiscount = Object.values(discounts).reduce((a, b) => a + b, 0);
    expect(totalDiscount).toBe(0.45);
  });
})