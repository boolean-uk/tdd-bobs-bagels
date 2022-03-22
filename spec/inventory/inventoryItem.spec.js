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

  it('applies special offer for required quantity', () => {
    const basket = new Basket()
    const inventory = new Inventory()
    const item = new Item('BGLO', 'Bagel', 10)
    const offer = new SpecialOffer(item, { requiredQuantity: 2 }, (basket) => {
      const bItem = basket.getItem(item)
      bItem.offerPrice = 7.5 + (bItem.price * (bItem.quantity - 2))
      return bItem.offerPrice
    })

    const iItem = new InventoryItem(item, 200) // 200 supply

    inventory.add(iItem)

    iItem.addOffer(offer)

    const bItem = new BasketItem(item, 4) // 4 items
    const calculatedPrice = (10 * 4)
    const calculatedOfferPrice = 7.5 + (10 * 2)

    basket.add(bItem)
    expect(basket.basketPrice()).toEqual(calculatedPrice)
    const foundOffers = inventory.findOffers(basket)
    expect(foundOffers).toEqual([offer])
    expect(offer.check(basket)).toBeTrue()
    expect(offer.apply(basket)).toEqual(calculatedOfferPrice)
    expect(basket.basketPrice()).toEqual(calculatedOfferPrice)
  })
})
