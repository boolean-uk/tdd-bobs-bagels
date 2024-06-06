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

  remove(bName) {
    const found = this.items.find((item) => item.bName === bName)
    if (!found) {
      throw new Error('You dont have that bagel')
    } else {
      const index = this.items.findIndex((item) => {
        return item.bName === bName
      })
      this.items.splice(index, 1)
      return this.items
    }
  }
}

module.exports = BasketManager
