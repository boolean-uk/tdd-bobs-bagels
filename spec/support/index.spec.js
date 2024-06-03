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

    it("should return the price of a valid product", () => {
        expect(basket.checkPrice("dirty bagel")).toEqual(0.99)
    })

    it("should return an error when trying to find the price of an invalid item", () => {
        expect(basket.checkPrice("doom bagel")).toEqual("This item doesn't exist")
    })

    it("should return the total of all products in the basket", () => {
        basket.addItem("dirty bagel", 2)
        basket.addItem("seed bagel", 2)
        expect(basket.total()).toEqual(5.96)
    })

    it("should reduce the quantity of an item in the basket by 1", () => {
        basket.addItem("seed bagel", 2)
        basket.removeItem("seed bagel")
        expect(basket.basket).toEqual([{name: "seed bagel", price: 1.99, quantity: 1}])
    })

    it("should remove an item from the basket when the quantity is 0", () => {
        basket.addItem("seed bagel")
        basket.removeItem("seed bagel")
        expect(basket.basket).toEqual([])
    })

    it("should return a message if the item isn't in the basket", () => {
        expect(basket.removeItem("toasted bagel")).toEqual("This item isn't in your basket")
    })
})