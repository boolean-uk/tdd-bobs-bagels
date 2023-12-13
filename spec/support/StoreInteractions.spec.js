import store from "./store.js"

describe("Store creation", () => {
  it("initially, the store exists but has no available bucket types", () => {
    const myStore = new store("Bob's Bagels")
    expect(myStore.availableBasketTypes).toEqual([])
    expect(myStore.availableProducts).toEqual([])
    expect(myStore.name === "Bob's Bagels").toBeTrue()
    expect(myStore.isOpen).toBeFalse()
  })
})

describe("Store opening", () => {
  it("opening store works", () => {
    const myStore = new store("Bob's Bagels")
    expect(myStore.open()).toEqual("Store is now open!")
    expect(myStore.isOpen).toBeTrue()
  })

  it("opening store doesn't work when it's already open", () => {
    const myStore = new store("Bob's Bagels")
    myStore.open()
    expect(myStore.open()).toEqual("We're already open!")
    expect(myStore.isOpen).toBeTrue()
  })
})

