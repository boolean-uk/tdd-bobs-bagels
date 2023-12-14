const {BagelsStore, AddToBasket} = require("../src/basket.js")


describe("The user is able to choose from a list of bagels", () => {
    it("from the bagels store", () => {
       const inventory = [
        {
            "sku": "BGLO",
            "price": "0.49",
            "name": "Bagel",
            "variant": "Onion"
          },
          {
            "sku": "BGLP",
            "price": "0.39",
            "name": "Bagel",
            "variant": "Plain"
          },
          {
            "sku": "BGLE",
            "price": "0.49",
            "name": "Bagel",
            "variant": "Everything"
          },
          {
            "sku": "BGLS",
            "price": "0.49",
            "name": "Bagel",
            "variant": "Sesame"
          },
          {
            "sku": "COF",
            "price": "0.99",
            "name": "Bagel",
            "variant": ""
          }]

          const result = BagelsStore(inventory)

          expect(result).toBeTrue
    })
})