import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { customer } from 'src/app/globals';

@Component({
  selector: 'new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  form!: FormGroup;
  @Output() onSubmit = new EventEmitter();

  constructor(private fb: FormBuilder){}
  
  ngOnInit(): void {
     this.form = this.fb.group({
      name: [null,[Validators.required,Validators.maxLength(30)]],
      website: [null,[Validators.required,Validators.maxLength(40),Validators.pattern("^[A-Za-z0-9._%+-]+\.[a-z]{2,4}$")]],
      address: [null,[Validators.required,Validators.maxLength(30)]]
    });
  }

  submit()
  {
    const cust: customer = this.form.value;
    cust.created_on = new Date();
    cust.modified_on = new Date();
    
    this.onSubmit.emit(cust);
  }

}
