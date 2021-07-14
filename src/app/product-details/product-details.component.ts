import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // route2 = new ActivatedRoute();
  product: {name: string, price: number, description?: string} = {name:"", price:0};
  constructor(private route: ActivatedRoute, private CS: CartService) {
  }

  addToCart(prod: any){
    alert("this item is added to the cart");
    this.CS.addToCart(prod);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id : number = Number(params.get("id"));
      this.product = products[id];
      // console.log(this.product);
    })
  }

}
