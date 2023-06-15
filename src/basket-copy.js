class Basket {
  constructor(capcity) {
    this.products = [
      {
        itemName: 'Plain Bagel',
        unitPrice: 5
      },
      {
        itemName: 'Everything Bagel',
        unitPrice: 10
      },
      {
        itemName: 'Sesame Bagel',
        unitPrice: 15
      }
    ]
    this.basketVolume = [3]
    this.basketContent = []
    this.itemQty = 1
    this.totalPrice = 0
  }

  addItemToBasket(itemName, itemQty = 1) {
    const totalInBasket = this.totalUnitsOfItemsInBasket()
    const itemExist = this.checkItemExistInBasket(itemName)

    if (itemExist) {
      return this.updateProduct(itemName, itemQty)
    }

    if (totalInBasket >= this.basketVolume[0]) {
      return console.log('Basket can take 3 items')
    } else {
      return this.basketContent.push({ itemName, itemQty })
    }
  }

  totalAmount() {
    let totalPrice = 0
    this.basketContent.forEach((item) => {
      const product = this.products.find((p) => p.itemName === item.itemName)
      if (product) {
        totalPrice += product.unitPrice * item.itemQty
      }
    })
    this.totalPrice = totalPrice // Assign the total price to the instance property
    console.log(totalPrice)
    return totalPrice
  }
}

const newCustomer = new Basket(3)
newCustomer.addItemToBasket('Plain 1', 1)
newCustomer.addItemToBasket('Plain 1', 1)
newCustomer.addItemToBasket('Plain 3', 1)
newCustomer.addItemToBasket('Plain 4', 1)

console.log(newCustomer.basketContent)

const total = newCustomer.totalAmount()
console.log('total', total)

export default Basket
