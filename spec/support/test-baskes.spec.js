const assert = require('assert');
const { Basket, Item } = require('./basket');

describe('Basket', function () {
    let basket, item1, item2;

    beforeEach(function () {
        basket = new Basket();
        item1 = new Item("Plain Bagel", 2.5);
        item2 = new Item("Blueberry Bagel", 3.0);
    });

    it('should add an item to the basket', function () {
        basket.add(item1);
        assert.deepStrictEqual(basket.items, [item1]);
    });

    it('should remove an item from the basket', function () {
        basket.add(item1);
        basket.add(item2);
        basket.remove(item1);
        assert.deepStrictEqual(basket.items, [item2]);
    });

    it('should not remove an item that does not exist in the basket', function () {
        basket.add(item1);
        basket.remove(item2);
        assert.deepStrictEqual(basket.items, [item1]);
    });
});