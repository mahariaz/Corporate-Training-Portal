import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-assessment-tab',
  templateUrl: './assessment-tab.component.html',
  styleUrls: ['./assessment-tab.component.css']
})
export class AssessmentTabComponent implements OnInit {
  @Input() d?: any;
  data1:any;
  public empForm!: FormGroup;
  url='http://localhost:3000/courses';
  constructor(private fb:FormBuilder,private http :HttpClient){}


  ngOnInit(): void {
    this.data1=this.d;
    this.empForm = this.fb.group({
      _id:[''],
      questions:[''],
      answer1:[''],
      answer2:[''],
      answer3:[''],
      correctans:['']
    })
  }
  onSubmit(){
    
    console.log(this.empForm.value.question)
   
    
   //`${this.url}/${this.d._id}/${'material'}`
    this.http.patch(`${this.url}/${this.data1._id}/${'assessments'}`,this.empForm.value).subscribe(
      (res) =>{
        console.log(res);
      },
      (err) =>{
        console.log(err);
      }
    )
  }
}