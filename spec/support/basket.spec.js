import { Basket } from "../../Basket"
import { Product } from "../../Product"

describe('Testing class basket', () => {

    beforeEach(() => {
        let basket = new Basket()
        let basket2 = new Basket(2)
        let product1 = new Product("BGLO", 0.49, "Bagel", "Onion")
        let product2 = new Product("COFB", 0.99, "Coffee", "Black")
        let product3 = new Product("BGLP", 0.39, "Bagel", "Plain")
    })

    it('should add product to basketList', () => {
        //Set up
        basket.addProduct(product1)
        basket.addProduct(product2)

        //Test
        expect(basket.getBasketList().length).toEqual(2)
    })

    it('should not add product to basketList', () => {
        //Set up
        basket2.addProduct(product1)
        basket2.addProduct(product2)
        basket2.addProduct(product3)

        //Test
        expect(Object.keys(basket.getBasketList()).length).toEqual(2)
    })

    it('should remove product from basketList', () => {
        //Set up
        basket.addProduct(product1)
        basket.addProduct(product2)
        basket.removeProduct(product1)

        //Test
        expect(Object.keys(basket.getBasketList()).length).toEqual(1)
        expect(Object.keys(basket.getBasketList()).includes(product1)).toBeFalsy()
    })
})
