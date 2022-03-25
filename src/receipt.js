class Receipt {
  receiptLine (cofDeal, subPrice) {
    let receipt = ''
    const receiptLength = Object.keys(subPrice).length

    for (let i = 0; i < receiptLength; i++) {
      const sku = Object.keys(cofDeal)
      const quantity = Object.values(cofDeal)
      const subTotal = Object.values(subPrice)
      receipt += `${quantity[i]}x ${sku[i]} = ${subTotal[i]}\n`
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

  printReceipt (today, receiptLine, totalPrice) {
    return `   ~~~ Bob's Bagels ~~~\n\n${today}\n\n${receiptLine}          ----\n          ${totalPrice}`
  }
}

module.exports = Receipt

// const cofDeal = { COF: 1, BGLO: 1, 'BGLP x COF': 1 }
// const subPrice = { COF: 0.99, BGLO: 0.49, 'BGLP x COF': 1.25 }
// const totalPrice = 2.73

// const receipt = new Receipt()
// const receiptLine = receipt.receiptLine(cofDeal, subPrice)
// console.log(receipt.printReceipt(receipt.today(), receiptLine, totalPrice))