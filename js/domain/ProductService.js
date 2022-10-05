export class ProductService {

    #repository

    constructor(repository) {
        this.#repository = repository
    }

    consultId() {
        return this.#repository.getId()
    }

    auth(email, password) {
        if (email === undefined){

        }
        return this.#repository.getAuthFirebase(email, password)
    }

}
