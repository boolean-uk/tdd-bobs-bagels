| Objects | Properties | Messages | Output |
| - | :-: | :-: | - |
| item  | name @String | getPrice() | @Number
|| SKU @String
|| variant @String
|| price @Number
|| quantity @ Number
| basket | items @Array[@item]| add(@item) | items @Array[@item] **OR** @String
|| capacity @Number| remove(id @Number) | items @Array[@item] **OR** @String
||| setCapacity(@number) | capacity @Number
||| _hasCapacity(@Number) | @Boolean
||| _itemExists(id @Number) | @Boolean
||| _organiseBasket(@Array[@item]) | @Array[@item]
| cashRegister | items @Array[@item] | applyOffers(@Array[@item]) | @Array[@item]
||| getTotalPrice() | @Number
||| printReceipt() | @String
||| _applyPlainBagelsOffer(@Array[@item]) | @Array[@item]
||| _hasCoffeeAndBagel(@Array[@item]) | @Boolean 
||| _has12PlainBagels(@Array[@item]) | @Boolean
