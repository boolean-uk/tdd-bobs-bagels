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
