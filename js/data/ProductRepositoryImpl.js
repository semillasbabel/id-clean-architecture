import {ProductRepository} from "../domain/ProductRepository.js";

export class ProductRepositoryImpl extends ProductRepository {
    getId() {
        return [1, 2, 3, 4]
    }

    getAuthFirebase(email, password) {
        // TODO("Se hace la logica para loguearme con Firebase")
        return true
    }
}
