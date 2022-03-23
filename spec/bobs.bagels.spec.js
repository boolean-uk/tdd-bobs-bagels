const Basket = require("../src/basket.js")
const Item = require("../src/items.js")


describe("Basket", () => {
  it("adds an item to Basket", () => {
    // set up
    const basket = new Basket() // Creating basket which calls the constructor
    console.log("empty basket created", basket.items) // should print out empty array which is inside constructor
    const item = {
      name: "chocolateBagel",
      price: 3,

      name2: "jamBagel",
      price2: 2,
      
    }
    const expected = [{
      name: "chocolateBagel",
      price: 3,

      name2: "jamBagel",
      price2: 2,
    }] 
    // execute
    const result = basket.add(item)
    // verify
    expect(result).toEqual(expected)
  })

  it("removes an item from Basket", () => {
    // set up
    const basket = new Basket() // Creating basket which calls the constructor
    console.log("Items inside Basket", basket.items) // should print out empty array which is inside constructor
    const item = {
      name: "chocolateBagel",
      price: 3,

      name2: "jamBagel",
      price2: 2,
      
    }
    const expected = [{
      name: "chocolateBagel",
      price: 3,

      name2: "jamBagel",
      price2: 2,
    }] 
    // execute
    const result = basket.add(item)
    // verify
    expect(result).toEqual(expected)
  })

  it("Check if Basket is full", () => {
    // set up
    const basket = new Basket() // Creating basket which calls the constructor
    console.log("Items inside Basket", basket.items) // should print out empty array which is inside constructor
    const item = new Item("chocolateBagel") 
    const item2 = new Item("jamBagel") 

    basket.add(item)
    basket.add(item2)    
    const result = basket.isFull()
    // verify
    expect(result).toEqual(true)
  })

})