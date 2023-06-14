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
        expect(newBasket.deleteBagel(bagel)).toEqual([
          { id: 1, price: 0.49, name: 'Everything Bagel' },
          { id: 3, price: 0.49, name: 'Nothing Bagel' },
          { id: 4, price: 0.49, name: 'Nothing Bagel' },
          { id: 5, price: 0.49, name: 'Plain Bagel' }
        ])
      })
    })
  })
})
