class BobsBagels {
    constructor() {
        this.basket = []
        this.id = 1
    }

    addToBasket(title) {
        const basket = this.basket
        const bagel = new Bagel(this.id, title)
        this.id++

        basket.push(bagel)

        if (basket.length > 6) {
            throw "basket is at full capacity"
        }
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