//const Basket = require("./item")

class Basket {
    constructor () {
        this.basket =  [] 
    }

    addBagelToBasket (item) {
        this.basket.push(item)
        return this.basket
    }

    removeBagelFromBasket (id) {
        const newBasket = []

        for (let i = 0; i < this.basket.length; i++){
            if (this.basket[i].id !== id) {
                newBasket.push(this.basket[i])
            }
        }
        this.basket = newBasket
        return this.basket
    }
}
module.exports = Basket
