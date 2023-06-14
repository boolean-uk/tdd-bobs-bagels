import inventory from '../inventory.json' assert {type: 'json'}
const inv = JSON.parse(JSON.stringify(inventory.inventory))

class Basket {
  constructor() {
    this.basket = []
    this.capacity = 1
  }

addItem(sku) {
      const bagel = inv.find((item) => item.sku === sku)
      if(this.basket.length < this.capacity) {
          if (bagel) {
            //   console.log(bagel);
            this.basket.push(bagel)
            console.log('basket add', this.basket)
            return this.basket
          } else {
            console.log('item not found, try again')
          }
      } else {
        console.log('basket full')
        return 'basket full'
      }
  }

  removeItem(sku) {
    const bagelIndex = this.basket.findIndex((item) => item.sku === sku)

    if (bagelIndex !== -1) {
      console.log('item found at index:', bagelIndex)
      this.basket.splice(bagelIndex, 1)
      console.log('basket after remove', this.basket)
    } else {
      console.log('item not in basket')
      return 'item not in basket'
    }
    return this.basket
  }

  increaseCapacity(quantity) {
    this.capacity = quantity
    console.log('maximum basket capacity changed to', quantity)
    return `maximum basket capacity changed to ${quantity}`
  }
}

export default Basket
