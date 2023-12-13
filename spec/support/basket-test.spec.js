const { Basket, Item } =  require("../../src/basket");

describe('Add an item to the basket', () => {
    let basket

    beforeEach(() => {
        basket = new Basket()
    })

    // Adding item to the basket
    it('adds an item to the basket', () => {
        const item1 = 'BGLO'
        // const newItem = new Item(item1)
        basket.addItem(item1)
        expect(basket.items[0].sku).toEqual('BGLO')
    })

    // Removing item from the basket
})