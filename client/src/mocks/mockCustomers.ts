import { customer } from "src/app/globals";
import { User } from "src/app/user.model";

export const mockCustomersList: customer[] = [
    {
        "name": "Harry",
        "website": "xyz.com",
        "address": "New York",
        "id": 2
      },
      {
        "name": "Ram",
        "website": "defg.com",
        "address": "India",
        "id": 7
      }
]

export const mockCustomersAfterDelete: customer[] = [
    {
        "name": "Ram",
        "website": "defg.com",
        "address": "India",
        "id": 7
      }
];


export const Mockusers:User[] = [{
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
  }]