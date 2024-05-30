import data from '../inventory.json' assert { type: 'json' }

const { inventory } = data

class Basket {
    constructor() {
        this.contents = []
        this.contentLimit = 5
    }

    addItem(SKU) {
        const itemToAdd = inventory.find((item) => item.sku === SKU)
        this.contents.push(itemToAdd)
    }
}


export default Basket