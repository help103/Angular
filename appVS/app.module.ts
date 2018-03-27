import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { CustomerList } from './Customer/CustomerList';
import { CustomerNew } from './Customer/CustomerNew';
import { CustomerEdit } from './Customer/CustomerEdit'
@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot([
        { path: "newcust", component: CustomerNew },
        { path: "listcust", component: CustomerList },
        { path: "editcust/:id", component: CustomerEdit }
    ])],
    declarations: [AppComponent, CustomerList, CustomerNew,CustomerEdit],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
