const { Basket } = require('../src/basket.js')

describe('Basket', () => {
  let b

  beforeEach(() => {
    b = new Basket()
  })

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

    it('bagel added is not a valid bagel type in bagel inventory', () => {
      const result = b.addBagel()
      expect(result).toEqual('bagel does not exist, check bagel sku')
    })

    it('adds selected bagel to user basket', () => {
      const exampleBagel = [
        {
          sku: 'BGLO',
          price: '0.49',
          name: 'Bagel',
          variant: 'Onion'
        }
      ]
      b.addBagel('BGLO')
      const result = b.getBasket()
      expect(result).toEqual(exampleBagel)
    })
  })
})
