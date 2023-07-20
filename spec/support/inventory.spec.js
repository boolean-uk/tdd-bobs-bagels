/* eslint-disable prettier/prettier */
// const { Basket } = require("../../Basket")
const { Inventory } = require("../../src/Inventory")
const { Product } = require("../../src/Product")


describe('Testing class Inventory', () => {

    let inventory
    let product1
    beforeEach(() => {

        inventory = new Inventory()
        product1 = new Product("BGLO", 0.49, "Bagel", "Onion")
    })
    it('should return Product by SKU', () => {
        expect(inventory.getProductBySKU('BGLO')).toEqual(product1)
    })


})
