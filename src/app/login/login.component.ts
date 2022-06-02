import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adminExists:boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  loginClicked(email:HTMLInputElement,password:HTMLInputElement){

    this.adminExists = true;
    console.log(this.adminExists);
    
 

  }

}
