const Basket = require("./basket")
const Item = require("./item")

class CashRegister {
    constructor (items) {
        this.items = items
    }

    getTotalPrice () {
        return this.items.reduce((acc, cur) => acc += cur.price * cur.quantity, 0)
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
const cashRegister = new CashRegister()
console.log(cashRegister.printReceipt())
module.exports = CashRegister
