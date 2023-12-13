class BagelBasket {
    constructor(capacity = 5) {
        this.capacity = capacity;
        this.items = [];
    }

    addItem(item) {
        if (this.isFull()) {
            return "Basket is full";
        }
        this.items.push(item);
    }

    removeItem(itemName) {
        const index = this.items.findIndex(item => item.name === itemName);
        if (index === -1) {
            return "Item not found";
        }
        this.items.splice(index, 1);
    }

    isFull() {
        return this.items.length >= this.capacity;
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

module.exports = BagelBasket;
