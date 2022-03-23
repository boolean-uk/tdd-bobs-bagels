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

  it('Cannot add when capacity is reached', () => {
    // setup
    const basket = new Basket();
    const expectedBasket = ['onion','plain','peanut']
    // execute
    basket.add ('onion')
    basket.add ('plain')
    const newBasket = basket.add ('peanut')
    expect(newBasket).toEqual(expectedBasket)

    const result = basket.add ('butter')
    const expected = 'Cannot add, basket is full'

    // verify
    expect(result).toEqual(expected)
  })

  it('Cannot remove an item that does not exist', () => {
    // setup
    const basket = new Basket();
    const expectedBasket = ['onion','plain']
    // execute
    basket.add ('onion')
    basket.add ('plain')
    basket.add ('peanut')

    const newBasket = basket.remove ('jam')
    const itemNonExistent = 'cannot remove a non existing item'
    expect(newBasket).toEqual(itemNonExistent)
    
    
    const result = basket.remove ('peanut')
    // const expected = 'Cannot add, basket is full'
    // verify
    expect(result).toEqual(expectedBasket)
  })

  it('Basket is Full', () => {
    // setup
    const basket = new Basket();
    const expectedBasket = ['onion','plain','peanut']
    // execute
    basket.add ('onion')
    basket.add ('plain')
    const newBasket = basket.add ('peanut')
    expect(newBasket).toEqual(expectedBasket)

    const expected = 'Cannot add, basket is full'
    const result = basket.isFull()
    // verify
    expect(result).toEqual(expected)
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

    it('Creates a larger basket that carries more items', () => {
    // setup
    const basket = new Basket();
    const expectedBasket = ['onion','plain','peanut','butter']
    // execute
    basket.createLargerBasket(4)
    const newBasket = basket.add('onion')
    basket.add('plain')
    basket.add ('peanut')
    basket.add ('butter')
    // verify
    expect(newBasket).toEqual(expectedBasket)


    })

});
