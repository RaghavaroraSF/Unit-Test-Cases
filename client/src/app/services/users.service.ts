import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { my_URL } from "../globals";
import { User } from "../user.model";
import { lastValueFrom } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class UsersService{

    constructor(private http:HttpClient){}

    getUsers()
    {
        return lastValueFrom(this.http.get<User[]>(my_URL+ '/users'+'?filter[include][]=roles&filter[include][]=customer'));
    }

    create(body: User)
    {
      return lastValueFrom(this.http.post<User>(my_URL+'/users',body));
    }

    update(id:number,body:User)
    {
      return this.http.put(my_URL+'/users'+`/${id}`,body);
    }
    
    delete(id:number)
    {
      return this.http.delete(my_URL+'/users'+`/${id}`);
    }

}