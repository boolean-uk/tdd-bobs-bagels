import { Item, Basket } from '../src/basket.js'

describe('item', () => {
  it('should have a name and a price', () => {
    const item = new Item('Salmon and Cream Cheese Bagel', 6.5)

    expect(item.name).toBe('Salmon and Cream Cheese Bagel')
    expect(item.price).toBe(6.5)
  })

  it('should display the price of the item', () => {
    const item = new Item('Salmon and Cream Cheese Bagel', 6.5)

    expect(item.displayPrice()).toBe(6.5)
  })
})

describe('basket', () => {
  it('should add users order to basket', () => {
    const basket = new Basket()

    expect(basket.items.length).toBe(0)

    const addToBasket = new Item('Cheese Bagel', 5.5)
    const result = basket.add(addToBasket)

    expect(basket.items.length).toBe(1)
    expect(result.length).toBe(1)
    expect(result[0]).toEqual(addToBasket)
  })

  it('should remove items from the basket', () => {
    const basket = new Basket()

    const item1 = new Item('Cheese Bagel', 5.5)
    const item2 = new Item('Cola', 1.5)

    basket.add(item1)
    basket.add(item2)

    expect(basket.items.length).toBe(2)

    const removedItem = basket.remove(item1)

    expect(basket.items.length).toBe(1)
    expect(removedItem).toEqual(item1)
  })

  it('should not add items beyond basket capacity', () => {
    const basket = new Basket(3) 

    const item1 = new Item('Cheese Bagel', 5.5)
    const item2 = new Item('Cola', 1.5)
    const item3 = new Item('Cookie', 2.5)
    const item4 = new Item('Apple', 1)

    basket.add(item1)
    basket.add(item2)
    basket.add(item3)

    expect(() => basket.add(item4)).toThrowError('Basket is full')
    expect(basket.items.length).toBe(3)
  })

  it('should notify if trying to remove an item from an empty basket', () => {
    const basket = new Basket()

    expect(() => basket.remove(new Item('Cheese Bagel', 5.5))).toThrowError(
      'Basket is empty'
    )
    expect(basket.items.length).toBe(0)
  })

  it('should not allow setting capacity less than current number of items', () => {
    const basket = new Basket(3) 

    const item1 = new Item('Cheese Bagel', 5.5)
    const item2 = new Item('Cola', 1.5)
    const item3 = new Item('Cookie', 2.5)

    basket.add(item1)
    basket.add(item2)
    basket.add(item3)

    expect(() => basket.adjustCapacity(2)).toThrowError(
      'New capacity cannot be less than the number of items in the basket'
    )
  })

  it('should add multiple items of the same type to the basket', () => {
    const basket = new Basket(10) // Increased capacity for testing

    const item = new Item('Cheese Bagel', 5.5)

    basket.addMultiple(item, 5)

    expect(basket.items.length).toBe(5)
    expect(basket.items[0]).toEqual(item)
    expect(basket.items[4]).toEqual(item)
  })

  it('should not add multiple items beyond basket capacity', () => {
    const basket = new Basket(5) 

    const item = new Item('Cheese Bagel', 5.5)

    basket.addMultiple(item, 3) 
    expect(basket.items.length).toBe(3)

    expect(() => basket.addMultiple(item, 3)).toThrowError(
      'Adding these items will exceed the basket capacity'
    )
    expect(basket.items.length).toBe(3)
  })

  it('should calculate the total order cost', () => {
    const basket = new Basket()

    const item1 = new Item('Cheese Bagel', 5.5)
    const item2 = new Item('Cola', 1.5)
    const item3 = new Item('Cookie', 2.5)

    basket.add(item1)
    basket.add(item2)
    basket.add(item3)

    const totalCost = basket.totalOrderCost()

    expect(totalCost).toBe(9.5)
  })
})
