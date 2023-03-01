# Domain Model

## Part 1 Model

class Bagel
PROPERTIES

- sku
- price
- name
- variant
  METHODS
  constructor(sku, price, name variant) -> Sets the properties

class Basket
PROPERTIES

- basket: Array[{}]
  METHODS
  addToBasket(bagelItem) -> Adds an item to the basket
  INPUT: Item Object.
  PROPERTIES:
- sku
- price
- name
- variant
  OUTPUT: Adds to the basket array (Or increments if already exists)

removeFromBasket(sku) -> Removes an item by SKU from the basket
INPUT: Item SKU
PROPERTIES:

- sku
  OUTPUT: Removes from the basket array (Or decrements if already exists)
