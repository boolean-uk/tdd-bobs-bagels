import store from "./store.js"

describe("Store interactions", () => {
  const myStore = new store("Bob's Bagels")
  it("initially, the store exists but has no available bucket types", () => {
    expect(myStore.availableBasketTypes).toEqual([])
    expect(myStore.name === "Bob's Bagels").toBeTrue()
    expect(myStore.open).toBeFalse()
  })
})