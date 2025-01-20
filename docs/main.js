"use strict";
(self["webpackChunkaltenshop"] = self["webpackChunkaltenshop"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/splitter */ 1369);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toolbar */ 1973);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/badge */ 2773);
/* harmony import */ var _shared_ui_panel_menu_panel_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/ui/panel-menu/panel-menu.component */ 7853);
/* harmony import */ var _products_data_access_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/data-access/cart.service */ 3386);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ 6280);
/* harmony import */ var _products_ui_cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/ui/cart-list/cart-list.component */ 5124);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 7780);

















const _c0 = () => ({
  height: "100px"
});
const _c1 = () => ({
  height: "calc(100vh - 100px)"
});
const _c2 = () => [20, 80];
const _c3 = () => ({
  width: "50vw"
});
function AppComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-panel-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor() {
    this.cartService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_products_data_access_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService);
    this.cartProducts = this.cartService.products;
    this.title = "ALTEN SHOP";
    this.isDialogVisible = false;
  }
  showCart() {
    this.isDialogVisible = true;
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 15,
    consts: [[1, "p-toolbar-group-start"], ["src", "assets/icons/icon-72x72.png", "alt", "logo"], [1, "p-toolbar-group-center"], [1, "p-toolbar-group-end"], ["pBadge", "", 1, "pi", "pi-shopping-cart", "mr-2", 2, "font-size", "2rem", "cursor", "pointer", 3, "click", "value"], [3, "panelSizes"], ["pTemplate", ""], ["header", "Votre panier", 3, "visibleChange", "visible", "modal"], [1, "w-full"], [1, "w-full", "app-content"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-toolbar")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_i_click_6_listener() {
          return ctx.showCart();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p-splitter", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AppComponent_ng_template_8_Template, 2, 0, "ng-template", 6)(9, AppComponent_ng_template_9_Template, 2, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p-dialog", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("visibleChange", function AppComponent_Template_p_dialog_visibleChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.isDialogVisible, $event) || (ctx.isDialogVisible = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.cartProducts().length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("panelSizes", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("visible", ctx.isDialogVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("modal", true);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, primeng_splitter__WEBPACK_IMPORTED_MODULE_5__.SplitterModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_5__.Splitter, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.Dialog, primeng_badge__WEBPACK_IMPORTED_MODULE_8__.BadgeModule, primeng_badge__WEBPACK_IMPORTED_MODULE_8__.BadgeDirective, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__.ToolbarModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__.Toolbar, _shared_ui_panel_menu_panel_menu_component__WEBPACK_IMPORTED_MODULE_0__.PanelMenuComponent, _products_ui_cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_2__.CartListComponent],
    styles: [".app-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vdGVzdCUyMHRlY2huaXF1ZS9BbHRlbi9mcm9udC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbn0iLCIuYXBwLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_ROUTES: () => (/* binding */ APP_ROUTES)
/* harmony export */ });
/* harmony import */ var _shared_features_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/features/home/home.component */ 3006);

const APP_ROUTES = [{
  path: "home",
  component: _shared_features_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: "products",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-check_mjs-node_modules_primeng_fesm2022_p-4d1c2d"), __webpack_require__.e("src_app_products_products_routes_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./products/products.routes */ 8287)).then(m => m.PRODUCTS_ROUTES)
}, {
  path: "contact",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-check_mjs-node_modules_primeng_fesm2022_p-4d1c2d"), __webpack_require__.e("src_app_contact_contact_routes_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contact/contact.routes */ 3809)).then(m => m.CONTACT_ROUTES)
}, {
  path: "",
  redirectTo: "home",
  pathMatch: "full"
}];

/***/ }),

/***/ 3386:
/*!******************************************************!*\
  !*** ./src/app/products/data-access/cart.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartService: () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class CartService {
  constructor() {
    this._products = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    this.products = this._products.asReadonly();
  }
  add(product) {
    this._products.update(products => [product, ...products]);
  }
  remove(product) {
    this._products.update(products => products.filter(item => item.id !== product.id));
  }
  removeAll() {
    this._products.set([]);
  }
  static #_ = this.ɵfac = function CartService_Factory(t) {
    return new (t || CartService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CartService,
    factory: CartService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 5124:
/*!**************************************************************!*\
  !*** ./src/app/products/ui/cart-list/cart-list.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartListComponent: () => (/* binding */ CartListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var app_products_data_access_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/products/data-access/cart.service */ 3386);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 9136);







