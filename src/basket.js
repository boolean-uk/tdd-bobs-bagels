const inventory = require("./inventory.js")

class Basket {
    constructor(capacity = 10) {
        this.basket = []
        this.capacity = capacity
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
        const removedBagel = (bagel) => bagel.sku === sku

        const index = this.basket.findIndex(removedBagel)

        if (removedBagel) {
            const basket = new Basket()
            this.basket.splice(index, 1)
        } else {
            return 'this bagel is not in your basket'
        }
    }

    //also enables the capacity to increase
    checkBasketCapacity() {
        const basket = new Basket()
        return basket.capacity
    }

    //maybe will need to refactor this as function above allows increase of capacity
    // increaseCapacity(newCapacity) {
    //     const basket = new Basket(newCapacity)
    //     return basket.capacity
    // }

}

// const basket = new Basket()
// removeFromBasket('BGLO')
// // basket.addToBasket('BGLO')
// console.log(basket)

module.exports = {
    Basket
}


// // const basket = new Basket()
// basket.removeFromBasket('BGLO')
// console.log(basket)
