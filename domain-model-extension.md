## Extension Part 1

In a normal supermarket, things are identified using Stock Keeping Units, or SKUs.

In Bob's Bagels, we'll use the first 3 letters of the product with an extra letter for the variant. For example: an 'everything bagel' has a SKU of `BGLE`.

Our goods are priced individually. In addition, some items are multi-priced: buy n of them, and they'll cost you y pounds.

## Bob's Bagels Inventory
|  SKU   |  Name  |  Variant   | Price | Special offers
|--------|--------|------------|-------|----
|  BGLO  | Bagel  | Onion      |  .49  | 6 for 2.49
|  BGLP  | Bagel  | Plain      |  .39  | 12 for 3.99
|  BGLE  | Bagel  | Everything |  .49  | 6 for 2.49
|  COF   | Coffee |            |  .99  | Coffee & Plain Bagel for 1.25


## Noun & Verb
Noun: SKUs (first 3 letters of the product with an extra letter for the variant), name, variant, price, multi-price(special offers)
Verb: buy

## Domain Model
| Objects    | Properties                         |
| ---------- | ---------------------------------- |
| items      | item @String                       |
| itemList   | item {name @String, price @Number} |
| basket     | basket @Array[@item]               |

| Methods                 | Output               |
| ----------------------- | -------------------- |
| add(@item)              | basket @Array[@item] |
| receipt()              | receipt @Object {items {quantity @Number, item @String, subPrice @Number}, totalPrice @Number}|

- When receipt(), include the special offers by using conditional