const Bagel = Require("../src/Bagel.js");

describe("Bagel", () => {
  // Requirement 1
  it("adds a bagel and returns the basket with that bagel", () => {
    const bagel = new Bagel();

    const expected = ["poppy"];
    const result = bagel.addToBasket("poppy");
    expect(result).toEqual(expected);
  });

  it("tries to add a bagel that is not in the list", () => {
    const bagel = new Bagel();

    const expected = "Please add bagels from the list";
    const result = bagel.addToBasket("chocolate chips");
    expect(result).toEqual(expected);
  });

  it("adds another bagel and returns the basket with multiple bagels", () => {
    const bagel = new Bagel();
    bagel.addToBasket("poppy");

    const expected = ["poppy", "sesame"];
    const result = bagel.addToBasket("sesame");
    expect(result).toEqual(expected);
  });

  it("adds a bagel, then removes, and returns an empty basket", () => {
    const bagel = new Bagel();
    bagel.addToBasket("poppy");
    bagel.removeFromBasket("poppy");

    const expected = [];
    const result = bagel.removeFromBasket("poppy");
    expect(result).toEqual(expected);
  });

  it("remove a specific bagel and returns the basket without that bagel", () => {
    const bagel = new Bagel();
    bagel.addToBasket("poppy");
    bagel.addToBasket("sesame");
    bagel.addToBasket("plain");
    bagel.addToBasket("cheese");

    const expected = ["poppy", "sesame", "cheese"];
    const result = bagel.removeFromBasket("plain");
    expect(result).toEqual(expected);
  });

  it('returns "Your basket is full"', () => {
    const bagel = new Bagel();
    bagel.addToBasket("poppy");
    bagel.addToBasket("sesame");
    bagel.addToBasket("plain");
    bagel.addToBasket("cheese");
    bagel.addToBasket("raisins");
    bagel.addToBasket("cinnamon");

    const expected = "Your basket is full";
    const result = bagel.isFull();
    expect(result).toEqual(expected);
  });

  it('returns "Continue to order; 3 bagels left"', () => {
    // Requirement 2
    const bagel = new Bagel();
    bagel.addToBasket("poppy");
    bagel.addToBasket("sesame");

    const expected = "Continue to order; 3 bagels left";
    const result = bagel.isFull();
    expect(result).toEqual(expected);
  });

  it('returns "Continue to order; 7 bagels left"', () => {
    const bagel = new Bagel();
    bagel.addToBasket("poppy");
    bagel.addToBasket("sesame");
    bagel.addToBasket("plain");
    bagel.addToBasket("cheese");
    bagel.addToBasket("raisins");
    bagel.createBigBasket();

    const expected = "Continue to order; 7 bagels left";
    const result = bagel.isFull();
    expect(result).toEqual(expected);
  });

  it('tries to remove a non-existing bagel and returns "You have not order this bagel"', () => {
    const bagel = new Bagel();
    bagel.addToBasket("poppy");
    bagel.removeFromBasket("raisins");

    const expected = "You have not order this bagel";
    const result = bagel.removeFromBasket("raisins");
    expect(result).toEqual(expected);
  });

  it("returns bagel: poppy, price: $4", () => {
    const bagel = new Bagel();

    const expected = "bagel: poppy, price: $4";
    const result = bagel.checkPrice("poppy");
    expect(result).toEqual(expected);
  });

  it("returns bagel: cheese, price: $3", () => {
    const bagel = new Bagel();

    const expected = "bagel: cheese, price: $3";
    const result = bagel.checkPrice("cheese");
    expect(result).toEqual(expected);
  });

  it("returns 3 cheese with one method", () => {
    const bagel = new Bagel();

    const expected = ["cheese", "cheese", "cheese"];
    const result = bagel.addToBasket("cheese", 3);
    expect(result).toEqual(expected);
  });

  it('returns ["plain", "cheese", "cheese", "cheese"] to add multiple same bagels at the same time', () => {
    const bagel = new Bagel();
    bagel.addToBasket("plain");

    // Requirement 3
    const expected = ["plain", "cheese", "cheese", "cheese"];
    const result = bagel.addToBasket("cheese", 3);
    expect(result).toEqual(expected);
  });

  it("returns total: $6", () => {
    const bagel = new Bagel();
    bagel.addToBasket("plain");
    bagel.addToBasket("poppy");

    const expected = "total: $6";
    const result = bagel.checkOut();
    expect(result).toEqual(expected);
  });

  it("returns total: $13", () => {
    const bagel = new Bagel();
    bagel.addToBasket("plain");
    bagel.addToBasket("plain");
    bagel.addToBasket("cheese");
    bagel.addToBasket("cheese");
    bagel.addToBasket("cinnamon");

    const expected = "total: $13";
    const result = bagel.checkOut();
    expect(result).toEqual(expected);
  });
});
