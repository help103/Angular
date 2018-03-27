import {Injectable} from '@angular/core'
import {Http,Response} from '@angular/http'

import {Observable} from 'rxjs/Observable'

import {IProduct} from './IProduct'
import 'rxjs/add/operator/map'

@Injectable()
export class ProductService
{
    APIUrl:string="http://localhost:49702/api/prod";

    constructor(private _http:Http)
    {}

    getProducts():Observable<IProduct []>
    {
       return this._http.get(this.APIUrl)
       .map((resp:Response)=><IProduct []>resp.json());
    }

   /* getProducts():IProduct []
    {
        return [
            {ProductID:1,ProductName:"Mouse",MfgName:"Intex",Price:450,ImagePath:'./assets/images/img1.png',Rating:4},
            {ProductID:2,ProductName:"Mother Board",MfgName:"Intel",Price:14450,ImagePath:'./assets/images/img2.png',Rating:2},
            {ProductID:3,ProductName:"HardDisk",MfgName:"Segate",Price:5450,ImagePath:'./assets/images/img3.png',Rating:5},
            {ProductID:4,ProductName:"Monitor",MfgName:"LG",Price:5450,ImagePath:'./assets/images/img1.png',Rating:5},
            {ProductID:5,ProductName:"Keyboard",MfgName:"Intex",Price:450,ImagePath:'./assets/images/img2.png',Rating:2},
          ];
    } */
}