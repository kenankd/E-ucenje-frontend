import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseCategoriesComponent } from './components/course-categories/course-categories.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { LoginComponent } from './components/login/login.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';

const appRoutes : Routes = [
  {
    path: "home", component: CourseCategoriesComponent
  },
  {
    path: "mycourses", component: CoursesComponent
  },
  {
    path: "course", component: CourseDetailsComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "", redirectTo: "/home", pathMatch: "full"
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CoursesComponent,
    CourseCategoriesComponent,
    CourseDetailsComponent,
    LoginComponent,
    QuizDetailsComponent
  ],
  imports: [
    BrowserModule,  
    MatDialogModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ],
})
export class AppModule { }
