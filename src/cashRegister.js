const Basket = require("./basket")
const Item = require("./item")

class CashRegister {
    constructor (items) {
        this.items = items
    }

    getTotalPrice () {
        return this.items.reduce((acc, cur) => acc += cur.price * cur.quantity, 0)
    }

    printReceipt () {
        const items = this.items
        const total = this.getTotalPrice().toFixed(2)
        let str = ``
        for (let i = 0; i < items.length; i++) {
            const [variant, name] = [items[i].variant, items[i].name]
            const qty = items[i].quantity
            const price = (qty * items[i].price).toFixed(2)

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

    applyOffers () {
        
    }

    _hasCoffeeAndBagel (items) {
        let [coffee, bagel] = [false, false]
        for (const item of items) {
            if (item.SKU === 'BGLP' && item.quantity > 0) bagel = true
            if (item.SKU === 'COF' && item.quantity > 0) coffee = true
        }
        return coffee && bagel
    }

    _applyPlainBagelsOffer (items) {
        // INCOMPLETE
        const initialArr = items
        const finalArr = []
        for (let i = 0; i < initialArr.length; i++) {
            if (initialArr[i].SKU && initialArr[i].quantity === 12) {
                finalArr.push(initialArr.splice(i, 1))
                continue
            }
            if (initialArr[i].SKU) {
                initialArr[i].quantity -= 12
                finalArr.push(new Item('BGLP', 12))
                continue
            }
        }
        console.log('Initial:', initialArr)
        console.log('Final:', finalArr)
        return finalArr
    }

    _has12PlainBagels (items) {
        let specialOffer = false
        for (const item of items) {
            if (item.SKU === 'BGLP' && item.quantity >= 12) specialOffer = true
        }
        return specialOffer
    }
}
const basket = new Basket()
const item1 = new Item('BGLE', 5)
const item2 = new Item('COF', 2)
const item3 = new Item('BGLO', 1)
const item4 = new Item('BGLP', 2)
basket.add(item1)
basket.add(item2)
basket.add(item3)
basket.add(item4)
const cashRegister = new CashRegister(basket.items)

// console.table(cashRegister.items, ['variant', 'name', 'quantity', 'price'])
console.log(cashRegister.printReceipt())

module.exports = CashRegister
