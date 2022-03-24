class Item {
    constructor (SKU, quantity=1) {
        this.SKU = SKU
        this.name
        this.variant
        this.price
        this.discount
        this.quantity = quantity
        this.bundleSize
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
                this.price = 0.49 * this.quantity
                this.discount = -0.45
                this.bundleSize = 6
                break
            case 'BGLP':
                this.name = 'Bagel'
                this.variant = 'Plain'
                this.price = 0.39 * this.quantity
                this.discount = -0.69
                this.bundleSize = 12
                break
            case 'BGLE':
                this.name = 'Bagel'
                this.variant = 'Everything'
                this.price = 0.49 * this.quantity
                this.discount = -0.45
                this.bundleSize = 6
                break
            case 'COF':
                this.name = 'Coffee'
                this.variant = 'Americano'
                this.price = 0.99 * this.quantity
        }
    }
}

module.exports = Item