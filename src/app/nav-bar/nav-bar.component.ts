import { Component } from '@angular/core';
import { SerBasketService } from '../Service/ser-basket.service';
import { BasketItem } from '../Models/Basket';
import { AccountService } from '../Service/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
/**
 *
 */
constructor(public service:SerBasketService,public accountSer:AccountService) {
}
getCount(Items:BasketItem[])
{
 return 10;
//  Items.reduce((sum,item)=>sum+item.Quantity,0);
}
}
