# Bob's Bagels Domain Models

## Part 1

```txt
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

N: public, bagel, item, basket
V: Order, Add

=========================================

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

N: public, item, basket, order
V: Change, Remove
```

## Part 2

```txt
As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

N: Public, small bagel basket, item, basket capacity
V: overfill, try adding

=====================

As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

N: Manager, baskets
V: record, create,

========================

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket. 

N: public, sanity, item, basket
V: maintain, know, remove
```

## Part 3

```txt
As a member of the public,
So that I can know how much my bagels are,
I’d like to see the price of each item before I add it to my basket.

N: public, bagels, price, item, basket
V: know, see, add

=======================

As a member of the public
So that I can buy many of my favorite bagel
I'd like to be able to add the same type of bagel to my basket more than once

N: public, favorite bagel, bagel, basket
V: buy many, add multiple,

======================

As a member of the public,
So that I can prepare to pay
When I go to checkout I'd like to know the total sum of the bagels in my basket

N: public, checkout, sum of bagels,
V: pay, know
```

| Methods       | Inputs | Data | Scenario | Outputs |
| ------------- | ------ | ---- | -------- | ------- |
| addToBasket(sku) | sku(@string)| | valid sku     | add item to basket, message "item added" |
|||| invalid sku | return message "item not found"
|||| no sku input | return message "item sku required"
|||||
| removeFromBasket(sku) | sku(@string)| | valid sku, sku in basket | remove item to basket, message "item removed" |
|||| valid sku, sku not in basket | return message "item not in cart"
|||| invalid sku | return message "valid sku required"
|||| no sku input | return message "item sku required"
|||||

