import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom} from 'rxjs';
import {customer, my_URL} from '../globals';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getCustomerList()
  {
   return lastValueFrom(this.http.get<customer[]>(my_URL + '/customers'));
  }

  getCustomerById(id:number)
  {
    return lastValueFrom(this.http.get<customer>(my_URL+'/customers/'+id));
  }

  updateCustomer(id:number,body:customer)
  {
    this.http.put(my_URL+'/customers/'+id,body).subscribe();
  }

  deleteCustomer(id:number)
  {
    return this.http.delete(my_URL+'/customers/'+id);
  }

  create(body:customer)
  {
    return this.http.post(my_URL+'/customers',body);
  }

  showUsers(id:number)
  {
    return lastValueFrom(this.http.get<User[]>(my_URL+'/customers/'+id+'/users'+`?filter[include][]=roles`));
  }
}