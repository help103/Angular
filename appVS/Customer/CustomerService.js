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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var CustomerService = /** @class */ (function () {
    function CustomerService(_htt) {
        this._htt = _htt;
        this.url = "/api/CustomerTbls";
    }
    CustomerService.prototype.getCustomers = function () {
        return this._htt.get(this.url)
            .map(function (resp) { return resp.json(); });
    };
    CustomerService.prototype.getCustById = function (id) {
        return this._htt.get(this.url + "/" + id)
            .map(function (data) { return data.json(); });
    };
    CustomerService.prototype.updateCustomer = function (id, rec) {
        rec.CustomerID = id;
        return this._htt.put(this.url + "/" + id, rec)
            .map(function (data) { return data.json(); });
    };
    CustomerService.prototype.postCustomer = function (rec) {
        alert(JSON.stringify(rec));
        return this._htt.post(this.url, rec);
    };
    CustomerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=CustomerService.js.map