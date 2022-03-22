/* eslint-disable no-undef */
const Basket = require('../src/basket')
const BasketItem = require('../src/basketItem')
const Item = require('../src/item')

describe('Basket', () => {
  // Add reandomness to tests
  generateItem = () => {
    const rnd = (Math.random() * 1000)
    return new Item('BGL' + rnd, rnd, rnd / 3)
  }
  it('adds an item to the basket', () => {
    const basket = new Basket()
    const item = new BasketItem(generateItem)
    basket.add(item)

    expect(basket.items.length).toEqual(1)
    expect(basket.items.includes(item)).toBeTrue()
    expect(basket.add(item)).toBeTrue()
  })

  it('removes an item from the basket', () => {
    const basket = new Basket()
    const item = new BasketItem(generateItem)
    basket.add(item)

    expect(basket.items.length).toEqual(1)
    basket.remove(item)
    expect(basket.items.includes(item)).toBeFalse()
  })

  it('has a maximum number of items to a basket', () => {
    // The default basket size should be 5
    const basket = new Basket()

    basket.add(new BasketItem(generateItem())) // 1
    basket.add(new BasketItem(generateItem())) // 2
    basket.add(new BasketItem(generateItem())) // 3
    basket.add(new BasketItem(generateItem())) // 4
    basket.add(new BasketItem(generateItem())) // 5
    basket.add(new BasketItem(generateItem())) // Doesn't add this item

    expect(basket.size()).toEqual(5)
  })

  it('can set a specific maximum number of items to a basket', () => {
    // The default basket size should be 5
    const basket = new Basket(6)
    expect(basket.capacity()).toEqual(6)

    basket.add(new BasketItem(generateItem())) // 1
    basket.add(new BasketItem(generateItem())) // 2
    basket.add(new BasketItem(generateItem())) // 3
    basket.add(new BasketItem(generateItem())) // 4
    basket.add(new BasketItem(generateItem())) // 5
    basket.add(new BasketItem(generateItem())) // 6
    basket.add(new BasketItem(generateItem())) // Doesn't add this item

    expect(basket.size()).toEqual(6)
  })

  it('can calculate the total price of a basket', () => {
    // The default basket size should be 5
    const basket = new Basket(6)
    expect(basket.capacity()).toEqual(6)
    const item1 = new BasketItem(generateItem(), 3)
    const item2 = new BasketItem(generateItem(), 3)
    const totalPrice = item1.totalPrice() + item2.totalPrice()


    basket.add(item1) // 1
    basket.add(item2) // 2

    expect(basket.totalPrice()).toEqual(totalPrice)
  })
})
