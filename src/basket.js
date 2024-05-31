class BobsBagels {
    constructor() {
        this.basket = []
        this.id = 1
    }

    createOrder(name) {
        const bagel = new Bagel(this.id, name)
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

    remove(name) {
    
        const bagels = basket.find(bagel => bagel.name === name)
        this.basket = basket.filter(bagel => bagel.name !== name)
        return bagels
    }

    createManagerXlBasket(bagel) {
        this.xlBasket = []
        this.xlBasket.push(bagel)

        return this.xlBasket
    }

}

class Bagel {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

export { Bagel }

export default BobsBagels