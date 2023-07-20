function addItem(basket, item) {
    if(isFull(basket))
        throw 'Basket is full'

    basket.items.push(item)
}

function removeItem(basket, item) {
    if(!containsItem(basket, item))
        throw 'Item does not exist in the basket'

    const index = basket.items.indexOf(item)
    basket.items.splice(index, 1)
}

const isFull = (basket) =>
    basket.items.length === basket.capacity

const containsItem = (basket, item) =>
    basket.items.indexOf(item) !== -1

const setCapacity = (basket, capacity) =>
    basket.capacity = capacity

const getItemPrice = (item) => Number(item.price)

module.exports = {
    addItem,
    removeItem,
    isFull,
    containsItem,
    setCapacity,
    getItemPrice
}