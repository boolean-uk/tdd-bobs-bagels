class Receipt {
  receiptLine (skuQuantity, subPrice) {
    let receipt = ''
    const receiptLength = Object.keys(subPrice).length

    for (let i = 0; i < receiptLength; i++) {
      const sku = Object.keys(skuQuantity)
      const quantity = Object.values(skuQuantity)
      const subTotal = Object.values(subPrice)
      receipt += `${quantity[i]}x ${sku[i]} = ${subTotal[i]}\n`
    }
    return receipt
  }

  printReceipt (receiptLine, totalPrice) {
    return `${receiptLine}          ----\n          ${totalPrice}`
  }
}

module.exports = Receipt
