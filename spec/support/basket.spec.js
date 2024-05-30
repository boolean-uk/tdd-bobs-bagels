import BobsBagels, { Item } from "../../src/basket.js";

describe('Bobs Bagels', () => {
    let bobsBagels
    beforeEach(() => {
        bobsBagels = new BobsBagels()
    })
    it('should exist', () => {
        expect(bobsBagels).toBeInstanceOf(BobsBagels)
    })
    it('should add an item to the basket', () => {
        const item = bobsBagels.addToBasket('poppyseed bagel')
        expect(item).toBeInstanceOf(Item)
        expect(item.id).toBe(1)
        expect(item.title).toBe('poppyseed bagel')
        expect(bobsBagels.basket.length).toBe(1)
    })
})