# Adding an item to the basket
Nouns
-Member of the public
-Bagel
-Item
-Basket
Verbs
-Order a bagel
-Add an item
| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| additemtoBasket(item ) |  item(@item) | @item:sku@string ,price@string,name@string, variant@string| Add a valid item | returns true
|||| Add an invalid item | returns false