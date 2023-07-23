const inventoryData = require('../inventory.json')
const inventory = JSON.parse(JSON.stringify(inventoryData.inventory))

class Basket {
    constructor() {
        this.items = []
        this.capacity = 5
        this.totalPrice = 0
    }

    constructor(capacity) {
        this.items = []
        this.capacity = capacity
        this.totalPrice = 0
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
        this.totalCost = 0
        this.items.forEach((item) => {
            this.totalCost += Math.round(Number(item.price) * item.quantity * 100) / 100
        });
        return this.totalCost.toFixed(2)
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
}

module.exports = {
    Basket: Basket,
};

