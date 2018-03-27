import {Component,OnInit} from '@angular/core'
import {IProduct} from './IProduct'
import {ProductService} from './ProductService'
@Component({
 selector:'prod',
 // template:'<h1>Product Info</h1>'
 templateUrl:'Product.Component.html',
 //styles:['thead {background-color:orange;color:white} tbody {background-color:gray;color:white;}']
 styleUrls:['Product.Component.css'],
 providers:[ProductService]
})
export class Product
 implements OnInit
{
  Title:string="Hello this is page";
  ProductName:string="Keyboard";
  SpanFlag:boolean=true;
  ShowImage:boolean=false;
  Products:IProduct[];
  
  constructor(private prod:ProductService)
  {}

 ngOnInit():void
 {
  // this.Products= this.prod.getProducts();
  this.prod.getProducts()
  .subscribe((data)=>this.Products=data,(err)=>alert("some Error:"+ err));
 }

  ShowHideImage():void
   {
     this.ShowImage = this.ShowImage?false:true;

   }
 SayHello():void
 {
  //   alert("This is Say Hello Method!");
   this.SpanFlag=this.SpanFlag==true?false:true;
 }

}
