# domaine models

|        | METHODS | INPUTS | DATA | SITUATION | OUTPUTS |
|--------|-|-|-|-|-|
| PART 1 | addToBasket(@item)| item(@Object), basket(@Object[])|properties: sku(@String), price(@String), name(@String), variant(@String), quantity(@Number)| If item is already in the basket, increase its quantity instead. If item is not already in basket, add it.| A list of all the items in the basket, including the selected item  with its quantity increased. A list of all the items in the basket, including newly added item |
|        |removeFromBasket(@item)|item(@Object), basket(@Object[])|properties: sku(@String), price(@String), name(@String), variant(@String), quantity(@Number)|If item is already in the basket, decrease its quantity. If quantity is 1, remove it from the basket.|A list of all the items in the basket, including the selected item  with its quantity decreased. A list of all the items in the basket, but without the one which was deleted.|
