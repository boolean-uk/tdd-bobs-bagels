# What Bob Wants
Bob needs you!
He wants you to implement a simple basket feature for him.

# Part 1
```
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket
```


Objects | Methods |/ Messages / Properties | Output
---- | ---- | ---- | ----
BagelList | @array |Bagel @string | Bagel @string 
Bagel (Class) | 
||add()|add bagel(item) from BagelList to BagelBasket| push to BagelBasket @array
||remove()| remove bagel(item) from BagelBasket | push to BagelBasket @array

# Part 2
```
As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.
```
```
As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.
```
```
As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket.
```

Objects |Messages / Properties  | Methods | Output
---- | ---- | ---- | ----
fullCapacity| @number | isFull() | @conditional flow with if true then its at full capacity else continue to order
createLargeBasket| @number | createLargeBasket() | capacity is increased so more could be ordered
itemDoesNotExit | cannot remove item | itemDoesNotExit() | @string returned and conditional statement added into remove function

