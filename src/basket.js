// const bagelList = [bagelbutter, bagel2, bagel3];

var indexToDelete = 0;

class Basket {
  constructor() {
    this.bagelBasket = [];

    // this.bagelNames = ["plain", "butter", "onion"];
  }
  //   if (this.bagelBasket = [])
  add(bagelName) {
    this.bagelBasket.push(bagelName);

    return this.bagelBasket;
  }
 
  //   remove(this.bagelList[]) {
  //     this.bagelBasket.find(this.bagelBasket[this.bagelList[1]]).pop();
  //     return this.bagelBasket;
  //   }

    // let newbagelBasket = bagelBasket.filter( (item, index) => {
    //     if ( index !== this.indexToDelete) {
    //         return item
    //     }
    //     return newbagelBasket;
    // });
}

module.exports = Basket;
