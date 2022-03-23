const Inventory = require('./inventory/inventory')
const InventoryItem = require('./inventory/inventoryItem')
const Item = require('./item')
const Basket = require('./basket')
const SpecialOffer = require('./offer/SpecialOffer')
const BasketItem = require('./basketItem')
// setup file, works like a framework (store)

const inventory = new Inventory()

// Items definition
const BGLO = new Item('BGLO', 'Bagel', 0.49, 'Onion')
const BGLP = new Item('BGLP', 'Bagel', 0.39, 'Plain')
const BGLE = new Item('BGLE', 'Bagel', 0.49, 'Everything')
const COF = new Item('COF', 'Bagel', 0.99)

// Every item has 100 in stock
const iBGLO = new InventoryItem(BGLO, 100)
const options = { requiredQuantity: 6, recursive: true, price: 2.49 }
const SO_BGLO = new SpecialOffer(BGLO, options)

iBGLO.addOffer(SO_BGLO)

const iBGLP = new InventoryItem(BGLP, 100)
iBGLO.addOffer(SO_BGLO)
inventory.add(iBGLO)
inventory.add(iBGLP)
inventory.add(new InventoryItem(BGLE, 100))
inventory.add(new InventoryItem(COF, 100))

const b = new Basket(100)

b.add(new BasketItem(BGLO, 64))

console.log(b.basketPrice(), '| BEFORE :', b.baseBasketPrice())
