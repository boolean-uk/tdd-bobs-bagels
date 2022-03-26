class Checkout {
  constructor(discountedBasket, sumOfCart) {
    this.discountedBasket = discountedBasket;
    this.sumOfCart = sumOfCart;
    this.checkout();
  }
  checkout() {
    let today = new Date();

    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    let dateTime = date + " " + time;
    let totalSaving = 0;
    let receipt = `
        ~~~ Bob's Bagels ~~~  
         
        ${dateTime} 
    
        --------------------- \n`;
    for (let key of Object.keys(this.discountedBasket)) {
      this.discountedBasket[key].forEach((item) => {
        totalSaving += item.savings || 0;
        if (item.variant) {
          receipt += `   ${item.variant} ${item.name} ${item.totalQuantity} = £${item.price} \n`;
          receipt +=
            item.savings > 0
              ? `                 (£-${item.savings > 0 ? item.savings : ""})\n`
              : "";
        } else if (!item.variant) {
          receipt += `   ${item.name} ${item.totalQuantity} = £${item.price} \n`;
          receipt +=
            item.savings > 0
              ? `                 (£-${item.savings > 0 ? item.savings : ""})\n`
              : "";
        }
      });
      receipt += `   
       ----------------------- \n`;
      break;
    }
    receipt += `   Total £${this.sumOfCart}\n`;

    receipt += `    
      You saved a total of £${totalSaving}
            on this shop
    
            Thank you
          for your order!
           `;

    return receipt;
  }
}

module.exports = Checkout;
