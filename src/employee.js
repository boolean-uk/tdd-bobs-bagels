class Employee {
  constructor (name, role) {
    this.name = name
    this.role = role
  }

  createBasketType (typeName, capacity) {
    if (this.role !== "manager") return "cannot create new baskets"
    return {
      type: typeName,
      capacity: capacity
    }
  }

  updateRole (newRole) {
    this.role = newRole
  }
}

export default Employee