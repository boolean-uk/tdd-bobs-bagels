class BobsBagels {
    constructor() {
        this.basket = []
    }

    addToBasket(title) {
        const item = new Item(1, title)
        this.basket.push(item)
        return item
    }

}

class Item {
    constructor(id, title) {
        this.id = id
        this.title = title
    }
}

export { Item }

export default BobsBagels