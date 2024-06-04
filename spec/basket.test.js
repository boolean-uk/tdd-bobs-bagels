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

test('Basket class shows the price of an item in the basket', () => {
  const basket = new Basket()
  const bagel = new Item('Plain Bagel', 1.5)
  basket.addItem(bagel)
  const response = basket.showPrice('Plain Bagel')
  expect(response).toBe('The price of Plain Bagel is $1.50.')
})

test('Basket class handles showing price of an item not in the basket', () => {
  const basket = new Basket()
  const response = basket.showPrice('Plain Bagel')
  expect(response).toBe('Item not found in the basket.')
})

test('Basket class calculates total price of items in the basket', () => {
  const basket = new Basket()
  const bagel1 = new Item('Plain Bagel', 1.5)
  const bagel2 = new Item('Egg Bagel', 2.0)
  basket.addItem(bagel1)
  basket.addItem(bagel2)
  const response = basket.totalPrice()
  expect(response).toBe('Total price of items in the basket is $3.50.')
})

test('Basket class checks out and clears the basket', () => {
  const basket = new Basket()
  const bagel = new Item('Plain Bagel', 1.5)
  basket.addItem(bagel)
  const response = basket.checkout()
  expect(response).toBe(
    'Checked out. Total price of items in the basket is $1.50. Thank you for your purchase!'
  )
  expect(basket.items.length).toBe(0)
})

test('Basket class handles basket capacity limit', () => {
  const basket = new Basket(1)
  const bagel1 = new Item('Plain Bagel', 1.5)
  const bagel2 = new Item('Egg Bagel', 2.0)
  basket.addItem(bagel1)
  const response = basket.addItem(bagel2)
  expect(response).toBe('Basket is full. Cannot add more items.')
  expect(basket.items).not.toContainEqual(bagel2)
})

test('Basket class increases basket capacity', () => {
  const basket = new Basket(1)
  const response = basket.increaseCapacity(5)
  expect(response).toBe('Capacity increased to 5.')
  expect(basket.capacity).toBe(5)
})
