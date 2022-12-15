const { inventory } = require('../inventory.json')

const basket = []

function add(bagel) {
  basket.push(bagel)
  return basket
}

function remove(sku) {
  const skuToRemove = 'BGLO'
  const filterBagels = basket.filter((bagel) => bagel.sku !== skuToRemove)

  return filterBagels
}
// const people = [
//   { id: 1, name: 'serdar' },
//   { id: 5, name: 'alex' },
//   { id: 300, name: 'brittany' }
// ]

// const idToRemove = 5

// const filteredPeople = people.filter((item) => item.id !== idToRemove)

// console.log(filteredPeople)
// [
//   { id: 1, name: 'serdar' },
//   { id: 300, name: 'brittany' }
// [

function changeOrder(sku) {
  const newBagel = basket.indexOf(sku)
  basket[newBagel] = 
}

// const arr = [1, 2, 3, 4, 5]
// const index = arr.indexOf(2)
// arr[index] = 0
// arr
// [1,0,3,4,5];

function basketReset() {
  basket.splice(0, basket.length)
}

module.exports = {
  add,
  basketReset,
  remove,
  changeOrder
}
console.log(changeOrder())
