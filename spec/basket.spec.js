// import Basket from "../src/basket.js"

describe("basket", () => {
    let basket

    beforeEach(() => {
        basket = new Basket()
    })
    
    it("is an instance of the class", () => {
        expect(basket).toBeInstanceOf(Basket)
    })
})