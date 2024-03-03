import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseCategoriesComponent } from './course-categories/course-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CoursesComponent,
    CourseCategoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
