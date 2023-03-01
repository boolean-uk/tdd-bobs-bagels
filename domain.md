Domain Model

object bagel: 
PROPERTIES:
    - sku: string
    - price: number
    - name: string
    - varient: string
    - fillings: array of string values


class Basket -> 
PROPERTIES:
    - basket: an array of bagel js Objects
    

METHODS

addToBasket(sku) -> 
    input: add bagel to basket 

removeFromBasket(sku) ->
    input: removes item from basket

