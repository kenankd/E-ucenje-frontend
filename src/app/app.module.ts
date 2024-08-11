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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthGuard } from './guards/auth.guard';

const appRoutes : Routes = [
  {
    path: "", redirectTo: "/home", pathMatch: "full"
  },
  {
    path: "home", component: CourseCategoriesComponent
  },
  {
    path: "mycourses", component: CoursesComponent, canActivate: [AuthGuard]
  },
  {
    path: "course/:id", component: CourseDetailsComponent, canActivate: [AuthGuard]
  },
  {
    path: "login", component: LoginComponent
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
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class AppModule { }
