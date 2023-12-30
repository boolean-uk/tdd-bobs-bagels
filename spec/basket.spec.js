const {inventory} = require('../inventory.json')
const {Basket, Item} = require('../src/basket')




 describe( 'Basket',()=>{

    describe('Add and an Item', ()=>{

        it('Can have an item added to it and returns true', ()=>{
            //GIVEN
                const basket = new Basket();
                const itemObject = inventory[0]
                const item = new Item(itemObject)

            //WHEN
            const result =  basket.addItemToBasket(item)
            
            //THEN
            expect(result).toBeTrue()
        })
    
        it('returns false if an invalid item is added to the basket', ()=>{
            //GIVEN
            const basket = new Basket();
            const item = {name: "bagel"}
    
            //WHEN
    
            const result = basket.addItemToBasket(item)
    
            //THEN
            expect(result).toBeFalse
    
        })
    })

    describe('remove or change items in the basket',()=>{
        it('Can change order or remove item', ()=>{
            // GIVEN
            const basket = new Basket();
            const item1 = new Item(inventory[0]);
            const item2 = new Item(inventory[1]);
            const item3 = new Item(inventory[2]);
        
            basket.addItemToBasket(item1);
            basket.addItemToBasket(item2);
            basket.addItemToBasket(item3);
        
            const orderToBeRemoved = 1;
        
            // WHEN
            const result = basket.removeOrder(orderToBeRemoved);
        
            // THEN
            const remainingItems = [item1, item3];
        
            expect(result).toEqual(remainingItems);
        });


        it('Can change order or remove item', ()=>{
            // GIVEN
            const basket = new Basket();
            const item1 = new Item(inventory[0]);
            const item2 = new Item(inventory[1]);
            const item3 = new Item(inventory[2]);
        
            basket.addItemToBasket(item1);
            basket.addItemToBasket(item2);
            basket.addItemToBasket(item3);
        
            const orderToBeRemoved = 1;
        
            // WHEN
            const result = basket.removeOrder(orderToBeRemoved);
        
            // THEN
            const remainingItems = [item1, item3];
        
            expect(result).toEqual(remainingItems);
        });
        
    })

    describe('Basket Capacity', ()=>{
        it(' When basket is not overfilled ', ()=>{
            //GIVEN
            const basket = new Basket();
            const item1 = new Item(inventory[0]);
            const item2 = new Item(inventory[1]);
            const item3 = new Item(inventory[2]);
            const item4 = new Item(inventory[3])
      

            basket.addItemToBasket(item1);
            basket.addItemToBasket(item2);
            basket.addItemToBasket(item3);
            basket.addItemToBasket(item4);
     

            const basketCapacity = 5

            //WHEN
                const result = basket.checkBasketCapacity(basketCapacity)

            //THEN
                expect(result).toEqual(true)
        })
    })


    describe('To record more sales', ()=>{

        it('When trying to add an item within basket capacity', () => {
            // GIVEN
            const basket = new Basket();
            const item2 = new Item(inventory[1]);
            const item1 = new Item(inventory[0]);
       
            basket.increaseCapacity(item1);
         
            const basketCapacity = 3; 
            // WHEN
            
            const result = basket.increaseCapacity(new Item(item2), basketCapacity);
    
            // THEN
            expect(result).toEqual('New item has been added'); 
        });

        
        it('When trying to add an item beyond basket capacity', () => {
            // GIVEN
            const basket = new Basket();
            const item2 = new Item(inventory[1]);
            const item1 = new Item(inventory[0]);
            const item3 = new Item(inventory[2]);
            const item4 = new Item(inventory[3]);
            const item5 = new Item(inventory[4]);

    
            basket.increaseCapacity(item2);
            basket.increaseCapacity(item1);
            basket.increaseCapacity(item3);
            basket.increaseCapacity(item4);

    
            const basketCapacity = 3; 
            // WHEN
            
            const result = basket.increaseCapacity(new Item(item5), basketCapacity);
    
            // THEN
            expect(result).toEqual('Capacity has been increase and a new item has been added'); // Basket should be full
        });
    });
    

})

