export { getOrderSummary }
import data from '../inventory.json' assert { type: 'json' }

const { inventory } = data

function getOrderSummary(contents) {
  let summary = {}
    contents.forEach((item) => {
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