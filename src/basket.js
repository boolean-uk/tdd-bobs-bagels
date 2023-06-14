class Basket {
  constructor(capcity) {
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
    this.basketVolume = [3]
    this.basketContent = []
    this.itemQty = 1
  }

  getAllProductsInBasket() {
    return this.basketContent
  }

  addItemToBasket(itemName, itemQty = 1) {
    if (this.basketContent.length >= this.basketVolume[0]) {
      return 'Basket full. Get a bigger basket'
    } else {
      const product = { itemName, itemQty }
      this.basketContent.push(product)
      return this.basketContent
    }
  }

  removeItemFromBasket(itemName) {
    const index = this.basketContent.findIndex(
      (item) => item.itemName === itemName
    )
    if (index !== -1) {
      this.basketContent.splice(index, 1)
      return true
    } else {
      return 'You have not added this item'
    }
  }

  createNewBasket(newSize) {
    return this.basketVolume.push(newSize)
  }
}

const newCustomer = new Basket(3)
const bobOwner = new Basket(5)

newCustomer.addItemToBasket('Plain Bagel', 1)
newCustomer.addItemToBasket('Rice Bagel', 2)
bobOwner.createNewBasket(5)

export default Basket
