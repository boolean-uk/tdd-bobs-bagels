class Basket {
    constructor () {
        this.items = []
        this.capacity = 5
    }

    add (item) {
        if (!this._hasCapacity(item.quantity)) return 'Sorry, your basket is already full.'
        this.items.push(item)
        this.capacity -= item.quantity

        return this.items
    }

    remove (SKU) {
        if (!this._itemExists(SKU)) return 'Sorry, that item is not in the basket'

        this.items = this.items.filter((item) => item.SKU !== SKU)
        return this.items
    }

    getTotalPrice () {
        return this.items.reduce((total, item) => total += item.price, 0)
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
}

module.exports = Basket