class BobsBagels {
    constructor() {
        this.basket = []
    }

    addToBasket(title) {
        const bagel = new Bagel(1, title)
        this.basket.push(bagel)
        return bagel
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