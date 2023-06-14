class Basket {
    constructor() {
      this.basket = [];
    }
  
    async addItem(sku) {
      try {
        const response = await fetch("http://localhost:4000/inventory");
        const data = await response.json();
  
        const bagel = data.find(item => item.sku === sku);
        if (bagel) {
        //   console.log(bagel);
          this.basket.push(bagel);
          console.log(this.basket)
          return this.basket;
        }
        else{
            console.log("item not found, try again")
        } 
  
        // console.log("Bagels data:", data);
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    }
  }
  
  const newBasket = new Basket();
  newBasket.addItem("BGLE");



  
  export default Basket
  
