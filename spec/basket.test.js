const Item = require('../src/item')
const Basket = require('../src/basket')

test('Basket class adds an item to the basket', () => {
  const basket = new Basket()
  const bagel = new Item('Plain Bagel', 1.5)
  const response = basket.addItem(bagel)
  expect(response).toBe('Added Plain Bagel to the basket.')
  expect(basket.items).toContainEqual(bagel)
})

test('Basket class removes an item from the basket', () => {
  const basket = new Basket()
  const bagel = new Item('Plain Bagel', 1.5)
  basket.addItem(bagel)
  const response = basket.removeItem('Plain Bagel')
  expect(response).toBe('Removed Plain Bagel from the basket.')
  expect(basket.items).not.toContainEqual(bagel)
})

test('Basket class handles removing an item not in the basket', () => {
  const basket = new Basket()
  const response = basket.removeItem('Plain Bagel')
  expect(response).toBe('Item not found in the basket.')
})
