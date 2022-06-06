import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../Models/models';
@Component({
  selector: 'app-material-tab',
  templateUrl: './material-tab.component.html',
  styleUrls: ['./material-tab.component.css']
})
export class MaterialTabComponent implements OnInit {

  public crs!:Course[];
  @Input() d?: any;
  d1:any;

  data1:any;
  url='http://localhost:3000/courses';
  constructor(private http :HttpClient) { }

  ngOnInit(): void {
    this.d1=this.d.material
  }
  getCourse() {
    this.http.get(`${this.url}/${this.d._id}`).subscribe((res:any) =>{
     
      this.crs=res;
      console.log(res);
    })
    
    
  }
  uploadMaterial(event:any){
    const file = event.target.files[0];
    const formData = new FormData();

    formData.append('courseName',this.d.courseName);
    formData.append('startDate',this.d.startDate);
    formData.append('endDate',this.d.endDate);
    formData.append('crHrs',this.d.crHrs);
    formData.append('price',this.d.price);

    formData.append('material',file);
    this.http.patch(`${this.url}/${this.d._id}/${'material'}`,formData).subscribe(
      (res) =>{
        console.log("insideee patchhhh......")
        console.log(res);
        this.getCourse();
      },
      (err) =>{
        console.log(err);
      })

  }
}
