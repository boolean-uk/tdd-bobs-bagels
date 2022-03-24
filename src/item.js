class Item {
    constructor (SKU, quantity=1) {
        this.SKU = SKU
        this.name
        this.variant
        this.price
        this.quantity = quantity
        this._initialiseItem(this.SKU)
    }

    getPrice () {
        return this.price
    }

    _initialiseItem (SKU) {
        switch (SKU) {
            case 'BGLO':
                this.name = 'Bagel'
                this.variant = 'Onion'
                this.price = 0.49
                break
            case 'BGLP':
                this.name = 'Bagel'
                this.variant = 'Plain'
                this.price = 0.39
                break
            case 'BGLE':
                this.name = 'Bagel'
                this.variant = 'Everything'
                this.price = 0.49
                break
            case 'COF':
                this.name = 'Coffee'
                this.variant = 'Americano'
                this.price = 0.99
        }
    }
}

module.exports = Item