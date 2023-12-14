import Customer from "../../src/customer.js"

describe("creating a new customer", () => {
  it("customer afer creation", () => {
    const myCustomer = new Customer()
    expect(myCustomer.basket).toEqual(null)
    expect(typeof myCustomer.id === "number").toBeTrue()
  })
})