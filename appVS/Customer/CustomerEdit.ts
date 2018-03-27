import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { CustomerService } from './CustomerService'
import { Router, ActivatedRoute } from '@angular/router'
@Component({
    selector: 'custedit',
    moduleId: module.id,
    templateUrl: 'CustomerEdit.html',
    styles: ['input.ng-invalid {border-right:4px solid red} input.ng-valid {border-right:4px solid green}'],
    providers: [CustomerService]
})
export class CustomerEdit
    implements OnInit {

    CustomerID: number;
    constructor(private fb: FormBuilder, private cust: CustomerService, private rt: Router, private art: ActivatedRoute) { }
    CustFrm: any;
    ngOnInit() {
        this.CustFrm = this.fb.group({
            CustomerName: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
            Address: [],
            EmailID: [null, [Validators.required, Validators.email]],
            MobileNo: [],
            CreditLimit: []
        });


        this.art.params.subscribe((data) =>
            this.CustomerID=data['id']
        );

        alert(this.CustomerID);

        this.cust.getCustById(this.CustomerID)
            .subscribe((data) => {
                //alert(JSON.stringify(data));
                this.CustFrm.patchValue({ CustomerName: data.CustomerName, Address: data.Address, EmailID: data.EmailID, MobileNo: data.MobileNo, CreditLimit: data.CreditLimit});
            });
    }
    UpdateCustomer(): void {

        alert(JSON.stringify(this.CustFrm.value));
        ////console.log(this.CustFrm.value);

        this.cust.updateCustomer(this.CustomerID,this.CustFrm.value)
            .subscribe((data) => {
                alert("Record Updated!");
                this.rt.navigate(['/listcust']);
            }
           );

    }

}