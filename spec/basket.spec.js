const Basket = require('../src/basket.js')

describe('basket', () => {
  describe('createBagel', () => {
    it('A bagel that is ordered', () => {
      // Given
      const bagel = 'Everything bagel'

      // When
      const newBasket = new Basket()

      // Then
      expect(newBasket.createBagel(bagel)).toEqual([
        {
          id: 1,
          price: 0.49,
          name: bagel
        }
      ])
    })

    describe('deleteBagel', () => {
      fit('A bagel that is deleted', () => {
        // Given
        const bagel = 'Everything bagel'

        // When
        const newBasket = new Basket()
        newBasket.createBagel(bagel)

        // Then
        expect(newBasket.deleteBagel(bagel)).toEqual([])
      })
    })
  })
})
