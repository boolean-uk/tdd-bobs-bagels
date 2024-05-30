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