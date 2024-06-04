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
}

module.exports = Menu
