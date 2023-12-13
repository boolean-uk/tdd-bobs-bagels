import Employee from "../../src/employee.js"

describe("Employee tests", () => {
  it("creation of worker", () => {
    const Tina = new Employee("Tina", "worker")
    expect(Tina.role).toEqual("worker")
  })

  it("creation of manager", () => {
    const Bob = new Employee("Bob", "manager")
    expect(Bob.role).toEqual("manager")
  })

  it("employees can create new baskets", () => {
    const Gene = new Employee("Gene", "mascot")
    const createdBasket = Gene.createBasketType("XS", 1)
    expect(createdBasket.capacity).toEqual(1)
    expect(createdBasket.type).toEqual("XS")
  })
})

describe("Employee role updating", () => {
  it("update employees role", () => {
    const Gene = new Employee("Gene", "worker")
    Gene.updateRole("mascot")
    expect(Gene.role).toEqual("mascot")
  })
})