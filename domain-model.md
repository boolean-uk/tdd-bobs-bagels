 ## User Story :
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

## NOUNS and VERBS

- NOUNS
    - Member of tyhe public
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