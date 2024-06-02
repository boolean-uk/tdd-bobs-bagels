describe("Basket", () => {
    beforeEach(() => {
        const basket = new Basket()
    })

    it("should exist", () => {
        expect(basket).toBeInstanceOf(Basket)
    })
})