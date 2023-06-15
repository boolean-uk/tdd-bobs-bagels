import Basket from '../src/basket.js';

describe('Basket', () => {
  let basket;

  beforeEach(() => {
    basket = new Basket();
    basket.loadPricesFromFile();
  });

  it('should add a bagel to the basket', () => {
    basket.pushToBasket('BGLO');
    expect(basket.items).toEqual({ BGLO: 1 });
  });

  it('should remove a bagel from the basket', () => {
    basket.pushToBasket('BGLO');
    basket.removeItem('BGLO');
    expect(basket.items).toEqual({});
  });

  it('should check basket capacity', () => {
    expect(basket.isFull()).toBe(false);
    basket.capacity = 1;
    basket.pushToBasket('BGLO');
    expect(basket.isFull()).toBe(true);
  });

  it('should increase basket capacity', () => {
    basket.increaseCapacity(10);
    expect(basket.capacity).toBe(10);
  });

  it('should remove an item from the basket', () => {
    basket.pushToBasket('BGLO');
    basket.removeItem('BGLO');
    expect(basket.items).toEqual({});
  });

  it('should get the price of an item', () => {
    expect(basket.getItemPrice('BGLO')).toBe(0.49);
  });

  it('should add the same item to the basket multiple times', () => {
    basket.pushToBasket('BGLO');
    basket.pushToBasket('BGLO');
    expect(basket.items).toEqual({ BGLO: 2 });
  });

  it('should calculate the total cost of the items in the basket', () => {
    basket.pushToBasket('BGLO');
    basket.pushToBasket('BGLO');
    expect(basket.getTotalCost()).toBe(0.98);
  });
});