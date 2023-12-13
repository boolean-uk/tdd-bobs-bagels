const { BagelStore } = require('../src/basket.js')

describe('Basket:', () => {
  let store

  beforeEach(() => {
    store = new BagelStore()
    store.loadFiles()
  })

  it('Add valid item to basket', () => {
    store.addToBasket('bglo')

    const result = store.basket

    expect(result).toEqual([
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion',
        quantity: 1
      }
    ])
  })

  it('Add invalid item to basket', () => {
    const result = store.addToBasket('troll')

    expect(result).toEqual('ERROR: Invalid item')
  })

  it('Remove valid item from basket', () => {
    store.addToBasket('bGlO')
    store.addToBasket('bgls')
    store.removeItemFromBasket('bglo')

    const result = store.basket

    expect(result).toEqual([
      {
        sku: 'BGLS',
        price: '0.49',
        name: 'Bagel',
        variant: 'Sesame',
        quantity: 1
      }
    ])
  })

  it('Remove invalid item from basket', () => {
    store.addToBasket('BGLO')
    store.addToBasket('BGSS')

    const result = store.removeItemFromBasket('bgl')

    expect(result).toEqual('ERROR: Invalid Item. Please input a valid sku.')
  })

  it('Create basket with given capacity', () => {
    store.updateBasketCapacity(10)

    const result = store.basketCapacity

    expect(result).toEqual(10)
  })

  it('Hits limit of basket capacity by items', () => {
    store.addToBasket('bglo')
    store.addToBasket('BGLE')
    store.addToBasket('BGLS')
    store.addToBasket('BGLP')
    store.addToBasket('BGSS')

    const result = store.addToBasket('BGSE')

    expect(result).toEqual(
      'Your basket is full. Please create a new basket with a greater capacity'
    )
  })

  it('Hits limit of basket capacity by quantity', () => {
    store.addToBasket('bglo')
    store.addToBasket('bglo')
    store.addToBasket('bglo')
    store.addToBasket('bglo')
    store.addToBasket('bglo')

    const result = store.addToBasket('bglo')

    expect(result).toEqual(
      'Your basket is full. Please create a new basket with a greater capacity'
    )
  })

  it('Views price list of all items in inventory', () => {
    const result = store.bagelPrices()

    const expectedString = `Prices:\n0: Onion Bagel - $0.49\n1: Plain Bagel - $0.39\n2: Everything Bagel - $0.49\n3: Sesame Bagel - $0.49\n4: Coffee - $0.99\n5: Everything Bagel Sandwich - $2.99\n6: Sesame Bagel Sandwich - $4.99\n`

    expect(result.trim()).toEqual(expectedString.trim())
  })

  it('Ability to view quantity of items when adding to basket', () => {
    store.addToBasket('bglo')
    store.addToBasket('bglo')

    const result = store.basket

    expect(result).toEqual([
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion',
        quantity: 2
      }
    ])
  })

  it('View total price of items in cart', () => {
    store.addToBasket('bglo')
    store.addToBasket('bglo')
    store.addToBasket('bglo')
    store.addToBasket('bglo')

    const result = store.totalPrice()

    expect(result).toEqual('Total: $1.96')
  })
})
