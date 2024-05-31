class BobsBagels {
    constructor() {
        this.basket = []
    }

    addToBasket(title) {
        const bagel = new Bagel(1, title)
        this.basket.push(bagel)
        return bagel
    }

    remove(id) {
        const bagels = this.basket.find(bagel => bagel.id === id)
        this.basket = this.basket.filter(bagel => bagel.id !== bagel.id)
        return bagels
    }

}

class Bagel {
    constructor(id, title) {
        this.id = id
        this.title = title
    }
}

export { Bagel }

export default BobsBagels