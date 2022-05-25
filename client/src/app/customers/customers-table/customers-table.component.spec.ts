import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { customer } from 'src/app/globals';

import { CustomersTableComponent } from './customers-table.component';

describe('CustomersTableComponent', () => {
  let component: CustomersTableComponent;
  let fixture: ComponentFixture<CustomersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('customers table is rendered properly',() => {
    component.customers = [
        {
          "name": "Harry",
          "website": "xyz.com",
          "address": "New York",
          "id": 2,
          "created_on": new Date(),
          "modified_on": new Date()
        },
        {
          "name": "Ram",
          "website": "defg.com",
          "address": "India",
          "id": 7,
          "created_on": new Date(),
          "modified_on": new Date()
        }
    ];
    component.ngOnInit();
    expect(component.cols).toEqual(['name','website','address','created_on','modified_on']);
    expect(component.isEditable.length).toEqual(component.customers.length);

    fixture.detectChanges();
    let tr = fixture.debugElement.queryAll(By.css('tr'));
    let th = fixture.debugElement.queryAll(By.css('th'));
    expect(tr.length).toEqual(component.customers.length);
    expect(th.length).toEqual(component.cols.length+1);
    
  });

  it('modifies isEditable on update',()=> {
    component.customers =  [{
      "name": "Harry",
      "website": "xyz.com",
      "address": "New York",
      "id": 2,
      "created_on": new Date(),
      "modified_on": new Date()
    }];
    component.ngOnInit();
    expect(component.isEditable).toEqual([false])
    component.update(0,component.customers[0]);
    expect(component.isEditable).toEqual([true]);
  });

  it('cancels Changes',()=> {
    component.customers =  [{
      "name": "Harry",
      "website": "xyz.com",
      "address": "New York",
      "id": 2,
      "created_on": new Date(),
      "modified_on": new Date()
    },{
      "name": "Ram",
      "website": "defg.com",
      "address": "India",
      "id": 7,
      "created_on": new Date(),
      "modified_on": new Date()
    }];
    component.ngOnInit();
    component.update(0,component.customers[0]);
    component.oldCustomer = {
      "name": "Hari",
      "website": "xyz.com",
      "address": "New York",
      "id": 2
    };
    expect(component.isEditable).toEqual([true,false]);

    component.cancel(0,component.customers[0]);
    expect(component.isEditable).toEqual([false,false]);
    expect(component.customers[0]).toEqual(component.oldCustomer);
  });
 
  it('emits correctly on delete',()=>{

    component.customers =  [{
      "name": "Harry",
      "website": "xyz.com",
      "address": "New York",
      "id": 2,
      "created_on": new Date(),
      "modified_on": new Date()
    },{
      "name": "Ram",
      "website": "defg.com",
      "address": "India",
      "id": 7,
      "created_on": new Date(),
      "modified_on": new Date()
    }];
    component.ngOnInit();
    expect(component.isEditable).toEqual([false,false]);

    let val = {
      index: 0,
      target: component.customers[0]
    }
    let b = {
      index: 12,      //random value
      target: component.customers[1]  // random value
    };
    
    component.deleteCustomer.subscribe(
      (value)=> {
        b = value;
      });
    
    component.delete(val.index,val.target);
    expect(b.index).toEqual(val.index);
    expect(b.target).toEqual(val.target);
    expect(component.isEditable).toEqual([false]);

  });

  it('add button works',()=>{
    let addBtn = fixture.debugElement.query(By.css('.add-btn'));
    expect(addBtn.nativeElement.textContent).toEqual('Add new Customer');
    expect(component.addNewCustomer).toBeFalse();

    addBtn.triggerEventHandler('click',null);
    fixture.detectChanges();

    let backBtn = fixture.debugElement.query(By.css('.back'));
    expect(component.addNewCustomer).toBeTruthy();
    expect(backBtn.nativeElement.textContent).toEqual('Back');
  });

  it('creates customer',()=> {

    component.customers = [
      {
        "name": "Harry",
        "website": "xyz.com",
        "address": "New York",
        "id": 2,
        "created_on": new Date(),
        "modified_on": new Date()
      }];

      component.ngOnInit();
      expect(component.isEditable).toEqual([false]);

      let newCust = {
        "name": "Ram",
        "website": "defg.com",
        "address": "India",
        "id": 7,
        "created_on": new Date(),
        "modified_on": new Date()
      };
      let newCustomer: customer;
      component.add.subscribe((value)=> {
        newCustomer = value;
      })
      component.create(newCust);
      expect(component.isEditable).toEqual([false,false]);
      expect(component.addNewCustomer).toBeFalse();
      expect(newCustomer!).toEqual(newCust);

  });

  it('shows users',()=>{

    let id: number;
    let cust = {
      "name": "Ram",
      "website": "defg.com",
      "address": "India",
      "id": 7,
      "created_on": new Date(),
      "modified_on": new Date()
    };
    component.show.subscribe((val)=>{
      id = val;
    });
    component.showUsers(cust);

    expect(id!).toEqual(cust.id);
  })
});
