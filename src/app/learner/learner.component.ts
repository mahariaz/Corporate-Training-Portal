
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learner',
  templateUrl: './learner.component.html',
  styleUrls: ['./learner.component.css']
})
export class LearnerComponent implements OnInit {

  showModel:boolean=false;
  showCourse:boolean=false;
  showCert:boolean=false;

  constructor() { 

  }

  ngOnInit(): void {
    
  }

  ShowCourse()
  {

    this.showModel=true;

    console.log('Show Course');

  }
  GoToCourse()
  {
    console.log('Complete Remaining Course');
    this.showCourse=true;

  }

  ShowCert()
  {
    console.log("Show Certificate");
    this.showCert=true;
  }

}




/*

import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { VehicleService } from '../appServices/vehicle.service';

import { Vehicle } from '../appModels/vehicle.model';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})

export class VehicleComponent implements OnInit {

  boolval =false;
  showModel:boolean=false;
  editMode:boolean=false;
  vehicles:Vehicle[];

  vehForm = new FormGroup({
    name: new FormControl(),
    modeln: new FormControl(),
    engine: new FormControl(),
    city: new FormControl(),
    price: new FormControl(),
    ctype: new FormControl(),
    rating: new FormControl()
  });

  constructor(
    private fb: FormBuilder,
    private vehservice: VehicleService
  ) { }

  ngOnInit(): void {

    this.getVehicles();
    this.vehForm=this.fb.group({
      name: [],
            modeln: [Validators.required],
            engine:[Validators.required],
            city:[Validators.required],
            price:[Validators.required],
            ctype:[Validators.required],
            rating:[]
    })
  }


  onEditVehicle(veh:Vehicle)
  {
    this.showModel=true;
    this.editMode=true;
    this.vehForm.patchValue(veh);

  }
  onDeleteVehicle(id:any)
  {
    if(confirm("Do you want to delete this Vehicle??"))
    {
      this.vehservice.deleteVehicle(id).subscribe(
        (res)=>{
          console.log('Deleted Successfully');
          this.getVehicles();
          
      },
      (err)=>{
        console.log(err);
      }
  
      )
    }
    
  }
  getVehicles()
  {
    this.vehservice.getVehList().subscribe( (res:any)=>{
      console.log(res);
      this.vehicles=res;
    })
  }

  onAddVehBtn()
  {
    this.showModel=true;
  }

  onAddVeh()
  {
    this.showModel=false;
    if(this.editMode)
    {
      this.vehservice.updateVehicle(this.vehForm.value);
    }

    else
    {
      this.vehservice.addVehicle(this.vehForm.value)
      this.vehservice.addVehicle(this.vehForm.value).subscribe(
        (res)=>{
          console.log(res);
          this.getVehicles();
      },
      (err)=>{
        console.log(err);
      }
      )
  }
  }
  onClose()
  {
    this.showModel=false;
    this.editMode=false;

  }
  closeForm()
  {
    this.editMode=false;

  }
  detail()
  {
    this.boolval=true;
    
  }

  
}

*/