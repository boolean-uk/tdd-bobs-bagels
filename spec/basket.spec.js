const BagelBasket = require('../src/basket');

describe('BagelBasket', () => {
    let basket;
    const bagel = { name: 'Plain Bagel', price: 2.50 };
    const anotherBagel = { name: 'Sesame Bagel', price: 3.00 };

    beforeEach(() => {
        basket = new BagelBasket();
    });

    it('adds an item to the basket', () => {
        basket.addItem(bagel);
        expect(basket.items).toContain(bagel);
    });

    it('removes an item from the basket', () => {
        basket.addItem(bagel);
        basket.removeItem('Plain Bagel');
        expect(basket.items).not.toContain(bagel);
    });

    it('does not add an item if the basket is full', () => {
        for (let i = 0; i < 5; i++) {
            basket.addItem(bagel);
        }
        expect(basket.addItem(anotherBagel)).toBe('Basket is full');
    });

    it('allows creating a basket with larger capacity', () => {
        const largeBasket = new BagelBasket(10);
        expect(largeBasket.capacity).toBe(10);
    });

    it('notifies when removing an item that does not exist', () => {
        expect(basket.removeItem('Nonexistent Bagel')).toBe('Item not found');
    });

    it('shows the price of each item', () => {
        basket.addItem(bagel);
        expect(basket.items[0].price).toBe(2.50);
    });

    it('allows adding the same type of bagel more than once', () => {
        basket.addItem(bagel);
        basket.addItem(bagel);
        expect(basket.items.filter(item => item.name === 'Plain Bagel').length).toBe(2);
    });

    it('calculates the total sum of the bagels in the basket', () => {
        basket.addItem(bagel);
        basket.addItem(anotherBagel);
        expect(basket.getTotalPrice()).toBe(5.50);
    });
});
