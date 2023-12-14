class Employee {
  constructor (name, role) {
    this.name = name
    this.role = role
  }
  
  createBasketType (typeName, capacity) {
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