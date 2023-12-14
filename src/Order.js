/* eslint-disable prettier/prettier */
const data = require('../inventory.json')
class IndividualUser {
    constructor(isManager = false) {
        this.userOrderList = []
        this.isManager = isManager
    
    }
    
    // to add an item to the cart
    addOrderToBasket(item, managerLimit) {

            if (!this.isManager) {
                return this.setUserBasketLimit(item)

            } else {
                return this.setManagerLimit(item, managerLimit)
            }
    }

// to make suer not able to add more than 10 :  set User Limit
    setUserBasketLimit(item) {
        if(this.userOrderList.length >= 10) {
            return "Your basket is full!"
        } else {
            this.userOrderList.push(item)
            return 'You Can Add More'
        }
    }


    // set manasger limit to anything he wants, allowing him to set his limit by passing a number 
    setManagerLimit(item, managerLimit) {
        if (this.userOrderList.length >= managerLimit) {
            return "Your basket is full!";
        } else {
            this.userOrderList.push(item)
            return 'You Can Add More';
        }
    }

// to remove an item from the basket
    removeItemFromBasket(item) {
        const itemToDelete = this.userOrderList.findIndex((order) => order.sku === item.sku)

        if (itemToDelete !== -1) {
            this.userOrderList.splice(itemToDelete, 1)
        } else {
            return "Item you trying to Remove does not exist in your basket"
        }
    }



    // to get the prive of an item
    retrieveItemPrice(itemName) {
        const item = data.inventory.find((item) => item.sku === itemName)

        if(item) {
            const itemPrice =Number(item.price)
            return itemPrice
        } else {
            return "Nothing found"
        }     
    }


    // to add the quantity
    addQuantity(item) {
        const foundItemIndex = this.userOrderList.findIndex((order) => order.name === item.name)

        if(foundItemIndex !== -1) {
            this.userOrderList[foundItemIndex].quantity++
            const unitPrice = this.userOrderList[foundItemIndex].price

            this.userOrderList[foundItemIndex].price = unitPrice * this.userOrderList[foundItemIndex].quantity
        }

    }

    // to get the total ammount of the other a user add to there basket
    TotalAmmountOfOrder() {
        let total = 0

        this.userOrderList.forEach((item) => {
            total += item.price * item.quantity
        })

        return total
    }



}



class Item {
    constructor(data) {
        this.sku = data.inventory[0].sku;
        this.price = data.inventory[0].price;
        this.name = data.inventory[0].name;
        this.variant = data.inventory[0].variant;
        this.quantity = 1
    }


}




module.exports = { IndividualUser, Item };
