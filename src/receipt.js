class Receipt {
  receiptLine (cofDeal, subPrice) {
    let receipt = ''
    const receiptLength = Object.keys(subPrice).length

    for (let i = 0; i < receiptLength; i++) {
      const sku = Object.keys(cofDeal)
      const quantity = Object.values(cofDeal)
      const subTotal = Object.values(subPrice)
      const inSKU = sku[0].length <= 3

      if (inSKU) receipt += `${quantity[i]}x ${sku[i]} = ${subTotal[i]}\n`
      if (!inSKU) receipt += `${sku[i]} ${quantity[i]} £${subTotal[i]}\n`
    }
    return receipt
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

  printItemReceipt (receiptLine, totalPrice) {
    return `~~~ Bob's Bagels ~~~\n${this.today()}\n\n--------------------\n\n${receiptLine}\n--------------------\nTotal          £${totalPrice}\n\n     Thank you\n   for your order!`
  }
}

module.exports = Receipt

// const cofDeal = { COF: 1, BGLO: 1, 'BGLP x COF': 1 }