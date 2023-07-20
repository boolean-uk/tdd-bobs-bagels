const Basket = require("../../../src/extension/Basket");
const Inventory = require("../../../src/extension/Inventory");

describe("basket class tests", () => {
  it("should return total price with discounts", () => {
    const inventory = new Inventory();

    const onionBagel = inventory.getProduct("BGLO");
    const plainBagel = inventory.getProduct("BGLP");
    const everythingBagel = inventory.getProduct("BGLE");
    const coffee = inventory.getProduct("COFB");

    const basket = new Basket(10);

    basket.add(onionBagel, 2);
    basket.add(plainBagel, 12);
    basket.add(everythingBagel, 6);
    basket.add(coffee, 3);

    const result = basket.total();

    expect(result).toEqual(10.43);
  });
});
