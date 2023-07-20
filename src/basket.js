const inv = require('../inventory.json').inventory

class Basket {
    constructor() {
        this.contents = []
        this.capacity = Basket.defaultCapacity
    }

    addItem(sku, amount = 1) {
        const bagel = inv.find((item) => item.sku === sku)
        if (bagel === undefined) {
            console.log("Sorry, we do not have this item") 
            return false
        }
        else if (this.contents.length + amount > this.capacity) {
            console.log("Basket full")
            return false
        }
        for (let i = 0; i < amount; ++i) this.contents.push(bagel)
        return true;
    }

    removeItem(sku) {
        const bagelInd = this.contents.findIndex((item) => item.sku === sku)
        if (bagelInd === -1) {
            console.log("This item is not in your basket")
            return false
        }
        this.contents.splice(bagelInd, 1)
        return true
    }

    setCapacity(newCapacity) {
        if (!Number.isInteger(newCapacity)) {
            console.log("New capacity must be a positive integer")
            return false
        }
        if (newCapacity < this.contents.length) {
            console.log("New capacity cannot be smaller than contents length")
            return false
        }
        this.capacity = newCapacity
        return true
    }

    static setDefaultCapacity(newCapacity) {
        if (!Number.isInteger(newCapacity) || newCapacity <= 0) {
            console.log("New default capacity must be a positive integer")
            return false
        }
        Basket.defaultCapacity = newCapacity
        return true
    }

    static getPrice(sku) {
        const bagel = inv.find((item) => item.sku === sku)
        if (bagel === undefined) {
            console.log("Sorry, we do not have this item") 
            return false
        }
        return Number(bagel.price)
    }

    totalCost() {
        let total = 0
        this.contents.forEach((bagel) => {
            total += Number(bagel.price)
            return total
        })
        return Number(total.toFixed(2))
    }
}
Basket.defaultCapacity = 4

module.exports = {
    Basket
}