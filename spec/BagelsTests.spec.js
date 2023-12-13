const Basket = require('../src/basket')

describe('Add Bagel', () => {
  it('passed sku which avaliable in inventory', () => {
    const basket = new Basket(5)

    const res = basket.addBagel('BGLO')

    expect(res.sku).toEqual('BGLO')
    expect(res.price).toEqual('0.49')
    expect(res.name).toEqual('Bagel')
    expect(res.variant).toEqual('Onion')
    expect(res.quantity).toEqual(1)
  })

  it('passed sku which unavaliable in inventory', () => {
    const basket = new Basket(5)

    const res = basket.addBagel('BBB')

    expect(res).toEqual('The bagel is not exist in our inventory')
  })

  it('When basket is full', () => {
    const basket = new Basket(1)

    basket.addBagel('BGLO')
    const res = basket.addBagel('BGLP')

    expect(res).toEqual('Your basket is full')
  })

  it('When added the same type of bagel 3 times', () => {
    const basket = new Basket(5)

    basket.addBagel('BGLO')
    basket.addBagel('BGLO')
    const res = basket.addBagel('BGLO')

    expect(res.sku).toEqual('BGLO')
    expect(res.price).toEqual('0.49')
    expect(res.name).toEqual('Bagel')
    expect(res.variant).toEqual('Onion')
    expect(res.quantity).toEqual(3)
  })
})
