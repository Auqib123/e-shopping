import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from'@angular/http';
import { AppComponent } from './app.component';
import { TitleCasePipePipe } from './title-case-pipe.pipe';
import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import{AngularFireAuthModule} from 'angularfire2/auth';
import { environment } from '../environments/environment';


import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';


import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    TitleCasePipePipe,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path :'',component:HomeComponent},
      {path :'products',component:ProductsComponent},
      {path :'login',component:LoginComponent},
      
      {path :'shopping-cart',component:ShoppingCartComponent},
      {path :'check-out',component:CheckOutComponent, canActivate:[AuthGuard]},
      {path :'order-success',component:OrderSuccessComponent, canActivate:[AuthGuard]},
      
      {path :'my/orders',component:MyOrdersComponent, canActivate:[AuthGuard]},
      {path :'admin/products',component:AdminProductsComponent, canActivate:[AuthGuard]},
      {path :'admin/orders',component:AdminOrdersComponent, canActivate:[AuthGuard]},
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
