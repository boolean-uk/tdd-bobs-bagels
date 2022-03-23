class Item {
    constructor (id, name) {
        this.id = id
        this.name = name
        this.price = 2
    }

    getPrice () {
        return this.price
    }
}

module.exports = Item