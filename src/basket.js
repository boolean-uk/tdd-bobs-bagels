/* 
OBJECTS      PROPERTIES            METHODS              Output
Item         id @Number  
Basket:     items @Array[Item]   add(item @Item)      item    
             remove(name)        remove(item by id)   item [new array]
             Capacity            Is full()            Yes or no         

*/

class Basket {
    constructor () {
        this.items = []
    }
   add(item) {
        this.items.push(item)
// console.log("Added item, returning items;",this.items)
        return this.items 
    }
    
    remove (name) {
    const removedItems = []

    for (i = 0; i < this.items.length; i++) {
        if (this.items[i].name !== name) {
            removedItems.push(this.items[i])
        }               
    }
    
    this.items = removedItems
    
    return this.items
}

isFull () {
         if (this.items.length >= 2) {
 
            return true 
        }              
        return false   
}
}


module.exports = Basket