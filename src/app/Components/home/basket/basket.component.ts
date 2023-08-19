import { Component } from '@angular/core';
import { SerBasketService } from 'src/app/Service/ser-basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
constructor(public basketSer:SerBasketService)
{

}
}
