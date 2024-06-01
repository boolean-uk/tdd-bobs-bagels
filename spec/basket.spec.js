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

  it('should have an empty basket[] before adding bagels', () => {
    expect(smallBasket.basket.length).toBe(0)
  })

  it('should add baggels to basket[] using sku and qty', () => {
    smallBasket.addBagels('BGLO', 1)
    expect(smallBasket.basket.length).toBe(1)
    expect(smallBasket.basket[0].sku).toBe('BGLO')
    expect(smallBasket.basket[0].qty).toBe(1)

    smallBasket.addBagels('BGLO', 1)
    expect(smallBasket.basket.length).toBe(2)
    expect(smallBasket.basket[1].sku).toBe('BGLO')
    expect(smallBasket.basket[1].qty).toBe(1)
  })

  it('should add multiple same-type bagels and should throw an error "Basket is full" if basket size is exceeded when adding bagels of any kind beyond basket capacity', () => {
    smallBasket.addBagels('BGLP', 3)
    expect(smallBasket.basket.length).toBe(3)
    expect(smallBasket.basket[0].sku).toBe('BGLP')

    smallBasket.addBagels('BGLP', 1)
    expect(smallBasket.basket.length).toBe(4)
    expect(smallBasket.basket[0].sku).toBe('BGLP')

    smallBasket.addBagels('BGLO', 1)
    expect(smallBasket.basket.length).toBe(5)
    expect(smallBasket.basket[4].sku).toBe('BGLO')

    expect(() =>
      smallBasket.addBagels('BGLP', 2).toThrowError(`Basket is full`)
    )
  })
})
