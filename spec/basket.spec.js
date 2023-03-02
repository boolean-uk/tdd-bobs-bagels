const { Basket } = require('./../src/basket')

describe("Basket contents:", () => {
    it("(1) should add a bagel to the basket", () => {
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

        const result = basket.addToBasket(sku);
        //verify
        expect(result).toEqual(expectedResult)
    });

    it("(2) should remove a bagel from the basket", () => {
        //setup
        const sku = 'BGLO';
        const newBasket = new Basket()

        newBasket.basket.push(
            {
                sku: 'BGLO',
                price: '0.49',
                name: 'Bagel',
                variant: 'Onion'
            },
            {
                sku: 'BGLP',
                price: '0.39',
                name: 'Bagel',
                variant: 'Plain'
            })

        //execute:
        const expectedBasket = new Basket()
        expectedBasket.basket.push({
            sku: 'BGLP',
            price: '0.39',
            name: 'Bagel',
            variant: 'Plain'
        })
        const expectedResult = expectedBasket

        newBasket.removeFromBasket(sku);

        const result = newBasket
        //verify
        // eslint-disable-next-line no-undef
        expect(result).toEqual(expectedResult)
    });

    it("(2.1) should inform user that item is not in basket", () => {
        //setup
        const sku = 'BGLO';
        const newBasket = new Basket()

        //execute:
      
        const expectedResult = 'this bagel is not in your basket'

        //verify
        const result = newBasket.removeFromBasket(sku)

        expect(result).toEqual(expectedResult)
    });

    it("(3) should have default capacity 10", () => {
        const newBasket = new Basket()

        const expectedResult = 10
        const result = newBasket.capacity
        //verify
        // eslint-disable-next-line no-undef
        expect(result).toEqual(expectedResult)
    })

    it("(4) should have an increased basket size  > 10", () => {
        const newBasket = new Basket(15)

        const expectedResult = 15
        newBasket.checkBasketCapacity()
        const result = newBasket.capacity
        //verify
        // eslint-disable-next-line no-undef
        expect(result).toEqual(expectedResult)
    }) 


})