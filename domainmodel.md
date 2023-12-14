
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



## Store
  ### PROPERTIES
  #### name
    TYPE: string, e.g. "Bob's Bagels"
  #### open
    TYPE: BOOLEAN
  #### availableBasketTypes
    TYPE: Array
    EXAMPLE: [ { basketType }, { basketType } ]
  #### availableProducts
    TYPE: Array of Objects
    EXAMPLE: [ { sku: @integer, name: @string, price: @float } ]
  #### employees
    TYPE: Array of Employee instances
    EXAMPLE: [ { new Employee } ]
  #### customers 
    TYPE: Array of Customer instances
    EXAMPLE: [ { new Customer } ]
  ### METHODS
  #### open ()
  INPUT: none
  OUTPUT: sets this.open = true
  #### close ()
  INPUT: none
  OUTPUT: sets this.open = false
  #### addBasketType (basketTemplateObj)
  INPUT: resulting @obj of managers.addBasketType
  FUNCTION: pushes object to AvailableBasketType
  #### handoutBasket (customerId, type)
  INPUT: customerId as @number, Name of Basket type @String
  FUNCTION: sets customers.basket as Object of basketType
  SCENARIO: Basket Type exists / doesn't exist
  #### addEmployee ()
  INPUT: name, role
  Function: pushes a new Employee instances to .employees
  #### addCustomer ()
  INPUT: -
  Function: pushes a new Customer instance to .customers

METHOD: basket.removeItem
INPUT: basketItem
OUTPUT: function that removes {basketItem} from basket

# Part 2
class = Basket
user Story: the member of the public can know the basket is full 
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

=======
# CLASSES

## Basket
  ### Properties
  #### items
    TYPE: Array of Objects from available Products
    EXAMPLE: [ { sku: 1234, name: @string, quantity: @integer, price: @float }]
  #### capacity
    TYPE: Integer
  ### METHODS
  #### isFull
    INPUT: none
    OUTPUT: sum of all items.quantity < basket.capacity (@boolean)
  #### addItem
    INPUT: sku
    OUTPUT:
      SCENARIOS: gets item from Store, adds .quantity property, initializes it as = 1
      increases item.quantity in basket.items by one
  #### removeItem
    INPUT: sku
    OUTPUT:
      SCENARIOS: decreases item.quantity in basket.items by one
      deletes item from basket.items

## Employee (name, role)
  ### PROPERTIES
  #### name
    TYPE: @string
    EXAMPLE: "Tina" / "Bob"
  #### role
    TYPE: @string
    EXAMPLE: "manager" / "worker"
  ### METHODS
  #### createBasketType
    INPUTS: capacity, nameTemplate
    OUTPUT: { capacity: @Number, template: @String }
  #### updateRole
    INPUT: role @string
    FUNCTION: sets input as this.role

## Customer
  ### PROPERTIES
  #### basket
    @Object: {} OR null

