import { Component, OnInit } from '@angular/core'

import { ICustomer } from './ICustomer'
import { CustomerService } from './CustomerService'


@Component(
    {
        selector: 'cust-list',
        moduleId: module.id,
        templateUrl: 'CustomerList.html',
        providers:[CustomerService]
    })
export class CustomerList 
    implements OnInit
{

    searchText: string = "Ramesh";
    Customers: ICustomer[];

    constructor(private cust: CustomerService) { }

    ngOnInit() {
        this.cust.getCustomers()
            .subscribe((data) => this.Customers = data, (err) => alert("Error" + err));
    }
}