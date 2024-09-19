import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuizDetailsComponent } from '../quiz-details/quiz-details.component';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { QuizRetakeService } from '../../services/quiz-retake.service';
import { AuthService } from '../../services/auth.service';
import { CreateQuizComponent } from '../create-quiz/create-quiz.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-course-details',
    templateUrl: './course-details.component.html',
    styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
    constructor(public dialog: MatDialog, private quizService: QuizService, private courseService: CourseService,
        private route: ActivatedRoute, private router: Router, private quizRetakeService: QuizRetakeService,
        private authService: AuthService, private modalService : NgbModal) { }
    quizzes = [];
    course: Course;
    predavanja: any[] = [];
    vjezbe: any[] = [];
    passedPredavanja: number
    passedVjezbe: number
    newMaterial = { name: '', file: null };
    newVjezba = { name: '', file: null };
    collapseButtonText: string = 'Expand All';
    sections = {
        predavanja: false,
        vjezbe: false,
        kvizovi: false
    };

    showCreateForm = false;
    showCreateVjezbaForm = false;
    showCreateQuizForm = false;

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.courseService.getCourse(id).subscribe((data: Course) => {
            this.course = data;
        });

        this.courseService.getMaterials(id).subscribe((data: any) => {
            this.predavanja = data.filter((item: any) => item.type === 'predavanje');
            this.vjezbe = data.filter((item: any) => item.type === 'vjezba');
            this.passedPredavanja = this.predavanja.filter(item => item.passed === true).length
            this.passedVjezbe = this.vjezbe.filter(item => item.passed === true).length

        });

        this.quizService.getQuizzes().subscribe(
            (data: any[]) => {
                console.log(data);
                this.quizzes = data;
            }
        );

        this.quizRetakeService.retakeQuiz$.subscribe(quiz => {
            this.openQuizModal(this.quizzes[0])
        });

    }

    openQuizModal(quiz: any): void {
        console.log("opened")
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '600px';
        dialogConfig.height = '400px';
        dialogConfig.panelClass = 'quiz-modal';
        dialogConfig.data = { quiz };
        console.log(dialogConfig.data);
        const dialogRef = this.dialog.open(QuizDetailsComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    openCreateQuizModal(): void {
        const modalRef = this.modalService.open(CreateQuizComponent, { size: 'lg', backdrop: 'static', centered:true, scrollable: true, keyboard: true });
        modalRef.componentInstance.courseId = +this.route.snapshot.paramMap.get('id');
        modalRef.componentInstance.materials = [...this.predavanja, ...this.vjezbe];
        modalRef.result.then(
          (result) => {
            console.log('Modal closed with result:', result);
          },
          (reason) => {
            console.log('Modal dismissed with reason:', reason);
          });
    }

    openQuizReview(quiz: any): void {
        console.log("aa")
        this.router.navigate([`/quiz/${quiz.id}/review`]);
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

    onFileSelected(event: any, materialType: string) {
        const file: File = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);  // Convert file to Base64 string
            reader.onload = () => {
                if (materialType == 'predavanje') {
                    this.newMaterial.file = reader.result as string;  // Store Base64 string
                } else {
                    this.newVjezba.file = reader.result as string;  // Store Base64 string
                }
            };
            reader.onerror = (error) => {
                console.error('Error reading file:', error);
            };
        }
    }

    onSubmitCreateMaterialForm(materialType: string) {
        console.log(materialType);
        if (materialType === 'predavanje') {
            this.showCreateForm = false;
            const payload = {
                name: this.newMaterial.name,
                file: this.newMaterial.file,  // Base64 encoded file
                type: materialType,
                CourseId: this.course.id
            };
            this.newMaterial = null;
            this.courseService.postMaterial(payload).subscribe((data: any) => {
                console.log('Material created', data);
                this.predavanja.push(data);
            }
            );
        } else {
            this.showCreateVjezbaForm = false;
            const payload = {
                name: this.newVjezba.name,
                file: this.newVjezba.file,  // Base64 encoded file
                type: materialType,
                CourseId: this.course.id
            };
            this.newVjezba = null;
            this.courseService.postMaterial(payload).subscribe((data: any) => {
                console.log('Material created', data);
                this.vjezbe.push(data);
            });
        }
        this.showCreateForm = false;  // This will log 'predavanje'
    }

    deleteMaterial(material: any) {
        this.courseService.deleteMaterial(material.id).subscribe(() => {
            this.predavanja = this.predavanja.filter(item => item.id !== material.id);
            this.vjezbe = this.vjezbe.filter(item => item.id !== material.id);
        });
    }

    deleteQuiz(quiz: any) {
        this.courseService.deleteQuiz(quiz.id).subscribe(() => {
            this.quizzes = this.quizzes.filter(item => item.id !== quiz.id);
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
