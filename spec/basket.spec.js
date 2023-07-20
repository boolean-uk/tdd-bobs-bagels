const { Bagel } = require('../src/bagel')
const { Basket } = require('../src/basket')

describe('constructor', () => {
  it('should throw for non positive capacity', function () {
    expect(() => new Basket(0)).toThrow()
    expect(() => new Basket(-1)).toThrow()
  })

  it('should create instance for positive capacity', function () {
    let defaultBasket
    let basket

    expect(() => (defaultBasket = new Basket())).not.toThrow()
    expect(() => (basket = new Basket(20))).not.toThrow()

    const emptyMap = new Map()

    expect(defaultBasket.capacity).toEqual(10)
    expect(defaultBasket.bagels).toEqual(emptyMap)
    expect(basket.capacity).toEqual(20)
    expect(basket.bagels).toEqual(emptyMap)
  })
})

describe('addBagel', () => {
  let basket, bagel

  beforeAll(() => {
    bagel = new Bagel('test', 1)
  })

  beforeEach(() => {
    basket = new Basket(3)
  })

  it('should add bagel', function () {
    expect(() => basket.addBagel(bagel)).not.toThrow()
    expect([...basket.bagels.entries()].length).toEqual(1)
    expect(basket.bagels.get(bagel)).toEqual(1)
  })

  it('should add two bagels', function () {
    expect(() => basket.addBagel(bagel, 2)).not.toThrow()
    expect([...basket.bagels.entries()].length).toEqual(1)
    expect(basket.bagels.get(bagel)).toEqual(2)
  })

  it('should not add bagel if basket is full', function () {
    expect(() => basket.addBagel(bagel, 4)).toThrow()
  })
})

describe('removeBagel', () => {
  let basket, bagel

  beforeAll(() => {
    bagel = new Bagel('test', 1)
  })

  beforeEach(() => {
    basket = new Basket()
  })

  it('should remove bagel', () => {
    basket.addBagel(bagel, 10)
    expect(() => basket.removeBagel(bagel)).not.toThrow()
    expect([...basket.bagels.entries()].length).toEqual(1)
    expect(basket.bagels.get(bagel)).toEqual(9)
    expect(() => basket.removeBagel(bagel, 9)).not.toThrow()
    expect([...basket.bagels.entries()].length).toEqual(1)
    expect(basket.bagels.get(bagel)).toEqual(0)
  })

  it('should throw when trying to remove more bagels than present in basket', () => {
    expect(() => basket.removeBagel(new Bagel('test', 2))).toThrow()
    expect(() => basket.removeBagel(bagel, 11)).toThrow()
  })
})

describe('bagelAmount', () => {
  let basket, bagel

  beforeAll(() => {
    bagel = new Bagel('test', 1)
  })

  beforeEach(() => {
    basket = new Basket()
  })

  it('should correctly calculate amount of bagels in basket', () => {
    expect(basket.bagelAmount()).toEqual(0)
    basket.addBagel(bagel, 5)
    expect(basket.bagelAmount()).toEqual(5)
    basket.addBagel(new Bagel('test', 2), 3)
    expect(basket.bagelAmount()).toEqual(8)
  })
})

describe('totalCost', () => {
  let basket, bagel

  beforeAll(() => {
    bagel = new Bagel('test', 1.25)
  })

  beforeEach(() => {
    basket = new Basket()
  })

  it('should correctly calculate price', () => {
    expect(basket.totalCost()).toEqual(0)
    basket.addBagel(bagel, 5)
    expect(basket.totalCost()).toEqual(5 * 1.25)
    basket.addBagel(new Bagel('test', 3.2), 3)
    expect(basket.totalCost()).toEqual(5 * 1.25 + 3 * 3.2)
  })
})
