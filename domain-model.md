Object | Properties | Methods
--- | --- | ---
Basket | items [@BasketItem] | getItems() => [@Item] <br> add() => @Boolean <br> remove() => @Boolean <br> size() => @Number <br> basketPrice() @Number<br> itemCount() => @Number 
Item | sku @String <br> name @String <br> price @Number | ---
BasketItem *extends* @Item | quantity @Number | totalPrice() => @Number
Inventory | items [@InventoryItem] | getItemBySKU() => @InventoryItem
SpecialOfferOptions | requiredQuantity @Integer <br> combinedItem @Item | ---
SpecialOffer | type @SpecialOfferType <br> options @SpecialOfferOptions | ---
SpecialOfferType | *ENUM OF TYPES* <br> - Multiple <br> - Combined | ---