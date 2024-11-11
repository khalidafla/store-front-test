import { CommonModule } from "@angular/common";
import { Component, OnInit, Signal, WritableSignal, computed, inject, signal } from "@angular/core";
import { CartService } from "app/products/data-access/cart.service";
import { Product } from "app/products/data-access/product.model";
import { ProductsService } from "app/products/data-access/products.service";
import { ProductFormComponent } from "app/products/ui/product-form/product-form.component";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';

const emptyProduct: Product = {
  id: 0,
  code: "",
  name: "",
  description: "",
  image: "",
  category: "",
  price: 0,
  quantity: 0,
  internalReference: "",
  shellId: 0,
  inventoryStatus: "INSTOCK",
  rating: 0,
  createdAt: 0,
  updatedAt: 0,
};

interface Category {
  name: string,
}

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
  standalone: true,
  imports: [CommonModule, FormsModule, MultiSelectModule, DataViewModule, CardModule, ButtonModule, DialogModule, TagModule, ProductFormComponent],
})
export class ProductListComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  private readonly cartService = inject(CartService);

  public readonly products = this.productsService.products;

  categories: Category[] = [
    {name : 'Accessories'},
    {name : 'Fitness'},
    {name : 'Clothing'},
    {name : 'Electronics'}
  ];

  readonly selectedCategories:WritableSignal<Category[]> = signal<Category[]>([]);
  readonly filteredProducts: Signal<Product[]> = computed(() => {
    if(!this.selectedCategories().length) return this.products();
    return this.products().filter(item => 
      this.selectedCategories().map(cat => cat.name.toLowerCase()).includes(item.category.toLowerCase())
    )
  });

  public isDialogVisible = false;
  public isCreation = false;
  public readonly editedProduct = signal<Product>(emptyProduct);

  ngOnInit() {
    this.productsService.get().subscribe();
    // When component is recreated all product data is reset so we empty the cart to keep consistency
    this.cartService.removeAll();
  }

  public onCreate() {
    this.isCreation = true;
    this.isDialogVisible = true;
    this.editedProduct.set(emptyProduct);
  }

  public onUpdate(product: Product) {
    this.isCreation = false;
    this.isDialogVisible = true;
    this.editedProduct.set(product);
  }

  public onDelete(product: Product) {
    this.productsService.delete(product.id).subscribe();
  }

  public onSave(product: Product) {
    if (this.isCreation) {
      this.productsService.create(product).subscribe();
    } else {
      this.productsService.update(product).subscribe();
    }
    this.closeDialog();
  }

  public onCancel() {
    this.closeDialog();
  }

  private closeDialog() {
    this.isDialogVisible = false;
  }

  public isProductInCart(product: Product): boolean {
    return this.cartService.products().filter(item => item.id === product.id).length > 0
  }

  public plusQte(product: Product) {
    product.quantity = product.quantity ? product.quantity : 0
    product.quantity += 1;
  }

  public minusQte(product: Product) {
    if(product.quantity) {
      product.quantity -= 1;
    }
  }

  public addToCart(product: Product) {
    this.cartService.add(product);
  }

  public removeFromCart(product: Product) {
    this.cartService.remove(product);
  }

  public getSeverity (product: Product) {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return 'info';
    }
  };
}
