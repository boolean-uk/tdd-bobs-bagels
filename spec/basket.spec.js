const Basket = require('../src/basket.js')

describe('add bagel to basket', () => {
  const basket = new Basket()

  it('add items to basket', () => {
    const result = basket.add('BGLO')

    expect(basket.list[0].sku).toEqual('BGLO')
  })
})

describe('find item in inventory', () => {
  const basket = new Basket()

  beforeEach(() => {
    basket._inventory = [
      {
        sku: 'AAAA',
        price: '5',
        name: 'Donut',
        variant: 'Sesame'
      },
      {
        sku: 'BBBB',
        price: '10',
        name: 'Lettuce',
        variant: ''
      },
      {
        sku: 'CCCC',
        price: '15',
        name: 'Tomato',
        variant: ''
      }
    ]
  })

  it('find items in inventory', () => {
    const result = basket.findInventoryItem('AAAA')

    expect(result.sku).toEqual('AAAA')
    expect(result.price).toEqual('5')
    expect(result.name).toEqual('Donut')
    expect(result.variant).toEqual('Sesame')
  })

  it('sku not found in inventory', () => {
    const result = basket.findInventoryItem('DDDD')

    expect(result).toEqual('item not found')
  })
})
