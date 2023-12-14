import { inventory } from "./inventory.js"
import { basketTypesDefault } from "./baskettypes.js"
import Employee from "./employee.js"
import Basket from "./basket.js"
import { skuFromName } from "./item.js"

class Store {
  constructor (name) {
    this.name = name
    this.isOpen = false
    this.employees = []
    this.availableBasketTypes = [...basketTypesDefault]
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

  addBasketType (basketObj) {
    this.availableBasketTypes.push(basketObj)
  }

  handoutProductBySKU (sku) {
    const foundProduct = this.availableProducts.find(product => product.sku === sku)
    console.log(foundProduct)
    if (!!foundProduct) {
      return foundProduct
    } else {
      console.log("unknown SKU", sku)
      return false
    }
  }

  presentProductByNameVariant (name, variant) {
    const skuToSearch = skuFromName(name, variant)
    if (this.handoutProductBySKU(skuToSearch) === false) {
      console.log(`We don't have a ${name} of variant ${variant}.`)
      return false
    } else {
      console.log(`Here is a ${name} of variant ${variant}:`)
      return this.handoutProductBySKU(skuToSearch)
    }
  }

  handoutBasket (name) {
    if (this.availableBasketTypes.length === 0) return "no basket types"
    const foundBasketType = this.availableBasketTypes.find(basket => basket.name === name)
    if (!foundBasketType) return "type not found"
    const actualBasket = new Basket(foundBasketType.capacity)
    return actualBasket
  }
}

export default Store