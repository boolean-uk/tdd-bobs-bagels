Domain model

| object | properties                   | method         | input         | Output                                                   |
| ------ | ---------------------------- | -------------- | ------------- | -------------------------------------------------------- |
| item   | name (string)                |                |               |                                                          |
| basket | Item list (array of objects) | add()          | item (object) | Item list with added Item (array of objects)             |
|        |                              | remove()       | item (object) | Item list with specified item removed (array of objects) |
|        |                              | basketIsFull() |               | message saying basket is full (string)                   |
