class Basket {
    constructor (capacity = 5) {
       this.capacity = capacity
       this.basketList = {}
    }

    addProduct = (product, amount) => {
        if (this.capacity - this.getNumbersOfProduct() >= amount) {
            this.basketList[product.sku] = (this.basketList[product.sku] || 0) + amount
        }
    }

    removeProduct = (product, amount) => {
        if (Object.keys(this.basketList).includes(product.sku)) {
            delete this.basketList[product.sku]
        } else return 'Product not in basket'
    }

    getCapacity = () => {
        return this.capacity
    }
    getBasketList = () => {
        return this.basketList
    }

    getNumbersOfProduct = () => {
        return Object.values(this.basketList).reduce((x, y) => x + y, 0)
    }
    isFull = () => {
        return this.getNumbersOfProduct() === this.capacity
    }

}

module.exports = {
    Basket
}