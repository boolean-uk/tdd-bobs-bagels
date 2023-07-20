import { Product } from "./Product"

export class Coffee extends Product {
    constructor (sku, price, name, variant) {
       super (sku, name, price, variant)
    }
}