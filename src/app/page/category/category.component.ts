import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector:'category',
  templateUrl:'./category.component.html',
  styleUrls:['./category.component.css']
})
export class CategoryComponent{
  sl:number=5;
  products: any = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit(){
      this.getProducts();
  }

  /// call API: https://dummyjson.com/products/ + this.id
  getProducts(){
    //call api
    const  url = 'https://dummyjson.com/products?limit='+this.sl;
    this.http.get<any>(url).subscribe(data=>{
      //set data to product
      this.products = data.products;
    })
    //st data to product
  }
  loadMore(){
    this.sl+=10;
    this.getProducts();
  }
}


