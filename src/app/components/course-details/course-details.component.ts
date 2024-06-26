import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuizDetailsComponent } from '../quiz-details/quiz-details.component';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
@Component({
    selector: 'app-course-details',
    templateUrl: './course-details.component.html',
    styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
    constructor(public dialog: MatDialog, private quizService: QuizService, private courseService: CourseService, private route: ActivatedRoute) { }
    quizzes = [];
    course: Course;
    predavanja: any[] = [];
    vjezbe: any[] = [];

    collapseButtonText: string = 'Expand All';
    sections = {
        predavanja: false,
        vjezbe: false,
        kvizovi: false
    };

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.courseService.getCourse(id).subscribe((data: Course) => {
            this.course = data;
        });

        this.courseService.getMaterials(id).subscribe((data: any) => {
            this.predavanja = data.filter((item: any) => item.type === 'predavanje');
            this.vjezbe = data.filter((item: any) => item.type === 'vjezba');
        });

        this.quizService.getQuizzes().subscribe(
            (data: any[]) => {
                this.quizzes = data;
            }
        );

    }


    openQuizModal(quiz: any): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '600px';
        dialogConfig.height = '400px';
        dialogConfig.panelClass = 'quiz-modal';
        dialogConfig.data = { quiz };
        const dialogRef = this.dialog.open(QuizDetailsComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(result => {
            //TODO snackbar
            console.log('The dialog was closed');
        });
    }

    openFile(material: any): void {
        this.courseService.getFile(material.id).subscribe((data: Blob) => {
            const url = URL.createObjectURL(data);
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.download = data + '.pdf'; // Ensure the file opens as PDF
            link.click();
            URL.revokeObjectURL(url);
        });

    }

    toggleSection(section: string) {
        this.sections[section] = !this.sections[section];
        let allSectionsExpanded = Object.values(this.sections).every(section => section === true);
        let allSectionsCollapsed = Object.values(this.sections).every(section => section === false);
        if (allSectionsExpanded) {
            this.collapseButtonText = 'Collapse All';
        } else if (allSectionsCollapsed) {
            this.collapseButtonText = 'Expand All';
        }
    }

    isExpanded(section: string): boolean {
        return this.sections[section];
    }

    toggleAll() {
        for (let key in this.sections) {
            this.sections[key] = this.collapseButtonText === 'Collapse All' ? false : true;
        }
        this.collapseButtonText = this.collapseButtonText === 'Collapse All' ? 'Expand All' : 'Collapse All';
    }


}
