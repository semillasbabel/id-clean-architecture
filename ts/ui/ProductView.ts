import {ProductService} from "../domain/ProductService";
import {ProductRepositoryImpl} from "../data/ProductRepositoryImpl";

export class ProductView {
    private productService: ProductService

    constructor() {
        let repository = new ProductRepositoryImpl()
        this.productService = new ProductService(repository)
    }
}
