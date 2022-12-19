import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Adapters} from "../../enums/adapters";
import {ProductService} from "../../services/product.service";

@Component({
  selector:'category',
  templateUrl:'./category.component.html',
  styleUrls:['./category.component.css']
})
export class CategoryComponent{
  products: any = [];
  limit: number= Adapters.LIMIT;
  constructor(private productService: ProductService) {
  }

  ngOnInit(){
      this.getProducts();
  }

  /// call API: https://dummyjson.com/products/ + this.id
  getProducts(){
    this.productService.getProducts(this.limit).subscribe(data=>{
      this.products = data.products;
    })
  }
  loadMore(){
    this.limit+=10;
    this.getProducts();
  }
}


