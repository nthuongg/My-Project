import {Component} from "@angular/core";
import {ProductService} from "../services/product.service";

@Component({
  selector: "search",
  templateUrl: './search.component.html'
})
export class SearchComponent{
  s: string = '';
  products: any = [];

  constructor(private productService: ProductService) {
  }

  search(){
    this.productService.searchProducts(this.s)
      .subscribe(data=>{
        this.products =  data.products;
      })
  }
}
