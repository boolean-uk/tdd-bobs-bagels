const { inventory } = require('../inventory.json')

const basket = []

function add(bagel) {
  basket.push(bagel)
  return basket
}

function remove(sku) {}

function basketReset() {
  basket.splice(0, basket.length)
}

module.exports = {
  add,
  basketReset,
  remove
}

// const people = [
//   { id: 1, name: 'serdar' },
//   { id: 5, name: 'alex' },
//   { id: 300, name: 'brittany' }
// ];

// const idToRemove = 5;

// const filteredPeople = people.filter((item) => item.id !== idToRemove);

// // [
// //   { id: 1, name: 'serdar' },
// //   { id: 300, name: 'brittany' }
// // [
