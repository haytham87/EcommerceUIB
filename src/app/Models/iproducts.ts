export interface Iproducts {
    id:number,
    name:string,
    description:string,
    ImageUrl:string,
    Quantity:number,
    Price:number,
    BrandType:string,
    ProductType:string
}
export class product implements Iproducts
{
    id: number=0;
    name: string='';
    description: string='';
    ImageUrl: string='';
    Quantity: number=0;
    Price: number=0;
    BrandType: string='';
    ProductType: string='';
}
