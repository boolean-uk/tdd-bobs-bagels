class Menu {
  constructor() {
    this.menuItems = []
  }

  add(bName, bPrice) {
    const newBagel = {
      bName,
      bPrice
    }
    this.menuItems.push(newBagel)
    return this.menuItems
  }

  getPrice(bName) {
    const found = this.menuItems.find((item) => {
      return item.bName === bName.bName
    })
    if (!found) {
      return `Item dose not Exist!`
    }
    return `The price of ${found.bName} is ${found.bPrice}`
  }
}

module.exports = Menu
