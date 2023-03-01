const inventory = require("./inventory.js")

class Basket {
    constructor() {
        this.basket = []
    }

    addToBasket(sku) {
        const addedBagel = inventory.find(bagel => bagel.sku === sku)

        if (addedBagel) {
            const basket = new Basket()

            this.basket.push(addedBagel)
            return addedBagel
        } else {
            return "this bagel does not exist"
        }
    
    }
}

// const basket = new Basket()
// basket.addToBasket('BGSE')
// console.log(Basket.basket)

module.exports = {
    Basket
}