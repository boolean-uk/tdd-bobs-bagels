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
  let quantities = this.getProductQuantities()
  let discounts = {}

  let discountedBagels = this.products.reduce((acc, bagel) => {
      let sku = bagel.sku
      if(!acc[sku]) {
          acc[sku] = []
      }
      acc[sku].push(bagel)
      return acc;
  }, {})

  for (let sku in quantities) {
      let quantity = quantities[sku]
      switch(sku) {
          case "BGLO":
          case "BGLE": 
              let discounted = Math.floor(quantity / 6)
              discounts[sku] = discounted * 0.45
              discountedBagels[sku].splice(0, discounted * 6)
          case "BGLP": 
              discounted = Math.floor(quantity/12)
              discounts[sku] = discounted * 0.69
              discountedBagels[sku].splice(0, discounted * 12)
      }
  }

  for (let sku in quantities) { 
      if(sku === "COFB") {
          let products = [].concat.apply([], Object.values(discountedBagels)).sort((a,b) => a.getPrice() - b.getPrice())
          let discount = 0
          let coffeePrice = this.products.find(p => p.sku === sku).getPrice()
          let coffeeQuantity = quantities[sku]
          
          for(let product of products) {
              if(coffeeQuantity === 0) {
                  break
              }
              let bagelPrice = product.getPrice()
              discount += coffeePrice + bagelPrice - 1.25
              coffeeQuantity--;
          }
          discounts[sku] = discount
      }
  }
  return discounts
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