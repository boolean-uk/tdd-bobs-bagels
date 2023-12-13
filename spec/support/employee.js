class Employee {
  constructor (name, role) {
    this.name = name
    this.role = role
  }

  updateRole (newRole) {
    console.log(this.role, newRole)
    this.role = newRole
  }
}

export default Employee