class Basket {
  constructor() {
    this.contents = []
  }

  addItem(item) {
    const itemInBasket = this.contents.find((element) => {
      return element.name === item.name
    })

    if (itemInBasket) {
      itemInBasket.quantity++
      return this.contents
    }

    const newItem = { ...item, quantity: 1 }

    this.contents.push(newItem)

    return this.contents
  }

  removeItem(item) {
    const itemInBasket = this.contents.find((element) => {
        return element.name === item.name
      })
  
      if (!itemInBasket) {
        throw(new Error("The item does not exist in the basket"))
      }
    
    itemInBasket.quantity--
    
    this.contents = this.contents.filter((element) => {return element.quantity > 0})
    
    return this.contents
  }
}

class Bagel {
  constructor(name, price) {
    if (typeof name !== 'string' || typeof price !== 'number') {
      throw new Error('Invalid argument types')
    }

    this.name = name
    this.price = price
  }
}

export { Bagel }

export default Basket
