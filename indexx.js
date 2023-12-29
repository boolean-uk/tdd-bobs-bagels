const inventory = [
    {
      "sku": "BGLO",
      "price": "0.49",
      "name": "Bagel",
      "variant": "Onion"
    },
    {
      "sku": "BGLP",
      "price": "0.39",
      "name": "Bagel",
      "variant": "Plain"
    },
    {
      "sku": "BGLE",
      "price": "0.49",
      "name": "Bagel",
      "variant": "Everything"
    },
    {
      "sku": "BGLS",
      "price": "0.49",
      "name": "Bagel",
      "variant": "Sesame"
    }
  ];
  
  // Remove the element at index 1
  inventory.splice(3, 1);
  
  // Now, 'inventory' contains the array without the element at index 1
  console.log(inventory);
  