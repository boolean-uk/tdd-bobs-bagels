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
  let smallBasket
  let largeBasket

  beforeEach(() => {
    smallBasket = new Basket(5)
    largeBasket = new Basket(10)
  })

  it('should exist', () => {
    expect(smallBasket).toBeInstanceOf(Basket)
  })

  it('basket should have a basketSize 5', () => {
    expect(smallBasket.basketSize).toBe(5)
  })

  it('largeBasket to have a size of 10', () => {
    expect(largeBasket.basketSize).toBe(10)
  })

  it('should have an empty bagelsIn[] before adding bagels', () => {
    expect(smallBasket.bagelsIn.length).toBe(0)
  })

  it('should add baggels to bagelsIn[] using sku and qty', () => {
    smallBasket.addBagels('BGLO', 1)
    expect(smallBasket.bagelsIn.length).toBe(1)
    expect(smallBasket.bagelsIn[0].sku).toBe('BGLO')
    expect(smallBasket.bagelsIn[0].qty).toBe(1)

    smallBasket.addBagels('BGLO', 1)
    expect(smallBasket.bagelsIn.length).toBe(2)
    expect(smallBasket.bagelsIn[1].sku).toBe('BGLO')
    expect(smallBasket.bagelsIn[1].qty).toBe(1)
  })

  it('should throw an error "Basket is full" if basket size is exceeded when adding bagels beyond basket capacity', () => {
    basket.addBagels('BGLP', 3)
    console.log(basket);
    expect(basket.bagelsIn.length).toBe(3)
    expect(basket.bagelsIn[0].sku).toBe('BGLP')

    // expect(() => basket.addBagels('BGLP', 2).toThrowError(`Basket is full`))
    // expect(() => basket.addBagels('BGLP', 2).toThrowError(`Basket is full`))
  })
})
