import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-assessment-tab',
  templateUrl: './assessment-tab.component.html',
  styleUrls: ['./assessment-tab.component.css']
})
export class AssessmentTabComponent implements OnInit {
  @Input() d?: any;
  data1:any;
  constructor() { }

  ngOnInit(): void {
    this.data1=this.d;
  }
}
