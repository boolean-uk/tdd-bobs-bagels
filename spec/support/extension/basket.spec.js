const Basket = require("../../../src/extension/Basket");
const Product = require("../../../src/extension/Product");

describe("basket class tests", () => {
    it("should return total price with discounts", () => {
        const onionBagel = new Product("BGLO");
        const plainBagel = new Product("BGLP");
        const everythingBagel = new Product("BGLE");
        const coffee = new Product("COFB");
        
        const basket = new Basket();
    
        basket.add(onionBagel, 2);
        basket.add(plainBagel, 12);
        basket.add(everythingBagel, 6);
        basket.add(coffee, 3);

        const result = basket.total();
    
        expect(result).toEqual(10.43);
      });
})