"use strict";
(self["webpackChunkaltenshop"] = self["webpackChunkaltenshop"] || []).push([["src_app_products_products_routes_ts"],{

/***/ 4524:
/*!**********************************************************!*\
  !*** ./src/app/products/data-access/products.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsService: () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9452);




class ProductsService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
    this.path = "/api/products";
    this._products = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    this.products = this._products.asReadonly();
  }
  get() {
    return this.http.get(this.path).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      return this.http.get("assets/products.json");
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(products => this._products.set(products)));
  }
  create(product) {
    return this.http.post(this.path, product).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(true);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._products.update(products => [product, ...products])));
  }
  update(product) {
    return this.http.patch(`${this.path}/${product.id}`, product).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(true);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._products.update(products => {
      return products.map(p => p.id === product.id ? product : p);
    })));
  }
  delete(productId) {
    return this.http.delete(`${this.path}/${productId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(true);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._products.update(products => products.filter(product => product.id !== productId))));
  }
  static #_ = this.ɵfac = function ProductsService_Factory(t) {
    return new (t || ProductsService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ProductsService,
    factory: ProductsService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 471:
/*!**************************************************************************!*\
  !*** ./src/app/products/features/product-list/product-list.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListComponent: () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var app_products_data_access_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/products/data-access/cart.service */ 3386);
/* harmony import */ var app_products_data_access_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/products/data-access/products.service */ 4524);
/* harmony import */ var app_products_ui_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/products/ui/product-form/product-form.component */ 154);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/card */ 1486);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dataview */ 3415);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ 6280);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tag */ 3616);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/multiselect */ 2159);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 7780);





















const _forTrack0 = ($index, $item) => $item.id;
const _c0 = () => ({
  width: "50vw"
});
const _c1 = a0 => ({
  "border-top-1 surface-border": a0
});
function ProductListComponent_ng_template_7_For_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function ProductListComponent_ng_template_7_For_2_Conditional_22_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.plusQte(product_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function ProductListComponent_ng_template_7_For_2_Conditional_22_Template_p_button_onClick_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.minusQte(product_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("outlined", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r4.quantity ? product_r4.quantity : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("outlined", true);
  }
}
function ProductListComponent_ng_template_7_For_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function ProductListComponent_ng_template_7_For_2_Conditional_24_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.removeFromCart(product_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_ng_template_7_For_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function ProductListComponent_ng_template_7_For_2_Conditional_25_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.addToCart(product_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", product_r4.inventoryStatus === "OUTOFSTOCK");
  }
}
function ProductListComponent_ng_template_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "div")(5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 17)(12, "div", 18)(13, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 21)(17, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "p-tag", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ProductListComponent_ng_template_7_For_2_Conditional_22_Template, 4, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ProductListComponent_ng_template_7_For_2_Conditional_24_Template, 1, 0, "p-button", 26)(25, ProductListComponent_ng_template_7_For_2_Conditional_25_Template, 1, 1, "p-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function ProductListComponent_ng_template_7_For_2_Template_p_button_onClick_26_listener() {
      const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.onUpdate(product_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function ProductListComponent_ng_template_7_For_2_Template_p_button_onClick_27_listener() {
      const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.onDelete(product_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ɵ$index_16_r8 = ctx.$index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c1, !(ɵ$index_16_r8 === 0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r4.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r4.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](19, 10, product_r4.price, "EUR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", product_r4.inventoryStatus)("severity", ctx_r4.getSeverity(product_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](product_r4.inventoryStatus !== "OUTOFSTOCK" ? 22 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx_r4.isProductInCart(product_r4) ? 24 : 25);
  }
}
function ProductListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](1, ProductListComponent_ng_template_7_For_2_Template, 28, 15, "div", 10, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const products_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](products_r9);
  }
}
const emptyProduct = {
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
  updatedAt: 0
};
class ProductListComponent {
  constructor() {
    this.productsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(app_products_data_access_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductsService);
    this.cartService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(app_products_data_access_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService);
    this.products = this.productsService.products;
    this.categories = [{
      name: 'Accessories'
    }, {
      name: 'Fitness'
    }, {
      name: 'Clothing'
    }, {
      name: 'Electronics'
    }];
    this.selectedCategories = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)([]);
    this.filteredProducts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.computed)(() => {
      if (!this.selectedCategories().length) return this.products();
      return this.products().filter(item => this.selectedCategories().map(cat => cat.name.toLowerCase()).includes(item.category.toLowerCase()));
    });
    this.isDialogVisible = false;
    this.isCreation = false;
    this.editedProduct = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(emptyProduct);
  }
  ngOnInit() {
    this.productsService.get().subscribe();
    // When component is recreated all product data is reset so we empty the cart to keep consistency
    this.cartService.removeAll();
  }
  onCreate() {
    this.isCreation = true;
    this.isDialogVisible = true;
    this.editedProduct.set(emptyProduct);
  }
  onUpdate(product) {
    this.isCreation = false;
    this.isDialogVisible = true;
    this.editedProduct.set(product);
  }
  onDelete(product) {
    this.productsService.delete(product.id).subscribe();
  }
  onSave(product) {
    if (this.isCreation) {
      this.productsService.create(product).subscribe();
    } else {
      this.productsService.update(product).subscribe();
    }
    this.closeDialog();
  }
  onCancel() {
    this.closeDialog();
  }
  closeDialog() {
    this.isDialogVisible = false;
  }
  isProductInCart(product) {
    return this.cartService.products().filter(item => item.id === product.id).length > 0;
  }
  plusQte(product) {
    product.quantity = product.quantity ? product.quantity : 0;
    product.quantity += 1;
  }
  minusQte(product) {
    if (product.quantity) {
      product.quantity -= 1;
    }
  }
  addToCart(product) {
    this.cartService.add(product);
  }
  removeFromCart(product) {
    this.cartService.remove(product);
  }
  getSeverity(product) {
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
  }
  static #_ = this.ɵfac = function ProductListComponent_Factory(t) {
    return new (t || ProductListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ProductListComponent,
    selectors: [["app-product-list"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 10,
    consts: [["dv", ""], [1, "text-center"], ["label", "Cr\u00E9er produit", 1, "block", "text-center", 3, "onClick"], [1, "card", "flex", "justify-content-center", "mt-2"], ["optionLabel", "name", "placeholder", "Category", 3, "ngModelChange", "options", "ngModel"], [3, "value", "rows", "paginator"], ["pTemplate", "list"], ["header", "Ajout/Edition produit", 3, "visibleChange", "visible"], [3, "save", "cancel", "product"], [1, "grid", "grid-nogutter"], [1, "col-12"], [1, "flex", "flex-column", "sm:flex-row", "sm:align-items-center", "p-4", "gap-3", 3, "ngClass"], [1, "flex", "flex-column", "md:flex-row", "justify-content-between", "md:align-items-center", "flex-1", "gap-4"], [1, "flex", "flex-row", "md:flex-column", "justify-content-between", "align-items-start", "gap-2"], [1, "font-medium", "text-secondary", "text-sm"], [1, "text-lg", "font-medium", "text-900", "mt-2"], [1, "text-sm", "font-medium", "text-900", "mt-2"], [1, "surface-100", "p-1", 2, "border-radius", "30px"], [1, "surface-0", "flex", "align-items-center", "gap-2", "justify-content-center", "py-1", "px-2", 2, "border-radius", "30px", "box-shadow", "0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"], [1, "text-900", "font-medium", "text-sm"], [1, "pi", "pi-star-fill", "text-yellow-500"], [1, "flex", "flex-column", "md:align-items-end", "gap-3"], [1, "text-xl", "font-semibold", "text-900"], [3, "value", "severity"], [1, "flex", "flex-row-reverse", "align-items-center", "md:flex-row", "gap-1"], [1, "flex", "flex-row-reverse", "md:flex-row", "gap-2"], ["icon", "pi pi-shopping-cart", "label", "Retirer", "severity", "warning", 1, "flex-auto", "md:flex-initial", "white-space-nowrap"], ["icon", "pi pi-shopping-cart", "label", "Acheter", 1, "flex-auto", "md:flex-initial", "white-space-nowrap", 3, "disabled"], ["label", "Modifier", "severity", "secondary", 1, "flex-auto", "md:flex-initial", "white-space-nowrap", 3, "onClick"], ["label", "Supprimer", "severity", "danger", 1, "flex-auto", "md:flex-initial", "white-space-nowrap", 3, "onClick"], ["icon", "pi pi-plus", "size", "small", 3, "onClick", "outlined"], [1, "text-xl", "font-medium", "text-900"], ["icon", "pi pi-minus", "size", "small", 3, "onClick", "outlined"], ["icon", "pi pi-shopping-cart", "label", "Retirer", "severity", "warning", 1, "flex-auto", "md:flex-initial", "white-space-nowrap", 3, "onClick"], ["icon", "pi pi-shopping-cart", "label", "Acheter", 1, "flex-auto", "md:flex-initial", "white-space-nowrap", 3, "onClick", "disabled"]],
    template: function ProductListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Liste des produits");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function ProductListComponent_Template_p_button_onClick_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onCreate());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "p-multiSelect", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductListComponent_Template_p_multiSelect_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.selectedCategories.set($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p-dataView", 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ProductListComponent_ng_template_7_Template, 3, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p-dialog", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("visibleChange", function ProductListComponent_Template_p_dialog_visibleChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.isDialogVisible, $event) || (ctx.isDialogVisible = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "app-product-form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("save", function ProductListComponent_Template_app_product_form_save_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onSave($event));
        })("cancel", function ProductListComponent_Template_app_product_form_cancel_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onCancel());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.categories)("ngModel", ctx.selectedCategories());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.filteredProducts())("rows", 5)("paginator", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("visible", ctx.isDialogVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("product", ctx.editedProduct());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_multiselect__WEBPACK_IMPORTED_MODULE_6__.MultiSelectModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_6__.MultiSelect, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_dataview__WEBPACK_IMPORTED_MODULE_8__.DataViewModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_8__.DataView, primeng_card__WEBPACK_IMPORTED_MODULE_9__.CardModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.Dialog, primeng_tag__WEBPACK_IMPORTED_MODULE_12__.TagModule, primeng_tag__WEBPACK_IMPORTED_MODULE_12__.Tag, app_products_ui_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_2__.ProductFormComponent],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdHMvZmVhdHVyZXMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL3Rlc3QlMjB0ZWNobmlxdWUvQWx0ZW4vZnJvbnQvc3JjL2FwcC9wcm9kdWN0cy9mZWF0dXJlcy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0oiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8287:
/*!*********************************************!*\
  !*** ./src/app/products/products.routes.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRODUCTS_ROUTES: () => (/* binding */ PRODUCTS_ROUTES)
/* harmony export */ });
/* harmony import */ var _features_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/product-list/product-list.component */ 471);

const PRODUCTS_ROUTES = [{
  path: "list",
  component: _features_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent
}, {
  path: "**",
  redirectTo: "list"
}];

/***/ }),

/***/ 154:
/*!********************************************************************!*\
  !*** ./src/app/products/ui/product-form/product-form.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFormComponent: () => (/* binding */ ProductFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ 6895);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputnumber */ 1759);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtextarea */ 7058);














class ProductFormComponent {
  constructor() {
    this.product = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required();
    this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.editedProduct = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
      ...this.product()
    }));
    this.categories = [{
      value: "Accessories",
      label: "Accessories"
    }, {
      value: "Fitness",
      label: "Fitness"
    }, {
      value: "Clothing",
      label: "Clothing"
    }, {
      value: "Electronics",
      label: "Electronics"
    }];
  }
  onCancel() {
    this.cancel.emit();
  }
  onSave() {
    this.save.emit(this.editedProduct());
  }
  static #_ = this.ɵfac = function ProductFormComponent_Factory(t) {
    return new (t || ProductFormComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProductFormComponent,
    selectors: [["app-product-form"]],
    inputs: {
      product: [1, "product"]
    },
    outputs: {
      cancel: "cancel",
      save: "save"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 22,
    vars: 6,
    consts: [["form", "ngForm"], [3, "ngSubmit"], [1, "form-field"], ["for", "name"], ["pInputText", "", "type", "text", "id", "name", "name", "name", "required", "", 3, "ngModelChange", "ngModel"], ["for", "price"], ["name", "price", "mode", "decimal", "required", "", 3, "ngModelChange", "ngModel"], ["for", "description"], ["pInputTextarea", "", "id", "description", "name", "description", "rows", "5", "cols", "30", 3, "ngModelChange", "ngModel"], ["name", "category", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], [1, "flex", "justify-content-between"], ["type", "button", "label", "Annuler", "severity", "help", 3, "click"], ["type", "submit", "label", "Enregistrer", "severity", "success", 3, "disabled"]],
    template: function ProductFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductFormComponent_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onSave());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ProductFormComponent_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.editedProduct().name, $event) || (ctx.editedProduct().name = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Prix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-inputNumber", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ProductFormComponent_Template_p_inputNumber_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.editedProduct().price, $event) || (ctx.editedProduct().price = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2)(11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ProductFormComponent_Template_textarea_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.editedProduct().description, $event) || (ctx.editedProduct().description = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2)(16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cat\u00E9gorie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ProductFormComponent_Template_p_dropdown_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.editedProduct().category, $event) || (ctx.editedProduct().category = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10)(20, "p-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductFormComponent_Template_p_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onCancel());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.editedProduct().name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.editedProduct().price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.editedProduct().description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.editedProduct().category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !form_r2.valid);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_2__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__.InputText, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__.InputNumberModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__.InputNumber, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__.InputTextareaModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__.InputTextarea, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.DropdownModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.Dropdown],
    styles: [".form-field {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n}\n.form-field .p-dropdown, .form-field .p-inputnumber {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdHMvdWkvcHJvZHVjdC1mb3JtL3Byb2R1Y3QtZm9ybS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL3Rlc3QlMjB0ZWNobmlxdWUvQWx0ZW4vZnJvbnQvc3JjL2FwcC9wcm9kdWN0cy91aS9wcm9kdWN0LWZvcm0vcHJvZHVjdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0FDQ1IiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1maWVsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTBweCAwO1xuXG4gICAgLnAtZHJvcGRvd24sIC5wLWlucHV0bnVtYmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSIsIi5mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uZm9ybS1maWVsZCAucC1kcm9wZG93biwgLmZvcm0tZmllbGQgLnAtaW5wdXRudW1iZXIge1xuICB3aWR0aDogMTAwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3415:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-dataview.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataView: () => (/* binding */ DataView),
/* harmony export */   DataViewLayoutOptions: () => (/* binding */ DataViewLayoutOptions),
/* harmony export */   DataViewModule: () => (/* binding */ DataViewModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/paginator */ 3157);
/* harmony import */ var primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/spinner */ 4766);
/* harmony import */ var primeng_icons_thlarge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/thlarge */ 576);
/* harmony import */ var primeng_icons_bars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/bars */ 5961);













/**
 * DataView displays data in grid or list layout with pagination and sorting features.
 * @group Components
 */
const _c0 = [[["p-header"]], [["p-footer"]]];
const _c1 = ["p-header", "p-footer"];
const _c2 = (a0, a1) => ({
  "p-dataview p-component": true,
  "p-dataview-list": a0,
  "p-dataview-grid": a1
});
const _c3 = a0 => ({
  $implicit: a0
});
function DataView_div_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("p-dataview-loading-icon pi-spin " + ctx_r0.loadingIcon);
  }
}
function DataView_div_1_ng_container_3_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SpinnerIcon", 15);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spin", true)("styleClass", "p-dataview-loading-icon");
  }
}
function DataView_div_1_ng_container_3_2_ng_template_0_Template(rf, ctx) {}
function DataView_div_1_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataView_div_1_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DataView_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataView_div_1_ng_container_3_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 13)(2, DataView_div_1_ng_container_3_2_Template, 1, 0, null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loadingIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.loadingIconTemplate);
  }
}
function DataView_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataView_div_1_i_2_Template, 1, 2, "i", 12)(3, DataView_div_1_ng_container_3_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loadingIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loadingIcon);
  }
}
function DataView_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function DataView_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataView_div_2_ng_container_2_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function DataView_p_paginator_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-paginator", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function DataView_p_paginator_3_Template_p_paginator_onPageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.paginate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("dropdownAppendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("templateLeft", ctx_r0.paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.paginatorStyleClass);
  }
}
function DataView_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function DataView_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.emptyMessageLabel, " ");
  }
}
function DataView_div_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 0);
  }
}
function DataView_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataView_div_7_ng_container_2_Template, 2, 1, "ng-container", 19)(3, DataView_div_7_ng_container_3_Template, 2, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.emptyMessageTemplate)("ngIfElse", ctx_r0.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.emptyMessageTemplate);
  }
}
function DataView_p_paginator_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-paginator", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function DataView_p_paginator_8_Template_p_paginator_onPageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.paginate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("dropdownAppendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("templateLeft", ctx_r0.paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.paginatorStyleClass);
  }
}
function DataView_div_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function DataView_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataView_div_9_ng_container_2_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate);
  }
}
const _c4 = a0 => ({
  "p-highlight": a0
});
function DataViewLayoutOptions_BarsIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "BarsIcon");
  }
}
function DataViewLayoutOptions_3_ng_template_0_Template(rf, ctx) {}
function DataViewLayoutOptions_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataViewLayoutOptions_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DataViewLayoutOptions_ThLargeIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ThLargeIcon");
  }
}
function DataViewLayoutOptions_6_ng_template_0_Template(rf, ctx) {}
function DataViewLayoutOptions_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataViewLayoutOptions_6_ng_template_0_Template, 0, 0, "ng-template");
  }
}
class DataView {
  el;
  cd;
  filterService;
  config;
  /**
   * When specified as true, enables the pagination.
   * @group Props
   */
  paginator;
  /**
   * Number of rows to display per page.
   * @group Props
   */
  rows;
  /**
   * Number of total records, defaults to length of value when not defined.
   * @group Props
   */
  totalRecords;
  /**
   * Number of page links to display in paginator.
   * @group Props
   */
  pageLinks = 5;
  /**
   * Array of integer/object values to display inside rows per page dropdown of paginator
   * @group Props
   */
  rowsPerPageOptions;
  /**
   * Position of the paginator.
   * @group Props
   */
  paginatorPosition = 'bottom';
  /**
   * Custom style class for paginator
   * @group Props
   */
  paginatorStyleClass;
  /**
   * Whether to show it even there is only one page.
   * @group Props
   */
  alwaysShowPaginator = true;
  /**
   * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  paginatorDropdownAppendTo;
  /**
   * Paginator dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  paginatorDropdownScrollHeight = '200px';
  /**
   * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
   * @group Props
   */
  currentPageReportTemplate = '{currentPage} of {totalPages}';
  /**
   * Whether to display current page report.
   * @group Props
   */
  showCurrentPageReport;
  /**
   * Whether to display a dropdown to navigate to any page.
   * @group Props
   */
  showJumpToPageDropdown;
  /**
   * When enabled, icons are displayed on paginator to go first and last page.
   * @group Props
   */
  showFirstLastIcon = true;
  /**
   * Whether to show page links.
   * @group Props
   */
  showPageLinks = true;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy;
  /**
   * Whether to call lazy loading on initialization.
   * @group Props
   */
  lazyLoadOnInit = true;
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = '';
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the grid.
   * @group Props
   */
  gridStyleClass = '';
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
   * @group Props
   */
  trackBy = (index, item) => item;
  /**
   * Comma separated list of fields in the object graph to search against.
   * @group Props
   */
  filterBy;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Displays a loader to indicate data load is in progress.
   * @group Props
   */
  loading;
  /**
   * The icon to show while indicating data load is in progress.
   * @group Props
   */
  loadingIcon;
  /**
   * Index of the first row to be displayed.
   * @group Props
   */
  first = 0;
  /**
   * Property name of data to use in sorting by default.
   * @group Props
   */
  sortField;
  /**
   * Order to sort the data by default.
   * @group Props
   */
  sortOrder;
  /**
   * An array of objects to display.
   * @group Props
   */
  value;
  /**
   * Defines the layout mode.
   * @group Props
   */
  get layout() {
    return this._layout;
  }
  set layout(layout) {
    this._layout = layout;
    if (this.initialized) {
      this.changeLayout(layout);
    }
  }
  /**
   * Callback to invoke when paging, sorting or filtering happens in lazy mode.
   * @param {DataViewLazyLoadEvent} event - Custom lazy load event.
   * @group Emits
   */
  onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when pagination occurs.
   * @param {DataViewPageEvent} event - Custom page event.
   * @group Emits
   */
  onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when sorting occurs.
   * @param {DataViewSortEvent} event - Custom sort event.
   * @group Emits
   */
  onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when changing layout.
   * @param {DataViewLayoutChangeEvent} event - Custom layout change event.
   * @group Emits
   */
  onChangeLayout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  header;
  footer;
  templates;
  _value;
  listTemplate;
  gridTemplate;
  itemTemplate;
  headerTemplate;
  emptyMessageTemplate;
  footerTemplate;
  paginatorLeftTemplate;
  paginatorRightTemplate;
  paginatorDropdownItemTemplate;
  loadingIconTemplate;
  listIconTemplate;
  gridIconTemplate;
  filteredValue;
  filterValue;
  initialized;
  _layout = 'list';
  translationSubscription;
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_1__.TranslationKeys.EMPTY_MESSAGE);
  }
  constructor(el, cd, filterService, config) {
    this.el = el;
    this.cd = cd;
    this.filterService = filterService;
    this.config = config;
  }
  ngOnInit() {
    if (this.lazy && this.lazyLoadOnInit) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.cd.markForCheck();
    });
    this.initialized = true;
  }
  ngOnChanges(simpleChanges) {
    if (simpleChanges.value) {
      this._value = simpleChanges.value.currentValue;
      this.updateTotalRecords();
      if (!this.lazy && this.hasFilter()) {
        this.filter(this.filterValue);
      }
    }
    if (simpleChanges.sortField || simpleChanges.sortOrder) {
      //avoid triggering lazy load prior to lazy initialization at onInit
      if (!this.lazy || this.initialized) {
        this.sort();
      }
    }
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'listItem':
        case 'list':
          this.listTemplate = item.template;
          break;
        case 'gridItem':
        case 'grid':
          this.gridTemplate = item.template;
          break;
        case 'paginatorleft':
          this.paginatorLeftTemplate = item.template;
          break;
        case 'paginatorright':
          this.paginatorRightTemplate = item.template;
          break;
        case 'paginatordropdownitem':
          this.paginatorDropdownItemTemplate = item.template;
          break;
        case 'empty':
          this.emptyMessageTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        case 'loadingicon':
          this.loadingIconTemplate = item.template;
          break;
        case 'listicon':
          this.listIconTemplate = item.template;
          break;
        case 'gridicon':
          this.gridIconTemplate = item.template;
          break;
      }
    });
    this.updateItemTemplate();
  }
  updateItemTemplate() {
    switch (this.layout) {
      case 'list':
        this.itemTemplate = this.listTemplate;
        break;
      case 'grid':
        this.itemTemplate = this.gridTemplate;
        break;
    }
  }
  changeLayout(layout) {
    this._layout = layout;
    this.onChangeLayout.emit({
      layout: this.layout
    });
    this.updateItemTemplate();
    this.cd.markForCheck();
  }
  updateTotalRecords() {
    this.totalRecords = this.lazy ? this.totalRecords : this._value ? this._value.length : 0;
  }
  paginate(event) {
    this.first = event.first;
    this.rows = event.rows;
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.onPage.emit({
      first: this.first,
      rows: this.rows
    });
  }
  sort() {
    this.first = 0;
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else if (this.value) {
      this.value.sort((data1, data2) => {
        let value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data1, this.sortField);
        let value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data2, this.sortField);
        let result = null;
        if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return this.sortOrder * result;
      });
      if (this.hasFilter()) {
        this.filter(this.filterValue);
      }
    }
    this.onSort.emit({
      sortField: this.sortField,
      sortOrder: this.sortOrder
    });
  }
  isEmpty() {
    let data = this.filteredValue || this.value;
    return data == null || data.length == 0;
  }
  createLazyLoadMetadata() {
    return {
      first: this.first,
      rows: this.rows,
      sortField: this.sortField,
      sortOrder: this.sortOrder
    };
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  filter(filter, filterMatchMode = 'contains') {
    this.filterValue = filter;
    if (this.value && this.value.length) {
      let searchFields = this.filterBy.split(',');
      this.filteredValue = this.filterService.filter(this.value, searchFields, filter, filterMatchMode, this.filterLocale);
      if (this.filteredValue.length === this.value.length) {
        this.filteredValue = null;
      }
      if (this.paginator) {
        this.first = 0;
        this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
      }
      this.cd.markForCheck();
    }
  }
  hasFilter() {
    return this.filterValue && this.filterValue.trim().length > 0;
  }
  ngOnDestroy() {
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
  }
  static ɵfac = function DataView_Factory(t) {
    return new (t || DataView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeNGConfig));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DataView,
    selectors: [["p-dataView"]],
    contentQueries: function DataView_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.Header, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.Footer, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      paginator: [2, "paginator", "paginator", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      rows: [2, "rows", "rows", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      totalRecords: [2, "totalRecords", "totalRecords", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      pageLinks: [2, "pageLinks", "pageLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      rowsPerPageOptions: "rowsPerPageOptions",
      paginatorPosition: "paginatorPosition",
      paginatorStyleClass: "paginatorStyleClass",
      alwaysShowPaginator: [2, "alwaysShowPaginator", "alwaysShowPaginator", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
      paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight",
      currentPageReportTemplate: "currentPageReportTemplate",
      showCurrentPageReport: [2, "showCurrentPageReport", "showCurrentPageReport", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      showJumpToPageDropdown: [2, "showJumpToPageDropdown", "showJumpToPageDropdown", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      showFirstLastIcon: [2, "showFirstLastIcon", "showFirstLastIcon", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      showPageLinks: [2, "showPageLinks", "showPageLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      lazy: [2, "lazy", "lazy", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      lazyLoadOnInit: [2, "lazyLoadOnInit", "lazyLoadOnInit", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      emptyMessage: "emptyMessage",
      style: "style",
      styleClass: "styleClass",
      gridStyleClass: "gridStyleClass",
      trackBy: "trackBy",
      filterBy: "filterBy",
      filterLocale: "filterLocale",
      loading: [2, "loading", "loading", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      loadingIcon: "loadingIcon",
      first: [2, "first", "first", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      sortField: "sortField",
      sortOrder: [2, "sortOrder", "sortOrder", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      value: "value",
      layout: "layout"
    },
    outputs: {
      onLazyLoad: "onLazyLoad",
      onPage: "onPage",
      onSort: "onSort",
      onChangeLayout: "onChangeLayout"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c1,
    decls: 10,
    vars: 21,
    consts: [["empty", ""], [3, "ngClass", "ngStyle"], ["class", "p-dataview-loading", 4, "ngIf"], ["class", "p-dataview-header", 4, "ngIf"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "onPageChange", 4, "ngIf"], [1, "p-dataview-content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "onPageChange", 4, "ngIf"], ["class", "p-dataview-footer", 4, "ngIf"], [1, "p-dataview-loading"], [1, "p-dataview-loading-overlay", "p-component-overlay"], [3, "class", 4, "ngIf"], [3, "spin", "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "spin", "styleClass"], [1, "p-dataview-header"], ["styleClass", "p-paginator-top", 3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass"], [1, "p-dataview-emptymessage"], [4, "ngIf", "ngIfElse"], ["styleClass", "p-paginator-bottom", 3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass"], [1, "p-dataview-footer"]],
    template: function DataView_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataView_div_1_Template, 4, 2, "div", 2)(2, DataView_div_2_Template, 3, 1, "div", 3)(3, DataView_p_paginator_3_Template, 1, 17, "p-paginator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DataView_ng_container_5_Template, 1, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataView_div_7_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DataView_p_paginator_8_Template, 1, 17, "p-paginator", 8)(9, DataView_div_9_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c2, ctx.layout === "list", ctx.layout === "grid"))("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header || ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c3, ctx.paginator ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 12, ctx.filteredValue || ctx.value, ctx.lazy ? 0 : ctx.first, (ctx.lazy ? 0 : ctx.first) + ctx.rows) : ctx.filteredValue || ctx.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEmpty() && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footer || ctx.footerTemplate);
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_paginator__WEBPACK_IMPORTED_MODULE_4__.Paginator, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_5__.SpinnerIcon, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe],
    styles: ["@layer primeng{.p-dataview{position:relative}.p-dataview .p-dataview-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-dataView',
      template: `
        <div [ngClass]="{ 'p-dataview p-component': true, 'p-dataview-list': layout === 'list', 'p-dataview-grid': layout === 'grid' }" [ngStyle]="style" [class]="styleClass">
            <div class="p-dataview-loading" *ngIf="loading">
                <div class="p-dataview-loading-overlay p-component-overlay">
                    <i *ngIf="loadingIcon" [class]="'p-dataview-loading-icon pi-spin ' + loadingIcon"></i>
                    <ng-container *ngIf="!loadingIcon">
                        <SpinnerIcon *ngIf="!loadingIconTemplate" [spin]="true" [styleClass]="'p-dataview-loading-icon'" />
                        <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                    </ng-container>
                </div>
            </div>
            <div class="p-dataview-header" *ngIf="header || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)"
                styleClass="p-paginator-top"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
            ></p-paginator>

            <div class="p-dataview-content">
                <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: paginator ? (filteredValue || value | slice: (lazy ? 0 : first) : (lazy ? 0 : first) + rows) : filteredValue || value }"></ng-container>

                <div *ngIf="isEmpty() && !loading">
                    <div class="p-dataview-emptymessage">
                        <ng-container *ngIf="!emptyMessageTemplate; else empty">
                            {{ emptyMessageLabel }}
                        </ng-container>
                        <ng-container #empty *ngTemplateOutlet="emptyMessageTemplate"></ng-container>
                    </div>
                </div>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)"
                styleClass="p-paginator-bottom"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
            ></p-paginator>
            <div class="p-dataview-footer" *ngIf="footer || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-dataview{position:relative}.p-dataview .p-dataview-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_1__.FilterService
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeNGConfig
  }], {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    totalRecords: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    pageLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    rowsPerPageOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    paginatorPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    paginatorStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    alwaysShowPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    paginatorDropdownAppendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    paginatorDropdownScrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currentPageReportTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showCurrentPageReport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    showJumpToPageDropdown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    showFirstLastIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    showPageLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    lazy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    lazyLoadOnInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    emptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    gridStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterLocale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    loadingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    first: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    sortField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortOrder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    layout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onLazyLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onChangeLayout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.Header]
    }],
    footer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.Footer]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate]
    }]
  });
})();
class DataViewLayoutOptions {
  dv;
  style;
  styleClass;
  constructor(dv) {
    this.dv = dv;
  }
  changeLayout(event, layout) {
    this.dv.changeLayout(layout);
    event.preventDefault();
  }
  static ɵfac = function DataViewLayoutOptions_Factory(t) {
    return new (t || DataViewLayoutOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DataView));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DataViewLayoutOptions,
    selectors: [["p-dataViewLayoutOptions"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass"
    },
    decls: 7,
    vars: 14,
    consts: [[3, "ngClass", "ngStyle"], ["type", "button", 1, "p-button", "p-button-icon-only", 3, "click", "keydown.enter", "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet"]],
    template: function DataViewLayoutOptions_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataViewLayoutOptions_Template_button_click_1_listener($event) {
          return ctx.changeLayout($event, "list");
        })("keydown.enter", function DataViewLayoutOptions_Template_button_keydown_enter_1_listener($event) {
          return ctx.changeLayout($event, "list");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataViewLayoutOptions_BarsIcon_2_Template, 1, 0, "BarsIcon", 2)(3, DataViewLayoutOptions_3_Template, 1, 0, null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataViewLayoutOptions_Template_button_click_4_listener($event) {
          return ctx.changeLayout($event, "grid");
        })("keydown.enter", function DataViewLayoutOptions_Template_button_keydown_enter_4_listener($event) {
          return ctx.changeLayout($event, "grid");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DataViewLayoutOptions_ThLargeIcon_5_Template, 1, 0, "ThLargeIcon", 2)(6, DataViewLayoutOptions_6_Template, 1, 0, null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-dataview-layout-options p-selectbutton p-buttonset")("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c4, ctx.dv.layout === "list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dv.listIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.dv.listIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c4, ctx.dv.layout === "grid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dv.gridIconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.dv.gridIconTemplate);
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_icons_bars__WEBPACK_IMPORTED_MODULE_6__.BarsIcon, primeng_icons_thlarge__WEBPACK_IMPORTED_MODULE_7__.ThLargeIcon],
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataViewLayoutOptions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-dataViewLayoutOptions',
      template: `
        <div [ngClass]="'p-dataview-layout-options p-selectbutton p-buttonset'" [ngStyle]="style" [class]="styleClass">
            <button type="button" class="p-button p-button-icon-only" [ngClass]="{ 'p-highlight': dv.layout === 'list' }" (click)="changeLayout($event, 'list')" (keydown.enter)="changeLayout($event, 'list')">
                <BarsIcon *ngIf="!dv.listIconTemplate" />
                <ng-template *ngTemplateOutlet="dv.listIconTemplate"></ng-template></button
            ><button type="button" class="p-button p-button-icon-only" [ngClass]="{ 'p-highlight': dv.layout === 'grid' }" (click)="changeLayout($event, 'grid')" (keydown.enter)="changeLayout($event, 'grid')">
                <ThLargeIcon *ngIf="!dv.gridIconTemplate" />
                <ng-template *ngTemplateOutlet="dv.gridIconTemplate"></ng-template>
            </button>
        </div>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], () => [{
    type: DataView
  }], {
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class DataViewModule {
  static ɵfac = function DataViewModule_Factory(t) {
    return new (t || DataViewModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: DataViewModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_4__.PaginatorModule, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_5__.SpinnerIcon, primeng_icons_bars__WEBPACK_IMPORTED_MODULE_6__.BarsIcon, primeng_icons_thlarge__WEBPACK_IMPORTED_MODULE_7__.ThLargeIcon, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataViewModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_4__.PaginatorModule, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_5__.SpinnerIcon, primeng_icons_bars__WEBPACK_IMPORTED_MODULE_6__.BarsIcon, primeng_icons_thlarge__WEBPACK_IMPORTED_MODULE_7__.ThLargeIcon],
      exports: [DataView, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, DataViewLayoutOptions],
      declarations: [DataView, DataViewLayoutOptions]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 6895:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-dropdown.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DROPDOWN_VALUE_ACCESSOR: () => (/* binding */ DROPDOWN_VALUE_ACCESSOR),
/* harmony export */   Dropdown: () => (/* binding */ Dropdown),
/* harmony export */   DropdownItem: () => (/* binding */ DropdownItem),
/* harmony export */   DropdownModule: () => (/* binding */ DropdownModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/autofocus */ 7159);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/overlay */ 3576);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/scroller */ 2222);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ 405);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/icons/times */ 7727);
/* harmony import */ var primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/check */ 2289);
/* harmony import */ var primeng_icons_blank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/icons/blank */ 7243);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/icons/chevrondown */ 5804);
/* harmony import */ var primeng_icons_search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/icons/search */ 3647);
























const _c0 = a0 => ({
  height: a0
});
const _c1 = (a0, a1, a2) => ({
  "p-dropdown-item": true,
  "p-highlight": a0,
  "p-disabled": a1,
  "p-focus": a2
});
const _c2 = a0 => ({
  $implicit: a0
});
function DropdownItem_ng_container_1_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "CheckIcon", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dropdown-check-icon");
  }
}
function DropdownItem_ng_container_1_BlankIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "BlankIcon", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dropdown-blank-icon");
  }
}
function DropdownItem_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropdownItem_ng_container_1_CheckIcon_1_Template, 1, 1, "CheckIcon", 3)(2, DropdownItem_ng_container_1_BlankIcon_2_Template, 1, 1, "BlankIcon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.selected);
  }
}
function DropdownItem_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_1_0 = ctx_r0.label) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "empty");
  }
}
function DropdownItem_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c3 = ["container"];
const _c4 = ["filter"];
const _c5 = ["focusInput"];
const _c6 = ["editableInput"];
const _c7 = ["items"];
const _c8 = ["scroller"];
const _c9 = ["overlay"];
const _c10 = ["firstHiddenFocusableEl"];
const _c11 = ["lastHiddenFocusableEl"];
const _c12 = a0 => ({
  options: a0
});
const _c13 = a0 => ({
  "p-variant-filled": a0
});
const _c14 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
const _c15 = () => ({});
function Dropdown_span_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.label() === "p-emptylabel" ? "\xA0" : ctx_r2.label());
  }
}
function Dropdown_span_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 25);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r2.selectedOption));
  }
}
function Dropdown_span_2_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.label() === "p-emptylabel" ? "\xA0" : ctx_r2.label());
  }
}
function Dropdown_span_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_span_2_ng_template_4_span_0_Template, 2, 1, "span", 18);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.selectedOption);
  }
}
function Dropdown_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function Dropdown_span_2_Template_span_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputFocus($event));
    })("blur", function Dropdown_span_2_Template_span_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputBlur($event));
    })("keydown", function Dropdown_span_2_Template_span_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_span_2_ng_container_2_Template, 2, 1, "ng-container", 20)(3, Dropdown_span_2_ng_container_3_Template, 1, 4, "ng-container", 24)(4, Dropdown_span_2_ng_template_4_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_17_0;
    const defaultPlaceholder_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.inputClass)("pTooltip", ctx_r2.tooltip)("tooltipPosition", ctx_r2.tooltipPosition)("positionStyle", ctx_r2.tooltipPositionStyle)("tooltipStyleClass", ctx_r2.tooltipStyleClass)("autofocus", ctx_r2.autofocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", ctx_r2.disabled)("id", ctx_r2.inputId)("aria-label", ctx_r2.ariaLabel || (ctx_r2.label() === "p-emptylabel" ? undefined : ctx_r2.label()))("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", (tmp_17_0 = ctx_r2.overlayVisible) !== null && tmp_17_0 !== undefined ? tmp_17_0 : false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("tabindex", !ctx_r2.disabled ? ctx_r2.tabindex : -1)("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : undefined)("aria-required", ctx_r2.required)("required", ctx_r2.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.selectedItemTemplate)("ngIfElse", defaultPlaceholder_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedItemTemplate && ctx_r2.selectedOption);
  }
}
function Dropdown_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 26, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function Dropdown_input_3_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onEditableInput($event));
    })("keydown", function Dropdown_input_3_Template_input_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onKeyDown($event));
    })("focus", function Dropdown_input_3_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputFocus($event));
    })("blur", function Dropdown_input_3_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputBlur($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.inputClass)("disabled", ctx_r2.disabled)("autofocus", ctx_r2.autofocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.inputId)("maxlength", ctx_r2.maxlength)("placeholder", ctx_r2.modelValue() === undefined || ctx_r2.modelValue() === null ? ctx_r2.placeholder() : undefined)("aria-label", ctx_r2.ariaLabel || (ctx_r2.label() === "p-emptylabel" ? undefined : ctx_r2.label()))("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : undefined);
  }
}
function Dropdown_ng_container_4_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dropdown_ng_container_4_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.clear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dropdown-clear-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearicon");
  }
}
function Dropdown_ng_container_4_span_2_1_ng_template_0_Template(rf, ctx) {}
function Dropdown_ng_container_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_ng_container_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dropdown_ng_container_4_span_2_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.clear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_container_4_span_2_1_Template, 1, 0, null, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearicon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.clearIconTemplate);
  }
}
function Dropdown_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_container_4_TimesIcon_1_Template, 1, 2, "TimesIcon", 27)(2, Dropdown_ng_container_4_span_2_Template, 2, 2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.clearIconTemplate);
  }
}
function Dropdown_ng_container_6_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_container_6_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.loadingIconTemplate);
  }
}
function Dropdown_ng_container_6_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 34);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-dropdown-trigger-icon pi-spin " + ctx_r2.loadingIcon);
  }
}
function Dropdown_ng_container_6_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 35);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("p-dropdown-trigger-icon pi pi-spinner pi-spin");
  }
}
function Dropdown_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_container_6_ng_container_2_span_1_Template, 1, 1, "span", 32)(2, Dropdown_ng_container_6_ng_container_2_span_2_Template, 1, 2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loadingIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.loadingIcon);
  }
}
function Dropdown_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_container_6_ng_container_1_Template, 2, 1, "ng-container", 18)(2, Dropdown_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loadingIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.loadingIconTemplate);
  }
}
function Dropdown_ng_template_7_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 39);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.dropdownIcon);
  }
}
function Dropdown_ng_template_7_ng_container_0_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 40);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dropdown-trigger-icon");
  }
}
function Dropdown_ng_template_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_7_ng_container_0_span_1_Template, 1, 1, "span", 37)(2, Dropdown_ng_template_7_ng_container_0_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.dropdownIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.dropdownIcon);
  }
}
function Dropdown_ng_template_7_span_1_1_ng_template_0_Template(rf, ctx) {}
function Dropdown_ng_template_7_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_ng_template_7_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_template_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_7_span_1_1_Template, 1, 0, null, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.dropdownIconTemplate);
  }
}
function Dropdown_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_ng_template_7_ng_container_0_Template, 3, 2, "ng-container", 18)(1, Dropdown_ng_template_7_span_1_Template, 2, 1, "span", 36);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.dropdownIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.dropdownIconTemplate);
  }
}
function Dropdown_ng_template_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_11_div_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_11_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_11_div_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.filterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c12, ctx_r2.filterOptions));
  }
}
function Dropdown_ng_template_11_div_4_ng_template_2_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SearchIcon", 40);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dropdown-filter-icon");
  }
}
function Dropdown_ng_template_11_div_4_ng_template_2_span_4_1_ng_template_0_Template(rf, ctx) {}
function Dropdown_ng_template_11_div_4_ng_template_2_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_ng_template_11_div_4_ng_template_2_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_template_11_div_4_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_11_div_4_ng_template_2_span_4_1_Template, 1, 0, null, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.filterIconTemplate);
  }
}
function Dropdown_ng_template_11_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49)(1, "input", 50, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function Dropdown_ng_template_11_div_4_ng_template_2_Template_input_input_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onFilterInputChange($event));
    })("keydown", function Dropdown_ng_template_11_div_4_ng_template_2_Template_input_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onFilterKeyDown($event));
    })("blur", function Dropdown_ng_template_11_div_4_ng_template_2_Template_input_blur_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onFilterBlur($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dropdown_ng_template_11_div_4_ng_template_2_SearchIcon_3_Template, 1, 1, "SearchIcon", 38)(4, Dropdown_ng_template_11_div_4_ng_template_2_span_4_Template, 2, 1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2._filterValue() || "")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c13, ctx_r2.variant === "filled" || ctx_r2.config.inputStyle() === "filled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", ctx_r2.filterPlaceholder)("aria-owns", ctx_r2.id + "_list")("aria-label", ctx_r2.ariaFilterLabel)("aria-activedescendant", ctx_r2.focusedOptionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.filterIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.filterIconTemplate);
  }
}
function Dropdown_ng_template_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dropdown_ng_template_11_div_4_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_11_div_4_ng_container_1_Template, 2, 4, "ng-container", 20)(2, Dropdown_ng_template_11_div_4_ng_template_2_Template, 5, 10, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const builtInFilterElement_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.filterTemplate)("ngIfElse", builtInFilterElement_r11);
  }
}
function Dropdown_ng_template_11_p_scroller_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_11_p_scroller_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_ng_template_11_p_scroller_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 48);
  }
  if (rf & 2) {
    const items_r13 = ctx.$implicit;
    const scrollerOptions_r14 = ctx.options;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const buildInItems_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c14, items_r13, scrollerOptions_r14));
  }
}
function Dropdown_ng_template_11_p_scroller_6_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_11_p_scroller_6_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_ng_template_11_p_scroller_6_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 48);
  }
  if (rf & 2) {
    const scrollerOptions_r16 = ctx.options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c12, scrollerOptions_r16));
  }
}
function Dropdown_ng_template_11_p_scroller_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_11_p_scroller_6_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function Dropdown_ng_template_11_p_scroller_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-scroller", 53, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function Dropdown_ng_template_11_p_scroller_6_Template_p_scroller_onLazyLoad_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onLazyLoad.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_ng_template_11_p_scroller_6_ng_template_2_Template, 1, 5, "ng-template", 22)(3, Dropdown_ng_template_11_p_scroller_6_ng_container_3_Template, 2, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r2.scrollHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r2.visibleOptions())("itemSize", ctx_r2.virtualScrollItemSize || ctx_r2._itemSize)("autoSize", true)("lazy", ctx_r2.lazy)("options", ctx_r2.virtualScrollOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loaderTemplate);
  }
}
function Dropdown_ng_template_11_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_11_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_11_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const buildInItems_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c14, ctx_r2.visibleOptions(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c15)));
  }
}
function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getOptionGroupLabel(option_r17.optionGroup));
  }
}
function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 18)(3, Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, scrollerOptions_r20.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.groupTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.groupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, option_r17.optionGroup));
  }
}
function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-dropdownItem", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_1_Template_p_dropdownItem_onClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const option_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onOptionSelect($event, option_r17));
    })("onMouseEnter", function Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_1_Template_p_dropdownItem_onMouseEnter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const scrollerOptions_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onOptionMouseEnter($event, ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("option", option_r17)("checkmark", ctx_r2.checkmark)("selected", ctx_r2.isSelected(option_r17))("label", ctx_r2.getOptionLabel(option_r17))("disabled", ctx_r2.isOptionDisabled(option_r17))("template", ctx_r2.itemTemplate)("focused", ctx_r2.focusedOptionIndex() === ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("ariaPosInset", ctx_r2.getAriaPosInset(ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)))("ariaSetSize", ctx_r2.ariaSetSize);
  }
}
function Dropdown_ng_template_11_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 18)(1, Dropdown_ng_template_11_ng_template_8_ng_template_2_ng_container_1_Template, 2, 10, "ng-container", 18);
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isOptionGroup(option_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isOptionGroup(option_r17));
  }
}
function Dropdown_ng_template_11_ng_template_8_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.emptyFilterMessageLabel, " ");
  }
}
function Dropdown_ng_template_11_ng_template_8_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 13);
  }
}
function Dropdown_ng_template_11_ng_template_8_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_11_ng_template_8_li_3_ng_container_1_Template, 2, 1, "ng-container", 20)(2, Dropdown_ng_template_11_ng_template_8_li_3_ng_container_2_Template, 2, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, scrollerOptions_r20.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.emptyFilterTemplate && !ctx_r2.emptyTemplate)("ngIfElse", ctx_r2.emptyFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.emptyFilterTemplate || ctx_r2.emptyTemplate);
  }
}
function Dropdown_ng_template_11_ng_template_8_li_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.emptyMessageLabel, " ");
  }
}
function Dropdown_ng_template_11_ng_template_8_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 14);
  }
}
function Dropdown_ng_template_11_ng_template_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dropdown_ng_template_11_ng_template_8_li_4_ng_container_1_Template, 2, 1, "ng-container", 20)(2, Dropdown_ng_template_11_ng_template_8_li_4_ng_container_2_Template, 2, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, scrollerOptions_r20.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.emptyTemplate)("ngIfElse", ctx_r2.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.emptyTemplate);
  }
}
function Dropdown_ng_template_11_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 55, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_ng_template_11_ng_template_8_ng_template_2_Template, 2, 2, "ng-template", 56)(3, Dropdown_ng_template_11_ng_template_8_li_3_Template, 3, 6, "li", 57)(4, Dropdown_ng_template_11_ng_template_8_li_4_Template, 3, 6, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const items_r22 = ctx.$implicit;
    const scrollerOptions_r20 = ctx.options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](scrollerOptions_r20.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", scrollerOptions_r20.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.id + "_list")("aria-label", ctx_r2.listLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.filterValue && ctx_r2.isEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.filterValue && ctx_r2.isEmpty());
  }
}
function Dropdown_ng_template_11_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dropdown_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42)(1, "span", 43, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function Dropdown_ng_template_11_Template_span_focus_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onFirstHiddenFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dropdown_ng_template_11_ng_container_3_Template, 1, 0, "ng-container", 31)(4, Dropdown_ng_template_11_div_4_Template, 4, 2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dropdown_ng_template_11_p_scroller_6_Template, 4, 10, "p-scroller", 46)(7, Dropdown_ng_template_11_ng_container_7_Template, 2, 6, "ng-container", 18)(8, Dropdown_ng_template_11_ng_template_8_Template, 5, 8, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Dropdown_ng_template_11_ng_container_10_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 43, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function Dropdown_ng_template_11_Template_span_focus_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onLastHiddenFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.panelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-dropdown-panel p-component")("ngStyle", ctx_r2.panelStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r2.virtualScroll ? "auto" : ctx_r2.scrollHeight || "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.footerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
const DROPDOWN_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Dropdown),
  multi: true
};
class DropdownItem {
  id;
  option;
  selected;
  focused;
  label;
  disabled;
  visible;
  itemSize;
  ariaPosInset;
  ariaSetSize;
  template;
  checkmark;
  onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  onMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  ngOnInit() {}
  onOptionClick(event) {
    this.onClick.emit(event);
  }
  onOptionMouseEnter(event) {
    this.onMouseEnter.emit(event);
  }
  static ɵfac = function DropdownItem_Factory(t) {
    return new (t || DropdownItem)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DropdownItem,
    selectors: [["p-dropdownItem"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      id: "id",
      option: "option",
      selected: [2, "selected", "selected", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      focused: [2, "focused", "focused", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      label: "label",
      disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      visible: [2, "visible", "visible", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      itemSize: [2, "itemSize", "itemSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      ariaPosInset: "ariaPosInset",
      ariaSetSize: "ariaSetSize",
      template: "template",
      checkmark: [2, "checkmark", "checkmark", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    outputs: {
      onClick: "onClick",
      onMouseEnter: "onMouseEnter"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
    decls: 4,
    vars: 22,
    consts: [["role", "option", "pRipple", "", 3, "click", "mouseenter", "id", "ngStyle", "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"]],
    template: function DropdownItem_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownItem_Template_li_click_0_listener($event) {
          return ctx.onOptionClick($event);
        })("mouseenter", function DropdownItem_Template_li_mouseenter_0_listener($event) {
          return ctx.onOptionMouseEnter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropdownItem_ng_container_1_Template, 3, 2, "ng-container", 1)(2, DropdownItem_span_2_Template, 2, 1, "span", 1)(3, DropdownItem_ng_container_3_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.itemSize + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](16, _c1, ctx.selected, ctx.disabled, ctx.focused));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c2, ctx.option));
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple, primeng_icons_blank__WEBPACK_IMPORTED_MODULE_4__.BlankIcon, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon],
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-dropdownItem',
      template: `
        <li
            [id]="id"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
            role="option"
            pRipple
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            [ngStyle]="{ height: itemSize + 'px' }"
            [ngClass]="{ 'p-dropdown-item': true, 'p-highlight': selected, 'p-disabled': disabled, 'p-focus': focused }"
        >
            <ng-container *ngIf="checkmark">
                <CheckIcon *ngIf="selected" [styleClass]="'p-dropdown-check-icon'" />
                <BlankIcon *ngIf="!selected" [styleClass]="'p-dropdown-blank-icon'" />
            </ng-container>
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `,
      host: {
        class: 'p-element'
      }
    }]
  }], null, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    option: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    focused: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    ariaPosInset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaSetSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checkmark: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Dropdown also known as Select, is used to choose an item from a collection of options.
 * @group Components
 */
class Dropdown {
  el;
  renderer;
  cd;
  zone;
  filterService;
  config;
  /**
   * Unique identifier of the component
   * @group Props
   */
  id;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = '200px';
  /**
   * When specified, displays an input field to filter the items on keyup.
   * @group Props
   */
  filter;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Inline style of the overlay panel element.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @group Props
   */
  required;
  /**
   * When present, custom value instead of predefined options can be entered using the editable input field.
   * @group Props
   */
  editable;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Default text to display when no option is selected.
   * @group Props
   */
  set placeholder(val) {
    this._placeholder.set(val);
  }
  get placeholder() {
    return this._placeholder.asReadonly();
  }
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Placeholder text to show when filter input is empty.
   * @group Props
   */
  filterPlaceholder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = 'outlined';
  /**
   * Identifier of the accessible input element.
   * @group Props
   */
  inputId;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  filterFields;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Clears the filter value when hiding the dropdown.
   * @group Props
   */
  resetFilterOnHide = false;
  /**
   * Whether the selected option will be shown with a check mark.
   * @group Props
   */
  checkmark = false;
  /**
   * Icon class of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Whether the dropdown is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = 'label';
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = 'items';
  /**
   * Whether to display the first item as the label if no placeholder is defined and value is null.
   * @deprecated since v17.3.0, set initial value by model instead.
   * @group Props
   */
  autoDisplayFirst = true;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear;
  /**
   * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyFilterMessage = '';
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = '';
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
   * @group Props
   */
  overlayOptions;
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Used to define a aria label attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = 'contains';
  /**
   * Maximum number of character allows in the editable input field.
   * @group Props
   */
  maxlength;
  /**
   * Advisory information to display in a tooltip on hover.
   * @group Props
   */
  tooltip = '';
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition = 'right';
  /**
   * Type of CSS position.
   * @group Props
   */
  tooltipPositionStyle = 'absolute';
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  focusOnHover = false;
  /**
   * Determines if the option will be selected on focus.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = true;
  /**
   * Applies focus to the filter element when the overlay is shown.
   * @group Props
   */
  autofocusFilter = true;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(_disabled) {
    if (_disabled) {
      this.focused = false;
      if (this.overlayVisible) this.hide();
    }
    this._disabled = _disabled;
    if (!this.cd.destroyed) {
      this.cd.detectChanges();
    }
  }
  /**
   * Item size of item to be virtual scrolled.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.warn('The itemSize property is deprecated, use virtualScrollItemSize property instead.');
  }
  _itemSize;
  /**
   * Whether to automatically manage layering.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get autoZIndex() {
    return this._autoZIndex;
  }
  set autoZIndex(val) {
    this._autoZIndex = val;
    console.warn('The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.');
  }
  _autoZIndex;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get baseZIndex() {
    return this._baseZIndex;
  }
  set baseZIndex(val) {
    this._baseZIndex = val;
    console.warn('The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.');
  }
  _baseZIndex;
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get showTransitionOptions() {
    return this._showTransitionOptions;
  }
  set showTransitionOptions(val) {
    this._showTransitionOptions = val;
    console.warn('The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
  }
  _showTransitionOptions;
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get hideTransitionOptions() {
    return this._hideTransitionOptions;
  }
  set hideTransitionOptions(val) {
    this._hideTransitionOptions = val;
    console.warn('The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
  }
  _hideTransitionOptions;
  /**
   * When specified, filter displays with this value.
   * @group Props
   */
  get filterValue() {
    return this._filterValue();
  }
  set filterValue(val) {
    setTimeout(() => {
      this._filterValue.set(val);
    });
  }
  /**
   * An array of objects to display as the available options.
   * @group Props
   */
  get options() {
    const options = this._options();
    return options;
  }
  set options(val) {
    if (!primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.deepEquals(val, this._options())) {
      this._options.set(val);
    }
  }
  /**
   * Callback to invoke when value of dropdown changes.
   * @param {DropdownChangeEvent} event - custom change event.
   * @group Emits
   */
  onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {DropdownFilterEvent} event - custom filter event.
   * @group Emits
   */
  onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when dropdown gets focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when dropdown loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when component is clicked.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when dropdown overlay gets visible.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when dropdown overlay gets hidden.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when dropdown clears the value.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {DropdownLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  containerViewChild;
  filterViewChild;
  focusInputViewChild;
  editableInputViewChild;
  itemsViewChild;
  scroller;
  overlayViewChild;
  firstHiddenFocusableElementOnOverlay;
  lastHiddenFocusableElementOnOverlay;
  templates;
  _disabled;
  itemsWrapper;
  itemTemplate;
  groupTemplate;
  loaderTemplate;
  selectedItemTemplate;
  headerTemplate;
  filterTemplate;
  footerTemplate;
  emptyFilterTemplate;
  emptyTemplate;
  dropdownIconTemplate;
  loadingIconTemplate;
  clearIconTemplate;
  filterIconTemplate;
  filterOptions;
  _options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
  _placeholder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(undefined);
  modelValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
  value;
  onModelChange = () => {};
  onModelTouched = () => {};
  hover;
  focused;
  overlayVisible;
  optionsChanged;
  panel;
  dimensionsUpdated;
  hoveredItem;
  selectedOptionUpdated;
  _filterValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
  searchValue;
  searchIndex;
  searchTimeout;
  previousSearchChar;
  currentSearchChar;
  preventModelTouched;
  focusedOptionIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1);
  labelId;
  listId;
  clicked = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_7__.TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_7__.TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  get isVisibleClearIcon() {
    return this.modelValue() != null && this.hasSelectedOption() && this.showClear && !this.disabled;
  }
  get listLabel() {
    return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_7__.TranslationKeys.ARIA)['listLabel'];
  }
  get containerClass() {
    return {
      'p-dropdown p-component p-inputwrapper': true,
      'p-disabled': this.disabled,
      'p-dropdown-clearable': this.showClear && !this.disabled,
      'p-focus': this.focused,
      'p-inputwrapper-filled': this.modelValue() !== undefined && this.modelValue() !== null && !this.modelValue().length,
      'p-inputwrapper-focus': this.focused || this.overlayVisible,
      'p-variant-filled': this.variant === 'filled' || this.config.inputStyle() === 'filled'
    };
  }
  get inputClass() {
    const label = this.label();
    return {
      'p-dropdown-label p-inputtext': true,
      'p-placeholder': this.placeholder() && label === this.placeholder(),
      'p-dropdown-label-empty': !this.editable && !this.selectedItemTemplate && (label === undefined || label === null || label === 'p-emptylabel' || label.length === 0)
    };
  }
  get panelClass() {
    return {
      'p-dropdown-panel p-component': true,
      'p-input-filled': this.config.inputStyle() === 'filled',
      'p-ripple-disabled': this.config.ripple === false
    };
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  visibleOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    if (this._filterValue()) {
      const _filterBy = this.filterBy || this.optionLabel;
      const filteredOptions = !_filterBy && !this.filterFields && !this.optionValue ? this.options.filter(option => {
        if (option.label) {
          return option.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
        }
        return option.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
      }) : this.filterService.filter(options, this.searchFields(), this._filterValue().trim(), this.filterMatchMode, this.filterLocale);
      if (this.group) {
        const optionGroups = this.options || [];
        const filtered = [];
        optionGroups.forEach(group => {
          const groupChildren = this.getOptionGroupChildren(group);
          const filteredItems = groupChildren.filter(item => filteredOptions.includes(item));
          if (filteredItems.length > 0) filtered.push({
            ...group,
            [typeof this.optionGroupChildren === 'string' ? this.optionGroupChildren : 'items']: [...filteredItems]
          });
        });
        return this.flatOptions(filtered);
      }
      return filteredOptions;
    }
    return options;
  });
  label = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    // use  getAllVisibleAndNonVisibleOptions verses just visible options
    // this will find the selected option whether or not the user is currently filtering  because the filtered (i.e. visible) options, are a subset of all the options
    const options = this.getAllVisibleAndNonVisibleOptions();
    // use isOptionEqualsModelValue for the use case where the dropdown is initalized with a disabled option
    const selectedOptionIndex = options.findIndex(option => this.isOptionValueEqualsModelValue(option));
    return selectedOptionIndex !== -1 ? this.getOptionLabel(options[selectedOptionIndex]) : this.placeholder() || 'p-emptylabel';
  });
  filled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    if (typeof this.modelValue() === 'string') return !!this.modelValue();
    return this.label() !== 'p-emptylabel' && this.modelValue() !== undefined && this.modelValue() !== null;
  });
  selectedOption;
  editableInputValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.getOptionLabel(this.selectedOption) || this.modelValue() || '');
  constructor(el, renderer, cd, zone, filterService, config) {
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
    this.filterService = filterService;
    this.config = config;
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
      const modelValue = this.modelValue();
      const visibleOptions = this.visibleOptions();
      if (visibleOptions && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(visibleOptions)) {
        const selectedOptionIndex = this.findSelectedOptionIndex();
        if (selectedOptionIndex !== -1 || modelValue === undefined || typeof modelValue === 'string' && modelValue.length === 0 || this.isModelValueNotSet() || this.editable) {
          this.selectedOption = visibleOptions[selectedOptionIndex];
        }
      }
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isEmpty(visibleOptions) && (modelValue === undefined || this.isModelValueNotSet()) && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.selectedOption)) {
        this.selectedOption = null;
      }
      if (modelValue !== undefined && this.editable) {
        this.updateEditableLabel();
      }
      this.cd.markForCheck();
    });
  }
  isModelValueNotSet() {
    return this.modelValue() === null && !this.isOptionValueEqualsModelValue(this.selectedOption);
  }
  getAllVisibleAndNonVisibleOptions() {
    return this.group ? this.flatOptions(this.options) : this.options || [];
  }
  ngOnInit() {
    this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_6__.UniqueComponentId)();
    this.autoUpdateModel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: value => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  ngAfterViewChecked() {
    if (this.optionsChanged && this.overlayVisible) {
      this.optionsChanged = false;
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.overlayViewChild) {
            this.overlayViewChild.alignOverlay();
          }
        }, 1);
      });
    }
    if (this.selectedOptionUpdated && this.itemsWrapper) {
      let selectedItem = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, 'li.p-highlight');
      if (selectedItem) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.scrollInView(this.itemsWrapper, selectedItem);
      }
      this.selectedOptionUpdated = false;
    }
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;
        case 'selectedItem':
          this.selectedItemTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'filter':
          this.filterTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        case 'emptyfilter':
          this.emptyFilterTemplate = item.template;
          break;
        case 'empty':
          this.emptyTemplate = item.template;
          break;
        case 'group':
          this.groupTemplate = item.template;
          break;
        case 'loader':
          this.loaderTemplate = item.template;
          break;
        case 'dropdownicon':
          this.dropdownIconTemplate = item.template;
          break;
        case 'loadingicon':
          this.loadingIconTemplate = item.template;
          break;
        case 'clearicon':
          this.clearIconTemplate = item.template;
          break;
        case 'filtericon':
          this.filterIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach(o => result.push(o));
      return result;
    }, []);
  }
  autoUpdateModel() {
    if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
      this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
      this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
    }
    if (this.autoDisplayFirst && (this.modelValue() === null || this.modelValue() === undefined)) {
      if (!this.placeholder()) {
        const ind = this.findFirstOptionIndex();
        this.onOptionSelect(null, this.visibleOptions()[ind], false, true);
      }
    }
  }
  onOptionSelect(event, option, isHide = true, preventChange = false) {
    if (!this.isSelected(option)) {
      const value = this.getOptionValue(option);
      this.updateModel(value, event);
      this.focusedOptionIndex.set(this.findSelectedOptionIndex());
      preventChange === false && this.onChange.emit({
        originalEvent: event,
        value: value
      });
    }
    if (isHide) {
      this.hide(true);
    }
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  updateModel(value, event) {
    this.value = value;
    this.onModelChange(value);
    this.modelValue.set(value);
    this.selectedOptionUpdated = true;
  }
  writeValue(value) {
    if (this.filter) {
      this.resetFilter();
    }
    this.value = value;
    this.allowModelChange() && this.onModelChange(value);
    this.modelValue.set(this.value);
    this.updateEditableLabel();
    this.cd.markForCheck();
  }
  allowModelChange() {
    return this.autoDisplayFirst && !this.placeholder() && (this.modelValue() === undefined || this.modelValue() === null) && !this.editable && this.options && this.options.length;
  }
  isSelected(option) {
    return this.isValidOption(option) && this.isOptionValueEqualsModelValue(option);
  }
  isOptionValueEqualsModelValue(option) {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.equals(this.modelValue(), this.getOptionValue(option), this.equalityKey());
  }
  ngAfterViewInit() {
    if (this.editable) {
      this.updateEditableLabel();
    }
    this.updatePlaceHolderForFloatingLabel();
  }
  updatePlaceHolderForFloatingLabel() {
    const parentElement = this.el.nativeElement.parentElement;
    const isInFloatingLabel = parentElement?.classList.contains('p-float-label');
    if (parentElement && isInFloatingLabel && !this.selectedOption) {
      const label = parentElement.querySelector('label');
      if (label) {
        this._placeholder.set(label.textContent);
      }
    }
  }
  updateEditableLabel() {
    if (this.editableInputViewChild) {
      this.editableInputViewChild.nativeElement.value = this.getOptionLabel(this.selectedOption) || this.modelValue() || '';
    }
  }
  clearEditableLabel() {
    if (this.editableInputViewChild) {
      this.editableInputViewChild.nativeElement.value = '';
    }
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)['index'];
  }
  getOptionLabel(option) {
    return this.optionLabel !== undefined && this.optionLabel !== null ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(option, this.optionLabel) : option && option.label !== undefined ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue && this.optionValue !== null ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== undefined ? option.value : option;
  }
  isOptionDisabled(option) {
    if (this.getOptionValue(this.modelValue()) === this.getOptionValue(option) || this.getOptionLabel(this.modelValue() === this.getOptionLabel(option)) && option.disabled === false) {
      return false;
    } else {
      return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : option && option.disabled !== undefined ? option.disabled : false;
    }
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel !== undefined && this.optionGroupLabel !== null ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== undefined ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren !== undefined && this.optionGroupChildren !== null ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter(option => this.isOptionGroup(option)).length : index) + 1;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter(option => !this.isOptionGroup(option)).length;
  }
  /**
   * Callback to invoke on filter reset.
   * @group Method
   */
  resetFilter() {
    this._filterValue.set(null);
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = '';
    }
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  onContainerClick(event) {
    if (this.disabled || this.readonly || this.loading) {
      return;
    }
    this.focusInputViewChild?.nativeElement.focus({
      preventScroll: true
    });
    if (event.target.tagName === 'INPUT' || event.target.getAttribute('data-pc-section') === 'clearicon' || event.target.closest('[data-pc-section="clearicon"]')) {
      return;
    } else if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
      this.overlayVisible ? this.hide(true) : this.show(true);
    }
    this.onClick.emit(event);
    this.clicked.set(true);
    this.cd.detectChanges();
  }
  isEmpty() {
    return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
  }
  onEditableInput(event) {
    const value = event.target.value;
    this.searchValue = '';
    const matched = this.searchOptions(event, value);
    !matched && this.focusedOptionIndex.set(-1);
    this.onModelChange(value);
    this.updateModel(value, event);
    setTimeout(() => {
      this.onChange.emit({
        originalEvent: event,
        value: value
      });
    }, 1);
    !this.overlayVisible && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(value) && this.show();
  }
  /**
   * Displays the panel.
   * @group Method
   */
  show(isFocus) {
    this.overlayVisible = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex();
    this.focusedOptionIndex.set(focusedOptionIndex);
    if (isFocus) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(this.focusInputViewChild?.nativeElement);
    }
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    if (event.toState === 'visible') {
      this.itemsWrapper = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? '.p-scroller' : '.p-dropdown-items-wrapper');
      this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
      if (this.options && this.options.length) {
        if (this.virtualScroll) {
          const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
          if (selectedIndex !== -1) {
            this.scroller?.scrollToIndex(selectedIndex);
          }
        } else {
          let selectedListItem = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.itemsWrapper, '.p-dropdown-item.p-highlight');
          if (selectedListItem) {
            selectedListItem.scrollIntoView({
              block: 'nearest',
              inline: 'nearest'
            });
          }
        }
      }
      if (this.filterViewChild && this.filterViewChild.nativeElement) {
        this.preventModelTouched = true;
        if (this.autofocusFilter && !this.editable) {
          this.filterViewChild.nativeElement.focus();
        }
      }
      this.onShow.emit(event);
    }
    if (event.toState === 'void') {
      this.itemsWrapper = null;
      this.onModelTouched();
      this.onHide.emit(event);
    }
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide(isFocus) {
    this.overlayVisible = false;
    this.focusedOptionIndex.set(-1);
    this.clicked.set(false);
    this.searchValue = '';
    if (this.overlayOptions?.mode === 'modal') {
      primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.unblockBodyScroll();
    }
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
    if (isFocus) {
      if (this.focusInputViewChild) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(this.focusInputViewChild?.nativeElement);
      }
      if (this.editable && this.editableInputViewChild) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(this.editableInputViewChild?.nativeElement);
      }
    }
    this.cd.markForCheck();
  }
  onInputFocus(event) {
    if (this.disabled) {
      // For ScreenReaders
      return;
    }
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    if (!this.preventModelTouched) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  onKeyDown(event, search) {
    if (this.disabled || this.readonly || this.loading) {
      return;
    }
    switch (event.code) {
      //down
      case 'ArrowDown':
        this.onArrowDownKey(event);
        break;
      //up
      case 'ArrowUp':
        this.onArrowUpKey(event, this.editable);
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
        this.onArrowLeftKey(event, this.editable);
        break;
      case 'Delete':
        this.onDeleteKey(event);
        break;
      case 'Home':
        this.onHomeKey(event, this.editable);
        break;
      case 'End':
        this.onEndKey(event, this.editable);
        break;
      case 'PageDown':
        this.onPageDownKey(event);
        break;
      case 'PageUp':
        this.onPageUpKey(event);
        break;
      //space
      case 'Space':
        this.onSpaceKey(event, search);
        break;
      //enter
      case 'Enter':
      case 'NumpadEnter':
        this.onEnterKey(event);
        break;
      //escape and tab
      case 'Escape':
        this.onEscapeKey(event);
        break;
      case 'Tab':
        this.onTabKey(event);
        break;
      case 'Backspace':
        this.onBackspaceKey(event, this.editable);
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        //NOOP
        break;
      default:
        if (!event.metaKey && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isPrintableCharacter(event.key)) {
          !this.overlayVisible && this.show();
          !this.editable && this.searchOptions(event, event.key);
        }
        break;
    }
    this.clicked.set(false);
  }
  onFilterKeyDown(event) {
    switch (event.code) {
      case 'ArrowDown':
        this.onArrowDownKey(event);
        break;
      case 'ArrowUp':
        this.onArrowUpKey(event, true);
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
        this.onArrowLeftKey(event, true);
        break;
      case 'Home':
        this.onHomeKey(event, true);
        break;
      case 'End':
        this.onEndKey(event, true);
        break;
      case 'Enter':
      case 'NumpadEnter':
        this.onEnterKey(event, true);
        break;
      case 'Escape':
        this.onEscapeKey(event);
        break;
      case 'Tab':
        this.onTabKey(event, true);
        break;
      default:
        break;
    }
  }
  onFilterBlur(event) {
    this.focusedOptionIndex.set(-1);
  }
  onArrowDownKey(event) {
    if (!this.overlayVisible) {
      this.show();
      this.editable && this.changeFocusedOptionIndex(event, this.findSelectedOptionIndex());
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    // const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
    // this.changeFocusedOptionIndex(event, optionIndex);
    // !this.overlayVisible && this.show();
    event.preventDefault();
    event.stopPropagation();
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
      if (this.selectOnFocus) {
        const option = this.visibleOptions()[index];
        this.onOptionSelect(event, option, false);
      }
    }
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: 'nearest',
          inline: 'nearest'
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  hasSelectedOption() {
    return this.modelValue() !== undefined;
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex(option => this.isValidOption(option));
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex(option => this.isValidSelectedOption(option)) : -1;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex(option => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), option => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findLastOptionIndex() {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.findLastIndex(this.visibleOptions(), option => this.isValidOption(option));
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  isValidOption(option) {
    return option !== undefined && option !== null && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionGroup(option) {
    return this.optionGroupLabel !== undefined && this.optionGroupLabel !== null && option.optionGroup !== undefined && option.optionGroup !== null && option.group;
  }
  onArrowUpKey(event, pressedInInputText = false) {
    if (event.altKey && !pressedInInputText) {
      if (this.focusedOptionIndex() !== -1) {
        const option = this.visibleOptions()[this.focusedOptionIndex()];
        this.onOptionSelect(event, option);
      }
      this.overlayVisible && this.hide();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
    event.stopPropagation();
  }
  onArrowLeftKey(event, pressedInInputText = false) {
    pressedInInputText && this.focusedOptionIndex.set(-1);
  }
  onDeleteKey(event) {
    if (this.showClear) {
      this.clear(event);
      event.preventDefault();
    }
  }
  onHomeKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      const target = event.currentTarget;
      if (event.shiftKey) {
        target.setSelectionRange(0, target.value.length);
      } else {
        target.setSelectionRange(0, 0);
        this.focusedOptionIndex.set(-1);
      }
    } else {
      this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onEndKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      const target = event.currentTarget;
      if (event.shiftKey) {
        target.setSelectionRange(0, target.value.length);
      } else {
        const len = target.value.length;
        target.setSelectionRange(len, len);
        this.focusedOptionIndex.set(-1);
      }
    } else {
      this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onSpaceKey(event, pressedInInputText = false) {
    !this.editable && !pressedInInputText && this.onEnterKey(event);
  }
  onEnterKey(event, pressedInInput = false) {
    if (!this.overlayVisible) {
      this.focusedOptionIndex.set(-1);
      this.onArrowDownKey(event);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        const option = this.visibleOptions()[this.focusedOptionIndex()];
        this.onOptionSelect(event, option);
      }
      !pressedInInput && this.hide();
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    this.overlayVisible && this.hide(true);
    event.preventDefault();
  }
  onTabKey(event, pressedInInputText = false) {
    if (!pressedInInputText) {
      if (this.overlayVisible && this.hasFocusableElements()) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
        event.preventDefault();
      } else {
        if (this.focusedOptionIndex() !== -1 && this.overlayVisible) {
          const option = this.visibleOptions()[this.focusedOptionIndex()];
          this.onOptionSelect(event, option);
        }
        this.overlayVisible && this.hide(this.filter);
      }
    }
    event.stopPropagation();
  }
  onFirstHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getFirstFocusableElement(this.overlayViewChild.el?.nativeElement, ':not(.p-hidden-focusable)') : this.focusInputViewChild?.nativeElement;
    primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(focusableEl);
  }
  onLastHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getLastFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(focusableEl);
  }
  hasFocusableElements() {
    return primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
  }
  onBackspaceKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      !this.overlayVisible && this.show();
    }
  }
  searchFields() {
    return this.filterBy?.split(',') || this.filterFields || [this.optionLabel];
  }
  searchOptions(event, char) {
    this.searchValue = (this.searchValue || '') + char;
    let optionIndex = -1;
    let matched = false;
    if (this.focusedOptionIndex() !== -1) {
      optionIndex = this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(option => this.isOptionMatched(option));
      optionIndex = optionIndex === -1 ? this.visibleOptions().slice(0, this.focusedOptionIndex()).findIndex(option => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex();
    } else {
      optionIndex = this.visibleOptions().findIndex(option => this.isOptionMatched(option));
    }
    if (optionIndex !== -1) {
      matched = true;
    }
    if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
      optionIndex = this.findFirstFocusedOptionIndex();
    }
    if (optionIndex !== -1) {
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = '';
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  isOptionMatched(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
  }
  onFilterInputChange(event) {
    let value = event.target.value;
    this._filterValue.set(value);
    this.focusedOptionIndex.set(-1);
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue()
    });
    !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
    setTimeout(() => {
      this.overlayViewChild.alignOverlay();
    });
    this.cd.markForCheck();
  }
  applyFocus() {
    if (this.editable) primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.el.nativeElement, '.p-dropdown-label.p-inputtext').focus();else primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(this.focusInputViewChild?.nativeElement);
  }
  /**
   * Applies focus.
   * @group Method
   */
  focus() {
    this.applyFocus();
  }
  /**
   * Clears the model.
   * @group Method
   */
  clear(event) {
    this.updateModel(null, event);
    this.clearEditableLabel();
    this.onModelTouched();
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.onClear.emit(event);
    this.resetFilter();
  }
  static ɵfac = function Dropdown_Factory(t) {
    return new (t || Dropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeNGConfig));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Dropdown,
    selectors: [["p-dropdown"]],
    contentQueries: function Dropdown_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Dropdown_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c10, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c11, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filterViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusInputViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editableInputViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlayViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
      }
    },
    hostAttrs: [1, "p-element", "p-inputwrapper"],
    hostVars: 4,
    hostBindings: function Dropdown_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled())("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible);
      }
    },
    inputs: {
      id: "id",
      scrollHeight: "scrollHeight",
      filter: [2, "filter", "filter", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      name: "name",
      style: "style",
      panelStyle: "panelStyle",
      styleClass: "styleClass",
      panelStyleClass: "panelStyleClass",
      readonly: [2, "readonly", "readonly", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      required: [2, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      editable: [2, "editable", "editable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      appendTo: "appendTo",
      tabindex: [2, "tabindex", "tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      placeholder: "placeholder",
      loadingIcon: "loadingIcon",
      filterPlaceholder: "filterPlaceholder",
      filterLocale: "filterLocale",
      variant: "variant",
      inputId: "inputId",
      dataKey: "dataKey",
      filterBy: "filterBy",
      filterFields: "filterFields",
      autofocus: [2, "autofocus", "autofocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      resetFilterOnHide: [2, "resetFilterOnHide", "resetFilterOnHide", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      checkmark: [2, "checkmark", "checkmark", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      dropdownIcon: "dropdownIcon",
      loading: [2, "loading", "loading", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      optionGroupLabel: "optionGroupLabel",
      optionGroupChildren: "optionGroupChildren",
      autoDisplayFirst: [2, "autoDisplayFirst", "autoDisplayFirst", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      group: [2, "group", "group", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      showClear: [2, "showClear", "showClear", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      lazy: [2, "lazy", "lazy", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      overlayOptions: "overlayOptions",
      ariaFilterLabel: "ariaFilterLabel",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      filterMatchMode: "filterMatchMode",
      maxlength: [2, "maxlength", "maxlength", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      focusOnHover: [2, "focusOnHover", "focusOnHover", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      selectOnFocus: [2, "selectOnFocus", "selectOnFocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      autofocusFilter: [2, "autofocusFilter", "autofocusFilter", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      disabled: "disabled",
      itemSize: "itemSize",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      filterValue: "filterValue",
      options: "options"
    },
    outputs: {
      onChange: "onChange",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClick: "onClick",
      onShow: "onShow",
      onHide: "onHide",
      onClear: "onClear",
      onLazyLoad: "onLazyLoad"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([DROPDOWN_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
    decls: 12,
    vars: 20,
    consts: [["container", ""], ["elseBlock", ""], ["overlay", ""], ["focusInput", ""], ["defaultPlaceholder", ""], ["editableInput", ""], ["firstHiddenFocusableEl", ""], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], ["builtInFilterElement", ""], ["filter", ""], ["scroller", ""], ["items", ""], ["emptyFilter", ""], ["empty", ""], [3, "click", "ngClass", "ngStyle"], ["role", "combobox", "pAutoFocus", "", 3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "autofocus", "focus", "blur", "keydown", 4, "ngIf"], ["type", "text", "aria-haspopup", "listbox", "pAutoFocus", "", 3, "ngClass", "disabled", "autofocus", "input", "keydown", "focus", "blur", 4, "ngIf"], [4, "ngIf"], ["role", "button", "aria-label", "dropdown trigger", "aria-haspopup", "listbox", 1, "p-dropdown-trigger"], [4, "ngIf", "ngIfElse"], [3, "visibleChange", "onAnimationStart", "onHide", "visible", "options", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions"], ["pTemplate", "content"], ["role", "combobox", "pAutoFocus", "", 3, "focus", "blur", "keydown", "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "autofocus"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "text", "aria-haspopup", "listbox", "pAutoFocus", "", 3, "input", "keydown", "focus", "blur", "ngClass", "disabled", "autofocus"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-dropdown-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "styleClass"], [1, "p-dropdown-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["aria-hidden", "true", 3, "class", 4, "ngIf"], ["aria-hidden", "true", 3, "ngClass"], ["aria-hidden", "true"], ["class", "p-dropdown-trigger-icon", 4, "ngIf"], ["class", "p-dropdown-trigger-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-dropdown-trigger-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-dropdown-trigger-icon"], [3, "ngClass", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus"], ["class", "p-dropdown-header", 3, "click", 4, "ngIf"], [1, "p-dropdown-items-wrapper"], [3, "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], [1, "p-dropdown-header", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-dropdown-filter-container"], ["type", "text", "role", "searchbox", "autocomplete", "off", 1, "p-dropdown-filter", "p-inputtext", "p-component", 3, "input", "keydown", "blur", "value", "ngClass"], ["class", "p-dropdown-filter-icon", 4, "ngIf"], [1, "p-dropdown-filter-icon"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "lazy", "options"], ["pTemplate", "loader"], ["role", "listbox", 1, "p-dropdown-items", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-dropdown-empty-message", "role", "option", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-dropdown-item-group", 3, "ngStyle"], [3, "onClick", "onMouseEnter", "id", "option", "checkmark", "selected", "label", "disabled", "template", "focused", "ariaPosInset", "ariaSetSize"], ["role", "option", 1, "p-dropdown-empty-message", 3, "ngStyle"]],
    template: function Dropdown_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dropdown_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onContainerClick($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dropdown_span_2_Template, 6, 20, "span", 16)(3, Dropdown_input_3_Template, 2, 8, "input", 17)(4, Dropdown_ng_container_4_Template, 3, 2, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dropdown_ng_container_6_Template, 3, 2, "ng-container", 20)(7, Dropdown_ng_template_7_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-overlay", 21, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("visibleChange", function Dropdown_Template_p_overlay_visibleChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAnimationStart", function Dropdown_Template_p_overlay_onAnimationStart_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onOverlayAnimationStart($event));
        })("onHide", function Dropdown_Template_p_overlay_onHide_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Dropdown_ng_template_11_Template, 13, 17, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_10_0;
        const elseBlock_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass)("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisibleClearIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", (tmp_10_0 = ctx.overlayVisible) !== null && tmp_10_0 !== undefined ? tmp_10_0 : false)("data-pc-section", "trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", elseBlock_r23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("visible", ctx.overlayVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("autoZIndex", ctx.autoZIndex)("baseZIndex", ctx.baseZIndex)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_overlay__WEBPACK_IMPORTED_MODULE_9__.Overlay, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.Tooltip, primeng_scroller__WEBPACK_IMPORTED_MODULE_11__.Scroller, primeng_autofocus__WEBPACK_IMPORTED_MODULE_12__.AutoFocus, primeng_icons_times__WEBPACK_IMPORTED_MODULE_13__.TimesIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_14__.ChevronDownIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_15__.SearchIcon, DropdownItem],
    styles: ["@layer primeng{.p-dropdown{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-dropdown-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-dropdown-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-dropdown-label-empty{overflow:hidden;opacity:0}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-dropdown-item-group{cursor:auto}.p-dropdown-items{margin:0;padding:0;list-style-type:none}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}.p-float-label .p-dropdown .p-placeholder{opacity:0}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dropdown, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-dropdown',
      template: `
        <div #container [attr.id]="id" [ngClass]="containerClass" (click)="onContainerClick($event)" [ngStyle]="style" [class]="styleClass">
            <span
                #focusInput
                [ngClass]="inputClass"
                *ngIf="!editable"
                [pTooltip]="tooltip"
                [tooltipPosition]="tooltipPosition"
                [positionStyle]="tooltipPositionStyle"
                [tooltipStyleClass]="tooltipStyleClass"
                [attr.aria-disabled]="disabled"
                [attr.id]="inputId"
                role="combobox"
                [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-haspopup]="'listbox'"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                [attr.tabindex]="!disabled ? tabindex : -1"
                pAutoFocus
                [autofocus]="autofocus"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keydown)="onKeyDown($event)"
                [attr.aria-required]="required"
                [attr.required]="required"
            >
                <ng-container *ngIf="!selectedItemTemplate; else defaultPlaceholder">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</ng-container>
                <ng-container *ngIf="selectedItemTemplate && selectedOption" [ngTemplateOutlet]="selectedItemTemplate" [ngTemplateOutletContext]="{ $implicit: selectedOption }"></ng-container>
                <ng-template #defaultPlaceholder>
                    <span *ngIf="!selectedOption">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</span>
                </ng-template>
            </span>
            <input
                *ngIf="editable"
                #editableInput
                type="text"
                [attr.id]="inputId"
                [attr.maxlength]="maxlength"
                [ngClass]="inputClass"
                [disabled]="disabled"
                aria-haspopup="listbox"
                [attr.placeholder]="modelValue() === undefined || modelValue() === null ? placeholder() : undefined"
                [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
                (input)="onEditableInput($event)"
                (keydown)="onKeyDown($event)"
                pAutoFocus
                [autofocus]="autofocus"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
            />
            <ng-container *ngIf="isVisibleClearIcon">
                <TimesIcon [styleClass]="'p-dropdown-clear-icon'" (click)="clear($event)" *ngIf="!clearIconTemplate" [attr.data-pc-section]="'clearicon'" />
                <span class="p-dropdown-clear-icon" (click)="clear($event)" *ngIf="clearIconTemplate" [attr.data-pc-section]="'clearicon'">
                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <div class="p-dropdown-trigger" role="button" aria-label="dropdown trigger" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible ?? false" [attr.data-pc-section]="'trigger'">
                <ng-container *ngIf="loading; else elseBlock">
                    <ng-container *ngIf="loadingIconTemplate">
                        <ng-container *ngTemplateOutlet="loadingIconTemplate"></ng-container>
                    </ng-container>
                    <ng-container *ngIf="!loadingIconTemplate">
                        <span *ngIf="loadingIcon" [ngClass]="'p-dropdown-trigger-icon pi-spin ' + loadingIcon" aria-hidden="true"></span>
                        <span *ngIf="!loadingIcon" [class]="'p-dropdown-trigger-icon pi pi-spinner pi-spin'" aria-hidden="true"></span>
                    </ng-container>
                </ng-container>

                <ng-template #elseBlock>
                    <ng-container *ngIf="!dropdownIconTemplate">
                        <span class="p-dropdown-trigger-icon" *ngIf="dropdownIcon" [ngClass]="dropdownIcon"></span>
                        <ChevronDownIcon *ngIf="!dropdownIcon" [styleClass]="'p-dropdown-trigger-icon'" />
                    </ng-container>
                    <span *ngIf="dropdownIconTemplate" class="p-dropdown-trigger-icon">
                        <ng-template *ngTemplateOutlet="dropdownIconTemplate"></ng-template>
                    </span>
                </ng-template>
            </div>

            <p-overlay
                #overlay
                [(visible)]="overlayVisible"
                [options]="overlayOptions"
                [target]="'@parent'"
                [appendTo]="appendTo"
                [autoZIndex]="autoZIndex"
                [baseZIndex]="baseZIndex"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
                (onAnimationStart)="onOverlayAnimationStart($event)"
                (onHide)="hide()"
            >
                <ng-template pTemplate="content">
                    <div [ngClass]="'p-dropdown-panel p-component'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                        <span
                            #firstHiddenFocusableEl
                            role="presentation"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onFirstHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        >
                        </span>
                        <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                        <div class="p-dropdown-header" *ngIf="filter" (click)="$event.stopPropagation()">
                            <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                                <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                            </ng-container>
                            <ng-template #builtInFilterElement>
                                <div class="p-dropdown-filter-container">
                                    <input
                                        #filter
                                        type="text"
                                        role="searchbox"
                                        autocomplete="off"
                                        [value]="_filterValue() || ''"
                                        class="p-dropdown-filter p-inputtext p-component"
                                        [ngClass]="{ 'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled' }"
                                        [attr.placeholder]="filterPlaceholder"
                                        [attr.aria-owns]="id + '_list'"
                                        (input)="onFilterInputChange($event)"
                                        [attr.aria-label]="ariaFilterLabel"
                                        [attr.aria-activedescendant]="focusedOptionId"
                                        (keydown)="onFilterKeyDown($event)"
                                        (blur)="onFilterBlur($event)"
                                    />
                                    <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="'p-dropdown-filter-icon'" />
                                    <span *ngIf="filterIconTemplate" class="p-dropdown-filter-icon">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                                    </span>
                                </div>
                            </ng-template>
                        </div>
                        <div class="p-dropdown-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                            <p-scroller
                                *ngIf="virtualScroll"
                                #scroller
                                [items]="visibleOptions()"
                                [style]="{ height: scrollHeight }"
                                [itemSize]="virtualScrollItemSize || _itemSize"
                                [autoSize]="true"
                                [lazy]="lazy"
                                (onLazyLoad)="onLazyLoad.emit($event)"
                                [options]="virtualScrollOptions"
                            >
                                <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                                </ng-template>
                                <ng-container *ngIf="loaderTemplate">
                                    <ng-template pTemplate="loader" let-scrollerOptions="options">
                                        <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                    </ng-template>
                                </ng-container>
                            </p-scroller>
                            <ng-container *ngIf="!virtualScroll">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                            </ng-container>

                            <ng-template #buildInItems let-items let-scrollerOptions="options">
                                <ul #items [attr.id]="id + '_list'" [attr.aria-label]="listLabel" class="p-dropdown-items" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox">
                                    <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                        <ng-container *ngIf="isOptionGroup(option)">
                                            <li class="p-dropdown-item-group" [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                                <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                                <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                            </li>
                                        </ng-container>
                                        <ng-container *ngIf="!isOptionGroup(option)">
                                            <p-dropdownItem
                                                [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                                [option]="option"
                                                [checkmark]="checkmark"
                                                [selected]="isSelected(option)"
                                                [label]="getOptionLabel(option)"
                                                [disabled]="isOptionDisabled(option)"
                                                [template]="itemTemplate"
                                                [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                                [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                                [ariaSetSize]="ariaSetSize"
                                                (onClick)="onOptionSelect($event, option)"
                                                (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                            ></p-dropdownItem>
                                        </ng-container>
                                    </ng-template>
                                    <li *ngIf="filterValue && isEmpty()" class="p-dropdown-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                        <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                            {{ emptyFilterMessageLabel }}
                                        </ng-container>
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                                    </li>
                                    <li *ngIf="!filterValue && isEmpty()" class="p-dropdown-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                        <ng-container *ngIf="!emptyTemplate; else empty">
                                            {{ emptyMessageLabel }}
                                        </ng-container>
                                        <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                                    </li>
                                </ul>
                            </ng-template>
                        </div>
                        <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                        <span
                            #lastHiddenFocusableEl
                            role="presentation"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onLastHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        ></span>
                    </div>
                </ng-template>
            </p-overlay>
        </div>
    `,
      host: {
        class: 'p-element p-inputwrapper',
        '[class.p-inputwrapper-filled]': 'filled()',
        '[class.p-inputwrapper-focus]': 'focused || overlayVisible'
      },
      providers: [DROPDOWN_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      styles: ["@layer primeng{.p-dropdown{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-dropdown-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-dropdown-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-dropdown-label-empty{overflow:hidden;opacity:0}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-dropdown-item-group{cursor:auto}.p-dropdown-items{margin:0;padding:0;list-style-type:none}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}.p-float-label .p-dropdown .p-placeholder{opacity:0}}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_7__.FilterService
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeNGConfig
  }], {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loadingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterLocale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    variant: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dataKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterFields: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autofocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    resetFilterOnHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    checkmark: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    dropdownIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    optionLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionGroupLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionGroupChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoDisplayFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    group: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    showClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    emptyFilterMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    emptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lazy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    virtualScrollOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    overlayOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaFilterLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterMatchMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxlength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipPositionStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    focusOnHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    selectOnFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    autoOptionFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    autofocusFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onLazyLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    containerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['container']
    }],
    filterViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['filter']
    }],
    focusInputViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['focusInput']
    }],
    editableInputViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['editableInput']
    }],
    itemsViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['items']
    }],
    scroller: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['scroller']
    }],
    overlayViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['overlay']
    }],
    firstHiddenFocusableElementOnOverlay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['firstHiddenFocusableEl']
    }],
    lastHiddenFocusableElementOnOverlay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['lastHiddenFocusableEl']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate]
    }]
  });
})();
class DropdownModule {
  static ɵfac = function DropdownModule_Factory(t) {
    return new (t || DropdownModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: DropdownModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_7__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.TooltipModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_11__.ScrollerModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_12__.AutoFocusModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_13__.TimesIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_14__.ChevronDownIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_15__.SearchIcon, primeng_icons_blank__WEBPACK_IMPORTED_MODULE_4__.BlankIcon, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon, primeng_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_7__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_11__.ScrollerModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_7__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.TooltipModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_11__.ScrollerModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_12__.AutoFocusModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_13__.TimesIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_14__.ChevronDownIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_15__.SearchIcon, primeng_icons_blank__WEBPACK_IMPORTED_MODULE_4__.BlankIcon, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon],
      exports: [Dropdown, primeng_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_7__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_11__.ScrollerModule],
      declarations: [Dropdown, DropdownItem]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 8540:
/*!*************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angledoubleleft.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleDoubleLeftIcon: () => (/* binding */ AngleDoubleLeftIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



class AngleDoubleLeftIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
  static ɵfac = /* @__PURE__ */(() => {
    let ɵAngleDoubleLeftIcon_BaseFactory;
    return function AngleDoubleLeftIcon_Factory(t) {
      return (ɵAngleDoubleLeftIcon_BaseFactory || (ɵAngleDoubleLeftIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleDoubleLeftIcon)))(t || AngleDoubleLeftIcon);
    };
  })();
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AngleDoubleLeftIcon,
    selectors: [["AngleDoubleLeftIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z", "fill", "currentColor"]],
    template: function AngleDoubleLeftIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngleDoubleLeftIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'AngleDoubleLeftIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4607:
/*!**************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angledoubleright.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleDoubleRightIcon: () => (/* binding */ AngleDoubleRightIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



class AngleDoubleRightIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
  static ɵfac = /* @__PURE__ */(() => {
    let ɵAngleDoubleRightIcon_BaseFactory;
    return function AngleDoubleRightIcon_Factory(t) {
      return (ɵAngleDoubleRightIcon_BaseFactory || (ɵAngleDoubleRightIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleDoubleRightIcon)))(t || AngleDoubleRightIcon);
    };
  })();
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AngleDoubleRightIcon,
    selectors: [["AngleDoubleRightIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z", "fill", "currentColor"]],
    template: function AngleDoubleRightIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngleDoubleRightIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'AngleDoubleRightIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 203:
/*!*******************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angleleft.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleLeftIcon: () => (/* binding */ AngleLeftIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



class AngleLeftIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
  static ɵfac = /* @__PURE__ */(() => {
    let ɵAngleLeftIcon_BaseFactory;
    return function AngleLeftIcon_Factory(t) {
      return (ɵAngleLeftIcon_BaseFactory || (ɵAngleLeftIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleLeftIcon)))(t || AngleLeftIcon);
    };
  })();
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AngleLeftIcon,
    selectors: [["AngleLeftIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z", "fill", "currentColor"]],
    template: function AngleLeftIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngleLeftIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'AngleLeftIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1147:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angleup.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleUpIcon: () => (/* binding */ AngleUpIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



class AngleUpIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
  static ɵfac = /* @__PURE__ */(() => {
    let ɵAngleUpIcon_BaseFactory;
    return function AngleUpIcon_Factory(t) {
      return (ɵAngleUpIcon_BaseFactory || (ɵAngleUpIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleUpIcon)))(t || AngleUpIcon);
    };
  })();
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AngleUpIcon,
    selectors: [["AngleUpIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z", "fill", "currentColor"]],
    template: function AngleUpIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngleUpIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'AngleUpIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 5961:
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-bars.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarsIcon: () => (/* binding */ BarsIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



class BarsIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
  static ɵfac = /* @__PURE__ */(() => {
    let ɵBarsIcon_BaseFactory;
    return function BarsIcon_Factory(t) {
      return (ɵBarsIcon_BaseFactory || (ɵBarsIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](BarsIcon)))(t || BarsIcon);
    };
  })();
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BarsIcon,
    selectors: [["BarsIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z", "fill", "currentColor"]],
    template: function BarsIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BarsIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'BarsIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 7243:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-blank.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlankIcon: () => (/* binding */ BlankIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);



class BlankIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
  static ɵfac = /* @__PURE__ */(() => {
    let ɵBlankIcon_BaseFactory;
    return function BlankIcon_Factory(t) {
      return (ɵBlankIcon_BaseFactory || (ɵBlankIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](BlankIcon)))(t || BlankIcon);
    };
  })();
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BlankIcon,
    selectors: [["BlankIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 0,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "v-bind", "pti()"], ["width", "1", "height", "1", "fill", "currentColor", "fill-opacity", "0"]],
    template: function BlankIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "rect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlankIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'BlankIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="pti()">
            <rect width="1" height="1" fill="currentColor" fill-opacity="0" />
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 7965:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-minus.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinusIcon: () => (/* binding */ MinusIcon)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);




class MinusIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
  static ɵfac = /* @__PURE__ */(() => {
    let ɵMinusIcon_BaseFactory;
    return function MinusIcon_Factory(t) {
      return (ɵMinusIcon_BaseFactory || (ɵMinusIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MinusIcon)))(t || MinusIcon);
    };
  })();
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MinusIcon,
    selectors: [["MinusIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z", "fill", "currentColor"]],
    template: function MinusIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MinusIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'MinusIcon',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3647:
/*!****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-search.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchIcon: () => (/* binding */ SearchIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




class SearchIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
  }
  static ɵfac = /* @__PURE__ */(() => {
    let ɵSearchIcon_BaseFactory;
    return function SearchIcon_Factory(t) {
      return (ɵSearchIcon_BaseFactory || (ɵSearchIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SearchIcon)))(t || SearchIcon);
    };
  })();
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SearchIcon,
    selectors: [["SearchIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SearchIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SearchIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'SearchIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 576:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-thlarge.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThLargeIcon: () => (/* binding */ ThLargeIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 9436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




class ThLargeIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
  }
  static ɵfac = /* @__PURE__ */(() => {
    let ɵThLargeIcon_BaseFactory;
    return function ThLargeIcon_Factory(t) {
      return (ɵThLargeIcon_BaseFactory || (ɵThLargeIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ThLargeIcon)))(t || ThLargeIcon);
    };
  })();
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ThLargeIcon,
    selectors: [["ThLargeIcon"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1.90909 6.36364H4.45455C4.96087 6.36364 5.44645 6.1625 5.80448 5.80448C6.1625 5.44645 6.36364 4.96087 6.36364 4.45455V1.90909C6.36364 1.40277 6.1625 0.917184 5.80448 0.55916C5.44645 0.201136 4.96087 0 4.45455 0H1.90909C1.40277 0 0.917184 0.201136 0.55916 0.55916C0.201136 0.917184 0 1.40277 0 1.90909V4.45455C0 4.96087 0.201136 5.44645 0.55916 5.80448C0.917184 6.1625 1.40277 6.36364 1.90909 6.36364ZM1.46154 1.46154C1.58041 1.34268 1.741 1.27492 1.90909 1.27273H4.45455C4.62264 1.27492 4.78322 1.34268 4.90209 1.46154C5.02096 1.58041 5.08871 1.741 5.09091 1.90909V4.45455C5.08871 4.62264 5.02096 4.78322 4.90209 4.90209C4.78322 5.02096 4.62264 5.08871 4.45455 5.09091H1.90909C1.741 5.08871 1.58041 5.02096 1.46154 4.90209C1.34268 4.78322 1.27492 4.62264 1.27273 4.45455V1.90909C1.27492 1.741 1.34268 1.58041 1.46154 1.46154ZM1.90909 14H4.45455C4.96087 14 5.44645 13.7989 5.80448 13.4408C6.1625 13.0828 6.36364 12.5972 6.36364 12.0909V9.54544C6.36364 9.03912 6.1625 8.55354 5.80448 8.19551C5.44645 7.83749 4.96087 7.63635 4.45455 7.63635H1.90909C1.40277 7.63635 0.917184 7.83749 0.55916 8.19551C0.201136 8.55354 0 9.03912 0 9.54544V12.0909C0 12.5972 0.201136 13.0828 0.55916 13.4408C0.917184 13.7989 1.40277 14 1.90909 14ZM1.46154 9.0979C1.58041 8.97903 1.741 8.91128 1.90909 8.90908H4.45455C4.62264 8.91128 4.78322 8.97903 4.90209 9.0979C5.02096 9.21677 5.08871 9.37735 5.09091 9.54544V12.0909C5.08871 12.259 5.02096 12.4196 4.90209 12.5384C4.78322 12.6573 4.62264 12.7251 4.45455 12.7273H1.90909C1.741 12.7251 1.58041 12.6573 1.46154 12.5384C1.34268 12.4196 1.27492 12.259 1.27273 12.0909V9.54544C1.27492 9.37735 1.34268 9.21677 1.46154 9.0979ZM12.0909 6.36364H9.54544C9.03912 6.36364 8.55354 6.1625 8.19551 5.80448C7.83749 5.44645 7.63635 4.96087 7.63635 4.45455V1.90909C7.63635 1.40277 7.83749 0.917184 8.19551 0.55916C8.55354 0.201136 9.03912 0 9.54544 0H12.0909C12.5972 0 13.0828 0.201136 13.4408 0.55916C13.7989 0.917184 14 1.40277 14 1.90909V4.45455C14 4.96087 13.7989 5.44645 13.4408 5.80448C13.0828 6.1625 12.5972 6.36364 12.0909 6.36364ZM9.54544 1.27273C9.37735 1.27492 9.21677 1.34268 9.0979 1.46154C8.97903 1.58041 8.91128 1.741 8.90908 1.90909V4.45455C8.91128 4.62264 8.97903 4.78322 9.0979 4.90209C9.21677 5.02096 9.37735 5.08871 9.54544 5.09091H12.0909C12.259 5.08871 12.4196 5.02096 12.5384 4.90209C12.6573 4.78322 12.7251 4.62264 12.7273 4.45455V1.90909C12.7251 1.741 12.6573 1.58041 12.5384 1.46154C12.4196 1.34268 12.259 1.27492 12.0909 1.27273H9.54544ZM9.54544 14H12.0909C12.5972 14 13.0828 13.7989 13.4408 13.4408C13.7989 13.0828 14 12.5972 14 12.0909V9.54544C14 9.03912 13.7989 8.55354 13.4408 8.19551C13.0828 7.83749 12.5972 7.63635 12.0909 7.63635H9.54544C9.03912 7.63635 8.55354 7.83749 8.19551 8.19551C7.83749 8.55354 7.63635 9.03912 7.63635 9.54544V12.0909C7.63635 12.5972 7.83749 13.0828 8.19551 13.4408C8.55354 13.7989 9.03912 14 9.54544 14ZM9.0979 9.0979C9.21677 8.97903 9.37735 8.91128 9.54544 8.90908H12.0909C12.259 8.91128 12.4196 8.97903 12.5384 9.0979C12.6573 9.21677 12.7251 9.37735 12.7273 9.54544V12.0909C12.7251 12.259 12.6573 12.4196 12.5384 12.5384C12.4196 12.6573 12.259 12.7251 12.0909 12.7273H9.54544C9.37735 12.7251 9.21677 12.6573 9.0979 12.5384C8.97903 12.4196 8.91128 12.259 8.90908 12.0909V9.54544C8.91128 9.37735 8.97903 9.21677 9.0979 9.0979Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function ThLargeIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ThLargeIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'ThLargeIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.90909 6.36364H4.45455C4.96087 6.36364 5.44645 6.1625 5.80448 5.80448C6.1625 5.44645 6.36364 4.96087 6.36364 4.45455V1.90909C6.36364 1.40277 6.1625 0.917184 5.80448 0.55916C5.44645 0.201136 4.96087 0 4.45455 0H1.90909C1.40277 0 0.917184 0.201136 0.55916 0.55916C0.201136 0.917184 0 1.40277 0 1.90909V4.45455C0 4.96087 0.201136 5.44645 0.55916 5.80448C0.917184 6.1625 1.40277 6.36364 1.90909 6.36364ZM1.46154 1.46154C1.58041 1.34268 1.741 1.27492 1.90909 1.27273H4.45455C4.62264 1.27492 4.78322 1.34268 4.90209 1.46154C5.02096 1.58041 5.08871 1.741 5.09091 1.90909V4.45455C5.08871 4.62264 5.02096 4.78322 4.90209 4.90209C4.78322 5.02096 4.62264 5.08871 4.45455 5.09091H1.90909C1.741 5.08871 1.58041 5.02096 1.46154 4.90209C1.34268 4.78322 1.27492 4.62264 1.27273 4.45455V1.90909C1.27492 1.741 1.34268 1.58041 1.46154 1.46154ZM1.90909 14H4.45455C4.96087 14 5.44645 13.7989 5.80448 13.4408C6.1625 13.0828 6.36364 12.5972 6.36364 12.0909V9.54544C6.36364 9.03912 6.1625 8.55354 5.80448 8.19551C5.44645 7.83749 4.96087 7.63635 4.45455 7.63635H1.90909C1.40277 7.63635 0.917184 7.83749 0.55916 8.19551C0.201136 8.55354 0 9.03912 0 9.54544V12.0909C0 12.5972 0.201136 13.0828 0.55916 13.4408C0.917184 13.7989 1.40277 14 1.90909 14ZM1.46154 9.0979C1.58041 8.97903 1.741 8.91128 1.90909 8.90908H4.45455C4.62264 8.91128 4.78322 8.97903 4.90209 9.0979C5.02096 9.21677 5.08871 9.37735 5.09091 9.54544V12.0909C5.08871 12.259 5.02096 12.4196 4.90209 12.5384C4.78322 12.6573 4.62264 12.7251 4.45455 12.7273H1.90909C1.741 12.7251 1.58041 12.6573 1.46154 12.5384C1.34268 12.4196 1.27492 12.259 1.27273 12.0909V9.54544C1.27492 9.37735 1.34268 9.21677 1.46154 9.0979ZM12.0909 6.36364H9.54544C9.03912 6.36364 8.55354 6.1625 8.19551 5.80448C7.83749 5.44645 7.63635 4.96087 7.63635 4.45455V1.90909C7.63635 1.40277 7.83749 0.917184 8.19551 0.55916C8.55354 0.201136 9.03912 0 9.54544 0H12.0909C12.5972 0 13.0828 0.201136 13.4408 0.55916C13.7989 0.917184 14 1.40277 14 1.90909V4.45455C14 4.96087 13.7989 5.44645 13.4408 5.80448C13.0828 6.1625 12.5972 6.36364 12.0909 6.36364ZM9.54544 1.27273C9.37735 1.27492 9.21677 1.34268 9.0979 1.46154C8.97903 1.58041 8.91128 1.741 8.90908 1.90909V4.45455C8.91128 4.62264 8.97903 4.78322 9.0979 4.90209C9.21677 5.02096 9.37735 5.08871 9.54544 5.09091H12.0909C12.259 5.08871 12.4196 5.02096 12.5384 4.90209C12.6573 4.78322 12.7251 4.62264 12.7273 4.45455V1.90909C12.7251 1.741 12.6573 1.58041 12.5384 1.46154C12.4196 1.34268 12.259 1.27492 12.0909 1.27273H9.54544ZM9.54544 14H12.0909C12.5972 14 13.0828 13.7989 13.4408 13.4408C13.7989 13.0828 14 12.5972 14 12.0909V9.54544C14 9.03912 13.7989 8.55354 13.4408 8.19551C13.0828 7.83749 12.5972 7.63635 12.0909 7.63635H9.54544C9.03912 7.63635 8.55354 7.83749 8.19551 8.19551C7.83749 8.55354 7.63635 9.03912 7.63635 9.54544V12.0909C7.63635 12.5972 7.83749 13.0828 8.19551 13.4408C8.55354 13.7989 9.03912 14 9.54544 14ZM9.0979 9.0979C9.21677 8.97903 9.37735 8.91128 9.54544 8.90908H12.0909C12.259 8.91128 12.4196 8.97903 12.5384 9.0979C12.6573 9.21677 12.7251 9.37735 12.7273 9.54544V12.0909C12.7251 12.259 12.6573 12.4196 12.5384 12.5384C12.4196 12.6573 12.259 12.7251 12.0909 12.7273H9.54544C9.37735 12.7251 9.21677 12.6573 9.0979 12.5384C8.97903 12.4196 8.91128 12.259 8.90908 12.0909V9.54544C8.91128 9.37735 8.97903 9.21677 9.0979 9.0979Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1759:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-inputnumber.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INPUTNUMBER_VALUE_ACCESSOR: () => (/* binding */ INPUTNUMBER_VALUE_ACCESSOR),
/* harmony export */   InputNumber: () => (/* binding */ InputNumber),
/* harmony export */   InputNumberModule: () => (/* binding */ InputNumberModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/autofocus */ 7159);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/angledown */ 8776);
/* harmony import */ var primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/angleup */ 1147);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/times */ 7727);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 8361);
















const _c0 = ["input"];
const _c1 = (a0, a1, a2) => ({
  "p-inputnumber p-component": true,
  "p-inputnumber-buttons-stacked": a0,
  "p-inputnumber-buttons-horizontal": a1,
  "p-inputnumber-buttons-vertical": a2
});
const _c2 = () => ({
  "p-inputnumber-button p-inputnumber-button-up": true
});
const _c3 = () => ({
  "p-inputnumber-button p-inputnumber-button-down": true
});
function InputNumber_ng_container_3_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputNumber_ng_container_3_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-inputnumber-clear-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearIcon");
  }
}
function InputNumber_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {}
function InputNumber_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputNumber_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputNumber_ng_container_3_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_ng_container_3_span_2_1_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.clearIconTemplate);
  }
}
function InputNumber_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_ng_container_3_TimesIcon_1_Template, 1, 2, "TimesIcon", 6)(2, InputNumber_ng_container_3_span_2_Template, 2, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.clearIconTemplate);
  }
}
function InputNumber_span_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.incrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_span_4_ng_container_3_AngleUpIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleUpIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_span_4_ng_container_3_2_ng_template_0_Template(rf, ctx) {}
function InputNumber_span_4_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputNumber_span_4_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_span_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_span_4_ng_container_3_AngleUpIcon_1_Template, 1, 1, "AngleUpIcon", 3)(2, InputNumber_span_4_ng_container_3_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.incrementButtonIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.incrementButtonIconTemplate);
  }
}
function InputNumber_span_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.decrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_span_4_ng_container_6_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_span_4_ng_container_6_2_ng_template_0_Template(rf, ctx) {}
function InputNumber_span_4_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputNumber_span_4_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_span_4_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_span_4_ng_container_6_AngleDownIcon_1_Template, 1, 1, "AngleDownIcon", 3)(2, InputNumber_span_4_ng_container_6_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.decrementButtonIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.decrementButtonIconTemplate);
  }
}
function InputNumber_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function InputNumber_span_4_Template_button_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseDown($event));
    })("mouseup", function InputNumber_span_4_Template_button_mouseup_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseUp());
    })("mouseleave", function InputNumber_span_4_Template_button_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseLeave());
    })("keydown", function InputNumber_span_4_Template_button_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonKeyDown($event));
    })("keyup", function InputNumber_span_4_Template_button_keyup_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonKeyUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputNumber_span_4_span_2_Template, 1, 2, "span", 13)(3, InputNumber_span_4_ng_container_3_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function InputNumber_span_4_Template_button_mousedown_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseDown($event));
    })("mouseup", function InputNumber_span_4_Template_button_mouseup_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseUp());
    })("mouseleave", function InputNumber_span_4_Template_button_mouseleave_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseLeave());
    })("keydown", function InputNumber_span_4_Template_button_keydown_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonKeyDown($event));
    })("keyup", function InputNumber_span_4_Template_button_keyup_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonKeyUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputNumber_span_4_span_5_Template, 1, 2, "span", 13)(6, InputNumber_span_4_ng_container_6_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "buttonGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.incrementButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2))("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", "incrementbutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.incrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.incrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.decrementButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3))("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", ctx_r2.decrementbutton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.decrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.decrementButtonIcon);
  }
}
function InputNumber_button_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.incrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_button_5_ng_container_2_AngleUpIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleUpIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_button_5_ng_container_2_2_ng_template_0_Template(rf, ctx) {}
function InputNumber_button_5_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputNumber_button_5_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_button_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_button_5_ng_container_2_AngleUpIcon_1_Template, 1, 1, "AngleUpIcon", 3)(2, InputNumber_button_5_ng_container_2_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.incrementButtonIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.incrementButtonIconTemplate);
  }
}
function InputNumber_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function InputNumber_button_5_Template_button_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseDown($event));
    })("mouseup", function InputNumber_button_5_Template_button_mouseup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseUp());
    })("mouseleave", function InputNumber_button_5_Template_button_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseLeave());
    })("keydown", function InputNumber_button_5_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonKeyDown($event));
    })("keyup", function InputNumber_button_5_Template_button_keyup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonKeyUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_button_5_span_1_Template, 1, 2, "span", 13)(2, InputNumber_button_5_ng_container_2_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.incrementButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2))("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", "incrementbutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.incrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.incrementButtonIcon);
  }
}
function InputNumber_button_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.decrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_button_6_ng_container_2_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_button_6_ng_container_2_2_ng_template_0_Template(rf, ctx) {}
function InputNumber_button_6_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputNumber_button_6_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_button_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_button_6_ng_container_2_AngleDownIcon_1_Template, 1, 1, "AngleDownIcon", 3)(2, InputNumber_button_6_ng_container_2_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.decrementButtonIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.decrementButtonIconTemplate);
  }
}
function InputNumber_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function InputNumber_button_6_Template_button_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseDown($event));
    })("mouseup", function InputNumber_button_6_Template_button_mouseup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseUp());
    })("mouseleave", function InputNumber_button_6_Template_button_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseLeave());
    })("keydown", function InputNumber_button_6_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonKeyDown($event));
    })("keyup", function InputNumber_button_6_Template_button_keyup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonKeyUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_button_6_span_1_Template, 1, 2, "span", 13)(2, InputNumber_button_6_ng_container_2_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.decrementButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3))("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", "decrementbutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.decrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.decrementButtonIcon);
  }
}
const INPUTNUMBER_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => InputNumber),
  multi: true
};
/**
 * InputNumber is an input component to provide numerical input.
 * @group Components
 */
class InputNumber {
  document;
  el;
  cd;
  injector;
  /**
   * Displays spinner buttons.
   * @group Props
   */
  showButtons = false;
  /**
   * Whether to format the value.
   * @group Props
   */
  format = true;
  /**
   * Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".
   * @group Props
   */
  buttonLayout = 'stacked';
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Advisory information to display on input.
   * @group Props
   */
  placeholder;
  /**
   * Size of the input field.
   * @group Props
   */
  size;
  /**
   * Maximum number of character allows in the input field.
   * @group Props
   */
  maxlength;
  /**
   * Specifies tab order of the element.
   * @group Props
   */
  tabindex;
  /**
   * Title text of the input text.
   * @group Props
   */
  title;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Used to indicate that user input is required on an element before a form can be submitted.
   * @group Props
   */
  ariaRequired;
  /**
   * Name of the input field.
   * @group Props
   */
  name;
  /**
   * Indicates that whether the input field is required.
   * @group Props
   */
  required;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  autocomplete;
  /**
   * Mininum boundary value.
   * @group Props
   */
  min;
  /**
   * Maximum boundary value.
   * @group Props
   */
  max;
  /**
   * Style class of the increment button.
   * @group Props
   */
  incrementButtonClass;
  /**
   * Style class of the decrement button.
   * @group Props
   */
  decrementButtonClass;
  /**
   * Style class of the increment button.
   * @group Props
   */
  incrementButtonIcon;
  /**
   * Style class of the decrement button.
   * @group Props
   */
  decrementButtonIcon;
  /**
   * When present, it specifies that an input field is read-only.
   * @group Props
   */
  readonly = false;
  /**
   * Step factor to increment/decrement the value.
   * @group Props
   */
  step = 1;
  /**
   * Determines whether the input field is empty.
   * @group Props
   */
  allowEmpty = true;
  /**
   * Locale to be used in formatting.
   * @group Props
   */
  locale;
  /**
   * The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". See Locale Negotiation for details.
   * @group Props
   */
  localeMatcher;
  /**
   * Defines the behavior of the component, valid values are "decimal" and "currency".
   * @group Props
   */
  mode = 'decimal';
  /**
   * The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB. There is no default value; if the style is "currency", the currency property must be provided.
   * @group Props
   */
  currency;
  /**
   * How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, ü"code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".
   * @group Props
   */
  currencyDisplay;
  /**
   * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.
   * @group Props
   */
  useGrouping = true;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = 'outlined';
  /**
   * The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
   * @group Props
   */
  minFractionDigits;
  /**
   * The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
   * @group Props
   */
  maxFractionDigits;
  /**
   * Text to display before the value.
   * @group Props
   */
  prefix;
  /**
   * Text to display after the value.
   * @group Props
   */
  suffix;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(disabled) {
    if (disabled) this.focused = false;
    this._disabled = disabled;
    if (this.timer) this.clearTimer();
  }
  /**
   * Callback to invoke on input.
   * @param {InputNumberInputEvent} event - Custom input event.
   * @group Emits
   */
  onInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when the component receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke on input key press.
   * @param {KeyboardEvent} event - Keyboard event.
   * @group Emits
   */
  onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when clear token is clicked.
   * @group Emits
   */
  onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  input;
  templates;
  clearIconTemplate;
  incrementButtonIconTemplate;
  decrementButtonIconTemplate;
  value;
  onModelChange = () => {};
  onModelTouched = () => {};
  focused;
  initialized;
  groupChar = '';
  prefixChar = '';
  suffixChar = '';
  isSpecialChar;
  timer;
  lastValue;
  _numeral;
  numberFormat;
  _decimal;
  _decimalChar;
  _group;
  _minusSign;
  _currency;
  _prefix;
  _suffix;
  _index;
  _disabled;
  ngControl = null;
  constructor(document, el, cd, injector) {
    this.document = document;
    this.el = el;
    this.cd = cd;
    this.injector = injector;
  }
  ngOnChanges(simpleChange) {
    const props = ['locale', 'localeMatcher', 'mode', 'currency', 'currencyDisplay', 'useGrouping', 'minFractionDigits', 'maxFractionDigits', 'prefix', 'suffix'];
    if (props.some(p => !!simpleChange[p])) {
      this.updateConstructParser();
    }
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'clearicon':
          this.clearIconTemplate = item.template;
          break;
        case 'incrementbuttonicon':
          this.incrementButtonIconTemplate = item.template;
          break;
        case 'decrementbuttonicon':
          this.decrementButtonIconTemplate = item.template;
          break;
      }
    });
  }
  ngOnInit() {
    this.ngControl = this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, null, {
      optional: true
    });
    this.constructParser();
    this.initialized = true;
  }
  getOptions() {
    return {
      localeMatcher: this.localeMatcher,
      style: this.mode,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: this.useGrouping,
      minimumFractionDigits: this.minFractionDigits ? this.minFractionDigits : undefined,
      maximumFractionDigits: this.maxFractionDigits ? this.maxFractionDigits : undefined
    };
  }
  constructParser() {
    this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
    const numerals = [...new Intl.NumberFormat(this.locale, {
      useGrouping: false
    }).format(9876543210)].reverse();
    const index = new Map(numerals.map((d, i) => [d, i]));
    this._numeral = new RegExp(`[${numerals.join('')}]`, 'g');
    this._group = this.getGroupingExpression();
    this._minusSign = this.getMinusSignExpression();
    this._currency = this.getCurrencyExpression();
    this._decimal = this.getDecimalExpression();
    this._decimalChar = this.getDecimalChar();
    this._suffix = this.getSuffixExpression();
    this._prefix = this.getPrefixExpression();
    this._index = d => index.get(d);
  }
  updateConstructParser() {
    if (this.initialized) {
      this.constructParser();
    }
  }
  escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
  getDecimalExpression() {
    const decimalChar = this.getDecimalChar();
    return new RegExp(`[${decimalChar}]`, 'g');
  }
  getDecimalChar() {
    const formatter = new Intl.NumberFormat(this.locale, {
      ...this.getOptions(),
      useGrouping: false
    });
    return formatter.format(1.1).replace(this._currency, '').trim().replace(this._numeral, '');
  }
  getGroupingExpression() {
    const formatter = new Intl.NumberFormat(this.locale, {
      useGrouping: true
    });
    this.groupChar = formatter.format(1000000).trim().replace(this._numeral, '').charAt(0);
    return new RegExp(`[${this.groupChar}]`, 'g');
  }
  getMinusSignExpression() {
    const formatter = new Intl.NumberFormat(this.locale, {
      useGrouping: false
    });
    return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, '')}]`, 'g');
  }
  getCurrencyExpression() {
    if (this.currency) {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: 'currency',
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      return new RegExp(`[${formatter.format(1).replace(/\s/g, '').replace(this._numeral, '').replace(this._group, '')}]`, 'g');
    }
    return new RegExp(`[]`, 'g');
  }
  getPrefixExpression() {
    if (this.prefix) {
      this.prefixChar = this.prefix;
    } else {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay
      });
      this.prefixChar = formatter.format(1).split('1')[0];
    }
    return new RegExp(`${this.escapeRegExp(this.prefixChar || '')}`, 'g');
  }
  getSuffixExpression() {
    if (this.suffix) {
      this.suffixChar = this.suffix;
    } else {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      this.suffixChar = formatter.format(1).split('1')[1];
    }
    return new RegExp(`${this.escapeRegExp(this.suffixChar || '')}`, 'g');
  }
  formatValue(value) {
    if (value != null) {
      if (value === '-') {
        // Minus sign
        return value;
      }
      if (this.format) {
        let formatter = new Intl.NumberFormat(this.locale, this.getOptions());
        let formattedValue = formatter.format(value);
        if (this.prefix && value != this.prefix) {
          formattedValue = this.prefix + formattedValue;
        }
        if (this.suffix && value != this.suffix) {
          formattedValue = formattedValue + this.suffix;
        }
        return formattedValue;
      }
      return value.toString();
    }
    return '';
  }
  parseValue(text) {
    const suffixRegex = new RegExp(this._suffix, '');
    const prefixRegex = new RegExp(this._prefix, '');
    const currencyRegex = new RegExp(this._currency, '');
    let filteredText = text.replace(suffixRegex, '').replace(prefixRegex, '').trim().replace(/\s/g, '').replace(currencyRegex, '').replace(this._group, '').replace(this._minusSign, '-').replace(this._decimal, '.').replace(this._numeral, this._index);
    if (filteredText) {
      if (filteredText === '-')
        // Minus sign
        return filteredText;
      let parsedValue = +filteredText;
      return isNaN(parsedValue) ? null : parsedValue;
    }
    return null;
  }
  repeat(event, interval, dir) {
    if (this.readonly) {
      return;
    }
    let i = interval || 500;
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.repeat(event, 40, dir);
    }, i);
    this.spin(event, dir);
  }
  spin(event, dir) {
    let step = this.step * dir;
    let currentValue = this.parseValue(this.input?.nativeElement.value) || 0;
    let newValue = this.validateValue(currentValue + step);
    if (this.maxlength && this.maxlength < this.formatValue(newValue).length) {
      return;
    }
    this.updateInput(newValue, null, 'spin', null);
    this.updateModel(event, newValue);
    this.handleOnInput(event, currentValue, newValue);
  }
  clear() {
    this.value = null;
    this.onModelChange(this.value);
    this.onClear.emit();
  }
  onUpButtonMouseDown(event) {
    if (event.button === 2) {
      this.clearTimer();
      return;
    }
    if (!this.disabled) {
      this.input?.nativeElement.focus();
      this.repeat(event, null, 1);
      event.preventDefault();
    }
  }
  onUpButtonMouseUp() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onUpButtonMouseLeave() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onUpButtonKeyDown(event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.repeat(event, null, 1);
    }
  }
  onUpButtonKeyUp() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonMouseDown(event) {
    if (event.button === 2) {
      this.clearTimer();
      return;
    }
    if (!this.disabled) {
      this.input?.nativeElement.focus();
      this.repeat(event, null, -1);
      event.preventDefault();
    }
  }
  onDownButtonMouseUp() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonMouseLeave() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonKeyUp() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonKeyDown(event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.repeat(event, null, -1);
    }
  }
  onUserInput(event) {
    if (this.readonly) {
      return;
    }
    if (this.isSpecialChar) {
      event.target.value = this.lastValue;
    }
    this.isSpecialChar = false;
  }
  onInputKeyDown(event) {
    if (this.readonly) {
      return;
    }
    this.lastValue = event.target.value;
    if (event.shiftKey || event.altKey) {
      this.isSpecialChar = true;
      return;
    }
    let selectionStart = event.target.selectionStart;
    let selectionEnd = event.target.selectionEnd;
    let inputValue = event.target.value;
    let newValueStr = null;
    if (event.altKey) {
      event.preventDefault();
    }
    switch (event.key) {
      case 'ArrowUp':
        this.spin(event, 1);
        event.preventDefault();
        break;
      case 'ArrowDown':
        this.spin(event, -1);
        event.preventDefault();
        break;
      case 'ArrowLeft':
        for (let index = selectionStart; index <= inputValue.length; index++) {
          const previousCharIndex = index === 0 ? 0 : index - 1;
          if (this.isNumeralChar(inputValue.charAt(previousCharIndex))) {
            this.input.nativeElement.setSelectionRange(index, index);
            break;
          }
        }
        break;
      case 'ArrowRight':
        for (let index = selectionEnd; index >= 0; index--) {
          if (this.isNumeralChar(inputValue.charAt(index))) {
            this.input.nativeElement.setSelectionRange(index, index);
            break;
          }
        }
        break;
      case 'Tab':
      case 'Enter':
        newValueStr = this.validateValue(this.parseValue(this.input.nativeElement.value));
        this.input.nativeElement.value = this.formatValue(newValueStr);
        this.input.nativeElement.setAttribute('aria-valuenow', newValueStr);
        this.updateModel(event, newValueStr);
        break;
      case 'Backspace':
        {
          event.preventDefault();
          if (selectionStart === selectionEnd) {
            if (selectionStart == 1 && this.prefix || selectionStart == inputValue.length && this.suffix) {
              break;
            }
            const deleteChar = inputValue.charAt(selectionStart - 1);
            const {
              decimalCharIndex,
              decimalCharIndexWithoutPrefix
            } = this.getDecimalCharIndexes(inputValue);
            if (this.isNumeralChar(deleteChar)) {
              const decimalLength = this.getDecimalLength(inputValue);
              if (this._group.test(deleteChar)) {
                this._group.lastIndex = 0;
                newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
              } else if (this._decimal.test(deleteChar)) {
                this._decimal.lastIndex = 0;
                if (decimalLength) {
                  this.input?.nativeElement.setSelectionRange(selectionStart - 1, selectionStart - 1);
                } else {
                  newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                }
              } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? '' : '0';
                newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
              } else if (decimalCharIndexWithoutPrefix === 1) {
                newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
                newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
              } else {
                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
              }
            } else if (this.mode === 'currency' && deleteChar.search(this._currency) != -1) {
              newValueStr = inputValue.slice(1);
            }
            this.updateValue(event, newValueStr, null, 'delete-single');
          } else {
            newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, null, 'delete-range');
          }
          break;
        }
      case 'Delete':
        event.preventDefault();
        if (selectionStart === selectionEnd) {
          if (selectionStart == 0 && this.prefix || selectionStart == inputValue.length - 1 && this.suffix) {
            break;
          }
          const deleteChar = inputValue.charAt(selectionStart);
          const {
            decimalCharIndex,
            decimalCharIndexWithoutPrefix
          } = this.getDecimalCharIndexes(inputValue);
          if (this.isNumeralChar(deleteChar)) {
            const decimalLength = this.getDecimalLength(inputValue);
            if (this._group.test(deleteChar)) {
              this._group.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
            } else if (this._decimal.test(deleteChar)) {
              this._decimal.lastIndex = 0;
              if (decimalLength) {
                this.input?.nativeElement.setSelectionRange(selectionStart + 1, selectionStart + 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
              }
            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? '' : '0';
              newValueStr = inputValue.slice(0, selectionStart) + insertedText + inputValue.slice(selectionStart + 1);
            } else if (decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1);
              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
            } else {
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
            }
          }
          this.updateValue(event, newValueStr, null, 'delete-back-single');
        } else {
          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, null, 'delete-range');
        }
        break;
      case 'Home':
        if (this.min) {
          this.updateModel(event, this.min);
          event.preventDefault();
        }
        break;
      case 'End':
        if (this.max) {
          this.updateModel(event, this.max);
          event.preventDefault();
        }
        break;
      default:
        break;
    }
    this.onKeyDown.emit(event);
  }
  onInputKeyPress(event) {
    if (this.readonly) {
      return;
    }
    let code = event.which || event.keyCode;
    let char = String.fromCharCode(code);
    let isDecimalSign = this.isDecimalSign(char);
    const isMinusSign = this.isMinusSign(char);
    if (code != 13) {
      event.preventDefault();
    }
    if (!isDecimalSign && event.code === 'NumpadDecimal') {
      isDecimalSign = true;
      char = this._decimalChar;
      code = char.charCodeAt(0);
    }
    const newValue = this.parseValue(this.input.nativeElement.value + char);
    const newValueStr = newValue != null ? newValue.toString() : '';
    if (this.maxlength && this.getSelectedText()?.length == this.maxlength) {
      this.insert(event, char, {
        isDecimalSign,
        isMinusSign
      });
      return;
    }
    if (this.maxlength && newValueStr.length > this.maxlength) {
      return;
    }
    if (48 <= code && code <= 57 || isMinusSign || isDecimalSign) {
      this.insert(event, char, {
        isDecimalSign,
        isMinusSign
      });
    }
  }
  getSelectedText() {
    return window?.getSelection()?.toString().replaceAll(/[^0-9']/g, '') || '';
  }
  onPaste(event) {
    if (!this.disabled && !this.readonly) {
      event.preventDefault();
      let data = (event.clipboardData || this.document.defaultView['clipboardData']).getData('Text');
      if (data) {
        if (this.maxlength) {
          data = data.toString().substring(0, this.maxlength);
        }
        let filteredData = this.parseValue(data);
        if (filteredData != null) {
          this.insert(event, filteredData.toString());
        }
      }
    }
  }
  allowMinusSign() {
    return this.min == null || this.min < 0;
  }
  isMinusSign(char) {
    if (this._minusSign.test(char) || char === '-') {
      this._minusSign.lastIndex = 0;
      return true;
    }
    return false;
  }
  isDecimalSign(char) {
    if (this._decimal.test(char)) {
      this._decimal.lastIndex = 0;
      return true;
    }
    return false;
  }
  isDecimalMode() {
    return this.mode === 'decimal';
  }
  getDecimalCharIndexes(val) {
    let decimalCharIndex = val.search(this._decimal);
    this._decimal.lastIndex = 0;
    const filteredVal = val.replace(this._prefix, '').trim().replace(/\s/g, '').replace(this._currency, '');
    const decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
    this._decimal.lastIndex = 0;
    return {
      decimalCharIndex,
      decimalCharIndexWithoutPrefix
    };
  }
  getCharIndexes(val) {
    const decimalCharIndex = val.search(this._decimal);
    this._decimal.lastIndex = 0;
    const minusCharIndex = val.search(this._minusSign);
    this._minusSign.lastIndex = 0;
    const suffixCharIndex = val.search(this._suffix);
    this._suffix.lastIndex = 0;
    const currencyCharIndex = val.search(this._currency);
    this._currency.lastIndex = 0;
    return {
      decimalCharIndex,
      minusCharIndex,
      suffixCharIndex,
      currencyCharIndex
    };
  }
  insert(event, text, sign = {
    isDecimalSign: false,
    isMinusSign: false
  }) {
    const minusCharIndexOnText = text.search(this._minusSign);
    this._minusSign.lastIndex = 0;
    if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
      return;
    }
    let selectionStart = this.input?.nativeElement.selectionStart;
    let selectionEnd = this.input?.nativeElement.selectionEnd;
    let inputValue = this.input?.nativeElement.value.trim();
    const {
      decimalCharIndex,
      minusCharIndex,
      suffixCharIndex,
      currencyCharIndex
    } = this.getCharIndexes(inputValue);
    let newValueStr;
    if (sign.isMinusSign) {
      if (selectionStart === 0) {
        newValueStr = inputValue;
        if (minusCharIndex === -1 || selectionEnd !== 0) {
          newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
        }
        this.updateValue(event, newValueStr, text, 'insert');
      }
    } else if (sign.isDecimalSign) {
      if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
        this.updateValue(event, inputValue, text, 'insert');
      } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event, newValueStr, text, 'insert');
      } else if (decimalCharIndex === -1 && this.maxFractionDigits) {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event, newValueStr, text, 'insert');
      }
    } else {
      const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
      const operation = selectionStart !== selectionEnd ? 'range-insert' : 'insert';
      if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
        if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
          const charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
          newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
          this.updateValue(event, newValueStr, text, operation);
        }
      } else {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event, newValueStr, text, operation);
      }
    }
  }
  insertText(value, text, start, end) {
    let textSplit = text === '.' ? text : text.split('.');
    if (textSplit.length === 2) {
      const decimalCharIndex = value.slice(start, end).search(this._decimal);
      this._decimal.lastIndex = 0;
      return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : value || this.formatValue(text);
    } else if (end - start === value.length) {
      return this.formatValue(text);
    } else if (start === 0) {
      return text + value.slice(end);
    } else if (end === value.length) {
      return value.slice(0, start) + text;
    } else {
      return value.slice(0, start) + text + value.slice(end);
    }
  }
  deleteRange(value, start, end) {
    let newValueStr;
    if (end - start === value.length) newValueStr = '';else if (start === 0) newValueStr = value.slice(end);else if (end === value.length) newValueStr = value.slice(0, start);else newValueStr = value.slice(0, start) + value.slice(end);
    return newValueStr;
  }
  initCursor() {
    let selectionStart = this.input?.nativeElement.selectionStart;
    let selectionEnd = this.input?.nativeElement.selectionEnd;
    let inputValue = this.input?.nativeElement.value;
    let valueLength = inputValue.length;
    let index = null;
    // remove prefix
    let prefixLength = (this.prefixChar || '').length;
    inputValue = inputValue.replace(this._prefix, '');
    // Will allow selecting whole prefix. But not a part of it.
    // Negative values will trigger clauses after this to fix the cursor position.
    if (selectionStart === selectionEnd || selectionStart !== 0 || selectionEnd < prefixLength) {
      selectionStart -= prefixLength;
    }
    let char = inputValue.charAt(selectionStart);
    if (this.isNumeralChar(char)) {
      return selectionStart + prefixLength;
    }
    //left
    let i = selectionStart - 1;
    while (i >= 0) {
      char = inputValue.charAt(i);
      if (this.isNumeralChar(char)) {
        index = i + prefixLength;
        break;
      } else {
        i--;
      }
    }
    if (index !== null) {
      this.input?.nativeElement.setSelectionRange(index + 1, index + 1);
    } else {
      i = selectionStart;
      while (i < valueLength) {
        char = inputValue.charAt(i);
        if (this.isNumeralChar(char)) {
          index = i + prefixLength;
          break;
        } else {
          i++;
        }
      }
      if (index !== null) {
        this.input?.nativeElement.setSelectionRange(index, index);
      }
    }
    return index || 0;
  }
  onInputClick() {
    const currentValue = this.input?.nativeElement.value;
    if (!this.readonly && currentValue !== primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getSelection()) {
      this.initCursor();
    }
  }
  isNumeralChar(char) {
    if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
      this.resetRegex();
      return true;
    }
    return false;
  }
  resetRegex() {
    this._numeral.lastIndex = 0;
    this._decimal.lastIndex = 0;
    this._group.lastIndex = 0;
    this._minusSign.lastIndex = 0;
  }
  updateValue(event, valueStr, insertedValueStr, operation) {
    let currentValue = this.input?.nativeElement.value;
    let newValue = null;
    if (valueStr != null) {
      newValue = this.parseValue(valueStr);
      newValue = !newValue && !this.allowEmpty ? 0 : newValue;
      this.updateInput(newValue, insertedValueStr, operation, valueStr);
      this.handleOnInput(event, currentValue, newValue);
    }
  }
  handleOnInput(event, currentValue, newValue) {
    if (this.isValueChanged(currentValue, newValue)) {
      this.input.nativeElement.value = this.formatValue(newValue);
      this.input?.nativeElement.setAttribute('aria-valuenow', newValue);
      this.updateModel(event, newValue);
      this.onInput.emit({
        originalEvent: event,
        value: newValue,
        formattedValue: currentValue
      });
    }
  }
  isValueChanged(currentValue, newValue) {
    if (newValue === null && currentValue !== null) {
      return true;
    }
    if (newValue != null) {
      let parsedCurrentValue = typeof currentValue === 'string' ? this.parseValue(currentValue) : currentValue;
      return newValue !== parsedCurrentValue;
    }
    return false;
  }
  validateValue(value) {
    if (value === '-' || value == null) {
      return null;
    }
    if (this.min != null && value < this.min) {
      return this.min;
    }
    if (this.max != null && value > this.max) {
      return this.max;
    }
    return value;
  }
  updateInput(value, insertedValueStr, operation, valueStr) {
    insertedValueStr = insertedValueStr || '';
    let inputValue = this.input?.nativeElement.value;
    let newValue = this.formatValue(value);
    let currentLength = inputValue.length;
    if (newValue !== valueStr) {
      newValue = this.concatValues(newValue, valueStr);
    }
    if (currentLength === 0) {
      this.input.nativeElement.value = newValue;
      this.input.nativeElement.setSelectionRange(0, 0);
      const index = this.initCursor();
      const selectionEnd = index + insertedValueStr.length;
      this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
    } else {
      let selectionStart = this.input.nativeElement.selectionStart;
      let selectionEnd = this.input.nativeElement.selectionEnd;
      if (this.maxlength && newValue.length > this.maxlength) {
        newValue = newValue.slice(0, this.maxlength);
        selectionStart = Math.min(selectionStart, this.maxlength);
        selectionEnd = Math.min(selectionEnd, this.maxlength);
      }
      if (this.maxlength && this.maxlength < newValue.length) {
        return;
      }
      this.input.nativeElement.value = newValue;
      let newLength = newValue.length;
      if (operation === 'range-insert') {
        const startValue = this.parseValue((inputValue || '').slice(0, selectionStart));
        const startValueStr = startValue !== null ? startValue.toString() : '';
        const startExpr = startValueStr.split('').join(`(${this.groupChar})?`);
        const sRegex = new RegExp(startExpr, 'g');
        sRegex.test(newValue);
        const tExpr = insertedValueStr.split('').join(`(${this.groupChar})?`);
        const tRegex = new RegExp(tExpr, 'g');
        tRegex.test(newValue.slice(sRegex.lastIndex));
        selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (newLength === currentLength) {
        if (operation === 'insert' || operation === 'delete-back-single') this.input.nativeElement.setSelectionRange(selectionEnd + 1, selectionEnd + 1);else if (operation === 'delete-single') this.input.nativeElement.setSelectionRange(selectionEnd - 1, selectionEnd - 1);else if (operation === 'delete-range' || operation === 'spin') this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (operation === 'delete-back-single') {
        let prevChar = inputValue.charAt(selectionEnd - 1);
        let nextChar = inputValue.charAt(selectionEnd);
        let diff = currentLength - newLength;
        let isGroupChar = this._group.test(nextChar);
        if (isGroupChar && diff === 1) {
          selectionEnd += 1;
        } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
          selectionEnd += -1 * diff + 1;
        }
        this._group.lastIndex = 0;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (inputValue === '-' && operation === 'insert') {
        this.input.nativeElement.setSelectionRange(0, 0);
        const index = this.initCursor();
        const selectionEnd = index + insertedValueStr.length + 1;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else {
        selectionEnd = selectionEnd + (newLength - currentLength);
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      }
    }
    this.input.nativeElement.setAttribute('aria-valuenow', value);
  }
  concatValues(val1, val2) {
    if (val1 && val2) {
      let decimalCharIndex = val2.search(this._decimal);
      this._decimal.lastIndex = 0;
      if (this.suffixChar) {
        return decimalCharIndex !== -1 ? val1 : val1.replace(this.suffixChar, '').split(this._decimal)[0] + val2.replace(this.suffixChar, '').slice(decimalCharIndex) + this.suffixChar;
      } else {
        return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
      }
    }
    return val1;
  }
  getDecimalLength(value) {
    if (value) {
      const valueSplit = value.split(this._decimal);
      if (valueSplit.length === 2) {
        return valueSplit[1].replace(this._suffix, '').trim().replace(/\s/g, '').replace(this._currency, '').length;
      }
    }
    return 0;
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    const newValueNumber = this.validateValue(this.parseValue(this.input.nativeElement.value));
    const newValueString = newValueNumber?.toString();
    this.input.nativeElement.value = this.formatValue(newValueString);
    this.input.nativeElement.setAttribute('aria-valuenow', newValueString);
    this.updateModel(event, newValueNumber);
    this.onBlur.emit(event);
  }
  formattedValue() {
    const val = !this.value && !this.allowEmpty ? 0 : this.value;
    return this.formatValue(val);
  }
  updateModel(event, value) {
    const isBlurUpdateOnMode = this.ngControl?.control?.updateOn === 'blur';
    if (this.value !== value) {
      this.value = value;
      if (!(isBlurUpdateOnMode && this.focused)) {
        this.onModelChange(value);
      }
    } else if (isBlurUpdateOnMode) {
      this.onModelChange(value);
    }
    this.onModelTouched();
  }
  writeValue(value) {
    this.value = value;
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  get filled() {
    return this.value != null && this.value.toString().length > 0;
  }
  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  static ɵfac = function InputNumber_Factory(t) {
    return new (t || InputNumber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InputNumber,
    selectors: [["p-inputNumber"]],
    contentQueries: function InputNumber_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function InputNumber_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
      }
    },
    hostAttrs: [1, "p-element", "p-inputwrapper"],
    hostVars: 6,
    hostBindings: function InputNumber_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused)("p-inputnumber-clearable", ctx.showClear && ctx.buttonLayout != "vertical");
      }
    },
    inputs: {
      showButtons: [2, "showButtons", "showButtons", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      format: [2, "format", "format", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      buttonLayout: "buttonLayout",
      inputId: "inputId",
      styleClass: "styleClass",
      style: "style",
      placeholder: "placeholder",
      size: [2, "size", "size", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      maxlength: [2, "maxlength", "maxlength", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      tabindex: [2, "tabindex", "tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      title: "title",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      ariaRequired: [2, "ariaRequired", "ariaRequired", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      name: "name",
      required: [2, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      autocomplete: "autocomplete",
      min: [2, "min", "min", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      max: [2, "max", "max", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      incrementButtonClass: "incrementButtonClass",
      decrementButtonClass: "decrementButtonClass",
      incrementButtonIcon: "incrementButtonIcon",
      decrementButtonIcon: "decrementButtonIcon",
      readonly: [2, "readonly", "readonly", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      step: [2, "step", "step", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      allowEmpty: [2, "allowEmpty", "allowEmpty", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      locale: "locale",
      localeMatcher: "localeMatcher",
      mode: "mode",
      currency: "currency",
      currencyDisplay: "currencyDisplay",
      useGrouping: [2, "useGrouping", "useGrouping", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      variant: "variant",
      minFractionDigits: [2, "minFractionDigits", "minFractionDigits", value => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value, null)],
      maxFractionDigits: [2, "maxFractionDigits", "maxFractionDigits", value => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value, null)],
      prefix: "prefix",
      suffix: "suffix",
      inputStyle: "inputStyle",
      inputStyleClass: "inputStyleClass",
      showClear: [2, "showClear", "showClear", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      disabled: "disabled"
    },
    outputs: {
      onInput: "onInput",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onKeyDown: "onKeyDown",
      onClear: "onClear"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([INPUTNUMBER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 7,
    vars: 41,
    consts: [["input", ""], [3, "ngClass", "ngStyle"], ["pInputText", "", "role", "spinbutton", "inputmode", "decimal", "pAutoFocus", "", 3, "input", "keydown", "keypress", "paste", "click", "focus", "blur", "ngClass", "ngStyle", "value", "disabled", "readonly", "autofocus"], [4, "ngIf"], ["class", "p-inputnumber-button-group", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-button-icon-only", "tabindex", "-1", 3, "ngClass", "class", "disabled", "mousedown", "mouseup", "mouseleave", "keydown", "keyup", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], ["class", "p-inputnumber-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "ngClass"], [1, "p-inputnumber-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], [1, "p-inputnumber-button-group"], ["type", "button", "pButton", "", "tabindex", "-1", 1, "p-button-icon-only", 3, "mousedown", "mouseup", "mouseleave", "keydown", "keyup", "ngClass", "disabled"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
    template: function InputNumber_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 1)(1, "input", 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputNumber_Template_input_input_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onUserInput($event));
        })("keydown", function InputNumber_Template_input_keydown_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputKeyDown($event));
        })("keypress", function InputNumber_Template_input_keypress_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputKeyPress($event));
        })("paste", function InputNumber_Template_input_paste_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onPaste($event));
        })("click", function InputNumber_Template_input_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputClick());
        })("focus", function InputNumber_Template_input_focus_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputFocus($event));
        })("blur", function InputNumber_Template_input_blur_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputBlur($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputNumber_ng_container_3_Template, 3, 2, "ng-container", 3)(4, InputNumber_span_4_Template, 7, 19, "span", 4)(5, InputNumber_button_5_Template, 3, 9, "button", 5)(6, InputNumber_button_6_Template, 3, 9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](37, _c1, ctx.showButtons && ctx.buttonLayout === "stacked", ctx.showButtons && ctx.buttonLayout === "horizontal", ctx.showButtons && ctx.buttonLayout === "vertical"))("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "inputnumber")("data-pc-section", "root");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.inputStyleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-inputnumber-input")("ngStyle", ctx.inputStyle)("value", ctx.formattedValue())("disabled", ctx.disabled)("readonly", ctx.readonly)("autofocus", ctx.autofocus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("variant", ctx.variant)("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value)("placeholder", ctx.placeholder)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("title", ctx.title)("size", ctx.size)("name", ctx.name)("autocomplete", ctx.autocomplete)("maxlength", ctx.maxlength)("tabindex", ctx.tabindex)("aria-required", ctx.ariaRequired)("required", ctx.required)("min", ctx.min)("max", ctx.max)("data-pc-section", "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonLayout != "vertical" && ctx.showClear && ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButtons && ctx.buttonLayout === "stacked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_autofocus__WEBPACK_IMPORTED_MODULE_7__.AutoFocus, primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__.TimesIcon, primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_9__.AngleUpIcon, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_10__.AngleDownIcon],
    styles: ["@layer primeng{p-inputnumber,.p-inputnumber{display:inline-flex}.p-inputnumber-button{display:flex;align-items:center;justify-content:center;flex:0 0 auto}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label{display:none}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up{border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-input{border-top-right-radius:0;border-bottom-right-radius:0}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-button-group{display:flex;flex-direction:column}.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button{flex:1 1 auto}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up{order:3;border-top-left-radius:0;border-bottom-left-radius:0}.p-inputnumber-buttons-horizontal .p-inputnumber-input{order:2;border-radius:0}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down{order:1;border-top-right-radius:0;border-bottom-right-radius:0}.p-inputnumber-buttons-vertical{flex-direction:column}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up{order:1;border-bottom-left-radius:0;border-bottom-right-radius:0;width:100%}.p-inputnumber-buttons-vertical .p-inputnumber-input{order:2;border-radius:0;text-align:center}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down{order:3;border-top-left-radius:0;border-top-right-radius:0;width:100%}.p-inputnumber-input{flex:1 1 auto}.p-fluid p-inputnumber,.p-fluid .p-inputnumber{width:100%}.p-fluid .p-inputnumber .p-inputnumber-input{width:1%}.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input{width:100%}.p-inputnumber-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-inputnumber-clearable{position:relative}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputNumber, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-inputNumber',
      template: `
        <span
            [ngClass]="{
                'p-inputnumber p-component': true,
                'p-inputnumber-buttons-stacked': this.showButtons && this.buttonLayout === 'stacked',
                'p-inputnumber-buttons-horizontal': this.showButtons && this.buttonLayout === 'horizontal',
                'p-inputnumber-buttons-vertical': this.showButtons && this.buttonLayout === 'vertical'
            }"
            [ngStyle]="style"
            [class]="styleClass"
            [attr.data-pc-name]="'inputnumber'"
            [attr.data-pc-section]="'root'"
        >
            <input
                pInputText
                #input
                [attr.id]="inputId"
                role="spinbutton"
                [ngClass]="'p-inputnumber-input'"
                [ngStyle]="inputStyle"
                [class]="inputStyleClass"
                [value]="formattedValue()"
                [attr.variant]="variant"
                [attr.aria-valuemin]="min"
                [attr.aria-valuemax]="max"
                [attr.aria-valuenow]="value"
                [disabled]="disabled"
                [readonly]="readonly"
                [attr.placeholder]="placeholder"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.title]="title"
                [attr.size]="size"
                [attr.name]="name"
                [attr.autocomplete]="autocomplete"
                [attr.maxlength]="maxlength"
                [attr.tabindex]="tabindex"
                [attr.aria-required]="ariaRequired"
                [attr.required]="required"
                [attr.min]="min"
                [attr.max]="max"
                inputmode="decimal"
                (input)="onUserInput($event)"
                (keydown)="onInputKeyDown($event)"
                (keypress)="onInputKeyPress($event)"
                (paste)="onPaste($event)"
                (click)="onInputClick()"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                [attr.data-pc-section]="'input'"
                pAutoFocus
                [autofocus]="autofocus"
            />
            <ng-container *ngIf="buttonLayout != 'vertical' && showClear && value">
                <TimesIcon *ngIf="!clearIconTemplate" [ngClass]="'p-inputnumber-clear-icon'" (click)="clear()" [attr.data-pc-section]="'clearIcon'" />
                <span *ngIf="clearIconTemplate" (click)="clear()" class="p-inputnumber-clear-icon" [attr.data-pc-section]="'clearIcon'">
                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                </span>
            </ng-container>
            <span class="p-inputnumber-button-group" *ngIf="showButtons && buttonLayout === 'stacked'" [attr.data-pc-section]="'buttonGroup'">
                <button
                    type="button"
                    pButton
                    [ngClass]="{ 'p-inputnumber-button p-inputnumber-button-up': true }"
                    class="p-button-icon-only"
                    [class]="incrementButtonClass"
                    [disabled]="disabled"
                    tabindex="-1"
                    (mousedown)="onUpButtonMouseDown($event)"
                    (mouseup)="onUpButtonMouseUp()"
                    (mouseleave)="onUpButtonMouseLeave()"
                    (keydown)="onUpButtonKeyDown($event)"
                    (keyup)="onUpButtonKeyUp()"
                    [attr.aria-hidden]="true"
                    [attr.data-pc-section]="'incrementbutton'"
                >
                    <span *ngIf="incrementButtonIcon" [ngClass]="incrementButtonIcon" [attr.data-pc-section]="'incrementbuttonicon'"></span>
                    <ng-container *ngIf="!incrementButtonIcon">
                        <AngleUpIcon *ngIf="!incrementButtonIconTemplate" [attr.data-pc-section]="'incrementbuttonicon'" />
                        <ng-template *ngTemplateOutlet="incrementButtonIconTemplate"></ng-template>
                    </ng-container>
                </button>
                <button
                    type="button"
                    pButton
                    [ngClass]="{ 'p-inputnumber-button p-inputnumber-button-down': true }"
                    class="p-button-icon-only"
                    [class]="decrementButtonClass"
                    [disabled]="disabled"
                    tabindex="-1"
                    [attr.aria-hidden]="true"
                    (mousedown)="onDownButtonMouseDown($event)"
                    (mouseup)="onDownButtonMouseUp()"
                    (mouseleave)="onDownButtonMouseLeave()"
                    (keydown)="onDownButtonKeyDown($event)"
                    (keyup)="onDownButtonKeyUp()"
                    [attr.data-pc-section]="decrementbutton"
                >
                    <span *ngIf="decrementButtonIcon" [ngClass]="decrementButtonIcon" [attr.data-pc-section]="'decrementbuttonicon'"></span>
                    <ng-container *ngIf="!decrementButtonIcon">
                        <AngleDownIcon *ngIf="!decrementButtonIconTemplate" [attr.data-pc-section]="'decrementbuttonicon'" />
                        <ng-template *ngTemplateOutlet="decrementButtonIconTemplate"></ng-template>
                    </ng-container>
                </button>
            </span>
            <button
                *ngIf="showButtons && buttonLayout !== 'stacked'"
                type="button"
                pButton
                [ngClass]="{ 'p-inputnumber-button p-inputnumber-button-up': true }"
                [class]="incrementButtonClass"
                class="p-button-icon-only"
                [disabled]="disabled"
                tabindex="-1"
                [attr.aria-hidden]="true"
                (mousedown)="onUpButtonMouseDown($event)"
                (mouseup)="onUpButtonMouseUp()"
                (mouseleave)="onUpButtonMouseLeave()"
                (keydown)="onUpButtonKeyDown($event)"
                (keyup)="onUpButtonKeyUp()"
                [attr.data-pc-section]="'incrementbutton'"
            >
                <span *ngIf="incrementButtonIcon" [ngClass]="incrementButtonIcon" [attr.data-pc-section]="'incrementbuttonicon'"></span>
                <ng-container *ngIf="!incrementButtonIcon">
                    <AngleUpIcon *ngIf="!incrementButtonIconTemplate" [attr.data-pc-section]="'incrementbuttonicon'" />
                    <ng-template *ngTemplateOutlet="incrementButtonIconTemplate"></ng-template>
                </ng-container>
            </button>
            <button
                *ngIf="showButtons && buttonLayout !== 'stacked'"
                type="button"
                pButton
                [ngClass]="{ 'p-inputnumber-button p-inputnumber-button-down': true }"
                class="p-button-icon-only"
                [class]="decrementButtonClass"
                [disabled]="disabled"
                tabindex="-1"
                [attr.aria-hidden]="true"
                (mousedown)="onDownButtonMouseDown($event)"
                (mouseup)="onDownButtonMouseUp()"
                (mouseleave)="onDownButtonMouseLeave()"
                (keydown)="onDownButtonKeyDown($event)"
                (keyup)="onDownButtonKeyUp()"
                [attr.data-pc-section]="'decrementbutton'"
            >
                <span *ngIf="decrementButtonIcon" [ngClass]="decrementButtonIcon" [attr.data-pc-section]="'decrementbuttonicon'"></span>
                <ng-container *ngIf="!decrementButtonIcon">
                    <AngleDownIcon *ngIf="!decrementButtonIconTemplate" [attr.data-pc-section]="'decrementbuttonicon'" />
                    <ng-template *ngTemplateOutlet="decrementButtonIconTemplate"></ng-template>
                </ng-container>
            </button>
        </span>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [INPUTNUMBER_VALUE_ACCESSOR],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element p-inputwrapper',
        '[class.p-inputwrapper-filled]': 'filled',
        '[class.p-inputwrapper-focus]': 'focused',
        '[class.p-inputnumber-clearable]': 'showClear && buttonLayout != "vertical"'
      },
      styles: ["@layer primeng{p-inputnumber,.p-inputnumber{display:inline-flex}.p-inputnumber-button{display:flex;align-items:center;justify-content:center;flex:0 0 auto}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label{display:none}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up{border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-input{border-top-right-radius:0;border-bottom-right-radius:0}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-button-group{display:flex;flex-direction:column}.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button{flex:1 1 auto}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up{order:3;border-top-left-radius:0;border-bottom-left-radius:0}.p-inputnumber-buttons-horizontal .p-inputnumber-input{order:2;border-radius:0}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down{order:1;border-top-right-radius:0;border-bottom-right-radius:0}.p-inputnumber-buttons-vertical{flex-direction:column}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up{order:1;border-bottom-left-radius:0;border-bottom-right-radius:0;width:100%}.p-inputnumber-buttons-vertical .p-inputnumber-input{order:2;border-radius:0;text-align:center}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down{order:3;border-top-left-radius:0;border-top-right-radius:0;width:100%}.p-inputnumber-input{flex:1 1 auto}.p-fluid p-inputnumber,.p-fluid .p-inputnumber{width:100%}.p-fluid .p-inputnumber .p-inputnumber-input{width:1%}.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input{width:100%}.p-inputnumber-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-inputnumber-clearable{position:relative}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
  }], {
    showButtons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    buttonLayout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    maxlength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaRequired: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    autocomplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    incrementButtonClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    decrementButtonClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    incrementButtonIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    decrementButtonIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    step: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    allowEmpty: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    localeMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currency: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currencyDisplay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    useGrouping: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    variant: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minFractionDigits: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: value => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value, null)
      }]
    }],
    maxFractionDigits: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: value => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value, null)
      }]
    }],
    prefix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    suffix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    autofocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    input: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['input']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate]
    }]
  });
})();
class InputNumberModule {
  static ɵfac = function InputNumberModule_Factory(t) {
    return new (t || InputNumberModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: InputNumberModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_7__.AutoFocusModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__.TimesIcon, primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_9__.AngleUpIcon, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_10__.AngleDownIcon, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputNumberModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_7__.AutoFocusModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__.TimesIcon, primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_9__.AngleUpIcon, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_10__.AngleDownIcon],
      exports: [InputNumber, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
      declarations: [InputNumber]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2159:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-multiselect.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MULTISELECT_VALUE_ACCESSOR: () => (/* binding */ MULTISELECT_VALUE_ACCESSOR),
/* harmony export */   MultiSelect: () => (/* binding */ MultiSelect),
/* harmony export */   MultiSelectItem: () => (/* binding */ MultiSelectItem),
/* harmony export */   MultiSelectModule: () => (/* binding */ MultiSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/overlay */ 3576);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 78);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/scroller */ 2222);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 405);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/check */ 2289);
/* harmony import */ var primeng_icons_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/search */ 3647);
/* harmony import */ var primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/icons/timescircle */ 839);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/icons/times */ 7727);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/icons/chevrondown */ 5804);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/autofocus */ 7159);
/* harmony import */ var primeng_icons_minus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/icons/minus */ 7965);

























const _c0 = a0 => ({
  height: a0
});
const _c1 = (a0, a1) => ({
  "p-multiselect-item": true,
  "p-disabled": a0,
  "p-focus": a1
});
const _c2 = a0 => ({
  "p-variant-filled": a0
});
const _c3 = a0 => ({
  "p-highlight": a0
});
const _c4 = a0 => ({
  $implicit: a0
});
function MultiSelectItem_ng_container_3_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "CheckIcon", 7);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function MultiSelectItem_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {}
function MultiSelectItem_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelectItem_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelectItem_ng_container_3_span_2_2_ng_template_0_Template(rf, ctx) {}
function MultiSelectItem_ng_container_3_span_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelectItem_ng_container_3_span_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelectItem_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelectItem_ng_container_3_span_2_1_Template, 1, 0, null, 9)(2, MultiSelectItem_ng_container_3_span_2_2_Template, 1, 0, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.checkIconTemplate && !ctx_r0.itemCheckboxIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.itemCheckboxIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c4, ctx_r0.selected));
  }
}
function MultiSelectItem_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelectItem_ng_container_3_CheckIcon_1_Template, 1, 2, "CheckIcon", 5)(2, MultiSelectItem_ng_container_3_span_2_Template, 3, 6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.checkIconTemplate || !ctx_r0.itemCheckboxIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.checkIconTemplate);
  }
}
function MultiSelectItem_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_1_0 = ctx_r0.label) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "empty");
  }
}
function MultiSelectItem_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c5 = ["container"];
const _c6 = ["overlay"];
const _c7 = ["filterInput"];
const _c8 = ["focusInput"];
const _c9 = ["items"];
const _c10 = ["scroller"];
const _c11 = ["lastHiddenFocusableEl"];
const _c12 = ["firstHiddenFocusableEl"];
const _c13 = ["headerCheckbox"];
const _c14 = [[["p-header"]], [["p-footer"]]];
const _c15 = ["p-header", "p-footer"];
const _c16 = (a0, a1) => ({
  $implicit: a0,
  removeChip: a1
});
const _c17 = a0 => ({
  options: a0
});
const _c18 = (a0, a1) => ({
  "p-variant-filled": a0,
  "p-checkbox-disabled": a1
});
const _c19 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-focus": a1,
  "p-disabled": a2
});
const _c20 = (a0, a1) => ({
  $implicit: a0,
  partialSelected: a1
});
const _c21 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
const _c22 = () => ({});
function MultiSelect_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.label() || "empty");
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_TimesCircleIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesCircleIcon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_TimesCircleIcon_1_Template_TimesCircleIcon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.removeOption(item_r4, ctx_r1.event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-multiselect-token-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearicon")("aria-hidden", true);
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.removeOption(item_r4, ctx_r1.event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_span_2_ng_container_1_Template, 1, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearicon")("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.removeTokenIconTemplate);
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_TimesCircleIcon_1_Template, 1, 3, "TimesCircleIcon", 29)(2, MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_span_2_Template, 2, 3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.removeTokenIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.removeTokenIconTemplate);
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27, 4)(2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_Template, 3, 2, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getLabelByValue(item_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.disabled);
  }
}
function MultiSelect_ng_container_7_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.placeholder() || ctx_r1.defaultLabel || "empty");
  }
}
function MultiSelect_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_7_ng_container_2_div_1_Template, 5, 2, "div", 26)(2, MultiSelect_ng_container_7_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.chipSelectedItems());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.modelValue() || ctx_r1.modelValue().length === 0);
  }
}
function MultiSelect_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 20)(2, MultiSelect_ng_container_7_ng_container_2_Template, 3, 2, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.display === "comma");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.display === "chip");
  }
}
function MultiSelect_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_container_9_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_ng_container_9_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.clear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-multiselect-clear-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearicon")("aria-hidden", true);
  }
}
function MultiSelect_ng_container_9_span_2_1_ng_template_0_Template(rf, ctx) {}
function MultiSelect_ng_container_9_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_container_9_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_container_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_ng_container_9_span_2_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.clear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_9_span_2_1_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearicon")("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.clearIconTemplate);
  }
}
function MultiSelect_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_9_TimesIcon_1_Template, 1, 3, "TimesIcon", 29)(2, MultiSelect_ng_container_9_span_2_Template, 2, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.clearIconTemplate);
  }
}
function MultiSelect_ng_container_11_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_container_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_11_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.loadingIconTemplate);
  }
}
function MultiSelect_ng_container_11_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 38);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-multiselect-trigger-icon pi-spin " + ctx_r1.loadingIcon);
  }
}
function MultiSelect_ng_container_11_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 39);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("p-multiselect-trigger-icon pi pi-spinner pi-spin");
  }
}
function MultiSelect_ng_container_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_11_ng_container_2_span_1_Template, 1, 1, "span", 36)(2, MultiSelect_ng_container_11_ng_container_2_span_2_Template, 1, 2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loadingIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loadingIcon);
  }
}
function MultiSelect_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_11_ng_container_1_Template, 2, 1, "ng-container", 20)(2, MultiSelect_ng_container_11_ng_container_2_Template, 3, 2, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loadingIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loadingIconTemplate);
  }
}
function MultiSelect_ng_template_12_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 43);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.dropdownIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "triggericon")("aria-hidden", true);
  }
}
function MultiSelect_ng_template_12_ng_container_0_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 44);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-multiselect-trigger-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "triggericon")("aria-hidden", true);
  }
}
function MultiSelect_ng_template_12_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_12_ng_container_0_span_1_Template, 1, 3, "span", 41)(2, MultiSelect_ng_template_12_ng_container_0_ChevronDownIcon_2_Template, 1, 3, "ChevronDownIcon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dropdownIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.dropdownIcon);
  }
}
function MultiSelect_ng_template_12_span_1_1_ng_template_0_Template(rf, ctx) {}
function MultiSelect_ng_template_12_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_12_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_12_span_1_1_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "triggericon")("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.dropdownIconTemplate);
  }
}
function MultiSelect_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_12_ng_container_0_Template, 3, 2, "ng-container", 20)(1, MultiSelect_ng_template_12_span_1_Template, 2, 3, "span", 40);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.dropdownIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dropdownIconTemplate);
  }
}
function MultiSelect_ng_template_16_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_16_div_3_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_16_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_16_div_3_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.filterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c17, ctx_r1.filterOptions));
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_ng_container_1_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "CheckIcon", 44);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_ng_container_1_CheckIcon_1_Template, 1, 2, "CheckIcon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.allSelected());
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_2_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.checkIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c4, ctx_r1.allSelected()));
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_3_1_ng_template_0_Template(rf, ctx) {}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_3_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerCheckboxIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c20, ctx_r1.allSelected(), ctx_r1.partialSelected()));
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 20)(2, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_2_Template, 2, 5, "span", 60)(3, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_span_3_Template, 2, 6, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.checkIconTemplate && !ctx_r1.headerCheckboxIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.checkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.headerCheckboxIconTemplate);
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onToggleAll($event));
    })("keydown", function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onHeaderCheckboxKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16)(2, "input", 58, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_Template_input_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onHeaderCheckboxFocus());
    })("blur", function MultiSelect_ng_template_16_div_3_ng_template_4_div_0_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onHeaderCheckboxBlur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_ng_container_5_Template, 4, 3, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c18, ctx_r1.variant === "filled" || ctx_r1.config.inputStyle() === "filled", ctx_r1.disabled || ctx_r1.toggleAllDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-p-hidden-accessible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r1.readonly)("disabled", ctx_r1.disabled || ctx_r1.toggleAllDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.allSelected())("aria-label", ctx_r1.toggleAllAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c19, ctx_r1.allSelected(), ctx_r1.headerCheckboxFocus, ctx_r1.disabled || ctx_r1.toggleAllDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.toggleAllAriaLabel)("aria-checked", ctx_r1.allSelected());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.allSelected() || ctx_r1.partialSelected());
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SearchIcon", 44);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-multiselect-filter-icon");
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_span_4_1_ng_template_0_Template(rf, ctx) {}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_16_div_3_ng_template_4_div_1_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_16_div_3_ng_template_4_div_1_span_4_1_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.filterIconTemplate);
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62)(1, "input", 63, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_Template_input_input_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onFilterInputChange($event));
    })("keydown", function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_Template_input_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onFilterKeyDown($event));
    })("click", function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_Template_input_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onInputClick($event));
    })("blur", function MultiSelect_ng_template_16_div_3_ng_template_4_div_1_Template_input_blur_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onFilterBlur($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelect_ng_template_16_div_3_ng_template_4_div_1_SearchIcon_3_Template, 1, 1, "SearchIcon", 42)(4, MultiSelect_ng_template_16_div_3_ng_template_4_div_1_span_4_Template, 2, 1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1._filterValue() || "")("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autocomplete", ctx_r1.autocomplete)("placeholder", ctx_r1.filterPlaceHolder)("aria-owns", ctx_r1.id + "_list")("aria-activedescendant", ctx_r1.focusedOptionId)("placeholder", ctx_r1.filterPlaceHolder)("aria-label", ctx_r1.ariaFilterLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.filterIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.filterIconTemplate);
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_TimesIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon", 44);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-multiselect-close-icon");
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_span_4_1_ng_template_0_Template(rf, ctx) {}
function MultiSelect_ng_template_16_div_3_ng_template_4_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_16_div_3_ng_template_4_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_16_div_3_ng_template_4_span_4_1_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.closeIconTemplate);
  }
}
function MultiSelect_ng_template_16_div_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_16_div_3_ng_template_4_div_0_Template, 6, 17, "div", 53)(1, MultiSelect_ng_template_16_div_3_ng_template_4_div_1_Template, 5, 10, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_ng_template_16_div_3_ng_template_4_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.close($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelect_ng_template_16_div_3_ng_template_4_TimesIcon_3_Template, 1, 1, "TimesIcon", 42)(4, MultiSelect_ng_template_16_div_3_ng_template_4_span_4_Template, 2, 1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showToggleAll && !ctx_r1.selectionLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.closeAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.closeIconTemplate);
  }
}
function MultiSelect_ng_template_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_16_div_3_ng_container_2_Template, 1, 0, "ng-container", 33)(3, MultiSelect_ng_template_16_div_3_ng_container_3_Template, 2, 4, "ng-container", 23)(4, MultiSelect_ng_template_16_div_3_ng_template_4_Template, 5, 5, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const builtInFilterElement_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.filterTemplate)("ngIfElse", builtInFilterElement_r12);
  }
}
function MultiSelect_ng_template_16_p_scroller_5_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_16_p_scroller_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_16_p_scroller_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const items_r14 = ctx.$implicit;
    const scrollerOptions_r15 = ctx.options;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const buildInItems_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", buildInItems_r16)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c21, items_r14, scrollerOptions_r15));
  }
}
function MultiSelect_ng_template_16_p_scroller_5_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_16_p_scroller_5_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_16_p_scroller_5_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const scrollerOptions_r17 = ctx.options;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c17, scrollerOptions_r17));
  }
}
function MultiSelect_ng_template_16_p_scroller_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_16_p_scroller_5_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function MultiSelect_ng_template_16_p_scroller_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-scroller", 67, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function MultiSelect_ng_template_16_p_scroller_5_Template_p_scroller_onLazyLoad_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onLazyLoad.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_16_p_scroller_5_ng_template_2_Template, 1, 5, "ng-template", 25)(3, MultiSelect_ng_template_16_p_scroller_5_ng_container_3_Template, 2, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r1.scrollHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.visibleOptions())("itemSize", ctx_r1.virtualScrollItemSize || ctx_r1._itemSize)("autoSize", true)("tabindex", -1)("lazy", ctx_r1.lazy)("options", ctx_r1.virtualScrollOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loaderTemplate);
  }
}
function MultiSelect_ng_template_16_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_16_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_16_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const buildInItems_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", buildInItems_r16)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c21, ctx_r1.visibleOptions(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c22)));
  }
}
function MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getOptionGroupLabel(option_r18.optionGroup));
  }
}
function MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 20)(3, MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const option_r18 = ctx_r18.$implicit;
    const i_r20 = ctx_r18.index;
    const scrollerOptions_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, scrollerOptions_r21.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.id + "_" + ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.groupTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.groupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, option_r18.optionGroup));
  }
}
function MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-multiSelectItem", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_1_Template_p_multiSelectItem_onClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const scrollerOptions_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOptionSelect($event, false, ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)));
    })("onMouseEnter", function MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_1_Template_p_multiSelectItem_onMouseEnter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const scrollerOptions_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOptionMouseEnter($event, ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const option_r18 = ctx_r18.$implicit;
    const i_r20 = ctx_r18.index;
    const scrollerOptions_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.id + "_" + ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21))("option", option_r18)("selected", ctx_r1.isSelected(option_r18))("label", ctx_r1.getOptionLabel(option_r18))("disabled", ctx_r1.isOptionDisabled(option_r18))("template", ctx_r1.itemTemplate)("checkIconTemplate", ctx_r1.checkIconTemplate)("itemCheckboxIconTemplate", ctx_r1.itemCheckboxIconTemplate)("itemSize", scrollerOptions_r21.itemSize)("focused", ctx_r1.focusedOptionIndex() === ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21))("ariaPosInset", ctx_r1.getAriaPosInset(ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)))("ariaSetSize", ctx_r1.ariaSetSize);
  }
}
function MultiSelect_ng_template_16_ng_template_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 20)(1, MultiSelect_ng_template_16_ng_template_7_ng_template_2_ng_container_1_Template, 2, 12, "ng-container", 20);
  }
  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isOptionGroup(option_r18));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isOptionGroup(option_r18));
  }
}
function MultiSelect_ng_template_16_ng_template_7_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.emptyFilterMessageLabel, " ");
  }
}
function MultiSelect_ng_template_16_ng_template_7_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 13);
  }
}
function MultiSelect_ng_template_16_ng_template_7_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_16_ng_template_7_li_3_ng_container_1_Template, 2, 1, "ng-container", 23)(2, MultiSelect_ng_template_16_ng_template_7_li_3_ng_container_2_Template, 2, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, scrollerOptions_r21.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.emptyFilterTemplate && !ctx_r1.emptyTemplate)("ngIfElse", ctx_r1.emptyFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.emptyFilterTemplate || ctx_r1.emptyTemplate);
  }
}
function MultiSelect_ng_template_16_ng_template_7_li_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.emptyMessageLabel, " ");
  }
}
function MultiSelect_ng_template_16_ng_template_7_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 14);
  }
}
function MultiSelect_ng_template_16_ng_template_7_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_16_ng_template_7_li_4_ng_container_1_Template, 2, 1, "ng-container", 23)(2, MultiSelect_ng_template_16_ng_template_7_li_4_ng_container_2_Template, 2, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, scrollerOptions_r21.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.emptyTemplate)("ngIfElse", ctx_r1.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.emptyTemplate);
  }
}
function MultiSelect_ng_template_16_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 69, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_16_ng_template_7_ng_template_2_Template, 2, 2, "ng-template", 70)(3, MultiSelect_ng_template_16_ng_template_7_li_3_Template, 3, 6, "li", 71)(4, MultiSelect_ng_template_16_ng_template_7_li_4_Template, 3, 6, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const items_r23 = ctx.$implicit;
    const scrollerOptions_r21 = ctx.options;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](scrollerOptions_r21.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", scrollerOptions_r21.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.listLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hasFilter() && ctx_r1.isEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.hasFilter() && ctx_r1.isEmpty());
  }
}
function MultiSelect_ng_template_16_div_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_16_div_9_ng_container_2_Template, 1, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
function MultiSelect_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46)(1, "span", 47, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MultiSelect_ng_template_16_Template_span_focus_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onFirstHiddenFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelect_ng_template_16_div_3_Template, 6, 3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MultiSelect_ng_template_16_p_scroller_5_Template, 4, 11, "p-scroller", 50)(6, MultiSelect_ng_template_16_ng_container_6_Template, 2, 6, "ng-container", 20)(7, MultiSelect_ng_template_16_ng_template_7_Template, 5, 7, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MultiSelect_ng_template_16_div_9_Template, 3, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 47, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MultiSelect_ng_template_16_Template_span_focus_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onLastHiddenFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.panelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-multiselect-panel p-component")("ngStyle", ctx_r1.panelStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.id + "_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r1.virtualScroll ? "auto" : ctx_r1.scrollHeight || "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.footerFacet || ctx_r1.footerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
const MULTISELECT_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MultiSelect),
  multi: true
};
class MultiSelectItem {
  config;
  id;
  option;
  selected;
  label;
  disabled;
  itemSize;
  focused;
  ariaPosInset;
  ariaSetSize;
  template;
  checkIconTemplate;
  itemCheckboxIconTemplate;
  onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  onMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  constructor(config) {
    this.config = config;
  }
  onOptionClick(event) {
    this.onClick.emit({
      originalEvent: event,
      option: this.option,
      selected: this.selected
    });
    event.stopPropagation();
  }
  onOptionMouseEnter(event) {
    this.onMouseEnter.emit({
      originalEvent: event,
      option: this.option,
      selected: this.selected
    });
  }
  static ɵfac = function MultiSelectItem_Factory(t) {
    return new (t || MultiSelectItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MultiSelectItem,
    selectors: [["p-multiSelectItem"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      id: "id",
      option: "option",
      selected: [2, "selected", "selected", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      label: "label",
      disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      itemSize: [2, "itemSize", "itemSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      focused: [2, "focused", "focused", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      ariaPosInset: "ariaPosInset",
      ariaSetSize: "ariaSetSize",
      template: "template",
      checkIconTemplate: "checkIconTemplate",
      itemCheckboxIconTemplate: "itemCheckboxIconTemplate"
    },
    outputs: {
      onClick: "onClick",
      onMouseEnter: "onMouseEnter"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
    decls: 6,
    vars: 28,
    consts: [["pRipple", "", "role", "option", 1, "p-multiselect-item", 3, "click", "mouseenter", "ngStyle", "ngClass", "id"], [1, "p-checkbox", "p-component", 3, "ngClass"], [1, "p-checkbox-box", 3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "styleClass", 4, "ngIf"], ["class", "p-checkbox-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-checkbox-icon"], [4, "ngTemplateOutlet"]],
    template: function MultiSelectItem_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectItem_Template_li_click_0_listener($event) {
          return ctx.onOptionClick($event);
        })("mouseenter", function MultiSelectItem_Template_li_mouseenter_0_listener($event) {
          return ctx.onOptionMouseEnter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelectItem_ng_container_3_Template, 3, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelectItem_span_4_Template, 2, 1, "span", 3)(5, MultiSelectItem_ng_container_5_Template, 1, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.itemSize + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c1, ctx.disabled, ctx.focused))("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled)("aria-checked", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c2, ctx.config.inputStyle() === "filled"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c3, ctx.selected));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c4, ctx.option));
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon],
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiSelectItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-multiSelectItem',
      template: `
        <li
            pRipple
            role="option"
            [ngStyle]="{ height: itemSize + 'px' }"
            class="p-multiselect-item"
            [ngClass]="{ 'p-multiselect-item': true, 'p-disabled': disabled, 'p-focus': focused }"
            [id]="id"
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            [attr.aria-checked]="selected"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
        >
            <div class="p-checkbox p-component" [ngClass]="{ 'p-variant-filled': config.inputStyle() === 'filled' }">
                <div class="p-checkbox-box" [ngClass]="{ 'p-highlight': selected }">
                    <ng-container *ngIf="selected">
                        <CheckIcon *ngIf="!checkIconTemplate || !itemCheckboxIconTemplate" [styleClass]="'p-checkbox-icon'" [attr.aria-hidden]="true" />
                        <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                            <ng-template *ngTemplateOutlet="checkIconTemplate && !itemCheckboxIconTemplate"></ng-template>
                            <ng-template *ngTemplateOutlet="itemCheckboxIconTemplate; context: { $implicit: selected }"></ng-template>
                        </span>
                    </ng-container>
                </div>
            </div>
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], () => [{
    type: primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig
  }], {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    option: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    focused: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    ariaPosInset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaSetSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checkIconTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemCheckboxIconTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMouseEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * MultiSelect is used to select multiple items from a collection.
 * @group Components
 */
class MultiSelect {
  el;
  renderer;
  cd;
  zone;
  filterService;
  config;
  overlayService;
  /**
   * Unique identifier of the component
   * @group Props
   */
  id;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the overlay panel.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * When specified, displays an input field to filter the items on keyup.
   * @group Props
   */
  filter = true;
  /**
   * Defines placeholder of the filter input.
   * @group Props
   */
  filterPlaceHolder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Specifies the visibility of the options panel.
   * @group Props
   */
  overlayVisible;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = 'outlined';
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Whether to show labels of selected item labels or use default label.
   * @group Props
   * @defaultValue true
   */
  set displaySelectedLabel(val) {
    this._displaySelectedLabel = val;
  }
  get displaySelectedLabel() {
    return this._displaySelectedLabel;
  }
  /**
   * Decides how many selected item labels to show at most.
   * @group Props
   * @defaultValue 3
   */
  set maxSelectedLabels(val) {
    this._maxSelectedLabels = val;
  }
  get maxSelectedLabels() {
    return this._maxSelectedLabels;
  }
  /**
   * Decides how many selected item labels to show at most.
   * @group Props
   */
  selectionLimit;
  /**
   * Label to display after exceeding max selected labels e.g. ({0} items selected), defaults "ellipsis" keyword to indicate a text-overflow.
   * @group Props
   */
  selectedItemsLabel;
  /**
   * Whether to show the checkbox at header to toggle all items at once.
   * @group Props
   */
  showToggleAll = true;
  /**
   * Text to display when filtering does not return any results.
   * @group Props
   */
  emptyFilterMessage = '';
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = '';
  /**
   * Clears the filter value when hiding the dropdown.
   * @group Props
   */
  resetFilterOnHide = false;
  /**
   * Icon class of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = 'label';
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = 'items';
  /**
   * Whether to show the header.
   * @group Props
   */
  showHeader = true;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = '200px';
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Whether the multiselect is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
   * @group Props
   */
  overlayOptions;
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = 'contains';
  /**
   * Advisory information to display in a tooltip on hover.
   * @group Props
   */
  tooltip = '';
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition = 'right';
  /**
   * Type of CSS position.
   * @group Props
   */
  tooltipPositionStyle = 'absolute';
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Applies focus to the filter element when the overlay is shown.
   * @group Props
   */
  autofocusFilter = true;
  /**
   * Defines how the selected items are displayed.
   * @group Props
   */
  display = 'comma';
  /**
   * Defines the autocomplete is active.
   * @group Props
   */
  autocomplete = 'off';
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * @deprecated since v14.2.0, use overlayOptions property instead.
   * Whether to automatically manage layering.
   * @group Props
   */
  get autoZIndex() {
    return this._autoZIndex;
  }
  set autoZIndex(val) {
    this._autoZIndex = val;
    console.warn('The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.');
  }
  /**
   * @deprecated since v14.2.0, use overlayOptions property instead.
   * Base zIndex value to use in layering.
   * @group Props
   */
  get baseZIndex() {
    return this._baseZIndex;
  }
  set baseZIndex(val) {
    this._baseZIndex = val;
    console.warn('The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.');
  }
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get showTransitionOptions() {
    return this._showTransitionOptions;
  }
  set showTransitionOptions(val) {
    this._showTransitionOptions = val;
    console.warn('The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
  }
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get hideTransitionOptions() {
    return this._hideTransitionOptions;
  }
  set hideTransitionOptions(val) {
    this._hideTransitionOptions = val;
    console.warn('The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
  }
  /**
   * Label to display when there are no selections.
   * @group Props
   * @deprecated Use placeholder instead.
   */
  set defaultLabel(val) {
    this._defaultLabel = val;
    console.warn('defaultLabel property is deprecated since 16.6.0, use placeholder instead');
  }
  get defaultLabel() {
    return this._defaultLabel;
  }
  /**
   * Label to display when there are no selections.
   * @group Props
   */
  set placeholder(val) {
    this._placeholder.set(val);
  }
  get placeholder() {
    return this._placeholder.asReadonly();
  }
  /**
   * An array of objects to display as the available options.
   * @group Props
   */
  get options() {
    const options = this._options();
    return options;
  }
  set options(val) {
    if (!primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.deepEquals(this._options(), val)) {
      this._options.set(val);
    }
  }
  /**
   * When specified, filter displays with this value.
   * @group Props
   */
  get filterValue() {
    return this._filterValue();
  }
  set filterValue(val) {
    this._filterValue.set(val);
  }
  /**
   * Item size of item to be virtual scrolled.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.warn('The itemSize property is deprecated, use virtualScrollItemSize property instead.');
  }
  /**
   * Whether all data is selected.
   * @group Props
   */
  get selectAll() {
    return this._selectAll;
  }
  set selectAll(value) {
    this._selectAll = value;
  }
  /**
   * Indicates whether to focus on options when hovering over them, defaults to optionLabel.
   * @group Props
   */
  focusOnHover = false;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  filterFields;
  /**
   * Determines if the option will be selected on focus.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = true;
  /**
   * Callback to invoke when value changes.
   * @param {MultiSelectChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {MultiSelectFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when multiselect receives focus.
   * @param {MultiSelectFocusEvent} event - Custom focus event.
   * @group Emits
   */
  onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when multiselect loses focus.
   * @param {MultiSelectBlurEvent} event - Custom blur event.
   * @group Emits
   */
  onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when component is clicked.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when input field is cleared.
   * @group Emits
   */
  onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when overlay panel becomes visible.
   * @group Emits
   */
  onPanelShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when overlay panel becomes hidden.
   * @group Emits
   */
  onPanelHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {MultiSelectLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {MultiSelectRemoveEvent} event - Remove event.
   * @group Emits
   */
  onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when all data is selected.
   * @param {MultiSelectSelectAllChangeEvent} event - Custom select event.
   * @group Emits
   */
  onSelectAllChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  containerViewChild;
  overlayViewChild;
  filterInputChild;
  focusInputViewChild;
  itemsViewChild;
  scroller;
  lastHiddenFocusableElementOnOverlay;
  firstHiddenFocusableElementOnOverlay;
  headerCheckboxViewChild;
  footerFacet;
  headerFacet;
  templates;
  searchValue;
  searchTimeout;
  _selectAll = null;
  _autoZIndex;
  _baseZIndex;
  _showTransitionOptions;
  _hideTransitionOptions;
  _defaultLabel;
  _placeholder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(undefined);
  _itemSize;
  _selectionLimit;
  _disableTooltip = false;
  value;
  _filteredOptions;
  onModelChange = () => {};
  onModelTouched = () => {};
  valuesAsString;
  focus;
  filtered;
  itemTemplate;
  groupTemplate;
  loaderTemplate;
  headerTemplate;
  filterTemplate;
  footerTemplate;
  emptyFilterTemplate;
  emptyTemplate;
  selectedItemsTemplate;
  checkIconTemplate;
  loadingIconTemplate;
  filterIconTemplate;
  removeTokenIconTemplate;
  closeIconTemplate;
  clearIconTemplate;
  dropdownIconTemplate;
  itemCheckboxIconTemplate;
  headerCheckboxIconTemplate;
  headerCheckboxFocus;
  filterOptions;
  preventModelTouched;
  preventDocumentDefault;
  focused = false;
  itemsWrapper;
  _displaySelectedLabel = true;
  _maxSelectedLabels = 3;
  modelValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
  _filterValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
  _options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
  startRangeIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1);
  focusedOptionIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1);
  selectedOptions;
  clickInProgress = false;
  get containerClass() {
    return {
      'p-multiselect p-component p-inputwrapper': true,
      'p-disabled': this.disabled,
      'p-multiselect-clearable': this.showClear && !this.disabled,
      'p-multiselect-chip': this.display === 'chip',
      'p-focus': this.focused,
      'p-variant-filled': this.variant === 'filled' || this.config.inputStyle() === 'filled'
    };
  }
  get inputClass() {
    return {
      'p-multiselect-label p-inputtext': true,
      'p-placeholder': (this.placeholder() || this.defaultLabel) && (this.label() === this.placeholder() || this.label() === this.defaultLabel),
      'p-multiselect-label-empty': !this.selectedItemsTemplate && (this.label() === 'p-emptylabel' || this.label().length === 0)
    };
  }
  get panelClass() {
    return {
      'p-multiselect-panel p-component': true,
      'p-input-filled': this.config.inputStyle() === 'filled',
      'p-ripple-disabled': this.config.ripple === false
    };
  }
  get labelClass() {
    return {
      'p-multiselect-label': true,
      'p-placeholder': this.label() === this.placeholder() || this.label() === this.defaultLabel,
      'p-multiselect-label-empty': !this.placeholder() && !this.defaultLabel && (!this.modelValue() || this.modelValue().length === 0)
    };
  }
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_2__.TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_2__.TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  get filled() {
    if (typeof this.modelValue() === 'string') return !!this.modelValue();
    return primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.modelValue());
  }
  get isVisibleClearIcon() {
    return this.modelValue() != null && this.modelValue() !== '' && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.modelValue()) && this.showClear && !this.disabled && this.filled;
  }
  get toggleAllAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria[this.allSelected() ? 'selectAll' : 'unselectAll'] : undefined;
  }
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : undefined;
  }
  get listLabel() {
    return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_2__.TranslationKeys.ARIA)['listLabel'];
  }
  getAllVisibleAndNonVisibleOptions() {
    return this.group ? this.flatOptions(this.options) : this.options || [];
  }
  visibleOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    const isArrayOfObjects = primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isArray(options) && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isObject(options[0]);
    if (this._filterValue()) {
      let filteredOptions;
      if (isArrayOfObjects) {
        filteredOptions = this.filterService.filter(options, this.searchFields(), this._filterValue(), this.filterMatchMode, this.filterLocale);
      } else {
        filteredOptions = options.filter(option => option.toString().toLocaleLowerCase().includes(this._filterValue().toLocaleLowerCase()));
      }
      if (this.group) {
        const optionGroups = this.options || [];
        const filtered = [];
        optionGroups.forEach(group => {
          const groupChildren = this.getOptionGroupChildren(group);
          const filteredItems = groupChildren.filter(item => filteredOptions.includes(item));
          if (filteredItems.length > 0) filtered.push({
            ...group,
            [typeof this.optionGroupChildren === 'string' ? this.optionGroupChildren : 'items']: [...filteredItems]
          });
        });
        return this.flatOptions(filtered);
      }
      return filteredOptions;
    }
    return options;
  });
  label = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    let label;
    const modelValue = this.modelValue();
    if (modelValue && modelValue.length && this.displaySelectedLabel) {
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.maxSelectedLabels) && modelValue.length > this.maxSelectedLabels) {
        return this.getSelectedItemsLabel();
      } else {
        label = '';
        for (let i = 0; i < modelValue.length; i++) {
          if (i !== 0) {
            label += ', ';
          }
          label += this.getLabelByValue(modelValue[i]);
        }
      }
    } else {
      label = this.placeholder() || this.defaultLabel || '';
    }
    return label;
  });
  chipSelectedItems = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.maxSelectedLabels) && this.modelValue() && this.modelValue().length > this.maxSelectedLabels ? this.modelValue().slice(0, this.maxSelectedLabels) : this.modelValue();
  });
  constructor(el, renderer, cd, zone, filterService, config, overlayService) {
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
    this.filterService = filterService;
    this.config = config;
    this.overlayService = overlayService;
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
      const modelValue = this.modelValue();
      const visibleOptions = this.visibleOptions();
      if (visibleOptions && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(visibleOptions)) {
        if (this.optionValue && this.optionLabel && modelValue) {
          this.selectedOptions = visibleOptions.filter(option => modelValue.includes(option[this.optionLabel]) || modelValue.includes(option[this.optionValue]));
        } else {
          this.selectedOptions = modelValue;
        }
        this.cd.markForCheck();
      }
    });
  }
  ngOnInit() {
    this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_6__.UniqueComponentId)();
    this.autoUpdateModel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: value => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  maxSelectionLimitReached() {
    return this.selectionLimit && this.modelValue() && this.modelValue().length === this.selectionLimit;
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;
        case 'group':
          this.groupTemplate = item.template;
          break;
        case 'selectedItems':
          this.selectedItemsTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'filter':
          this.filterTemplate = item.template;
          break;
        case 'emptyfilter':
          this.emptyFilterTemplate = item.template;
          break;
        case 'empty':
          this.emptyTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        case 'loader':
          this.loaderTemplate = item.template;
          break;
        case 'checkicon':
          this.checkIconTemplate = item.template;
          console.warn('checkicon is deprecated and will removed in v18. Use itemcheckboxicon or headercheckboxicon templates instead.');
          break;
        case 'headercheckboxicon':
          this.headerCheckboxIconTemplate = item.template;
          break;
        case 'loadingicon':
          this.loadingIconTemplate = item.template;
          break;
        case 'filtericon':
          this.filterIconTemplate = item.template;
          break;
        case 'removetokenicon':
          this.removeTokenIconTemplate = item.template;
          break;
        case 'closeicon':
          this.closeIconTemplate = item.template;
          break;
        case 'clearicon':
          this.clearIconTemplate = item.template;
          break;
        case 'dropdownicon':
          this.dropdownIconTemplate = item.template;
          break;
        case 'itemcheckboxicon':
          this.itemCheckboxIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    if (this.overlayVisible) {
      this.show();
    }
  }
  ngAfterViewChecked() {
    if (this.filtered) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.overlayViewChild?.alignOverlay();
        }, 1);
      });
      this.filtered = false;
    }
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach(o => result.push(o));
      return result;
    }, []);
  }
  autoUpdateModel() {
    if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
      this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
      const value = this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);
      this.onOptionSelect({
        originalEvent: null,
        option: [value]
      });
    }
  }
  /**
   * Updates the model value.
   * @group Method
   */
  updateModel(value, event) {
    this.value = value;
    this.onModelChange(value);
    this.modelValue.set(value);
  }
  onInputClick(event) {
    event.stopPropagation();
    event.preventDefault();
    this.focusedOptionIndex.set(-1);
  }
  onOptionSelect(event, isFocus = false, index = -1) {
    const {
      originalEvent,
      option
    } = event;
    if (this.disabled || this.isOptionDisabled(option)) {
      return;
    }
    let selected = this.isSelected(option);
    let value = null;
    if (selected) {
      value = this.modelValue().filter(val => !primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.equals(val, this.getOptionValue(option), this.equalityKey()));
      this.onRemove.emit({
        newValue: this.value,
        removed: this.getOptionValue(option)
      });
    } else {
      value = [...(this.modelValue() || []), this.getOptionValue(option)];
    }
    this.updateModel(value, originalEvent);
    index !== -1 && this.focusedOptionIndex.set(index);
    isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(this.focusInputViewChild?.nativeElement);
    this.onChange.emit({
      originalEvent: event,
      value: value,
      itemValue: option
    });
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex(option => this.isValidSelectedOption(option)) : -1;
  }
  onOptionSelectRange(event, start = -1, end = -1) {
    start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
    end === -1 && (end = this.findNearestSelectedOptionIndex(start));
    if (start !== -1 && end !== -1) {
      const rangeStart = Math.min(start, end);
      const rangeEnd = Math.max(start, end);
      const value = this.visibleOptions().slice(rangeStart, rangeEnd + 1).filter(option => this.isValidOption(option)).map(option => this.getOptionValue(option));
      this.updateModel(value, event);
    }
  }
  searchFields() {
    return (this.filterBy || this.optionLabel || 'label').split(',');
  }
  findNearestSelectedOptionIndex(index, firstCheckUp = false) {
    let matchedOptionIndex = -1;
    if (this.hasSelectedOption()) {
      if (firstCheckUp) {
        matchedOptionIndex = this.findPrevSelectedOptionIndex(index);
        matchedOptionIndex = matchedOptionIndex === -1 ? this.findNextSelectedOptionIndex(index) : matchedOptionIndex;
      } else {
        matchedOptionIndex = this.findNextSelectedOptionIndex(index);
        matchedOptionIndex = matchedOptionIndex === -1 ? this.findPrevSelectedOptionIndex(index) : matchedOptionIndex;
      }
    }
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findPrevSelectedOptionIndex(index) {
    const matchedOptionIndex = this.hasSelectedOption() && index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), option => this.isValidSelectedOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findFirstSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex(option => this.isValidOption(option));
  }
  findFirstSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex(option => this.isValidSelectedOption(option)) : -1;
  }
  findNextSelectedOptionIndex(index) {
    const matchedOptionIndex = this.hasSelectedOption() && index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex(option => this.isValidSelectedOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
  }
  equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  hasSelectedOption() {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.modelValue());
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  isOptionGroup(option) {
    return (this.group || this.optionGroupLabel) && option.optionGroup && option.group;
  }
  isValidOption(option) {
    return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionDisabled(option) {
    if (this.maxSelectionLimitReached() && !this.isSelected(option)) {
      return true;
    }
    return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : option && option.disabled !== undefined ? option.disabled : false;
  }
  isSelected(option) {
    const optionValue = this.getOptionValue(option);
    return (this.modelValue() || []).some(value => primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.equals(value, optionValue, this.equalityKey()));
  }
  isOptionMatched(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
  }
  isEmpty() {
    return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)['index'];
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter(option => this.isOptionGroup(option)).length : index) + 1;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter(option => !this.isOptionGroup(option)).length;
  }
  getLabelByValue(value) {
    const options = this.group ? this.flatOptions(this._options()) : this._options() || [];
    const matchedOption = options.find(option => !this.isOptionGroup(option) && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.equals(this.getOptionValue(option), value, this.equalityKey()));
    return matchedOption ? this.getOptionLabel(matchedOption) : null;
  }
  getSelectedItemsLabel() {
    let pattern = /{(.*?)}/;
    let message = this.selectedItemsLabel ? this.selectedItemsLabel : this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_2__.TranslationKeys.SELECTION_MESSAGE);
    if (pattern.test(message)) {
      return message.replace(message.match(pattern)[0], this.modelValue().length + '');
    }
    return message;
  }
  getOptionLabel(option) {
    return this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(option, this.optionLabel) : option && option.label != undefined ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== undefined ? option.value : option;
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label != undefined ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  onKeyDown(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case 'ArrowDown':
        this.onArrowDownKey(event);
        break;
      case 'ArrowUp':
        this.onArrowUpKey(event);
        break;
      case 'Home':
        this.onHomeKey(event);
        break;
      case 'End':
        this.onEndKey(event);
        break;
      case 'PageDown':
        this.onPageDownKey(event);
        break;
      case 'PageUp':
        this.onPageUpKey(event);
        break;
      case 'Enter':
      case 'Space':
        this.onEnterKey(event);
        break;
      case 'Escape':
        this.onEscapeKey(event);
        break;
      case 'Tab':
        this.onTabKey(event);
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.onShiftKey();
        break;
      default:
        if (event.code === 'KeyA' && metaKey) {
          const value = this.visibleOptions().filter(option => this.isValidOption(option)).map(option => this.getOptionValue(option));
          this.updateModel(value, event);
          event.preventDefault();
          break;
        }
        if (!metaKey && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isPrintableCharacter(event.key)) {
          !this.overlayVisible && this.show();
          this.searchOptions(event, event.key);
          event.preventDefault();
        }
        break;
    }
  }
  onFilterKeyDown(event) {
    switch (event.code) {
      case 'ArrowDown':
        this.onArrowDownKey(event);
        break;
      case 'ArrowUp':
        this.onArrowUpKey(event, true);
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
        this.onArrowLeftKey(event, true);
        break;
      case 'Home':
        this.onHomeKey(event, true);
        break;
      case 'End':
        this.onEndKey(event, true);
        break;
      case 'Enter':
      case 'NumpadEnter':
        this.onEnterKey(event);
        break;
      case 'Escape':
        this.onEscapeKey(event);
        break;
      case 'Tab':
        this.onTabKey(event, true);
        break;
      default:
        break;
    }
  }
  onArrowLeftKey(event, pressedInInputText = false) {
    pressedInInputText && this.focusedOptionIndex.set(-1);
  }
  onArrowDownKey(event) {
    const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
    if (event.shiftKey) {
      this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
    }
    this.changeFocusedOptionIndex(event, optionIndex);
    !this.overlayVisible && this.show();
    event.preventDefault();
    event.stopPropagation();
  }
  onArrowUpKey(event, pressedInInputText = false) {
    if (event.altKey && !pressedInInputText) {
      if (this.focusedOptionIndex() !== -1) {
        this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
      }
      this.overlayVisible && this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
      if (event.shiftKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
      event.preventDefault();
    }
    event.stopPropagation();
  }
  onHomeKey(event, pressedInInputText = false) {
    const {
      currentTarget
    } = event;
    if (pressedInInputText) {
      const len = currentTarget.value.length;
      currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
      this.focusedOptionIndex.set(-1);
    } else {
      let metaKey = event.metaKey || event.ctrlKey;
      let optionIndex = this.findFirstOptionIndex();
      if (event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onEndKey(event, pressedInInputText = false) {
    const {
      currentTarget
    } = event;
    if (pressedInInputText) {
      const len = currentTarget.value.length;
      currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
      this.focusedOptionIndex.set(-1);
    } else {
      let metaKey = event.metaKey || event.ctrlKey;
      let optionIndex = this.findLastFocusedOptionIndex();
      if (event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onEnterKey(event) {
    if (!this.overlayVisible) {
      this.onArrowDownKey(event);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        if (event.shiftKey) {
          this.onOptionSelectRange(event, this.focusedOptionIndex());
        } else {
          this.onOptionSelect({
            originalEvent: event,
            option: this.visibleOptions()[this.focusedOptionIndex()]
          });
        }
      }
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    this.overlayVisible && this.hide(true);
    event.preventDefault();
  }
  onDeleteKey(event) {
    if (this.showClear) {
      this.clear(event);
      event.preventDefault();
    }
  }
  onTabKey(event, pressedInInputText = false) {
    if (!pressedInInputText) {
      if (this.overlayVisible && this.hasFocusableElements()) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
        event.preventDefault();
      } else {
        if (this.focusedOptionIndex() !== -1) {
          this.onOptionSelect({
            originalEvent: event,
            option: this.visibleOptions()[this.focusedOptionIndex()]
          });
        }
        this.overlayVisible && this.hide(this.filter);
      }
    }
  }
  onShiftKey() {
    this.startRangeIndex.set(this.focusedOptionIndex());
  }
  onContainerClick(event) {
    if (this.disabled || this.loading || this.readonly || event.target.isSameNode(this.focusInputViewChild?.nativeElement)) {
      return;
    }
    if (event.target.tagName === 'INPUT' || event.target.getAttribute('data-pc-section') === 'clearicon' || event.target.closest('[data-pc-section="clearicon"]')) {
      event.preventDefault();
      return;
    } else if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
      if (this.clickInProgress) {
        return;
      }
      this.clickInProgress = true;
      setTimeout(() => {
        this.clickInProgress = false;
      }, 150);
      this.overlayVisible ? this.hide(true) : this.show(true);
    }
    this.focusInputViewChild?.nativeElement.focus({
      preventScroll: true
    });
    this.onClick.emit(event);
    this.cd.detectChanges();
  }
  onFirstHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.getFirstFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(focusableEl);
  }
  onInputFocus(event) {
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit({
      originalEvent: event
    });
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit({
      originalEvent: event
    });
    if (!this.preventModelTouched) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  onFilterInputChange(event) {
    let value = event.target.value;
    this._filterValue.set(value);
    this.focusedOptionIndex.set(-1);
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue()
    });
    !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
    setTimeout(() => {
      this.overlayViewChild.alignOverlay();
    });
  }
  onLastHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.getLastFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(focusableEl);
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  onHeaderCheckboxKeyDown(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    switch (event.code) {
      case 'Space':
        this.onToggleAll(event);
        break;
      case 'Enter':
        this.onToggleAll(event);
        break;
      default:
        break;
    }
  }
  onFilterBlur(event) {
    this.focusedOptionIndex.set(-1);
  }
  onHeaderCheckboxFocus() {
    this.headerCheckboxFocus = true;
  }
  onHeaderCheckboxBlur() {
    this.headerCheckboxFocus = false;
  }
  onToggleAll(event) {
    if (this.disabled || this.readonly) {
      return;
    }
    if (this.selectAll != null) {
      this.onSelectAllChange.emit({
        originalEvent: event,
        checked: !this.allSelected()
      });
    } else {
      // pre-selected disabled options should always be selected.
      const selectedDisabledOptions = this.getAllVisibleAndNonVisibleOptions().filter(option => this.isSelected(option) && (this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : option && option.disabled !== undefined ? option.disabled : false));
      const visibleOptions = this.allSelected() ? this.visibleOptions().filter(option => !this.isValidOption(option) && this.isSelected(option)) : this.visibleOptions().filter(option => this.isSelected(option) || this.isValidOption(option));
      const optionValues = [...selectedDisabledOptions, ...visibleOptions].map(option => this.getOptionValue(option));
      const value = [...new Set(optionValues)];
      this.updateModel(value, event);
      // because onToggleAll could have been called during filtering, this additional test needs to be performed before calling onSelectAllChange.emit
      if (!value.length || value.length === this.getAllVisibleAndNonVisibleOptions().length) {
        this.onSelectAllChange.emit({
          originalEvent: event,
          checked: !!value.length
        });
      }
    }
    if (this.partialSelected()) {
      this.selectedOptions = null;
      this.cd.markForCheck();
    }
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(this.headerCheckboxViewChild?.nativeElement);
    this.headerCheckboxFocus = true;
    event.preventDefault();
    event.stopPropagation();
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
    }
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: 'nearest',
          inline: 'nearest'
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  writeValue(value) {
    this.value = value;
    this.modelValue.set(this.value);
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  allSelected() {
    return this.selectAll !== null ? this.selectAll : primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.visibleOptions()) && this.visibleOptions().every(option => this.isOptionGroup(option) || this.isOptionDisabled(option) || this.isSelected(option));
  }
  partialSelected() {
    return this.selectedOptions && this.selectedOptions.length > 0 && this.selectedOptions.length < this.options.length;
  }
  /**
   * Displays the panel.
   * @group Method
   */
  show(isFocus) {
    this.overlayVisible = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    if (isFocus) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(this.focusInputViewChild?.nativeElement);
    }
    this.cd.markForCheck();
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide(isFocus) {
    this.overlayVisible = false;
    this.focusedOptionIndex.set(-1);
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
    if (this.overlayOptions?.mode === 'modal') {
      primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.unblockBodyScroll();
    }
    isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(this.focusInputViewChild?.nativeElement);
    this.onPanelHide.emit();
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        this.itemsWrapper = primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? '.p-scroller' : '.p-multiselect-items-wrapper');
        this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
        if (this._options() && this._options().length) {
          if (this.virtualScroll) {
            const selectedIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.modelValue()) ? this.focusedOptionIndex() : -1;
            if (selectedIndex !== -1) {
              this.scroller?.scrollToIndex(selectedIndex);
            }
          } else {
            let selectedListItem = primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.findSingle(this.itemsWrapper, '[data-p-highlight="true"]');
            if (selectedListItem) {
              selectedListItem.scrollIntoView({
                block: 'nearest',
                inline: 'nearest'
              });
            }
          }
        }
        if (this.filterInputChild && this.filterInputChild.nativeElement) {
          this.preventModelTouched = true;
          if (this.autofocusFilter) {
            this.filterInputChild.nativeElement.focus();
          }
        }
        this.onPanelShow.emit();
      case 'void':
        this.itemsWrapper = null;
        this.onModelTouched();
        break;
    }
  }
  resetFilter() {
    if (this.filterInputChild && this.filterInputChild.nativeElement) {
      this.filterInputChild.nativeElement.value = '';
    }
    this._filterValue.set(null);
    this._filteredOptions = null;
  }
  close(event) {
    this.hide();
    event.preventDefault();
    event.stopPropagation();
  }
  clear(event) {
    this.value = null;
    this.updateModel(null, event);
    this.selectedOptions = null;
    this.onClear.emit();
    this._disableTooltip = true;
    event.stopPropagation();
  }
  labelContainerMouseLeave() {
    if (this._disableTooltip) this._disableTooltip = false;
  }
  removeOption(optionValue, event) {
    let value = this.modelValue().filter(val => !primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.equals(val, optionValue, this.equalityKey()));
    this.updateModel(value, event);
    this.onChange.emit({
      originalEvent: event,
      value: value,
      itemValue: optionValue
    });
    event && event.stopPropagation();
  }
  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.hasClass(nextItem.children[0], 'p-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.isHidden(nextItem.children[0]) || primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.hasClass(nextItem, 'p-multiselect-item-group') ? this.findNextItem(nextItem) : nextItem.children[0];else return null;
  }
  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.hasClass(prevItem.children[0], 'p-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.isHidden(prevItem.children[0]) || primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.hasClass(prevItem, 'p-multiselect-item-group') ? this.findPrevItem(prevItem) : prevItem.children[0];else return null;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex(option => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), option => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findLastSelectedOptionIndex() {
    return this.hasSelectedOption() ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.findLastIndex(this.visibleOptions(), option => this.isValidSelectedOption(option)) : -1;
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findLastSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  findLastOptionIndex() {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.findLastIndex(this.visibleOptions(), option => this.isValidOption(option));
  }
  searchOptions(event, char) {
    this.searchValue = (this.searchValue || '') + char;
    let optionIndex = -1;
    let matched = false;
    if (this.focusedOptionIndex() !== -1) {
      optionIndex = this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(option => this.isOptionMatched(option));
      optionIndex = optionIndex === -1 ? this.visibleOptions().slice(0, this.focusedOptionIndex()).findIndex(option => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex();
    } else {
      optionIndex = this.visibleOptions().findIndex(option => this.isOptionMatched(option));
    }
    if (optionIndex !== -1) {
      matched = true;
    }
    if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
      optionIndex = this.findFirstFocusedOptionIndex();
    }
    if (optionIndex !== -1) {
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = '';
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  activateFilter() {
    if (this.hasFilter() && this._options) {
      if (this.group) {
        let filteredGroups = [];
        for (let optgroup of this.options) {
          let filteredSubOptions = this.filterService.filter(this.getOptionGroupChildren(optgroup), this.searchFields(), this.filterValue, this.filterMatchMode, this.filterLocale);
          if (filteredSubOptions && filteredSubOptions.length) {
            filteredGroups.push({
              ...optgroup,
              ...{
                [this.optionGroupChildren]: filteredSubOptions
              }
            });
          }
        }
        this._filteredOptions = filteredGroups;
      } else {
        this._filteredOptions = this.filterService.filter(this.options, this.searchFields(), this.filterValue, this.filterMatchMode, this.filterLocale);
      }
    } else {
      this._filteredOptions = null;
    }
  }
  hasFocusableElements() {
    return primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
  }
  hasFilter() {
    return this._filterValue() && this._filterValue().trim().length > 0;
  }
  static ɵfac = function MultiSelect_Factory(t) {
    return new (t || MultiSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.OverlayService));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MultiSelect,
    selectors: [["p-multiSelect"]],
    contentQueries: function MultiSelect_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.Footer, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.Header, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function MultiSelect_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c10, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c12, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c13, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlayViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filterInputChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusInputViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerCheckboxViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element", "p-inputwrapper"],
    hostVars: 4,
    hostBindings: function MultiSelect_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible)("p-inputwrapper-filled", ctx.filled);
      }
    },
    inputs: {
      id: "id",
      ariaLabel: "ariaLabel",
      style: "style",
      styleClass: "styleClass",
      panelStyle: "panelStyle",
      panelStyleClass: "panelStyleClass",
      inputId: "inputId",
      disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      readonly: [2, "readonly", "readonly", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      group: [2, "group", "group", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      filter: [2, "filter", "filter", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      filterPlaceHolder: "filterPlaceHolder",
      filterLocale: "filterLocale",
      overlayVisible: [2, "overlayVisible", "overlayVisible", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      variant: "variant",
      appendTo: "appendTo",
      dataKey: "dataKey",
      name: "name",
      ariaLabelledBy: "ariaLabelledBy",
      displaySelectedLabel: "displaySelectedLabel",
      maxSelectedLabels: "maxSelectedLabels",
      selectionLimit: [2, "selectionLimit", "selectionLimit", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      selectedItemsLabel: "selectedItemsLabel",
      showToggleAll: [2, "showToggleAll", "showToggleAll", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      resetFilterOnHide: [2, "resetFilterOnHide", "resetFilterOnHide", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      dropdownIcon: "dropdownIcon",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      optionGroupLabel: "optionGroupLabel",
      optionGroupChildren: "optionGroupChildren",
      showHeader: [2, "showHeader", "showHeader", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      filterBy: "filterBy",
      scrollHeight: "scrollHeight",
      lazy: [2, "lazy", "lazy", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      loading: [2, "loading", "loading", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      loadingIcon: "loadingIcon",
      virtualScrollOptions: "virtualScrollOptions",
      overlayOptions: "overlayOptions",
      ariaFilterLabel: "ariaFilterLabel",
      filterMatchMode: "filterMatchMode",
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      autofocusFilter: [2, "autofocusFilter", "autofocusFilter", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      display: "display",
      autocomplete: "autocomplete",
      showClear: [2, "showClear", "showClear", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      defaultLabel: "defaultLabel",
      placeholder: "placeholder",
      options: "options",
      filterValue: "filterValue",
      itemSize: "itemSize",
      selectAll: "selectAll",
      focusOnHover: [2, "focusOnHover", "focusOnHover", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      filterFields: "filterFields",
      selectOnFocus: [2, "selectOnFocus", "selectOnFocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    outputs: {
      onChange: "onChange",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClick: "onClick",
      onClear: "onClear",
      onPanelShow: "onPanelShow",
      onPanelHide: "onPanelHide",
      onLazyLoad: "onLazyLoad",
      onRemove: "onRemove",
      onSelectAllChange: "onSelectAllChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MULTISELECT_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
    ngContentSelectors: _c15,
    decls: 17,
    vars: 43,
    consts: [["container", ""], ["focusInput", ""], ["elseBlock", ""], ["overlay", ""], ["token", ""], ["firstHiddenFocusableEl", ""], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], ["builtInFilterElement", ""], ["headerCheckbox", ""], ["filterInput", ""], ["scroller", ""], ["items", ""], ["emptyFilter", ""], ["empty", ""], [3, "click", "ngClass", "ngStyle"], [1, "p-hidden-accessible"], ["role", "combobox", "pAutoFocus", "", 3, "focus", "blur", "keydown", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "autofocus"], [1, "p-multiselect-label-container", 3, "mouseleave", "pTooltip", "tooltipDisabled", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-multiselect-trigger"], [4, "ngIf", "ngIfElse"], [3, "visibleChange", "onAnimationStart", "onHide", "visible", "options", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions"], ["pTemplate", "content"], ["class", "p-multiselect-token", 4, "ngFor", "ngForOf"], [1, "p-multiselect-token"], [1, "p-multiselect-token-label"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-multiselect-token-icon", 3, "click", 4, "ngIf"], [3, "click", "styleClass"], [1, "p-multiselect-token-icon", 3, "click"], [4, "ngTemplateOutlet"], ["class", "p-multiselect-clear-icon", 3, "click", 4, "ngIf"], [1, "p-multiselect-clear-icon", 3, "click"], ["aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["aria-hidden", "true", 3, "class", 4, "ngIf"], ["aria-hidden", "true", 3, "ngClass"], ["aria-hidden", "true"], ["class", "p-multiselect-trigger-icon", 4, "ngIf"], ["class", "p-multiselect-trigger-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-multiselect-trigger-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-multiselect-trigger-icon"], [3, "ngClass", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus"], ["class", "p-multiselect-header", 4, "ngIf"], [1, "p-multiselect-items-wrapper"], [3, "items", "style", "itemSize", "autoSize", "tabindex", "lazy", "options", "onLazyLoad", 4, "ngIf"], ["class", "p-multiselect-footer", 4, "ngIf"], [1, "p-multiselect-header"], ["class", "p-checkbox p-component", 3, "ngClass", "click", "keydown", 4, "ngIf"], ["class", "p-multiselect-filter-container", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-multiselect-close", "p-link", "p-button-icon-only", 3, "click"], ["class", "p-multiselect-close-icon", 4, "ngIf"], [1, "p-checkbox", "p-component", 3, "click", "keydown", "ngClass"], ["type", "checkbox", 3, "focus", "blur", "readonly", "disabled"], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass"], ["class", "p-checkbox-icon", 4, "ngIf"], [1, "p-checkbox-icon"], [1, "p-multiselect-filter-container"], ["type", "text", "role", "searchbox", "role", "searchbox", 1, "p-multiselect-filter", "p-inputtext", "p-component", 3, "input", "keydown", "click", "blur", "value", "disabled"], ["class", "p-multiselect-filter-icon", 4, "ngIf"], [1, "p-multiselect-filter-icon"], [1, "p-multiselect-close-icon"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "tabindex", "lazy", "options"], ["pTemplate", "loader"], ["role", "listbox", "aria-multiselectable", "true", 1, "p-multiselect-items", "p-component", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-multiselect-empty-message", "role", "option", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-multiselect-item-group", 3, "ngStyle"], [3, "onClick", "onMouseEnter", "id", "option", "selected", "label", "disabled", "template", "checkIconTemplate", "itemCheckboxIconTemplate", "itemSize", "focused", "ariaPosInset", "ariaSetSize"], ["role", "option", 1, "p-multiselect-empty-message", 3, "ngStyle"], [1, "p-multiselect-footer"]],
    template: function MultiSelect_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onContainerClick($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16)(3, "input", 17, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MultiSelect_Template_input_focus_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputFocus($event));
        })("blur", function MultiSelect_Template_input_blur_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputBlur($event));
        })("keydown", function MultiSelect_Template_input_keydown_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onKeyDown($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function MultiSelect_Template_div_mouseleave_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.labelContainerMouseLeave());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MultiSelect_ng_container_7_Template, 3, 2, "ng-container", 20)(8, MultiSelect_ng_container_8_Template, 1, 0, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MultiSelect_ng_container_9_Template, 3, 2, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MultiSelect_ng_container_11_Template, 3, 2, "ng-container", 23)(12, MultiSelect_ng_template_12_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p-overlay", 24, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("visibleChange", function MultiSelect_Template_p_overlay_visibleChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAnimationStart", function MultiSelect_Template_p_overlay_onAnimationStart_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onOverlayAnimationStart($event));
        })("onHide", function MultiSelect_Template_p_overlay_onHide_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MultiSelect_ng_template_16_Template, 12, 17, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_19_0;
        const elseBlock_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass)("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-p-hidden-accessible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pTooltip", ctx.tooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass)("autofocus", ctx.autofocus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", ctx.disabled)("id", ctx.inputId)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", (tmp_19_0 = ctx.overlayVisible) !== null && tmp_19_0 !== undefined ? tmp_19_0 : false)("aria-controls", ctx.overlayVisible ? ctx.id + "_list" : null)("tabindex", !ctx.disabled ? ctx.tabindex : -1)("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pTooltip", ctx.tooltip)("tooltipDisabled", ctx._disableTooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.labelClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedItemsTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.selectedItemsTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](40, _c16, ctx.selectedOptions, ctx.removeOption.bind(ctx)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisibleClearIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", elseBlock_r24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("visible", ctx.overlayVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("autoZIndex", ctx.autoZIndex)("baseZIndex", ctx.baseZIndex)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.Overlay, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, primeng_scroller__WEBPACK_IMPORTED_MODULE_10__.Scroller, primeng_autofocus__WEBPACK_IMPORTED_MODULE_11__.AutoFocus, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_12__.SearchIcon, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_13__.TimesCircleIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_14__.TimesIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_15__.ChevronDownIcon, MultiSelectItem],
    styles: ["@layer primeng{.p-multiselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-multiselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-multiselect-label-container{overflow:hidden;flex:1 1 auto;cursor:pointer;display:flex}.p-multiselect-label{display:block;white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-multiselect-token-icon{cursor:pointer}.p-multiselect-token-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{margin:0;padding:0;list-style-type:none}.p-multiselect-item{cursor:pointer;display:flex;align-items:center;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-multiselect-header{display:flex;align-items:center;justify-content:space-between}.p-multiselect-filter-container{position:relative;flex:1 1 auto}.p-multiselect-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;position:relative}.p-fluid .p-multiselect{display:flex}.p-multiselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-multiselect-clearable{position:relative}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiSelect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-multiSelect',
      template: `
        <div #container [attr.id]="id" [ngClass]="containerClass" [ngStyle]="style" [class]="styleClass" (click)="onContainerClick($event)">
            <div class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                <input
                    #focusInput
                    [pTooltip]="tooltip"
                    [tooltipPosition]="tooltipPosition"
                    [positionStyle]="tooltipPositionStyle"
                    [tooltipStyleClass]="tooltipStyleClass"
                    [attr.aria-disabled]="disabled"
                    [attr.id]="inputId"
                    role="combobox"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-haspopup]="'listbox'"
                    [attr.aria-expanded]="overlayVisible ?? false"
                    [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                    [attr.tabindex]="!disabled ? tabindex : -1"
                    [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    (keydown)="onKeyDown($event)"
                    pAutoFocus
                    [autofocus]="autofocus"
                />
            </div>
            <div
                class="p-multiselect-label-container"
                [pTooltip]="tooltip"
                (mouseleave)="labelContainerMouseLeave()"
                [tooltipDisabled]="_disableTooltip"
                [tooltipPosition]="tooltipPosition"
                [positionStyle]="tooltipPositionStyle"
                [tooltipStyleClass]="tooltipStyleClass"
            >
                <div [ngClass]="labelClass">
                    <ng-container *ngIf="!selectedItemsTemplate">
                        <ng-container *ngIf="display === 'comma'">{{ label() || 'empty' }}</ng-container>
                        <ng-container *ngIf="display === 'chip'">
                            <div #token *ngFor="let item of chipSelectedItems(); let i = index" class="p-multiselect-token">
                                <span class="p-multiselect-token-label">{{ getLabelByValue(item) }}</span>
                                <ng-container *ngIf="!disabled">
                                    <TimesCircleIcon *ngIf="!removeTokenIconTemplate" [styleClass]="'p-multiselect-token-icon'" (click)="removeOption(item, event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true" />
                                    <span *ngIf="removeTokenIconTemplate" class="p-multiselect-token-icon" (click)="removeOption(item, event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true">
                                        <ng-container *ngTemplateOutlet="removeTokenIconTemplate"></ng-container>
                                    </span>
                                </ng-container>
                            </div>
                            <ng-container *ngIf="!modelValue() || modelValue().length === 0">{{ placeholder() || defaultLabel || 'empty' }}</ng-container>
                        </ng-container>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="selectedItemsTemplate; context: { $implicit: selectedOptions, removeChip: removeOption.bind(this) }"></ng-container>
                </div>
                <ng-container *ngIf="isVisibleClearIcon">
                    <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-multiselect-clear-icon'" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true" />
                    <span *ngIf="clearIconTemplate" class="p-multiselect-clear-icon" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true">
                        <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
            <div class="p-multiselect-trigger">
                <ng-container *ngIf="loading; else elseBlock">
                    <ng-container *ngIf="loadingIconTemplate">
                        <ng-container *ngTemplateOutlet="loadingIconTemplate"></ng-container>
                    </ng-container>
                    <ng-container *ngIf="!loadingIconTemplate">
                        <span *ngIf="loadingIcon" [ngClass]="'p-multiselect-trigger-icon pi-spin ' + loadingIcon" aria-hidden="true"></span>
                        <span *ngIf="!loadingIcon" [class]="'p-multiselect-trigger-icon pi pi-spinner pi-spin'" aria-hidden="true"></span>
                    </ng-container>
                </ng-container>
                <ng-template #elseBlock>
                    <ng-container *ngIf="!dropdownIconTemplate">
                        <span *ngIf="dropdownIcon" class="p-multiselect-trigger-icon" [ngClass]="dropdownIcon" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true"></span>
                        <ChevronDownIcon *ngIf="!dropdownIcon" [styleClass]="'p-multiselect-trigger-icon'" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true" />
                    </ng-container>
                    <span *ngIf="dropdownIconTemplate" class="p-multiselect-trigger-icon" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true">
                        <ng-template *ngTemplateOutlet="dropdownIconTemplate"></ng-template>
                    </span>
                </ng-template>
            </div>
            <p-overlay
                #overlay
                [(visible)]="overlayVisible"
                [options]="overlayOptions"
                [target]="'@parent'"
                [appendTo]="appendTo"
                [autoZIndex]="autoZIndex"
                [baseZIndex]="baseZIndex"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
                (onAnimationStart)="onOverlayAnimationStart($event)"
                (onHide)="hide()"
            >
                <ng-template pTemplate="content">
                    <div [attr.id]="id + '_list'" [ngClass]="'p-multiselect-panel p-component'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                        <span
                            #firstHiddenFocusableEl
                            role="presentation"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onFirstHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        >
                        </span>
                        <div class="p-multiselect-header" *ngIf="showHeader">
                            <ng-content select="p-header"></ng-content>
                            <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                            <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                                <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                            </ng-container>
                            <ng-template #builtInFilterElement>
                                <div
                                    class="p-checkbox p-component"
                                    *ngIf="showToggleAll && !selectionLimit"
                                    [ngClass]="{ 'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled', 'p-checkbox-disabled': disabled || toggleAllDisabled }"
                                    (click)="onToggleAll($event)"
                                    (keydown)="onHeaderCheckboxKeyDown($event)"
                                >
                                    <div class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                                        <input
                                            #headerCheckbox
                                            type="checkbox"
                                            [readonly]="readonly"
                                            [attr.checked]="allSelected()"
                                            (focus)="onHeaderCheckboxFocus()"
                                            (blur)="onHeaderCheckboxBlur()"
                                            [disabled]="disabled || toggleAllDisabled"
                                            [attr.aria-label]="toggleAllAriaLabel"
                                        />
                                    </div>
                                    <div
                                        class="p-checkbox-box"
                                        role="checkbox"
                                        [attr.aria-label]="toggleAllAriaLabel"
                                        [attr.aria-checked]="allSelected()"
                                        [ngClass]="{ 'p-highlight': allSelected(), 'p-focus': headerCheckboxFocus, 'p-disabled': disabled || toggleAllDisabled }"
                                    >
                                        <ng-container *ngIf="allSelected() || partialSelected()">
                                            <ng-container *ngIf="!checkIconTemplate && !headerCheckboxIconTemplate">
                                                <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="allSelected()" [attr.aria-hidden]="true" />
                                            </ng-container>

                                            <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                                                <ng-template *ngTemplateOutlet="checkIconTemplate; context: { $implicit: allSelected() }"></ng-template>
                                            </span>
                                            <span *ngIf="headerCheckboxIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                                                <ng-template *ngTemplateOutlet="headerCheckboxIconTemplate; context: { $implicit: allSelected(), partialSelected: partialSelected() }"></ng-template>
                                            </span>
                                        </ng-container>
                                    </div>
                                </div>
                                <div class="p-multiselect-filter-container" *ngIf="filter">
                                    <input
                                        #filterInput
                                        type="text"
                                        role="searchbox"
                                        [attr.autocomplete]="autocomplete"
                                        [attr.placeholder]="filterPlaceHolder"
                                        role="searchbox"
                                        [attr.aria-owns]="id + '_list'"
                                        [attr.aria-activedescendant]="focusedOptionId"
                                        [value]="_filterValue() || ''"
                                        (input)="onFilterInputChange($event)"
                                        (keydown)="onFilterKeyDown($event)"
                                        (click)="onInputClick($event)"
                                        (blur)="onFilterBlur($event)"
                                        class="p-multiselect-filter p-inputtext p-component"
                                        [disabled]="disabled"
                                        [attr.placeholder]="filterPlaceHolder"
                                        [attr.aria-label]="ariaFilterLabel"
                                    />
                                    <SearchIcon [styleClass]="'p-multiselect-filter-icon'" *ngIf="!filterIconTemplate" />
                                    <span *ngIf="filterIconTemplate" class="p-multiselect-filter-icon">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                                    </span>
                                </div>

                                <button class="p-multiselect-close p-link p-button-icon-only" type="button" (click)="close($event)" pRipple [attr.aria-label]="closeAriaLabel">
                                    <TimesIcon [styleClass]="'p-multiselect-close-icon'" *ngIf="!closeIconTemplate" />
                                    <span *ngIf="closeIconTemplate" class="p-multiselect-close-icon">
                                        <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>
                                    </span>
                                </button>
                            </ng-template>
                        </div>
                        <div class="p-multiselect-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                            <p-scroller
                                *ngIf="virtualScroll"
                                #scroller
                                [items]="visibleOptions()"
                                [style]="{ height: scrollHeight }"
                                [itemSize]="virtualScrollItemSize || _itemSize"
                                [autoSize]="true"
                                [tabindex]="-1"
                                [lazy]="lazy"
                                (onLazyLoad)="onLazyLoad.emit($event)"
                                [options]="virtualScrollOptions"
                            >
                                <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                                </ng-template>
                                <ng-container *ngIf="loaderTemplate">
                                    <ng-template pTemplate="loader" let-scrollerOptions="options">
                                        <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                    </ng-template>
                                </ng-container>
                            </p-scroller>
                            <ng-container *ngIf="!virtualScroll">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                            </ng-container>

                            <ng-template #buildInItems let-items let-scrollerOptions="options">
                                <ul #items class="p-multiselect-items p-component" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox" aria-multiselectable="true" [attr.aria-label]="listLabel">
                                    <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                        <ng-container *ngIf="isOptionGroup(option)">
                                            <li [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" class="p-multiselect-item-group" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                                <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                                <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                            </li>
                                        </ng-container>
                                        <ng-container *ngIf="!isOptionGroup(option)">
                                            <p-multiSelectItem
                                                [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                                [option]="option"
                                                [selected]="isSelected(option)"
                                                [label]="getOptionLabel(option)"
                                                [disabled]="isOptionDisabled(option)"
                                                [template]="itemTemplate"
                                                [checkIconTemplate]="checkIconTemplate"
                                                [itemCheckboxIconTemplate]="itemCheckboxIconTemplate"
                                                [itemSize]="scrollerOptions.itemSize"
                                                [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                                [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                                [ariaSetSize]="ariaSetSize"
                                                (onClick)="onOptionSelect($event, false, getOptionIndex(i, scrollerOptions))"
                                                (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                            ></p-multiSelectItem>
                                        </ng-container>
                                    </ng-template>

                                    <li *ngIf="hasFilter() && isEmpty()" class="p-multiselect-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                        <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                            {{ emptyFilterMessageLabel }}
                                        </ng-container>
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                                    </li>
                                    <li *ngIf="!hasFilter() && isEmpty()" class="p-multiselect-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                        <ng-container *ngIf="!emptyTemplate; else empty">
                                            {{ emptyMessageLabel }}
                                        </ng-container>
                                        <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                                    </li>
                                </ul>
                            </ng-template>
                        </div>
                        <div class="p-multiselect-footer" *ngIf="footerFacet || footerTemplate">
                            <ng-content select="p-footer"></ng-content>
                            <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                        </div>

                        <span
                            #lastHiddenFocusableEl
                            role="presentation"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onLastHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        ></span>
                    </div>
                </ng-template>
            </p-overlay>
        </div>
    `,
      host: {
        class: 'p-element p-inputwrapper',
        '[class.p-inputwrapper-focus]': 'focused || overlayVisible',
        '[class.p-inputwrapper-filled]': 'filled'
      },
      providers: [MULTISELECT_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      styles: ["@layer primeng{.p-multiselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-multiselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-multiselect-label-container{overflow:hidden;flex:1 1 auto;cursor:pointer;display:flex}.p-multiselect-label{display:block;white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-multiselect-token-icon{cursor:pointer}.p-multiselect-token-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{margin:0;padding:0;list-style-type:none}.p-multiselect-item{cursor:pointer;display:flex;align-items:center;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-multiselect-header{display:flex;align-items:center;justify-content:space-between}.p-multiselect-filter-container{position:relative;flex:1 1 auto}.p-multiselect-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;position:relative}.p-fluid .p-multiselect{display:flex}.p-multiselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-multiselect-clearable{position:relative}}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_2__.FilterService
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_2__.OverlayService
  }], {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    group: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    filter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    filterPlaceHolder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterLocale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    overlayVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    variant: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dataKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displaySelectedLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSelectedLabels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionLimit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    selectedItemsLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showToggleAll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    emptyFilterMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    emptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resetFilterOnHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    dropdownIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionGroupLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionGroupChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    filterBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lazy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    loadingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScrollOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    overlayOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaFilterLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterMatchMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipPositionStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autofocusFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    display: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autocomplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    autofocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    defaultLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectAll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    focusOnHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    filterFields: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectOnFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    autoOptionFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPanelShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPanelHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onLazyLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onRemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSelectAllChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    containerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['container']
    }],
    overlayViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['overlay']
    }],
    filterInputChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['filterInput']
    }],
    focusInputViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['focusInput']
    }],
    itemsViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['items']
    }],
    scroller: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['scroller']
    }],
    lastHiddenFocusableElementOnOverlay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['lastHiddenFocusableEl']
    }],
    firstHiddenFocusableElementOnOverlay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['firstHiddenFocusableEl']
    }],
    headerCheckboxViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['headerCheckbox']
    }],
    footerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__.Footer]
    }],
    headerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__.Header]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate]
    }]
  });
})();
class MultiSelectModule {
  static ɵfac = function MultiSelectModule_Factory(t) {
    return new (t || MultiSelectModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MultiSelectModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_10__.ScrollerModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_11__.AutoFocusModule, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_12__.SearchIcon, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_13__.TimesCircleIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_14__.TimesIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_15__.ChevronDownIcon, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_16__.MinusIcon, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_10__.ScrollerModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_10__.ScrollerModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_11__.AutoFocusModule, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_12__.SearchIcon, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_13__.TimesCircleIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_14__.TimesIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_15__.ChevronDownIcon, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_16__.MinusIcon],
      exports: [MultiSelect, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_10__.ScrollerModule],
      declarations: [MultiSelect, MultiSelectItem]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3576:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-overlay.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OVERLAY_VALUE_ACCESSOR: () => (/* binding */ OVERLAY_VALUE_ACCESSOR),
/* harmony export */   Overlay: () => (/* binding */ Overlay),
/* harmony export */   OverlayModule: () => (/* binding */ OverlayModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/utils */ 7251);










const _c0 = ["overlay"];
const _c1 = ["content"];
const _c2 = ["*"];
const _c3 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) => ({
  "p-overlay p-component": true,
  "p-overlay-modal p-component-overlay p-component-overlay-enter": a0,
  "p-overlay-center": a1,
  "p-overlay-top": a2,
  "p-overlay-top-start": a3,
  "p-overlay-top-end": a4,
  "p-overlay-bottom": a5,
  "p-overlay-bottom-start": a6,
  "p-overlay-bottom-end": a7,
  "p-overlay-left": a8,
  "p-overlay-left-start": a9,
  "p-overlay-left-end": a10,
  "p-overlay-right": a11,
  "p-overlay-right-start": a12,
  "p-overlay-right-end": a13
});
const _c4 = (a0, a1, a2) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1,
  transform: a2
});
const _c5 = a0 => ({
  value: "visible",
  params: a0
});
const _c6 = a0 => ({
  mode: a0
});
const _c7 = a0 => ({
  $implicit: a0
});
function Overlay_div_0_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Overlay_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Overlay_div_0_div_2_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayContentClick($event));
    })("@overlayContentAnimation.start", function Overlay_div_0_div_2_Template_div_animation_overlayContentAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayContentAnimationStart($event));
    })("@overlayContentAnimation.done", function Overlay_div_0_div_2_Template_div_animation_overlayContentAnimation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayContentAnimationDone($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Overlay_div_0_div_2_ng_container_3_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.contentStyle)("ngClass", "p-overlay-content")("@overlayContentAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](7, _c4, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions, ctx_r1.transformOptions[ctx_r1.modal ? ctx_r1.overlayResponsiveDirection : "default"])));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c6, ctx_r1.overlayMode)));
  }
}
function Overlay_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Overlay_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Overlay_div_0_div_2_Template, 4, 17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](5, _c3, [ctx_r1.modal, ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "center", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "top", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "top-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "top-end", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "bottom", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "bottom-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "bottom-end", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "left", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "left-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "left-end", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "right", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "right-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "right-end"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.visible);
  }
}
const OVERLAY_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Overlay),
  multi: true
};
const showOverlayContentAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: '{{transform}}',
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{showTransitionParams}}')]);
const hideOverlayContentAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: '{{transform}}',
  opacity: 0
}))]);
/**
 * This API allows overlay components to be controlled from the PrimeNGConfig. In this way, all overlay components in the application can have the same behavior.
 * @group Components
 */
class Overlay {
  document;
  platformId;
  el;
  renderer;
  config;
  overlayService;
  cd;
  zone;
  /**
   * The visible property is an input that determines the visibility of the component.
   * @defaultValue false
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.modalVisible) {
      this.modalVisible = true;
    }
  }
  /**
   * The mode property is an input that determines the overlay mode type or string.
   * @defaultValue null
   * @group Props
   */
  get mode() {
    return this._mode || this.overlayOptions?.mode;
  }
  set mode(value) {
    this._mode = value;
  }
  /**
   * The style property is an input that determines the style object for the component.
   * @defaultValue null
   * @group Props
   */
  get style() {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.merge(this._style, this.modal ? this.overlayResponsiveOptions?.style : this.overlayOptions?.style);
  }
  set style(value) {
    this._style = value;
  }
  /**
   * The styleClass property is an input that determines the CSS class(es) for the component.
   * @defaultValue null
   * @group Props
   */
  get styleClass() {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.merge(this._styleClass, this.modal ? this.overlayResponsiveOptions?.styleClass : this.overlayOptions?.styleClass);
  }
  set styleClass(value) {
    this._styleClass = value;
  }
  /**
   * The contentStyle property is an input that determines the style object for the content of the component.
   * @defaultValue null
   * @group Props
   */
  get contentStyle() {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.merge(this._contentStyle, this.modal ? this.overlayResponsiveOptions?.contentStyle : this.overlayOptions?.contentStyle);
  }
  set contentStyle(value) {
    this._contentStyle = value;
  }
  /**
   * The contentStyleClass property is an input that determines the CSS class(es) for the content of the component.
   * @defaultValue null
   * @group Props
   */
  get contentStyleClass() {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.merge(this._contentStyleClass, this.modal ? this.overlayResponsiveOptions?.contentStyleClass : this.overlayOptions?.contentStyleClass);
  }
  set contentStyleClass(value) {
    this._contentStyleClass = value;
  }
  /**
   * The target property is an input that specifies the target element or selector for the component.
   * @defaultValue null
   * @group Props
   */
  get target() {
    const value = this._target || this.overlayOptions?.target;
    return value === undefined ? '@prev' : value;
  }
  set target(value) {
    this._target = value;
  }
  /**
   * Overlay can be mounted into its location, body or DOM element instance using this option.
   * @defaultValue null
   * @group Props
   */
  get appendTo() {
    return this._appendTo || this.overlayOptions?.appendTo;
  }
  set appendTo(value) {
    this._appendTo = value;
  }
  /**
   * The autoZIndex determines whether to automatically manage layering. Its default value is 'false'.
   * @defaultValue false
   * @group Props
   */
  get autoZIndex() {
    const value = this._autoZIndex || this.overlayOptions?.autoZIndex;
    return value === undefined ? true : value;
  }
  set autoZIndex(value) {
    this._autoZIndex = value;
  }
  /**
   * The baseZIndex is base zIndex value to use in layering.
   * @defaultValue null
   * @group Props
   */
  get baseZIndex() {
    const value = this._baseZIndex || this.overlayOptions?.baseZIndex;
    return value === undefined ? 0 : value;
  }
  set baseZIndex(value) {
    this._baseZIndex = value;
  }
  /**
   * Transition options of the show or hide animation.
   * @defaultValue .12s cubic-bezier(0, 0, 0.2, 1)
   * @group Props
   */
  get showTransitionOptions() {
    const value = this._showTransitionOptions || this.overlayOptions?.showTransitionOptions;
    return value === undefined ? '.12s cubic-bezier(0, 0, 0.2, 1)' : value;
  }
  set showTransitionOptions(value) {
    this._showTransitionOptions = value;
  }
  /**
   * The hideTransitionOptions property is an input that determines the CSS transition options for hiding the component.
   * @defaultValue .1s linear
   * @group Props
   */
  get hideTransitionOptions() {
    const value = this._hideTransitionOptions || this.overlayOptions?.hideTransitionOptions;
    return value === undefined ? '.1s linear' : value;
  }
  set hideTransitionOptions(value) {
    this._hideTransitionOptions = value;
  }
  /**
   * The listener property is an input that specifies the listener object for the component.
   * @defaultValue null
   * @group Props
   */
  get listener() {
    return this._listener || this.overlayOptions?.listener;
  }
  set listener(value) {
    this._listener = value;
  }
  /**
   * It is the option used to determine in which mode it should appear according to the given media or breakpoint.
   * @defaultValue null
   * @group Props
   */
  get responsive() {
    return this._responsive || this.overlayOptions?.responsive;
  }
  set responsive(val) {
    this._responsive = val;
  }
  /**
   * The options property is an input that specifies the overlay options for the component.
   * @defaultValue null
   * @group Props
   */
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
  }
  /**
   * This EventEmitter is used to notify changes in the visibility state of a component.
   * @param {Boolean} boolean - Value of visibility as boolean.
   * @group Emits
   */
  visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke before the overlay is shown.
   * @param {OverlayOnBeforeShowEvent} event - Custom overlay before show event.
   * @group Emits
   */
  onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when the overlay is shown.
   * @param {OverlayOnShowEvent} event - Custom overlay show event.
   * @group Emits
   */
  onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke before the overlay is hidden.
   * @param {OverlayOnBeforeHideEvent} event - Custom overlay before hide event.
   * @group Emits
   */
  onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when the overlay is hidden
   * @param {OverlayOnHideEvent} event - Custom hide event.
   * @group Emits
   */
  onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when the animation is started.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onAnimationStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when the animation is done.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onAnimationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  templates;
  overlayViewChild;
  contentViewChild;
  contentTemplate;
  _visible = false;
  _mode;
  _style;
  _styleClass;
  _contentStyle;
  _contentStyleClass;
  _target;
  _appendTo;
  _autoZIndex;
  _baseZIndex;
  _showTransitionOptions;
  _hideTransitionOptions;
  _listener;
  _responsive;
  _options;
  modalVisible = false;
  isOverlayClicked = false;
  isOverlayContentClicked = false;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  documentKeyboardListener;
  window;
  transformOptions = {
    default: 'scaleY(0.8)',
    center: 'scale(0.7)',
    top: 'translate3d(0px, -100%, 0px)',
    'top-start': 'translate3d(0px, -100%, 0px)',
    'top-end': 'translate3d(0px, -100%, 0px)',
    bottom: 'translate3d(0px, 100%, 0px)',
    'bottom-start': 'translate3d(0px, 100%, 0px)',
    'bottom-end': 'translate3d(0px, 100%, 0px)',
    left: 'translate3d(-100%, 0px, 0px)',
    'left-start': 'translate3d(-100%, 0px, 0px)',
    'left-end': 'translate3d(-100%, 0px, 0px)',
    right: 'translate3d(100%, 0px, 0px)',
    'right-start': 'translate3d(100%, 0px, 0px)',
    'right-end': 'translate3d(100%, 0px, 0px)'
  };
  get modal() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      return this.mode === 'modal' || this.overlayResponsiveOptions && this.window?.matchMedia(this.overlayResponsiveOptions.media?.replace('@media', '') || `(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches;
    }
  }
  get overlayMode() {
    return this.mode || (this.modal ? 'modal' : 'overlay');
  }
  get overlayOptions() {
    return {
      ...this.config?.overlayOptions,
      ...this.options
    }; // TODO: Improve performance
  }
  get overlayResponsiveOptions() {
    return {
      ...this.overlayOptions?.responsive,
      ...this.responsive
    }; // TODO: Improve performance
  }
  get overlayResponsiveDirection() {
    return this.overlayResponsiveOptions?.direction || 'center';
  }
  get overlayEl() {
    return this.overlayViewChild?.nativeElement;
  }
  get contentEl() {
    return this.contentViewChild?.nativeElement;
  }
  get targetEl() {
    return primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getTargetElement(this.target, this.el?.nativeElement);
  }
  constructor(document, platformId, el, renderer, config, overlayService, cd, zone) {
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.config = config;
    this.overlayService = overlayService;
    this.cd = cd;
    this.zone = zone;
    this.window = this.document.defaultView;
  }
  ngAfterContentInit() {
    this.templates?.forEach(item => {
      switch (item.getType()) {
        case 'content':
          this.contentTemplate = item.template;
          break;
        // TODO: new template types may be added.
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  show(overlay, isFocus = false) {
    this.onVisibleChange(true);
    this.handleEvents('onShow', {
      overlay: overlay || this.overlayEl,
      target: this.targetEl,
      mode: this.overlayMode
    });
    isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.focus(this.targetEl);
    this.modal && primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.addClass(this.document?.body, 'p-overflow-hidden');
  }
  hide(overlay, isFocus = false) {
    if (!this.visible) {
      return;
    } else {
      this.onVisibleChange(false);
      this.handleEvents('onHide', {
        overlay: overlay || this.overlayEl,
        target: this.targetEl,
        mode: this.overlayMode
      });
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.focus(this.targetEl);
      this.modal && primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.removeClass(this.document?.body, 'p-overflow-hidden');
    }
  }
  alignOverlay() {
    !this.modal && primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.alignOverlay(this.overlayEl, this.targetEl, this.appendTo);
  }
  onVisibleChange(visible) {
    this._visible = visible;
    this.visibleChange.emit(visible);
  }
  onOverlayClick() {
    this.isOverlayClicked = true;
  }
  onOverlayContentClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.targetEl
    });
    this.isOverlayContentClicked = true;
  }
  onOverlayContentAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        this.handleEvents('onBeforeShow', {
          overlay: this.overlayEl,
          target: this.targetEl,
          mode: this.overlayMode
        });
        if (this.autoZIndex) {
          primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ZIndexUtils.set(this.overlayMode, this.overlayEl, this.baseZIndex + this.config?.zIndex[this.overlayMode]);
        }
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.appendOverlay(this.overlayEl, this.appendTo === 'body' ? this.document.body : this.appendTo, this.appendTo);
        this.alignOverlay();
        break;
      case 'void':
        this.handleEvents('onBeforeHide', {
          overlay: this.overlayEl,
          target: this.targetEl,
          mode: this.overlayMode
        });
        this.modal && primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.addClass(this.overlayEl, 'p-component-overlay-leave');
        break;
    }
    this.handleEvents('onAnimationStart', event);
  }
  onOverlayContentAnimationDone(event) {
    const container = this.overlayEl || event.element.parentElement;
    switch (event.toState) {
      case 'visible':
        this.show(container, true);
        this.bindListeners();
        break;
      case 'void':
        this.hide(container, true);
        this.unbindListeners();
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.appendOverlay(this.overlayEl, this.targetEl, this.appendTo);
        primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ZIndexUtils.clear(container);
        this.modalVisible = false;
        this.cd.markForCheck();
        break;
    }
    this.handleEvents('onAnimationDone', event);
  }
  handleEvents(name, params) {
    this[name].emit(params);
    this.options && this.options[name] && this.options[name](params);
    this.config?.overlayOptions && (this.config?.overlayOptions)[name] && (this.config?.overlayOptions)[name](params);
  }
  bindListeners() {
    this.bindScrollListener();
    this.bindDocumentClickListener();
    this.bindDocumentResizeListener();
    this.bindDocumentKeyboardListener();
  }
  unbindListeners() {
    this.unbindScrollListener();
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindDocumentKeyboardListener();
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_5__.ConnectedOverlayScrollHandler(this.targetEl, event => {
        const valid = this.listener ? this.listener(event, {
          type: 'scroll',
          mode: this.overlayMode,
          valid: true
        }) : true;
        valid && this.hide(event, true);
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = this.renderer.listen(this.document, 'click', event => {
        const isTargetClicked = this.targetEl && (this.targetEl.isSameNode(event.target) || !this.isOverlayClicked && this.targetEl.contains(event.target));
        const isOutsideClicked = !isTargetClicked && !this.isOverlayContentClicked;
        const valid = this.listener ? this.listener(event, {
          type: 'outside',
          mode: this.overlayMode,
          valid: event.which !== 3 && isOutsideClicked
        }) : isOutsideClicked;
        valid && this.hide(event);
        this.isOverlayClicked = this.isOverlayContentClicked = false;
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.window, 'resize', event => {
        const valid = this.listener ? this.listener(event, {
          type: 'resize',
          mode: this.overlayMode,
          valid: !primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.isTouchDevice()
        }) : !primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.isTouchDevice();
        valid && this.hide(event, true);
      });
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindDocumentKeyboardListener() {
    if (this.documentKeyboardListener) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.documentKeyboardListener = this.renderer.listen(this.window, 'keydown', event => {
        if (this.overlayOptions.hideOnEscape === false || event.code !== 'Escape') {
          return;
        }
        const valid = this.listener ? this.listener(event, {
          type: 'keydown',
          mode: this.overlayMode,
          valid: !primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.isTouchDevice()
        }) : !primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.isTouchDevice();
        if (valid) {
          this.zone.run(() => {
            this.hide(event, true);
          });
        }
      });
    });
  }
  unbindDocumentKeyboardListener() {
    if (this.documentKeyboardListener) {
      this.documentKeyboardListener();
      this.documentKeyboardListener = null;
    }
  }
  ngOnDestroy() {
    this.hide(this.overlayEl, true);
    if (this.overlayEl) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.appendOverlay(this.overlayEl, this.targetEl, this.appendTo);
      primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ZIndexUtils.clear(this.overlayEl);
    }
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.unbindListeners();
  }
  static ɵfac = function Overlay_Factory(t) {
    return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Overlay,
    selectors: [["p-overlay"]],
    contentQueries: function Overlay_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Overlay_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlayViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      visible: "visible",
      mode: "mode",
      style: "style",
      styleClass: "styleClass",
      contentStyle: "contentStyle",
      contentStyleClass: "contentStyleClass",
      target: "target",
      appendTo: "appendTo",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      listener: "listener",
      responsive: "responsive",
      options: "options"
    },
    outputs: {
      visibleChange: "visibleChange",
      onBeforeShow: "onBeforeShow",
      onShow: "onShow",
      onBeforeHide: "onBeforeHide",
      onHide: "onHide",
      onAnimationStart: "onAnimationStart",
      onAnimationDone: "onAnimationDone"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([OVERLAY_VALUE_ACCESSOR])],
    ngContentSelectors: _c2,
    decls: 1,
    vars: 1,
    consts: [["overlay", ""], ["content", ""], [3, "ngStyle", "class", "ngClass", "click", 4, "ngIf"], [3, "click", "ngStyle", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function Overlay_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Overlay_div_0_Template, 3, 20, "div", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalVisible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle],
    styles: ["@layer primeng{.p-overlay{position:absolute;top:0;left:0}.p-overlay-modal{display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%}.p-overlay-content{transform-origin:inherit}.p-overlay-modal>.p-overlay-content{z-index:1;width:90%}.p-overlay-top{align-items:flex-start}.p-overlay-top-start{align-items:flex-start;justify-content:flex-start}.p-overlay-top-end{align-items:flex-start;justify-content:flex-end}.p-overlay-bottom{align-items:flex-end}.p-overlay-bottom-start{align-items:flex-end;justify-content:flex-start}.p-overlay-bottom-end{align-items:flex-end;justify-content:flex-end}.p-overlay-left{justify-content:flex-start}.p-overlay-left-start{justify-content:flex-start;align-items:flex-start}.p-overlay-left-end{justify-content:flex-start;align-items:flex-end}.p-overlay-right{justify-content:flex-end}.p-overlay-right-start{justify-content:flex-end;align-items:flex-start}.p-overlay-right-end{justify-content:flex-end;align-items:flex-end}}\n"],
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('overlayContentAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.useAnimation)(showOverlayContentAnimation)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.useAnimation)(hideOverlayContentAnimation)])])]
    },
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Overlay, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-overlay',
      template: `
        <div
            *ngIf="modalVisible"
            #overlay
            [ngStyle]="style"
            [class]="styleClass"
            [ngClass]="{
                'p-overlay p-component': true,
                'p-overlay-modal p-component-overlay p-component-overlay-enter': modal,
                'p-overlay-center': modal && overlayResponsiveDirection === 'center',
                'p-overlay-top': modal && overlayResponsiveDirection === 'top',
                'p-overlay-top-start': modal && overlayResponsiveDirection === 'top-start',
                'p-overlay-top-end': modal && overlayResponsiveDirection === 'top-end',
                'p-overlay-bottom': modal && overlayResponsiveDirection === 'bottom',
                'p-overlay-bottom-start': modal && overlayResponsiveDirection === 'bottom-start',
                'p-overlay-bottom-end': modal && overlayResponsiveDirection === 'bottom-end',
                'p-overlay-left': modal && overlayResponsiveDirection === 'left',
                'p-overlay-left-start': modal && overlayResponsiveDirection === 'left-start',
                'p-overlay-left-end': modal && overlayResponsiveDirection === 'left-end',
                'p-overlay-right': modal && overlayResponsiveDirection === 'right',
                'p-overlay-right-start': modal && overlayResponsiveDirection === 'right-start',
                'p-overlay-right-end': modal && overlayResponsiveDirection === 'right-end'
            }"
            (click)="onOverlayClick()"
        >
            <div
                *ngIf="visible"
                #content
                [ngStyle]="contentStyle"
                [class]="contentStyleClass"
                [ngClass]="'p-overlay-content'"
                (click)="onOverlayContentClick($event)"
                [@overlayContentAnimation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions, transform: transformOptions[modal ? overlayResponsiveDirection : 'default'] } }"
                (@overlayContentAnimation.start)="onOverlayContentAnimationStart($event)"
                (@overlayContentAnimation.done)="onOverlayContentAnimationDone($event)"
            >
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: { mode: overlayMode } }"></ng-container>
            </div>
        </div>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('overlayContentAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.useAnimation)(showOverlayContentAnimation)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.useAnimation)(hideOverlayContentAnimation)])])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [OVERLAY_VALUE_ACCESSOR],
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-overlay{position:absolute;top:0;left:0}.p-overlay-modal{display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%}.p-overlay-content{transform-origin:inherit}.p-overlay-modal>.p-overlay-content{z-index:1;width:90%}.p-overlay-top{align-items:flex-start}.p-overlay-top-start{align-items:flex-start;justify-content:flex-start}.p-overlay-top-end{align-items:flex-start;justify-content:flex-end}.p-overlay-bottom{align-items:flex-end}.p-overlay-bottom-start{align-items:flex-end;justify-content:flex-start}.p-overlay-bottom-end{align-items:flex-end;justify-content:flex-end}.p-overlay-left{justify-content:flex-start}.p-overlay-left-start{justify-content:flex-start;align-items:flex-start}.p-overlay-left-end{justify-content:flex-start;align-items:flex-end}.p-overlay-right{justify-content:flex-end}.p-overlay-right-start{justify-content:flex-end;align-items:flex-start}.p-overlay-right-end{justify-content:flex-end;align-items:flex-end}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeNGConfig
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_6__.OverlayService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }], {
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contentStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contentStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    target: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    listener: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    responsive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    visibleChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBeforeShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBeforeHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onAnimationStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onAnimationDone: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate]
    }],
    overlayViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['overlay']
    }],
    contentViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['content']
    }]
  });
})();
class OverlayModule {
  static ɵfac = function OverlayModule_Factory(t) {
    return new (t || OverlayModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: OverlayModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverlayModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule],
      exports: [Overlay, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule],
      declarations: [Overlay]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3157:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-paginator.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Paginator: () => (/* binding */ Paginator),
/* harmony export */   PaginatorModule: () => (/* binding */ PaginatorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ 6895);
/* harmony import */ var primeng_icons_angledoubleleft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/angledoubleleft */ 8540);
/* harmony import */ var primeng_icons_angledoubleright__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/angledoubleright */ 4607);
/* harmony import */ var primeng_icons_angleleft__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/angleleft */ 203);
/* harmony import */ var primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/angleright */ 1726);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputnumber */ 1759);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 78);



















/**
 * Paginator is a generic component to display content in paged format.
 * @group Components
 */
const _c0 = a0 => ({
  "p-disabled": a0
});
const _c1 = a0 => ({
  $implicit: a0
});
const _c2 = a0 => ({
  "p-highlight": a0
});
function Paginator_div_0_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_div_1_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.templateLeft)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r1.paginatorState));
  }
}
function Paginator_div_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentPageReport);
  }
}
function Paginator_div_0_button_3_AngleDoubleLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDoubleLeftIcon", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_button_3_span_2_1_ng_template_0_Template(rf, ctx) {}
function Paginator_div_0_button_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_button_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_button_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_button_3_span_2_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.firstPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_button_3_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePageToFirst($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_button_3_AngleDoubleLeftIcon_1_Template, 1, 1, "AngleDoubleLeftIcon", 6)(2, Paginator_div_0_button_3_span_2_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isFirstPage() || ctx_r1.empty())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r1.isFirstPage() || ctx_r1.empty()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getAriaLabel("firstPageLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.firstPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.firstPageLinkIconTemplate);
  }
}
function Paginator_div_0_AngleLeftIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleLeftIcon", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_span_6_1_ng_template_0_Template(rf, ctx) {}
function Paginator_div_0_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_span_6_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.previousPageLinkIconTemplate);
  }
}
function Paginator_div_0_span_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_span_7_button_1_Template_button_click_0_listener($event) {
      const pageLink_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onPageLinkClick($event, pageLink_r5 - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pageLink_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, pageLink_r5 - 1 == ctx_r1.getPage()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getPageAriaLabel(pageLink_r5))("aria-current", pageLink_r5 - 1 == ctx_r1.getPage() ? "page" : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getLocalization(pageLink_r5), " ");
  }
}
function Paginator_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_span_7_button_1_Template, 2, 6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.pageLinks);
  }
}
function Paginator_div_0_p_dropdown_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentPageReport);
  }
}
function Paginator_div_0_p_dropdown_8_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_p_dropdown_8_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_8_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.jumpToPageItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r7));
  }
}
function Paginator_div_0_p_dropdown_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_p_dropdown_8_ng_container_2_ng_template_1_Template, 1, 4, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function Paginator_div_0_p_dropdown_8_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_p_dropdown_8_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_8_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_p_dropdown_8_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_8_3_ng_template_0_Template, 1, 1, "ng-template", 29);
  }
}
function Paginator_div_0_p_dropdown_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function Paginator_div_0_p_dropdown_8_Template_p_dropdown_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onPageDropdownChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_p_dropdown_8_ng_template_1_Template, 1, 1, "ng-template", 26)(2, Paginator_div_0_p_dropdown_8_ng_container_2_Template, 2, 0, "ng-container", 27)(3, Paginator_div_0_p_dropdown_8_3_Template, 1, 0, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.pageItems)("ngModel", ctx_r1.getPage())("disabled", ctx_r1.empty())("appendTo", ctx_r1.dropdownAppendTo)("scrollHeight", ctx_r1.dropdownScrollHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getAriaLabel("jumpToPageDropdownLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.jumpToPageItemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_AngleRightIcon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_span_11_1_ng_template_0_Template(rf, ctx) {}
function Paginator_div_0_span_11_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_span_11_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_span_11_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.nextPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_12_AngleDoubleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDoubleRightIcon", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_button_12_span_2_1_ng_template_0_Template(rf, ctx) {}
function Paginator_div_0_button_12_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_button_12_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_button_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_button_12_span_2_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.lastPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_button_12_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePageToLast($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_button_12_AngleDoubleRightIcon_1_Template, 1, 1, "AngleDoubleRightIcon", 6)(2, Paginator_div_0_button_12_span_2_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isLastPage() || ctx_r1.empty())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r1.isLastPage() || ctx_r1.empty()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getAriaLabel("lastPageLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.lastPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lastPageLinkIconTemplate);
  }
}
function Paginator_div_0_p_inputNumber_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-inputNumber", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Paginator_div_0_p_inputNumber_13_Template_p_inputNumber_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePage($event - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.currentPage())("disabled", ctx_r1.empty());
  }
}
function Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.dropdownItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r11));
  }
}
function Paginator_div_0_p_dropdown_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_Template, 1, 4, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function Paginator_div_0_p_dropdown_14_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_p_dropdown_14_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_14_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_p_dropdown_14_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_14_2_ng_template_0_Template, 1, 1, "ng-template", 29);
  }
}
function Paginator_div_0_p_dropdown_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function Paginator_div_0_p_dropdown_14_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r1.rows, $event) || (ctx_r1.rows = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function Paginator_div_0_p_dropdown_14_Template_p_dropdown_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onRppChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_p_dropdown_14_ng_container_1_Template, 2, 0, "ng-container", 27)(2, Paginator_div_0_p_dropdown_14_2_Template, 1, 0, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.rowsPerPageItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.empty())("appendTo", ctx_r1.dropdownAppendTo)("scrollHeight", ctx_r1.dropdownScrollHeight)("ariaLabel", ctx_r1.getAriaLabel("rowsPerPageLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dropdownItemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_div_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_div_15_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "end");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.templateRight)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r1.paginatorState));
  }
}
function Paginator_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_div_1_Template, 2, 5, "div", 2)(2, Paginator_div_0_span_2_Template, 2, 1, "span", 3)(3, Paginator_div_0_button_3_Template, 3, 7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePageToPrev($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Paginator_div_0_AngleLeftIcon_5_Template, 1, 1, "AngleLeftIcon", 6)(6, Paginator_div_0_span_6_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Paginator_div_0_span_7_Template, 2, 1, "span", 8)(8, Paginator_div_0_p_dropdown_8_Template, 4, 8, "p-dropdown", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_Template_button_click_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePageToNext($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Paginator_div_0_AngleRightIcon_10_Template, 1, 1, "AngleRightIcon", 6)(11, Paginator_div_0_span_11_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Paginator_div_0_button_12_Template, 3, 7, "button", 11)(13, Paginator_div_0_p_inputNumber_13_Template, 1, 2, "p-inputNumber", 12)(14, Paginator_div_0_p_dropdown_14_Template, 3, 8, "p-dropdown", 13)(15, Paginator_div_0_div_15_Template, 2, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.style)("ngClass", "p-paginator p-component");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "paginator")("data-pc-section", "root");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.templateLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showCurrentPageReport);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showFirstLastIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isFirstPage() || ctx_r1.empty())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx_r1.isFirstPage() || ctx_r1.empty()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getAriaLabel("prevPageLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.previousPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.previousPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showPageLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showJumpToPageDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isLastPage() || ctx_r1.empty())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx_r1.isLastPage() || ctx_r1.empty()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getAriaLabel("nextPageLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.nextPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nextPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showFirstLastIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showJumpToPageInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.rowsPerPageOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.templateRight);
  }
}
class Paginator {
  cd;
  config;
  /**
   * Number of page links to display.
   * @group Props
   */
  pageLinkSize = 5;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Whether to show it even there is only one page.
   * @group Props
   */
  alwaysShow = true;
  /**
   * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  dropdownAppendTo;
  /**
   * Template instance to inject into the left side of the paginator.
   * @param {PaginatorState} context - Paginator state.
   * @group Props
   */
  templateLeft;
  /**
   * Template instance to inject into the right side of the paginator.
   * @param {PaginatorState} context - Paginator state.
   * @group Props
   */
  templateRight;
  /**
   * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  dropdownScrollHeight = '200px';
  /**
   * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
   * @group Props
   */
  currentPageReportTemplate = '{currentPage} of {totalPages}';
  /**
   * Whether to display current page report.
   * @group Props
   */
  showCurrentPageReport;
  /**
   * When enabled, icons are displayed on paginator to go first and last page.
   * @group Props
   */
  showFirstLastIcon = true;
  /**
   * Number of total records.
   * @group Props
   */
  totalRecords = 0;
  /**
   * Data count to display per page.
   * @group Props
   */
  rows = 0;
  /**
   * Array of integer/object values to display inside rows per page dropdown. A object that have 'showAll' key can be added to it to show all data. Exp; [10,20,30,{showAll:'All'}]
   * @group Props
   */
  rowsPerPageOptions;
  /**
   * Whether to display a dropdown to navigate to any page.
   * @group Props
   */
  showJumpToPageDropdown;
  /**
   * Whether to display a input to navigate to any page.
   * @group Props
   */
  showJumpToPageInput;
  /**
   * Template instance to inject into the jump to page dropdown item inside in the paginator.
   * @param {Object} context - item instance.
   * @group Props
   */
  jumpToPageItemTemplate;
  /**
   * Whether to show page links.
   * @group Props
   */
  showPageLinks = true;
  /**
   * Locale to be used in formatting.
   * @group Props
   */
  locale;
  /**
   * Template instance to inject into the rows per page dropdown item inside in the paginator.
   * @param {Object} context - item instance.
   * @group Props
   */
  dropdownItemTemplate;
  /**
   * Zero-relative number of the first row to be displayed.
   * @group Props
   */
  get first() {
    return this._first;
  }
  set first(val) {
    this._first = val;
  }
  /**
   * Callback to invoke when page changes, the event object contains information about the new state.
   * @param {PaginatorState} event - Paginator state.
   * @group Emits
   */
  onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  templates;
  dropdownIconTemplate;
  firstPageLinkIconTemplate;
  previousPageLinkIconTemplate;
  lastPageLinkIconTemplate;
  nextPageLinkIconTemplate;
  pageLinks;
  pageItems;
  rowsPerPageItems;
  paginatorState;
  _first = 0;
  _page = 0;
  constructor(cd, config) {
    this.cd = cd;
    this.config = config;
  }
  ngOnInit() {
    this.updatePaginatorState();
  }
  getAriaLabel(labelType) {
    return this.config.translation.aria ? this.config.translation.aria[labelType] : undefined;
  }
  getPageAriaLabel(value) {
    return this.config.translation.aria ? this.config.translation.aria.pageLabel.replace(/{page}/g, `${value}`) : undefined;
  }
  getLocalization(digit) {
    const numerals = [...new Intl.NumberFormat(this.locale, {
      useGrouping: false
    }).format(9876543210)].reverse();
    const index = new Map(numerals.map((d, i) => [i, d]));
    if (digit > 9) {
      const numbers = String(digit).split('');
      return numbers.map(number => index.get(Number(number))).join('');
    } else {
      return index.get(digit);
    }
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'dropdownicon':
          this.dropdownIconTemplate = item.template;
          break;
        case 'firstpagelinkicon':
          this.firstPageLinkIconTemplate = item.template;
          break;
        case 'previouspagelinkicon':
          this.previousPageLinkIconTemplate = item.template;
          break;
        case 'lastpagelinkicon':
          this.lastPageLinkIconTemplate = item.template;
          break;
        case 'nextpagelinkicon':
          this.nextPageLinkIconTemplate = item.template;
          break;
      }
    });
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.totalRecords) {
      this.updatePageLinks();
      this.updatePaginatorState();
      this.updateFirst();
      this.updateRowsPerPageOptions();
    }
    if (simpleChange.first) {
      this._first = simpleChange.first.currentValue;
      this.updatePageLinks();
      this.updatePaginatorState();
    }
    if (simpleChange.rows) {
      this.updatePageLinks();
      this.updatePaginatorState();
    }
    if (simpleChange.rowsPerPageOptions) {
      this.updateRowsPerPageOptions();
    }
    if (simpleChange.pageLinkSize) {
      this.updatePageLinks();
    }
  }
  updateRowsPerPageOptions() {
    if (this.rowsPerPageOptions) {
      this.rowsPerPageItems = [];
      for (let opt of this.rowsPerPageOptions) {
        if (typeof opt == 'object' && opt['showAll']) {
          this.rowsPerPageItems.unshift({
            label: opt['showAll'],
            value: this.totalRecords
          });
        } else {
          this.rowsPerPageItems.push({
            label: String(this.getLocalization(opt)),
            value: opt
          });
        }
      }
    }
  }
  isFirstPage() {
    return this.getPage() === 0;
  }
  isLastPage() {
    return this.getPage() === this.getPageCount() - 1;
  }
  getPageCount() {
    return Math.ceil(this.totalRecords / this.rows);
  }
  calculatePageLinkBoundaries() {
    let numberOfPages = this.getPageCount(),
      visiblePages = Math.min(this.pageLinkSize, numberOfPages);
    //calculate range, keep current in middle if necessary
    let start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2)),
      end = Math.min(numberOfPages - 1, start + visiblePages - 1);
    //check when approaching to last page
    var delta = this.pageLinkSize - (end - start + 1);
    start = Math.max(0, start - delta);
    return [start, end];
  }
  updatePageLinks() {
    this.pageLinks = [];
    let boundaries = this.calculatePageLinkBoundaries(),
      start = boundaries[0],
      end = boundaries[1];
    for (let i = start; i <= end; i++) {
      this.pageLinks.push(i + 1);
    }
    if (this.showJumpToPageDropdown) {
      this.pageItems = [];
      for (let i = 0; i < this.getPageCount(); i++) {
        this.pageItems.push({
          label: String(i + 1),
          value: i
        });
      }
    }
  }
  changePage(p) {
    var pc = this.getPageCount();
    if (p >= 0 && p < pc) {
      this._first = this.rows * p;
      var state = {
        page: p,
        first: this.first,
        rows: this.rows,
        pageCount: pc
      };
      this.updatePageLinks();
      this.onPageChange.emit(state);
      this.updatePaginatorState();
    }
  }
  updateFirst() {
    const page = this.getPage();
    if (page > 0 && this.totalRecords && this.first >= this.totalRecords) {
      Promise.resolve(null).then(() => this.changePage(page - 1));
    }
  }
  getPage() {
    return Math.floor(this.first / this.rows);
  }
  changePageToFirst(event) {
    if (!this.isFirstPage()) {
      this.changePage(0);
    }
    event.preventDefault();
  }
  changePageToPrev(event) {
    this.changePage(this.getPage() - 1);
    event.preventDefault();
  }
  changePageToNext(event) {
    this.changePage(this.getPage() + 1);
    event.preventDefault();
  }
  changePageToLast(event) {
    if (!this.isLastPage()) {
      this.changePage(this.getPageCount() - 1);
    }
    event.preventDefault();
  }
  onPageLinkClick(event, page) {
    this.changePage(page);
    event.preventDefault();
  }
  onRppChange(event) {
    this.changePage(this.getPage());
  }
  onPageDropdownChange(event) {
    this.changePage(event.value);
  }
  updatePaginatorState() {
    this.paginatorState = {
      page: this.getPage(),
      pageCount: this.getPageCount(),
      rows: this.rows,
      first: this.first,
      totalRecords: this.totalRecords
    };
  }
  empty() {
    return this.getPageCount() === 0;
  }
  currentPage() {
    return this.getPageCount() > 0 ? this.getPage() + 1 : 0;
  }
  get currentPageReport() {
    return this.currentPageReportTemplate.replace('{currentPage}', String(this.currentPage())).replace('{totalPages}', String(this.getPageCount())).replace('{first}', String(this.totalRecords > 0 ? this._first + 1 : 0)).replace('{last}', String(Math.min(this._first + this.rows, this.totalRecords))).replace('{rows}', String(this.rows)).replace('{totalRecords}', String(this.totalRecords));
  }
  static ɵfac = function Paginator_Factory(t) {
    return new (t || Paginator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeNGConfig));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Paginator,
    selectors: [["p-paginator"]],
    contentQueries: function Paginator_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      pageLinkSize: [2, "pageLinkSize", "pageLinkSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      style: "style",
      styleClass: "styleClass",
      alwaysShow: [2, "alwaysShow", "alwaysShow", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      dropdownAppendTo: "dropdownAppendTo",
      templateLeft: "templateLeft",
      templateRight: "templateRight",
      appendTo: "appendTo",
      dropdownScrollHeight: "dropdownScrollHeight",
      currentPageReportTemplate: "currentPageReportTemplate",
      showCurrentPageReport: [2, "showCurrentPageReport", "showCurrentPageReport", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      showFirstLastIcon: [2, "showFirstLastIcon", "showFirstLastIcon", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      totalRecords: [2, "totalRecords", "totalRecords", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      rows: [2, "rows", "rows", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      rowsPerPageOptions: "rowsPerPageOptions",
      showJumpToPageDropdown: [2, "showJumpToPageDropdown", "showJumpToPageDropdown", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      showJumpToPageInput: [2, "showJumpToPageInput", "showJumpToPageInput", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      jumpToPageItemTemplate: "jumpToPageItemTemplate",
      showPageLinks: [2, "showPageLinks", "showPageLinks", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      locale: "locale",
      dropdownItemTemplate: "dropdownItemTemplate",
      first: "first"
    },
    outputs: {
      onPageChange: "onPageChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 1,
    consts: [[3, "class", "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass"], ["class", "p-paginator-left-content", 4, "ngIf"], ["class", "p-paginator-current", 4, "ngIf"], ["type", "button", "pRipple", "", "class", "p-paginator-first p-paginator-element p-link", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-prev", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-paginator-icon", 4, "ngIf"], ["class", "p-paginator-pages", 4, "ngIf"], ["styleClass", "p-paginator-page-options", 3, "options", "ngModel", "disabled", "appendTo", "scrollHeight", "onChange", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-next", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], ["type", "button", "pRipple", "", "class", "p-paginator-last p-paginator-element p-link", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["class", "p-paginator-page-input", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["styleClass", "p-paginator-rpp-options", 3, "options", "ngModel", "disabled", "appendTo", "scrollHeight", "ariaLabel", "ngModelChange", "onChange", 4, "ngIf"], ["class", "p-paginator-right-content", 4, "ngIf"], [1, "p-paginator-left-content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-paginator-current"], ["type", "button", "pRipple", "", 1, "p-paginator-first", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], [3, "styleClass"], [1, "p-paginator-icon"], [4, "ngTemplateOutlet"], [1, "p-paginator-pages"], ["type", "button", "class", "p-paginator-page p-paginator-element p-link", "pRipple", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 1, "p-paginator-page", "p-paginator-element", "p-link", 3, "click", "ngClass"], ["styleClass", "p-paginator-page-options", 3, "onChange", "options", "ngModel", "disabled", "appendTo", "scrollHeight"], ["pTemplate", "selectedItem"], [4, "ngIf"], ["pTemplate", "item"], ["pTemplate", "dropdownicon"], ["type", "button", "pRipple", "", 1, "p-paginator-last", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], [1, "p-paginator-page-input", 3, "ngModelChange", "ngModel", "disabled"], ["styleClass", "p-paginator-rpp-options", 3, "ngModelChange", "onChange", "options", "ngModel", "disabled", "appendTo", "scrollHeight", "ariaLabel"], [1, "p-paginator-right-content"]],
    template: function Paginator_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_Template, 16, 29, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alwaysShow ? true : ctx.pageLinks && ctx.pageLinks.length > 1);
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__.Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__.InputNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_icons_angledoubleleft__WEBPACK_IMPORTED_MODULE_7__.AngleDoubleLeftIcon, primeng_icons_angledoubleright__WEBPACK_IMPORTED_MODULE_8__.AngleDoubleRightIcon, primeng_icons_angleleft__WEBPACK_IMPORTED_MODULE_9__.AngleLeftIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_10__.AngleRightIcon],
    styles: ["@layer primeng{.p-paginator{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.p-paginator-left-content{margin-right:auto}.p-paginator-right-content{margin-left:auto}.p-paginator-page,.p-paginator-next,.p-paginator-last,.p-paginator-first,.p-paginator-prev,.p-paginator-current{cursor:pointer;display:inline-flex;align-items:center;justify-content:center;line-height:1;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-paginator-element:focus{z-index:1;position:relative}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Paginator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-paginator',
      template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-paginator p-component'" *ngIf="alwaysShow ? true : pageLinks && pageLinks.length > 1" [attr.data-pc-section]="'paginator'" [attr.data-pc-section]="'root'">
            <div class="p-paginator-left-content" *ngIf="templateLeft" [attr.data-pc-section]="'start'">
                <ng-container *ngTemplateOutlet="templateLeft; context: { $implicit: paginatorState }"></ng-container>
            </div>
            <span class="p-paginator-current" *ngIf="showCurrentPageReport">{{ currentPageReport }}</span>
            <button
                *ngIf="showFirstLastIcon"
                type="button"
                [disabled]="isFirstPage() || empty()"
                (click)="changePageToFirst($event)"
                pRipple
                class="p-paginator-first p-paginator-element p-link"
                [ngClass]="{ 'p-disabled': isFirstPage() || empty() }"
                [attr.aria-label]="getAriaLabel('firstPageLabel')"
            >
                <AngleDoubleLeftIcon *ngIf="!firstPageLinkIconTemplate" [styleClass]="'p-paginator-icon'" />
                <span class="p-paginator-icon" *ngIf="firstPageLinkIconTemplate">
                    <ng-template *ngTemplateOutlet="firstPageLinkIconTemplate"></ng-template>
                </span>
            </button>
            <button
                type="button"
                [disabled]="isFirstPage() || empty()"
                (click)="changePageToPrev($event)"
                pRipple
                class="p-paginator-prev p-paginator-element p-link"
                [ngClass]="{ 'p-disabled': isFirstPage() || empty() }"
                [attr.aria-label]="getAriaLabel('prevPageLabel')"
            >
                <AngleLeftIcon *ngIf="!previousPageLinkIconTemplate" [styleClass]="'p-paginator-icon'" />
                <span class="p-paginator-icon" *ngIf="previousPageLinkIconTemplate">
                    <ng-template *ngTemplateOutlet="previousPageLinkIconTemplate"></ng-template>
                </span>
            </button>
            <span class="p-paginator-pages" *ngIf="showPageLinks">
                <button
                    type="button"
                    *ngFor="let pageLink of pageLinks"
                    class="p-paginator-page p-paginator-element p-link"
                    [ngClass]="{ 'p-highlight': pageLink - 1 == getPage() }"
                    [attr.aria-label]="getPageAriaLabel(pageLink)"
                    [attr.aria-current]="pageLink - 1 == getPage() ? 'page' : undefined"
                    (click)="onPageLinkClick($event, pageLink - 1)"
                    pRipple
                >
                    {{ getLocalization(pageLink) }}
                </button>
            </span>
            <p-dropdown
                [options]="pageItems"
                [ngModel]="getPage()"
                *ngIf="showJumpToPageDropdown"
                [disabled]="empty()"
                [attr.aria-label]="getAriaLabel('jumpToPageDropdownLabel')"
                styleClass="p-paginator-page-options"
                (onChange)="onPageDropdownChange($event)"
                [appendTo]="dropdownAppendTo"
                [scrollHeight]="dropdownScrollHeight"
            >
                <ng-template pTemplate="selectedItem">{{ currentPageReport }}</ng-template>
                <ng-container *ngIf="jumpToPageItemTemplate">
                    <ng-template let-item pTemplate="item">
                        <ng-container *ngTemplateOutlet="jumpToPageItemTemplate; context: { $implicit: item }"> </ng-container>
                    </ng-template>
                </ng-container>
                <ng-template pTemplate="dropdownicon" *ngIf="dropdownIconTemplate">
                    <ng-container *ngTemplateOutlet="dropdownIconTemplate"></ng-container>
                </ng-template>
            </p-dropdown>
            <button
                type="button"
                [disabled]="isLastPage() || empty()"
                (click)="changePageToNext($event)"
                pRipple
                class="p-paginator-next p-paginator-element p-link"
                [ngClass]="{ 'p-disabled': isLastPage() || empty() }"
                [attr.aria-label]="getAriaLabel('nextPageLabel')"
            >
                <AngleRightIcon *ngIf="!nextPageLinkIconTemplate" [styleClass]="'p-paginator-icon'" />
                <span class="p-paginator-icon" *ngIf="nextPageLinkIconTemplate">
                    <ng-template *ngTemplateOutlet="nextPageLinkIconTemplate"></ng-template>
                </span>
            </button>
            <button
                *ngIf="showFirstLastIcon"
                type="button"
                [disabled]="isLastPage() || empty()"
                (click)="changePageToLast($event)"
                pRipple
                class="p-paginator-last p-paginator-element p-link"
                [ngClass]="{ 'p-disabled': isLastPage() || empty() }"
                [attr.aria-label]="getAriaLabel('lastPageLabel')"
            >
                <AngleDoubleRightIcon *ngIf="!lastPageLinkIconTemplate" [styleClass]="'p-paginator-icon'" />
                <span class="p-paginator-icon" *ngIf="lastPageLinkIconTemplate">
                    <ng-template *ngTemplateOutlet="lastPageLinkIconTemplate"></ng-template>
                </span>
            </button>
            <p-inputNumber *ngIf="showJumpToPageInput" [ngModel]="currentPage()" class="p-paginator-page-input" [disabled]="empty()" (ngModelChange)="changePage($event - 1)"></p-inputNumber>
            <p-dropdown
                [options]="rowsPerPageItems"
                [(ngModel)]="rows"
                *ngIf="rowsPerPageOptions"
                styleClass="p-paginator-rpp-options"
                [disabled]="empty()"
                (onChange)="onRppChange($event)"
                [appendTo]="dropdownAppendTo"
                [scrollHeight]="dropdownScrollHeight"
                [ariaLabel]="getAriaLabel('rowsPerPageLabel')"
            >
                <ng-container *ngIf="dropdownItemTemplate">
                    <ng-template let-item pTemplate="item">
                        <ng-container *ngTemplateOutlet="dropdownItemTemplate; context: { $implicit: item }"> </ng-container>
                    </ng-template>
                </ng-container>
                <ng-template pTemplate="dropdownicon" *ngIf="dropdownIconTemplate">
                    <ng-container *ngTemplateOutlet="dropdownIconTemplate"></ng-container>
                </ng-template>
            </p-dropdown>
            <div class="p-paginator-right-content" *ngIf="templateRight" [attr.data-pc-section]="'end'">
                <ng-container *ngTemplateOutlet="templateRight; context: { $implicit: paginatorState }"></ng-container>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-paginator{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.p-paginator-left-content{margin-right:auto}.p-paginator-right-content{margin-left:auto}.p-paginator-page,.p-paginator-next,.p-paginator-last,.p-paginator-first,.p-paginator-prev,.p-paginator-current{cursor:pointer;display:inline-flex;align-items:center;justify-content:center;line-height:1;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-paginator-element:focus{z-index:1;position:relative}}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeNGConfig
  }], {
    pageLinkSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    alwaysShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    dropdownAppendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    templateLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    templateRight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropdownScrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currentPageReportTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showCurrentPageReport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    showFirstLastIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    totalRecords: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    rowsPerPageOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showJumpToPageDropdown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    showJumpToPageInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    jumpToPageItemTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showPageLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropdownItemTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    first: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onPageChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate]
    }]
  });
})();
class PaginatorModule {
  static ɵfac = function PaginatorModule_Factory(t) {
    return new (t || PaginatorModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: PaginatorModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__.InputNumberModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_icons_angledoubleleft__WEBPACK_IMPORTED_MODULE_7__.AngleDoubleLeftIcon, primeng_icons_angledoubleright__WEBPACK_IMPORTED_MODULE_8__.AngleDoubleRightIcon, primeng_icons_angleleft__WEBPACK_IMPORTED_MODULE_9__.AngleLeftIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_10__.AngleRightIcon, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__.InputNumberModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__.InputNumberModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_icons_angledoubleleft__WEBPACK_IMPORTED_MODULE_7__.AngleDoubleLeftIcon, primeng_icons_angledoubleright__WEBPACK_IMPORTED_MODULE_8__.AngleDoubleRightIcon, primeng_icons_angleleft__WEBPACK_IMPORTED_MODULE_9__.AngleLeftIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_10__.AngleRightIcon],
      exports: [Paginator, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__.InputNumberModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
      declarations: [Paginator]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2222:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-scroller.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scroller: () => (/* binding */ Scroller),
/* harmony export */   ScrollerModule: () => (/* binding */ ScrollerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ 5228);
/* harmony import */ var primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/icons/spinner */ 4766);








/**
 * Scroller is a performance-approach to handle huge data efficiently.
 * @group Components
 */
const _c0 = ["element"];
const _c1 = ["content"];
const _c2 = ["*"];
const _c3 = (a0, a1, a2) => ({
  "p-scroller": true,
  "p-scroller-inline": a0,
  "p-both-scroll": a1,
  "p-horizontal-scroll": a2
});
const _c4 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
const _c5 = a0 => ({
  "p-scroller-loading": a0
});
const _c6 = a0 => ({
  "p-component-overlay": a0
});
const _c7 = a0 => ({
  numCols: a0
});
const _c8 = a0 => ({
  options: a0
});
const _c9 = () => ({
  styleClass: "p-scroller-loading-icon"
});
const _c10 = (a0, a1) => ({
  rows: a0,
  columns: a1
});
function Scroller_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Scroller_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c4, ctx_r1.loadedItems, ctx_r1.getContentOptions()));
  }
}
function Scroller_ng_container_0_ng_template_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Scroller_ng_container_0_ng_template_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_ng_template_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c4, item_r3, ctx_r1.getOptions(index_r4)));
  }
}
function Scroller_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Scroller_ng_container_0_ng_template_4_ng_container_2_Template, 2, 5, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c5, ctx_r1.d_loading))("ngStyle", ctx_r1.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.loadedItems)("ngForTrackBy", ctx_r1._trackBy || ctx_r1.index);
  }
}
function Scroller_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.spacerStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "spacer");
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const index_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c8, ctx_r1.getLoaderOptions(index_r5, ctx_r1.both && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c7, ctx_r1._numItemsInViewport.cols))));
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_Template, 2, 6, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.loaderArr);
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.loaderIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c9)));
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SpinnerIcon", 16);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-scroller-loading-icon pi-spin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "loadingIcon");
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_Template, 2, 5, "ng-container", 6)(1, Scroller_ng_container_0_div_7_ng_template_2_ng_template_1_Template, 1, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const buildInLoaderIcon_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loaderIconTemplate)("ngIfElse", buildInLoaderIcon_r6);
  }
}
function Scroller_ng_container_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_container_0_div_7_ng_container_1_Template, 2, 1, "ng-container", 6)(2, Scroller_ng_container_0_div_7_ng_template_2_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const buildInLoader_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c6, !ctx_r1.loaderTemplate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loaderTemplate)("ngIfElse", buildInLoader_r7);
  }
}
function Scroller_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function Scroller_ng_container_0_Template_div_scroll_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onContainerScroll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Scroller_ng_container_0_ng_container_3_Template, 2, 5, "ng-container", 6)(4, Scroller_ng_container_0_ng_template_4_Template, 3, 7, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, Scroller_ng_container_0_div_6_Template, 1, 2, "div", 8)(7, Scroller_ng_container_0_div_7_Template, 4, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const buildInContent_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1._styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1._style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c3, ctx_r1.inline, ctx_r1.both, ctx_r1.horizontal));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1._id)("tabindex", ctx_r1.tabindex)("data-pc-name", "scroller")("data-pc-section", "root");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contentTemplate)("ngIfElse", buildInContent_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1._showSpacer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loaderDisabled && ctx_r1._showLoader && ctx_r1.d_loading);
  }
}
function Scroller_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Scroller_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c4, ctx_r1.items, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c10, ctx_r1._items, ctx_r1.loadedColumns)));
  }
}
function Scroller_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Scroller_ng_template_1_ng_container_1_Template, 2, 8, "ng-container", 17);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contentTemplate);
  }
}
class Scroller {
  document;
  platformId;
  renderer;
  cd;
  zone;
  /**
   * Unique identifier of the element.
   * @group Props
   */
  get id() {
    return this._id;
  }
  set id(val) {
    this._id = val;
  }
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(val) {
    this._style = val;
  }
  /**
   * Style class of the element.
   * @group Props
   */
  get styleClass() {
    return this._styleClass;
  }
  set styleClass(val) {
    this._styleClass = val;
  }
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  get tabindex() {
    return this._tabindex;
  }
  set tabindex(val) {
    this._tabindex = val;
  }
  /**
   * An array of objects to display.
   * @group Props
   */
  get items() {
    return this._items;
  }
  set items(val) {
    this._items = val;
  }
  /**
   * The height/width of item according to orientation.
   * @group Props
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
  }
  /**
   * Height of the scroll viewport.
   * @group Props
   */
  get scrollHeight() {
    return this._scrollHeight;
  }
  set scrollHeight(val) {
    this._scrollHeight = val;
  }
  /**
   * Width of the scroll viewport.
   * @group Props
   */
  get scrollWidth() {
    return this._scrollWidth;
  }
  set scrollWidth(val) {
    this._scrollWidth = val;
  }
  /**
   * The orientation of scrollbar.
   * @group Props
   */
  get orientation() {
    return this._orientation;
  }
  set orientation(val) {
    this._orientation = val;
  }
  /**
   * Used to specify how many items to load in each load method in lazy mode.
   * @group Props
   */
  get step() {
    return this._step;
  }
  set step(val) {
    this._step = val;
  }
  /**
   * Delay in scroll before new data is loaded.
   * @group Props
   */
  get delay() {
    return this._delay;
  }
  set delay(val) {
    this._delay = val;
  }
  /**
   * Delay after window's resize finishes.
   * @group Props
   */
  get resizeDelay() {
    return this._resizeDelay;
  }
  set resizeDelay(val) {
    this._resizeDelay = val;
  }
  /**
   * Used to append each loaded item to top without removing any items from the DOM. Using very large data may cause the browser to crash.
   * @group Props
   */
  get appendOnly() {
    return this._appendOnly;
  }
  set appendOnly(val) {
    this._appendOnly = val;
  }
  /**
   * Specifies whether the scroller should be displayed inline or not.
   * @group Props
   */
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = val;
  }
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  get lazy() {
    return this._lazy;
  }
  set lazy(val) {
    this._lazy = val;
  }
  /**
   * If disabled, the scroller feature is eliminated and the content is displayed directly.
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
  }
  /**
   * Used to implement a custom loader instead of using the loader feature in the scroller.
   * @group Props
   */
  get loaderDisabled() {
    return this._loaderDisabled;
  }
  set loaderDisabled(val) {
    this._loaderDisabled = val;
  }
  /**
   * Columns to display.
   * @group Props
   */
  get columns() {
    return this._columns;
  }
  set columns(val) {
    this._columns = val;
  }
  /**
   * Used to implement a custom spacer instead of using the spacer feature in the scroller.
   * @group Props
   */
  get showSpacer() {
    return this._showSpacer;
  }
  set showSpacer(val) {
    this._showSpacer = val;
  }
  /**
   * Defines whether to show loader.
   * @group Props
   */
  get showLoader() {
    return this._showLoader;
  }
  set showLoader(val) {
    this._showLoader = val;
  }
  /**
   * Determines how many additional elements to add to the DOM outside of the view. According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number. Default value is half the number of items shown in the view.
   * @group Props
   */
  get numToleratedItems() {
    return this._numToleratedItems;
  }
  set numToleratedItems(val) {
    this._numToleratedItems = val;
  }
  /**
   * Defines whether the data is loaded.
   * @group Props
   */
  get loading() {
    return this._loading;
  }
  set loading(val) {
    this._loading = val;
  }
  /**
   * Defines whether to dynamically change the height or width of scrollable container.
   * @group Props
   */
  get autoSize() {
    return this._autoSize;
  }
  set autoSize(val) {
    this._autoSize = val;
  }
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.
   * @group Props
   */
  get trackBy() {
    return this._trackBy;
  }
  set trackBy(val) {
    this._trackBy = val;
  }
  /**
   * Defines whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
    if (val && typeof val === 'object') {
      //@ts-ignore
      Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
    }
  }
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {ScrollerLazyLoadEvent} event - Custom lazy load event.
   * @group Emits
   */
  onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when scroll position changes.
   * @param {ScrollerScrollEvent} event - Custom scroll event.
   * @group Emits
   */
  onScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  /**
   * Callback to invoke when scroll position and item's range in view changes.
   * @param {ScrollerScrollEvent} event - Custom scroll index change event.
   * @group Emits
   */
  onScrollIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  elementViewChild;
  contentViewChild;
  templates;
  _id;
  _style;
  _styleClass;
  _tabindex = 0;
  _items;
  _itemSize = 0;
  _scrollHeight;
  _scrollWidth;
  _orientation = 'vertical';
  _step = 0;
  _delay = 0;
  _resizeDelay = 10;
  _appendOnly = false;
  _inline = false;
  _lazy = false;
  _disabled = false;
  _loaderDisabled = false;
  _columns;
  _showSpacer = true;
  _showLoader = false;
  _numToleratedItems;
  _loading;
  _autoSize = false;
  _trackBy;
  _options;
  d_loading = false;
  d_numToleratedItems;
  contentEl;
  contentTemplate;
  itemTemplate;
  loaderTemplate;
  loaderIconTemplate;
  first = 0;
  last = 0;
  page = 0;
  isRangeChanged = false;
  numItemsInViewport = 0;
  lastScrollPos = 0;
  lazyLoadState = {};
  loaderArr = [];
  spacerStyle = {};
  contentStyle = {};
  scrollTimeout;
  resizeTimeout;
  initialized = false;
  windowResizeListener;
  defaultWidth;
  defaultHeight;
  defaultContentWidth;
  defaultContentHeight;
  get vertical() {
    return this._orientation === 'vertical';
  }
  get horizontal() {
    return this._orientation === 'horizontal';
  }
  get both() {
    return this._orientation === 'both';
  }
  get loadedItems() {
    if (this._items && !this.d_loading) {
      if (this.both) return this._items.slice(this._appendOnly ? 0 : this.first.rows, this.last.rows).map(item => this._columns ? item : item.slice(this._appendOnly ? 0 : this.first.cols, this.last.cols));else if (this.horizontal && this._columns) return this._items;else return this._items.slice(this._appendOnly ? 0 : this.first, this.last);
    }
    return [];
  }
  get loadedRows() {
    return this.d_loading ? this._loaderDisabled ? this.loaderArr : [] : this.loadedItems;
  }
  get loadedColumns() {
    if (this._columns && (this.both || this.horizontal)) {
      return this.d_loading && this._loaderDisabled ? this.both ? this.loaderArr[0] : this.loaderArr : this._columns.slice(this.both ? this.first.cols : this.first, this.both ? this.last.cols : this.last);
    }
    return this._columns;
  }
  constructor(document, platformId, renderer, cd, zone) {
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
  }
  ngOnInit() {
    this.setInitialState();
  }
  ngOnChanges(simpleChanges) {
    let isLoadingChanged = false;
    if (simpleChanges.loading) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.loading;
      if (this.lazy && previousValue !== currentValue && currentValue !== this.d_loading) {
        this.d_loading = currentValue;
        isLoadingChanged = true;
      }
    }
    if (simpleChanges.orientation) {
      this.lastScrollPos = this.both ? {
        top: 0,
        left: 0
      } : 0;
    }
    if (simpleChanges.numToleratedItems) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.numToleratedItems;
      if (previousValue !== currentValue && currentValue !== this.d_numToleratedItems) {
        this.d_numToleratedItems = currentValue;
      }
    }
    if (simpleChanges.options) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.options;
      if (this.lazy && previousValue?.loading !== currentValue?.loading && currentValue?.loading !== this.d_loading) {
        this.d_loading = currentValue.loading;
        isLoadingChanged = true;
      }
      if (previousValue?.numToleratedItems !== currentValue?.numToleratedItems && currentValue?.numToleratedItems !== this.d_numToleratedItems) {
        this.d_numToleratedItems = currentValue.numToleratedItems;
      }
    }
    if (this.initialized) {
      const isChanged = !isLoadingChanged && (simpleChanges.items?.previousValue?.length !== simpleChanges.items?.currentValue?.length || simpleChanges.itemSize || simpleChanges.scrollHeight || simpleChanges.scrollWidth);
      if (isChanged) {
        this.init();
        this.calculateAutoSize();
      }
    }
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'content':
          this.contentTemplate = item.template;
          break;
        case 'item':
          this.itemTemplate = item.template;
          break;
        case 'loader':
          this.loaderTemplate = item.template;
          break;
        case 'loadericon':
          this.loaderIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.viewInit();
    });
  }
  ngAfterViewChecked() {
    if (!this.initialized) {
      this.viewInit();
    }
  }
  ngOnDestroy() {
    this.unbindResizeListener();
    this.contentEl = null;
    this.initialized = false;
  }
  viewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId) && !this.initialized) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isVisible(this.elementViewChild?.nativeElement)) {
        this.setInitialState();
        this.setContentEl(this.contentEl);
        this.init();
        this.defaultWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWidth(this.elementViewChild?.nativeElement);
        this.defaultHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHeight(this.elementViewChild?.nativeElement);
        this.defaultContentWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWidth(this.contentEl);
        this.defaultContentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHeight(this.contentEl);
        this.initialized = true;
      }
    }
  }
  init() {
    if (!this._disabled) {
      this.setSize();
      this.calculateOptions();
      this.setSpacerSize();
      this.bindResizeListener();
      this.cd.detectChanges();
    }
  }
  setContentEl(el) {
    this.contentEl = el || this.contentViewChild?.nativeElement || primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(this.elementViewChild?.nativeElement, '.p-scroller-content');
  }
  setInitialState() {
    this.first = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.last = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.numItemsInViewport = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.lastScrollPos = this.both ? {
      top: 0,
      left: 0
    } : 0;
    this.d_loading = this._loading || false;
    this.d_numToleratedItems = this._numToleratedItems;
    this.loaderArr = [];
    this.spacerStyle = {};
    this.contentStyle = {};
  }
  getElementRef() {
    return this.elementViewChild;
  }
  getPageByFirst(first) {
    return Math.floor(((first ?? this.first) + this.d_numToleratedItems * 4) / (this._step || 1));
  }
  isPageChanged(first) {
    return this._step ? this.page !== this.getPageByFirst(first ?? this.first) : true;
  }
  scrollTo(options) {
    // this.lastScrollPos = this.both ? { top: 0, left: 0 } : 0;
    this.elementViewChild?.nativeElement?.scrollTo(options);
  }
  scrollToIndex(index, behavior = 'auto') {
    const valid = this.both ? index.every(i => i > -1) : index > -1;
    if (valid) {
      const first = this.first;
      const {
        scrollTop = 0,
        scrollLeft = 0
      } = this.elementViewChild?.nativeElement;
      const {
        numToleratedItems
      } = this.calculateNumItems();
      const contentPos = this.getContentPosition();
      const itemSize = this.itemSize;
      const calculateFirst = (_index = 0, _numT) => _index <= _numT ? 0 : _index;
      const calculateCoord = (_first, _size, _cpos) => _first * _size + _cpos;
      const scrollTo = (left = 0, top = 0) => this.scrollTo({
        left,
        top,
        behavior
      });
      let newFirst = this.both ? {
        rows: 0,
        cols: 0
      } : 0;
      let isRangeChanged = false,
        isScrollChanged = false;
      if (this.both) {
        newFirst = {
          rows: calculateFirst(index[0], numToleratedItems[0]),
          cols: calculateFirst(index[1], numToleratedItems[1])
        };
        scrollTo(calculateCoord(newFirst.cols, itemSize[1], contentPos.left), calculateCoord(newFirst.rows, itemSize[0], contentPos.top));
        isScrollChanged = this.lastScrollPos.top !== scrollTop || this.lastScrollPos.left !== scrollLeft;
        isRangeChanged = newFirst.rows !== first.rows || newFirst.cols !== first.cols;
      } else {
        newFirst = calculateFirst(index, numToleratedItems);
        this.horizontal ? scrollTo(calculateCoord(newFirst, itemSize, contentPos.left), scrollTop) : scrollTo(scrollLeft, calculateCoord(newFirst, itemSize, contentPos.top));
        isScrollChanged = this.lastScrollPos !== (this.horizontal ? scrollLeft : scrollTop);
        isRangeChanged = newFirst !== first;
      }
      this.isRangeChanged = isRangeChanged;
      isScrollChanged && (this.first = newFirst);
    }
  }
  scrollInView(index, to, behavior = 'auto') {
    if (to) {
      const {
        first,
        viewport
      } = this.getRenderedRange();
      const scrollTo = (left = 0, top = 0) => this.scrollTo({
        left,
        top,
        behavior
      });
      const isToStart = to === 'to-start';
      const isToEnd = to === 'to-end';
      if (isToStart) {
        if (this.both) {
          if (viewport.first.rows - first.rows > index[0]) {
            scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows - 1) * this._itemSize[0]);
          } else if (viewport.first.cols - first.cols > index[1]) {
            scrollTo((viewport.first.cols - 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
          }
        } else {
          if (viewport.first - first > index) {
            const pos = (viewport.first - 1) * this._itemSize;
            this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
          }
        }
      } else if (isToEnd) {
        if (this.both) {
          if (viewport.last.rows - first.rows <= index[0] + 1) {
            scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows + 1) * this._itemSize[0]);
          } else if (viewport.last.cols - first.cols <= index[1] + 1) {
            scrollTo((viewport.first.cols + 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
          }
        } else {
          if (viewport.last - first <= index + 1) {
            const pos = (viewport.first + 1) * this._itemSize;
            this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
          }
        }
      }
    } else {
      this.scrollToIndex(index, behavior);
    }
  }
  getRenderedRange() {
    const calculateFirstInViewport = (_pos, _size) => _size || _pos ? Math.floor(_pos / (_size || _pos)) : 0;
    let firstInViewport = this.first;
    let lastInViewport = 0;
    if (this.elementViewChild?.nativeElement) {
      const {
        scrollTop,
        scrollLeft
      } = this.elementViewChild.nativeElement;
      if (this.both) {
        firstInViewport = {
          rows: calculateFirstInViewport(scrollTop, this._itemSize[0]),
          cols: calculateFirstInViewport(scrollLeft, this._itemSize[1])
        };
        lastInViewport = {
          rows: firstInViewport.rows + this.numItemsInViewport.rows,
          cols: firstInViewport.cols + this.numItemsInViewport.cols
        };
      } else {
        const scrollPos = this.horizontal ? scrollLeft : scrollTop;
        firstInViewport = calculateFirstInViewport(scrollPos, this._itemSize);
        lastInViewport = firstInViewport + this.numItemsInViewport;
      }
    }
    return {
      first: this.first,
      last: this.last,
      viewport: {
        first: firstInViewport,
        last: lastInViewport
      }
    };
  }
  calculateNumItems() {
    const contentPos = this.getContentPosition();
    const contentWidth = (this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetWidth - contentPos.left : 0) || 0;
    const contentHeight = (this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetHeight - contentPos.top : 0) || 0;
    const calculateNumItemsInViewport = (_contentSize, _itemSize) => _itemSize || _contentSize ? Math.ceil(_contentSize / (_itemSize || _contentSize)) : 0;
    const calculateNumToleratedItems = _numItems => Math.ceil(_numItems / 2);
    const numItemsInViewport = this.both ? {
      rows: calculateNumItemsInViewport(contentHeight, this._itemSize[0]),
      cols: calculateNumItemsInViewport(contentWidth, this._itemSize[1])
    } : calculateNumItemsInViewport(this.horizontal ? contentWidth : contentHeight, this._itemSize);
    const numToleratedItems = this.d_numToleratedItems || (this.both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
    return {
      numItemsInViewport,
      numToleratedItems
    };
  }
  calculateOptions() {
    const {
      numItemsInViewport,
      numToleratedItems
    } = this.calculateNumItems();
    const calculateLast = (_first, _num, _numT, _isCols = false) => this.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
    const first = this.first;
    const last = this.both ? {
      rows: calculateLast(this.first.rows, numItemsInViewport.rows, numToleratedItems[0]),
      cols: calculateLast(this.first.cols, numItemsInViewport.cols, numToleratedItems[1], true)
    } : calculateLast(this.first, numItemsInViewport, numToleratedItems);
    this.last = last;
    this.numItemsInViewport = numItemsInViewport;
    this.d_numToleratedItems = numToleratedItems;
    if (this.showLoader) {
      this.loaderArr = this.both ? Array.from({
        length: numItemsInViewport.rows
      }).map(() => Array.from({
        length: numItemsInViewport.cols
      })) : Array.from({
        length: numItemsInViewport
      });
    }
    if (this._lazy) {
      Promise.resolve().then(() => {
        this.lazyLoadState = {
          first: this._step ? this.both ? {
            rows: 0,
            cols: first.cols
          } : 0 : first,
          last: Math.min(this._step ? this._step : this.last, this.items.length)
        };
        this.handleEvents('onLazyLoad', this.lazyLoadState);
      });
    }
  }
  calculateAutoSize() {
    if (this._autoSize && !this.d_loading) {
      Promise.resolve().then(() => {
        if (this.contentEl) {
          this.contentEl.style.minHeight = this.contentEl.style.minWidth = 'auto';
          this.contentEl.style.position = 'relative';
          this.elementViewChild.nativeElement.style.contain = 'none';
          const [contentWidth, contentHeight] = [primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWidth(this.contentEl), primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHeight(this.contentEl)];
          contentWidth !== this.defaultContentWidth && (this.elementViewChild.nativeElement.style.width = '');
          contentHeight !== this.defaultContentHeight && (this.elementViewChild.nativeElement.style.height = '');
          const [width, height] = [primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWidth(this.elementViewChild.nativeElement), primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHeight(this.elementViewChild.nativeElement)];
          (this.both || this.horizontal) && (this.elementViewChild.nativeElement.style.width = width < this.defaultWidth ? width + 'px' : this._scrollWidth || this.defaultWidth + 'px');
          (this.both || this.vertical) && (this.elementViewChild.nativeElement.style.height = height < this.defaultHeight ? height + 'px' : this._scrollHeight || this.defaultHeight + 'px');
          this.contentEl.style.minHeight = this.contentEl.style.minWidth = '';
          this.contentEl.style.position = '';
          this.elementViewChild.nativeElement.style.contain = '';
        }
      });
    }
  }
  getLast(last = 0, isCols = false) {
    return this._items ? Math.min(isCols ? (this._columns || this._items[0]).length : this._items.length, last) : 0;
  }
  getContentPosition() {
    if (this.contentEl) {
      const style = getComputedStyle(this.contentEl);
      const left = parseFloat(style.paddingLeft) + Math.max(parseFloat(style.left) || 0, 0);
      const right = parseFloat(style.paddingRight) + Math.max(parseFloat(style.right) || 0, 0);
      const top = parseFloat(style.paddingTop) + Math.max(parseFloat(style.top) || 0, 0);
      const bottom = parseFloat(style.paddingBottom) + Math.max(parseFloat(style.bottom) || 0, 0);
      return {
        left,
        right,
        top,
        bottom,
        x: left + right,
        y: top + bottom
      };
    }
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
  }
  setSize() {
    if (this.elementViewChild?.nativeElement) {
      const parentElement = this.elementViewChild.nativeElement.parentElement.parentElement;
      const width = this._scrollWidth || `${this.elementViewChild.nativeElement.offsetWidth || parentElement.offsetWidth}px`;
      const height = this._scrollHeight || `${this.elementViewChild.nativeElement.offsetHeight || parentElement.offsetHeight}px`;
      const setProp = (_name, _value) => this.elementViewChild.nativeElement.style[_name] = _value;
      if (this.both || this.horizontal) {
        setProp('height', height);
        setProp('width', width);
      } else {
        setProp('height', height);
      }
    }
  }
  setSpacerSize() {
    if (this._items) {
      const contentPos = this.getContentPosition();
      const setProp = (_name, _value, _size, _cpos = 0) => this.spacerStyle = {
        ...this.spacerStyle,
        ...{
          [`${_name}`]: (_value || []).length * _size + _cpos + 'px'
        }
      };
      if (this.both) {
        setProp('height', this._items, this._itemSize[0], contentPos.y);
        setProp('width', this._columns || this._items[1], this._itemSize[1], contentPos.x);
      } else {
        this.horizontal ? setProp('width', this._columns || this._items, this._itemSize, contentPos.x) : setProp('height', this._items, this._itemSize, contentPos.y);
      }
    }
  }
  setContentPosition(pos) {
    if (this.contentEl && !this._appendOnly) {
      const first = pos ? pos.first : this.first;
      const calculateTranslateVal = (_first, _size) => _first * _size;
      const setTransform = (_x = 0, _y = 0) => this.contentStyle = {
        ...this.contentStyle,
        ...{
          transform: `translate3d(${_x}px, ${_y}px, 0)`
        }
      };
      if (this.both) {
        setTransform(calculateTranslateVal(first.cols, this._itemSize[1]), calculateTranslateVal(first.rows, this._itemSize[0]));
      } else {
        const translateVal = calculateTranslateVal(first, this._itemSize);
        this.horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
      }
    }
  }
  onScrollPositionChange(event) {
    const target = event.target;
    const contentPos = this.getContentPosition();
    const calculateScrollPos = (_pos, _cpos) => _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
    const calculateCurrentIndex = (_pos, _size) => _size || _pos ? Math.floor(_pos / (_size || _pos)) : 0;
    const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
      return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
    };
    const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
      if (_currentIndex <= _numT) return 0;else return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
    };
    const calculateLast = (_currentIndex, _first, _last, _num, _numT, _isCols = false) => {
      let lastValue = _first + _num + 2 * _numT;
      if (_currentIndex >= _numT) {
        lastValue += _numT + 1;
      }
      return this.getLast(lastValue, _isCols);
    };
    const scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
    const scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
    let newFirst = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    let newLast = this.last;
    let isRangeChanged = false;
    let newScrollPos = this.lastScrollPos;
    if (this.both) {
      const isScrollDown = this.lastScrollPos.top <= scrollTop;
      const isScrollRight = this.lastScrollPos.left <= scrollLeft;
      if (!this._appendOnly || this._appendOnly && (isScrollDown || isScrollRight)) {
        const currentIndex = {
          rows: calculateCurrentIndex(scrollTop, this._itemSize[0]),
          cols: calculateCurrentIndex(scrollLeft, this._itemSize[1])
        };
        const triggerIndex = {
          rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
          cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
        };
        newFirst = {
          rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
          cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
        };
        newLast = {
          rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
          cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
        };
        isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols || this.isRangeChanged;
        newScrollPos = {
          top: scrollTop,
          left: scrollLeft
        };
      }
    } else {
      const scrollPos = this.horizontal ? scrollLeft : scrollTop;
      const isScrollDownOrRight = this.lastScrollPos <= scrollPos;
      if (!this._appendOnly || this._appendOnly && isScrollDownOrRight) {
        const currentIndex = calculateCurrentIndex(scrollPos, this._itemSize);
        const triggerIndex = calculateTriggerIndex(currentIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
        newFirst = calculateFirst(currentIndex, triggerIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
        newLast = calculateLast(currentIndex, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
        isRangeChanged = newFirst !== this.first || newLast !== this.last || this.isRangeChanged;
        newScrollPos = scrollPos;
      }
    }
    return {
      first: newFirst,
      last: newLast,
      isRangeChanged,
      scrollPos: newScrollPos
    };
  }
  onScrollChange(event) {
    const {
      first,
      last,
      isRangeChanged,
      scrollPos
    } = this.onScrollPositionChange(event);
    if (isRangeChanged) {
      const newState = {
        first,
        last
      };
      this.setContentPosition(newState);
      this.first = first;
      this.last = last;
      this.lastScrollPos = scrollPos;
      this.handleEvents('onScrollIndexChange', newState);
      if (this._lazy && this.isPageChanged(first)) {
        const lazyLoadState = {
          first: this._step ? Math.min(this.getPageByFirst(first) * this._step, this.items.length - this._step) : first,
          last: Math.min(this._step ? (this.getPageByFirst(first) + 1) * this._step : last, this.items.length)
        };
        const isLazyStateChanged = this.lazyLoadState.first !== lazyLoadState.first || this.lazyLoadState.last !== lazyLoadState.last;
        isLazyStateChanged && this.handleEvents('onLazyLoad', lazyLoadState);
        this.lazyLoadState = lazyLoadState;
      }
    }
  }
  onContainerScroll(event) {
    this.handleEvents('onScroll', {
      originalEvent: event
    });
    if (this._delay && this.isPageChanged()) {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      if (!this.d_loading && this.showLoader) {
        const {
          isRangeChanged
        } = this.onScrollPositionChange(event);
        const changed = isRangeChanged || (this._step ? this.isPageChanged() : false);
        if (changed) {
          this.d_loading = true;
          this.cd.detectChanges();
        }
      }
      this.scrollTimeout = setTimeout(() => {
        this.onScrollChange(event);
        if (this.d_loading && this.showLoader && (!this._lazy || this._loading === undefined)) {
          this.d_loading = false;
          this.page = this.getPageByFirst();
          this.cd.detectChanges();
        }
      }, this._delay);
    } else {
      !this.d_loading && this.onScrollChange(event);
    }
  }
  bindResizeListener() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      if (!this.windowResizeListener) {
        this.zone.runOutsideAngular(() => {
          const window = this.document.defaultView;
          const event = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isTouchDevice() ? 'orientationchange' : 'resize';
          this.windowResizeListener = this.renderer.listen(window, event, this.onWindowResize.bind(this));
        });
      }
    }
  }
  unbindResizeListener() {
    if (this.windowResizeListener) {
      this.windowResizeListener();
      this.windowResizeListener = null;
    }
  }
  onWindowResize() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(() => {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isVisible(this.elementViewChild?.nativeElement)) {
        const [width, height] = [primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWidth(this.elementViewChild?.nativeElement), primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHeight(this.elementViewChild?.nativeElement)];
        const [isDiffWidth, isDiffHeight] = [width !== this.defaultWidth, height !== this.defaultHeight];
        const reinit = this.both ? isDiffWidth || isDiffHeight : this.horizontal ? isDiffWidth : this.vertical ? isDiffHeight : false;
        reinit && this.zone.run(() => {
          this.d_numToleratedItems = this._numToleratedItems;
          this.defaultWidth = width;
          this.defaultHeight = height;
          this.defaultContentWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWidth(this.contentEl);
          this.defaultContentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHeight(this.contentEl);
          this.init();
        });
      }
    }, this._resizeDelay);
  }
  handleEvents(name, params) {
    //@ts-ignore
    return this.options && this.options[name] ? this.options[name](params) : this[name].emit(params);
  }
  getContentOptions() {
    return {
      contentStyleClass: `p-scroller-content ${this.d_loading ? 'p-scroller-loading' : ''}`,
      items: this.loadedItems,
      getItemOptions: index => this.getOptions(index),
      loading: this.d_loading,
      getLoaderOptions: (index, options) => this.getLoaderOptions(index, options),
      itemSize: this._itemSize,
      rows: this.loadedRows,
      columns: this.loadedColumns,
      spacerStyle: this.spacerStyle,
      contentStyle: this.contentStyle,
      vertical: this.vertical,
      horizontal: this.horizontal,
      both: this.both
    };
  }
  getOptions(renderedIndex) {
    const count = (this._items || []).length;
    const index = this.both ? this.first.rows + renderedIndex : this.first + renderedIndex;
    return {
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0
    };
  }
  getLoaderOptions(index, extOptions) {
    const count = this.loaderArr.length;
    return {
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0,
      ...extOptions
    };
  }
  static ɵfac = function Scroller_Factory(t) {
    return new (t || Scroller)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Scroller,
    selectors: [["p-scroller"]],
    contentQueries: function Scroller_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Scroller_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elementViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-scroller-viewport", "p-element"],
    inputs: {
      id: "id",
      style: "style",
      styleClass: "styleClass",
      tabindex: "tabindex",
      items: "items",
      itemSize: "itemSize",
      scrollHeight: "scrollHeight",
      scrollWidth: "scrollWidth",
      orientation: "orientation",
      step: "step",
      delay: "delay",
      resizeDelay: "resizeDelay",
      appendOnly: "appendOnly",
      inline: "inline",
      lazy: "lazy",
      disabled: "disabled",
      loaderDisabled: "loaderDisabled",
      columns: "columns",
      showSpacer: "showSpacer",
      showLoader: "showLoader",
      numToleratedItems: "numToleratedItems",
      loading: "loading",
      autoSize: "autoSize",
      trackBy: "trackBy",
      options: "options"
    },
    outputs: {
      onLazyLoad: "onLazyLoad",
      onScroll: "onScroll",
      onScrollIndexChange: "onScrollIndexChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c2,
    decls: 3,
    vars: 2,
    consts: [["disabledContainer", ""], ["element", ""], ["buildInContent", ""], ["content", ""], ["buildInLoader", ""], ["buildInLoaderIcon", ""], [4, "ngIf", "ngIfElse"], [3, "scroll", "ngStyle", "ngClass"], ["class", "p-scroller-spacer", 3, "ngStyle", 4, "ngIf"], ["class", "p-scroller-loader", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-scroller-content", 3, "ngClass", "ngStyle"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "p-scroller-spacer", 3, "ngStyle"], [1, "p-scroller-loader", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "styleClass"], [4, "ngIf"]],
    template: function Scroller_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Scroller_ng_container_0_Template, 8, 16, "ng-container", 6)(1, Scroller_ng_template_1_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const disabledContainer_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._disabled)("ngIfElse", disabledContainer_r9);
      }
    },
    dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_4__.SpinnerIcon],
    styles: ["@layer primeng{p-scroller{flex:1;outline:0 none}.p-scroller{position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;outline:0 none}.p-scroller-content{position:absolute;top:0;left:0;min-height:100%;min-width:100%;will-change:transform}.p-scroller-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0;pointer-events:none}.p-scroller-loader{position:sticky;top:0;left:0;width:100%;height:100%}.p-scroller-loader.p-component-overlay{display:flex;align-items:center;justify-content:center}.p-scroller-loading-icon{scale:2}.p-scroller-inline .p-scroller-content{position:static}}\n"],
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Scroller, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-scroller',
      template: `
        <ng-container *ngIf="!_disabled; else disabledContainer">
            <div
                #element
                [attr.id]="_id"
                [attr.tabindex]="tabindex"
                [ngStyle]="_style"
                [class]="_styleClass"
                [ngClass]="{ 'p-scroller': true, 'p-scroller-inline': inline, 'p-both-scroll': both, 'p-horizontal-scroll': horizontal }"
                (scroll)="onContainerScroll($event)"
                [attr.data-pc-name]="'scroller'"
                [attr.data-pc-section]="'root'"
            >
                <ng-container *ngIf="contentTemplate; else buildInContent">
                    <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: loadedItems, options: getContentOptions() }"></ng-container>
                </ng-container>
                <ng-template #buildInContent>
                    <div #content class="p-scroller-content" [ngClass]="{ 'p-scroller-loading': d_loading }" [ngStyle]="contentStyle" [attr.data-pc-section]="'content'">
                        <ng-container *ngFor="let item of loadedItems; let index = index; trackBy: _trackBy || index">
                            <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item, options: getOptions(index) }"></ng-container>
                        </ng-container>
                    </div>
                </ng-template>
                <div *ngIf="_showSpacer" class="p-scroller-spacer" [ngStyle]="spacerStyle" [attr.data-pc-section]="'spacer'"></div>
                <div *ngIf="!loaderDisabled && _showLoader && d_loading" class="p-scroller-loader" [ngClass]="{ 'p-component-overlay': !loaderTemplate }" [attr.data-pc-section]="'loader'">
                    <ng-container *ngIf="loaderTemplate; else buildInLoader">
                        <ng-container *ngFor="let item of loaderArr; let index = index">
                            <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: getLoaderOptions(index, both && { numCols: _numItemsInViewport.cols }) }"></ng-container>
                        </ng-container>
                    </ng-container>
                    <ng-template #buildInLoader>
                        <ng-container *ngIf="loaderIconTemplate; else buildInLoaderIcon">
                            <ng-container *ngTemplateOutlet="loaderIconTemplate; context: { options: { styleClass: 'p-scroller-loading-icon' } }"></ng-container>
                        </ng-container>
                        <ng-template #buildInLoaderIcon>
                            <SpinnerIcon [styleClass]="'p-scroller-loading-icon pi-spin'" [attr.data-pc-section]="'loadingIcon'" />
                        </ng-template>
                    </ng-template>
                </div>
            </div>
        </ng-container>
        <ng-template #disabledContainer>
            <ng-content></ng-content>
            <ng-container *ngIf="contentTemplate">
                <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: items, options: { rows: _items, columns: loadedColumns } }"></ng-container>
            </ng-container>
        </ng-template>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-scroller-viewport p-element'
      },
      styles: ["@layer primeng{p-scroller{flex:1;outline:0 none}.p-scroller{position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;outline:0 none}.p-scroller-content{position:absolute;top:0;left:0;min-height:100%;min-width:100%;will-change:transform}.p-scroller-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0;pointer-events:none}.p-scroller-loader{position:sticky;top:0;left:0;width:100%;height:100%}.p-scroller-loader.p-component-overlay{display:flex;align-items:center;justify-content:center}.p-scroller-loading-icon{scale:2}.p-scroller-inline .p-scroller-content{position:static}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }], {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    step: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    delay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizeDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lazy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loaderDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showSpacer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showLoader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    numToleratedItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onLazyLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onScrollIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    elementViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['element']
    }],
    contentViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['content']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate]
    }]
  });
})();
class ScrollerModule {
  static ɵfac = function ScrollerModule_Factory(t) {
    return new (t || ScrollerModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: ScrollerModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_4__.SpinnerIcon, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_4__.SpinnerIcon],
      exports: [Scroller, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule],
      declarations: [Scroller]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3616:
/*!*******************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-tag.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tag: () => (/* binding */ Tag),
/* harmony export */   TagModule: () => (/* binding */ TagModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 7780);






/**
 * Tag component is used to categorize content.
 * @group Components
 */
const _c0 = ["*"];
function Tag_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.icon);
  }
}
function Tag_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tag_ng_container_2_span_1_Template, 1, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.icon);
  }
}
function Tag_span_3_1_ng_template_0_Template(rf, ctx) {}
function Tag_span_3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Tag_span_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tag_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tag_span_3_1_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconTemplate);
  }
}
class Tag {
  cd;
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
    this.cd.markForCheck();
  }
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Severity type of the tag.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the tag.
   * @group Props
   */
  value;
  /**
   * Icon of the tag to display next to the value.
   * @group Props
   * @deprecated since 15.4.2. Use 'icon' template.
   */
  icon;
  /**
   * Whether the corners of the tag are rounded.
   * @group Props
   */
  rounded;
  templates;
  iconTemplate;
  _style;
  ngAfterContentInit() {
    this.templates?.forEach(item => {
      switch (item.getType()) {
        case 'icon':
          this.iconTemplate = item.template;
          break;
      }
    });
  }
  constructor(cd) {
    this.cd = cd;
  }
  containerClass() {
    return {
      'p-tag p-component': true,
      [`p-tag-${this.severity}`]: this.severity,
      'p-tag-rounded': this.rounded
    };
  }
  static ɵfac = function Tag_Factory(t) {
    return new (t || Tag)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: Tag,
    selectors: [["p-tag"]],
    contentQueries: function Tag_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass",
      severity: "severity",
      value: "value",
      icon: "icon",
      rounded: [2, "rounded", "rounded", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]],
    ngContentSelectors: _c0,
    decls: 6,
    vars: 7,
    consts: [[3, "ngClass", "ngStyle"], [4, "ngIf"], ["class", "p-tag-icon", 4, "ngIf"], [1, "p-tag-value"], ["class", "p-tag-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tag-icon", 3, "ngClass"], [1, "p-tag-icon"], [4, "ngTemplateOutlet"]],
    template: function Tag_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Tag_ng_container_2_Template, 2, 1, "ng-container", 1)(3, Tag_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.iconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
    styles: ["@layer primeng{.p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Tag, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-tag',
      template: `
        <span [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
            <ng-container *ngIf="!iconTemplate">
                <span class="p-tag-icon" [ngClass]="icon" *ngIf="icon"></span>
            </ng-container>
            <span class="p-tag-icon" *ngIf="iconTemplate">
                <ng-template *ngTemplateOutlet="iconTemplate"></ng-template>
            </span>
            <span class="p-tag-value">{{ value }}</span>
        </span>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: ["@layer primeng{.p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], {
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    severity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rounded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate]
    }]
  });
})();
class TagModule {
  static ɵfac = function TagModule_Factory(t) {
    return new (t || TagModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TagModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
      exports: [Tag, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
      declarations: [Tag]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_products_products_routes_ts.js.map