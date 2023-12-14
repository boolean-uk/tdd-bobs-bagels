const inventory = require('../inventory.json')
const { Basket, Item } = require('../src/basket.js')
describe('Basket', () => {
  it('can have an item added to it and returns true', () => {
    const basket = new Basket()
    const itemObject = inventory.inventory[0]
    const item = new Item(itemObject)
    const result = basket.additemtoBasket(item)
    expect(result).toBeTrue()
  })
  it('returns false if item added is invalid', () => {
    // GIVEN
    const basket = new Basket()
    const item = { name: 'sandwich' }
    // WHEN
    const result = basket.additemtoBasket(item)
    // THEN
    expect(result).toBeFalse()
  })
})
