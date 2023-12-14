# Domain model

## Part 1.1
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| addItemToBasket(bagel) | bagel(@string) inventory(@object[]) | bagelType(sku) inventory ( @object(sku: 'string', price: number, name: 'sting' , variant: 'string')) | user adds a bagel to the basket | adds bagelItem(@object) to the basket and update the basket(@object[])
|||| bagel doesn't exist | gives an error@string

## part 1.2
As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

| Methods | Inputs | Data | Scenario | Outputs
| ------ | ------ | ------ | ----- | -----
| removeItemFromBasket(bagel) | bagel(@string) inventory(@object[]) | bagelType(sku) inventory ( @object(sku: 'string', price: number, name: 'sting' , variant: 'string')) | user removes a bagel from the basket | removes the bagelItem(@object) from the basket and updates the basket(@object[])
|||| bagel doesn't exist | gives an error@string