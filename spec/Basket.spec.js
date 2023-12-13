const BagelBasket = require('../src/basket.js')

describe('BagelBasket', () => {
  let basket
  const bagel1 = {
    sku: 'BGLO',
    price: '0.49',
    name: 'Bagel',
    variant: 'Onion'
  }
  const bagel2 = {
    sku: 'BGLP',
    price: '0.39',
    name: 'Bagel',
    variant: 'plain'
  }
  const bagel3 = {
    sku: 'BGLE',
    price: '0.49',
    name: 'Bagel',
    variant: 'Everything'
  }
  const bagel4 = {
    sku: 'BGLS',
    price: '0.49',
    name: 'Bagel',
    variant: 'Sesame'
  }
  const bagel5 = {
    sku: 'COF',
    price: '0.39',
    name: 'Coffee',
    variant: ''
  }
  const bagel6 = {
    sku: 'BGSE',
    price: '2.99',
    name: 'Bagel Sandwich',
    variant: 'Everything'
  }
  const bagel7 = {
    sku: 'BGSS',
    price: '4.99',
    name: 'Bagel',
    variant: 'Sesame'
  }
  beforeEach(() => {
    basket = new BagelBasket()
  })

  it('Add item to basket', () => {
    basket.addItem(bagel1)
    expect(basket.items).toContain(bagel1)
  })
  it('Add item to basket', () => {
    basket.addItem(bagel2)
    expect(basket.items).toContain(bagel2)
  })
  it('Add item to basket', () => {
    basket.addItem(bagel3)
    expect(basket.items).toContain(bagel3)
  })
  it('Add item to basket', () => {
    basket.addItem(bagel4)
    expect(basket.items).toContain(bagel4)
  })
  it('Add item to basket', () => {
    basket.addItem(bagel5)
    expect(basket.items).toContain(bagel5)
  })
  it('Add item to basket', () => {
    basket.addItem(bagel6)
    expect(basket.items).toContain(bagel6)
  })
  it('Add item to basket', () => {
    basket.addItem(bagel7)
    expect(basket.items).toContain(bagel7)
  })
})
