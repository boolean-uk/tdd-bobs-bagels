import { Item, Basket } from '../src/basket.js'

// Part One

describe('item', () => {
  it('should have a name and a price', () => {
    const item = new Item('Salmon and Cream Cheese Bagel', 6.5)

    expect(item.name).toBe('Salmon and Cream Cheese Bagel')
    expect(item.price).toBe(6.5)
  })
})

describe('basket', () => {
  it('should add users order to basket', () => {
    const basket = new Basket()

    expect(basket.items.length).toBe(0)
  })
})
