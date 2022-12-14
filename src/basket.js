const { inventory } = require('../inventory.json')

const basket = []

function add() {
  const bagel = {
    sku: '',
    price: '',
    name: '',
    variant: ''
  }
  basket.push(bagel)
  return basket
}

function basketReset() {
  basket.splice(0, basket.length)
}

module.exports = {
  add,
  basketReset
}
