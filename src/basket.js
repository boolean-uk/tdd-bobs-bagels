const Item = require("../src/item")
class Basket {
    items = []

    add (item) {
        this.items.push(item)
        return this.items
    }

    remove (id) {
        this.items = this.items.filter((item) => item.id !== id)
        return this.items
    }
}

const basket = new Basket()
const item = new Item(1, 'bagel')
const item2 = new Item(2, 'bagel')
basket.add(item)
basket.add(item2)
console.log(basket.items)

module.exports = Basket