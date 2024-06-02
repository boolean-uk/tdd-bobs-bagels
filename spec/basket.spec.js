import Basket, { Bagel } from '../src/basket.js'

describe('Bagel', () => {
  const bagel = new Bagel('BGLO', 2)
  it('should exist', () => {
    expect(bagel).toBeInstanceOf(Bagel)
  })

  it('should have properties -sku -qty -name -price -variant', () => {
    expect(bagel.sku).toBe('BGLO')
    expect(bagel.qty).toBe(2)
    expect(bagel.price).toBe(0.49)
    expect(bagel.name).toBe('Bagel')
    expect(bagel.variant).toBe('Onion')
  })

  it('should show the price of bagel with provided sku', () => {
    expect(bagel.showPrice('BGLO')).toBe(0.49)
  })

  it('should throw an error if wrong sku is provided', () => {
    expect(() => {
      noBgl.showPrice('wrong').toThrowError(`Bagel with SKU ${sku} not found.`)
    })
  })
})

describe('Basket', () => {
  let smallBasket
  let largeBasket

  beforeEach(() => {
    smallBasket = new Basket(5)
    largeBasket = new Basket(10)
  })

  it('should exist', () => {
    expect(smallBasket).toBeInstanceOf(Basket)
  })
  it('should exist', () => {
    expect(largeBasket).toBeInstanceOf(Basket)
  })

  it('smallBasket should have a basketSize 5', () => {
    expect(smallBasket.basketSize).toBe(5)
  })

  it('largeBasket to have a size of 10', () => {
    expect(largeBasket.basketSize).toBe(10)
  })

  it('should have an empty basket[] before adding bagels', () => {
    expect(smallBasket.basket.length).toBe(0)
  })

  it('should add baggels to basket[] using sku and qty', () => {
    smallBasket.addBagels('BGLO', 1)
    expect(smallBasket.basket.length).toBe(1)
    expect(smallBasket.basket[0].sku).toBe('BGLO')
    expect(smallBasket.basket[0].qty).toBe(1)

    smallBasket.addBagels('BGLO', 1)
    expect(smallBasket.basket.length).toBe(2)
    expect(smallBasket.basket[1].sku).toBe('BGLO')
    expect(smallBasket.basket[1].qty).toBe(1)
  })

  it('should not add non existing baggels and instead throw an error', () => {
    expect(() =>
      smallBasket
        .addBagels('wrong', 1)
        .toThrowError(`There in no bagel with sku ${sku} `)
    )
  })

  it('should add 1 bagel or multiple same-type bagels and should throw an error "Basket is full" if basket size is exceeded when adding bagels of any kind beyond basket capacity', () => {
    expect(() =>
      smallBasket.addBagels('BGLP', 6).toThrowError(`Basket is full`)
    )

    smallBasket.addBagels('BGLP', 3)
    expect(smallBasket.basket.length).toBe(3)
    expect(smallBasket.basket[0].sku).toBe('BGLP')

    smallBasket.addBagels('BGLP', 1)
    expect(smallBasket.basket.length).toBe(4)
    expect(smallBasket.basket[1].sku).toBe('BGLP')
    expect(smallBasket.basket[2].sku).toBe('BGLP')
    expect(smallBasket.basket[3].sku).toBe('BGLP')

    smallBasket.addBagels('BGLO', 1)
    expect(smallBasket.basket.length).toBe(5)
    expect(smallBasket.basket[4].sku).toBe('BGLO')

    expect(() =>
      smallBasket.addBagels('BGLP', 2).toThrowError(`Basket is full`)
    )
  })

  it('should remove a bagel from the basket if it exists or throw an error if it does not', () => {
    smallBasket.addBagels('BGLP', 3)
    expect(smallBasket.basket.length).toBe(3)

    smallBasket.removeBagels('BGLP')
    expect(smallBasket.basket.length).toBe(2)
    smallBasket.removeBagels('BGLP')
    expect(smallBasket.basket.length).toBe(1)
    smallBasket.removeBagels('BGLP')
    expect(smallBasket.basket.length).toBe(0)

    expect(() =>
      smallBasket
        .removeBagels('BGLO')
        .toThrowError(`There is no bagel of this type in the basket`)
    )
    expect(() =>
      smallBasket
        .removeBagels('BGLO')
        .toThrowError(`There is no bagel of this type in the basket`)
    )
  })

  it('should return the total cost of bagels in the basket', () => {
    smallBasket.addBagels('BGLP', 3)
    smallBasket.addBagels('BGLO', 2)

    const total = smallBasket.showCost()
    expect(total).toBe(2.15)

    smallBasket.removeBagels('BGLP')
    const total2 = smallBasket.showCost()
    expect(total2).toBe(1.76)
  })

  it('should print a receipt with the correct bagels, prices quantities and total', () => {
    largeBasket.addBagels('BGLO', 3)
    largeBasket.addBagels('BGLP', 2)
    largeBasket.addBagels('BGLS', 5)
    const expectedDate =
      new Date()
        .toLocaleString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        })
        .replace(/\//g, '-') + '\n'
    
        const spy = spyOn(process.stdout, 'write')
        largeBasket.printReceipt()
        expect(spy).toHaveBeenCalledWith(`~~~ Bob's Bagels ~~~\n`)
        expect(spy).toHaveBeenCalledWith(expectedDate)
        expect(spy).toHaveBeenCalledWith(
          `-------------------------------------- \n`
    )
      expect(spy).toHaveBeenCalledWith('Onion Bagel qty: 3 x 0.49 \n')
      expect(spy).toHaveBeenCalledWith('Plain Bagel qty: 2 x 0.39 \n')
      expect(spy).toHaveBeenCalledWith('Sesame Bagel qty: 5 x 0.49 \n')

  })

  //I don't think there is a reason to repeat more tests for largeBasket since it exists and has proper length and it can print a receipt
})
