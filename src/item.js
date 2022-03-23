class Item {
    constructor (id, name, quantity=1) {
        this.id = id
        this.name = name
        this.price = 2
        this.quantity = quantity
    }

    getPrice () {
        return this.price
    }
}

module.exports = Item