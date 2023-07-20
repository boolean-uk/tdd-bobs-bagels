const basket = []
const basketCapacity = 5

function addItem(obj) {
  if (basket.length < basketCapacity) {
    basket.push(obj)
    return true
  }
  return false
}

function removeItem(obj) {
  if (!basket.includes(obj)) {
    throw new Error('You cannot remove this item from basket')
  }
  basket.splice(basket.indexOf(obj), 1)
  return true
}

function isFull() {
  if (basket.length < basketCapacity) {
    return false
  }
  return true
}
module.exports = {
  addItem,
  removeItem,
  isFull
}
