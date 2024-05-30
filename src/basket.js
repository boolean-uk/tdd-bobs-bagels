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
    return Number(item.price)
  }

  checkOut() {
    let totalPrice = 0
    this.contents.forEach((item) => {
      totalPrice += Number(item.price)
    })
    return totalPrice
  }

  orderSummary() {
    let summary = {}
    this.contents.forEach((item) => {
      const { sku, price } = item
      if (summary[sku]) {
        summary[sku].quantity++
        summary[sku].price = Number(
          (summary[sku].quantity * Number(price)).toFixed(2)
        )
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

    if (summary.COF && summary.BGLP.quantity % 12 !== 0) {
      getPairDiscountPrice(summary)
    }

    let totalValue = 0
    Object.values(summary).forEach((item) => (totalValue += item.price))
    summary.totalPrice = totalValue
    totalValue = 0

    return summary
  }

  getReceipt() {
    const summary = this.orderSummary()
    printReceipt(summary)
  }
}

function getHexDiscountPrice(quantity) {
  const extras = quantity % 6
  const hexDiscount = (quantity - extras) / 6
  const totalPrice = hexDiscount * 2.49 + extras * 0.49
  return Number(totalPrice.toFixed(2))
}

function getDodecDiscountPrice(quantity) {
  const extras = quantity % 12
  const dodecDiscount = (quantity - extras) / 12
  const totalPrice = dodecDiscount * 3.99 + extras * 0.39
  return Number(totalPrice.toFixed(2))
}

function getPairDiscountPrice(summary) {
  let { BGLP } = summary

  const bagQuant = BGLP.quantity

  const discountPairs = bagQuant % 12

  const cofPrice = inventory.find((item) => item.sku === 'COF').price

  summary.CFBP = { quantity: discountPairs, price: discountPairs * 1.25 }

  if (summary.COF.quantity === discountPairs) {
    delete summary.COF
  } else {
    summary.COF.quantity -= discountPairs
    summary.COF.price = summary.COF.quantity * cofPrice
  }

  if (summary.BGLP.quantity === discountPairs) {
    delete summary.BGLP
  } else {
    summary.BGLP.quantity -= discountPairs
    summary.BGLP.price = getDodecDiscountPrice(summary.BGLP.quantity)
  }
}

function printReceipt(summary) {
  let now = new Date()
  let year = now.getFullYear()
  let month = padToTwoDigits(now.getMonth() + 1)
  let day = padToTwoDigits(now.getDate())
  let hours = padToTwoDigits(now.getHours())
  let minutes = padToTwoDigits(now.getMinutes())
  let seconds = padToTwoDigits(now.getSeconds())

  console.log(
    `
    ~~~ Bob's Bagels ~~~ \n
    ${day}-${month}-${year} ${hours}:${minutes}:${seconds} \n
    -------------------- 
    `
  )

  Object.entries(summary).forEach((property) => {
    if (property[0] === 'totalPrice') {
      console.log (`-------------------- \n Total: £${property[1]}`)
      return
    }
    switch (property[0]) {
      case 'BGLO':
        property[0] = 'Onion Bagel'
        break
      case 'BGLP':
        property[0] = 'Plain Bagel'
        break
      case 'BGLE':
        property[0] = 'Everything Bagel'
        break
      case 'COF':
        property[0] = 'Coffee'
        break
      case 'CFBP':
        property[0] = 'Coffee/Bagel Offer'
    }
    console.log(`${property[0]}  ${property[1].quantity}  £${property[1].price.toFixed(2)}`)
  })
  console.log('--------------------')
  console.log('Thanks for your order!')
}

function padToTwoDigits(num) {
  return num.toString().padStart(2, '0')
}

export default Basket
