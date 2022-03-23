<!-- # header 1
1. **word**
2. _word_
###### header 6
--- -->
<!-- - paragraph 1
- paragraph 2 -->

---

> Bob's Bagels

| Psuedo                         | Objects | Properties        | Messages / Methods | Output                           |
| ------------------------------ | ------- | ----------------- | ------------------ | -------------------------------- |
| bagelMenu                      | @array  | {id, price, name} |                    | {id:0, price: 2.39, name: 'Yip'} |
| Create new bagel, update menu  | @array  | {id, price, name} | createNewBagel()   | {id:0, price: 2.39, name: 'New'} |
| Add item to basket             | @array  | name              | addToBasket()      | [{}, {},{}]                      |
| Remove item from basket        | @array  | name              | RemoveBasket()     | [{}, {}]                         |
| Is my basket full ?            | @array  | #basketCapacity   | isMyBasketFull()   | @string                          |
| When i try to add, is it full  | @array  | #basketCapacity   | addToBasket()      | @string                          |
| Create bigger capacity baskets | @array  | #basketCapacity   | get() set()        | @integer                         |
| Remove non-existent bagel      | @array  | {undefined}       | RemoveBasket()     | [{}, {}]                         |
| Price of each item             | @array  | {name, price}     | pricePerItem()     | @string                          |
| Add same type                  | @array  | {name}            | addToBasket()      | [{} {}]                          |
| Total for basket               | @array  | {price: price}    | totalForBasket()   | @string                          |
