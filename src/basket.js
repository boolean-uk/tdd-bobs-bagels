class Basket {
    items = []

    add (item) {
        this.items.push(item)
        return this.items
    }
}

module.exports = Basket