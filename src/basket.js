import data from '../inventory.json' assert { type: 'json' }

const { inventory } = data

class Basket {
  constructor(contentLimit = 5) {
    this.contents = []
    this.contentLimit = contentLimit
  }

  addItem(SKU) {
    if (this.contents.length >= this.contentLimit) {
      return 'Sorry, your basket is full'
    }
    const itemToAdd = inventory.find((item) => item.sku === SKU)
    this.contents.push(itemToAdd)
  }

  removeItem(SKU) {
    const itemToRemove = this.contents.find((item) => item.sku === SKU)
    const index = this.contents.indexOf(itemToRemove)
    this.contents.splice(index, 1)
  }
}

// const basket = new Basket()

// basket.addItem('COF')
// basket.addItem('BGLS')

export default Basket
