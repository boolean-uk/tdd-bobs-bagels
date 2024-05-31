class Menu {
    fullMenu() {
        return [
            {bagel: 'plain',
                price: 3.99},
            {bagel: 'poppyseed',
                price: 5.99},
            {bagel: 'salmon',
                price: 6.99}
        ] 
    }
}

class BobsBagels {
    constructor() {
        this.basket = []
        this.id = 1
    }

    createOrder(name) {
        const bagel = new Bagel(this.id, name)
        this.id++

        return bagel
    }

    addToBasket(bagel) {
        const basket = this.basket
        basket.push(bagel)

        if (basket.length > 6) {
            throw "basket is at full capacity"
        }
        return this.basket
    }

    remove(name) {
        const basket = this.basket
        for(let i = 0; i < basket.length; i++) {
            if(basket[i].bagel !== name) {
                return "this item doesn't exist"
            }
        }
        const bagels = basket.find(bagel => bagel.name === name)
        this.basket = basket.filter(bagel => bagel.name !== name)
        return bagels
    }

    createManagerXlBasket(bagel) {
        this.xlBasket = []
        this.xlBasket.push(bagel)

        return this.xlBasket
    }

    checkPrice(name) {
        const menu = new Menu
        const fullMenu = menu.fullMenu()

        const item = fullMenu.find(i => {if(i.bagel === name) return i})
        return item
    }
}

const fullMenu = new BobsBagels
fullMenu.checkPrice('poppyseed')

class Bagel {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}



export { Bagel }

export default BobsBagels