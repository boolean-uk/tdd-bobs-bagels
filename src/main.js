const Item = require('./item')
const Basket = require('./basket')

const bagelPlain = new Item('Plain Bagel', 1.5)
const bagelEgg = new Item('Egg Bagel', 2.0)

const basket = new Basket()
console.log(basket.addItem(bagelPlain))
console.log(basket.addItem(bagelEgg))
console.log(basket.showPrice('Plain Bagel'))
console.log(basket.totalPrice())
console.log(basket.checkout())
