/* eslint-disable prettier/prettier */

class IndividualUser {
    constructor() {
        this.userOrderList = []
    
    }

    addOrderToBasket(item) {
        this.userOrderList.push(item)
    }

    removeItemFromBasket(item) {
        const itemToDelete = this.userOrderList.indexOf(item) 

        if (itemToDelete !== -1) {
            this.userOrderList.splice(itemToDelete, 1)
        } else {
            return "Item you trying to Remove does not exist in your basket"
        }
    }


}

module.exports = IndividualUser