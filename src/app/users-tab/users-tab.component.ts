import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.css']
})
export class UsersTabComponent implements OnInit {
  @Input() d?: any;
  data1:any;
  constructor() { }

  ngOnInit(): void {
    this.data1=this.d;
  }

}
