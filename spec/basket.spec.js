const BasketList = require('../src/basket.js')

describe('basketList', () => {
  it('Add a new item1', () => {
    const input = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    }
    const basket = new BasketList()
    const result = basket.addToBasket(input)
    expect(result).toEqual(true)
  })
  it('Add same type', () => {
    const input1 = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    }
    const input2 = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    }
    const basket = new BasketList()
    const result = basket.compareItems(basket)
    expect(result).toEqual(true)
  })
  it('Remove item', () => {
    const basket = new BasketList()
    basket.addToBasket({
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    })
    basket.addToBasket({
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    })
    const result = basket.RemoveFromBasket(basket)
    expect(result).toEqual(true)
  })
  it('Full cart', () => {
    const basket = new BasketList()
    basket.addToBasket({
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    })
    basket.addToBasket({
      sku: 'BGLE',
      price: '0.49',
      name: 'Bagel',
      variant: 'Everything'
    })
    basket.addToBasket({
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    })
    const result = basket.isBasketFull()
    expect(result).toEqual(true)
  })
  it('itemCheck', () => {
    const basket = new BasketList()
    basket.addToBasket({
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    })
    basket.addToBasket({
      sku: 'DEF',
      price: '0.99',
      name: 'Bagel',
      variant: ''
    })
    const results = basket.itemCheck({ sku: 'DEF' })
    expect(results).toEqual(true)
  })
  it('Price of items', () => {
    const basket = new BasketList()
    const item = {
      sku: 'DEF',
      price: '0.99',
      name: 'Bagel',
      variant: ''
    }

    const priceBeforeAdding = basket.itemPrice(item)
    expect(priceBeforeAdding).toEqual(true)
  })
})
