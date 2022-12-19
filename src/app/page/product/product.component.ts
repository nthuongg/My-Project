import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Adapters} from "../../enums/adapters";
import {ProductService} from "../../services/product.service";

@Component({
  selector:'product',
  templateUrl:'product.component.html',
  styleUrls:['./product.component.css']
})
export class ProductComponent{
  id: number = 0;
  product: any = {
    id: 1,
    title: 'iPhone 9',
    price: 549,
    thumbnail: Adapters.BASE_URL+ 'data/products/1/thumbnail.jpg'  }

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {
   }
   ngOnInit(){
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.getProduct();
    })
   }
  /// call API: https://dummyjson.com/products/ + this.id
  getProduct(){
    //call api
    this.productService.getProductDetail(this.id)
      .subscribe(data=>{
      //set data to product
      this.product = data;
    })
    //st data to product
  }
}
