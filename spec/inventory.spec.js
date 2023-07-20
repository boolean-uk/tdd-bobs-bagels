const Inventory = require('../src/inventory')
describe('inventory test - core', () => {
  it('should display available item with prices', function () {
    const inventory = new Inventory()

    const items = inventory.getAvailableItems()
    expect(items.length).toEqual(4)
  })
})
