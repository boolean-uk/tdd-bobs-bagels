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


        // this is to check and verify that the user cant add more than there limit
        it('keep track of basket Full', () => {
            const user = new IndividualUser()
 
            
            const orderItem2 = data.inventory[0].sku;
            for (let i = 0; i < 11; i++) {
                user.addOrderToBasket(orderItem2, 'mikel', 30)
            }

            const MessageIfFull = user.addOrderToBasket(orderItem2, 'mikel', 30)
     
            console.log(user.userOrderList.length)
            expect(MessageIfFull).toBe("Your basket is full!")
        
        })


        // This is the to check and comfirm that the user can add anynumber below 10
        it('keep track of basket Full', () => {
            const user = new IndividualUser()
 
            
            const orderItem2 = data.inventory[0].sku;
            for (let i = 0; i < 7; i++) {
                user.addOrderToBasket(orderItem2, 'mikel', 30)
            }

            const MessageIfFull = user.addOrderToBasket(orderItem2, 'mikel', 30)
     
            console.log(user.userOrderList.length)
            expect(MessageIfFull).toBe("You Can Add More")
        
        })




        // this is to check and comfirm if truely the manager can add more than 10 , that is he can add uo to the limit he set
        it('for manager', () => {
            const user = new IndividualUser()
 
            
            const orderItem2 = data.inventory[0].sku;
            for (let i = 0; i < 10; i++) {
                user.addOrderToBasket(orderItem2, 'manager', 33)
            }


            const MessageIfFull = user.addOrderToBasket(orderItem2, 'manager', 33)
            console.log(MessageIfFull)
            console.log(user.userOrderList.length)
            expect(MessageIfFull).toBe('You Can Add More')
        
        })



        // this is the to check and comfirm to MAKE SURE THE MANAGER CANT ADD MORE THAN THE LIMIT HE sessionStorage, THOU HE CAN ALWAYS CHANGE IT
        it('for manager', () => {
            const user = new IndividualUser()
 
            
            const orderItem2 = data.inventory[0].sku;
            for (let i = 0; i < 34; i++) {
                user.addOrderToBasket(orderItem2, 'manager', 33)
            }


            const MessageIfFull = user.addOrderToBasket(orderItem2, 'manager', 33)
            console.log(MessageIfFull)
            console.log(user.userOrderList.length)
            expect(MessageIfFull).toBe('Your basket is full!')
        
        })


        
    })
})