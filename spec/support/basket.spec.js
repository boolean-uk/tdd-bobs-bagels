/* eslint-disable prettier/prettier */
const { Basket } = require("../../src/basket")
const { Product } = require("../../src/Product")


describe('Testing class basket', () => {

    let basket
    let basket2
    let basket3
    let product1
    let product2
    let product3
    let filling1
    let filling2

    beforeEach(() => {
        basket = new Basket()
        basket2 = new Basket(2)
        basket3 = new Basket(30)
        product1 = new Product("BGLO", 0.49, "Bagel", "Onion")
        product2 = new Product("COFB", 0.99, "Coffee", "Black")
        product3 = new Product("BGLP", 0.39, "Bagel", "Plain")
        filling1 = new Product("FILB",0.12,"Filling","Bacon")
        filling2 = new Product("FILE",0.12,"Filling","Egg")
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
    it('should return price of bagels with discount', () => {
        basket3.addProduct(product1, 7)
        basket3.addProduct(product3, 14)
        expect(basket3.getPriceOfMultipleBagels()).toEqual(3.99 + 2.49)
    })
    it('should return price of fillings', () => {
        basket.addProduct(filling1, 2)
        basket.addProduct(filling2, 1)
        basket.addProduct(product1)
        expect(basket.getPriceOfFillings()).toEqual(3 * 0.12)
    })
})
