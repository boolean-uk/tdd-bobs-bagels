Object | Properties | Methods
--- | --- | ---
Basket | items [@Item] | getItems() => [@Item] <br> add() => @Boolean <br> remove() => @Boolean <br> size() => @Number <br> totalPrice() @Number
Item | sku @String <br> name @String <br> price @Number | ---
BasketItem *extends* @Item | quantity @Number | totalPrice() => @Number