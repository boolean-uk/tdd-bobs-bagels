TotalAmountOfOrderBasedOnItems(...items) {
    const totalPriceFromInventory = data.inventory
        .filter(item => items.includes(item.sku))
        .reduce((total, item) => total + Number(item.price), 0);

    return totalPriceFromInventory;
}




the jasmine test should be
 describe('Total amount of order based on items', () => {
    it('calculates the total amount of order based on provided items', () => {
        const user = new IndividualUser();

        const totalOrderPrice = user.TotalAmountOfOrderBasedOnItems('BGLO', 'BGLP');
        const expectedTotalPrice = 49 + 39; // Sum of prices for 'BGLO' and 'BGLP'

        expect(totalOrderPrice).toBe(expectedTotalPrice);
    });
});
