const { BasketItem, Basket } = require('../src/basket.js')
const inventory = require('../inventory.json')

describe('add to basket', () => {
  it('the item, which was not already in the basket, is added', () => {
    const basketItem1 = new BasketItem(inventory.inventory[0])
    const basketItem2 = new BasketItem(inventory.inventory[1])
    const basket1 = new Basket([basketItem1, basketItem2])

    const basketItemToAdd = new BasketItem(inventory.inventory[2])

    const result = basket1.addToBasket(basketItemToAdd)

    expect(result.length).toEqual(3)
    expect(result[2].sku).toEqual('BGLE')
  })

  it('the item is already in the basket', () => {
    const basketItem1 = new BasketItem(inventory.inventory[0])
    const basketItem2 = new BasketItem(inventory.inventory[1])
    const basket1 = new Basket([basketItem1, basketItem2])

    const result = basket1.addToBasket(basketItem1)
    const expected = 'this item is already in your basket!'

    expect(result).toEqual(expected)
  })
})

describe('remove from basket', () => {
  it('item succesfully removed', () => {
    const basketItem1 = new BasketItem(inventory.inventory[0])
    const basketItem2 = new BasketItem(inventory.inventory[1])
    const basket1 = new Basket([basketItem1, basketItem2])

    const result = basket1.removeItem(basketItem1)

    expect(result.length).toEqual(1)
    expect(result[0].sku).toEqual('BGLP')
  })

  it('basket is empty', () => {
    const basketItem1 = new BasketItem(inventory.inventory[0])
    const basket1 = new Basket([])
    const result = basket1.removeItem(basketItem1)

    expect(result).toEqual('nothing to remove, your basket is empty')
  })

  describe('check whether the basket is full', () => {
    it('the basket is full', () => {
      const basketItem1 = new BasketItem(inventory.inventory[0])
      const basketItem2 = new BasketItem(inventory.inventory[1])
      const basket1 = new Basket([basketItem1, basketItem2], 2)

      const result = basket1.isBasketFull()
      expect(result).toEqual('the basket is full! (2/2)')
    })
  })

  it('the basket is not full', () => {
    const basketItem1 = new BasketItem(inventory.inventory[0])

    const basket1 = new Basket([basketItem1], 2)

    const result = basket1.isBasketFull()
    expect(result).toEqual('the basket is not full yet (1/2)')
  })
})

describe('set the capacity of the basket', () => {
  it('the capacity was set successfully', () => {
    const basket1 = new Basket([], 2)
    const result = basket1.setCapacity(5)
    expect(result).toEqual({ list: [], capacity: 5 })
  })
  it('invalid number - the capacity is unchanged', () => {
    const basket1 = new Basket([], 2)
    const result = basket1.setCapacity(-3)
    expect(result).toEqual('invalid number - capacity remains 2')
  })
})

describe('check that the item to be removed is in the basket', () => {
  it('item found', () => {
    const basketItem1 = new BasketItem(inventory.inventory[0])
    const basketItem2 = new BasketItem(inventory.inventory[1])
    const basket1 = new Basket([basketItem1, basketItem2])

    const result = basket1.checkForItemToRemove(basketItem2)

    expect({
      sku: result.sku,
      price: result.price,
      name: result.name,
      variant: result.variant
    }).toEqual({
      sku: 'BGLP',
      price: '0.39',
      name: 'Bagel',
      variant: 'Plain'
    })
  })

  it('no such item found', () => {
    const basketItem1 = new BasketItem(inventory.inventory[0])
    const basketItem2 = new BasketItem(inventory.inventory[1])
    const basketItem3 = new BasketItem(inventory.inventory[2])
    const basket1 = new Basket([basketItem1, basketItem2])

    const result = basket1.checkForItemToRemove(basketItem3)

    expect(result).toEqual('no such item in the basket!')
  })
})

describe('display item price property', () => {
  it('exists', () => {
    const basketItem1 = inventory.inventory[4]
    const result = basketItem1.displayItemPrice()
    expect(result).toBe('0.99')
  })
  it('does not exist', () => {
    const basketItem2 = {
      sku: 'BGLO',
      price: undefined,
      name: 'Bagel',
      variant: 'Onion'
    }
    const result = basketItem2.displayItemPrice()
    expect(result).toEqual('price unknown - please message the seller')
  })
})
