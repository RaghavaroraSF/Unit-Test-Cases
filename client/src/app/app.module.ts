import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './users/new-user/new-user.component';
import { CustomersTableComponent } from './customers/customers-table/customers-table.component';
import { NewCustomerComponent } from './customers/new-customer/new-customer.component';

const appRoutes: Routes = [
  {path: 'users',component: UsersComponent},
  {path: 'customers',component:CustomersComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CustomersComponent,
    UsersTableComponent,
    NewUserComponent,
    CustomersTableComponent,
    NewCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
