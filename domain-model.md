Object | Properties | Methods
--- | --- | ---
Basket | items [@BasketItem] | getItems() => [@Item] <br> add(item @Item) => @Boolean <br> remove() => @Boolean <br> size() => @Number <br> basketPrice() @Number<br> itemCount() => @Number 
Item | sku @String <br> name @String <br> price @Number | ---
BasketItem *extends* @Item | quantity @Number | totalPrice() => @Number
Inventory | items [@InventoryItem] | getItemBySKU(sku @String) => @InventoryItem
InventoryItem *extends* Item | quantity @Number <br> specialOffers [@SpecialOffer] | inStock() => @Boolean <br> addOffer() => Offer
SpecialOfferOptions | requiredQuantity @Integer <br> combinedItem @Item | ---
SpecialOffer | type @SpecialOfferType <br> options @SpecialOfferOptions | ---
SpecialOfferType | *ENUM OF TYPES* <br> - Multiple <br> - Combined | ---