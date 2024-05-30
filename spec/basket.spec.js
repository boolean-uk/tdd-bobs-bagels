describe('Basket', () => {
  let basket

  beforeEach(() => {
    basket = new Basket()
  })

  it('should exist', () => {
    expect(basket).toBeInstanceOf(Basket)
  })
})
