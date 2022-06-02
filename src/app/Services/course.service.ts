import { Injectable } from '@angular/core';
import { Course } from '../Models/models';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url='http://localhost:3000/courses';

  constructor(private http:HttpClient) { }
  addCourse(course:Course){
    return this.http.post(this.url,course);
  }
  getCourseList(){
    return this.http.get<Course>(this.url);
  }
  deleteCourse(id:any){
    console.log('http://localhost:3000/courses/'+id);
    return this.http.delete('http://localhost:3000/courses/'+id);
  }
}
