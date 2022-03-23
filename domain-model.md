Domain model

| object | properties                    | method                 | input              | Output                                                   |
| ------ | ----------------------------- | ---------------------- | ------------------ | -------------------------------------------------------- |
| item   | name (string), price (string) |                        |                    |                                                          |
|        |                               |                        |                    |                                                          |
| basket | Item list (array of objects)  | add()                  | item.name (string) | Item list with added Item (array of objects)             |
|        |                               | remove()               | item.name (string) | Item list with specified item removed (array of objects) |
|        |                               | basketIsOverflowing()  |                    | message saying basket is full (string)                   |
|        |                               | newMaxBasketCapacity() |                    | message returning the new max capacity( integer)         |
|        |                               | checkPrice()           | item.name (string) | price of item (string)                                   |
