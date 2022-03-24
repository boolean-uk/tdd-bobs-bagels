class Basket {
    constructor() {
        this.bagelBasket = [];
        this.fullCapacity = 3;

        this.bagelMenu = [
            {
                bagelName: "onion", price: 1.50
            },
            {
                bagelName: "plain", price: 0.99
            },
            {
                bagelName: "peanut", price: 1.50
            },
            {
                bagelName: "butter", price: 1.50
            }
        ]
        
    }

// write conditional statement in the add function
// so it doesn't add when the capacity is full
    add(bagelName) {
        if (this.bagelBasket.length < this.fullCapacity) {
            this.bagelBasket.push(bagelName);
            console.log(this.bagelBasket);
            return this.bagelBasket;
        } else {
            console.log(this.bagelBasket)
            return "Cannot add, basket is full"
        }
    }

// write conditional statement in the remove function
// so it doesn't try to remove an item that doesn't exist
    remove(bagelName) {
          let itemExist = false

            for (let i = 0; i < this.bagelBasket.length; i+= 1 ) {
                console.log("TopOfLoop",this.bagelBasket[i],i)
                if (this.bagelBasket[i] === bagelName) {
                    // console.log("insideIf",this.bagelBasket)
                    this.bagelBasket.splice(i, 1)
                    itemExist = true
                }
            }
            console.log(itemExist)
            if (itemExist === false) {
                return "cannot remove a non existing item"
            } else return this.bagelBasket

            // console.log("here", this.bagelBasket);
    }

    isFull() {
        if (this.bagelBasket.length >= this.fullCapacity) {
            return "Cannot add, basket is full";
        } else return "Basket is not full, you can continue to order";
    }

    createLargerBasket(biggerBasket) {
        this.fullCapacity = biggerBasket
    }


    bagelPrice(bagelName) {
        for ( let i = 0; i < this.bagelMenu.length; i++) {
            if (bagelName === this.bagelMenu[i].bagelName) {
                return this.bagelMenu[i].price
            }
        }
        return "That item does not exist"

    }
    
}

module.exports = Basket;
