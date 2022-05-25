import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../services/users.service';
import { RolesService } from '../services/roles.service';
import { customer, role } from '../globals';
import { CustomerService } from '../services/customers.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnChanges {
  
  @Input('users')usersByCustomer:any[] = [];

  showUsers = false;
  showTable: boolean = false;
  users: User[] = [];
  roles: role[] = [];
  customers: customer[] = [];
  customerUsers: User[] = [];
  loadBtn = true;

  constructor(
    private usersService: UsersService,private rolesService: RolesService,
    private customersService:CustomerService
    ){}

  ngOnChanges(): void {
      if(this.usersByCustomer.length !== 0)
      {
        this.showUsers = true;
        this.usersByCustomer.forEach(
          user => {
            user.role = user.roles.name;
          }
        );
        
        this.load();
        
      }
      else{
        this.showUsers = false;
      }
    }

  ngOnInit(){}

  async loadUsers(){
      await this.usersService.getUsers().then(
        (data: User[]) => {
          data.forEach((user: any) => {
            if(user.customerId !== null)
            {
              this.users.push(new User(user.firstname,user.middlename,user.lastname,user.email,
                user.phone,user.roles.name,user.address,user.customer.name,user.created_on,user.modified_on,user.id));
            }
            else{
              this.users.push(new User(user.firstname,user.middlename,user.lastname,user.email,
                user.phone,user.roles.name,user.address,"-",user.created_on,user.modified_on,user.id));
            }
    
          });
        }
      );
   
    this.load();
    this.showTable = true;
  }

  async load()
  {
    await this.rolesService.getRoleList().then(
      data => {
        this.roles = data;
      }   
    );

    await this.customersService.getCustomerList().then(
      data => {
        this.customers = data;
      }   
    );
    
  }

  refresh()
  {
    this.users = [];
    this.loadUsers();
  }

  delete(value:{index: number,target: User})
  {
    this.users.splice(value.index,1);
    this.usersService.delete(value.target.id!).subscribe();
  }

  update(body : User)
  {
    this.usersService.update(body.id!,body).subscribe();
  }

  async create(body:any)
  {
    let newUser:User = {
      firstname: '',
      middlename: '',
      lastname: '',
      email: '',
      phone: '',
      role: '',
      address: '',
      customerId: ''
    };
    await this.usersService.create(body).then(
    (res : User)=>
      {
        newUser = res;
      }
    );
    
    await this.rolesService.getRoleByKey("admin").then(
      (res:role) =>
      {
        newUser.role = res.name;
      }
    );
    
    await this.customersService.getCustomerById(newUser.customerId as number).then(
      (res:customer) =>
      {
        newUser.customerId = res.name;
      }
    );

    this.users = [...this.users,newUser];

  }

  back()
  {
    this.showUsers = false;
    this.showTable = false;
    this.loadBtn = false;
  }

}
