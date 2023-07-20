const { clearBasket, add, remove, changeCapacity } = require('../src/basket')

afterEach(() => {
  clearBasket()
})

describe('Basket', () => {
  it('adding type of bagel existing in inventory should return true', () => {
    const result = add('BGLO', 1)

    expect(result).toEqual(true)
  })

  it('adding more bagels than capacity should return false', () => {
    const result = add('BGLO', 100)

    expect(result).toEqual(false)
  })

  it('adding type of bagel not existing in inventory should return false', () => {
    const result = add('BOAFF', 1)

    expect(result).toEqual(false)
  })

  it('removing bagels existing in basket should return true', () => {
    add('BGLO', 5)
    const result = remove('BGLO', 4)

    expect(result).toEqual(true)
  })

  it('removing bagels not existing in basket should return false', () => {
    add('BGLO', 5)
    const result = remove('BGLE', 4)

    expect(result).toEqual(false)
  })

  it('changing capacity to normal value, higher than previous capacity should return true', () => {
    const result = changeCapacity(20)

    expect(result).toEqual(true)
  })

  it('changing capacity to value less than previous capacity should return false', () => {
    const result = changeCapacity(8)

    expect(result).toEqual(false)
  })

  it('changing capacity without parameter should return false', () => {
    const result = changeCapacity()

    expect(result).toEqual(false)
  })

  it('changing capacity to string should return false', () => {
    const result = changeCapacity('x')

    expect(result).toEqual(false)
  })

  it('changing capacity to boolean should return false', () => {
    const result = changeCapacity(false)

    expect(result).toEqual(false)
  })

  it('testing changing capacity', () => {
    changeCapacity(13)
    const result = add('BGLO', 11)

    expect(result).toEqual(true)
  })
})
