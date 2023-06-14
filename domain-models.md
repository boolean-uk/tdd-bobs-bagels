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