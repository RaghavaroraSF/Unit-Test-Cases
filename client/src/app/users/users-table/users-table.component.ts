import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { customer, role } from 'src/app/globals';
import { User } from 'src/app/user.model';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  @Input() users: User[] = [];
  @Input() roleList: role[] = [];
  @Input() customerList: customer[] = [];
  @Input() canCreate : boolean = true;

  @Output('delete') deleteUser= new EventEmitter();
  @Output('update') edit= new EventEmitter();
  @Output() add = new EventEmitter();
  
  isEditable: boolean[] = [];
  oldUser:User = this.users[0];
  addNewUser: boolean = false;

  constructor(){}

  ngOnInit(): void {
    
    for(let i = 0;i<this.users.length;i++)
    {
      this.isEditable[i] = false;
    }
  
  }

  update(index: number,user:User)
  {
    this.oldUser = JSON.parse(JSON.stringify(user));
    this.isEditable[index] = true;
  }

  save(index: number,user: User,row: HTMLTableRowElement)
  {
    this.isEditable[index] = false;

    let selectRoleEle = row.cells.namedItem('roleContainer')!.children[0] as HTMLSelectElement;
    let selectedRole = selectRoleEle.children[selectRoleEle.selectedIndex].textContent!;
    
    let selectCustEle = row.cells.namedItem('customerContainer')!.children[0] as HTMLSelectElement;
    let selectedCustomer = selectCustEle.children[selectCustEle.selectedIndex].textContent!;
    let customer_id = parseInt(selectCustEle.value);

    user.firstname = row.cells.namedItem('fName')!.textContent!;
    user.middlename = row.cells.namedItem('mName')!.textContent!;
    user.lastname = row.cells.namedItem('lName')!.textContent!;
    user.email = row.cells.namedItem('email')!.textContent!;
    user.phone = row.cells.namedItem('phone')!.textContent!;
    user.address = row.cells.namedItem('address')!.textContent!;
    user.customerId = selectedCustomer;
    user.role = selectedRole;
    user.modified_on = new Date();
    
    const body:User = {
      "id": user.id,
      "firstname": user.firstname,
      "middlename": user.middlename,
      "lastname": user.lastname,
      "email": user.email,
      "phone": user.phone,
      "address": user.address,
      "role": selectRoleEle.value,
      "customerId": customer_id,
      "created_on": user.created_on,
      "modified_on": user.modified_on
      };


      this.edit.emit(body);
  }

  delete(i: number,user:User)
  {
    this.isEditable.splice(i,1);
    this.deleteUser.emit({index:i,target: user});
  }

  cancel(index: number,user:User)
  {
    this.isEditable[index] = false;
    this.users[index] = JSON.parse(JSON.stringify(this.oldUser));
  
  }
  create(body:User)
  {
   this.isEditable.push(false);
   this.addNewUser = false;
   this.add.emit(body);
  }
}
