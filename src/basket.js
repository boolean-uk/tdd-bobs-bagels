// eslint-disable-next-line no-unused-vars
const bagelsInBasket = {}
let capacity = 10
let currentAmount = 0
const json = require('../inventory.json')
const inventory = json.inventory

initializeBasket(inventory)
function initializeBasket(inventory) {
  for (const i in inventory) {
    bagelsInBasket[inventory[i].sku] = 0
  }
}

function clearBasket() {
  capacity = 10
  currentAmount = 0
  for (const i in bagelsInBasket) bagelsInBasket[i] = 0
}

function find(inventory, sku) {
  for (const i in inventory) {
    if (inventory[i].sku === sku) return inventory[i]
  }
  return null
}

function add(bagelSku, amount) {
  if (
    !Number.isInteger(amount) ||
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
    !Number.isInteger(amount) ||
    amount <= 0 ||
    bagelsInBasket[bagelSku] === undefined ||
    bagelsInBasket[bagelSku] < amount
  )
    return false
  bagelsInBasket[bagelSku] -= amount
  currentAmount -= amount
  return true
}

function total() {
  let total = 0
  for (const i in bagelsInBasket) {
    total += bagelsInBasket[i] * find(inventory, i).price
  }

  return Math.floor(total * 100) / 100
}

function checkBagelPrice(bagelSKU) {
  const bagel = find(inventory, bagelSKU)
  return bagel === null ? 0 : bagel.price
}

function changeCapacity(newCapacity) {
  if (newCapacity <= capacity || !Number.isInteger(newCapacity)) return false
  capacity = newCapacity
  return true
}

module.exports = {
  clearBasket,
  add,
  remove,
  changeCapacity,
  total,
  checkBagelPrice
}
