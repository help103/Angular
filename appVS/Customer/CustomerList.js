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
var CustomerService_1 = require("./CustomerService");
var CustomerList = /** @class */ (function () {
    function CustomerList(cust) {
        this.cust = cust;
        this.searchText = "Ramesh";
    }
    CustomerList.prototype.ngOnInit = function () {
        var _this = this;
        this.cust.getCustomers()
            .subscribe(function (data) { return _this.Customers = data; }, function (err) { return alert("Error" + err); });
    };
    CustomerList = __decorate([
        core_1.Component({
            selector: 'cust-list',
            moduleId: module.id,
            templateUrl: 'CustomerList.html',
            providers: [CustomerService_1.CustomerService]
        }),
        __metadata("design:paramtypes", [CustomerService_1.CustomerService])
    ], CustomerList);
    return CustomerList;
}());
exports.CustomerList = CustomerList;
//# sourceMappingURL=CustomerList.js.map