import { inventory } from "./inventory.js"
import Employee from "./employee.js"

class Store {
  constructor (name) {
    this.name = name
    this.isOpen = false
    this.employees = []
    this.customers = []
    this.availableBasketTypes = []
    this.availableProducts = [...inventory]
  }
  open () {
    if (this.isOpen) return "We're already open!"
    this.isOpen = true
    return "Store is now open!"
  }

  close () {
    if (!this.isOpen) return "We're already closed!"
    this.isOpen = false
    return "Store is now closed!"
  }

  addEmployee (name, role) {
    const employee = new Employee(name, role)
    this.employees.push(employee)
  }

  addCustomer () {
    const customer = new Customer()
    this.customers.push(customer)
  }

  handoutBasket (name) {
    if (this.availableBasketTypes.length === 0) return "no basket types"
    if (!!name) return false
    const foundBasket = this.availableBasketTypes.find(basket => basket.name === name)
    if (!!foundBasket) return "invalid name" 
    return foundBasket
  }
}

export default Store