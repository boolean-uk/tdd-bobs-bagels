const inventory = require("./inventory.js")

class Basket {
    constructor(capacity = 10) {
        this.basket = []
        this.capacity = capacity
    }

    addToBasket(sku, quantity) {
        const addedBagel = inventory.find(bagel => bagel.sku === sku)
        const pushQuantity = quantity

        if (addedBagel) {
            const basket = new Basket()
            for (let i = 0; i < pushQuantity; i++) {
                this.basket.push(addedBagel)
            }
            return basket
            // return addedBagel
        } else {
            return "this bagel does not exist"
        }
    }

    removeFromBasket(sku) {

        const removedBagelList = this.basket.filter((bagel) => bagel.sku !== sku)
        const removedBagel = (bagel) => bagel.sku === sku

        const index = this.basket.findIndex(removedBagel)

        if (index === -1) {
            return 'this bagel is not in your basket'
        }
        else {
            this.basket = removedBagelList
            // const updatedBasket = new Basket()
            // this.basket.splice(index, 1)
            return removedBagelList
        }
    }

    //also enables the capacity to increase
    checkBasketCapacity() {
        const basket = new Basket()
        return basket.capacity
    }

    displayPrice(sku) {
        //filter inventory
        const bagelPrice = inventory.filter((bagel) => bagel.sku === sku)
        //add to a basket to store it so that function can check the price
        for (let i = 0; i < bagelPrice.length; i++) {
            //should only have one: can only check one at a time
            return bagelPrice[i].price
        }
    }

    calculateTotal() {
        // const basket = new Basket()

        const priceList = []

        this.basket.map((cost) => {
             //convert string to number for calculations
            priceList.push(Number(cost.price))
        })

        let total = 0
        for (let i = 0; i < priceList.length; i++) {
            total += priceList[i]
        }

        return total
    }

}

// const basket = new Basket()
// basket.addToBasket('BGLO', 2)
// console.log("added item:", basket)

const newBasket = new Basket()
// basket.removeFromBasket('BGLO')
// console.log("should be empty:", basket)
newBasket.displayPrice('BGLO')



module.exports = {
    Basket
}


// // const basket = new Basket()
// basket.removeFromBasket('BGLO')
// console.log(basket)
