const Inventory = require('./inventory/inventory')
const InventoryItem = require('./inventory/inventoryItem')
const Item = require('./item')
const Basket = require('./basket')
const SpecialOffer = require('./offer/SpecialOffer')
const BasketItem = require('./basketItem')
const InventoryJSON = require('../inventory.json')
// setup file, works like a framework (store)

const inventory = new Inventory()
// register each item
InventoryJSON.inventory.forEach(itemJSON => {
  const item = new Item(itemJSON.sku, itemJSON.name, Number(itemJSON.price), itemJSON.variant)
  const iItem = new InventoryItem(item, 100) // Every item has 100 in stock
  const offer = itemJSON.specialOffer
  if (offer) {
    iItem.addOffer(new SpecialOffer(item, offer))
  }

  inventory.add(iItem)
})



const b = new Basket(100)

b.add(new BasketItem(inventory.getItemBySKU('BGLE'), 64))

console.log(b.basketPrice(), '| BEFORE :', b.baseBasketPrice())
