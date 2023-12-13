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
    const result = basket.inventory

    expect(result[0].sku).toEqual('AAAA')
    expect(result[1].sku).toEqual('BBBB')
    expect(result[2].sku).toEqual('CCCC')
    expect(result[0].price).toEqual('5')
    expect(result[1].price).toEqual('10')
    expect(result[2].price).toEqual('15')
    expect(result[0].name).toEqual('Donut')
    expect(result[1].name).toEqual('Lettuce')
    expect(result[2].name).toEqual('Tomato')
  })
})
