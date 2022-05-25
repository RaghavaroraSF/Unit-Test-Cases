import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { customer, role } from 'src/app/globals';
import { User } from 'src/app/user.model';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  @Input() roles: role[] = [];
  @Input() customers: customer[] = [];
  @Output() onSubmit = new EventEmitter();

  ngOnInit(): void {
  }

  submit(form: NgForm)
  {
    const user: User = form.value;
    const body = {
      "firstname": user.firstname,
      "middlename": user.middlename,
      "lastname": user.lastname,
      "email": user.email,
      "phone": user.phone,
      "address": user.address,
      "role": user.role,
      "customerId": parseInt(user.customerId as string),
      "created_on": new Date(),
      "modified_on": new Date()
      };
    this.onSubmit.emit(body);
  }
}
