describe("Store interactions", () => {
  it("initially, the store exists but has no available bucket types", () => {
    expect(store.availableBasketTypes).toEqual([])
  })
})