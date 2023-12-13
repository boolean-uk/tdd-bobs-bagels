# domaine models

|        | METHODS | INPUTS | DATA | SITUATION | OUTPUTS |
|--------|-|-|-|-|-|
| PART 1 | addToBasket(@item)| item(@Object), basket(@Object[])|properties: sku(@String), price(@String), name(@String), variant(@String), quantity(@Number)| If item is not already in basket...  If item is not already in basket...| ...show the message 'already in the basket' ...add it, and show a list of all the items in the basket. |
||removeFromBasket(@item)|item(@Object), basket(@Object[])|properties: sku(@String), price(@String), name(@String), variant(@String), quantity(@Number)|If the item is found in the basket... If the basket is empty...|...show a list of all the items in the basket, but without the one which was deleted. ...show 'the basket is empty - nothing to remove!'|
|PART 2| isBasketFull(@basket)|basket(@Object[]) | item(@Object): properties: sku(@String), price(@String), name(@String), variant(@String), quantity(@Number)| If basket is full ... If basket is not full...| ...show 'your basket is full!' ...show 'capacity remaining: (@Number) slots'|
|| setCapacity(@basket) | basket(@Object), newcapacity(@Number)|properties: sku(@String), price(@String), name(@String), variant(@String), quantity(@Number), capacity(@Number)| If the new capacity is a valid number...  If the new capacity is not a valid number...| ...set the capacity property to the new number ...show 'invalid number'|
|||||||



As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket.
