// import here
import Basket from '../src/basket.js';
// eslint-disable-next-line no-use-before-define
import inventory from '../inventory.json' assert { type: 'json' }; 

const store = inventory.inventory

describe('Basket', () => {
  it('Add valid item to basket', () => {
    // Given
    const basket = new Basket()
    const item = 'BGLO'
    // When
    const result = basket.addToBasket(item)

    // Then
    expect(result).toEqual([{
        sku: "BGLO",
        price: "0.49",
        name: "Bagel",
        variant: "Onion"
      }])
  })

  it('Add invalid item to basket', () => {
    // Given
    const basket = new Basket()
    const item1 = ""
    const item2 = null
    const item3 = undefined
    const item4 = "abc"
    // When
    const result1 = basket.addToBasket(item1)
    const result2 = basket.addToBasket(item2)
    const result3 = basket.addToBasket(item3)
    const result4 = basket.addToBasket(item4)

    // Then
    expect(result1).toEqual('ERROR: Please type in an item')
    expect(result2).toEqual('ERROR: Please type in an item')
    expect(result3).toEqual('ERROR: Please type in an item')
    expect(result4).toEqual('ERROR: Item not found')

  })

  it('Remove item from basket', () => {
    // Given
    const basket = new Basket()
    const item = "BGLO"

    // When
    basket.addToBasket(item)
    const result = basket.removeBasket(item)
    // Then
    expect(result).toEqual([])

  })

  it('Remove item not in basket', () => {
    // Given
    const basket = new Basket()
    const item = "BGLO"
    const item2 = "BGLP"

    // When
    basket.addToBasket(item)
    const result = basket.removeBasket(item2)
    // Then
    expect(result).toEqual('ERROR: Item not in basket')
  })

  it('Add invalid item to basket', () => {
    // Given
    const basket = new Basket()
    const item1 = ""
    const item2 = null
    const item3 = undefined
    const item4 = "abc"
    // When
    const result1 = basket.addToBasket(item1)
    const result2 = basket.addToBasket(item2)
    const result3 = basket.addToBasket(item3)
    const result4 = basket.addToBasket(item4)

    // Then
    expect(result1).toEqual('ERROR: Please type in an item')
    expect(result2).toEqual('ERROR: Please type in an item')
    expect(result3).toEqual('ERROR: Please type in an item')
    expect(result4).toEqual('ERROR: Item not found')

  })
})
