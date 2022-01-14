const Receipt2 = require("../src/receipt-new.js")

const exampleBasket = [
    { sku: 'BGLO', price: '0.49', name: 'Bagel', variant: 'Onion' },
    { sku: 'BGLS', price: '0.49', name: 'Bagel', variant: 'Sesame' },
    { sku: 'BGLO', price: '0.49', name: 'Bagel', variant: 'Onion' },
    { sku: 'BGLS', price: '0.49', name: 'Bagel', variant: 'Sesame' },
    { sku: 'BGLE', price: '0.49', name: 'Bagel', variant: 'Everything' },
    { sku: 'BGLO', price: '0.49', name: 'Bagel', variant: 'Onion' }
  ]

describe("Receipt2", () => {
  let receipt

  beforeEach(() => {
    receipt = new Receipt2(exampleBasket)
  })

  
  it("new basket is empty array", () => {
    // const expected = ["bagel 1", "bagel 2"]
    expect(receipt.items).toEqual(exampleBasket)
  })


})