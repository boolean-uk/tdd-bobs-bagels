const Basket = require('../src/basket.js');

describe("bobs-bagels", () => {
    let basket = new Basket();
  
    beforeEach(() => {
      basket = new Basket();
    })

    it("should add an item to the basket", () => {
        basket.addItem("BGLO");
        expect(basket.items.length).toBe(1);
    })

    it("should not add iteam to the basket, iteam does not exist", () => {
        expect(() => basket.addItem("BGLS")).toThrowError("That iteam does not exist in our menu");
    })

    it("should not add iteam to the basket, basket is full", () => {
        basket.addItem("BGLO");
        basket.addItem("BGLO");

        expect(() => basket.addItem("BGLO")).toThrowError("Basket is full");
    })        

    it("should remove item from basket", () => {
        basket.addItem("BGLO");
        basket.removeItem("BGLO");
        expect(basket.items.length).toBe(0);
    });

})