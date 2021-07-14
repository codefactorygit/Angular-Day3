import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Form, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any;
  checkoutForm: any;
  // new FormGroup({
  //   name : new FormControl(""),
  //   address : new FormControl("")
  // });
  constructor(private CS: CartService, private FB: FormBuilder) {
    this.checkoutForm = this.FB.group({
      name: "",
      address: ""
    })
  }

  ngOnInit(): void {
    this.cart = this.CS.getItems();
  }

  onSubmit(data: {name:string, address: string}){
    console.warn("Your order has been submitted", data);
    this.cart = this.CS.clearCart();
    this.checkoutForm.reset();
  }
}
