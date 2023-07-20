import { Product } from "./Product"

export class Bagel extends Product {
    constructor (sku, price, name, variant) {
       super (sku, name, price, variant)
    }
}