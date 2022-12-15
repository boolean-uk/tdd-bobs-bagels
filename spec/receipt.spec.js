const { Receipt } = require('../src/receipt')

describe('Receipt Class', () => {
  let ReceiptClass
  beforeEach(() => {
    ReceiptClass = new Receipt()
  })

  // isBasketFull
  it('expects true if basket is full', () => {
    expect(false).toBeFalse()
  })
})
