const Basket = require('../src/basket.js')
const Product = require('../src/product.js')

describe('Basket test - core', () => {
  it('should add product to basket', function () {
    const basket = new Basket(5)
    const bagel = new Product('plain', 0.49)
    basket.addProduct(bagel)

    expect(basket.products.length).toEqual(1)
  })

  it('should throw exception if basket capacity exceeded', function () {
    const basket = new Basket(1)
    const bagel1 = new Product('plain', 0.49)
    const bagel2 = new Product('plain', 0.49)
    basket.addProduct(bagel1)
    expect(() => basket.addProduct(bagel2)).toThrowError('Capacity exceeded')
  })

  it('should remove product from basket', function () {
    const basket = new Basket(5)
    const bagel = new Product('plain', 0.49)
    basket.addProduct(bagel)
    basket.removeBagel(bagel)

    expect(basket.products.length).toEqual(0)
  })

  it('should extend basket capacity', function () {
    const basket = new Basket(5)
    const newCapacity = 10
    basket.changeCapacity(newCapacity)

    expect(basket.capacity).toEqual(newCapacity)
  })

  it('should throw error if new capacity is smaller than products amount', function () {
    const basket = new Basket(5)
    const bagel1 = new Product('Plain', 0.49)
    const bagel2 = new Product('Egg', 0.49)
    basket.addProduct(bagel1)
    basket.addProduct(bagel2)
    const newCapacity = 1

    expect(() => basket.changeCapacity(newCapacity)).toThrowError(
      'You capacity cannot be smaller than products amount'
    )
  })

  it('should throw error when trying to remove item not stored in basket', function () {
    const basket = new Basket(1)
    const bagel = new Product('Plain', 0.49)

    expect(() => basket.removeBagel(bagel)).toThrowError(
      'Item is not in basket'
    )
  })

  it('should be able to add the same bagels to cart', function () {
    const basket = new Basket(5)
    const bagel = new Product('plain', 0.49)
    basket.addProduct(bagel)
    basket.addProduct(bagel)
    basket.addProduct(bagel)

    expect(basket.products.length).toEqual(3)
  })

  it('should calculate total of basket', function () {
    const basket = new Basket(5)
    const bagel1 = new Product('BGLP', 'plain', 0.49)
    const bagel2 = new Product('BGLP', 'plain', 0.39)
    const bagel3 = new Product('BGLO', 'plain', 0.49)
    basket.addProduct(bagel1)
    basket.addProduct(bagel2)
    basket.addProduct(bagel3)

    expect(basket.getTotal()).toEqual(1.37)
  })
})
