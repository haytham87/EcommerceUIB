import { Injectable } from '@angular/core';
import { Iproducts } from '../Models/iproducts';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductType } from '../Models/product-type';
import { Productbrand } from '../Models/productbrand';

@Injectable({
  providedIn: 'root'
})
export class StaticServiceService {
 
  constructor(private http:HttpClient) { 
    
  }
  getProducts(brandId?:number,pageCount?:number,pageSize?:number)
    {
    //   debugger;
    //  let params=new HttpParams();
    //  params.append("brandId",brandId);
    //  if(this.typeId) this,params.append("typeId",this.typeId);
    return this.http.get<Iproducts[]>("https://localhost:7294/api/Product/GetAllProduct/"+brandId+'/'+pageCount+'/'+pageSize);

      // return this.http.get<Iproducts[]>("https://localhost:7294/api/Product/GetAllProduct",{params:params});
    }
    getProductById(id:number)
    {
      return this.http.get<Iproducts>("https://localhost:7294/api/Product/GetProductById/"+id);
    }
    getProductsType()
    {
      return this.http.get<ProductType[]>("https://localhost:7294/api/Product/GetAllTypes");
    }
    getProductsBrands()
    {
      return this.http.get<Productbrand[]>("https://localhost:7294/api/Product/GetAllBrands");
    }
}
