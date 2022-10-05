import {ProductRepository} from "../domain/ProductRepository";

export class ProductRepositoryImpl implements ProductRepository {
    getAuth(): boolean {
        return true;
    }

    getId(): number[] {
        let list = []
        list.push(1)
        list.push(2)
        list.push(3)
        list.push(4)
        return list;
    }

}
