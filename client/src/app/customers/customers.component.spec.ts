import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { customer } from '../globals';
import { CustomerService } from '../services/customers.service';
import { User } from '../user.model';
import { CustomersComponent } from './customers.component';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;
  let service: CustomerService;
  let spy : any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersComponent ],
      imports: [HttpClientModule],
      providers: [CustomerService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CustomerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('load Button should work',()=> {
    
    let loadBtn = fixture.debugElement.query(By.css('.load-btn'));
    expect(loadBtn.nativeElement.textContent.trim()).toBe('Load Customers');
    
  });

  it('should get customers',fakeAsync(() => {

    let customersList:customer[] = [{
      "name": "Mark",
      "website": "abc.com",
      "address": "USA",
      "id": 1,
      "created_on": new Date(),
      "modified_on": new Date()
    }];
  
    spy = spyOn(service,'getCustomerList').and.resolveTo(customersList);
    component.loadCustomers();
    tick();
   
    expect(component.showTable).toBeTruthy();
    expect(component.customers).toEqual(customersList);
  }));

  it('refreshes the data',() => {

    component.refresh();
    expect(component.customers).toEqual([]);
  });

  it('updates properly',()=>{

    let body :customer = {
      "name": "Max",
      "website": "abc.com",
      "address": "USA",
      "id": 8,
      "created_on": new Date(),
      "modified_on": new Date()
    };

    spy = spyOn(service,'updateCustomer');
    component.update(body);
    expect(spy).toHaveBeenCalled();
  });

   it('deletes the row',()=>{
    component.customers = [{
        "name": "Mark",
        "website": "xyz.com",
        "address": "Australia",
        "created_on": new Date(),
        "modified_on": new Date(),
        "id" : 8
    }];
    let value = {
      index: 0,
      target: component.customers[0]
    }

    spy = spyOn(service,'deleteCustomer').and.callFake(()=>{
      return of([]);
    });
    component.delete(value);
    expect(component.customers.length).toEqual(0);

  }); 

  it('adds new customer',async(()=>{
    let body = {
      "name": "Max",
      "website": "abc.com",
      "address": "USA",
      "created_on": new Date(),
      "modified_on": new Date(),
      id: undefined
    };

    spy = spyOn(service,'create').and.callFake((body)=> {
      return of(body);
    });
    component.create(body);

    expect(spy).toHaveBeenCalled();
    expect(component.customers).toEqual([body]);

  }));

  it('shows users according to customer',fakeAsync(()=> {

    const users:User[] = [
      {
        "id": 36,
        "firstname": "Tom",
        "middlename": "-",
        "lastname": "Hanks",
        "email": "tom.hanks123@gmail.com",
        "phone": "408-11100",
        "address": "USA",
        "created_on": "2022-03-18T17:31:50.000Z",
        "modified_on": new Date(),
        "role": "admin",
        "customerId": 2
      }
    ];
    spy = spyOn(service,'showUsers').and.resolveTo(users);
    component.showUsers(users[0].customerId as number);
    tick();
    expect(component.usersbyCustomer).toEqual(users);
    expect(component.show).toBeTruthy();
  }));
});
