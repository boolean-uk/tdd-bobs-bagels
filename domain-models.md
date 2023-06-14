# Part 1
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

| Methods                            | Inputs                           | Data                                                             | Scenario                                                                                                    | Outputs                |
|------------------------------------|----------------------------------|------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|------------------------|
| basket.createBagel(bagel(@string)) | bagel@string - Name of the bagel | [@object: name@string, price@string, variant@string, sku@string] | A bagel that is ordered is chosen                                                                           | [@object: information] |
| basket.deleteBagel(bagel(@string)) | bagel@string - Name of the bagel | [@object: name@string, price@string, variant@string, sku@string] | The bagel that want to be deleted is passed through the method and the object gets deleted from the array.  | [@object: information] |

# Part 2
As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket. 
<!-- 
   METHOD                              INPUTS                           DATA                           SCENARIO                         OUTPUT
basket.creatBagel(@string)    @string - Name of the bagel    [@object: name@string, price@string,   if 6 bagels already in basket     @Boolean:false
                                                                id: @number]                        user won't be able to add more

basket(basketSize@number)    @number size of basket         [@object: name@string, price@string,    Manager can define basketSize,   basketSize
                                                                id: @number]                        otherwise defaults to 6          @Number


 -->
