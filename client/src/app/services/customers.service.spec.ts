
import {
    HttpClientTestingModule,
    HttpTestingController
} from "@angular/common/http/testing";
import {my_URL} from '../globals';
import { TestBed} from "@angular/core/testing";
import { CustomerService } from "./customers.service";
import { mockCustomersAfterDelete, mockCustomersList, Mockusers } from "src/mocks/mockCustomers";
import { of } from "rxjs";
import { mockUsersArray } from "src/mocks/mockUsers";
import { User } from "../user.model";

describe("Customers Service", () => {
    let service: CustomerService;
    let httpTestingController: HttpTestingController;
    let spy:any

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CustomerService]
        });
       
        service = TestBed.inject(CustomerService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

it('should retrieve array of customers', () => {
			
    service.getCustomerList().then((res) => {
      expect(res).toEqual(mockCustomersList);
    });

    const req = httpTestingController.expectOne({
      method: 'GET',
      url: `${my_URL}/customers`,
    });

    req.flush(mockCustomersList);
  });

it('delete api should delete the customer by id',()=> {
  
      let id: number = 1;
      service.deleteCustomer(id).subscribe((res)=>{
        expect(res).toEqual(mockCustomersAfterDelete);
      })
      
      const req = httpTestingController.expectOne({
          method: 'DELETE',
          url: `${my_URL}/customers/${id}`,
      });
      req.flush(mockCustomersAfterDelete);
  }); 

it('should get customer by id',()=>{
    let id = 2;
    service.getCustomerById(id).then((res)=>{
        expect(res).toEqual(mockCustomersList[0]);
    });

    const req = httpTestingController.expectOne({
        method: 'GET',
        url: `${my_URL}/customers/${id}`
    });
    req.flush(mockCustomersList[0]);
});

it('updates the customer',()=> {

    let id = 2;
    let body = {
        "name": "Harry",
        "website": "xyz.com",
        "address": "New York",
        "id": 2
    };

    service.updateCustomer(id,body);

    const req = httpTestingController.expectOne({
        method: 'PUT',
        url: `${my_URL}/customers/${id}`,
      });
  
      req.flush(body);
    
});


it('should add new customer on POST API',()=>{
    let body = {
        "name": "John",
        "website": "ihieu.com",
        "address": "New York",
        "id": 10
    };
    service.create(body).subscribe((res)=>{
        expect(res).toEqual(body);
    });

    const req = httpTestingController.expectOne({
        method: 'POST',
        url: `${my_URL}/customers`,
      });
  
      req.flush(body);
}); 

  it('should show users corresponding to customer',()=>{
    
    let id:number = 2;
    service.showUsers(id).then((res)=>{
        expect(res).toEqual(Mockusers);
    });

    let req = httpTestingController.expectOne({
        method: 'GET',
        url: my_URL+'/customers/'+id+'/users'+`?filter[include][]=roles`
    });

    req.flush(Mockusers);
  })
})