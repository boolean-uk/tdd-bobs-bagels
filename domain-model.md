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
Noun: basket, item, basket capacity, larger capacity
Verb: cannot overfill, is full, add, create baskets, remove

## Domain Model 
| Objects | Properties           |
| ------- | -------------------- |
| capacity|  capacity @Number    |


| Methods                               | Output                                                                                         |
| ------------------------------------- | ---------------------------------------------------------------------------------------------- |
| isFull()                              |  @Boolean (true: @String 'your basket if full', false: @String 'continue to order')            |
| createBigBasket()                     |  ---                                                                                           |
| removeFromBasket(@name) (from part 1) | @Boolean (true: basket @Array[@name] false: @String 'You haven't order this bagel              |

- check if the length of basket @Array[@name] is more than capacity @Number with isFull()
  => if true return @String 'your basket if full', if false return 'continue to order' and tell how many bagels you're able to buy
- With createBigBasket(), capacity @Number will change to a bigger number
- Utilizing removeFromBasket(@name) from part 1, if the bagel @name includes in basket @Array[@name], return basket @Array[@name] without the removed bagel @String; if not, return @String 'You haven't order this bagel


---

## Requirement Part 3
As a member of the public,
So that I can know how much my bagels are,
I’d like to see the price of each item before I add it to my basket.

As a member of the public
So that I can buy many of my favorite bagel,
I'd like to be able to add the same type of bagel to my basket more than once.

As a member of the public,
So that I can prepare to pay,
When I go to checkout I'd like to know the total sum of the bagels in my basket.

## Noun & Verb
Noun: price of each item, total sum
Verb: see, before adding to basket

## Domain Model
| Objects   | Properties                 |
| --------- | -------------------------- |
| priceList |  priceList {@name, @price} |

| Methods            | Output                  |
| ------------------ | ----------------------- |
| checkPrice(@name)  | @Object {@name, @price} |
| checkOut()         | @Number                 |

- when using checkPrice(@name), it will return @Object {@name, @price} according to the priceList
- With checkOut(), it will add all the price of each bagel and returns the sum @Number