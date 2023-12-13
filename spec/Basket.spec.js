const BagelBasket = require('../src/basket.js')

describe('BagelBasket', () => {
  let basket
  const bagels = [
    { sku: 'BGLO', price: '0.49', name: 'Bagel', variant: 'Onion' },
    { sku: 'BGLP', price: '0.39', name: 'Bagel', variant: 'Plain' },
    { sku: 'BGLE', price: '0.49', name: 'Bagel', variant: 'Everything' },
    { sku: 'BGLS', price: '0.49', name: 'Bagel', variant: 'Sesame' },
    { sku: 'COF', price: '0.39', name: 'Coffee', variant: '' },
    {
      sku: 'BGSE',
      price: '2.99',
      name: 'Bagel Sandwich',
      variant: 'Everything'
    },
    { sku: 'BGSS', price: '4.99', name: 'Bagel', variant: 'Sesame' }
  ]

  beforeEach(() => {
    basket = new BagelBasket()
  })

  // Bagels being added to basket and removed from basket //
  bagels.forEach((bagels, index) => {
    describe(`Bagel ${index + 1}`, () => {
      it('adds and removes an item from the basket', () => {
        basket.addItem(bagels)
        expect(basket.items).toContain(bagels)
        basket.removeItem(bagels)
        expect(basket.items).not.toContain(bagels)
      })
    })
  })
  // Basket too full section //
  it('stops the basket from overfilling', () => {
    for (let i = 0; i < basket.capacity + 1; i++) {
      basket.addItem(bagels[0])
    }
    expect(basket.items.length).toBeLessThanOrEqual(basket.capacity)
  })
  // if item doesnt exist //
  it('Should return a message if item doesnt exist in basket', () => {
    const result = basket.findBagel('non-existent-sku')
    expect(result).toBe('Item doesnt exist in basket')
  })
  // increase capacity //
  it('Basket capacity increased', () => {
    const largerBasket = new BagelBasket(10)
    expect(largerBasket.capacity).toBe(10)
  })
  // Total price added together //
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
    console.log(Number(bagels[0].price) + Number(bagels[1].price))
  })
})

module.exports = BagelBasket
