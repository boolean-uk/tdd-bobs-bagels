const Basket = require('../src/basket')
const Item = require("../src/item")

describe('Basket', () => {
    it('should add an item to basket', () => {
        const basket = new Basket()
        const item = new Item(1, 'Bagel')
        const expected = [item]
        const result = basket.add(item)
        expect(result).toEqual(expected)
    })

    it('should remove an item from basket', () => {
        const basket = new Basket()
        const item1 = new Item(1, 'bagel')
        const item2 = new Item(2, 'bagel')
        const expected = [item2]
        basket.add(item1)
        basket.add(item2)
        const result = basket.remove(1)
        expect(result).toEqual(expected)
    })

})