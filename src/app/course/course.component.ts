import { Component, OnInit } from '@angular/core';
import { Course } from '../Models/models';
import { CourseService } from '../Services/course.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public empForm!: FormGroup;
  courseArray!:Course[];

  constructor(private courseService:CourseService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getCourses();
    this.empForm=this.fb.group({
      _id:[''],
      courseName:[],
      overview:[''],
      startDate:[''],
      endDate:[''],
      crHrs:[''],
      price:['']
    })
    
  }
  onSelectCourse(courseItem:any){

  }
  addCourse(){


  }
  onSubmitCourse(){
    this.courseService.addCourse(this.empForm.value).subscribe(
      (res)=>{
        console.log(res);
        this.getCourses();
      },
      (err)=>{
        console.log(err);

      }
    )

    
  }
  onDeleteCourse(id:any){
    this.courseService.deleteCourse(id).subscribe(
      (res)=>{
        this.getCourses();
      },
      (err)=>{
        console.log(err);
      }
    )

  }
  onEditCourse(id:any){

  }
  getCourses(){
    this.courseService.getCourseList().subscribe((res:any)=>{
      console.log(res);
      this.courseArray=res;
    }

    )
  }


}
