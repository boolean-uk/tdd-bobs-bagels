const Basket = require('../src/basket.js')

describe('basket', () => {
  describe('createBagel', () => {
    it('A bagel that is ordered', () => {
      // Given
      const bagel = 'Everything bagel'

      // When
      const newBasket = new Basket()

      // Then
      expect(newBasket.createBagel(bagel)).toEqual({
        id: 1,
        price: 0.49,
        name: bagel
      })
    })
    it('You have reached your Limit', () => {
      const newBasket = new Basket()
      newBasket.createBagel('Bagel1')
      newBasket.createBagel('Bagel2')
      newBasket.createBagel('Bagel3')
      newBasket.createBagel('Bagel4')
      newBasket.createBagel('Bagel5')
      newBasket.createBagel('Bagel6')
      expect(newBasket.createBagel('Bagel7')).toEqual(
        'You have reached your limit'
      )
    })
  })
  describe('basketSize', () => {
    it('Manager can define basketSize to be 10', () => {
      const newBasket = new Basket(10)
      expect(newBasket.basketSize).toEqual(10)
    })
    it('BasketSize default is 6', () => {
      const newBasket = new Basket()
      expect(newBasket.basketSize).toEqual(6)
    })
  })
  describe('getBasket', () => {
    it('Get the basket (array) with items (objects)', () => {
      // When
      const newBasket = new Basket()
      newBasket.createBagel('Everything Bagel')
      newBasket.createBagel('Plain Bagel')

      // Then
      expect(newBasket.getBasket()).toEqual([
        {
          id: 1,
          price: 0.49,
          name: 'Everything Bagel'
        },
        {
          id: 2,
          price: 0.49,
          name: 'Plain Bagel'
        }
      ])
    })
  })
  describe('deleteBagel', () => {
    it('A bagel that is deleted', () => {
      // Given
      const bagel = 'Nothing Bagel'

      // When
      const newBasket = new Basket()
      newBasket.createBagel('Everything Bagel')
      newBasket.createBagel('Nothing Bagel')
      newBasket.createBagel('Nothing Bagel')
      newBasket.createBagel('Nothing Bagel')
      newBasket.createBagel('Plain Bagel')

      // Then
      expect(newBasket.deleteBagel(bagel)).toEqual('Bagel deleted')
    })
    it('If an item does not exist return error', () => {
      // Given
      const bagel = 'Fake Bagel'

      // When
      const newBasket = new Basket()
      newBasket.createBagel('Everything Bagel')
      newBasket.createBagel('Nothing Bagel')
      newBasket.createBagel('Nothing Bagel')
      newBasket.createBagel('Nothing Bagel')
      newBasket.createBagel('Plain Bagel')

      // Then
      expect(newBasket.deleteBagel(bagel)).toEqual(
        'Item doesn`t exist in the basket'
      )
    })
  })
})
