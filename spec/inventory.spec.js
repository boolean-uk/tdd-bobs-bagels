const Inventory = require('../src/inventory')
const Product = require('../src/product')
describe('inventory test - core', () => {
  it('should display available products with prices', function () {
    const inventory = new Inventory()

    const items = inventory.getAvailableItems()
    expect(items.length).toEqual(4)
    expect(items.filter((prod) => prod instanceof Product))
  })
})
