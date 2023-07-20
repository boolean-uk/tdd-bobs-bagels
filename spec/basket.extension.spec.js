const Basket = require('../src/basket.js')
const Product = require('../src/product.js')

describe('Basket test - extension', () => {
  it('should calculate total of basket with discount', function () {
    const basket = new Basket(6)
    const bagel1 = new Product('BGLO', 'Onion', 0.49)

    basket.addProduct(bagel1)
    basket.addProduct(bagel1)
    basket.addProduct(bagel1)
    basket.addProduct(bagel1)
    basket.addProduct(bagel1)
    basket.addProduct(bagel1)

    expect(basket.getTotal()).toEqual(2.49)
  })

  it('should calculate total of basket with 6 discounted bagel and 1 without', function () {
    const basket = new Basket(7)
    const bagel1 = new Product('BGLO', 'Onion', 0.49)

    basket.addProduct(bagel1)
    basket.addProduct(bagel1)
    basket.addProduct(bagel1)
    basket.addProduct(bagel1)
    basket.addProduct(bagel1)
    basket.addProduct(bagel1)
    basket.addProduct(bagel1)

    expect(basket.getTotal()).toEqual(2.98)
  })

  it('should calculate total of basket with multiple discounts', function () {
    const basket = new Basket(20)
    const bagel1 = new Product('BGLO', 'Onion', 0.49)
    const bagel2 = new Product('BGLP', 'Plain', 0.39)

    basket.addProducts(bagel1, 6)
    basket.addProducts(bagel2, 12)

    expect(basket.getTotal()).toEqual(3.99 + 2.49)
  })

  it('should calculate total of basket with multiple discounts and stock prices', function () {
    const basket = new Basket(25)
    const bagel1 = new Product('BGLO', 'Onion', 0.49)
    const bagel2 = new Product('BGLP', 'Plain', 0.39)

    basket.addProducts(bagel1, 6)
    basket.addProducts(bagel2, 12)
    basket.addProducts(bagel2, 3)
    basket.addProducts(bagel1, 3)

    expect(basket.getTotal()).toEqual(9.12)
  })

  it('should prepare summary', function () {
    const basket = new Basket(30)
    const bagel1 = new Product('BGLO', 'Onion', 0.49)
    const bagel2 = new Product('BGLP', 'Plain', 0.39)
    const coffee = new Product('COFW', 'White', 0.99)

    basket.addProducts(bagel1, 6)
    basket.addProducts(bagel2, 12)
    basket.addProducts(bagel2, 3)
    basket.addProducts(bagel1, 3)
    basket.addProducts(coffee, 2)

    console.log(basket.generateReceipt())
  })

  it('should return proper date format', function () {
    const date = Basket.getCurrentDateTime(new Date('2022-06-17T11:06:50.369Z'))

    expect(date).toEqual('2022-06-17 13:06:50')
  })

  it('should throw error if arg is not a date', function () {
    expect(() =>
      Basket.getCurrentDateTime('2022-06-17T11:06:50.369Z')
    ).toThrowError("It's not a date")
  })
})
