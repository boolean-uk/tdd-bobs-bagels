import Basket from '../src/basket.js'

const mockList = [
  {
    sku: 'AAAA',
    price: '5',
    name: 'Donut',
    variant: 'Sesame'
  },
  {
    sku: 'BBBB',
    price: '10',
    name: 'Lettuce',
    variant: ''
  },
  {
    sku: 'CCCC',
    price: '15',
    name: 'Tomato',
    variant: ''
  }
]

describe('Basket', () => {
  describe('add bagel to basket', () => {
    const basket = new Basket()

    beforeEach(() => {
      basket._list = []
    })

    it('add items to basket', () => {
      const result1 = basket.add('BGLE')
      const result2 = basket.add('BGSE')

      expect(basket.list[0].sku).toEqual('BGLE')
      expect(basket.list[0].price).toEqual('0.49')
      expect(basket.list[0].name).toEqual('Bagel')
      expect(basket.list[0].variant).toEqual('Everything')

      expect(basket.list[1].sku).toEqual('BGSE')
      expect(basket.list[1].price).toEqual('2.99')
      expect(basket.list[1].name).toEqual('Bagel Sandwich')
      expect(basket.list[1].variant).toEqual('Everything')
      expect(basket.list[1].fillings).toEqual(['Bacon', 'Egg', 'Cheese'])

      expect(result1).toEqual('item added')
      expect(result2).toEqual('item added')
    })

    it('return "item not found" when invalid sku given', () => {
      const result = basket.add('not a real sku')

      expect(result).toEqual('item sku not found')
    })

    it('return "item sku required" if no sku input', () => {
      const result1 = basket.add()
      const result2 = basket.add('')

      expect(result1).toEqual('item sku required')
      expect(result2).toEqual('item sku required')
    })
  })

  describe('find item in inventory', () => {
    const basket = new Basket()

    beforeEach(() => {
      basket._inventory = mockList
    })

    it('find items in inventory', () => {
      const result = basket.findInventoryItem('AAAA')

      expect(result.sku).toEqual('AAAA')
      expect(result.price).toEqual('5')
      expect(result.name).toEqual('Donut')
      expect(result.variant).toEqual('Sesame')
    })

    it('sku not found in inventory', () => {
      const result = basket.findInventoryItem('DDDD')

      expect(result).toEqual('item not found')
    })
  })

  describe('find item in basket', () => {
    const basket = new Basket()

    beforeEach(() => {
      basket._list = mockList.slice(1)
      basket._inventory = mockList
    })

    it('return item if valid sku', () => {
      const result = basket.findBasketItem('BBBB')

      expect(result).toEqual({
        sku: 'BBBB',
        price: '10',
        name: 'Lettuce',
        variant: ''
      })
    })

    it('return "item not found" if sku not found', () => {
      const result = basket.findBasketItem('AAAA')

      expect(result).toBe('item not found')
    })

    it('return "invalid" sku when sku does not exist in inventory', () => {
      const result = basket.findBasketItem('ZZZZ')

      expect(result).toBe('item is not stocked')
    })
  })

  describe('remove item from basket', () => {
    const basket = new Basket()

    beforeEach(() => {
      basket._inventory = [...mockList]
    })

    it('remove item with valid sku', () => {
      basket._list = [...mockList]

      const result = basket.remove('BBBB')

      expect(result).toBe('item removed')
      expect(basket.list).toEqual([mockList[0], mockList[2]])
    })

    it('return "item not found" if sku not found in basket', () => {
      basket._list = mockList.slice(0, 2)

      const result = basket.remove('CCCC')

      expect(result).toBe('item not found')
    })

    it('return "invalid sku" when sku does not exist in inventory', () => {
      basket._list = [...mockList]
      const result = basket.remove('ZZZZ')

      expect(result).toBe('item is not stocked')
    })

    it('return "item sku required" if no sku input', () => {
      const result1 = basket.remove()
      const result2 = basket.remove('')

      expect(result1).toBe('item sku required')
      expect(result2).toBe('item sku required')
    })
  })
})
