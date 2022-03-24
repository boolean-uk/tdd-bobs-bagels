| Objects | Properties | Messages | Output |
| - | :-: | :-: | - |
| item  | name @String | getPrice() | @Number
|| SKU @String | _initialiseItem (SKU @String)
|| variant @String
|| price @Number
|| quantity @ Number
|| discount @Number
|| bundleSize @Number
| basket | items @Array[@item]| add(@item) | items @Array[@item] **OR** @String
|| capacity @Number| remove(id @Number) | items @Array[@item] **OR** @String
||| setCapacity(@number) | capacity @Number
||| _hasCapacity(@Number) | @Boolean
||| _itemExists(id @Number) | @Boolean
||| _organiseBasket(@Array[@item]) | @Array[@item]
| cashRegister | items @Array[@item] | _applyOffers() | @Array[@item]
||| getTotalPrice() | @Number
||| printReceipt() | @String
||| _hasCoffeeAndBagel(@Array[@item]) | @Boolean 
