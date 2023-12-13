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
})
