Object | Properties | Methods
--- | --- | ---
Basket | items [@BasketItem] | getItems() => [@Item] <br> getItem(item @Item) => @BasketItem<br> add(item @Item) => @Boolean <br> remove(item @Item) => @Boolean <br> size() => @Number <br> capacity => @Number <br> basketPrice() @Number<br> itemCount() => @Number <br> includes => @Boolean
Item | sku @String <br> name @String <br> variant @String <br>price @Number | ---
BasketItem *extends* @Item | item @Item <br> quantity? @Number | totalPrice() => @Number <br> totalBasePrice() => @Number
Inventory | items [@InventoryItem] | getItemBySKU(sku @String) => @InventoryItem <br> findOffers(basket @Basket) => [@SpecialOffer] <br> add(item @Item) => void
InventoryItem *extends* Item | quantity @Number <br> specialOffers [@SpecialOffer] | inStock() => @Boolean <br> addOffer() => Offer
SpecialOfferOptions | requiredQuantity @Integer <br> combinedItem @Item <br> recursive @Boolean <br> price @Number| ---
SpecialOffer | item @Item <br> options @SpecialOfferOptions <br> callback? @Function | check() => @Boolean <br> apply(basket @Basket) => @Basket \| undefined
