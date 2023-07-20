const { Bagel, validateBagel } = require("../src/bagel")
const { Basket } = require("../src/basket")

describe('constructor', () => {
    it('should throw for non positive capacity', function () {
        expect(() => new Basket(0)).toThrow()
        expect(() => new Basket(-1)).toThrow()
    })

    it('should create instance for positive capacity', function () {
        let defaultBasket
        let basket

        expect(() => defaultBasket = new Basket()).not.toThrow()
        expect(() => basket = new Basket(20)).not.toThrow()

        const emptyMap = new Map()

        expect(defaultBasket.capacity).toEqual(10)
        expect(defaultBasket.bagels).toEqual(emptyMap)
        expect(basket.capacity).toEqual(20)
        expect(basket.bagels).toEqual(emptyMap)
    })
  })
  

describe('addBagel', () => {
    const basket = new Basket(3)
    const bagel = new Bagel("test", 1)

    it('should add bagel', function () {
        expect(() => basket.addBagel(bagel)).not.toThrow()
        expect([...basket.bagels.entries()].length).toEqual(1)
        expect(basket.bagels.get(bagel)).toEqual(1)
    })

    it('should add two bagels', function () {
        expect(() => basket.addBagel(bagel, 2)).not.toThrow()
        expect([...basket.bagels.entries()].length).toEqual(1)
        expect(basket.bagels.get(bagel)).toEqual(3)
    })

    it('should not add bagel if basket is full', function () {
        expect(() => basket.addBagel(bagel)).toThrow()
    })
  })
  