import json from "../inventory.json" assert { type: "json" }

const bagels = json.inventory

class Basket {
    constructor(capacity = 4) {
        this.basket = []
        this.capacity = capacity
        this.total = 0
        this.amount = 0
    }

    add(sku) {
        const found = bagels.find((bagel) => bagel.sku === sku)
        const foundBagelInBasket = this.basket.find((b) => b.sku === found.sku)
        const foundPlainBagel = this.basket.find((b) => b.sku === 'BGLP')
        const foundCoffee = this.basket.find((b) => b.sku === 'COF')

        if(this.amount < this.capacity && found && !foundBagelInBasket) {
            found.quantity = 1
            this.amount++
            this.basket.push(found)

            if (
                (found.sku === 'COF' && foundPlainBagel && foundPlainBagel.quantity % 12 !== 0) ||
                (found.sku === 'BGLP' && foundCoffee)

            ) {
                this.total -= 0.13
            }

            const price = Number(found.price)
            this.total += price

            return this.basket
        } else if (this.amount < this.capacity && foundBagelInBasket) {
            found.quantity++
            this.amount++

            if (
                (foundBagelInBasket.sku === 'BGLO' 
                || foundBagelInBasket.sku === 'BGLE') 
                && foundBagelInBasket.quantity % 6 === 0
            ) {
                this.total -= 0.45
            }

            if (foundBagelInBasket.sku === 'BGLP' && foundBagelInBasket.quantity % 12 === 0) {
                this.total -= 0.69
            }

            if (
                foundBagelInBasket.sku === 'COF' && 
                foundPlainBagel.quantity >= 1 &&
                foundPlainBagel.quantity % 12 !== 0
            ) {
                this.total -= 0.13
            }

            const price = Number(found.price)
            this.total += price

            return this.basket
        }
        
        if (this.amount >= this.capacity) {
            throw 'basket is full'
        } 
        
        if (!found) {
            throw 'bagel not found'
        }
    }

    price(sku) {
        const found = bagels.find((bagel) => bagel.sku === sku)
        if (found) {
            return found.price
        } else {
            throw 'bagel not found'
        }
    }

    checkOut() {
        return Number(this.total.toFixed(2))
    }

    remove(sku) {
        const foundIndex = this.basket.findIndex((bagel) => bagel.sku === sku)
        const found = this.basket.find((b) => b.sku === sku)

        if (foundIndex >= 0 && found && found.quantity === 1) {
            const price = Number(found.price)
            this.total -= price
            this.basket.splice(foundIndex, 1)
        } else if (foundIndex >= 0 && found && found.quantity > 1) {
            const price = Number(found.price)
            this.total -= price
            found.quantity--
        }
        
        if (!found) {
            throw 'bagel not found'
        }
    }

    printReceipt() {
            const date = new Date()

            const bobsBagels = `
            ~~~ Bob's Bagels ~~~
        
        ${date}
        
        ----------------------------`

        const totalCost = `      ----------------------------
        Total                 £${this.total}
        
                    Thank you
                for your order!`

        function getItem(item) {
            return `${item.variant} ${item.name}         ${item.quantity}   £${item.quantity * item.price} \n`
        }

        let allItems = this.basket.map((b) => getItem(b))
        allItems = allItems.join('')

        return `${bobsBagels} \n ${allItems.toString()} \n ${totalCost}`
      }
}

class Manager {
    constructor (capacity) {
        this.capacity = capacity
        this.basket = this.createBasket()
    }
  
    createBasket() {
        const basket = new Basket(this.capacity)
        return basket
    }
}

export { Manager }
export default Basket