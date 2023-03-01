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

    removeFromBasket(sku) {
        // const removedBagel = this.basket.find(bagel => bagel.sku === sku)
        const removedBagel = (bagel) => bagel.sku === sku
        
        const index = this.basket.findIndex(removedBagel)

        if (removedBagel) {
            const basket = new Basket()
            this.basket.splice(index, 1)
        } else {
            return "this bagel is not in your basket"
        }
    }
}


// const basket = new Basket()
// basket.addToBasket('BGLO')
// console.log(basket)

// // const basket = new Basket()
// basket.removeFromBasket('BGLO')
// console.log(basket)

module.exports = {
    Basket
}