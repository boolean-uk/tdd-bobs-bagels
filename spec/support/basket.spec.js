import Basket from "../../src/basket.js";

describe('Basket', () => {
    let basket
    beforeEach(() => {
        basket = new Basket()
    })
    it('shold exist', () => {
        expect(basket).toBeInstanceOf(Basket)
    })
})