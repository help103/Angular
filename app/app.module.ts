import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {RouterModule}  from '@angular/router'


import { AppComponent } from './app.component';
import {Sample} from './Sample/Sample.Component'
import {Product} from './Product/Product.Component'
import {Star} from './Star/Star.Component'
import {Home} from './Home/Home.Component'
import {Customer} from './Customer/Customer.Compnent'
import {CustomerNew} from './Customer/CustomerNew.Component'
import {CustomerNewModel} from './Customer/CustomerNewModel.Component'
import {SampleAnimation} from './Animation/SampleAnimation'
import {BuiltinPipes} from './Pipes/BuiltinPipes'
import {CustFilter} from './Pipes/CustFilter'
import {MyDirective} from './Pipes/MyDirective'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,Sample,Product,Star,Home,Customer,CustomerNew,CustomerNewModel,BuiltinPipes,CustFilter,MyDirective,SampleAnimation
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,ReactiveFormsModule,BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'sample',component:Sample},
      {path:'products',component:Product},
      {path:'customers',component:Customer} ,
      {path:'custnew',component:CustomerNew},
      {path:'custnewmodel',component:CustomerNewModel},
      {path:'pipes',component:BuiltinPipes},
      {path:'animate',component:SampleAnimation},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
