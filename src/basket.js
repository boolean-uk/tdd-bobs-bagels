import json from "../inventory.json" assert { type: "json" }

const bagels = json.inventory

class Basket {
    constructor(capacity = 4) {
        this.basket = []
        this.capacity = capacity
        this.total = 0
    }

    add(sku) {
        const found = bagels.find((bagel) => bagel.sku === sku)

        if(this.basket.length < this.capacity && found) {
            this.basket.push(found)
            const price = Number(found.price)
            this.total += price

            return this.basket
        } else if (this.basket.length >= this.capacity) {
            throw 'basket is full'
        } else if (!found) {
            throw 'bagel not found'
        }
    }

    price(sku) {
        const found = bagels.find((bagel) => bagel.sku === sku)
        if(found) {
            return found.price
        }
    }
}

export default Basket