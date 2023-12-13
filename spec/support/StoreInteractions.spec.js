import Store from "../../src/store.js"

describe("Store creation", () => {
  it("initially, the store exists but has no available bucket types", () => {
    const myStore = new Store("Bob's Bagels")
    expect(myStore.availableBasketTypes).toEqual([])
    expect(myStore.availableProducts).toBeTruthy()
    expect(myStore.name === "Bob's Bagels").toBeTrue()
    expect(myStore.isOpen).toBeFalse()
  })
})

describe("Store opening", () => {
  it("opening store works", () => {
    const myStore = new Store("Bob's Bagels")
    expect(myStore.open()).toEqual("Store is now open!")
    expect(myStore.isOpen).toBeTrue()
  })

  it("opening store doesn't work when it's already open", () => {
    const myStore = new Store("Bob's Bagels")
    myStore.open()
    expect(myStore.open()).toEqual("We're already open!")
    expect(myStore.isOpen).toBeTrue()
  })
})

describe("Store closing", () => {
  it("closing store", () => {
    const myStore = new Store()
    myStore.open()
    expect(myStore.close()).toEqual("Store is now closed!")
    expect(myStore.isOpen).toBeFalse()
  })

  it("closing store when already closed doesn't work", () => {
    const myStore = new Store()
    expect(myStore.close()).toEqual("We're already closed!")
  })
})

describe("basket handout", () => {
  it("no basket templates", () => {
    const myStore = new Store()
    expect(myStore.handoutBasket()).toEqual("no basket types")
  })
})