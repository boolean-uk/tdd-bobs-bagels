class Basket {
    constructor (capacity = 5) {
       this.capacity = capacity
       this.basketList = {}
    }

    addProduct = (product, amount) => {
        if (this.capacity - this.getNumberOfProducts() >= amount) {
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
    setCapacity = (newCapacity) => {
        this.capacity = newCapacity
    }
    getBasketList = () => {
        return this.basketList
    }

    getNumberOfProducts = () => {
        return Object.values(this.basketList).reduce((x, y) => x + y, 0)
    }

    getNumberOfBagels = () => {
        const bagels = Object
            .entries(this.basketList)
            .filter(([product, quantity]) => product[0] === 'B')
            .map(([product,quantity])=>quantity)
        return bagels.reduce((x,y) => x+y,0)
    }

    isFull = () => {
        return this.getNumberOfProducts() === this.capacity
    }

}

module.exports = {
    Basket
}