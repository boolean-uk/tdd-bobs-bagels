# domaine models

|        | METHODS | INPUTS | DATA | SITUATION | OUTPUTS |
|--------|-|-|-|-|-|
| PART 1 | addToBasket(@item)| item(@Object), basket(@Object[])|properties: sku(@String), price(@String), name(@String), variant(@String), quantity(@Number)| if item is already in the basket, increase its quantity instead. if item is not already in basket, add it.| a list of all the items in the object, including the selected item  with its quantity increased. a list of all the items in the object, including newly added item |
|        ||||  ||

