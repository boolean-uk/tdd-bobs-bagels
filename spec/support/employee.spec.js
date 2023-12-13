import Employee from "./employee.js"

describe("Employee tests", () => {
  it("creation of worker", () => {
    const Tina = new Employee("Tina", "worker")
    expect(Tina.role).toEqual("worker")
  })

  it("creation of manager", () => {
    const Bob = new Employee("Bob", "manager")
    expect(Bob.role).toEqual("manager")
  })
})