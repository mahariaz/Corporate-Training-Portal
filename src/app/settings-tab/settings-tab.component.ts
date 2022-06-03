import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-settings-tab',
  templateUrl: './settings-tab.component.html',
  styleUrls: ['./settings-tab.component.css']
})
export class SettingsTabComponent implements OnInit {
  @Input() d1?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
