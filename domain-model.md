# Bob's Bagels Domain Models

## Part 1

### Story

```txt
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket
```

### Words

#### Verbs

- Order
- Add

#### Nouns

- public
- bagel
- item
- basket

| Methods       | Inputs | Data | Scenario | Outputs |
| ------------- | ------ | ---- | -------- | ------- |
| addToBasket(sku) | sku(@string)| | valid sku     | add item to basket, message "item added" |
|||| invalid sku | return message "item not found"
|||| no sku input | return message "item sku required"
|||||

### Story

```txt
As a member of the public,
So that I can change my order
I'd like to remove an item from my basket
```

### Words

#### Verbs

- Order
- Change
- Remove

#### Nouns

- public
- item
- basket

| Methods       | Inputs | Data | Scenario | Outputs |
| ------------- | ------ | ---- | -------- | ------- |
| removeFromBasket(sku) | sku(@string)| | valid sku, sku in basket | remove item to basket, message "item removed" |
|||| valid sku, sku not in basket | return message "item not in cart"
|||| invalid sku | return message "valid sku required"
|||| no sku input | return message "item sku required"
|||||

## Part 2

### Story

```txt
As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket. 
```
