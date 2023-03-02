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

# Part 2

# 2.1 
As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

verb: limit-num-bagels

CLASS Basket
- basket: []
- capacity: number

PROPERTIES:
addToBasket 

   METHOD:
    currentBasketCount(void)
        INPUT: 
            - this.basket
        OUTPUT:
          - this.basket.length > @capacity ?
             addToBasket(sku: string) :
             warning: string 

# 2.2 
As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

verb: create-bigger-basket

CLASS Basket {
    basket = []
    capacity = number
}

METHOD:
UPDATE: constructor to take the size/capacity: default= 10
changeBasketSize(size: number)
 -INPUT: @size for this.basket
 -OPUTPUT: this.basket.size = number


# 2.3
As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket. 
        ### code implemented for this in pt 1. just need to write test for it

METHOD: 
removeBagel(sku: string)
        -INPUT = sku to remove
        -OPUTPUT= bagel-in-basket ?
        this.basket - removed bagel :
        error msg: string
