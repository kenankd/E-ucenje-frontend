import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService, private router: Router, ) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe((data: Course[]) => {
      this.courses = data;
    });

    
  }

  navigateToCourse(courseId: number): void {
    this.router.navigate(['/course', courseId]);
  }
}

