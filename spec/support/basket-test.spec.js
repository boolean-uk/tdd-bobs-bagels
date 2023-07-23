const { Basket } = require('../../src/basket.js');

describe('Basket', () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  })

  //addItem 
  it('should add Onion Bagel to the basket', () => {
    basket.addItem('BGLO')
    expect(basket.items[0].sku).toBe('BGLO')
  })

  it('should add multiple quantities of the same bagel', () => {
    basket.addItem('BGLO')
    basket.addItem('BGLO')
    expect(basket.items[0].quantity).toBe(2)
  })

  //removeItem
  it('should remove an item from the basket', () => {
    basket.addItem('BGLO')
    basket.removeItem('BGLO')
    expect(basket.items.length).toBe(0)
  })

  it('should remove Onion Bagel from the basket', () => {
    basket.addItem('BGLO')
    basket.addItem('BGLP')
    basket.removeItem('BGLO')
    expect(basket.items[0].sku).toBe('BGLP')
  })
  
  it('should not remove an item that is not present in the basket', () => {
    basket.addItem('BGLO')
    basket.addItem('BGLP')
    const result = basket.removeItem('BGLE')
    expect(result).toBe(false)
  })

  //isBasketFull
  it('should return true when the basket is full', () => {
    for (let i=0;i<basket.capacity;i++) {
        basket.addItem('BGLO')
    }
    expect(basket.isBasketFull()).toBe(true)
  })

  it('should return false when the basket is not full', () => {
    expect(basket.isBasketFull()).toBe(false)
  })

  //changeCapacity
  it('should expand basket capacity', () => {
    basket.changeCapacity(6)
    expect(basket.capacity).toBe(6)
  })

  it('should return false when basket is not full', () => {   
    for (let i=0;i<basket.capacity;i++) {
        basket.addItem('BGLO')
    }
    basket.changeCapacity(6)
    expect(basket.isBasketFull()).toBe(false)
  })

  it('should not change basket capacity', () => {   
    for (let i=0;i<basket.capacity;i++) {
        basket.addItem('BGLO')
    }
    basket.changeCapacity(4)
    expect(basket.capacity).toBe(5)
  })

  //getTotalCost
  it('should return total cost of all items in basket', () => {
    basket.addItem('BGLO')
    basket.addItem('BGLP')
    basket.addItem('BGLE')
    basket.addItem('COF')
    expect(Number(basket.getTotalPrice().toFixed(2))).toBeCloseTo(2.36, 2)
  })
})