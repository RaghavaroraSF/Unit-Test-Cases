import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import {my_URL, role} from '../globals';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient) { }

  getRoleList()
  {
   return lastValueFrom(this.http.get<role[]>(my_URL + '/roles'));
  }

  getRoleByKey(key:string)
  {
    return lastValueFrom(this.http.get<role>(my_URL+'/roles/'+key));
  }
}