const _c0 = a0 => ({
  "border-top-1 surface-border": a0
});
function CartListComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div")(5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8)(14, "p-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function CartListComponent_For_1_Template_p_button_onClick_14_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.plusQte(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function CartListComponent_For_1_Template_p_button_onClick_17_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.minusQte(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12)(19, "p-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function CartListComponent_For_1_Template_p_button_onClick_19_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.removeFromCart(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ɵ$index_1_r4 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, !(ɵ$index_1_r4 === 0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 7, product_r2.price, "EUR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("outlined", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.quantity ? product_r2.quantity : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("outlined", true);
  }
}
function CartListComponent_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Vous n'avez aucun produit dans le panier");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class CartListComponent {
  constructor() {
    this.cartService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(app_products_data_access_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService);
    this.products = this.cartService.products;
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
  removeFromCart(product) {
    this.cartService.remove(product);
  }
  static #_ = this.ɵfac = function CartListComponent_Factory(t) {
    return new (t || CartListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CartListComponent,
    selectors: [["app-cart"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 1,
    consts: [[1, "col-12"], [1, "text-lg", "font-medium", "text-900", "mt-2"], [1, "flex", "flex-column", "sm:flex-row", "sm:align-items-center", "p-4", "gap-3", 3, "ngClass"], [1, "flex", "flex-column", "md:flex-row", "justify-content-between", "md:align-items-center", "flex-1", "gap-4"], [1, "flex", "flex-row", "md:flex-column", "justify-content-between", "align-items-start", "gap-2"], [1, "font-medium", "text-secondary", "text-sm"], [1, "flex", "flex-column", "md:align-items-end", "gap-3"], [1, "text-xl", "font-semibold", "text-900"], [1, "flex", "flex-row-reverse", "align-items-center", "md:flex-row", "gap-1"], ["icon", "pi pi-plus", "size", "small", 3, "onClick", "outlined"], [1, "text-xl", "font-medium", "text-900"], ["icon", "pi pi-minus", "size", "small", 3, "onClick", "outlined"], [1, "flex", "flex-row-reverse", "md:flex-row", "gap-2"], ["icon", "pi pi-shopping-cart", "label", "Retirer", "severity", "warning", 1, "flex-auto", "md:flex-initial", "white-space-nowrap", 3, "onClick"]],
    template: function CartListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](0, CartListComponent_For_1_Template, 20, 12, "div", 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"], false, CartListComponent_ForEmpty_2_Template, 2, 0, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.products());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3006:
/*!********************************************************!*\
  !*** ./src/app/shared/features/home/home.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/card */ 1486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




class HomeComponent {
  constructor() {
    this.appTitle = "ALTEN SHOP";
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 1,
    consts: [["header", "Bienvenue", 1, "block", "m-2", "text-center"], [1, "m-0"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Bienvenue sur ", ctx.appTitle, " ! ");
      }
    },
    dependencies: [primeng_card__WEBPACK_IMPORTED_MODULE_1__.CardModule, primeng_card__WEBPACK_IMPORTED_MODULE_1__.Card, primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7853:
/*!**************************************************************!*\
  !*** ./src/app/shared/ui/panel-menu/panel-menu.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelMenuComponent: () => (/* binding */ PanelMenuComponent)
/* harmony export */ });
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/panelmenu */ 8635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



class PanelMenuComponent {
  constructor() {
    this.items = [{
      label: 'Accueil',
      icon: 'pi pi-home',
      routerLink: ['/home']
    }, {
      label: 'Produits',
      icon: 'pi pi-barcode',
      routerLink: ['/products/list']
    }, {
      label: 'Contact',
      icon: 'pi pi-phone',
      routerLink: ['/contact/form']
    }];
  }
  static #_ = this.ɵfac = function PanelMenuComponent_Factory(t) {
    return new (t || PanelMenuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PanelMenuComponent,
    selectors: [["app-panel-menu"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["styleClass", "w-full", 3, "model"]],
    template: function PanelMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-panelMenu", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
      }
    },
    dependencies: [primeng_panelmenu__WEBPACK_IMPORTED_MODULE_1__.PanelMenuModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_1__.PanelMenu],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/fr */ 5669);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var app_app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/app.routes */ 2181);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dynamicdialog */ 5079);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 5312);












if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.withInterceptorsFromDi)()), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.provideAnimations)(), (0,_angular_router__WEBPACK_IMPORTED_MODULE_7__.provideRouter)(app_app_routes__WEBPACK_IMPORTED_MODULE_0__.APP_ROUTES), primeng_api__WEBPACK_IMPORTED_MODULE_8__.ConfirmationService, primeng_api__WEBPACK_IMPORTED_MODULE_8__.MessageService, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__.DialogService]
}).catch(err => console.log(err));
(0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_11__["default"], "fr-FR");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map