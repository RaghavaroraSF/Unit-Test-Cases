import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { customer } from 'src/app/globals';

import { NewCustomerComponent } from './new-customer.component';

describe('NewCustomerComponent', () => {
  let component: NewCustomerComponent;
  let fixture: ComponentFixture<NewCustomerComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCustomerComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
   expect(component.form.valid).toBeFalsy();
  });

  it('name field validity', () => {

    let name = component.form.controls['name'];
    expect(name.valid).toBeFalsy();

    expect(name.errors!['required']).toBeTruthy();

    name.setValue("test");
    expect(name.valid).toBeTrue();
});

it('website field validity', () => {
 
  let website = component.form.controls['website'];
  expect(website.valid).toBeFalsy();

  expect(website.errors!['required']).toBeTruthy();

  website.setValue("abc");
  expect(website.value).toEqual('abc');
  expect(website.errors!['required']).toBeFalsy();
  expect(website.errors!['pattern']).toBeTruthy();

  website.setValue("abc.com");
  expect(website.errors).toBeNull();
  
});

it('address field validity', () => {

  let address = component.form.controls['address'];
  expect(address.valid).toBeFalsy();

  expect(address.errors!['required']).toBeTruthy();

  address.setValue("test");
  expect(address.valid).toBeTrue();
});

it('submitting a form emits a user', () => {
  expect(component.form.valid).toBeFalsy();
  component.form.controls['name'].setValue("abc");
  component.form.controls['website'].setValue("bcd.com");
  component.form.controls['address'].setValue("India");
  expect(component.form.valid).toBeTruthy();

  let cust:customer;
  component.onSubmit.subscribe((value) => cust = value);

  component.submit();

  expect(cust!.name).toBe("abc");
  expect(cust!.website).toBe("bcd.com");
  expect(cust!.address).toBe("India");
});
});