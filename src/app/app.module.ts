import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseCategoriesComponent } from './course-categories/course-categories.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const appRoutes : Routes = [
  {
    path: "home", component: CourseCategoriesComponent
  },
  {
    path: "mycourses", component: CoursesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CoursesComponent,
    CourseCategoriesComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
