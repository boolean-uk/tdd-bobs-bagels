import { Product } from "./Product"

export class Filling extends Product {
    constructor (sku, price, name, variant) {
       super (sku, name, price, variant)
    }
}