// import inventory from '../inventory.json'

class Basket {
  constructor() {
    this.basket = []
  }

  async addItem(sku) {
    try {
      const response = await fetch('http://localhost:4000/inventory')
      const data = await response.json()

      const bagel = data.find((item) => item.sku === sku)
      if (bagel) {
        //   console.log(bagel);
        this.basket.push(bagel)
        console.log('basket add', this.basket)
        return this.basket
      } else {
        console.log('item not found, try again')
      }

      // console.log("Bagels data:", data);
    } catch (error) {
      console.error('Error fetching inventory:', error)
    }
  }

  async removeItem(sku) {
    const bagelIndex = this.basket.findIndex((item) => item.sku === sku)

    if (bagelIndex !== -1) {
      console.log('item found at index:', bagelIndex)
      this.basket.splice(bagelIndex, 1)
      console.log('basket after remove', this.basket)
    } else {
      console.log('item not in basket')
    }

    return this.basket
  }
}

export default Basket
