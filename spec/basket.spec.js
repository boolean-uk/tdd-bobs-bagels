/* eslint-disable no-undef */
const Basket = require('../src/basket')
const Item = require('../src/item')

describe('Basket', () => {
  it('adds an item to the basket', () => {
    const basket = new Basket()
    const item = new Item('Banana')
    basket.add(item)

    expect(basket.items.length).toEqual(1)
    expect(basket.items.includes(item)).toBeTrue()
    expect(basket.add(item)).toBeTrue()
  })

  it('removes an item from the basket', () => {
    const basket = new Basket()
    const item = new Item('Banana')
    basket.add(item)

    expect(basket.items.length).toEqual(1)
    basket.remove(item)
    expect(basket.items.includes(item)).toBeFalse()
  })

  it('has a maximum number of items to a basket', () => {
    // The default basket size should be 5
    const basket = new Basket()

    basket.add(new Item('Banana')) // 1
    basket.add(new Item('Banana')) // 2
    basket.add(new Item('Banana')) // 3
    basket.add(new Item('Banana')) // 4
    basket.add(new Item('Banana')) // 5
    basket.add(new Item('Banana')) // Doesn't add this item

    expect(basket.size()).toEqual(5)
  })

  it('can set a specific maximum number of items to a basket', () => {
    // The default basket size should be 5
    const basket = new Basket(6)
    expect(basket.capacity()).toEqual(6)

    basket.add(new Item('Banana')) // 1
    basket.add(new Item('Banana')) // 2
    basket.add(new Item('Banana')) // 3
    basket.add(new Item('Banana')) // 4
    basket.add(new Item('Banana')) // 5
    basket.add(new Item('Banana')) // 6
    basket.add(new Item('Banana')) // Doesn't add this item

    expect(basket.size()).toEqual(6)
  })
})
