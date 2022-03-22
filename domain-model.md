## Requirement Part 1
As a member of the public,
So I can order a bagel when I want to,
I'd like to add an item to my basket,

As a member of the public,
So that I can change my order,
I'd like to remove an item from my basket,

## Noun & Verb
Noun: bagel(item), basket, order
Verb: order, add, change, remove

## Domain Model
| Objects | Properties           |
| ------- | -------------------- |
| bagel   | name @String         |
| order   | basket @Array[@name] |

| Methods                 | Output               |
| ----------------------- | -------------------- |
| addToBasket(@name)      | basket @Array[@name] |
| removeFromBasket(@name) | basket @Array[@name] |

- add bagel @String with addToBasket(@name) => return the basket @Array[@name] with the added bagel @String
- remove bagel @String with removeFromBasket(@name) => return the basket @Array[@name] without the removed bagel @String


--- 

## Requirement Part 2
As a member of the public,
So that I can not overfill my small bagel basket,
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

As a Bob's Bagels manager,
So that I can record more sales,
I’d like to create baskets with larger capacity when I need to.

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket.

## Noun & Verb
Noun: basket, item, basket capacity
Verb: cannot overfill, is full, add

## Domain Model 
| Objects | Properties           |
| ------- | -------------------- |
| capacity|  capacity @Number    |


| Methods                 | Output                                                                              |
| ----------------------- | ----------------------------------------------------------------------------------- |
| isFull()                |  @Boolean (true: @String 'your basket if full', false: @String 'continue to order') |

- check if the length of basket @Array[@name] is more than capacity @Number with isFull()
  => if true return @String 'your basket if full', if false return 'continue to order'
