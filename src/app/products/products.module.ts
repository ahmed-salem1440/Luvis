import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class ProductsModule { }
