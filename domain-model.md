| Objects | Properties | Messages | Output |
| - | :-: | :-: | - |
| item  | name @String | getPrice() | @Number
|| SKU @String
|| variant @String
|| price @Number
|| quantity @ Number
| basket | items @Array[@item]| add(@item) | items @Array[@item] **OR** @String
|| capacity @Number| remove(id @Number) | items @Array[@item] **OR** @String
||| getTotalPrice() | @Number 
||| setCapacity(@number) | capacity @Number
||| _hasCapacity(@Number) | @Boolean
||| _itemExists(id @Number) | @Boolean