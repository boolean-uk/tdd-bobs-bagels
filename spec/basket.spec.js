import Basket, {bagel} from "../src/basket.js"

describe("basket", () => {
    let basket

    beforeEach(() => {
        basket = new Basket()
    })
    
    it("is an instance of the class", () => {
        expect(basket).toBeInstanceOf(Basket)
    })

    it("initalises with an empty arr", () => {
        expect(basket.contents.length).toBe(0)
    })
})

describe("bagel", () => {
    it("is an instance of bagel", () => {
        const bagel = new Bagel()
    })
})