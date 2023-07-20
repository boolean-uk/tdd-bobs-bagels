function addItem(basket, item) {
    if(isFull(basket))
        throw 'Basket is full'

    basket.items.push(item)
}

function removeItem(basket, item) {
    const index = basket.items.indexOf(item)
    basket.items.splice(index, 1)
}

const isFull = (basket) =>
    basket.items.length === basket.capacity

const containsItem = (basket, item) =>
    basket.items.indexOf(item) !== -1

module.exports = {
    addItem,
    removeItem,
    isFull,
    containsItem
}