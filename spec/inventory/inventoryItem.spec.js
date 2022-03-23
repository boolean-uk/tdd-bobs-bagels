/* eslint-disable no-undef */
const InventoryItem = require('../../src/inventory/inventoryItem')
const Item = require('../../src/item')
const Basket = require('../../src/basket')
const Inventory = require('../../src/inventory/inventory')
const BasketItem = require('../../src/basketItem')
const SpecialOffer = require('../../src/offer/SpecialOffer')
describe('InventoryItem', () => {
  it('says it is not in stock when quantity < 0', () => {
    const iItem = new InventoryItem(new Item('BGLO', 'Bagel', 10), 10)
    iItem.quantity = 0

    expect(iItem.inStock()).toBeFalse()
  })

  it('applies special offer for required quantity once', () => {
    const basket = new Basket()
    const inventory = new Inventory()
    const item = new Item('BGLO', 'Bagel', 10)

    const options = { requiredQuantity: 2, recursive: false, price: 7.5 }
    const offer = new SpecialOffer(item, options)

    const iItem = new InventoryItem(item, 200) // 200 supply

    inventory.add(iItem)

    iItem.addOffer(offer)

    const bItem = new BasketItem(item, 4) // 4 items
    const calculatedPrice = (10 * 4)
    const calculatedOfferPrice = 7.5 + (10 * 2)

    basket.add(bItem)
    expect(basket.baseBasketPrice()).toEqual(calculatedPrice)
    const foundOffers = inventory.findOffers(basket)
    expect(foundOffers).toEqual([offer])
    expect(offer.check(basket)).toBeTrue()
    expect(offer.apply(basket)).toEqual(calculatedOfferPrice)
    expect(basket.basketPrice()).toEqual(calculatedOfferPrice)
  })

  it('applies special offer for required quantity (recursive)', () => {
    const basket = new Basket(200)
    const inventory = new Inventory()
    const item = new Item('BGLP', 'Bagel', 0.39)
    const options = { requiredQuantity: 12, recursive: true, price: 3.99 }
    const offer = new SpecialOffer(item, options)

    const iItem = new InventoryItem(item, 200) // 200 supply

    iItem.addOffer(offer)

    inventory.add(iItem)

    const bItem = new BasketItem(item, 16) // 4 items
    const calculatedPrice = item.price * bItem.quantity
    const calculatedOfferPrice = 5.55

    basket.add(bItem)
    expect(basket.baseBasketPrice()).toEqual(calculatedPrice)
    const foundOffers = inventory.findOffers(basket)
    expect(foundOffers).toEqual([offer])
    expect(offer.check(basket)).toBeTrue()
    expect(basket.basketPrice()).toBeCloseTo(calculatedOfferPrice)
  })


})
