import { CourseModel } from "../models/course.model";


export class CourseService {
    
    courses : CourseModel[] = [
        new CourseModel(1,"Tp","AA"),
        new CourseModel(2,"aa","bb")
    ];

    getCourses() {
        return this.courses;
    }
}