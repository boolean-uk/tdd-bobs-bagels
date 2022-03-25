const Item = require('../src/item.js')

describe ('price', () => {
/* --- PART 3 - 1 --- */
it ('returns bagel: poppy, price: $4', () => {
    // setup
    const item = new Item()
    const expected = 'bagel: poppy, price: $4'
    // execute
    const result = item.checkPrice('poppy')
    // verify
    expect(result).toEqual(expected)
  })

it ('returns bagel: cheese, price: $3', () => {
    // setup
    const item = new Item()

    const expected = 'bagel: cheese, price: $3'
    // execute
    const result = item.checkPrice('cheese')
    // verify
    expect(result).toEqual(expected)
  })

  /* --- Extension 1 --- */
  it ('returns a array within array of item name and its quantity', () => {
    // setup
    const item = new Item()
    const basket = ['BGLO', 'BGLO', 'BGLO', 'BGLO', 'BGLO', 'BGLO']

    const expected = [['BGLO', 6]]
    // execute
    const result = item.skuQuantity(basket)
    // verify
    expect(result).toEqual(expected)
  })

  it ('returns an object of item name and its quantity', () => {
    // setup
    const item = new Item()
    const basket = ['BGLO', 'BGLE', 'BGLE', 'BGLP', 'COF']

    const expected = { BGLO: 1, BGLE: 2, BGLP: 1, COF: 1 }
    // execute
    const result = item.skuQuantity(basket)
    // verify
    expect(result).toEqual(expected)
  })

  it ('returns an object of sub total price of each items', () => {
    // setup
    const item = new Item()
    const basket = ['BGLO', 'BGLE', 'BGLE', 'BGLP']
    const skuQuantityObj = item.skuQuantity(basket)

    const expected = { BGLO: 0.49, BGLE: 0.98, BGLP: 0.39 }
    // execute
    const result = item.subPrice(skuQuantityObj)
    // verify
    expect(result).toEqual(expected)
  })

  it ('returns the total price', () => {
    // setup
    const item = new Item()
    const basket = ['BGLO', 'BGLE', 'BGLE', 'BGLP']
    const skuQuantityObj = item.skuQuantity(basket)
    const subPrice = item.subPrice(skuQuantityObj)

    const expected = 1.86
    // execute
    const result = item.totalPrice(subPrice)
    // verify
    expect(result).toEqual(expected)
  })

  it ('returns the receipt details', () => {
    // setup
    const item = new Item()
    const basket = ['BGLO', 'BGLE', 'BGLE', 'BGLP']
    const skuQuantityObj = item.skuQuantity(basket)
    const subPrice = item.subPrice(skuQuantityObj)

    const expected = '1x BGLO = 0.49\n2x BGLE = 0.98\n1x BGLP = 0.39\n'
    // execute
    const result = item.receiptLine(skuQuantityObj, subPrice)
    // verify
    expect(result).toEqual(expected)
  })

  fit ('prints out the receipt', () => {
    // setup
    const item = new Item()
    const basket = ['BGLO', 'BGLE', 'BGLE', 'BGLP']
    const skuQuantityObj = item.skuQuantity(basket)
    const subPrice = item.subPrice(skuQuantityObj)
    const receiptLine = item.receiptLine(skuQuantityObj, subPrice)
    const totalPrice = item.totalPrice(subPrice)

    const expected = '1x BGLO = 0.49\n2x BGLE = 0.98\n1x BGLP = 0.39\n          ----\n          1.86'
    // execute
    const result = item.printReceipt(receiptLine, totalPrice)
    // verify
    expect(result).toEqual(expected)
  })


})
