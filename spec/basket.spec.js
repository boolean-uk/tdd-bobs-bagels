const Basket = require('./../src/basket')

describe("Bob's Bagel's, ", () => {
  it('Adds an item to the basket', () => {
    // SETUP: Define the inputs that I want to test
    // Input is an object
    const bagel = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    }

    // EXECUTE: Pass the inputs to the code I want to test,
    //    making it run to get some sort of result.

    const basket = new Basket()
    const result = basket.addToBasket(bagel)
    expect(result).toEqual(true)
  })

  it('Removes an item from basket', () => {
    // SETUP: Define the inputs that I want to test
    // Input is an object
    const basket = [
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      }
    ]

    // EXECUTE: Pass the inputs to the code I want to test,
    //    making it run to get some sort of result.

    const basketInstance = new Basket(basket)
    const result = basketInstance.removeFromBasket(basket[1].sku)
    expect(result).toEqual(true)
  })
})
