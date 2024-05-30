import data from '../inventory.json' assert { type: 'json' }

const { inventory } = data

class Basket {
    constructor(contentLimit = 5) {
        this.contents = []
        this.contentLimit = contentLimit
    }

    addItem(SKU) {
        const itemToAdd = inventory.find((item) => item.sku === SKU)
        this.contents.push(itemToAdd)
    }
}


export default Basket