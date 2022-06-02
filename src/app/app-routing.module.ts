import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { DashHomeComponent } from './dash-home/dash-home.component';


const routes: Routes = [
  {path:'',redirectTo:'dashHome',pathMatch:'full'},
  {path :"dashHome",component:DashHomeComponent},
  {path :"courses",component:CourseComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
