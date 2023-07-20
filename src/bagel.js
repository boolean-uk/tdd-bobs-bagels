class Bagel {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

const validateBagel = (b) => {
  if (!(b instanceof Bagel)) {
    throw new Error(`${b} is not a bagel`)
  }
}

module.exports = { Bagel, validateBagel }
