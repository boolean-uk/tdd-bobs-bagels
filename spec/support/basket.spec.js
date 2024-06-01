
import BobsBagels, { Bagel } from "../../src/basket.js";

describe('Bobs Bagels', () => {
    let bobsBagels
    beforeEach(() => {
        bobsBagels = new BobsBagels()
    })
    it('should exist', () => {
        expect(bobsBagels).toBeInstanceOf(BobsBagels)
    })
    it('should create a bagel order', () => {
        const expected = [new Bagel(1, 'poppyseed')]
        const order = bobsBagels.addToBasket('poppyseed')
        expect(order).toEqual(expected)
    })
    it('should add bagels to the basket', () => {
        bobsBagels.addToBasket({ id: 1, name: 'poppyseed' })
        expect(bobsBagels.basket.length).toBe(1)
    })
    fit('should be allow bagels to be removed from basket', () => {
        const expected = [new Bagel(2, 'poppyseed')]
        bobsBagels.addToBasket('plain')
        bobsBagels.addToBasket('poppyseed')
        const removed = bobsBagels.remove('plain')
        expect(removed).toEqual(expected)
    })
    it('should alert customer when basket has reached 6 bagel limit', () => {
        bobsBagels.addToBasket('poppyseed bagel')
        bobsBagels.addToBasket('plain bagel')
        bobsBagels.addToBasket('sesame bagel')
        bobsBagels.addToBasket('salmon bagel')
        bobsBagels.addToBasket('cream cheese bagel')
        bobsBagels.addToBasket('meat feast bagel')
        expect(() => bobsBagels.addToBasket()).toThrow("basket is at full capacity")
    })
    it('should allow managers to create a larger capacity basket', () => {
        bobsBagels.createManagerXlBasket('poppyseed bagel')
        expect(bobsBagels.xlBasket.length).toBe(1)
    })
    it("should alert customer if they try to remove an item that doesn't exist", () => {
        const expected = "this item doesn't exist"
        
        bobsBagels.addToBasket('poppyseed bagel')

        const warning = bobsBagels.remove('chips')
        expect(warning).toBe(expected)
    })
    it('should return the price of the bagel selected', () => {
        const expected = { bagel: 'poppyseed', price: 5.99 }
        bobsBagels.checkPrice('poppyseed')
        let price = bobsBagels.checkPrice('poppyseed')
        expect(price).toEqual(expected)
    })
    it('should create a new property on the item that increments', () => {
        const expected = { id: 1, name: 'poppyseed', quantity: 2 }
        let order = bobsBagels.multiBuys({ id: 1, name: 'poppyseed' })
        expect(order).toBe(expected)
    })
})