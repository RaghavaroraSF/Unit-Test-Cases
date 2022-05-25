import { User } from "src/app/user.model";

export const mockUsersArray: User[] = [
    {
      "id": 34,
      "firstname": "Neil",
      "middlename": "-",
      "lastname": "Irani",
      "email": "neil.irani@gmail.com",
      "phone": "408-10000",
      "address": "Australia",
      "created_on": "2022-12-05T11:59:24.000Z",
      "modified_on": new Date(),
      "role": "superadmin",
      "customerId": 8
    },
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
    },
    {
      "id": 133,
      "firstname": "John",
      "middlename": "-",
      "lastname": "Patrick",
      "email": "john@gmail.com",
      "phone": "10176289",
      "address": "London",
      "created_on": "2022-05-12T12:06:57.194Z",
      "modified_on": new Date(),
      "role": "superadmin",
      "customerId": 8
    },
    {
      "id": 183,
      "firstname": "Ron",
      "middlename": "-",
      "lastname": "Weisly",
      "email": "R07@gmail.com",
      "phone": "987654321",
      "address": "India",
      "created_on": "2022-05-13T19:09:18.577Z",
      "modified_on": new Date(),
      "role": "subscriber",
      "customerId": 7
    }
];
  
export const MockAfterDelete : User[] = [
  {
    "id": 34,
    "firstname": "Neil",
    "middlename": "-",
    "lastname": "Irani",
    "email": "neil.irani@gmail.com",
    "phone": "408-10000",
    "address": "Australia",
    "created_on": "2022-12-05T11:59:24.000Z",
    "modified_on": new Date(),
    "role": "superadmin",
    "customerId": 8
  },
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
  },
  {
    "id": 133,
    "firstname": "John",
    "middlename": "-",
    "lastname": "Patrick",
    "email": "john@gmail.com",
    "phone": "10176289",
    "address": "London",
    "created_on": "2022-05-12T12:06:57.194Z",
    "modified_on": new Date(),
    "role": "superadmin",
    "customerId": 8
  }

]

export const mockUpdatedUser:User[] = [
  {
    "id": 34,
    "firstname": "Neil",
    "middlename": "-",
    "lastname": "Irani",
    "email": "neil.irani@gmail.com",
    "phone": "408-10000",
    "address": "Australia",
    "created_on": "2022-12-05T11:59:24.000Z",
    "modified_on": new Date(),
    "role": "superadmin",
    "customerId": 8
  },
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
  },
  {
    "id": 133,
    "firstname": "John",
    "middlename": "-",
    "lastname": "Patrick",
    "email": "john@gmail.com",
    "phone": "10176289",
    "address": "London",
    "created_on": "2022-05-12T12:06:57.194Z",
    "modified_on": new Date(),
    "role": "superadmin",
    "customerId": 8
  },
  {
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
  }
];