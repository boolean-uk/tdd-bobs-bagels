import Item from "../../src/item.js"

describe("new item creation", () => {
  it("create with no variants", () => {
    const myItem = new Item(1234, "Coffee")
    expect(myItem.name).toEqual("Coffee")
    expect(myItem.price).toEqual(0)
    expect(myItem.variant).toEqual("")
    expect(myItem.fillings).toBeUndefined()
  })

  it("item with variant", () => {
    const myItem = new Item("MFN", "muffin", 3.02, "skittles")
    expect(myItem.name).toEqual("muffin")
    expect(myItem.sku).toEqual("MFN")
    expect(myItem.variant).toEqual("skittles")
    expect(myItem.fillings).toBeUndefined()
  })
})