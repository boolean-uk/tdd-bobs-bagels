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
        const bagel = bobsBagels.createOrder(('poppyseed bagel'))
        expect(bagel).toBeInstanceOf(Bagel)
        expect(bagel.id).toBe(1)
        expect(bagel.name).toBe('poppyseed bagel')
    })
    it('should add bagels to the basket', () => {
        bobsBagels.addToBasket('poppyseed bagel')
        expect(bobsBagels.basket.length).toBe(1)
    })
    it('should be allow bagels to be removed from basket', () => {
        bobsBagels.addToBasket('poppyseed bagel')
        expect(bobsBagels.basket.length).toBe(1)

        const removed = bobsBagels.remove(1)
        expect(removed.name).toBe('poppyseed bagel')
        const newBasket = bobsBagels.basket
        expect(newBasket.length).toBe(0)
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
})