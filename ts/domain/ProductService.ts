import {ProductRepository} from "./ProductRepository";

export class ProductService {

    private repository: ProductRepository

    constructor(repository: ProductRepository) {
        this.repository = repository
    }

    consultId(): number[] {
        return this.repository.getId()
    }
}
