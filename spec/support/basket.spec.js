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


})
