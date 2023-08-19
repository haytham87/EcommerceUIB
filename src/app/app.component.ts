import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { SerBasketService } from './Service/ser-basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProjectEcommerce';
  constructor(private http:HttpClient,private BasketService:SerBasketService){}
  ngOnInit(): void {
   const BasketId=localStorage.getItem('basketId');
   console.log(BasketId);
   if(BasketId) this.BasketService.getBasket(BasketId);

  }

  
}



