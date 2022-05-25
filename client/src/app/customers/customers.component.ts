import { Component, OnInit } from '@angular/core';
import { customer } from '../globals';
import { CustomerService } from '../services/customers.service';
import { User } from '../user.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  showTable:boolean = false;
  customers: customer[] = [];
  usersbyCustomer: User[] = [];
  customerUsers: User[] = [];
  show = false;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    
  }

  async loadCustomers()
  {
    await this.customerService.getCustomerList().then(
      (res:customer[]) => {
       this.customers = res;
      }
    );
    this.showTable = true;
  }

  refresh()
  {
    this.customers = [];
    this.loadCustomers();
  }

  update(body:customer)
  {
    this.customerService.updateCustomer(body.id!,body);
  }

  delete(value:{index: number,target: customer})
  {
    this.customers.splice(value.index,1);
    this.customerService.deleteCustomer(value.target.id!).subscribe();
  }

  create(body:any)
  {
    let newCustomer:customer
    this.customerService.create(body).subscribe(
    (res:any) =>
      {
        newCustomer = {
          "id": res.id,
          "name": res.name,
          "website": res.website,
          "address": res.address,
          "created_on": res.created_on,
          "modified_on": res.modified_on
        }
        this.customers = [...this.customers,newCustomer];
      }
    );

  }

  async showUsers(id:number)
  {
    await this.customerService.showUsers(id).then(
      (res:User[]) => {
        this.usersbyCustomer = res;
      }
    );

    this.show = true;
  }
}
