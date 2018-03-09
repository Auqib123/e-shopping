import { NgModule } from '@angular/core';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path :'products',component:ProductsComponent},
     
      {path :'shopping-cart',component:ShoppingCartComponent},

      {path :'check-out',component:CheckOutComponent, canActivate:[AuthGuard]},
      {path :'order-success/:id',component:OrderSuccessComponent, canActivate:[AuthGuard]},  
      {path :'my/orders',component:MyOrdersComponent, canActivate:[AuthGuard]},

    ])
  ],
  declarations: [
    
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
   
  ]
})
export class ShoppingModule { }
