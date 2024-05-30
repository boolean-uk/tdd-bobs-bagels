import BobsBagels, { Bagel } from "../../src/basket.js";

describe('Bobs Bagels', () => {
    let bobsBagels
    beforeEach(() => {
        bobsBagels = new BobsBagels()
    })
    it('should exist', () => {
        expect(bobsBagels).toBeInstanceOf(BobsBagels)
    })
    it('should add an item to the basket', () => {
        const bagel = bobsBagels.addToBasket('poppyseed bagel')
        expect(bagel).toBeInstanceOf(Bagel)
        expect(bagel.id).toBe(1)
        expect(bagel.title).toBe('poppyseed bagel')
        expect(bobsBagels.basket.length).toBe(1)
    })
    it('should be allow bagels to be removed from basket', () => {
        bobsBagels.addToBasket('poppyseed bagel')
        expect(bobsBagels.basket.length).toBe(1)

        const removed = bobsBagels.remove(1)
        expect(removed.title).toBe('poppyseed bagel')
        const newBasket = bobsBagels.basket
        expect(newBasket.length).toBe(0)
    })
    it('should alert customer when basket has reached 6 bagel limit', () => {
        bobsBagels.addToBasket('poppyseed bagel')
        bobsBagels.addToBasket('sweet bagel')
        bobsBagels.addToBasket('plain bagel')
        bobsBagels.addToBasket('meatfeast bagel')
        bobsBagels.addToBasket('salmon bagel')
        bobsBagels.addToBasket('cream cheese bagel')
        expect(bobsBagels.basket.length).toBe(6)

        const overCapacity = bobsBagels.basketFull(7)
        expect(overCapacity).toBe(7)
        const capacity = bobsBagels.basket
        expect(capacity.length).toBe(6)

    })
})