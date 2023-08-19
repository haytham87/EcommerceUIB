import { Component, Input } from '@angular/core';
import { Iproducts } from 'src/app/Models/iproducts';
import { SerBasketService } from 'src/app/Service/ser-basket.service';

@Component({
  selector: 'app-prddetails',
  templateUrl: './prddetails.component.html',
  styleUrls: ['./prddetails.component.css']
})
export class PrddetailsComponent {
@Input() product?:Iproducts;
/**
 *
 */
constructor(private BasketService:SerBasketService) {
  
}
addToBasket()
{
 this.product&& this.BasketService.addItemToBasket(this.product,1);
}
}
