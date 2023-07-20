const fs = require('fs')

const { addItem, removeItem, isFull, containsItem } = require("../src/basket")

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

describe('Conditional basket operations', () => {
    let basket
    let inventory

    beforeAll(() => {
        let inventoryFile = fs.readFileSync('inventory.json')
        inventory = JSON.parse(inventoryFile)["inventory"]
    })

    beforeEach(() => {
        basket = {
            items: [],
            capacity: 3
        }
    })

    it('should return false when basket is not full', () => {
        expect(isFull(basket)).toBeFalse()
    })

    it('should return true when basket is full', () => {
        addItem(basket, inventory[0])
        addItem(basket, inventory[1])
        addItem(basket, inventory[2])

        expect(isFull(basket)).toBeTrue()
    })

    it('should throw an error when adding items to full basket', () => {
        addItem(basket, inventory[0])
        addItem(basket, inventory[1])
        addItem(basket, inventory[2])

        expect(() => addItem(basket, inventory[3])).toThrow('Basket is full')
    })

    it('should return true if basket contains the item', () => {
        const itemToCheck = inventory[1]

        addItem(basket, inventory[0])
        addItem(basket, inventory[1])
        addItem(basket, inventory[2])

        expect(containsItem(basket, itemToCheck)).toBeTrue()
    })

    it('should return false if basket does not contain the item', () => {
        const itemToCheck = inventory[3]

        addItem(basket, inventory[0])
        addItem(basket, inventory[1])
        addItem(basket, inventory[2])

        expect(containsItem(basket, itemToCheck)).toBeFalse()
    })

    it('should throw an error if trying to remove nonexisting item from the basket', () => {
        expect(() => removeItem(basket, inventory[0])).toThrow('Item does not exist in the basket')
    })
})