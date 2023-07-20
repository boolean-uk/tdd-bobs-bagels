# Domain model

## Class Product

Fields:

- price
- sku
- name
- variant

Methods:

- checkPrice()

## Class Basket

Fields:

- capacity

- items[]

Methods:

- AddItem(item, count) throws exception (basket is full)
- removeItem(item) throws exception (item is not present in the basket)
- isBasketFull()
- Constructor(capacity)
- getTotalCost()
- generateReceipt()
