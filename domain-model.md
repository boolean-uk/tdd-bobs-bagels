## PART ONE:

# USer stories 1

As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

## Methods

AddItem(@item{})

## Inputs

Item(@Obj{}) => properties: sku: @string, price: @number, name: @string, variant: @string

## Scenario

if basket is empty

## Output

Basket({
sku: "BGLO",
price: 0.49,
name: "Bagel",
variant: "Onion"
},)

## User story 2

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

## Methods

Remove(@item{})
