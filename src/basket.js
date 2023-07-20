class Basket {
    constructor(capacity) {
        this.capacity = capacity
        this.contents = []
    }

    isEmpty() {
        return this.contents.length === 0
    }

    getItemsCount() {
        return this.contents.length
    }

    getItemQuantity(product) {
        return this.contents.filter(item => item.sku === product.sku).length
    }

    _getLeftCapacity() {
        return this.capacity - this.getItemsCount()
    }

    isBasketFull() {
        return this._getLeftCapacity() === 0
    }

    addItem(product, quantity) {
        if (quantity < 0) {
            throw new Error("Can't add negative amount of products to basket")
        }
        if (this.isBasketFull()) {
            throw new Error("Basket is full!!!")
        }
        if (this._getLeftCapacity() - quantity < 0) {
            throw new Error("Can't add as more than ${this._getLeftCapacity} items to basket")
        }

        for (let i = 0; i < quantity; i++) {
            this.contents.push(product)
        }
    }
}

module.exports = Basket