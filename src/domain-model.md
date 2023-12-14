# Domain Model

## Basket
- Properties:
  - `items`: An array to store items added to the basket.
  - `inventory`: An array of available items with their details.

- Methods:
  - `addItem(sku: string)`: Adds an item to the basket based on the SKU.
  - `removeItem(sku: string)`: Removes an item from the basket based on the SKU.

## Item
- Properties:
  - `sku`: Stock Keeping Unit, a unique identifier for the item.
  - `price`: The price of the item.
  - `name`: The name of the item (e.g., "Bagel").
  - `variant`: The variant of the item (e.g., "Onion"). Defaults to an empty string.
  - `quantity`: The quantity of the item in the basket. Defaults to 1.
  - `fillings`: An array of fillings for the item (e.g., for a Bagel Sandwich).

- Constructor:
  - `Item(itemData: object)`: Initializes an item with the provided data.

## Inventory Data
- Properties:
  - `inventory`: An array of objects representing available items.
    - Each object includes properties like `sku`, `price`, `name`, `variant`, and optional `fillings`.

# Interactions
- The `Basket` interacts with the `Item` class when adding items, creating instances of `Item`.
- The `Basket` also interacts with the `inventory` data when looking up item details.
- Items in the `Basket` can be added, and their quantities can be updated.
- Items can be removed from the `Basket`, updating their quantities or entirely removing them.

# usage
```javascript
const myBasket = new Basket();
myBasket.addItem('BGLO');
myBasket.addItem('BGLO');
myBasket.removeItem('BGLO');
