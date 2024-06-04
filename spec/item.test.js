const Item = require('../src/item')

test('Item class creates an item with name and price', () => {
  const bagel = new Item('Plain Bagel', 1.5)
  expect(bagel.name).toBe('Plain Bagel')
  expect(bagel.price).toBe(1.5)
})
