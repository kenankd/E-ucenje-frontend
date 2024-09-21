import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  newCourseTitle: string = '';
  showCourseInput: boolean = false;
  constructor(private courseService: CourseService, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

  toggleCourseInput(): void {
    this.showCourseInput = !this.showCourseInput;
    this.newCourseTitle = ''; // Reset input field when toggling
  }

  saveCourse(): void {
    if (this.newCourseTitle.trim()) {
      const newCourse = { id: 0, name: this.newCourseTitle, description: '' };
      this.courseService.createCourse(newCourse).subscribe((data: Course) => {
        this.courses.push(data);
        this.toggleCourseInput(); // Hide input form after saving
      });
    }
  }

  deleteCourse(deletedCourse: Course): void {
    this.courseService.deleteCourse(deletedCourse.id).subscribe(() => {
      this.courses = this.courses.filter(course => course.id !== deletedCourse.id);
    });
  }

  navigateToCourse(courseId: number): void {
    this.router.navigate(['/course', courseId]);
  }
}

