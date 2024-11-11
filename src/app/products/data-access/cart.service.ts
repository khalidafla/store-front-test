import { Injectable, signal } from "@angular/core";
import { Product } from "./product.model";

@Injectable({
    providedIn: "root"
}) export class CartService {

    private readonly _products = signal<Product[]>([]);

    public readonly products = this._products.asReadonly();

    public add(product: Product) {
        this._products.update(products => [product, ...products]);
    }

    public remove(product: Product) {
        this._products.update(products => products.filter(item => item.id !== product.id))
    }

    public removeAll() {
        this._products.set([]);
    }
}