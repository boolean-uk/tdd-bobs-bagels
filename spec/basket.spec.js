const Basket = require('../src/basket.js');

describe('Basket', () => {
  it('Can add one items to basket', () => {
    //  setup
    const expectedBasket = ['plain']
    const basket = new Basket();

    const newBasket = basket.add('plain')
    // verify
    expect(newBasket).toEqual(expectedBasket)
  });

  it('Can add two items to basket', () => {
    //  setup
    const expectedBasket = ['onion','plain']
    const basket = new Basket();
    // execute
    basket.add('onion')

    const newBasket = basket.add('plain')
    // verify
    expect(newBasket).toEqual(expectedBasket)
  });


  it('Can remove item from basket', () => {
    //  setup
    const expectedBasket = ['onion']
    const basket = new Basket();
    // execute
    basket.add('onion')
    basket.add('peanut')

    const newBasket = basket.remove('peanut')
    // verify
    expect(newBasket).toEqual(expectedBasket)
  });

  it('Basket is Full', () => {
    // setup
    const basket = new Basket();
    const expectedBasket = ['onion','plain','peanut','butter']
    // execute
    const newBasket = basket.add ('onion')
    basket.add ('plain')
    basket.add ('peanut')
    basket.add ('butter')

    const expected = 'Basket is Full'
    const result = basket.isFull()
    // verify
    expect(result).toEqual(expected)
    expect(newBasket).toEqual(expectedBasket)
  })

    it('Basket is not full, you can continue to order', () => {
    // setup
    const basket = new Basket();
    const expectedBasket = ['onion','plain']
    // execute
    const newBasket = basket.add('onion')
    basket.add('plain')
    
    const expected = 'Basket is not full, you can continue to order'
    const result = basket.isFull()
    // verify
    expect(result).toEqual(expected)
    expect(newBasket).toEqual(expectedBasket)
    })

});
