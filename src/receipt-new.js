const data = require("../inventory-quant.json");
const INVENTORY = data["inventory"];

class Receipt2 {
    constructor(basketCheckout) {
      this.items = basketCheckout;
    }

totalEachItem(object, numberOfItemsInDeal, priceOfDeal) {
   
const numberOfDeals = Math.floor(object.quantity/numberOfItemsInDeal)

const total = numberOfDeals*priceOfDeal + Number(object.price)*(object.quantity - numberOfDeals*numberOfItemsInDeal)

return Math.floor(total * 100) / 100;
}


print(price) {

    let receiptItems = `\n`

    for(let i = 0; i< this.items.length; i++) {
        if(this.items[i].sku === "BGLO" && this.items[i].quantity >= 6) {
            receiptItems += `   ${this.items[i].variant} ${this.items[i].name}\t${this.items[i].quantity}\t£${this.totalEachItem(this.items[i], 6, 2.49)}\n`
            + `\t\t\t(-£${(Math.ceil((Number(this.items[i].price)*this.items[i].quantity - this.totalEachItem(this.items[i], 6, 2.49))*100)/100).toFixed(2)})\n`
                     
        }
        else if(this.items[i].sku === "BGLE" && this.items[i].quantity >= 6) {
            receiptItems += `   ${this.items[i].variant} ${this.items[i].name}\t${this.items[i].quantity}\t£${this.totalEachItem(this.items[i], 6, 2.49)}\n`
              + `\t\t\t(-£${(Math.ceil((Number(this.items[i].price)*this.items[i].quantity - this.totalEachItem(this.items[i], 6, 2.49))*100)/100).toFixed(2)})\n`  
        }
        else if(this.items[i].sku === "BGLP" && this.items[i].quantity >= 12) {
            receiptItems += `   ${this.items[i].variant} ${this.items[i].name}\t${this.items[i].quantity}\t£${this.totalEachItem(this.items[i], 12, 3.99)}\n`
             + `\t\t\t(-£${(Math.ceil((Number(this.items[i].price)*this.items[i].quantity - this.totalEachItem(this.items[i], 12, 3.99))*100)/100).toFixed(2)})\n`  
        }
        else {
        receiptItems += `   ${this.items[i].variant} ${this.items[i].name}\t${this.items[i].quantity}\t£${Number(this.items[i].price)*this.items[i].quantity}\n` 
        }
    }
    
  
    
    return  `
        ~~~ Bob's Bagels ~~~
    
       ${Date().substring(3,24)}
    
    ----------------------------
    
    ${receiptItems}
    
    ----------------------------
    Total                 £${price.toFixed(2)}
    
    
           Thank you
         for your order!
    
    `
    }
  

}

const exampleBasket = [
    { sku: 'BGLO', price: '0.49', name: 'Bagel', variant: 'Onion', quantity: 8 },
    { sku: 'BGLS', price: '0.49', name: 'Bagel', variant: 'Sesame', quantity: 2 },
    { sku: 'BGLP', price: '0.39', name: 'Bagel', variant: 'Plain', quantity: 14 },
  ]

  let receipt = new Receipt2(exampleBasket)
  console.log(receipt.print(10))

module.exports = Receipt2