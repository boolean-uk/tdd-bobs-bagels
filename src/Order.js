/* eslint-disable prettier/prettier */

class IndividualUser {
    constructor() {
        this.userOrderList = []
    
    }

    addOrderToBasket(item, name, managerLimit) {
        if (name !== 'manager') {
            if(this.userOrderList.length >= 10) {
                return "Your basket is full!"
            } else {
                this.userOrderList.push(item)
                return 'You Can Add More'
            }
        } else {
            if (this.userOrderList.length >= managerLimit) {
                return "Your basket is full!";
            } else {
                this.userOrderList.push(item);
                return 'You Can Add More';
            }
        }
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