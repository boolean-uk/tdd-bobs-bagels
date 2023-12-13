# Domain Models

## Part 1

```
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket
```

```
As a member of the public,
So that I can change my order
I'd like to remove an item from my basket
```

### Keywords

1. **Verbs:** order, add
2. **Nouns:** member, public, bagel, item, basket

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | ------
|addItem|(sku)|sku(@string)|if sku is valid| add item to basket as a string
||||sku not valid|return "item not found"
||||no sku added| return "sku required"
|||||
|removeItem|(sku)|sku(@string)|if sku is valid and in basket| remove item from basket
||||no sku added| return "sku required"


## Part 2

```
As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.
```

```
As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.
```

```
As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket.
```

### Keywords

1. **Verbs:** overfill, know, adding, create, record
2. **Nouns:** public, bagel, basket, manager, sales, capacity

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
|checkIfFull|()|@Number|If basket equals to basket full max items| return "basket is full"
|||||
|changeBasketSize|(Size)|Size(@Number)|if basket size exists| change the basket size allowance
||||if basket size does not exist| return "error, set basket size"
|||||
|checkBasketItem|(sku)|sku(@string)|if sku does exist in basket| return "false" and "item does not exist in baskey"
||||if sku does exist in basket| return sku.


## New Model

```

```

### Keywords

1. **Verbs:** 
2. **Nouns:** 

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----



## New Model

```

```

### Keywords

1. **Verbs:** 
2. **Nouns:** 

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----



## New Model

```

```

### Keywords

1. **Verbs:** 
2. **Nouns:** 

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----



## New Model

```

```

### Keywords

1. **Verbs:** 
2. **Nouns:** 

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----



## New Model

```

```

### Keywords

1. **Verbs:** 
2. **Nouns:** 

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----



## New Model

```

```

### Keywords

1. **Verbs:** 
2. **Nouns:** 

### Table

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----



