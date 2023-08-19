import { ProductitemComponent } from './Components/home/productitem/productitem.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PrddetailsComponent } from './Components/home/prddetails/prddetails.component';
import { BasketComponent } from './Components/home/basket/basket.component';
import { LoginComponent } from './Components/home/login/login.component';
import { RegisterComponent } from './Components/home/register/register.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path:'/',component:HomeComponent},
  {path:'Home/productitem/:id',component:ProductitemComponent},
  {path:'Home/basket',component:BasketComponent,canActivate:[AuthGuard]},
  {path:'Home/Login',component:LoginComponent},
  {path:'Home/Register',component:RegisterComponent},

  {path:'**',component:HomeComponent,pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
