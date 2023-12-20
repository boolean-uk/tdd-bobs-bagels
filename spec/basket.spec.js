const { BagelBasket } = require('../src/basket.js')
const inventoryData = require('../inventory.json');
const bagels = inventoryData.inventory;

describe('BagelBasket', () => {
  let basket

  beforeEach(() => {
    basket = new BagelBasket()
  })

  bagels.forEach((bagel, index) => {
    describe(`Bagel ${index + 1}`, () => {
      it('adds and removes an item from the basket', () => {
        basket.addItem(bagel);
        expect(basket.items).toContain(bagel);
        basket.removeItem(bagel);
        expect(basket.items).not.toContain(bagel);
      });
    });
  });

  it('should add items within capacity', () => {
    for (let i = 0; i < basket.capacity; i++) {
      basket.addItem(bagels[0])
    }
    expect(basket.items.length).toBe(basket.capacity)
  })

  it('should not add items beyond capacity', () => {
    for (let i = 0; i < basket.capacity + 1; i++) {
      basket.addItem(bagels[0])
    }
    expect(basket.items.length).toBeLessThanOrEqual(basket.capacity)
  })

  it("Should return a message if item doesn't exist in basket", () => {
    const result = basket.findBagel('non-existent-sku')
    expect(result).toBe("Item doesn't exist in basket")
  })

  it('Basket capacity increased', () => {
    const largerBasket = new BagelBasket(10)
    expect(largerBasket.capacity).toBe(10)
  })

  it('should find an existing item by SKU', () => {
    basket.addItem(bagels[0])
    const result = basket.findBagel(bagels[0].sku)
    expect(result).toEqual(bagels[0])
  })

  it('should not find an item with a non-existent SKU', () => {
    const result = basket.findBagel('non-existent-sku')
    expect(result).toBe("Item doesn't exist in basket")
  })

  it('Show the price of each item before it goes in the basket', () => {
    const bagelToShow = bagels[0]
    const price = basket.getItemPrice(bagelToShow)
    expect(price.toFixed(2)).toBe(bagelToShow.price)
  })

  it('Lets you add the same item again', () => {
    const bagelToAdd = bagels[0]
    basket.addItem(bagelToAdd)
    basket.addItem(bagelToAdd)

    const countOfAddedBagel = basket.items.filter(
      (item) => item.name === bagelToAdd.name
    ).length
    expect(countOfAddedBagel).toBe(2)
  })

  it('Adds the total price of each item', () => {
    basket.addItem(bagels[0])
    basket.addItem(bagels[1])

    const expectedTotal = bagels
      .slice(0, 2)
      .reduce((total, bagel) => {
        return total + Number(bagel.price)
      }, 0)
      .toFixed(2)

    expect(basket.getTotalPrice().toFixed(2)).toBe(expectedTotal)
  })
})

module.exports = BagelBasket