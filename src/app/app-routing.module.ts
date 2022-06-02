import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CourseSettingsComponent } from './course-settings/course-settings.component';

const routes: Routes = [
  {path:'',redirectTo:'courses',pathMatch:'full'},
  {path :"courses",component:CourseComponent},
  {path :"settings",component:CourseSettingsComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
