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
        expect(basket.getBasketList().length).toEqual(2)
    })

    it('should not add product to basketList', () => {
        //Set up
        basket2.addProduct(product1, 1)
        basket2.addProduct(product2, 1)
        basket2.addProduct(product3, 1)

        //Test
        expect(Object.keys(basket.getBasketList()).length).toEqual(2)
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
})
