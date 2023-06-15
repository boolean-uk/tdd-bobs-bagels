const inventory = require('../inventory.json').inventory

class Basket {
  constructor(size = 10) {
    if (!Number.isInteger(size) || size < 1 || typeof size !== 'number') {
      console.error(
        'Invalid size entered, basket size has been set to default (5)'
      )
      size = 10
    }
    this.basket = []
    this.size = size
  }

  addItem(sku) {
    if (sku === undefined) {
      return 'No SKU Entered'
    } else if (this.totalItems() >= this.size) {
      return 'Basket is full. Item was not added.'
    } else {
      const addedItem = inventory.find((item) => item.sku === sku)
      const alreadyInBasket = this.basket.find((item) => item.sku === sku)
      if (addedItem && !alreadyInBasket) {
        this.basket.push({ ...addedItem, quantity: 1 })
        return this.basket
      } else if (addedItem && alreadyInBasket) {
        alreadyInBasket.quantity++
        return this.basket
      } else {
        return 'Chosen item not found'
      }
    }
  }

  totalItems() {
    let itemCount = 0
    this.basket.forEach((item) => (itemCount += item.quantity))
    return itemCount
  }

  removeItem(sku) {
    if (sku === undefined) {
      return 'No SKU entered'
    }
    const itemToRemove = this.basket.find((item) => item.sku === sku)
    let currentQuantity
    if (itemToRemove) {
      currentQuantity = itemToRemove.quantity
    } else {
      return 'Chosen item not found'
    }
    if (currentQuantity > 1) {
      itemToRemove.quantity--
      return this.basket
    } else {
      const deletionIndex = this.basket.indexOf(itemToRemove)
      this.basket.splice(deletionIndex, 1)
      return this.basket
    }
  }

  checkPrice(sku) {
    if (sku === undefined) {
      return 'Incorrect SKU. Item not found'
    } else {
      const itemToCheck = inventory.find((item) => item.sku === sku)
      if (itemToCheck) {
        return itemToCheck.price
      } else {
        return 'Incorrect SKU. Item not found'
      }
    }
  }

  addMultipleItems(sku, quantity) {
    if (sku === undefined || isNaN(quantity)) {
      return 'Item not found or quantity not specified.'
    } else if (this.totalItems() >= this.size) {
      return 'Basket is full. Item was not added.'
    } else if (this.totalItems() + quantity > this.size) {
      const maxAllowed = this.size - this.totalItems()
      return `Basket size exceeded. Maximum of ${maxAllowed} allowed`
    } else {
      const addedItem = inventory.find((item) => item.sku === sku)
      const alreadyInBasket = this.basket.find((item) => item.sku === sku)
      if (addedItem && !alreadyInBasket) {
        this.basket.push({ ...addedItem, quantity: quantity })
        return this.basket
      } else if (addedItem && alreadyInBasket) {
        alreadyInBasket.quantity += quantity
        return this.basket
      } else {
        return 'Chosen item not found'
      }
    }
  }

  showTotal() {
    if (this.basket.length === 0 || this.basket === undefined) {
      return 'Basket is currently empty'
    }

    const basket = this.basket

    let runningTotal = 0

    basket.forEach((item) => {
      if (
        (item.sku === 'BGLO' && item.quantity >= 6) ||
        (item.sku === 'BGLE' && item.quantity >= 6)
      ) {
        const offerNumber = Math.floor(item.quantity / 6)
        runningTotal += offerNumber * 2.49
        item.quantity -= offerNumber * 6
      }
      if (item.sku === 'BGLP' && item.quantity >= 12) {
        const offerNumber = Math.floor(item.quantity / 12)
        runningTotal += offerNumber * 3.99
        item.quantity -= offerNumber * 12
      }
      if (item.sku === 'COF') {
        const numCOF = item.quantity
        let offerNumber = 0
        basket.forEach((item) => {
          if (item.sku === 'BGLP') {
            const numBGLP = item.quantity
            offerNumber = Math.min(numCOF, numBGLP)
            runningTotal += offerNumber * 1.25
            item.quantity -= offerNumber
          }
        })
        item.quantity -= offerNumber
      }
    })
    basket.forEach((item) => (runningTotal += item.quantity * item.price))
    return runningTotal.toFixed(2)
  }
}

module.exports = Basket
