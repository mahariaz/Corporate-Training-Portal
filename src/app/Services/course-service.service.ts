import { Injectable } from '@angular/core';
import { Course } from '../Models/models';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  url='http://localhost:3000/vehicles';

  constructor(private http:HttpClient) { }
  addCourse(course:Course){
    return this.http.post(this.url,course);
  }
}
