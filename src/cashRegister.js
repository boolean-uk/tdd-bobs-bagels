const Basket = require("./basket")
const Item = require("./item")

class CashRegister {
    constructor (items) {
        this.items = items
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
                str += `${variant} ${name}   ${qty} £${(price)}\n`
            }
            else {
                str += `${variant} ${name}        ${qty} £${(price)}\n`
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

    _applyOffers () {
        const items = this.items
        for (let i = 0; i < items.length; i++) {
            if (items[i].discount) {
                items[i].price += items[i].discount * (Math.floor(items[i].quantity / items[i].bundleSize))
            }
        }
        return items
    }

    _hasCoffeeAndBagel (items) {
        let [coffee, bagel] = [false, false]
        for (const item of items) {
            if (item.SKU === 'BGLP' && item.quantity > 0) bagel = true
            if (item.SKU === 'COF' && item.quantity > 0) coffee = true
        }
        return coffee && bagel
    }

}

// TESTING
const basket = new Basket()
const item1 = new Item('BGLE', 3)
const item5 = new Item('BGLE', 3)
const item2 = new Item('COF', 2)
const item3 = new Item('BGLO', 1)
const item4 = new Item('BGLP', 5)
basket.add(item1)
basket.add(item2)
basket.add(item3)
basket.add(item4)
basket.add(item5)
const cashRegister = new CashRegister(basket.items)

// console.table(cashRegister.items, ['variant', 'name', 'quantity', 'price'])
console.log(cashRegister.printReceipt())

module.exports = CashRegister
