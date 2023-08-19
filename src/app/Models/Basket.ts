import * as cuid from "cuid"; 
export interface BasketItem
{
    Id:number;
    Name:string;
    ImageUrl:string;
    Quantity:number;
    Price:number;
    Type:string;
    Brand:string;
}
export interface Basket
{
    Id:string;
    Items:BasketItem[];
}
export class Basket implements Basket
{
    Id=cuid();
    Items: BasketItem[]=[];

}
