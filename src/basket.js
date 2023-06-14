import inventory from '../inventory.js'

const basket = []

class Item {
  constructor(sku, price, name, variant,) {
    this.sku = sku
    this.price = price
    this.name = name
    this.variant = variant
  }
}

//add Onion bagel to basket
  //find the Onion bagel in inventory
  //new Item with that inventory data
  //add the new Item to the basket []

const addToBasket = (whichBagel) => {
  inventory.filter((item) => {
    if (item.sku === whichBagel) {
      item.quantity = 1
      basket.push(item)
    }
  })
  console.log('basket after add', basket)
}

addToBasket('BGLP')


export { basket, addToBasket }
