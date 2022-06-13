import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../Models/models';

@Component({
  selector: 'app-currentcourse',
  templateUrl: './currentcourse.component.html',
  styleUrls: ['./currentcourse.component.css']
})
export class CurrentcourseComponent implements OnInit {

  isassessmentButtonClicked:Boolean=false;
  dashboard=false;
  public crs!:Course[];
  @Input() d?: any;
  d1:any;
  data1:any;
  url='http://localhost:3000/courses';
  matOpen=0;


  constructor(private http :HttpClient) { }

  ngOnInit(): void {
    this.data1=this.d;
    this.d1=this.d.material

    console.log('current corse det ',this.data1);
    this.http.get(`${this.url}/${this.d._id}`).subscribe((res:any) =>{
      this.crs=res;
      console.log(res);
    })
    
  }

  onMatClick()
  {
    this.matOpen=this.matOpen+1;
    console.log('Mat is clicked ',this.matOpen);
  }
  backtoDash()
  {
    this.dashboard=true;
  }
  startAssessment(){
    this.isassessmentButtonClicked=true;
  }

}
