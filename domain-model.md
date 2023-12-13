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

<!--------------------------------------------->

## PART TWO:

# USer stories 1

As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

## Methods
isBasketFull()

## Inputs

<!-- As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket.  -->
