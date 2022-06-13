
import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../Models/models';
import { CourseService } from '../Services/course.service';
import { HttpClient } from '@angular/common/http';

import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-learner',
  templateUrl: './learner.component.html',
  styleUrls: ['./learner.component.css']
})
export class LearnerComponent implements OnInit {

  @Input() d3?: any;
  showModel:boolean=false;
  showCourse:boolean=false;
  showCert:boolean=false;
  courseArray!:Course[];

  data1:any;
  url='http://localhost:3000/courses';
  url2='http://localhost:3000/users';
  editMode:boolean=false;
  visible:boolean = true;
  mvisible:boolean = true;
  buttonShow:boolean=true;
  usrId='629f6c6e7b471ec4a059a72e';


  currentCourses :any;
  userCourse:any;

  constructor(private http:HttpClient) { 

  }

  ngOnInit(): void {

    this.getCourses();
    this.http.get(`${this.url2}/${this.usrId}`).subscribe(

      (res) =>{
        this.userCourse=res;
        console.log('This is user',res);
      },
      (err) =>{
        console.log("This is error",err);
        console.log("this is after error");
      }
    )
    


    
  }

  getCourses(){
    this.http.get(`${this.url}`).subscribe((res:any) =>{
     
      this.courseArray=res;
      console.log(res);
    })
  }

  RegCourse(id:any,courseName:any)
  {

    this.showModel=true;
    this.showCert=false;
    this.showCourse=false;
    console.log(this.courseArray);
    if(confirm("Do you want to Register this Course??"))
    {

      console.log(id,"name",courseName);
      this.http.patch(`${this.url2}/${this.usrId}/${courseName}`,courseName).subscribe(
        
        (res) =>{
          console.log(res);
          
        },
        (err) =>{
          console.log("This is error",err);
          console.log("this is after error");
        }
      )
    }
    
    console.log('Show Course');

  }
  GoToCourse(st:any)
  {


    this.data1=st;
    this.http.get(`${this.url}`,st.id).subscribe((res:any) =>{
    this.courseArray=res;
      console.log(res);
    })

    console.log('Complete Remaining Course');
    this.showCourse=true;
    this.showCert=false;
    this.showModel=false;

  }

  ShowCert()
  {
    console.log("Show Certificate");
    this.showCert=true;
  }

}