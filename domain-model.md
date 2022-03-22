Object | Properties | Methods
--- | --- | ---
Basket | items [@BasketItem] | getItems() => [@Item] <br> add(item @Item) => @Boolean <br> remove(item @Item) => @Boolean <br> size() => @Number <br> basketPrice() @Number<br> itemCount() => @Number 
Item | sku @String <br> name @String <br> price @Number | ---
BasketItem *extends* @Item | quantity @Number | totalPrice() => @Number
Inventory | items [@InventoryItem] | getItemBySKU(sku @String) => @InventoryItem <br> findOffers(basket @Basket) => [@SpecialOffer] <br> add(item @Item) 
InventoryItem *extends* Item | quantity @Number <br> specialOffers [@SpecialOffer] | inStock() => @Boolean <br> addOffer() => Offer
SpecialOfferOptions | requiredQuantity @Integer <br> combinedItem @Item | ---
SpecialOffer | item @Item <br> options @SpecialOfferOptions <br> callback @Function | check() => @Boolean <br> apply(basket @Basket) => @Basket \| undefined
