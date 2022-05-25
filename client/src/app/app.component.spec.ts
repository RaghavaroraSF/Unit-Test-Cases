import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: Component;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should display buttons',()=>{
    let usersBtn = fixture.debugElement.query(By.css('.users'));
    let customersBtn = fixture.debugElement.query(By.css('.customers'));

    expect(usersBtn.nativeElement.textContent).toEqual('Users');
    expect(customersBtn.nativeElement.textContent).toEqual('Customers');
  })
});
