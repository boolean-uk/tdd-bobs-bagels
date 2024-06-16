const Basket = require('../../src/basket')

describe('Basket class', () => {
    let b
    beforeEach(()=>{
        b = new Basket(0,0)
    })
    it('should add a bagel to the basket',() => {
        const basket = new Basket()
        basket.addToBasket(1)
        expect(basket.addedItems).toBe(1)
    })
    it('should remove an item from the basket', () => {
        const basket = new Basket(1);
        basket.removeFromBasket();
        expect(basket.totalItems).toBe(0);
      });
    it('should check if my basket has reached it/s capacity',() => {
        const basket = new Basket(10);
        basket.capacityReached(10)
        expect(basket.totalItems).toBe(10)
    })
    it('should increase the capacity of the basket', () => {
        const basket = new Basket(10);
        basket.increaseCapacity(10); 
        expect(basket.capacity).toBe(20); 
      });
      it('should notify when trying to remove an item that does not exist', () => {
        const basket = new Basket(0); 
        const message = basket.removeFromBasket(); 
        expect(message).toBe('No items to remove'); 
      });
      it('should set and get the price of an item', () => {
        const basket = new Basket();
        basket.setItemPrice('bagel', 1.99); 
        expect(basket.getItemPrice('bagel')).toBe(1.99); 
      });
    
      it('should return "Item not found" for non-existent items', () => {
        const basket = new Basket();
        expect(basket.getItemPrice('nonExistentItem')).toBe('Item not found');
      });
      it('should add the same type of item multiple times', () => {
        const basket = new Basket();
        basket.addToBasket('bagel', 2);
        basket.addToBasket('bagel', 3); 
        expect(basket.items['bagel']).toBe(5);
      });
      it('should calculate the total sum of the items within the basket',()=>{
        const basket = new Basket()
        basket.setItemPrice('bagel',1.00)
        basket.setItemPrice('coffee',2.00)
        const totalSum = basket.getTotalSum()
        expect(totalSum).toBe(5.00)
      })
})