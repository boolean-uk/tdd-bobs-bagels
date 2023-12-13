# Part 1
METHOD: class createBasket
INPUT: no input
OUTPUT: {
        items: [] (empty array),
        addItem () – method
        removeItem () – method
        }

METHOD: basket.addItem
INPUT: storeItem
OUTPUT: function that pushes {storeItem} to basket
SCENARIOS: item is already in basket true; -> raise count
          item is already in basket false -> add with count = 1

METHOD: basket.removeItem
INPUT: basketItem
OUTPUT: function that removes {basketItem} from basket