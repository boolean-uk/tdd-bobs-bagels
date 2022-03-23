| Objects | Properties | Messages | Output |
| - | :-: | :-: | - |
| item  | name @String
|| id @Number
| basket | items @Array[@item]| add(@item) | items @Array[@item] **OR** @String
|| capacity @Number| remove(id @Number) | items @Array[@item] **OR** @String
||| setCapacity(@number) | capacity @Number
||| _hasCapacity() | @Boolean
||| _itemExists(id @Number) | @Boolean