import { Component, OnInit } from '@angular/core';
import { Course } from '../Models/models';
import { CourseService } from '../Services/course.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  url='http://localhost:3000/courses';
  data:any;
  public empForm!: FormGroup;
  courseArray!:Course[];
  editMode:boolean=false;
  visible:boolean = true;
  mvisible:boolean = true;
  buttonShow:boolean=true;
  constructor(private courseService:CourseService,private fb:FormBuilder,private http :HttpClient) { }

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
      
      this.http.patch(`${this.url}/${this.empForm.value._id}`,this.empForm.value).subscribe(
      
        (res) =>{
          console.log("Editttt")
          console.log(res);
          this.getCourses();
        },
        (err) =>{
          console.log(err);
        }
      )
      
      // this.courseService.updateCourse(this.empForm.value).subscribe(
      //   (res)=>{
      //     console.log("inside if check");    
      //     console.log(res);
      //     this.getCourses();
      //   },
      //   (err)=>{
      //     console.log(err);
      //   }
     // )

    }else{
      console.log("adddddd")
      this.http.post(`${this.url}`,this.empForm.value).subscribe(

        (res) =>{
          console.log(res);
        },
        (err) =>{
          console.log(err);
        }
      )
      // this.courseService.addCourse(this.empForm.value).subscribe(
      //   (res)=>{
      //     console.log(res);
      //    // this.getCourses();
      //   },
      //   (err)=>{
      //     console.log(err);
  
      //   }
      // )
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
    this.http.get(`${this.url}`).subscribe((res:any) =>{
     
      this.courseArray=res;
      console.log(res);
    })
    // this.courseService.getCourseList().subscribe((res:any)=>{
    //   console.log(res);
    //   this.courseArray=res;
    // }

    // )
  }



}
