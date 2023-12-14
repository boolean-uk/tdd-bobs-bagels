/* eslint-disable prettier/prettier */
const data = require('../inventory.json')
class IndividualUser {
    constructor() {
        this.userOrderList = []
    
    }

    findExistingItem(item) {
        return  this.userOrderList.find((itemExist) => itemExist.sku === item)
    }

    addOrderToBasket(item, name, managerLimit) {

            if (name !== 'manager') {
                return this.setUserBasketLimit(item)

            } else {
                return this.setManagerLimit(item, managerLimit)
            }
    }


    setUserBasketLimit(item) {
        if(this.userOrderList.length >= 10) {
            return "Your basket is full!"
        } else {
            const orderedItem = data.inventory.find((order) => order.sku === item)
            this.userOrderList.push(orderedItem)
            return 'You Can Add More'
        }
    }


    setManagerLimit(item, managerLimit) {
        if (this.userOrderList.length >= managerLimit) {
            return "Your basket is full!";
        } else {
            const orderedItem = data.inventory.find((order) => order.sku === item)
            this.userOrderList.push(orderedItem)
            return 'You Can Add More';
        }
    }


    removeItemFromBasket(item) {
        const itemToDelete = this.userOrderList.findIndex((order) => order.sku === item)

        if (itemToDelete !== -1) {
            this.userOrderList.splice(itemToDelete, 1)
        } else {
            return "Item you trying to Remove does not exist in your basket"
        }
    }



    retrieveItemPrice(itemName) {
        const item = data.inventory.find((item) => item.sku === itemName)

        if(item) {
            const itemPrice =Number(item.price)
            return itemPrice
        } else {
            return "Nothing found"
        }     
    }








}

module.exports = IndividualUser