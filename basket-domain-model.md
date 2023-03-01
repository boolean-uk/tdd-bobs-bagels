# Part 1
## 1.1 
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

## 1.2 
As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

actions: add, remove

const: bagels: [fromJSON]

CLASS Basket
- basket: []

   METHOD:
    addToBasket(sku: string)
        - input = sku to add
        -output = basket [{bagel}]
    removeBagel(sku: string)
        - input = sku to remove
        -output= basket[] - {bagel}

Final OUTPUT: Basket: []