const Basket = require('../src/basket')
const Item = require("../src/item")
const CashRegister = require("../src/cashRegister")

describe('Basket', () => {
    it('should add an item to basket', () => {
        const basket = new Basket()
        const item = new Item('BGLP')
        const expected = [item]
        const result = basket.add(item)
        expect(result).toEqual(expected)
    })

    it('should add multiples of the same item to basket', () => {
        const basket = new Basket()
        const item = new Item('BGLP', 3)
        const expected = 3
        basket.add(item)
        const result = basket.items[0].quantity
        expect(result).toEqual(expected)
    })

    it('should tell the user when basket is full', () => {
        const basket = new Basket()
        const item1 = new Item('BGLP', 16)
        const expected = 'Sorry, your basket is already full.'
        const result = basket.add(item1)
        expect(result).toEqual(expected)
    })

    it('should remove an item from basket', () => {
        const basket = new Basket()
        const item1 = new Item('BGLP')
        const item2 = new Item('BGLO')
        const expected = [item2]
        basket.add(item1)
        basket.add(item2)
        const result = basket.remove('BGLP')
        expect(result).toEqual(expected)
    })

    it('should tell the user when item is not in the basket', () => {
        const basket = new Basket()
        const item = new Item('BGLP')
        const expected = 'Sorry, that item is not in the basket'
        basket.add(item)
        const result = basket.remove('BGLO')
        expect(result).toEqual(expected)
    })

    it('should set a new basket capacity', () => {
        const basket = new Basket()
        const expected = 20
        const result = basket.setCapacity(20)
        expect(result).toEqual(expected)
    })
})

describe('Item', () => {
    it('should get the price of the item', () => {
        const item = new Item('BGLP')
        const expected = 0.39
        const result = item.getPrice()
        expect(result).toEqual(expected)
    })
})

describe('CashRegister', () => {
    it('should apply special offer for 12 plain bagel', () => {
        const basket = new Basket()
        const bagel = new Item('BGLP', 12)
        const expected = 3.99
        basket.add(bagel)
        const cashRegister = new CashRegister(basket.items)
        const result = cashRegister.getTotalPrice()
        expect(result).toEqual(expected)
    })

    it('should apply special offer for 6 onion bagel', () => {
        const basket = new Basket()
        const bagel = new Item('BGLO', 6)
        const expected = 2.49
        basket.add(bagel)
        const cashRegister = new CashRegister(basket.items)
        const result = cashRegister.getTotalPrice()
        expect(result).toEqual(expected)
    })

    it('should apply special offer for 6 everything bagel', () => {
        const basket = new Basket()
        const bagel = new Item('BGLE', 6)
        const expected = 2.49
        basket.add(bagel)
        const cashRegister = new CashRegister(basket.items)
        const result = cashRegister.getTotalPrice()
        expect(result).toEqual(expected)
    })

    it('should apply multiple special offers', () => {
        const basket = new Basket()
        const bagelE = new Item('BGLE', 6)
        const bagelO = new Item('BGLO', 6)
        const expected = 4.98
        basket.add(bagelE)
        basket.add(bagelO)
        const cashRegister = new CashRegister(basket.items)
        const result = cashRegister.getTotalPrice()
        expect(result).toEqual(expected)
    })

    it('should discount only the bagels bundled in a special offer', () => {
        const basket = new Basket()
        const bagelE = new Item('BGLE', 9)
        const expected = 3.96
        basket.add(bagelE)
        const cashRegister = new CashRegister(basket.items)
        const result = cashRegister.getTotalPrice()
        expect(result).toEqual(expected)
    })

    it('should get the total price of the items in the basket', () => {
        const basket = new Basket()
        const item = new Item('BGLP', 3)
        const expected = 1.17
        basket.add(item)
        const cashRegister = new CashRegister(basket.items)
        const result = cashRegister.getTotalPrice()
        expect(result).toEqual(expected)
    })
})