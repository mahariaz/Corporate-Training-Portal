import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-course-settings',
  templateUrl: './course-settings.component.html',
  styleUrls: ['./course-settings.component.css']
})
export class CourseSettingsComponent implements OnInit {
  @Input() d?: any;
  data1:any;
  ismaterialsClicked:boolean=false;
  isSettingsClicked:boolean=false;
  isUsersClicked:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  settingsClicked(){
    this.data1=this.d;
    this.isSettingsClicked=true;
    this.isUsersClicked=false;
    this.ismaterialsClicked=false;
  }
  usersClicked(){
    this.isUsersClicked=true;
    this.ismaterialsClicked=false;
    this.isSettingsClicked=false;

  }
  materialsClicked(){
    this.ismaterialsClicked=true;
    this.isSettingsClicked=false;
    this.isUsersClicked=false;
  }

}
