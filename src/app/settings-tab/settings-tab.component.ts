import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from '../Models/models';
import { CourseService } from '../Services/course.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-settings-tab',
  templateUrl: './settings-tab.component.html',
  styleUrls: ['./settings-tab.component.css']
})
export class SettingsTabComponent implements OnInit {
  @Input() d?: any;
  public empForm!: FormGroup;
  constructor(private courseService:CourseService,private fb:FormBuilder,private http :HttpClient) { }
  url='http://localhost:3000/courses';
  ngOnInit(): void {
 
    
    this.empForm=this.fb.group({
      _id:[''],
      courseName:[],
      overview:[''],
      startDate:[''],
      endDate:[''],
      crHrs:[''],
      price:['']
    })
    this.empForm.patchValue(this.d);

  }
  onEditCourse(){
    
    this.http.patch(`${this.url}/${this.empForm.value._id}`,this.empForm.value).subscribe(
      
      (res) =>{
        console.log("Editttt")
        console.log(res);
      },
      (err) =>{
        console.log(err);
      }
    )

  }

}
