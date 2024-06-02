import Basket from "../../src/basket.js"

describe("Basket", () => {
    let basket
    beforeEach(() => {
        basket = new Basket()
    })

    it("should exist", () => {
        expect(basket).toBeInstanceOf(Basket)
    })

    it("add an item to the basket", () => {
        basket.addItem("seed bagel")
        expect(basket.basket).toEqual([{name: "seed bagel", price: 1.99, quantity: 1}])
    })

    it("shouldn't add an item which doesn't exist", () => {
        basket.addItem("spaghetti")
        expect(basket.basket).toEqual([])

    })

    it("be able to add multiple of the same item", () => {
        basket.addItem("dirty bagel", 3)
        expect(basket.basket).toEqual([{name: "dirty bagel", price: 0.99, quantity: 3}])
    })

    it("refuse to add item/items if basket quantity will be exceeded", () => {
        basket.addItem("dirty bagel", 3)
        basket.addItem("seed bagel", 1)
        
        expect(basket.addItem("toasted bagel", 3)).toEqual("Adding this quantity will overfill your basket")
    })

    it("should be able to increase basket size from small", () => {
        basket.increaseBasketSize()
        expect(basket.quantity).toEqual(15)
    })

    it("shouldn't increase basket size if already large", () => {
        basket.increaseBasketSize()
        basket.increaseBasketSize()
        expect(basket.quantity).toEqual(15)
    })

})