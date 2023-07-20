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
          throw new Error("That iteam does not exist in our basket");
        }
      
        this.items.splice(itemIndex, 1);
        console.log(item + " removed from basket");
      }      

    getBasketPrice(){
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    groupItemsBySku() {
        const skuInfoMap = {};

        this.items.forEach(item => {
            const sku = item.sku.toUpperCase();
            if (skuInfoMap[sku]) {
                skuInfoMap[sku].quantity++;
            } else {
                skuInfoMap[sku] = {
                    quantity: 1,
                    pricePerSku: item.price
                };
            }
        });

        return skuInfoMap;
    }


    discountForBGLEBGLO(quantity, pricePerSku){
        let discountPrice = 0;
        let counter = quantity
        while(counter !== 0){
            if(counter < 6){
                discountPrice += counter * pricePerSku;
                counter = 0;
            }
            else{
                discountPrice += 2.49
                counter -= 6;
            }
        }
        return discountPrice;
    }

    discountForBGLP(quantity, pricePerSku){
        let discountPrice = 0;
        let counter = quantity
        while(counter !== 0){
            if(counter < 12){
                discountPrice += counter * pricePerSku;
                counter = 0;
            }
            else{
                discountPrice += 3.99
                counter -= 12;
            }
        }
        return discountPrice;
    }


    getBasketPriceWithDiscounts() {
        const skuInfoMap = this.groupItemsBySku();
        let totalPrice = 0;
        for (const sku in skuInfoMap) {
            const item = skuInfoMap[sku];
            if (sku === "BGLE" || sku === "BGLO") {
                totalPrice += this.discountForBGLEBGLO(item.quantity, item.pricePerSku);
            } 
            else if (sku === "BGLP") {
                totalPrice += this.discountForBGLP(item.quantity, item.pricePerSku);
            }
            else {
                totalPrice += skuInfoMap[sku].quantity * skuInfoMap[sku].pricePerSku;
            }
        }

        return totalPrice.toFixed(2);
    }
};

function changeBasketCappacity(newCappacity){
    cappacity = newCappacity;
}

module.exports = {
    Basket,
    changeBasketCappacity,
  };