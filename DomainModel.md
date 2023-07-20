
| Class     | Fields         | Methods                  | Scenario                                                               | Output                 |
|-----------|----------------|--------------------------|------------------------------------------------------------------------|------------------------|
| Basket    | Array[] bagels | add(bagel)               | If customer wants to add a specific type of bagel to his basket        |                        |
|           | let capacity   | remove(bagel)            | If customer wants to remove a bagel from his basket.                   |                        |
|           |                | isFull()                 | Called when customer adds a bagel to his basket.                       |                        |
|           |                |                          | If number of bagels equals basket capacity                             | true                   |
|           |                |                          | If number of bagels is less than basket capacity                       | false                  |
|           |                | setCapacity(newCapacity) | If manager would like to change the capacity of baskets.               |                        |
|           |                |                          | If new capacity is less than number of bagels in basket                | Output error message   |
|           |                |                          | If new capacity is greater than or equal to number of bagels in basket | Output nothing         |
|           |                | doesBagelExist(bagel)    | Called when customer tries to remove a bagel from his basket           |                        |
|           |                |                          | If bagel exists in the basket                                          | true                   |
|           |                |                          | If bagel does not exist in the basket                                  | false                  |
|           |                | totalCost()              |                                                                        | total cost of products |
| Bagel     | let price      | getPrice()               |                                                                        | price of the bagel     |
|           |                |                          |                                                                        |                        |
