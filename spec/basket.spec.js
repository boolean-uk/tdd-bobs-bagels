const { Basket } = require('../src/basket.js')

describe('Basket', () => {
  let b

  beforeEach(() => {
    b = new Basket()
  })

  //   PART 1
  describe('Add Bagel To Basket', () => {
    it('added bagel must be returned as an object', () => {
      const exampleBagel = {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      }
      const result = b.addBagel('BGLO')
      expect(result).toEqual(exampleBagel)
    })

    it('bagel being added does not exist in bagel inventory', () => {
      const result = b.addBagel()
      expect(result).toEqual('bagel does not exist, check bagel sku')
    })

    it('adds selected bagel to user basket', () => {
      const exampleBasket = [
        {
          sku: 'BGLO',
          price: '0.49',
          name: 'Bagel',
          variant: 'Onion'
        }
      ]
      b.addBagel('BGLO')
      const result = b.getBasket()
      expect(result).toEqual(exampleBasket)
    })
  })

  describe('Remove Bagel From Basket', () => {
    it('removes selected bagel from basket', () => {
      const exampleBasket = [
        {
          sku: 'BGLP',
          price: '0.39',
          name: 'Bagel',
          variant: 'Plain'
        },
        {
          sku: 'BGLE',
          price: '0.49',
          name: 'Bagel',
          variant: 'Everything'
        }
      ]
      b.addBagel('BGLO')
      b.addBagel('BGLP')
      b.addBagel('BGLE')
      b.removeBagel('BGLO')
      const result = b.getBasket()
      expect(result).toEqual(exampleBasket)
    })

    it('bagel being removed does not exist in basket', () => {
      const result = b.removeBagel()
      expect(result).toEqual('bagel does not exist, check bagel sku')
    })
  })

  //   PART 2
  describe('Check When Basket Is Full', () => {
    it('when adding a bagel, user should be notified if basket is full', () => {
      b.addBagel('BGLO')
      b.addBagel('BGLP')
      b.addBagel('BGLE')
      const result = b.addBagel('BGLS')
      expect(result).toEqual('basket is full of bagels!')
    })
  })

  describe('Increase Basket Capacity', () => {
    it('bagel basket capacity can be increased as required', () => {
      b.largerBasket(10)
      const newMaxCapacity = 10
      const result = b.maxCapacity
      expect(result).toEqual(newMaxCapacity)
    })

    it('shouold return message to confirm the basket capacity increased', () => {
      const confirmationMessage = 'basket capacity is now 10'
      const result = b.largerBasket(10)
      expect(result).toEqual(confirmationMessage)
    })

    it('should return error message if a valid number is not entered', () => {
      const errorMessage = 'enter a valid number to increase basket capacity'
      const result = b.largerBasket()
      expect(result).toEqual(errorMessage)
    })
  })
})
