/* eslint-disable no-use-before-define */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

const {IndividualUser, Item} = require('../src/Order.js')
const data = require('../inventory.json')

describe('Store ordering ', () => {
    describe('should be able to order from store', () => {

        // this is just to comfrim that my function addOrderToBasket() surely add item to the basket when it is clciked or called 
        it('can add a order to the basket', () => {
            const user = new IndividualUser()
            const orderItem = new Item(data)

            user.addOrderToBasket(orderItem)
       

            expect(user.userOrderList.length).toBe(1)
        })

        // this check is just to comfirm that my fucntion removeItemFromBasket() surely remove item fromt he basket
        it('can remove an item from a basket', () => {
            const user = new IndividualUser()

            const orderItem1 = new Item(data)
            const orderItem2 = new Item(data)

            user.addOrderToBasket(orderItem1)
            user.addOrderToBasket(orderItem2)

            user.removeItemFromBasket(orderItem1)

            expect(user.userOrderList.length).toBe(1)
        })


    //     // this is to check and verify that the user cant add more than there limit
        it('keep track of basket Full', () => {
            const user = new IndividualUser()
 
            
            const orderItem2 = new Item(data)
            for (let i = 0; i < 11; i++) {
                user.addOrderToBasket(orderItem2, 30)
            }

            const MessageIfFull = user.addOrderToBasket(orderItem2, 30)
     
            
            expect(MessageIfFull).toBe("Your basket is full!")
        
        })


        // This is the to check and comfirm that the user can add anynumber below 10
        it('keep track of basket Full', () => {
            const user = new IndividualUser()
 
            
            const orderItem2 = new Item(data)
            for (let i = 0; i < 7; i++) {
                user.addOrderToBasket(orderItem2, 30)
            }

            const MessageIfFull = user.addOrderToBasket(orderItem2, 30)
     
           
            expect(MessageIfFull).toBe("You Can Add More")
        
        })




    //     // this is to check and comfirm if truely the manager can add more than 10 , that is he can add uo to the limit he set
        it('for manager lowest', () => {
            const user = new IndividualUser(true)
 
            
            const orderItem2 = new Item(data)
            for (let i = 0; i < 10; i++) {
                user.addOrderToBasket(orderItem2, 33)
            }


            const MessageIfFull = user.addOrderToBasket(orderItem2, 33)
            console.log(MessageIfFull)
    
            expect(MessageIfFull).toBe('You Can Add More')
        
        })



        // this is the to check and comfirm to MAKE SURE THE MANAGER CANT ADD MORE THAN THE LIMIT HE sessionStorage, THOU HE CAN ALWAYS CHANGE IT
        it('for manager higest', () => {
            const user = new IndividualUser(true)
 
            
            const orderItem2 = new Item(data)
            for (let i = 0; i < 34; i++) {
                user.addOrderToBasket(orderItem2, 33)
            }


            const MessageIfFull = user.addOrderToBasket(orderItem2, 33)
            console.log(MessageIfFull)
        
            expect(MessageIfFull).toBe('Your basket is full!')
        
        })


        it('get the price before adding the item to the basket', () => {
            const user = new IndividualUser()

        
            const price = user.retrieveItemPrice('BGLP')
            expect(price).toBe(39)


        }) 

        // this check is just to comfirm that my fucntion addQuantity surely update the quantity of an item when it is clciked 
        it('to add quantity of an item', () => {
            const user = new IndividualUser()

            const orderItem1 = new Item(data)
            const orderItem2 = new Item(data)

            user.addOrderToBasket(orderItem1)
            // user.addOrderToBasket(orderItem2)
            user.addQuantity(orderItem2)
            user.addQuantity(orderItem2)
            const quantity = user.userOrderList[0].quantity

            expect(quantity).toEqual(3)

        })

        // this check is just to comfirm that my fucntion TotalAmmountOfOrder() surely get the total ammoutn of everythign in the basket whne it is called 
        it('get the total Ammount of my item', () => {
            const user = new IndividualUser()

            const orderItem1 = new Item(data)
            const orderItem2 = new Item(data)

            orderItem1.quantity = 3
            orderItem2.quantity = 4


            user.addOrderToBasket(orderItem1)
            user.addOrderToBasket(orderItem2)
            

            const expectedTotalPrice = (orderItem1.price * orderItem1.quantity) + (orderItem2.price * orderItem2.quantity)
            const toAmmountToPay = user.TotalAmmountOfOrder()

            expect(toAmmountToPay).toEqual(expectedTotalPrice)


        })



    })
})