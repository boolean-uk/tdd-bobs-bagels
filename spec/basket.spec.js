import Basket from '../src/basket.js'

describe('Bobs bagels basket methods', () => {
  describe('/ adding basket items', () => {
    const basket = new Basket()
    beforeEach(() => {
      basket.basketList = []
    })
    it(' /adding a valid sku', () => {
      const newItem = basket.addItem('BGLO')
      expect(newItem).toEqual('Bagel')
    })
    it('/if sku is invalid', () => {
      const newItem = basket.addItem('XXXX')
      expect(newItem).toEqual('item not found')
    })
    it('/ no sku added', () => {
      const newItem = basket.addItem('')
      expect(newItem).toEqual('sku required!')
    })
  })
  describe('/ remove items from basket', () => {
    const basket = new Basket()
    beforeEach(() => {
      basket.basketList = [
        {
          sku: '1111',
          price: '0.55',
          name: 'Fork',
          variant: 'Silverware'
        },
        {
          sku: '2222',
          price: '0.89',
          name: 'Knife',
          variant: 'Silverware'
        },
        {
          sku: '3333',
          price: '1.52',
          name: 'Napkin',
          variant: 'Cotton'
        }
      ]
    })
    it('/ if sku is valid and in basket', () => {
      const newBasket = [
        {
          sku: '1111',
          price: '0.55',
          name: 'Fork',
          variant: 'Silverware'
        },
        {
          sku: '3333',
          price: '1.52',
          name: 'Napkin',
          variant: 'Cotton'
        }
      ]
      basket.removeItem('2222')
      expect(basket.basketList[0].name).toEqual('Fork')
      expect(basket.basketList).toEqual(newBasket)
    })
  })
})
