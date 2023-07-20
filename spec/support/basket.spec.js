/* eslint-disable prettier/prettier */
const { Basket } = require("../../Basket")
const { Product } = require("../../Product")


describe('Testing class basket', () => {

    let basket
    let basket2
    let product1
    let product2
    let product3

    beforeEach(() => {
        basket = new Basket()
        basket2 = new Basket(2)
        product1 = new Product("BGLO", 0.49, "Bagel", "Onion")
        product2 = new Product("COFB", 0.99, "Coffee", "Black")
        product3 = new Product("BGLP", 0.39, "Bagel", "Plain")
    })

    it('should add product to basketList', () => {
        //Set up
        basket.addProduct(product1, 1)
        basket.addProduct(product2, 1)

        //Test
        expect(Object.keys(basket.getBasketList()).length).toEqual(2)
    })

    it('should not add product to basketList', () => {
        //Set up
        basket2.addProduct(product1, 1)
        basket2.addProduct(product2, 1)
        basket2.addProduct(product3, 1)

        //Test
        expect(Object.keys(basket2.getBasketList()).length).toEqual(2)
    })

    it('should remove product from basketList', () => {
        //Set up
        basket.addProduct(product1, 1)
        basket.addProduct(product2, 1)
        basket.removeProduct(product1, 1)

        //Test
        expect(Object.keys(basket.getBasketList()).length).toEqual(1)
        expect(Object.keys(basket.getBasketList()).includes(product1)).toBeFalsy()
    })

    it('should not remove product from basketList', () => {
        //Set up
        basket.addProduct(product1, 1)

        //Test
        expect(Object.keys(basket.getBasketList()).length).toEqual(1)
        expect(basket.removeProduct(product2, 1)).toEqual("Product not in basket")
    })

    it('should tell when basket is full', () => {
        basket2.addProduct(product2, 2)
        expect(basket2.isFull()).toBeTruthy()
    })

    it('should tell when basket is not full', () => {
        basket2.addProduct(product1, 1)
        expect(basket2.isFull()).toBeFalsy()
    })

    it('should change capacity', () => {
        expect(basket2.getCapacity()).toEqual(2)
        basket2.setCapacity(5)
        expect(basket2.getCapacity()).toEqual(5)
    })

    it('should return total sum of Products', () => {
        basket.addProduct(product1, 1)
        basket.addProduct(product2, 2)
        expect(basket.getNumberOfProducts()).toEqual(3)
    })
    it('should return total sum of bagels', () => {
        basket.addProduct(product1, 1)
        basket.addProduct(product2, 2)
        expect(basket.getNumberOfBagels()).toEqual(1)
    })
})
