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
    this.basketCapacity = 10
  }

  addItem(type, quantity = 1) {
    this.id++
    const item = {
      id: this.id,
      type: type,
      quantity: quantity,
      price: this.bagelPrice[type]
    }

    return item
  }
}

const bagelBakery = new Bagelbakery()
