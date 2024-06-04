const Menu = require('./menu.js')

const newMenu = new Menu()
newMenu.add('Chocolate', 2.99)
newMenu.add('Plain', 1.99)
newMenu.add('Egg', 3.99)
newMenu.add('Salt', 0.99)

class BasketManager {
  constructor() {
    this.items = []
    this.basicCap = 5
  }

  add(bName) {
    const found = newMenu.menuItems.find((item) => item.bName === bName)
    if (!found) {
      return 'We dont have that bagel'
    } else {
      return this.items.push(found)
    }
  }
}

module.exports = BasketManager
