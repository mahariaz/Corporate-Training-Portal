import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/models';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url='http://localhost:3000/users';
  constructor(private http:HttpClient) { }
}
