import Basket, { Item } from "../../src/basket.js";

describe('Basket', () => {
    let basket
    beforeEach(() => {
        basket = new Basket()
    })
    it('should exist', () => {
        expect(basket).toBeInstanceOf(Basket)
    })
    it('should add an item to the basket', () => {
        const item = basket.addToBasket('poppyseed bagel')
        expect(item).toBeInstanceOf(Item)
        expect(item.id).toBe(1)
        expect(item.title).toBe('poppyseed bagel')
    })
})