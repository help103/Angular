import {Component,OnInit} from '@angular/core'

import {ICustomer} from './ICustomer'
import {CustomerService} from './CustomerService'

@Component({
 selector:'cust',
 templateUrl:'Customer.Component.html',
 providers:[CustomerService]
})
export class Customer
 implements OnInit
{

   searchText:string="Ramesh";
   Customers:ICustomer [];

   constructor(private cust:CustomerService)
   {}

    ngOnInit()
    {
    this.cust.getCustomers()
    .subscribe((data)=> this.Customers=data,(err)=>alert("Error"+ err));
    }
}