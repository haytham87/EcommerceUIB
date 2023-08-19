import { StaticServiceService } from './../../Service/static-service.service';
// import { Iproducts } from './../../Models/iproducts';
import { Component, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/Models/iproducts';
import { ProductType } from 'src/app/Models/product-type';
import { Productbrand } from 'src/app/Models/productbrand';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products:Iproducts[]=[];
totalOrderlist:number=0;
brandIdSelected:number=0;
typeIdSelected?:number;
selectedVal:number=0;
brands:Productbrand[]=[];
productType?:ProductType[];
pageCount:number=1;
pageSize:number=9;
contentArray: string[] = new Array(50).fill('');
   returnedArray?: string[];
   showBoundaryLinks: boolean = true;
   showDirectionLinks: boolean = true;
constructor(private prdService:StaticServiceService)
{
  
}
pageChanged(event: PageChangedEvent): void {
  
  if(this.pageCount!==event.page)
  {
    this.pageCount=event.page;
    this.getproduct();
  }
}
  ngOnInit(): void {
    this.getproduct();
    this.getAllBrands();
    this.getAllTypes();
    this.contentArray = this.contentArray.map((v: string, i: number) => {
      return 'Line '+ (i + 1);
   });
   this.returnedArray = this.contentArray.slice(0, 5);
  }
  getproduct(){
    this.prdService.getProducts(this.brandIdSelected,this.pageCount,this.pageSize).subscribe({
      next:res=>this.products=res,
      error:err=>console.log("error occured")
    })
  }
  getAllBrands()
  {
    this.prdService.getProductsBrands().subscribe({
      next:res=>this.brands=[{"id":0,"brandName":"All"},...res],
      error:err=>console.log("error occured")
    })
  }
  getAllTypes()
  {
    this.prdService.getProductsType().subscribe({
      next:res=>{console.log(res)
        this.productType = res as ProductType[]
      }
      ,
      error:err=>console.log("error occured")
    })
  }
  onBrandChanges(brandId:number)
  {
    debugger;
    this.brandIdSelected=brandId;
    this.getproduct();
  }
  onTypeChanges(typeId?:number)
  {
    this.typeIdSelected=typeId;
    this.getproduct();
  }
buy(price:any,count:any)
{
  let x=parseInt(count);
  this.totalOrderlist+=count*price;
}
inputVal!:string;
ChaneValue(eve :Event)
{
this.inputVal=(<HTMLInputElement>eve.target).value;
}
}

