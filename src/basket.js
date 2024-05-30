class Basket {

    addToBasket(title) {
        const item = new Item(1, title)
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

export default Basket