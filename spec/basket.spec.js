const Basket = require("../src/basket.js");

describe(),
  function () {
    it("add items in your basket", () => {
      //set up
      const listOfItems = new Basket();
      const expected = {
        fruit: ["Apple", "Peach", "Cherry"],
        vegetables: ["Spinach", "Broccoli"],
      };
      //execute
      const result = listOfItems.add(expected);
      //verify
      expect(result).toEqual(expected);
    });
  };
