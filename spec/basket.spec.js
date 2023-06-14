const Basket = require('../src/basket.js')

describe('Testing Basket constructor', () => {
  it('New basket is an empty array', () => {
    // Setup
    const basket = new Basket()
    // Execution
    const expectedResponse = []
    // Check
    expect(basket.basket).toEqual(expectedResponse)
  })
})

describe('Testing addItem', () => {
  it('Item added to an empty basket', () => {
    // Setup
    const basket = new Basket()
    const testItem = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion',
      quantity: 1
    }
    // Execution
    const expectedResponse = new Basket()
    expectedResponse.basket.push(testItem)
    basket.addItem('BGLO')
    // Check
    expect(basket).toEqual(expectedResponse)
  })

  it('Item already exists in basket', () => {
    // Setup
    const basket = new Basket()
    const testItem = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion',
      quantity: 2
    }
    // Execution
    const expectedResponse = new Basket()
    expectedResponse.basket.push(testItem)
    basket.addItem('BGLO')
    basket.addItem('BGLO')
    // Check
    expect(basket).toEqual(expectedResponse)
  })

  it('Entered SKU not found', () => {
    // Setup
    const basket = new Basket()
    // Execution
    const response = basket.addItem('WRONG')
    // Check
    expect(response).toBe('Chosen item not found')
  })

  it('No SKU Entered', () => {
    // Setup
    const basket = new Basket()
    // Execution
    const response = basket.addItem()
    // Check
    expect(response).toBe('No SKU Entered')
  })

  it('Creating a basket with a custom size', () => {
    // Setup
    const basket = new Basket(15)
    // Execution
    const response = basket.size
    // Check
    expect(response).toBe(15)
  })

  it('Gives an error if size is < 0, non-integer or NaN. Creates basket with default size.', () => {
    // Setup
    const basketNonInteger = new Basket(8.5)
    const basketNegative = new Basket(-1)
    const basketNonNumber = new Basket('string')
    // Execution
    const responseNonInteger = basketNonInteger.size
    const responseNegative = basketNegative.size
    const responseNonNumber = basketNonNumber.size
    // Check
    expect(responseNonInteger).toBe(10)
    expect(responseNegative).toBe(10)
    expect(responseNonNumber).toBe(10)
  })

  it('Basket is full', () => {
    // Setup
    const basket = new Basket(1)
    basket.addItem('BGLO')
    // Execution
    const response = basket.addItem('BGLP')
    // Check
    expect(response).toBe('Basket is full. Item was not added.')
  })
})

describe('Testing removeItem', () => {
  it('Item removed successfully', () => {
    // Setup
    const basket = new Basket()
    basket.addItem('BGLO')
    basket.addItem('BGLP')
    // Execution
    const expectedResponse = new Basket()
    expectedResponse.addItem('BGLP')
    basket.removeItem('BGLO')
    // Check
    expect(basket).toEqual(expectedResponse)
  })

  it('Entered SKU not found', () => {
    // Setup
    const basket = new Basket()
    basket.addItem('BGLO')
    // Execution
    const response = basket.removeItem('WRONG')
    // Check
    expect(response).toBe('Chosen item not found')
  })

  it('No SKU entered', () => {
    // Setup
    const basket = new Basket()
    // Execution
    const response = basket.removeItem()
    // Check
    expect(response).toBe('No SKU entered')
  })
})

describe('Testing checkPrice', () => {
  it('SKU matches an inventory item', () => {
    // Setup
    const basket = new Basket()
    // Execution
    const expectedResponse = '0.99'
    const response = basket.checkPrice('COF')
    // Check
    expect(response).toBe(expectedResponse)
  })

  it('SKU is not correct or no SKU is given', () => {
    // Setup
    const basket = new Basket()
    // Execution
    const response = basket.checkPrice()
    // Check
    expect(response).toBe('Incorrect SKU. Item not found')
  })
})

describe('Testing addMultipleItems', () => {
  it('Item not already in basket', () => {
    // Setup
    const basket = new Basket()
    const testItem = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion',
      quantity: 3
    }
    // Execution
    const expectedResponse = new Basket()
    expectedResponse.basket.push(testItem)
    const response = basket.addMultipleItems('BGLO', 3)
    // Check
    expect(response).toEqual(expectedResponse.basket)
  })

  it('Item already in basket', () => {
    // Setup
    const basket = new Basket()
    basket.addItem('BGLO')
    const testItem = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion',
      quantity: 4
    }
    // Execution
    const expectedResponse = new Basket()
    expectedResponse.basket.push(testItem)
    const response = basket.addMultipleItems('BGLO', 3)
    // Check
    expect(response).toEqual(expectedResponse.basket)
  })

  it('SKU is not correct or no SKU is given or quantity not given', () => {
    // Setup
    const basket = new Basket()
    // Execution
    const response = basket.addMultipleItems()
    // Check
    expect(response).toBe('Incorrect SKU. Item not found')
  })

  it('If item will take basket above size, tell user what max they can add is', () => {
    // Setup
    const basketTwo = new Basket(2)
    const basketThree = new Basket(3)
    // Execution
    const responseTwo = basketTwo.addMultipleItems('BGLO', 5)
    const responseThree = basketThree.addMultipleItems('BGLO', 5)
    // Check
    expect(responseThree).toEqual('Basket size exceeded. Maximum of 3 allowed')
    expect(responseTwo).toEqual('Basket size exceeded. Maximum of 2 allowed')
  })
})

describe('Testing totalItems', () => {
  it('Checking count of items is correct', () => {
    // Setup
    const basket = new Basket()
    const testItem1 = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion',
      quantity: 4
    }
    const testItem2 = {
      sku: 'BGLP',
      price: '0.39',
      name: 'Bagel',
      variant: 'Plain',
      quantity: 3
    }
    // Execution
    basket.basket.push(testItem1)
    basket.basket.push(testItem2)
    const response = basket.totalItems()
    // Check
    expect(response).toBe(7)
  })
})

// eslint-disable-next-line prettier/prettier
/*
describe('', () => {
  it('', () => {
    // Setup

    // Execution

    // Check
  })
})
*/
