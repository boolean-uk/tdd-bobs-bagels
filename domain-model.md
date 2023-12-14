# domain models

|        | METHODS | INPUTS | DATA | SITUATION | OUTPUTS |
|--------|-|-|-|-|-|
|PART ONE|
|  1 | addToBasket(@item)| BasketItem(@Object), basket(@Object[])|properties: sku(@String), price(@String), name(@String), variant(@String), quantity(@Number)| If item is not already in basket...  If item is not already in basket...| ...show the message 'already in the basket' ...add it, and show a list of all the items in the basket. |
| 2 |removeItem(@item)|BasketItem(@Object), basket(@Object[])|properties: sku(@String), price(@String), name(@String), variant(@String), quantity(@Number)|If the item is found in the basket... If the basket is empty...|...show a list of all the items in the basket, but without the one which was deleted. ...show 'the basket is empty nothing to remove!'|
|PART TWO|
| 3| isBasketFull(@basket)|basket(@Object[]) | BasketItem(@Object): properties: sku(@String), price(@String), name(@String), variant(@String), quantity(@Number)| If basket is full ... If basket is not full...| ...show 'your basket is full!' ...show 'capacity remaining: (@Number) slots'|
| 4| setCapacity(@basket) | basket(@Object), newcapacity(@Number)|properties: capacity(@Number)| If the new capacity is a valid number...  If the new capacity is not a valid number...| ...set the capacity property to the new number ...show 'invalid number'|
| 5 |checkForItemToRemove(@item, @basket)|BasketItem(@Object), basket(@Object[])|item: properties: sku(@String), price(@String), name(@String), variant(@String), quantity(@Number), basket: properties: capacity(@Number)|If the item is not found in the basket... If the item is found in the basket| ...show 'item not found!' ...show 'item found' and call removeItem()
|PART THREE|
| 6| displayItemPrice(@item)| BasketItem(@Object) | properties: sku(@String), price(@String), name(@String), variant(@String), quantity(@Number)| If item has a price property... If the item does not have a price property...|...show the price ...show 'price unknown - message the seller'|
| 7| increaseQuantity()|BasketItem(@Object)|properties: sku(@String), price(@String), name(@String), variant(@String), quantity(@Number)|If the item is already in the basket... if the item is not already in the basket...|...increase its quantity by one ... show 'this item was not found in your basket, would you like to add it?'|
| 8| total(@Basket)|basket(@BasketItem[]), basketItem(@Object)|properties: sku(@String), price(@String), name(@String), variant(@String), quantity(@Number)|If the basket is empty... If the basket is not empty| ...show 'your basket is empty!' ...show the total price of all the items found in the basket|