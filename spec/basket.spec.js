const Basket = require('../src/basket')
const Item = require("../src/item")

describe('Basket', () => {
    it('should add an item to basket', () => {
        const basket = new Basket()
        const item = new Item()
        const expected = [item]
        const result = basket.add(item)
        expect(result).toEqual(expected)
    })
})