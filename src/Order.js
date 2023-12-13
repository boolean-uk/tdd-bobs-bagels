/* eslint-disable prettier/prettier */
class IndividualUser {
    constructor() {
        this.userOrderList = []
    }

    addOrderToBasket(item) {
        this.userOrderList.push(item)
    }

    removeItemFromBasket(item) {
        const itemToDelete = this.userOrderList.find((i) => i === item) 

        if (itemToDelete !== -1) {
            this.userOrderList.splice(itemToDelete, 1)
        } else {
            return "Item is not found "
        }
    }
}

module.exports = IndividualUser