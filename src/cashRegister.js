const Basket = require("./basket")
const Item = require("./item")
const SMS = require("./sms")

class CashRegister {
    constructor (items) {
        this.items = items
        this.discounts = {
            BGLP: undefined,
            BGLO: undefined,
            BGLE: undefined
        }
    }

    getTotalPrice () {
        this.items = this._applyOffers()
        const total = this.items.reduce((acc, cur) => acc += cur.price, 0).toFixed(2)
        return Number(total)
    }

    printReceipt () {
        const items = this.items
        const total = this.getTotalPrice()
        let str = ``
        for (let i = 0; i < items.length; i++) {
            const [variant, name] = [items[i].variant, items[i].name]
            const qty = items[i].quantity
            const price = (items[i].price).toFixed(2)

            if (items[i].SKU === 'COF' || items[i].SKU === 'BGLE') {
                str += `${variant} ${name}  ${qty}  £${(price)}\n`
            }
            else {
                str += `${variant} ${name}       ${qty}  £${(price)}\n`
            }
            if (this.discounts[items[i].SKU] < 0) {
                str += `                   (${this.discounts[items[i].SKU]})\n`
            }
        }

        const date = new Date()
        let receipt = `    ~~~ Bob's Bagels ~~~\n`
        receipt += `    ${date.toLocaleDateString()} ${date.toLocaleTimeString()}\n`
        receipt += `----------------------------\n`
        receipt += `${str}`
        receipt += `----------------------------\n`
        receipt += `Total                £${total}\n`
        receipt += `         Thank you\n`
        receipt += `      for your order!`

        return receipt
    }

    createOrderConfirmation () {
        const items = this.items
        const total = this.getTotalPrice()
        let str = ``
        for (let i = 0; i < items.length; i++) {
            const SKU = items[i].SKU
            const qty = items[i].quantity
            const price = (items[i].price).toFixed(2)

            if (items[i].SKU === 'COF') {
                str += `${SKU}  x${qty}  £${(price)}\n`
            }
            else {
                str += `${SKU} x${qty}  £${(price)}\n`
            }
        }

        const date = new Date()
        let order = `Your order:\n`
        order += `${str}`
        order += `Total    £${total}\n\n`
        order += `Est. delivery time: 90 min\n`
        order += `Thank you for your order!\n`
        order += `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`

        return order
    }

    _applyOffers () {
        const items = this.items
        for (let i = 0; i < items.length; i++) {
            if (items[i].discount) {
                items[i].price += items[i].discount * (Math.floor(items[i].quantity / items[i].bundleSize))
                this.discounts[items[i].SKU] = items[i].discount * (Math.floor(items[i].quantity / items[i].bundleSize))
            }
        }
        return items
    }
}

module.exports = CashRegister