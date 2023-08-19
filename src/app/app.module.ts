import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrddetailsComponent } from './Components/home/prddetails/prddetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule,PaginationConfig } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';
import { ProductitemComponent } from './Components/home/productitem/productitem.component';
import { BasketComponent } from './Components/home/basket/basket.component';
import { LoginComponent } from './Components/home/login/login.component';
import { RegisterComponent } from './Components/home/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    HomeComponent,
    PrddetailsComponent,
    ProductitemComponent,
    BasketComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    RouterModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
