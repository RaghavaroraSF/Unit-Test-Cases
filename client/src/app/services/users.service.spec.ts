
import {
    HttpClientTestingModule,
    HttpTestingController
} from "@angular/common/http/testing";
import {my_URL} from '../globals';
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { MockAfterDelete, mockUpdatedUser, mockUsersArray } from "src/mocks/mockUsers";
import { UsersService } from "./users.service";

describe("Users Service", () => {
    let service: UsersService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UsersService]
        });
       
        service = TestBed.inject(UsersService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

it('should retrieve array of users', () => {
			
    service.getUsers().then((res) => {
      expect(res).toEqual(mockUsersArray);
    });

    const req = httpTestingController.expectOne({
      method: 'GET',
      url: `${my_URL}/users?filter[include][]=roles&filter[include][]=customer`,
    });

    req.flush(mockUsersArray);
  });

it('delete api should delete the user by id',()=> {

    let id: number = 183;
    
    service.delete(id).subscribe((res) => {
        expect(res).toEqual(MockAfterDelete);
    });
    const req = httpTestingController.expectOne({
        method: 'DELETE',
        url: `${my_URL}/users/${id}`,
    });
    req.flush(MockAfterDelete);
});

it('updates the user',()=> {

    let id = 1;
    let body = {
        "id": 183,
        "firstname": "Ronald",
        "middlename": "-",
        "lastname": "Weisly",
        "email": "R007@gmail.com",
        "phone": "987654321",
        "address": "India",
        "created_on": "2022-05-13T19:09:18.577Z",
        "modified_on": new Date(),
        "role": "subscriber",
        "customerId": 7
    };
    service.update(id,body).subscribe((res)=>{
        expect(res).toEqual(mockUpdatedUser);
    });

    const req = httpTestingController.expectOne({
        method: 'PUT',
        url: `${my_URL}/users/${id}`,
      });
  
      req.flush(mockUpdatedUser);
    
});

it('adds new user on POST API',()=>{
    let body = {
        "id": 2,
        "firstname": "Max",
        "middlename": "-",
        "lastname": "Bill",
        "email": "max@gmail.com",
        "phone": "12572899",
        "address": "USA",
        "created_on": "2022-05-13T19:09:18.577Z",
        "modified_on": new Date(),
        "role": "subscriber",
        "customerId": 7
    };
    service.create(body).then((res)=>{
        expect(res).toEqual(body);
    });

    const req = httpTestingController.expectOne({
        method: 'POST',
        url: `${my_URL}/users`,
      });
  
      req.flush(body);
})

})