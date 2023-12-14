class Special {
  constructor (sku, ruleAsFunction) {
    this.sku = sku
  }

  rule (amount, price) {
    ruleAsFunction
  }
}

export default Special