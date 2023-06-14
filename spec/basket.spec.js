const Basket = require('../src/basket')

describe('Create the basket', () => {
  let testBasket
  beforeEach(() => {
    testBasket = new Basket()
  })

  it('add the new bagel', () => {
    expect(testBasket.addBagel('BGLO')).toEqual([{ sku: "BGLO", price: "0.49", name: "Bagel", variant: "Onion" }])
  })

  it('bagel type has not been added', () => {
    expect(testBasket.addBagel('')).toEqual([])
  })

  it('remove bagel from basket', ()=> {
    testBasket.addBagel('Sprinkle')
    expect(testBasket.removeBagel('Sprinkle')).toEqual([])
  })
  it('remove bagel from basket with more than 1 item', ()=> {
    testBasket.addBagel('BGLO')
    testBasket.addBagel('BGLP')
    expect(testBasket.removeBagel('BGLP')).toEqual([{ sku: "BGLO", price: "0.49", name: "Bagel", variant: "Onion" }])
  })
  it('remove bagel type is not in the cart', () => {
    testBasket.addBagel('BGLO')
    testBasket.addBagel('BGLP')
    expect(testBasket.removeBagel('Ham')).toEqual([{ sku: "BGLO", price: "0.49", name: "Bagel", variant: "Onion" }, { sku: "BGLP", price: "0.39", name: "Bagel", variant: "Plain" }])
  })
})
