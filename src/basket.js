const inventoryData = require('../inventory.json')
const inventory = JSON.parse(JSON.stringify(inventoryData.inventory))

class Basket {
    constructor() {
        this.items = []
        this.capacity = 5
        this.totalPrice = 0
    }

    addItem(sku) {
        if (this.isFull()) {
            console.log('Basket is full!')
            return false
        }
    
        const existingItem = this.items.find((item) => item.sku === sku)
        if (existingItem) {
            existingItem.quantity++
            existingItem.price = (
                Math.round(Number(existingItem.price) * existingItem.quantity * 100) / 100
            ).toFixed(2)
            return this.items
        }
    
        const newItem = inventory.find((item) => item.sku === sku)
        if (!newItem) {
            console.log('Item not in stock!')
            return false
        }
    
        newItem.quantity = 1
        this.items.push({ ...newItem })
        return this.items
    }

    setCapacity(capacity) {
        if(capacity < this.currentAmount()) {
            return false
        }
        this.capacity = capacity
        return this.capacity    
    }

    removeItem(Sku) {
        const Item = this.items.find(({ sku }) => sku === Sku)
        if (!Item) {
            console.log('Item is not in the basket!')
            return false
        }
        Item.quantity -= 1
        if (Item.quantity <= 0) {
            this.items.splice(this.items.indexOf(Item), 1)
        }
        return this.items
    }

    currentAmount() {
        let currentAmount = 0
        this.items.forEach((item) => {
            currentAmount += item.quantity
        })
        return currentAmount
    }

    isFull() {
        return this.currentAmount() === this.capacity
    }

    getDiscount() {
  let countCoffee = 0
  let restofBagels = 0
  let restofCoffee = 0

  this.items.forEach((item) => {
    if (item.sku === 'COF') {
      countCoffee = item.quantity
    }
    if (item.sku === 'BGLP') {
      restofBagels = item.quantity % 6
    }
  })

  this.items.forEach((item) => {
    if (item.sku === 'BGLO' || item.sku === 'BGLE') {
      const discount = Math.floor(item.quantity / 6) * 2.49
      const rest = (item.quantity % 6) * 0.49
      item.price = (discount + rest).toFixed(2)
    }
    if (item.sku === 'BGLP') {
      const discount = Math.floor(item.quantity / 12) * 3.99
      let rest = 0
      if (restofBagels) {
        const restOfPlain =
          countCoffee > restofBagels ? countCoffee - restofBagels : restofBagels - countCoffee;
        rest = restOfPlain * 0.39
      }
      item.price = (discount + rest).toFixed(2)
    }
    if (item.sku === 'COF') {
      const coffeeDiscount =
        restofBagels % countCoffee > 0
          ? (restofBagels % countCoffee) * 1.25
          : restofBagels === 1 && countCoffee === 1
          ? 1.25
          : 0
      if (countCoffee - restofBagels > 0) {
        restofCoffee = (countCoffee - restofBagels) * 0.99
      }
      item.price = (coffeeDiscount + restofCoffee).toFixed(2)
    }
  })
}
      
      getTotalPrice() {
        this.totalPrice = 0
        for (const position of this.items) {
          this.totalPrice += Number(position.price) * position.quantity
        }
        return this.totalPrice
      }
}

module.exports = {
    Basket: Basket
}