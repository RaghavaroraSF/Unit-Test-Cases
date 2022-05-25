import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { customer } from 'src/app/globals';

@Component({
  selector: 'customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent implements OnInit {

  @Input('customerList') customers:customer[] = [];
  @Output() edit = new EventEmitter();
  @Output() deleteCustomer = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() show = new EventEmitter();

  cols: string[] = []; 
  isEditable: boolean[] = [];
  oldCustomer: customer = this.customers[0];
  addNewCustomer:boolean = false;


  ngOnInit(): void {
    
      for(let key in this.customers[0])
    {
      if(key !== 'id')
      {
        this.cols.push(key);
      }
    };
    for(let i = 0;i<this.customers.length;i++)
    {
      this.isEditable[i] = false;
    }
  }

  update(index: number,cust:customer)
  {
    this.oldCustomer = JSON.parse(JSON.stringify(cust));
    this.isEditable[index] = true;
  }

  save(index: number,cust:customer,row: HTMLTableRowElement)
  {
    this.isEditable[index] = false;

    cust.name = row.cells.namedItem('name')!.textContent!;
    cust.website = row.cells.namedItem('website')!.textContent!;
    cust.address = row.cells.namedItem('address')!.textContent!;
    cust.modified_on = new Date();

    const body:customer = {
      "id": cust.id,
      "name": cust.name,
      "website": cust.website,
      "address": cust.address,
      "created_on": cust.created_on,
      "modified_on": cust.modified_on
      };


      this.edit.emit(body);
  }

  delete(i: number,cust:customer)
  {
    this.deleteCustomer.emit({index:i,target: cust});
    this.isEditable.splice(i,1);
  }

  cancel(index: number,cust:customer)
  {
    this.isEditable[index] = false;
    this.customers[index] = JSON.parse(JSON.stringify(this.oldCustomer)); 
  }

  create(body:customer)
  {
   this.isEditable.push(false);
   this.addNewCustomer = false;
   this.add.emit(body);
  }

  showUsers(cust:customer)
  {
    this.show.emit(cust.id);
  }
}
