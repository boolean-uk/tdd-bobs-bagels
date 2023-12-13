/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
const IndividualUser = require('../src/Order.js')
const data = require('../inventory.json')

describe('Store ordering ', () => {
    describe('should be able to order from store', () => {
        it('can add a order to the basket', () => {
            const user = new IndividualUser()
            const orderItem = data.inventory[0].sku
            user.addOrderToBasket(orderItem)
            expect(user.userOrderList.length).toBe(1)
        })

        it('can remove an item from a basket', () => {
            const user = new IndividualUser()
            const orderItem1 = data.inventory[0].sku;
            const orderItem2 = data.inventory[0].sku;
            user.addOrderToBasket(orderItem1)
            user.addOrderToBasket(orderItem2)
            user.removeItemFromBasket(orderItem1)

            expect(user.userOrderList.length).toBe(1)
        })

        
    })
})