import Basket from '../src/basket.js'

describe('addToBasket', () => {
  let basket
  beforeEach(() => {
    basket = new Basket()
  })

  it('adds the given item to the basket', () => {
    //GIVEN
    const item = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion',
      quantity: 1
    }
    //WHEN
    const res = basket.addToBasket('BGLO')
    //THEN
    expect(res).toEqual(item)
    expect(basket.items.length).toEqual(1)
  })

  it('adds a different given item to the basket', () => {
    //GIVEN
    const item = {
      sku: 'BGLP',
      price: '0.39',
      name: 'Bagel',
      variant: 'Plain',
      quantity: 1
    }
    //WHEN
    const res = basket.addToBasket('BGLP')
    //THEN
    expect(res).toEqual(item)
    expect(basket.items.length).toEqual(1)
  })

  it('does not add to basket if the given sku does not match an inventory item', () => {
    //GIVEN
    //WHEN
    const res = basket.addToBasket('XXXX')
    //THEN
    expect(res).toEqual(undefined)
    expect(basket.items.length).toEqual(0)
  })

  it('if already in basket, increase quantity by 1', () => {
    //GIVEN
    const item = {
      sku: 'BGLP',
      price: '0.39',
      name: 'Bagel',
      variant: 'Plain',
      quantity: 2
    }
    //WHEN
    basket.addToBasket('BGLP')
    const res = basket.addToBasket('BGLP')
    //THEN
    expect(res).toEqual(item)
    expect(basket.items.length).toEqual(1)
  })
})

describe('remove from basket', () => {
  let basket
  beforeEach(() => {
    basket = new Basket()
  })

  it('should check that item exists in basket', () => {
    //GIVEN
    //WHEN
    const res = basket.removeFromBasket('XXXX')
    //THEN
    expect(res).toEqual( 'item does not exist in basket')
  })

  it('should be able to remove item from basket', () => {
    //GIVEN
    // const basket = new Basket()
    const item = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion',
      quantity: 0
    }
    //WHEN
    basket.addToBasket('BGLO')
    const res = basket.removeFromBasket('BGLO')
    
    //THEN
    expect(res).toEqual(item)
    expect(basket.items.length).toEqual(1)
  })

  it('should be able to decrease quantity in basket', () => {
    //GIVEN
    const basket = new Basket()
    const item = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion',
      quantity: 1
    }
    //WHEN
    basket.addToBasket('BGLO')
    basket.addToBasket('BGLO')
    const newRes = basket.removeFromBasket('BGLO')
    //THEN
    expect(newRes).toEqual(item)
    expect(basket.items.length).toEqual(1)
  })
})

describe('basket is full', () => {
  let basket
  beforeEach(() => {
    basket = new Basket()
  })
  it('basket is full, cannot add bagel types beyound basket size', () => {
    //GIVEN
    const basket = new Basket()

    //WHEN
    basket.addToBasket('BGLP')
    basket.addToBasket('BGLE')
    const res = basket.addToBasket('BGLO')

    const expectRes = 'basket is full'
    //THEN
    expect(res).toEqual(expectRes)
  })
})

describe('changeBasketCapacity', () => {
  let basket
  beforeEach(() => {
    basket = new Basket()
  })
  it('should incease the basket capacity ', () => {
    //GIVEN
    const basket = new Basket()
    //WHEN
    const res = basket.changeBasketCapacity(3)
    //THEN
    expect(res).toEqual(3)
  })
})
 describe('price of items', () => {
  let basket
  beforeEach(() => {
    basket = new Basket()
  })

  it('should return price of each item before adding to basket', () => {
    const basket = new Basket()

    const res = basket.checkPrice('BGLO')
    expect(res).toEqual('0.49')
  })

it('if not in inventory return not available', () => { 
    const basket = new Basket()
    const res = basket.checkPrice('XXXX')
    expect(res).toEqual('not available')
 })
})