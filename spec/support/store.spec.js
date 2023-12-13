import Store from "../../src/store.js"

describe("Store creation", () => {
  it("initially, the store exists but has no available bucket types", () => {
    const myStore = new Store("Bob's Bagels")
    expect(myStore.availableBasketTypes).toEqual([])
    expect(myStore.employees).toEqual([])
    expect(myStore.customers).toEqual([])
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

describe("adding employees", () => {
  it("adding an employee adds employee count by one", () => {
    const myStore = new Store("Test")
    const oldEmployeeCount = myStore.employees.length
    myStore.addEmployee("Tina", "worker")
    expect(myStore.employees.length).toEqual(oldEmployeeCount + 1)
    expect(myStore.employees[oldEmployeeCount].name).toEqual("Tina")
    expect(myStore.employees[oldEmployeeCount].role).toEqual("worker")
  })
})

describe("customers", () => {
  it("add one customer raises customer count by one", () => {
    const myStore = new Store("Test")
    const oldCustomerCount = myStore.customers.length
    myStore.addCustomer()
    expect(myStore.customers.length).toEqual(oldCustomerCount + 1)
  })

  it("customers can receive a basket", () => {
    const myStore = new Store("Test")
    myStore.addCustomer()
    const pseudoBasket = { capacity: 42 }
    myStore.customers[0].receiveBasket(pseudoBasket)
    expect(myStore.customers[0].basket.capacity).toEqual(42)
  })
})

describe("employees can do employee stuff", () => {
  it("adding basket templates", () => {
    const myStore = new Store("Bob's Bagels")
    myStore.addEmployee("Bob", "cashier")
    const Bob = myStore.employees[0]
    const createdBasketType = Bob.createBasketType("XS", 1)
    myStore.addBasketType(createdBasketType)
    expect(myStore.availableBasketTypes.length).toEqual(1)
    expect(myStore.availableBasketTypes[0].type).toEqual("XS")
    expect(myStore.availableBasketTypes[0].capacity).toEqual(1)
  })
})