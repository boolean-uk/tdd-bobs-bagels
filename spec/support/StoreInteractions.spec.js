import store from "./store.js"

describe("Store interactions", () => {
  const myStore = new store("Bob's Bagels")
  it("initially, the store exists but has no available bucket types", () => {
    expect(myStore.availableBasketTypes).toEqual([])
    expect(myStore.availableProducts).toEqual([])
    expect(myStore.name === "Bob's Bagels").toBeTrue()
    expect(myStore.open).toBeFalse()
  })

  it("opening store works", () => {
    expect(myStore.open()).toEqual("Store is now open!")
    expect(myStore.open).toBeTrue()
  })
})