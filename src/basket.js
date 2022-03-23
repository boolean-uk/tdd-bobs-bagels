//const Basket = require("./bagel")

class Basket {
    constructor () {
        this.basket =  []
        this.capacityBasket = 2 
    }

    addItemToBasket (item) {
        this.basket.push(item)
        return this.basket
    }

    removeItemFromBasket (id) {
        const newBasket = []

        for (let i = 0; i < this.basket.length; i++){
            if (this.basket[i].id !== id) {
                newBasket.push(this.basket[i])
            }
        }
        this.basket = newBasket
        return this.basket
    }

    isFull () {
        if ( this.basket.length >= this.capacityBasket ) { return true }
        return false
    }
}
module.exports = Basket