const Basket = require('../../src/basket.js')

describe('Basket', () => {
    let basket;
    const product1 = {
        sku: 'BGLO',
        price: 0.49,
        name: 'Bagel',
        variant: 'Onion'
    }

    const product2 = {
        sku: 'BGLP',
        price: 0.39,
        name: 'Bagel',
        variant: 'Plain'
    }

    beforeEach(() => {
        basket = new Basket(10)
    })

    it('should be empty when created', () => {
        expect(basket.isEmpty()).toBe(true)
    })

    it('should add a new item to the basket', () => {
        // Execute
        basket.addItem(product1, 1)

        // Verify
        expect(basket.contents).toContain(product1)
        expect(basket.getItemQuantity(product1)).toEqual(1)
    })

    it('should add multiple items to the basket', () => {
        // Execute
        basket.addItem(product1, 6)

        // Verify
        expect(basket.contents).toContain(product1)
        expect(basket.getItemQuantity(product1)).toEqual(6)
    })

    it('should not add an item if the basket is full', () => {
        // Execute
        basket.addItem(product1, 10)

        // Verify
        expect(basket.getItemQuantity(product1)).toEqual(10)
        expect(() => {
            basket.addItem(product2, 1)
        }).toThrowError("Basket is full!!!")
    })

    it('should return true if the basket is full', () => {
        // Execute
        basket.addItem(product1, 10)

        // Verify
        expect(basket.isBasketFull()).toBe(true)
    })

    it('should return false if the basket is not full', () => {
        // Execute
        basket.addItem(product1, 9)

        // Verify
        expect(basket.isBasketFull()).toBe(false)
    })

    it('should return the number of items in the basket', () => {
        // Execute
        basket.addItem(product1, 5)

        // Verify
        expect(basket.getItemsCount()).toEqual(5)
    })

    it('should return the number of items in the basket for a specific product', () => {
        // Execute
        basket.addItem(product1, 5)
        basket.addItem(product2, 3)

        // Verify
        expect(basket.getItemQuantity(product1)).toEqual(5)
        expect(basket.getItemQuantity(product2)).toEqual(3)
    })

    it('should remove an item from the basket', () => {
        // Setup
        basket.addItem(product1, 5)

        // Execute
        basket.removeItem(product1, 1)

        // Verify
        expect(basket.getItemQuantity(product1)).toEqual(4)
    })

    it('should remove multiple items from the basket', () => {
        // Setup
        basket.addItem(product1, 5)

        // Execute
        basket.removeItem(product1, 3)

        // Verify
        expect(basket.getItemQuantity(product1)).toEqual(2)
    })

    it('should not remove an item from the basket if it is not in the basket', () => {
        // Setup
        basket.addItem(product1, 5)

        // Verify
        expect(() => {
            basket.removeItem(product2, 1)
        }).toThrowError("Can't remove an item that is not in the basket")
    })

    it('should not remove an item from the basket if the quantity is negative', () => {
        // Setup
        basket.addItem(product1, 5)

        // Verify
        expect(() => {
            basket.removeItem(product1, -1)
        }).toThrowError("Can't remove negative amount of products from basket")
    })

    it('should not remove an item from the basket if the quantity is greater than the number of items in the basket', () => {
        // Setup
        basket.addItem(product1, 5)

        // Verify
        expect(() => {
            basket.removeItem(product1, 6)
        }).toThrowError("Can't remove more items than are in the basket")
    })

})
