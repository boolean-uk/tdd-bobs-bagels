const data = require("../inventory-quant.json");
const INVENTORY = data["inventory"];

class Receipt2 {
    constructor(basketCheckout) {
      this.items = basketCheckout;
    }

print(price) {

    let receiptItems = `\n`

    for(let i = 0; i< this.items.length; i++) {
        receiptItems += `     ${this.items[i].variant} ${this.items[i].name}\t${this.items[i].quantity}\t£${Number(this.items[i].price)*this.items[i].quantity}\n` 
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
    { sku: 'BGLO', price: '0.49', name: 'Bagel', variant: 'Onion', quantity: 2 },
    { sku: 'BGLS', price: '0.49', name: 'Bagel', variant: 'Sesame', quantity: 2 },
    { sku: 'BGLP', price: '0.39', name: 'Bagel', variant: 'Plain', quantity: 1 },
  ]

  let receipt = new Receipt2(exampleBasket)
  console.log(receipt.print(10))

module.exports = Receipt2