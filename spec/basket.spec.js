import Basket from "../src/basket.js"

describe("Basket", () => {
    // to be more descriptive, add another describe (useful when working with more than one class)
    describe("addItem", () => {
        it("add item to basket", async () => {
        //    SET UP 
        const newBasket = new Basket()
        const expected = [{ sku: 'BGLE', price: '0.49', name: 'Bagel', variant: 'Everything' }]
        
// EXECUTE

const result = await newBasket.addItem("BGLE")
// VERIFY
expect(result).toEqual(expected)
        })
    })
    
})

