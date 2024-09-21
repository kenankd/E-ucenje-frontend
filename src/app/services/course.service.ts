import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses() : Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/course');
  }

  getCourse(id: number) : Observable<Course> {
    return this.http.get<Course>(`http://localhost:3000/course/${id}`);
  }

  createCourse(course: Course) : Observable<Course> {
    return this.http.post<any>('http://localhost:3000/course', course);
  }

  deleteCourse(id: number) : Observable<any> {
    return this.http.delete(`http://localhost:3000/course/${id}`);
  }

  getMaterials(id: number) : Observable<any> {
    return this.http.get(`http://localhost:3000/course/${id}/materials`);
  }

  getFile(id: number) : Observable<any> {
    return this.http.get(`http://localhost:3000/material/${id}/file`, {responseType: 'blob' as 'json'});
  }

  postMaterial(material: any) : Observable<any> {
    console.log(material);
    return this.http.post(`http://localhost:3000/material`, material);
  }

  deleteMaterial(id: number) : Observable<any> {
    return this.http.delete(`http://localhost:3000/material/${id}`);
  }

  deleteQuiz(id: number) : Observable<any> {
    return this.http.delete(`http://localhost:3000/quiz/${id}`);
  }
}