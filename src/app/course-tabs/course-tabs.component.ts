import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from '../Models/models';
import { CourseService } from '../Services/course.service';

@Component({
  selector: 'app-course-tabs',
  templateUrl: './course-tabs.component.html',
  styleUrls: ['./course-tabs.component.css']
})
export class CourseTabsComponent implements OnInit {

  @Input() course!: any;
  url='http://localhost:3000/car';
  public empForm!: FormGroup;
  
  public image: any;
  urll: any;
  constructor(private fb:FormBuilder,private http :HttpClient){}
  

  ngOnInit(): void {
    this.urll="";
  }

  handleFileInput(event:any) {
    if(event.target.files.length!=0){
      const file = event.target.files[0];
      this.image=file;
      
      this.urll='../../assets/Capture(2).PNG';
      console.log(this.urll);
    }
  
}
  onSubmit(){
    const formData = new FormData();
    formData.append('vehicletype','car');
    formData.append('name','vezel');
    formData.append('price','250,0000');
    formData.append('city','Islamabad');
    formData.append('file',this.image);

    console.log(this.image)
    this.http.post(`${this.url}/${'avatar'}`,formData).subscribe(
      (res) =>{
        console.log(res);
      },
      (err) =>{
        console.log(err);
      }
    )
  }

}
