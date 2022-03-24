const Item = require("./item")

class Basket {
    constructor () {
        this.items = []
        this.capacity = 15
    }

    add (item) {
        if (!this._hasCapacity(item.quantity)) return 'Sorry, your basket is already full.'
        this.items.push(item)
        this.capacity -= item.quantity

        this.items = this._organiseBasket(this.items)

        return this.items
    }

    remove (SKU) {
        if (!this._itemExists(SKU)) return 'Sorry, that item is not in the basket'

        this.items = this.items.filter((item) => item.SKU !== SKU)
        return this.items
    }

    setCapacity (newCapacity) {
        this.capacity = newCapacity
        return this.capacity
    }

    _hasCapacity (num) {
        return num <= this.capacity
    }

    _itemExists (SKU) {
        for (const item of this.items) {
            if (item.SKU === SKU) return true
        }
        return false
    }

    _organiseBasket (items) {
        const initialArr = items
        const finalArr = initialArr.reduce((acc, cur) => {
            const indexOfAlreadyExistingSKU = acc.findIndex(
                (el) => el.SKU === cur.SKU // -1 if condition is not satisfied
            )
            if (indexOfAlreadyExistingSKU !== -1) {
                acc[indexOfAlreadyExistingSKU].quantity += cur.quantity
                acc[indexOfAlreadyExistingSKU].price += cur.price
            } 
            else {
                acc.push(cur)
            }
            return acc
        }, [])
        return finalArr
    }
}

module.exports = Basket