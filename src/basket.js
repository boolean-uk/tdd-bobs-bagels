const inventoryData = require('../inventory.json')
const inventory = JSON.parse(JSON.stringify(inventoryData.inventory))

class Basket {
    constructor() {
        this.items = []
        this.capacity = 5
    }

    constructor(capacity) {
        this.items = []
        this.capacity = capacity
    }


    addItem(sku) {
        if (this.isBasketFull()) {
            return false
        }
        const existingItem = this.items.find((item) => item.sku === sku)
            if (existingItem) {
                existingItem.quantity++
                return this.items
            }

        const newItem = inventory.find((item) => item.sku === sku)
        if (!newItem) {
            return false
        }

        newItem.quantity = 1
        this.items.push({ ...newItem })
        return this.items
    }

    removeItem(sku) {
        const itemIndex = this.items.findIndex((item) => item.sku === sku)
        if (itemIndex === -1) {
            return false
        }
        const item = this.items[itemIndex]
        item.quantity--
        if (item.quantity <= 0) {
            this.items.splice(itemIndex, 1)
        }
        return this.items
    }

    getTotalCost() {
        let totalCost = 0
        this.items.forEach((item) => {
            totalCost += Math.round((Number(item.price) * 100) * item.quantity) / 100
        });
        return totalCost.toFixed(2)
    }

    currentItemsCount() {
        let currentCount = 0
        this.items.forEach((item) => {
            currentCount += item.quantity
        });
        return currentCount
    }

    isBasketFull() {
        return this.currentItemsCount() === this.capacity
    }

    changeCapacity(capacity) {
        if (capacity < this.currentItemsCount()) {
            return false
        }
        this.capacity = capacity
        return this.capacity
    }

    getTotalCostWithDiscount() {
        let countCoffee = 0
        let countPlainBagel = 0
        let totalCost = 0
        
        this.items.forEach((item) => {
            if (item.sku === 'COF') {
                countCoffee = item.quantity
            }
            if (item.sku === 'BGLP') {
                countPlainBagel = item.quantity % 12
            }
        })

        const coffeePlusBagelDiscount = countCoffee > countPlainBagel ? countPlainBagel : countCoffee

        this.items.forEach((item) => {
            if (item.sku === 'BGLO' || item.sku === 'BGLE') {
                totalcost += (Math.floor(item.quantity / 6) * 249) / 100 
                totalCost += ((item.quantity % 6) * (Number(item.price) * 100)) / 100
            }
            if (item.sku === 'BGLP') {
                totalCost += (Math.floor(item.quantity / 12) * 399) / 100                
                totalCost += ((item.quantity % 12 - coffeePlusBagelDiscount) * (Number(item.price) * 100)) / 100
                totalCost += (coffeePlusBagelDiscount * 125) / 100
            }
            if (item.sku === 'COF') {
                totalCost += ((item.quantity - coffeePlusBagelDiscount) * (Number(item.price) * 100)) / 100
            }
            else {
                totalCost += ((Number(item.price) * 100) * item.quantity) / 100
            }
        })
        
        return totalCost.toFixed(2)
    }
}

module.exports = {
    Basket: Basket,
};

