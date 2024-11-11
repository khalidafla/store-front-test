import {
  Component,
  inject,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";
import { CartService } from "./products/data-access/cart.service";
import { DialogModule } from 'primeng/dialog';
import { CartListComponent } from "./products/ui/cart-list/cart-list.component";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterModule, SplitterModule, DialogModule, BadgeModule, ButtonModule, ToolbarModule, PanelMenuComponent, CartListComponent],
})
export class AppComponent {
  private readonly cartService = inject(CartService);
  public cartProducts = this.cartService.products;
  title = "ALTEN SHOP";
  isDialogVisible = false;

  showCart() {
    this.isDialogVisible = true;
  }
}
