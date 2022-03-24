class Item {
  constructor () {
    this.itemList = {
      plain: 2,
      cheese: 3,
      cinnamon: 3,
      raisin: 3,
      poppy: 4,
      sesame: 4,
      BGLO: 0.49,
      BGLP: 0.39,
      BGLE: 0.49,
      COF: 0.99
    }

    // this.list = {}
  }

  // addToList (item, price) {
  //   this.list[item] = price
  // }

  checkPrice (item) {
    // make an object into an array with Object.entries()
    const itemListArr = Object.entries(this.itemList)
    // find the bagel item and price that matches to the argument
    const itemAndPrice = itemListArr.find(itemList => itemList[0] === item)
    return `bagel: ${itemAndPrice[0]}, price: $${itemAndPrice[1]}`
  }

  totalPrice (basket) {
  // convert all bagels to its price, and then .reduce();
    const bagelPriceArr = basket.map(bagel => this.itemList[bagel])
    const totalSum = bagelPriceArr.reduce((firstPrice, nextPrice) => (firstPrice + nextPrice), 0)
    return `total: $${totalSum}`
  }

  receipt (basket) {
    const quantity = {}
    basket.forEach(item => {
      quantity[item] ? quantity[item] += 1 : quantity[item] = 1
    })
    return quantity
  }
}

module.exports = Item

const exBasket = ['poppy', 'poppy', 'plain', 'poppy', 'cinnamon']
const item = new Item()

console.log(item.receipt(exBasket))