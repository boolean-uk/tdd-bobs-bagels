<!-- ######################## PART ONE ############################## -->

## PART ONE:

# USer stories 1

As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

## Methods

AddItem(@item{})

## Inputs

Item(@Obj{}) => properties: sku: @string, quantity: @number

## Scenario

if basket is empty

## Output

Basket({
sku: "BGLO",
quantity: 1})

<!--------------------------------------------->

## User story 2

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

## Methods

Remove(@item{})

## Inputs

Item(@Obj{}) => properties: sku: @string, quantity:@number (0)

## Scenario

if basket is not empty

## Output

Basket({})

<!-- ######################## PART TWO ############################## -->

## PART TWO:

# USer stories 1

As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

## Methods

isBasketFull()

## Inputs

count of items => count(@number)

## Scenario

if count is equal to basket capacity

## Output

to be true

<!--------------------------------------------->

## User Story 2

As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

## Methods

changeCapacity()

## Inputs

count of items => count(@number)
and newCapacity => @number

## Scenario

current capacity = new capacity

## Output

capacity increased

<!--------------------------------------------->

## User Story 3

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket.

## Methods

removeItem()

## Inputs

---

## Scenario

if index of item equals to -1

## Output

result to be false

<!-- ######################## PART THREE ############################## -->

## Part Three:

## User Story 1

As a member of the public,
So that I can know how much my bagels are,
I’d like to see the price of each item before I add it to my basket.

## Method

getItemPrice()

## Input

item.price(@number)

## Scenario

if item found in inventory

## Output

get the item price
