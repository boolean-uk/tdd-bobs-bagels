# Part 1
METHOD: class createBasket
INPUT: maximumCapacity
OUTPUT: {
        maximumCapacity: input,
        items: [] (empty array),
        addItem () – method
        removeItem () – method
        expandCapactiy () - method
        }

METHOD: basket.addItem
INPUT: storeItem
OUTPUT: function that pushes {storeItem} to basket
SCENARIOS: item is already in basket true; -> raise count
          item is already in basket false -> add with count = 1

METHOD: basket.removeItem
INPUT: basketItem
OUTPUT: function that removes {basketItem} from basket

# Part 2
Basket: 
METHOD: class IsFull
attribute: maximumCapacity, items
OUTPUT: items.length === maximumCapacity 
Properties:Capacity,items
Responsibities: Can track its capacity,hold items, check if it full, 
adjust capacity, and notify when attempting to add an item beyond it capacity

Bagel: 
Responsibities: Represents an item that can be added to the basket

Bobs Bagels Manager:
Responsibities: Can create baskets with specified capacities

public:
1. Add an item to the basket
2. Remove an item from the basket
3. get the notifications about when the basket full status
4. Recieve notificatin when attempting to remove a non existent item

Basket interactions
METHOD: expand capacity 
INPUT:user, capacitySize
OUTPUT: user
Capacity: Number because we dont want user to put it in the method 
. Add an item to the basket
. Remove an item from the basket
. check if the basket is full
. Adjust the basket capacity

Bobs bagel Manager Interactions:
Create baskets with specified templates

