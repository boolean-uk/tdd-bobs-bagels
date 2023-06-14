class Basket {
  constructor(capacity) {
    this.products = [
      {
        itemName: 'Plain Bagel',
        unitPrice: 1.0,
        SKU: 'PBA'
      },
      {
        itemName: 'Everything Bagel',
        unitPrice: 1.25,
        SKU: 'EBA'
      },
      {
        itemName: 'Sesame Bagel',
        unitPrice: 1.5,
        SKU: 'SBA'
      },
      {
        itemName: 'Cinnamon Raisin Bagel',
        unitPrice: 1.75,
        SKU: 'CRB'
      },
      {
        itemName: 'Spinach & Feta Bagel',
        unitPrice: 2.0,
        SKU: 'SFB'
      }
    ]
    this.basketCapacity = capacity
    this.basketContent = []
    this.itemQty = 1
  }

  getAllProductsInBasket() {
    return this.basketContent
  }

  addItemToBasket(itemName, itemQty) {
    const product = { itemName, itemQty }
    this.basketContent.push(product)
    return this.basketContent
  }

  removeItemFromBasket(itemName) {
    const index = this.basketContent.findIndex(
      (item) => item.itemName === itemName
    )
    if (index !== -1) {
      this.basketContent.splice(index, 1)
      return true
    } else {
      return false
    }
  }
}

const basket1 = new Basket()
basket1.addItemToBasket('Plain Bagel', 1)
basket1.addItemToBasket('Rice Bagel', 2)
// console.log(basket1.getAllProductsInBasket())
basket1.removeItemFromBasket('Plain Bagel')
// console.log(basket1.getAllProductsInBasket())

export default Basket
