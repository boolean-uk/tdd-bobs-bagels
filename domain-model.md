# Domain Model

## Part 1 Model

js object Bagel
PROPERTIES

- sku: string
- price: number
- name: string
- variant: string

class Basket
PROPERTIES

- basket: Array[Bagel js objects]

METHODS
addToBasket(bagelItem: Bagel js object) -> Adds an item to the basket
INPUT: Bagel JS Object
OUTPUT: True/false

removeFromBasket(sku: string) -> Removes an item from the basket
INPUT: sku string for a bagel object
OUTPUT: True/false
