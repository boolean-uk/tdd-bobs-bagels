import Basket, {Bagel} from "../src/basket.js"

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

    it("adds an item to the basket", () => {
        const bagel = new Bagel("Everything", 20.43)

        basket.addItem(bagel)

        expect(basket.contents.find((element) => { return element.name === "Everything" && element.price === 20.43}).name).toBe("Everything")
    })

    it("increments the quantity of items already in the basket", () => {
        const bagel = new Bagel("Everything", 20.43)

        basket.addItem(bagel)

        expect(basket.contents.find((element) => { return element.name === "Everything" && element.price === 20.43}).quantity).toBe(1)

        basket.addItem(bagel)

        expect(basket.contents.find((element) => { return element.name === "Everything" && element.price === 20.43}).quantity).toBe(2)

    })

    it("removes the item from the basket", () => {
        const bagel = new Bagel("Everything", 20.43)

        basket.addItem(bagel)

        basket.removeItem(bagel)

        expect(basket.contents.length).toBe(0)
    })

    it("decrements the quantity of items with a quantity greater than 1", () => {
        const bagel = new Bagel("Everything", 20.43)

        basket.addItem(bagel)
        basket.addItem(bagel)

        basket.removeItem(bagel)

        expect(basket.contents.find((element) => { return element.name === "Everything" && element.price === 20.43}).quantity).toBe(1)
    })
})

describe("bagel", () => {
    it("is an instance of bagel", () => {
        const bagel = new Bagel("Everything", 20.43)
    })

    it("succesfully creates the bagel with the correct info", () => {
        const bagel = new Bagel("Everything", 20.43)
        
        expect(bagel.name).toBe("Everything")
        expect(bagel.price).toBe(20.43)
    })

    it("will throw an error with invalid inputs", () => {
        expect(() => {new Bagel(20.43, "Everything")}).toThrow(Error("Invalid argument types"))
    })
})