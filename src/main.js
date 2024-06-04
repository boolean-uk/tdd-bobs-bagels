const Item = require('./item')
const Basket = require('./basket')

const main = () => {
  const basket = new Basket()
  const plainBagel = new Item('Plain Bagel', 1.5)
  const eggBagel = new Item('Egg Bagel', 2.0)

  basket.addItem(plainBagel)
  basket.addItem(eggBagel)

  console.log(basket.totalPrice())
}

if (require.main === module) {
  main()
}

module.exports = main
