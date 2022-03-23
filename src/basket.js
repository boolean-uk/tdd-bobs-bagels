/*
OBJECTS      PROPERTIES            METHODS              Output
Item        id @Number
Basket:     items @Array[Item]  add(item @Item)      item
            remove(name)        remove(item by id)   item [new array]
            Capacity            Is full()            Yes or no
            Capacity            maxCapacity()         More Items
*/

class Basket {
    constructor() {
        this.items = []
        this.maxCapacity = 2
    }

    add(item) {
        this.items.push(item)
        // console.log("Added item, returning items;",this.items)
        return this.items
    }

    remove(name) {
        const keptItems = []

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name !== name) {
                keptItems.push(this.items[i])
            }
        }

        if (this.items.length === keptItems.length) {
            return "cannot remove from Basket"
        }

        this.items = keptItems

        return this.items
    }

    isFull() {
        if (this.items.length >= this.maxCapacity) {
            return true
        }
        return false
    }

    setMaxCapacity(newMaxCapacity) {
        if (newMaxCapacity > 0 && newMaxCapacity > this.items.length) {

            this.maxCapacity = newMaxCapacity
        }

        return this.maxCapacity
    }
}

module.exports = Basket
