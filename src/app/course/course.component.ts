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
  data:any;
  public empForm!: FormGroup;
  courseArray!:Course[];
  editMode:boolean=false;
  visible:boolean = true;
  mvisible:boolean = true;
  buttonShow:boolean=true;
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
    this.data=courseItem;
   
    
    this.mvisible = this.mvisible?false:true;
    this.visible = this.visible?false:true;
    this.buttonShow = this.buttonShow?false:true;

  }
  addCourse(){
    this.visible = this.visible?false:true;

  }
  onSubmitCourse(){
    if (this.editMode){
      this.editMode=false;
      
      this.courseService.updateCourse(this.empForm.value).subscribe(
        (res)=>{
          console.log("inside if check");    
          console.log(res);
          this.getCourses();
        },
        (err)=>{
          console.log(err);
        }
      )

    }else{
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

    this.visible = this.visible?false:true;
    
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
  onEditCourse(course:Course){
    this.visible = this.visible?false:true;
    this.editMode=true;
    this.empForm.patchValue(course);

  }
  getCourses(){
    this.courseService.getCourseList().subscribe((res:any)=>{
      console.log(res);
      this.courseArray=res;
    }

    )
  }


}
