export default class Bagelbakery {
  constructor() {
    this.id = 0
    this.basket = []
    this.removedItems = []

    this.bagelPrice = {
      plain: 0.3,
      poppyseed: 0.35,
      onion: 0.25,
      garlic: 0.4,
      sesame: 0.45,
      pumpernickel: 0.35,
      wholewheat: 0.5,
      cheddar: 0.6,
      egg: 0.8,
      salt: 0.65,
      chocolate: 0.9
    }
    this.basketCapacity = 3
  }

  isAddedBefore(type) {
    return Boolean(this.basket.find((item) => item?.type === type))
  }

  checkBasketCapacity() {
    return this.basket.length >= this.basketCapacity
  }

  addItem(type, quantity = 1) {
    if (this.checkBasketCapacity()) return 'You basket is full'

    if (!this.bagelPrice[type]) return 'This Bagel is not available'

    if (this.isAddedBefore(type)) {
      this.basket.forEach((item) => {
        if (item?.type === type) {
          quantity === 1
            ? item.quantity++
            : (item.quantity = item.quantity + quantity)
        }
      })
    } else {
      this.id++
      const item = {
        id: this.id,
        type: type,
        quantity: quantity,
        price: this.bagelPrice[type]
      }

      this.basket.push(item)
      return item
    }
  }

  removeItem(id) {
    const itemToRemove = this.basket.find((item) => item.id === id)

    if (!itemToRemove)
      return 'The item that you want to remove does not exist in the basket'

    this.removedItems.push(itemToRemove)

    this.basket = this.basket.filter((item) => item.id !== itemToRemove.id)
  }

  // ----
}

const bagelBakery = new Bagelbakery()
