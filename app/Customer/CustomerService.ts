import {Injectable} from '@angular/core'
import {Http,Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import {ICustomer} from './ICustomer'

@Injectable()
export class CustomerService
{
 url:string="http://localhost:49702/api/cust";

   constructor(private _htt:Http)
    {}
    getCustomers():Observable<ICustomer []>
    {
       return this._htt.get(this.url)
       .map((resp:Response)=><ICustomer []> resp.json());        
    }

    postCustomer(rec:ICustomer):Observable<Response>
    {
      alert(JSON.stringify(rec));
      return this._htt.post(this.url,rec);
    }
}