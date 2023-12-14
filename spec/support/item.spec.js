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
    expect(myItem.sku).toEqual("MFFS")
    expect(myItem.variant).toEqual("skittles")
    expect(myItem.fillings).toBeUndefined()
  })

  it("item with fillings", () => {
    const myItem = new Item("DNT", "donut", 3.02, "", "vanilla", "chocolate", "strawberry")
    expect(myItem.name).toEqual("donut")
    expect(myItem.sku).toEqual("DNT")
    expect(myItem.variant).toEqual("")
    expect(myItem.fillings).toBeDefined()
  })
})