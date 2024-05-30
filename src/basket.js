class Basket{
    constructor() {
        this.contents = []
    }
}

class Bagel{
    constructor(name, price) {
        if(typeof name !== "string" || typeof price !== "number"){
            throw new Error("Invalid argument types")
        }
        
        this.name = name
        this.price = price
    }
}

export {Bagel}

export default Basket