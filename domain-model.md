 ## User Story  for Part 1 (A):
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

## NOUNS and VERBS

- NOUNS
    - Member of the public
    - Bagel
    - Item
    - Basket
- VERBS
    - Order (in bagel)
    - Add ( an item)


## Domain Model

| Methods | Input | Data | Scenerios | Outputs |
| ------- | ----- | ---- | --------- | ------- |
| addItemToBasket(item)| item(@Item)|@item : sku(@string), price(@string), name(@string), variant(@string)| Add a valid item|true|
|||| Not a valid item| false |



## User Story for Part 1 (B) :

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

## NOUNS and VERBS
- NOUNS
  - Member of the public
  - my order
  - Basket
  - Item
  
- VERBS
  - Change
  - Remove

## Domain Model
| Methods | Input | Data | Scenerios | Outputs |
| ------- | ----- | ---- | --------- | ------- |
| removeOrder(item)| item (@item), @[]| @item : sku(@string), price(@string), name(@string), variant(@string)| Remove a valid item | true
|||| Remove an invalid item | false







## User Story for Part 2 (A) :
As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

## NOUNS and VERBS
- NOUNS
  - Member of the public
  - Bagel
  - Basket

- VERBS
  - Overfill
  - Adding
  - know

| Methods | Input | Data | Scenerios | Outputs |
| ------- | ----- | ---- | --------- | ------- |
| checkBasketCapacity|item (@item), @[]| @item : sku(@string), price(@string), name(@string), variant(@string)| when basket is not  overfilled | More items can still be added |
|||| when basket is overfilled | Basket is full and cannot take more items| 

## User Story for Part 2 (B) :

As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

## NOUNS and VERBS
- Nouns
  - Manager
  - sales
  - baskets
- Verbs
  - Record
  - Create
  
| Methods | Input | Data | Scenerios | Outputs |
| ------- | ----- | ---- | --------- | ------- |
| createLargerCapacity| item (@item), @[]|  @item : sku(@string), price(@string), name(@string), variant(@string)| when basket has reached the maximum level, increase it to have more space| Basket has been increased |


