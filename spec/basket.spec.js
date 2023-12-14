const inventory = require('../inventory.json')
describe('Basket', () => {
  it('can have an item added to it and returns true', () => {
    const basket = new Basket()
    const itemObject = inventory.inventory[0]
    const item = new Item(itemObject)
    const result= basket.additemtoBasket(item)
    expect(result).toBeTrue()
  })
})
