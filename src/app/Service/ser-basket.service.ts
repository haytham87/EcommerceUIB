import { Iproducts } from './../Models/iproducts';
import { Basket, BasketItem } from './../Models/Basket';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerBasketService {
private basketsource=new BehaviorSubject<Basket|null>(null);
basketsource$=this.basketsource.asObservable();
  constructor(private http:HttpClient) { }
  getBasket( id:string)
  {
    return this.http.get<Basket>("https://localhost:7294/api/Basket?id="+id).subscribe({
      next:basket=>{
        this.basketsource.next(basket);
      }
    });
  }
  setBasket(basket:Basket)
  {
    return this.http.post<Basket>("https://localhost:7294/api/Basket",basket).subscribe({
      next:basket=>{
        this.basketsource.next(basket);
      }
    });
  }
  getcurrentBasketValue()
  {
    debugger;
    console.log(this.basketsource.value);
        return this.basketsource.value;
  }
  addItemToBasket(item:Iproducts,quantity:number=1)
  {
    const itemToAdd=this.mapProductItemToBAsketItem(item);
    const basket=this.getcurrentBasketValue()?? this.createBasket();
    basket.Items=this.addOrUpdateItems(basket.Items,itemToAdd,quantity);
    this.setBasket(basket);
  }
 mapProductItemToBAsketItem(item: Iproducts) :BasketItem|any
   {
      return 
      { Id:item.id
         Name:item.name
        Price:item.Price
        Quantity:0
        Brand:item.BrandType
        Type:item.ProductType
     }
}
createBasket(): Basket {
  const basket=new Basket();
  localStorage.setItem('basketId',basket.Id);
  return basket;
}
addOrUpdateItems(Items: BasketItem[], itemToAdd: BasketItem, quantity: number):BasketItem[] {
  
  const item=Items.find(x=>x.Id===itemToAdd.Id);
  console.log(item?.Name);
  if(item)
  {
    item.Quantity=quantity
  }
  else
  {
    itemToAdd.Quantity=quantity;
    Items.push(itemToAdd);
  }
return Items;
}
}
 

 
// private isProduct(item:Iproducts|BasketItem) :item is Iproducts
// {
//   return (item as Iproducts).BrandType!==undefined
// }

