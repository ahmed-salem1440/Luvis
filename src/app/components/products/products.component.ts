import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private _ProductsService: ProductsService ,private _ActivatedRoute:ActivatedRoute) {}
currentPath:string = ''
isLoading:boolean = true
  products: any[] = [];
  categories: any[] = [];
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }
  getAllProducts() {
    this.isLoading = true
    this._ProductsService.getAllProducts().subscribe({
      next: (response) => {
        this.isLoading = false
        this.products = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getAllCategories() {
    this._ProductsService.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getByCategory(category:string){
    this.isLoading = true
    this._ProductsService.getByCategory(category).subscribe({
      next:(response)=>{
        this.isLoading = false
        this.products = response
        
      }
    })
  }
}
