import {Pipe,PipeTransform} from '@angular/core'
import {ICustomer} from './../Customer/ICustomer'
@Pipe({
  name:'CFilter'
})
export class CustFilter
implements PipeTransform
{
  transform(items:ICustomer [],text:string):ICustomer []
  {
    if(!items) return [];
    if(!text) return items;
    return text? items.filter(item => item.CustomerName.indexOf(text) !== -1)
    : items;
  }
}