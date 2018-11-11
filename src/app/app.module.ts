import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseService } from './course/core/course.service';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseCardComponent } from './course/course-card/course-card.component';
import { HeaderComponent } from './shared/header/header.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseModalDialogComponent } from './course/course-modal-dialog/course-modal-dialog.component';
import { ConfirmModalDialogComponent } from './shared/confirm-modal-dialog/confirm-modal-dialog.component';
import { StudentModalDialogComponent } from './student/student-modal-dialog/student-modal-dialog.component';
import { TeacherModalDialogComponent } from './teacher/teacher-modal-dialog/teacher-modal-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    StudentListComponent,
    TeacherListComponent,
    HomeComponent,
    CourseListComponent,
    CourseCardComponent,
    HeaderComponent,
    CourseDetailComponent,
    CourseModalDialogComponent,
    ConfirmModalDialogComponent,
    StudentModalDialogComponent,
    TeacherModalDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    CourseService
  ],
  entryComponents: [
    CourseModalDialogComponent,
    TeacherModalDialogComponent,
    StudentModalDialogComponent,
    ConfirmModalDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
