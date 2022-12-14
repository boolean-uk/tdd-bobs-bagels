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
})
