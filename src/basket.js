class Bagel {
  constructor(id, name) {
    this.id = id
    this.name = name
  }
}

class Menu {
  fullMenu() {
    return [
      { bagel: 'plain', price: 3.99 },
      { bagel: 'poppyseed', price: 5.99 },
      { bagel: 'salmon', price: 6.99 }
    ]
  }
}

class BobsBagels {
  constructor() {
    this.basket = []
    this.id = 1
  }

  addToBasket(name) {
    const basket = this.basket
    const bagel = new Bagel(this.id, name)
    this.id++

    basket.push(bagel)
    if (basket.length > 6) {
      throw 'basket is at full capacity'
    }
    return basket
  }

  remove(order) {
    const basket = this.basket
    for (let i = 0; i < basket.length; i++) {
      if (basket[i].bagel !== order) {
        return "this item doesn't exist"
      }
    }
    const bagels = basket.find((bagel) => bagel.name === order)
    this.basket = basket.filter((bagel) => bagel.name !== order)
    return bagels
  }

  createManagerXlBasket(bagel) {
    this.xlBasket = []
    this.xlBasket.push(bagel)

    return this.xlBasket
  }

  checkPrice(order) {
    const menu = new Menu()
    const fullMenu = menu.fullMenu()

    const item = fullMenu.find((i) => {
      if (i.bagel === order) return i
    })
    return item
  }

  multiBuys(order) {
    //     const basket = this.basket
    //     const checkBasket = basket.find(i => i.name === order.name)
    // if(checkBasket.quantity === undefined) {
    //     checkBasket.quantity = 2
    // } else {checkBasket.quantity++}
    // return checkBasket
  }
}


const newOrder = new BobsBagels()
newOrder.addToBasket('poppyseed')

const bagel = new BobsBagels()
bagel.multiBuys({ id: 1, name: 'poppyseed' })

export { Bagel }

export default BobsBagels
