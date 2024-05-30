import json from "../inventory.json" assert { type: "json" }

const bagels = json.inventory

class Basket {
    constructor(capacity = 4) {
        this.basket = []
        this.capacity = capacity
    }

    add(sku) {
        const found = bagels.find((bagel) => bagel.sku === sku)

        if(this.basket.length < this.capacity && found) {
            this.basket.push(found)

            return this.basket
        }
    }
}

export default Basket