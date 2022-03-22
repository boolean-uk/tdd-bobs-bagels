/* 
OBJECTS      PROPERTIES            METHODS
Item         id @Number  
Basket       items @Array[Item]    add(item @Item) 

*/

class Basket {
    constructor () {
        this.items = []
    }
   add(item) {
        this.items.push(item)
console.log("Added item, returning items;",this.items)
        return this.items 
    }
}


module.exports = Basket