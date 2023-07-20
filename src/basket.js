class Basket {
  constructor(capacity) {
    this.capacity = capacity
    this.products =[]
  }

  isFull() {
    return this.products.length === this.capacity
  }

  add(bagel) {
    if(!this.isFull())
    this.products.push(bagel)
  }

  doesBagelExist(bagel) {
    if(this.products.includes(bagel)) return true
    return false
  }

  remove(bagel) {
    if(this.doesBagelExist(bagel)) this.products.splice(bagel, 1)
  }

  totalCost() {
  let cost = 0
  for (const bagel of this.products) {
    cost += bagel.price
  }
  return cost
}

calculateDiscounts() {
  let quantities = this.getProductQuantities();
  let discounts = {};

  let discountedProducts = this.products.reduce((acc, product) => {
      let sku = product.sku;
      if (!acc[sku]) {
          acc[sku] = [];
      }
      acc[sku].push(product);
      return acc;
  }, {});

  for (let sku in quantities) {
      let quantity = quantities[sku];
      let discounted;
      switch(sku) {
          case "BGLO":
          case "BGLE": 
              discounted = Math.floor(quantity / 6);
              if(discounted > 0) {
                discounts[sku] = (discounted * 6 * 0.49) - (discounted * 2.49);
                discountedProducts[sku].splice(0, discounted * 6);
              }
              break;
          case "BGLP": 
              discounted = Math.floor(quantity / 12);
              if(discounted > 0) {
                discounts[sku] = (discounted * 12 * 0.39) - (discounted * 3.99);
                discountedProducts[sku].splice(0, discounted * 12);
              }
              break;
      }
  }

  if(quantities["COFB"]) {
    let remainingProducts = [].concat(...Object.values(discountedProducts)).sort((a, b) => a.getPrice() - b.getPrice());
    let coffeePrice = this.products.find(p => p.sku === "COFB").getPrice();
    let coffeeQuantity = quantities["COFB"];
    let discount = 0;
          
    for(let i = 0; i < coffeeQuantity; i++) {
        if(remainingProducts[i]) {
          let productPrice = remainingProducts[i].getPrice();
          discount += (coffeePrice + productPrice) - 1.25;
        } else {
          discount += coffeePrice;
        }
    }
    discounts["COFB"] = discount;
  }

  return discounts;
}



getProductQuantities() {
  return this.products.reduce((quantities, product) => {
    if (!quantities[product.sku]) {
      quantities[product.sku] = 0;
    }
    quantities[product.sku]++;
    return quantities;
  }, {});
}


}
module.exports = Basket