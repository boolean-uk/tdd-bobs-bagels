# domaine models

|        | METHODS | INPUTS | DATA | SITUATION | OUTPUTS |
|--------|-|-|-|-|-|
| PART 1 | addToBasket(@item)| item(@Object), basket(@Object[])|properties: sku(@String), price(@String), name(@String), variant(@String), quantity(@Number)| If item is not already in basket...  If item is not already in basket...| ...show the message 'already in the basket' ...add it, and show a list of all the items in the basket. |
|        |removeFromBasket(@item)|item(@Object), basket(@Object[])|properties: sku(@String), price(@String), name(@String), variant(@String), quantity(@Number)|If the item is found in the basket... If the basket is empty...|...show a list of all the items in the basket, but without the one which was deleted. ...show 'the basket is empty - nothing to remove!'|
