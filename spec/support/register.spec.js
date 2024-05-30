import Store from "../../src/store.js"
import Customer from "../../src/customer.js"
import Register from "../../src/register.js"

describe("a register can be created", () => {
  it("new register", () => {
    const myStore = new Store("Dan's Donuts")
    const shopper = new Customer(myStore)
    shopper.receiveBasket(myStore.handoutBasket("M"))
    const myRegister = new Register(myStore)

    expect(myRegister.atStore.name).toEqual("Dan's Donuts")
  })
})

describe("register can process customers", () => {
  it("new register", () => {
    const myStore = new Store("Dan's Donuts")
    const shopper = new Customer(myStore)
    const myRegister = new Register(myStore)
    shopper.receiveBasket(myStore.handoutBasket("M"))
    const myBagel = shopper.askForItem("Bagel", "Everything")
    const myCoffee = shopper.askForItem("Coffee")
    shopper.basket.addItem(myBagel)
    shopper.basket.addItem(myCoffee)
    shopper.basket.addItem(myBagel)
    shopper.basket.addItem(myBagel)

    myRegister.takeCustomer(shopper)
    expect(myRegister.till).toEqual(0)
    expect(myRegister.currentCustomer !== null).toBeTrue()
    myRegister.billCustomer()
    expect(myRegister.till > 0).toBeTrue()
    expect(myRegister.currentCustomer).toEqual(null)
  })
})