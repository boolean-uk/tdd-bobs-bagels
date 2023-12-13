class Employee {
  constructor (name, role) {
    this.name = name
    this.role = role
  }

  updateRole (newRole) {
    this.role = newRole
  }
}

export default Employee