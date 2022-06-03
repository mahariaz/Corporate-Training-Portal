import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CourseSettingsComponent } from './course-settings/course-settings.component';
import { SettingsTabComponent } from './settings-tab/settings-tab.component';
import { UsersTabComponent } from './users-tab/users-tab.component';
import { AssessmentTabComponent } from './assessment-tab/assessment-tab.component';

const routes: Routes = [
  {path:'',redirectTo:'courses',pathMatch:'full'},
  {path :"courses",component:CourseComponent},
  {path :"settings",component:CourseSettingsComponent},
  {path :"settingsTab",component:SettingsTabComponent},
  {path :"usersTab",component:UsersTabComponent},
  {path :"materialTab",component:AssessmentTabComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
