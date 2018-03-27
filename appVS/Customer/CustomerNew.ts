import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { CustomerService } from './CustomerService'
import { Router } from '@angular/router'
@Component({
    selector: 'custmodel',
    moduleId: module.id,
    templateUrl: 'CustomerNew.html',
    styles: ['input.ng-invalid {border-right:4px solid red} input.ng-valid {border-right:4px solid green}'],
    providers: [CustomerService]
})
export class CustomerNew
    implements OnInit {

    
    constructor(private fb: FormBuilder, private cust: CustomerService, private rt: Router) { }
    CustFrm: any;
    ngOnInit() {
        this.CustFrm = this.fb.group({
            CustomerName: ["Ramesh", [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
            Address: [],
            EmailID: [null, [Validators.required, Validators.email]],
            MobileNo: [],
            CreditLimit: []
        });

    }
    SaveCustomer(): void {

        alert(JSON.stringify(this.CustFrm.value));
        //console.log(this.CustFrm.value);

        this.cust.postCustomer(this.CustFrm.value)
            .subscribe((data) => {
                alert("Record Saved!");
                this.rt.navigate(['/listcust']);
            }
            );

    }

}