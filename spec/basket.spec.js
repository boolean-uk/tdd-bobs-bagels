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
        variant: "Onion",
        quantity: 1
      }])
  })

  it('Add valid item to basket that is already in', () => {
    // Given
    const basket = new Basket()
    const item = 'BGLO'
    // When
    basket.addToBasket(item)
    const result = basket.addToBasket(item)

    // Then
    expect(result).toEqual([{
        sku: "BGLO",
        price: "0.49",
        name: "Bagel",
        variant: "Onion",
        quantity: 2
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

  it('Remove invalid item to basket', () => {
    // Given
    const basket = new Basket()
    const item1 = ""
    const item2 = null
    const item3 = undefined
    const item4 = "abc"
    // When
    const result1 = basket.removeBasket(item1)
    const result2 = basket.removeBasket(item2)
    const result3 = basket.removeBasket(item3)
    const result4 = basket.removeBasket(item4)

    // Then
    expect(result1).toEqual('ERROR: Please type in an item')
    expect(result2).toEqual('ERROR: Please type in an item')
    expect(result3).toEqual('ERROR: Please type in an item')
    expect(result4).toEqual('ERROR: Item not found')

  })

  it('Remove item from basket where quantity is > 1', () => {
    // Given
    const basket = new Basket()
    const item = "BGLO"

    // When
    basket.addToBasket(item)
    basket.addToBasket(item)

    const result = basket.removeBasket(item)
    // Then
    expect(result).toEqual([{
      sku: "BGLO",
      price: "0.49",
      name: "Bagel",
      variant: "Onion",
      quantity: 1
    }])

  })

  it('Add item but basket is full', () => {
    // Given
    const basket = new Basket()
    const item = "BGLO"

    // When
    basket.addToBasket(item)
    basket.addToBasket(item)
    basket.addToBasket(item)
    basket.addToBasket(item)
    basket.addToBasket(item)
    const result = basket.addToBasket(item)
    
    // Then
    expect(result).toEqual("Basket is full")
  })

  it('Manager increases capacity of basket', () => {
    // Given
    const basket = new Basket("Bob")

    // When
    const result = basket.changeSizeBasket(10)

    // Then
    expect(result).toEqual("Basket capacity changed to 10")
  })

  it('User not a manager tries to increase capacity of basket', () => {
    // Given
    const basket = new Basket("Tina")

    // When
    const result = basket.changeSizeBasket(10)

    // Then
    expect(result).toEqual("Only the manager is authorised to change basket size!")
  })

  it('User asks for price of item', () => {
    // Given
    const basket = new Basket("Tina")

    // When
    const result = basket.checkPrice("BGLO")

    // Then
    expect(result).toEqual("The price of the Onion Bagel is £0.49")
  })

  it('User asks for price of invalid', () => {
    // Given
    const basket = new Basket()
    const item1 = ""
    const item2 = null
    const item3 = undefined
    const item4 = "abc"
    // When
    const result1 = basket.checkPrice(item1)
    const result2 = basket.checkPrice(item2)
    const result3 = basket.checkPrice(item3)
    const result4 = basket.checkPrice(item4)

    // Then
    expect(result1).toEqual('ERROR: Please type in an item')
    expect(result2).toEqual('ERROR: Please type in an item')
    expect(result3).toEqual('ERROR: Please type in an item')
    expect(result4).toEqual('ERROR: Item not found')

  })

  it('User requests total number of bagels in their basket', () => {
    // Given
    const basket = new Basket()
    const item1 = "BGLO"
    const item2 = "BGLP"

    // When
    basket.addToBasket(item1)
    basket.addToBasket(item1)
    basket.addToBasket(item2)
    const result = basket.checkNumberBasket()

    // Then
    expect(result).toEqual('You have 3 bagels in your basket')


  })

  it('User requests total cost of bagels in their basket', () => {
    // Given
    const basket = new Basket()
    const item1 = "BGLO"
    const item2 = "BGLP"

    // When
    basket.addToBasket(item1)
    basket.addToBasket(item1)
    basket.addToBasket(item2)
    const result = basket.checkBasketPrice()

    // Then
    expect(result).toEqual('The price of your basket is £1.37')
  })
})
