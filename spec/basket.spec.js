import Basket, { Bagel } from '../src/basket.js'

describe('Bagel', () => {
  let bagel
  // let noBgl

  beforeEach(() => {
    bagel = new Bagel('BGLO', 2)
    // noBgl = new Bagel('tst',1)
  })

  it('should exist', () => {
    expect(bagel).toBeInstanceOf(Bagel)
  })

  it('should have properties -sku -qty -name -price -variant', () => {
    expect(bagel.sku).toBe('BGLO')
    expect(bagel.qty).toBe(2)
    expect(bagel.price).toBe(0.49)
    expect(bagel.name).toBe('Bagel')
    expect(bagel.variant).toBe('Onion')
  })

  // it('should throw an error if incorrect sku is passed', () => {
  //   const noBgl = new Bagel('test', 3)
  //   expect(() =>
  //     noBgl.toThrowAnyError(`Bagel with SKU ${this.sku} not found.`)
  //   )
  // })
})

describe('Basket', () => {
  let basket
  let largeBasket


  beforeEach(() => {
    basket = new Basket(5)
    largeBasket = new Basket(10)

  })

  it('should exist', () => {
    expect(basket).toBeInstanceOf(Basket)
  })

  it('should have a basketSize 5', () => {
    expect(basket.basketSize).toBe(5)
  })

  it('should have an empty bagelsIn array before adding bagels', () => {
    expect(basket.bagelsIn.length).toBe(0)
  })

  it('should add baggels to bagelsIn[] using sku and qty', () => {
    expect(basket.bagelsIn.length).toBe(1)
  })
})
