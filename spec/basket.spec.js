const { Basket } = require('../src/basket')

describe('bobs bagels', () => {
  const testBasket = new Basket()

  beforeEach(() => {
    testBasket.basket = []
  })

  it('An instance of Basket class has a basketCapacity of 10 by default', () => {
    expect(testBasket.basketCapacity).toBe(10)
  })

  it('The manager can change the basket capacity', () => {
    const biggerBasket = new Basket(30)

    expect(biggerBasket.basketCapacity).toBe(30)
  })

  it('addBagel function returns an object with new quantity: 1 property/value', () => {
    const item = testBasket.addBagel('BGLO')

    expect(item).toEqual({
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion',
      quantity: 1
    })
  })

  it('addBagel pushes items successfully into main basket', () => {
    testBasket.addBagel('BGLO')
    testBasket.addBagel('BGSE')

    expect(testBasket.basket).toEqual([
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion',
        quantity: 1
      },
      {
        sku: 'BGSE',
        price: '2.99',
        name: 'Bagel Sandwich',
        variant: 'Everything',
        fillings: ['Bacon', 'Egg', 'Cheese'],
        quantity: 1
      }
    ])
  })

  it('quantity should be increased if bagel already exists in basket', () => {
    testBasket.addBagel('BGLO')
    testBasket.addBagel('BGLO')
    testBasket.addBagel('BGLO')

    expect(testBasket.basket).toEqual([
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion',
        quantity: 3
      }
    ])
  })

  it('if basket is at capacity, addBagel should return false', () => {
    const tinyBasket = new Basket(2)
    tinyBasket.addBagel('BGLO')
    tinyBasket.addBagel('BGLP')
    const oneTooMany = tinyBasket.addBagel('BGLS')

    expect(oneTooMany).toBe(false)
  })

  it('removeBagel function should successfully remove a bagel from the basket', () => {
    testBasket.addBagel('BGLO')
    testBasket.removeBagel('BGLO')

    expect(testBasket.basket).toEqual([])
  })

  it('removeBagel should return the item that has been removed from the basket', () => {
    testBasket.addBagel('BGLO')
    const removed = testBasket.removeBagel('BGLO')

    expect(removed).toEqual({
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion',
      quantity: 1
    })
  })

  it('if the bagel isnt in the basket, removeBagel should return false', () => {
    const fail = testBasket.removeBagel('Non-existent bagel')

    expect(fail).toBe(false)
  })
})
