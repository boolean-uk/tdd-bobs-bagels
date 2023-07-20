// eslint-disable-next-line no-unused-vars
const bagelsInBasket = {}
const capacity = 10
let currentAmount = 0
const json = require('../inventory.json')
const inventory = json.inventory

initializeBasket(inventory)
function initializeBasket(inventory) {
  for (const i in inventory) {
    bagelsInBasket[inventory[i].sku] = 0
  }
}

function find(inventory, sku) {
  for (const i in inventory) {
    if (inventory[i].sku === sku) return inventory[i]
  }
  return null
}

console.log(find(inventory, 'BGLE'))
function add(bagelSku, amount) {
  if (
    amount <= 0 ||
    amount + currentAmount > capacity ||
    bagelsInBasket[bagelSku] === undefined
  )
    return false
  bagelsInBasket[bagelSku] += amount
  currentAmount += amount
  return true
}

function remove(bagelSku, amount) {
  if (
    amount <= 0 ||
    bagelsInBasket[bagelSku] === undefined ||
    bagelsInBasket[bagelSku] < amount
  )
    return false
  bagelsInBasket[bagelSku] -= amount
  currentAmount -= amount
  return true
}

module.exports = {
  add,
  remove
}
