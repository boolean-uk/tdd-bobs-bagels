class BobsBagels {
    constructor() {
        this.basket = []
        this.id = 1
    }

    createOrder(title) {
        const bagel = new Bagel(this.id, title)
        this.id++

        return bagel
    }

    addToBasket(bagel) {
        const basket = this.basket
        basket.push(bagel)

        if (basket.length > 6) {
            throw "basket is at full capacity"
        }
        return this.basket
    }

    remove(id) {
        const bagels = this.basket.find(bagel => bagel.id === id)
        this.basket = this.basket.filter(bagel => bagel.id !== bagel.id)
        return bagels
    }

    createManagerXlBasket() {
        this.xlBasket = []
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