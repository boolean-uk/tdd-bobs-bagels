const fs = require('fs')

const { addItem, removeItem } = require("../src/basket")

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

    it('should remove the item from basket', () => {
        const itemToRemove = inventory[1]

        addItem(basket, inventory[0])
        addItem(basket, inventory[1])
        addItem(basket, inventory[2])

        removeItem(basket, itemToRemove)
        
        expect(basket.items.length).toEqual(2)
        expect(basket.items.indexOf(itemToRemove)).toEqual(-1)
    })
})