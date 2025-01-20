import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { CartService } from "app/products/data-access/cart.service";
import { Product } from "app/products/data-access/product.model";
import { ButtonModule } from "primeng/button";

@Component({
    selector: "app-cart",
    template: `
        @for (product of products(); track product; let first = $first) {
        <div class="col-12">
                <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" [ngClass]="{ 'border-top-1 surface-border': !first }">
                    <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                        <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                            <div>
                                <span class="font-medium text-secondary text-sm">{{ product.category }}</span>
                                <div class="text-lg font-medium text-900 mt-2">{{ product.name }}</div>
                            </div>
                        </div>
                        <div class="flex flex-column md:align-items-end gap-3">
                            <span class="text-xl font-semibold text-900">{{ product.price | currency: 'EUR' }}</span>
                            <div class="flex flex-row-reverse align-items-center md:flex-row gap-1">
                                <p-button (onClick)="plusQte(product)" icon="pi pi-plus" [outlined]="true" size="small" />
                                <span class="text-xl font-medium text-900">{{product.quantity ? product.quantity : 0}}</span>
                                <p-button (onClick)="minusQte(product)" icon="pi pi-minus" [outlined]="true" size="small" />
                            </div>
                        </div>
                        <div class="flex flex-row-reverse md:flex-row gap-2">
                            <p-button (onClick)="removeFromCart(product)" icon="pi pi-shopping-cart" class="flex-auto md:flex-initial white-space-nowrap" label="Retirer" severity="warning" />
                        </div>
                    </div>
                </div>
            </div>
        } @empty {
            <div class="text-lg font-medium text-900 mt-2">Vous n'avez aucun produit dans le panier</div>
        }
    `,
    styleUrls: ["./cart-list.component.scss"],
    standalone: true,
    imports: [
        CommonModule,
        ButtonModule
    ]
  })
export class CartListComponent {
    private readonly cartService = inject(CartService);
    public readonly products = this.cartService.products;

    public plusQte(product: Product) {
        product.quantity = product.quantity ? product.quantity : 0
        product.quantity += 1;
    }
    
    public minusQte(product: Product) {
        if(product.quantity) {
            product.quantity -= 1;
        }
    }

    public removeFromCart(product: Product) {
        this.cartService.remove(product);
    }
}