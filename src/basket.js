class Basket {
    constructor() {
        this.basket = []
        this.menu = [{name: "seed bagel", price: 1.99}, {name: "dirty bagel", price: 0.99}, {name: "toasted bagel", price: 1.49}, {name: "plain bagel", price: 1.20}]
        this.quantity = 5
        this.itemCount = 0
    }
    addItem(item, quantity = 1) {
        const itemPositionInMenu = this.menu.find((product) => {
            return product.name === item
        })
        if (itemPositionInMenu === undefined) {
            return
        }
        if (this.itemCount + quantity > this.quantity) {
            return "Adding this quantity will overfill your basket"
        }

        // search item is in the basket
        let itemInBasket = false
        let itemIndexInBasket
        this.itemCount += quantity
        for (let i = 0; i < this.basket.length; i++) {
            if (this.basket[i].name === item) {
                itemInBasket = true
                itemIndexInBasket = i
            }
        }
        if (itemInBasket === false) {
            itemPositionInMenu.quantity = quantity
            this.basket.push(itemPositionInMenu)
        }
        else {
            this.basket[i].quantity += quantity
        }
    }

    increaseBasketSize() {
        if (this.quantity === 5) {
            this.quantity = 15
        }
    }
}

export default Basket