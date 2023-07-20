class Inventory {
    constructor () {
        inventoryList = []
        //bagel
        inventoryList.push(new Product("BGLO", 0.49, "Bagel", "Onion"));
        inventoryList.push(new Product("BGLP", 0.39, "Bagel", "Plain"));
        inventoryList.push(new Product("BGLE", 0.49, "Bagel", "Everything"));
        inventoryList.push(new Product("BGLS", 0.49, "Bagel", "Sesame"));
        //coffee
        inventoryList.push(new Product("COFB", 0.99, "Coffee", "Black"));
        inventoryList.push(new Product("COFW", 1.19, "Coffee", "White"));
        inventoryList.push(new Product("COFC", 1.29, "Coffee", "Capuccino"));
        inventoryList.push(new Product("COFL", 1.29, "Coffee", "Latte"));
        //filling
        inventoryList.push(new Product("FILB", 0.12, "Filling", "Bacon"));
        inventoryList.push(new Product("FILE", 0.12, "Filling", "Egg"));
        inventoryList.push(new Product("FILC", 0.12, "Filling", "Cheese"));
        inventoryList.push(new Product("FILX", 0.12, "Filling", "Cream Cheese"));
        inventoryList.push(new Product("FILS", 0.12, "Filling", "Smoked Salmon"));
        inventoryList.push(new Product("FILH", 0.12, "Filling", "Ham"));
    }

}

module.exports = {
    Inventory
}
