import Item from "../../src/item.js"

describe("new item creation", () => {
  it("create with no variants", () => {
    const myItem = new Item(1234, "Coffee")
    console.log(myItem)
    expect(myItem.name).toEqual("Coffee")
  })
})