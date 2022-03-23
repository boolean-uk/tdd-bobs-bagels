class Basket {
    constructor() {
        this.bagelBasket = [];
        this.fullCapacity = 3;
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
            // return this.isFull()

        }
    }

// write conditional statement in the remove function
// so it doesn't try to remove an item that doesn't exist
    remove(bagelName) {
        this.bagelBasket = this.bagelBasket.filter((item) => {
            return item !== bagelName;
        });
        console.log(this.bagelBasket);
        return this.bagelBasket; 
    }

    // itemDoesNotExist(bagelName) {
    //     if (bagelName !== this.bagelBasket) {
    //         return 
    //     }
    // }

    isFull() {
        if (this.bagelBasket.length >= this.fullCapacity) {
            return "Cannot add, basket is full";
        } else return "Basket is not full, you can continue to order";
    }

    createLargerBasket(biggerBasket) {
        this.fullCapacity = biggerBasket;
    }
}

module.exports = Basket;
