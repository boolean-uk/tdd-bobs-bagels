const fs = require('fs')

const { addItem } = require("../src/basket")

describe('Simple basket operations', () => {
    
    let basket
    let inventory

    beforeAll(() => {
        let inventoryFile = fs.readFileSync('inventory.json')
        inventory = JSON.parse(inventoryFile)["inventory"]
    })

    beforeEach(() => {
        basket = {
            items: []
        }
    })

    it('should add an item to basket', () => {
        addItem(basket, inventory[0])
        expect(basket.items.length).toEqual(1)
    })
})