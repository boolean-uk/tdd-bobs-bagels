const Product = require('../../src/product.js')

describe('Product', () => {
  let product

  beforeEach(() => {
    product = new Product('BGLO', '0.49', 'Bagel', 'Onion')
  })

  it('should have a SKU', () => {
    expect(product.sku).toEqual('BGLO')
  })

  it('should have a price', () => {
    expect(product.price).toEqual('0.49')
  })

  it('should have a name', () => {
    expect(product.name).toEqual('Bagel')
  })

  it('should have a variant', () => {
    expect(product.variant).toEqual('Onion')
  })

  it('should return the price', () => {
    expect(product.getPrice()).toEqual('0.49')
  })
})
