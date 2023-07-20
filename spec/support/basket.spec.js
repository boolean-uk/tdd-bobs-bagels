describe("basket class tests", () => {
  it("should add one bagel to the basket", () => {
    const newBagel = new Bagel("Plain", 3.57);
    const basket = new Basket(10);

    const result = basket.add(newBagel, 1);

    expect(result).toEqual(true);
  });
});
