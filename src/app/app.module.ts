import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseSettingsComponent } from './course-settings/course-settings.component';
import { SettingsTabComponent } from './settings-tab/settings-tab.component';
import { AssessmentTabComponent } from './assessment-tab/assessment-tab.component';
import { UsersTabComponent } from './users-tab/users-tab.component';
import { LearnerComponent } from './learner/learner.component';
import { CertificateComponent } from './certificate/certificate.component';
import { CourseinfoComponent } from './courseinfo/courseinfo.component';
import { CurrentcourseComponent } from './currentcourse/currentcourse.component';
import { MaterialTabComponent } from './material-tab/material-tab.component';
import { QuestionScreenComponent } from './question-screen/question-screen.component';
import { ChangeBackgroundColorDirective } from './change-background-color.directive';
import { NgChartsModule } from 'ng2-charts';
import { ChartDataset } from 'chart.js';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CourseComponent,
    LoginComponent,
    SidenavComponent,
    HeaderComponent,
    CourseSettingsComponent,
    SettingsTabComponent,
    AssessmentTabComponent,
    UsersTabComponent,
    LearnerComponent,
    CertificateComponent,
    CourseinfoComponent,
    CurrentcourseComponent,
    MaterialTabComponent,
    QuestionScreenComponent,
    ChangeBackgroundColorDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    NgChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
