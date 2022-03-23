| Objects | Properties | Messages | Output |
| - | :-: | :-: | - |
| item  | name @String
|| id @Number
| basket | items @Array[@item]| add(@item) | items @Array[@item]
|| capacity @Number| remove(@item) | items @Array[@item]
||| setCapacity(@number) | capacity @Number
||| _hasCapacity() | @Boolean