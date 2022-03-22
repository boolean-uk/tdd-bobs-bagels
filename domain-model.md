## Requirement Part 1

As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

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
