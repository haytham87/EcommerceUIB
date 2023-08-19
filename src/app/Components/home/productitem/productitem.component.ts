import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproducts } from 'src/app/Models/iproducts';
import { StaticServiceService } from 'src/app/Service/static-service.service';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit{
  product?:Iproducts
  constructor(private prdService:StaticServiceService,private activateRoute:ActivatedRoute)
  {

  }
  ngOnInit(): void {
    debugger;
    this.getproductBYID();
  }
  getproductBYID(){
    debugger;
const id=this.activateRoute.snapshot.paramMap.get('id');
if(id)
this.prdService.getProductById(+id).subscribe({
  next:res=>{this.product=res,console.log(res)},
  error:err=>console.log("error occured")
})
  }
  
}
