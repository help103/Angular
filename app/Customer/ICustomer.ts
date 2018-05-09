export interface ICustomer
{
    CustomerID:number;
    CustomerName:string;
    Address:string;
    EmailID:string;
    MobileNo:string;
    CreditLimit:number;
}
import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { ICustomer } from './ICustomer'

@Injectable()
export class CustomerService {
    url: string = "/api/CustomerTbls";

    constructor(private _htt: Http) { }
    getCustomers(): Observable<ICustomer[]> {
        return this._htt.get(this.url)
            .map((resp: Response) => <ICustomer[]>resp.json());
    }

    getCustById(id: number): Observable<ICustomer> {

        return this._htt.get(this.url + "/" + id)
            .map((data)=><ICustomer>data.json());
    }

    updateCustomer(id: number, rec: ICustomer): Observable<Response> {
        rec.CustomerID = id;
        return this._htt.put(this.url + "/" + id, rec)
            .map((data)=>data.json());
    }

    postCustomer(rec: ICustomer): Observable<Response> {
        alert(JSON.stringify(rec));
        return this._htt.post(this.url, rec);
    }
}
