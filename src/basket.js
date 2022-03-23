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

    remove (id) {
        if (!this._itemExists(id)) return 'Sorry, that item is not in the basket'

        this.items = this.items.filter((item) => item.id !== id)
        return this.items
    }

    getTotalPrice () {
        let total = 0
        for (const item of this.items) {
            total += item.price * item.quantity
        }
        return total
    }

    setCapacity (newCapacity) {
        this.capacity = newCapacity
        return this.capacity
    }

    _hasCapacity (num) {
        return num <= this.capacity
    }

    _itemExists (id) {
        for (const item of this.items) {
            if (item.id === id) return true
        }
        return false
    }
}

module.exports = Basket