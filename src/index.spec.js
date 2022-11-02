const Basket = require('./basket.js')
const importJsonInventory = require('../inventory.json')
const inventory = importJsonInventory.inventory

describe('Basket', () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  })

  it('should create a new basket', () => {
    expect(basket).toBeInstanceOf(Basket)
    expect(basket.basketQuantity).toBe(10)
    expect(basket.items.length).toBe(0)
  })

  it('should add item from inventory to basket', () => {
    expect(basket.addItem('BGLE')).toEqual(inventory[2])
  })

  it('should return false if item does not exist in inventory', () => {
    expect(basket.addItem('NaN')).toBe(false)
  })

  it('should return false if added item exceeds bag quantity', () => {
    const bagQuantity = 1
    const fullBasket = new Basket(bagQuantity)
    fullBasket.addItem('BGLE')
    expect(fullBasket.addItem('BGLE')).toBe(false)
  })

  it('if the item already exists in basket, increment the quantity on the item', () => {
    basket.addItem('BGLE')
    basket.addItem('BGLE')
    expect(basket.items.length).toBe(1)
    expect(basket.items[0].quantity).toBe(2)
  })

  it('should delete item from basket if it exists in the basket', () => {
    basket.addItem('BGLE')
    basket.addItem('COF')
    basket.addItem('BGLE')
    expect(basket.deleteItem('BGLE')).toEqual(inventory[2])
    expect(basket.items.length).toBe(1)
  })

  it('should return false if item, does not exist in basket when deleting', () => {
    basket.addItem('BGLE')
    basket.addItem('COF')
    expect(basket.deleteItem('BGLP')).toBe(false)
    expect(basket.items.length).toBe(2)
  })


  
})
