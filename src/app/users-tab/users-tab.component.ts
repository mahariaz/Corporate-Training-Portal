import { Component, OnInit ,Input} from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
// import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';


  
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
