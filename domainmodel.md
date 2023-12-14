# CLASSES

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
  #### presentProductByNameVariant (name, variant)
  INPUT: name of product, variant
  OUTPUT: the matching @Obj from .availableproducts
  
## Basket
  ### Properties
  #### items
    TYPE: Array of Objects from available Products
    EXAMPLE: [ { sku: 1234, name: @string, quantity: @integer, price: @float }]
  #### capacity
    TYPE: Integer
  ### METHODS
  #### countItems
   INPUT: none
   OUTPUT: @integer of all quantities
  #### isFull
    INPUT: none
    OUTPUT: sum of all items.quantity < basket.capacity (@boolean)
  #### changeCapacity
    INPUT: new Capacity @integer
    OUTPUT: boolean – to indicate whether it was changed or not
  #### itemInBasket
    INPUT: @object of item
    OUTPUT: @boolean whether item is in basket or not
  #### addItem
    INPUT: sku
    OUTPUT:
      SCENARIOS: gets item from Store, adds .quantity property, initializes it as = 1
      increases item.quantity in basket.items by one
  #### checkTotal
    INPUT: nothing
    OUTPUT: product sum of all items in basket.items
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
  #### atStore
    @Store obj instance
  ## METHODS
  #### enterStore
    INPUT: Store Obj Instance
    FUNCTION: sets .atStore Property
  #### receiveBasket
    INPUT: capacity
    FUNCTION: sets Basket as basket Obj instance
  #### askForItem
  INPUT: name, item
  OUTPUT: item's price OR "item not available"

