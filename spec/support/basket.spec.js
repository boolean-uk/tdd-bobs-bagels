const {BagelStore} = require('../../src/basket.js')


describe("Bob's bagels:", () => {
  let store

  beforeEach(() => {
    store = new BagelStore()
    store.loadFiles()
  })

  it('Add valid item to default basket', () => {
    store.addItemToBasket('bglo')

    const result = store.baskets.defaultBasket.items

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

  it('Add invalid item to default basket', () => {
    const result = store.addItemToBasket('troll')

    expect(result).toEqual('ERROR: Please input a valid bagel sku :).')
  })

  it('Remove valid item from default basket', () => {
    store.addItemToBasket('bGlO')
    store.addItemToBasket('bgls')
    store.removeItemFromBasket('bglo')

    const result = store.baskets.defaultBasket.items

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

  it('Remove invalid item from default basket', () => {
    store.addItemToBasket('BGLO')
    store.addItemToBasket('BGSS')

    const result = store.removeItemFromBasket('bgl')

    expect(result).toEqual('ERROR: Please input a valid bagel sku.')
  })

  it('Create new basket with given capacity', () => {
    store.createBasket('new', 5)

    const result = store.baskets.new

    expect(result).toEqual({
      items: [],
      capacity: 5
    })
  })

  it('Create new basket with incorrect parameters', () => {
    const result = store.createBasket('new', [])

    expect(result).toEqual(
      "Error: Please input a valid name & capacity e.g. ('John's', 5)."
    )
  })

})