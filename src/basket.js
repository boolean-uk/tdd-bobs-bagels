// eslint-disable-next-line no-use-before-define
import inventory from '../inventory.json' assert { type: 'json' }

const store = inventory.inventory

class Basket {
    constructor() {
        this.basket = [],
        this.capacity = 5
    }

    addToBasket(item) {        
        if(item && typeof item !== 'string'){
            return 'ERROR: Please type in an item'
        }
        if(!item) {
            return 'ERROR: Please type in an item'

        }
        const target = store.filter((obj) => obj.sku === item)
        if (target.length === 0){
            return 'ERROR: Item not found'
        }

        // if statement for finding total items in basket, including quantities
        // find total items with quantities
        function basketTotal(arr) {
            let itemTotal = 0
            for(let i = 0; i < arr.length; i++) {
                itemTotal += arr[i].quantity
            }
        }

        const baskAmount = basketTotal(this.basket)
        if(baskAmount === this.capacity){
            return "Basket is full"
        }
        
        const targObj = target[0]
        const baskCheck = this.basket.find(({sku}) => sku === targObj.sku)
        if(baskCheck !== undefined) {
            const baskIndex = this.basket.indexOf((obj) => obj.sku === item)
            this.basket[baskIndex].quantity += 1
            return this.basket
        }
        targObj.quantity = 1
        this.basket.push(targObj)
        return this.basket
    }

    removeBasket(item) {
        if(item && typeof item !== 'string') {
            return 'ERROR: Please type in an item'
        }
        if(!item) {
            return 'ERROR: Please type in an item'
        }
        const targStore = store.find(({sku}) => sku === item)
        if (targStore === undefined){
            return 'ERROR: Item not found'
        }
        const targ = this.basket.find(({sku}) => sku === item)
        if(targ === undefined) {
            return 'ERROR: Item not in basket'
        }
        this.basket = this.basket.filter((obj) => obj.sku !== item)
        return this.basket
    }
}

export default Basket