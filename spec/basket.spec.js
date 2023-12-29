const {inventory} = require('../inventory.json')
const {Basket, Item} = require('../src/basket')



describe( 'Basket',()=>{
    it('Can have an item added to it and returns true', ()=>{
        //GIVEN
            const basket = new Basket();
            const itemObject = inventory[0]
            const item = new Item(itemObject)
        //WHEN
           result =  basket.addItemToBasket(item)
        //THEN
        expect(result).toBeTrue()
    })

    it('returns false if an invalid item is added to the basket', ()=>{
        //GIVEN
        const basket = new Basket();
        const item = {name: "bagel"}

        //WHEN

        const result = basket.addItemToBasket(item)

        //THEN
        expect(result).toBeFalse

    })
})