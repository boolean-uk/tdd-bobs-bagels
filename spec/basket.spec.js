const {Basket} = require('./../src/basket')

describe("Basket contents:", () => {
    it("(1) should add a bagel to the basket", () => {
        //setup
        //we need the sku value from inventory.js ; manually written bec .js not imported
        const sku = 'BGSE';
        //creating a new basket for testing purposes: 
        //reset things to fresh on each test so that the order of testing is not nb. think of the SoftPlay tdd reseting occupancy to (0, 0)
        const basket = new Basket()

        //execute:
        //when function is called, I want to see the Basket/basket = [{newBagel}]
        const expectedResult = {
            sku: 'BGSE',
            price: '2.99',
            name: 'Bagel Sandwich',
            variant: 'Everything',
            fillings: ['Bacon', 'Egg', 'Cheese']
        };

        //linking it to basket. becuase  was getting "function is undefined" errors. result of the function being called
        const result = basket.addToBasket(sku);
        //verify
        expect(result).toEqual(expectedResult)
    });

    it("(2) should remove a bagel from the basket", () => {
        //setup
        const sku = 'BGSE';
        const basket = new Basket()

        //execute:
        const expectedResult = {
            sku: 'BGSE',
            price: '2.99',
            name: 'Bagel Sandwich',
            variant: 'Everything',
            fillings: ['Bacon', 'Egg', 'Cheese']
        };

        const result = basket.removeFromBasket(sku);
        //verify
        expect(result).toEqual(expectedResult)
    });

})