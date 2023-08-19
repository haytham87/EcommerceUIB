import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/Models/product-type';
import { Productbrand } from 'src/app/Models/productbrand';
import { StaticServiceService } from 'src/app/Service/static-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  brands:Productbrand[]=[];
  productType?:ProductType[];
  constructor(private prdService:StaticServiceService)
  {
    
  }
  ngOnInit(): void {
this.getAllBrands();
this.getAllTypes();
  }
  getAllBrands()
  {
    this.prdService.getProductsBrands().subscribe({
      next:res=>this.brands=res,
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
}
