# user stories and domain models

## CORE

### core - domain models

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

## EXTENSIONS

### extension 1 - user stories

As a customer,
So that I can decide which bagel to buy,
I need to be able to see all special offers before putting any items in my cart.

As a customer,
So that I can decide how many bagels to buy,
I need to be able to see if there is a special offer on the bagel I have added to my cart.

As a customer,
So that I am charged the correct amount,
I need the total price of my basket to take the special offers into account.

<!--turns out this one is part of extension 3-->
<!-- As a mangager,
So that our customers are satisfied with our special offers,
I need them to see how much they have saved by ordering the necessary amounts. -->

<!--turns out this one would fit extension 3 better-->
<!-- As a mangager,
So that our customers are encouraged to enjoy our special offers,
I need them to see how much they could save by ordering the necessary amounts before they pay. -->

As a manager,
So that I can adapt our special offers to the current market,
I need to be able to modify the special offers.

As a manager,
So that I can adapt our special offers to the current market,
I need to be able to remove a special offer.

As a manager,
So that I can adapt our special offers to the current market,
I need to be able to add the special offers.

### extension 1 - domain models

|        | METHODS | INPUTS | DATA | SITUATION | OUTPUTS |
|--------|-|-|-|-|-|
| 1 | getSpecialOffers(@Inventory)| inventory(@InventoryItem[]), items(@Objects)|inventoryItem: properties:sku(@String), price(@String), name(@String), variant(@String), SpecialOffer(@Object). specialOffer: properties: active(@Boolean), itemSku(@String) requiredQuantity(@Integer), discountedPrice(@String)|If there are special offers... If there aren't any special offers| ...a list of special offers ...'no offers founds'|
| 2 | checkForSpecialOffer(@BasketItem) ||properties:sku(@String), price(@String), name(@String), variant(@String), SpecialOffer(@Object). specialOffer: properties: active(@Boolean), itemSku(@String), requiredQuantity(@Integer), discountedPrice(@String) | If there is a special offer active for this item... if there is no special offer, or if the offer is not currently active... | ...true ...false|
| 3 | totalIncludingSpecialOffers(@Basket) | specialOffers(@Object[]), basket(@BasketItems[]), basketItem(@Object) | SpecialOffer: properties: active(@Boolean), itemSku(@String), requiredQuantity(@Integer), discountedPrice(@String). basket: properties: list(@BasketItems[]), capacity(@Integer). basketItem: properties: item: properties:sku(@String), price(@String), name(@String), variant(@String), quantity(@Integer) | If the basket does not match any special offer's requirements... If one or more offers apply... | ...'no special offers apply' ...the total sum, taking the offer(s) into account
| 4 | setSpecialOffer(@InventoryItem) | inventoryItem(@Object), newRequirements(@Object) |inventoryItem: properties:sku(@String), price(@String), name(@String), variant(@String), specialOffer(@Object). specialOffer: properties: active(@Boolean), itemSku(@String), requiredQuantity(@Integer), discountedPrice(@String) . newRequirements: requiredQuantity(@Integer), status(@Boolean), discountedPrice(@String)| If the new requirements are valid... If the new requirements are not valid... | ...the updated specialOffer(@Object) ...'invalid requirements'|
| 5 | addSpecialOffer(@InventoryItem) | inventoryItem(@Object), specialOffer(@Object) |inventoryItem: properties:sku(@String), price(@String), name(@String), variant(@String), specialOffer(@Object). specialOffer: properties: active(@Boolean), itemSku(@String), requiredQuantity(@Integer), discountedPrice(@String) | If the item does not already have a special offer... If the item already has a special offer... | ...the updated inventoryItem(@Object) ...'this item is already subject to a special offer'|
| 6 |  removeSpecialOffer(@InventoryItem) | inventoryItem(@Object) |inventoryItem: properties:sku(@String), price(@String), name(@String), variant(@String), specialOffer(@Object). specialOffer: properties: active(@Boolean), itemSku(@String), requiredQuantity(@Integer), discountedPrice(@String) | If the item has a special offer... If the item does not have a special offer | ...the updated item ...'no special offer found on this item'|

### extension 2 - user stories

### extension 2 - domain models

|        | METHODS | INPUTS | DATA | SITUATION | OUTPUTS |
|--------|-|-|-|-|-|

### extension 3 - user stories

### extension 3 - domain models

|        | METHODS | INPUTS | DATA | SITUATION | OUTPUTS |
|--------|-|-|-|-|-|

### extension 4 - user stories

### extension 4 - domain models

|        | METHODS | INPUTS | DATA | SITUATION | OUTPUTS |
|--------|-|-|-|-|-|
