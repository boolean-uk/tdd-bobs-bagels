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
