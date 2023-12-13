import Employee from "./employee.js"

describe("Employee tests", () => {
  it("creation of worker", () => {
    const test = new Employee("Tina", "worker")
    expect(test.role).toEqual("worker")
  })
})