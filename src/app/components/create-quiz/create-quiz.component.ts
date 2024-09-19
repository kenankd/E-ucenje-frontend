import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrl: './create-quiz.component.css'
})
export class CreateQuizComponent implements OnInit{

  quizForm: FormGroup;  // Reactive form

  //data sent from course details component
  materials = [];
  courseId : number;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private quizService : QuizService
    ,private activeModal : NgbActiveModal) {}

  ngOnInit() {
    this.quizForm = this.fb.group({
      name: ['', Validators.required],
      time: ['', [Validators.required, Validators.min(1)]],
      minScore: ['', Validators.required],
      questions: this.fb.array([]),
    });
  }

  get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  addQuestion() {
    const questionGroup = this.fb.group({
      text: ['', Validators.required],
      points: ['', Validators.required],
      materialId: ['', Validators.required],
      answers: this.fb.array([]),
    });
    this.questions.push(questionGroup);
  }

  removeQuestion(index: number) {
    this.questions.removeAt(index);
  }

  getAnswers(questionIndex: number): FormArray {
    return this.questions.at(questionIndex).get('answers') as FormArray;
  }


  addAnswer(questionIndex: number) {
    const answerGroup = this.fb.group({
      text: ['', Validators.required], 
      correct: [false], 
    });
    this.getAnswers(questionIndex).push(answerGroup);
  }

  removeAnswer(questionIndex: number, answerIndex: number) {
    this.getAnswers(questionIndex).removeAt(answerIndex);
  }

  onSubmit() {
    if (this.quizForm.valid) {
      const quizData = this.quizForm.value;
      console.log(this.route.snapshot.paramMap)
      quizData.CourseId = this.courseId
      console.log(quizData);
      this.quizService.createQuiz(quizData).subscribe(
        (data) => {
          console.log('Quiz created successfully');
          this.activeModal.close('Quiz created');
        },
        (error) => {
          console.log('Error creating quiz');
          this.activeModal.close('Failed to create quiz');
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  dismissModal() {
    this.activeModal.dismiss('cancel');
  }
}
