import { inventory } from '../inventory.js'
import Basket from '../src/basket.js'

describe('Bobs bagels basket', () => {
  describe('/ adding basket items', () => {
    const basket = new Basket()
    beforeEach(() => {
      basket.basketList = []
    })
    it(' / adding a valid sku', () => {
      const newItem = basket.addItem('BGLO')
      expect(newItem).toEqual('Bagel')
    })
    it('/ if sku is invalid', () => {
      const newItem = basket.addItem('XXXX')
      expect(newItem).toEqual('item not found')
    })
    it('/ no sku added', () => {
      const newItem = basket.addItem('')
      expect(newItem).toEqual('sku required!')
    })
    it('/ if sku is not a string', () => {
      const notASku = basket.addItem(1234)
      expect(notASku).toEqual('sku required!')
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
          variant: 'Silverware',
          quantity: 1
        },
        {
          sku: '2222',
          price: '0.89',
          name: 'Knife',
          variant: 'Silverware',
          quantity: 1
        },
        {
          sku: '3333',
          price: '1.52',
          name: 'Napkin',
          variant: 'Cotton',
          quantity: 1
        }
      ]
    })
    it('/ if sku is valid and in basket', () => {
      const newBasket = [
        {
          sku: '1111',
          price: '0.55',
          name: 'Fork',
          variant: 'Silverware',
          quantity: 1
        },
        {
          sku: '3333',
          price: '1.52',
          name: 'Napkin',
          variant: 'Cotton',
          quantity: 1
        }
      ]
      basket.removeItem('2222')
      expect(basket.basketList[0].name).toEqual('Fork')
      expect(basket.basketList).toEqual(newBasket)
    })
    it('/ if sku is valid but not in basket', () => {
      const result = basket.removeItem('4444')
      expect(result).toEqual('item is not in basket')
    })
    it('/ no sku added ', () => {
      const removedItem = basket.removeItem('')
      expect(removedItem).toEqual('sku required!')
    })
    it('/ if parameter is not a string', () => {
      const removingSku = basket.removeItem(1234)
      expect(removingSku).toEqual('sku required!')
    })
  })
  describe(' / Checking for full basket', () => {
    const basket = new Basket()
    beforeEach(() => {
      basket.basketList = [
        {
          sku: '1111',
          price: '0.55',
          name: 'Fork',
          variant: 'Silverware',
          quantity: 6
        },
        {
          sku: '2222',
          price: '0.89',
          name: 'Knife',
          variant: 'Silverware',
          quantity: 4
        },
        {
          sku: '3333',
          price: '1.52',
          name: 'Napkin',
          variant: 'Cotton',
          quantity: 2
        }
      ]
    })
    it('/ if basket quantity exceeds 12 items', () => {
      const itemCheck = basket.checkIfFull()
      const sameBasket = basket.basketList

      expect(itemCheck).toEqual('basket is full')
      expect(basket.basketList).toEqual(sameBasket)
    })
  })
  describe('/ change basket size', () => {
    const basket = new Basket()
    it('/ if changeBasketSize recieves a number, return new basket size', () => {
      const newBasketSize = basket.basketSize
      const result = basket.changeBasketSize(16)

      expect(result).toEqual(16)
      expect(basket.basketSize).toEqual(16)
    })
    it('/ if changeBasketSize does not recieve a number', () => {
      const basketSize = basket.basketSize

      const result = basket.changeBasketSize('sixteen')

      expect(result).toEqual('error, set basket size.')
      expect(basket.basketSize).toEqual(basketSize)
    })
  })
  describe('/ finding items in the inventory and if true, display the values of the items', () => {
    const basket = new Basket()
    beforeEach(() => {
      basket.inventory = [
        {
          sku: 'a1a1',
          price: '1.25',
          name: 'Item1',
          variant: 'None'
        },
        {
          sku: 'b2b2',
          price: '6.55',
          name: 'Item2',
          variant: 'None'
        },
        {
          sku: 'c3c3',
          price: '8.50',
          name: 'Item3',
          variant: 'None'
        },
      ]
    })
    it('if item exists in inventory list', () => {
      const result = basket.findItemDetails('b2b2')
      expect(result).toEqual('Name: Item2, Price: £6.55')
    })
  })
})
