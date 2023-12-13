/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
const IndividualUser = require('../src/Order.js')

describe('Store ordering ', () => {
    describe('should be able to order from store', () => {
        it('can add a order to the basket', () => {
            const user = new IndividualUser()
            user.addOrderToBasket('BANANA')
            expect(user.userOrderList.length).toBe(1)
        })

        it('can remove an item from a basket', () => {
            const user = new IndividualUser()
            user.addOrderToBasket('Banana')
            user.addOrderToBasket('Apple')
            user.removeItemFromBasket('Banana')

            expect(user.userOrderList.length).toBe(1)
        })
    })
})