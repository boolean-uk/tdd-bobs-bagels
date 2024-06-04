const main = require('../src/main')
const Basket = require('../src/basket')
const Item = require('../src/item')

test('main adds items to basket and calculates total price', () => {
  const basket = new Basket()
  const plainBagel = new Item('Plain Bagel', 1.5)
  const eggBagel = new Item('Egg Bagel', 2.0)

  basket.addItem(plainBagel)
  basket.addItem(eggBagel)

  expect(basket.totalPrice()).toBe(
    'Total price of items in the basket is $3.50.'
  )
})
