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

  it('Incorrect SKU Entered', () => {
    // Setup
    const basket = new Basket()
    // Execution
    const response = basket.addItem('WRONG')
    // Check
    expect(response).toBe('Added item not found')
  })

  it('No SKU Entered', () => {
    // Setup
    const basket = new Basket()
    // Execution
    const response = basket.addItem()
    // Check
    expect(response).toBe('No SKU Entered')
  })
})

// eslint-disable-next-line prettier/prettier
    // Setup

// Execution

// Check
