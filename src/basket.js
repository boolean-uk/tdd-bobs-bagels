const { ListOfProducts } = require("./product.js");
let cappacity = 2;

class Basket{
    constructor(){
        this.items = [];
        this.cappacity = cappacity;
    }

    addItem(item){
        const itemToAdd = ListOfProducts.find(product => product.sku === item);

        if(!itemToAdd){
            throw new Error("That iteam does not exist in our menu");
        }

        if(this.items.length > this.cappacity - 1){
            throw new Error("Basket is full");
        }

        this.items.push(itemToAdd);
        console.log(itemToAdd.sku + " added to basket")
    }

    removeItem(item) {
        const itemIndex = this.items.findIndex((basketItem) => basketItem.sku === item);
      
        if (itemIndex === -1) {
          throw new Error("Item not found");
        }
      
        this.items.splice(itemIndex, 1);
        console.log(item + " removed from basket");
      }      

    getBasketPrice(){
        return this.items.reduce((total, item) => total + item.price, 0);
    }
};

function changeBasketCappacity(newCappacity){
    cappacity = newCappacity;
}

module.exports = Basket