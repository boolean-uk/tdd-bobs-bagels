import store from "./store.js"

describe("Store interactions", () => {
  const myStore = new store("Bob's Bagels")
  it("initially, the store exists but has no available bucket types", () => {
    expect(myStore.availableBasketTypes).toEqual([])
  })
})