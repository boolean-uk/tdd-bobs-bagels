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
  it('Item added successfully', () => {
    // Setup
    const basket = new Basket()
    const testItem = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    }
    // Execution
    const expectedResponse = new Basket()
    expectedResponse.basket.push(testItem)
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
    const basket = new Basket(8)
    // Execution
    const response = basket.size
    // Check
    expect(response).toBe(8)
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
    expect(responseNonInteger).toBe(5)
    expect(responseNegative).toBe(5)
    expect(responseNonNumber).toBe(5)
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
    const testItem = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    }
    basket.basket.push(testItem)
    // Execution
    const expectedResponse = new Basket()
    basket.removeItem('BGLO')
    // Check
    expect(basket).toEqual(expectedResponse)
  })

  it('Entered SKU not found', () => {
    // Setup
    const basket = new Basket()
    const testItem = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    }
    basket.basket.push(testItem)
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
