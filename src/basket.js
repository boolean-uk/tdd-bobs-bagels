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
        summary[sku].quantity++
        summary[sku].price = summary[sku].quantity * price
      } else {
        summary[sku] = { quantity: 1, price: Number(price) }
      }
    })

    if (summary.BGLO?.quantity >= 6) {
      summary.BGLO.price = getHexDiscountPrice(summary.BGLO.quantity)
    }
    if (summary.BGLP?.quantity >= 12) {
      summary.BGLP.price = getDodecDiscountPrice(summary.BGLP.quantity)
    }
    if (summary.BGLE?.quantity >= 6) {
      summary.BGLE.price = getHexDiscountPrice(summary.BGLE.quantity)
    }

    if (summary.COF && (summary.BGLE.quantity < 12 || (summary.BGLE.quantity > 12 && summary.BGLE.quantity % 12 > 0)))
     {
      console.log('in')
    }

    return summary
  }
}

function getHexDiscountPrice(quantity) {
  const extras = quantity % 6
  const hexDiscount = (quantity - extras) / 6
  const totalPrice = hexDiscount * 2.49 + extras * 0.49
  return totalPrice
}

function getDodecDiscountPrice(quantity) {
  const extras = quantity % 12
  const dodecDiscount = (quantity - extras) / 12
  const totalPrice = dodecDiscount * 3.99 + extras * 0.39
  return totalPrice
}

export default Basket
