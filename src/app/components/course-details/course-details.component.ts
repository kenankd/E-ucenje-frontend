import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuizDetailsComponent } from '../quiz-details/quiz-details.component';

@Component({
    selector: 'app-course-details',
    templateUrl: './course-details.component.html',
    styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
    constructor(public dialog: MatDialog) { }
    course = { name: 'Tehnike programiranja' };
    collapseButtonText: string = 'Expand All';
    sections = {
        predavanja: false,
        vjezbe: false,
        kvizovi: false
    };
    predavanjaPDFs = [
        { name: 'Predavanje 1 - uvod', url: 'path/to/pdf1' },
        { name: 'Lecture Notes 2.pdf', url: 'path/to/pdf2' }
    ];

    quizzes = [
        { name: 'Quiz 1' },
        { name: 'Quiz 2' }
    ];

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

    openQuizModal(): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.width = '600px';
        dialogConfig.height = '400px';
        dialogConfig.panelClass = 'quiz-modal';

        const dialogRef = this.dialog.open(QuizDetailsComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
