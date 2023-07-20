class Basket {
    constructor (capacity = 5) {
       this.capacity = capacity
       this.basketList = {}
    }

    addProduct = (product, amount) => {
        if (this.capacity >= amount) {
            this.basketList[product] = (this.basketList[product] || 0) + amount
        }
    }

    getBasketList = () => {
        Object.keys(this.getBasketList())
    }

}

module.exports = {
    Basket
}