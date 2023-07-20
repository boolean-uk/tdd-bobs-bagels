class basket{
    constructor(capacity){
        this.products=[]
        this.capacity=capacity
    }
    
    add(product){
        if(this.products.length +1 <=this.capacity){
        this.products.push(product)
        }
        else{
            throw "You cant add new product. No space left."
        }

    }
    remove(product){
        if(this.products.includes(product)){
            this.products.splice(this.products.indexOf(product),1)
        }else{
            throw "Product you want to remove is not in the basket."
        }
    }
    changeCapacity(newCapacity){
        if(newCapacity<this.products.length){
            throw "New capacity cannot be smaller than amount of items in basket."
        }
        this.capacity=newCapacity
    }
    totalPrice(){
       let totalPrice=0
        for(let i=0;i<this.products.length;i++){
            totalPrice+=this.products[i].getPrice()
        }
       return Math.round(totalPrice * 100) / 100
    }

}
module.exports = {
    basket
}

