import {Component,OnInit} from '@angular/core'
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms'
import {CustomerService} from './CustomerService'
import {Router} from '@angular/router'
@Component({
 selector:'custmodel',
 templateUrl:'CustomerNewModel.Component.html',
 styles:['input.ng-invalid {border-right:4px solid red} input.ng-valid {border-right:4px solid green}'],
 providers:[CustomerService]
})
export class CustomerNewModel
implements OnInit
{

  /*CustFrm =new FormGroup({
      CName:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      CAddress:new FormControl(),
      // Address:new FormGroup({
     //   Street:new FormControl(),
    //    AreaName:new FormControl(),
    //    PinCode:new FormControl()
    //  }),
      CEmail:new FormControl(null,[Validators.required,Validators.email]),
      CMobile:new FormControl(),
      CLimit:new FormControl()
  }); */
  constructor(private fb:FormBuilder,private cust:CustomerService,private rt:Router)
  {}
  CustFrm:any;
  ngOnInit()
   {
     this.CustFrm=this.fb.group({
       CustomerName:["Ramesh",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
       Address:[],
       EmailID:[null,[Validators.required,Validators.email]],
       MobileNo:[],
       CreditLimit:[]
     });

   }
 SaveCustomer():void
 {

    alert(JSON.stringify(this.CustFrm.value));
    //console.log(this.CustFrm.value);

     this.cust.postCustomer(this.CustFrm.value)
     .subscribe((data)=>{
       alert("Record Saved!");
       this.rt.navigate(['/customers']);
      }
      );

 }

}