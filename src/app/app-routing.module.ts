import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from './guard/auth.guard';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ProductCatlistComponent } from './components/product-catlist/product-catlist.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  {path:'products',component:ProductPageComponent,canActivate:[AuthGuard]},
  {path:'products-detail/:id',component:ProductDetailPageComponent,canActivate:[AuthGuard]},
  {path:'category-detail/:id',component:ProductCatlistComponent,canActivate:[AuthGuard]},

  {path:'about',component:AboutPageComponent,canActivate:[AuthGuard]},
  {path:'contact',component:ContactPageComponent,canActivate:[AuthGuard]},
  {path:'register',component:RegisterPageComponent},

  {path:'login',component:LoginPageComponent},
  {path:'**',component:ErrorPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
