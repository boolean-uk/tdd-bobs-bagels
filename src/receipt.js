class Receipt {
  receiptLine (cofDeal, subPrice, savedPrice = '') {
    let receipt = ''
    const receiptLength = Object.keys(subPrice).length

    for (let i = 0; i < receiptLength; i++) {
      const sku = Object.keys(subPrice)
      const quantity = Object.values(cofDeal)
      const subTotal = Object.values(subPrice)
      const savedTotal = Object.values(savedPrice)
      const inSKU = sku[0].length <= 3

      if (inSKU) receipt += `${quantity[i]}x ${sku[i]} = ${subTotal[i]}\n`
      if (!inSKU && savedTotal[i] === 0) receipt += `${sku[i]} ${quantity[i]} £${subTotal[i]}\n`
      if (!inSKU && savedTotal[i] !== 0) receipt += `${sku[i]} ${quantity[i]} £${subTotal[i]}\n       (-£${savedTotal[i]})\n`
    }
    return receipt
  }

  totalSavedPrice (totalSavedPrice) {
    if (totalSavedPrice === 0) return ''
    return `You saved a total of\n £${totalSavedPrice} on this shop`
  }

  today () {
    const date = new Date()
    const year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    if (month < 10) month = `0${month}`
    if (day < 10) day = `0${day}`

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }

  printSKUReceipt (receiptLine, totalPrice) {
    return `${receiptLine}          ----\n          ${totalPrice}`
  }

  printItemReceipt (receiptLine, totalPrice, totalSavedPrice) {
    return `~~~ Bob's Bagels ~~~\n\n${this.today()}\n\n--------------------\n\n${receiptLine}\n--------------------\nTotal          £${totalPrice}\n\n${totalSavedPrice}\n\n     Thank you\n   for your order!`
  }
}

module.exports = Receipt

// const receipt = new Receipt()
// const obj = { BGLO: 7, BGLE: 2, BGLP: 1, COF: 1 }
// const subPrice = { 'Onion Bagel': 2.98, 'Everything Bagel': 0.98, 'Plain Bagel': 0.39, Coffee: 0.99 }
// const totalPrice = 5.34
// const savedPrice = { BGLO: 0.45, BGLE: 0, BGLP: 0, COF: 0 }
// const totalSavedPrice = receipt.totalSavedPrice(0.45)

// const receiptLine = receipt.receiptLine(obj, subPrice, savedPrice)

// console.log(receipt.printItemReceipt(receiptLine, totalPrice, totalSavedPrice))
