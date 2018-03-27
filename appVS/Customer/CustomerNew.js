"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CustomerService_1 = require("./CustomerService");
var router_1 = require("@angular/router");
var CustomerNew = /** @class */ (function () {
    function CustomerNew(fb, cust, rt) {
        this.fb = fb;
        this.cust = cust;
        this.rt = rt;
    }
    CustomerNew.prototype.ngOnInit = function () {
        this.CustFrm = this.fb.group({
            CustomerName: ["Ramesh", [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(10)]],
            Address: [],
            EmailID: [null, [forms_1.Validators.required, forms_1.Validators.email]],
            MobileNo: [],
            CreditLimit: []
        });
    };
    CustomerNew.prototype.SaveCustomer = function () {
        var _this = this;
        alert(JSON.stringify(this.CustFrm.value));
        //console.log(this.CustFrm.value);
        this.cust.postCustomer(this.CustFrm.value)
            .subscribe(function (data) {
            alert("Record Saved!");
            _this.rt.navigate(['/listcust']);
        });
    };
    CustomerNew = __decorate([
        core_1.Component({
            selector: 'custmodel',
            moduleId: module.id,
            templateUrl: 'CustomerNew.html',
            styles: ['input.ng-invalid {border-right:4px solid red} input.ng-valid {border-right:4px solid green}'],
            providers: [CustomerService_1.CustomerService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, CustomerService_1.CustomerService, router_1.Router])
    ], CustomerNew);
    return CustomerNew;
}());
exports.CustomerNew = CustomerNew;
//# sourceMappingURL=CustomerNew.js.map