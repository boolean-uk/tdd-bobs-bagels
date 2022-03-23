# Domain Model

| Objects | Properties                  | Methods                  | Output          |
| Basket  | basketList @arrayOfBagels   | addToBasket (Bagel)      | basket @array   |
|         | basketCapacities @integer   | removeFromBasket (Bagel) | basket @array   |
|         |                             | fullBasket (@boolean)    | basket @boolean |
|         |                             | createBaskets            | @object         |
| Bagel   | name (@string)