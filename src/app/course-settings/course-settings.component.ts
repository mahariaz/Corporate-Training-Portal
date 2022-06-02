import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-course-settings',
  templateUrl: './course-settings.component.html',
  styleUrls: ['./course-settings.component.css']
})
export class CourseSettingsComponent implements OnInit {
  @Input() d?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
