/* eslint-disable no-undef */
const InventoryItem = require('../../src/inventory/inventoryItem')
const Item = require('../../src/item')

describe('InventoryItem', () => {
  it('says it is not in stock when quantity < 0', () => {
    const iItem = new InventoryItem(new Item('BGLO', 'Bagel', 10), 10)
    iItem.quantity = 0

    expect(iItem.inStock()).toBeFalse()
  })
})
