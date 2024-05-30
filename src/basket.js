import data from '../inventory.json' assert { type: 'json' }

const { inventory } = data

class Basket {
  constructor(contentLimit = 5) {
    this.contents = []
    this.contentLimit = contentLimit
  }

  addItem(SKU) {
    if (this.contents.length >= this.contentLimit) {
      return 'Sorry, your basket is full'
    }
    const itemToAdd = inventory.find((item) => item.sku === SKU)
    this.contents.push(itemToAdd)
  }

  removeItem(SKU) {
    const itemToRemove = this.contents.find((item) => item.sku === SKU)
    if (itemToRemove) {
      const index = this.contents.indexOf(itemToRemove)
      this.contents.splice(index, 1)
    } else {
      return 'Your basket does not contain that item'
    }
  }

  checkPrice(SKU) {
    const item = inventory.find((item) => item.sku === SKU)
    return item.price
  }

  checkOut() {
    let totalPrice = 0
    this.contents.forEach((item) => {
      totalPrice += Number(item.price)
    })
    return totalPrice.toString()
  }

  orderSummary() {
    let summary = {}
    this.contents.forEach((item) => {
        const { sku, price } = item
        if (summary[sku]) {
            summary[sku].quantity ++
            summary[sku].price = summary[sku].quantity * price
        } else {
        summary[sku] = {quantity: 1, price: Number(price)}
        }
    })
    
    if (Object.keys(summary).includes('BGLO')) {
      const noOnionBagels = summary.BGLO.quantity
        if (noOnionBagels >= 6) {
            const extras = noOnionBagels % 6
            const hexDiscount = (noOnionBagels - extras) / 6
            const totalPrice = (hexDiscount * 2.49) + (extras * .49)
            summary.BGLO.price = totalPrice
        }
    }
    
    return summary
  }
}


export default Basket
