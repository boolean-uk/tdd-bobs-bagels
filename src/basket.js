function addItem(basket, item) {
    basket.items.push(item)
}

function removeItem(basket, item) {
    const index = basket.items.indexOf(item)
    basket.items.splice(index, 1)
}

const isFull = (basket) =>
    basket.items.length === basket.capacity

module.exports = {
    addItem,
    removeItem,
    isFull
}