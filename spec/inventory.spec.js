const Inventory = require('../src/inventory')
const Product = require('../src/product')
const Discount = require('../src/Discount')
describe('inventory test - core', () => {
  it('should display available products with prices', function () {
    const inventory = new Inventory()

    const items = inventory.getAvailableItems()
    expect(items.length).toEqual(4)
    expect(items.filter((prod) => prod instanceof Product))
  })

  it('should display available discounts', function () {
    const inventory = new Inventory()

    const discounts = inventory.getAvailableDiscounts()
    expect(discounts.length).toEqual(3)
    expect(discounts.filter((prod) => prod instanceof Discount))
  })
})
