import {ProductRepositoryImpl} from "../data/ProductRepositoryImpl.js"
import {ProductService} from "../domain/ProductService.js";

export class ProductView {

    #service

    constructor() {
        let repository = new ProductRepositoryImpl()
        this.#service = new ProductService(repository)
    }

    showId() {
        console.log(this.#service.consultId())
    }
}
