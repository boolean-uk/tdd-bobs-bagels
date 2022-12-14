const { inventory } = require('../inventory.json')

function add() {
  const bagel = {
    sku: '',
    price: '',
    name: '',
    variant: ''
  }
  return bagel
}

module.exports = {
  add,
  inventory
}
