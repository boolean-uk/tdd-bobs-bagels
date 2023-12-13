const { BasketItem, Basket } = require('../src/basket.js')

describe('add to basket', () => {
  it('the item, which was not already in the basket, is added', () => {
    const basketItem1 = new BasketItem('BGLO', '0.49', 'Bagel', 'Onion')
    const basketItem2 = new BasketItem('BGLP', '0.39', 'Bagel', 'Plain')
    const basket1 = new Basket([basketItem1, basketItem2])

    const basketItemToAdd = new BasketItem(
      'BGLE',
      '0.49',
      'Bagel',
      'Everything'
    )

    const result = basket1.addToBasket(basketItemToAdd)

    expect(result.length).toEqual(3)
    expect(result[2].sku).toEqual('BGLE')
  })

  it('the item is already in the basket', () => {
    const basketItem1 = new BasketItem('BGLO', '0.49', 'Bagel', 'Onion')
    const basketItem2 = new BasketItem('BGLP', '0.39', 'Bagel', 'Plain')
    const basket1 = new Basket([basketItem1, basketItem2])

    const result = basket1.addToBasket(basketItem1)
    const expected = 'this item is already in your basket!'

    expect(result).toEqual(expected)
  })
})
