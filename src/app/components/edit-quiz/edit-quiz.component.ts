import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrl: './edit-quiz.component.css'
})
export class EditQuizComponent implements OnInit {

  quizForm: FormGroup;  // Reactive form

  data: any;
  materials = [];
  courseId: number;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private quizService: QuizService,
    private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.quizService.getQuizContent(this.data.id).subscribe(data => {
      this.data.questions = data.Questions;
      for (const question of this.data.questions) {
        this.addQuestion(question);
        for (const answer of question.Answers) {
          this.addAnswer(this.data.questions.indexOf(question), answer);
        }
      }
    });
    this.quizForm = this.fb.group({
      name: [this.data.name, Validators.required],
      time: [this.data.time, [Validators.required, Validators.min(1)]],
      minScore: [this.data.minScore, Validators.required],
      questions: this.fb.array([]),
    });
  }

  get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  addQuestion(question: any) {
    const questionGroup = this.fb.group({
      text: [question?.text, Validators.required],
      points: [question?.points, Validators.required],
      materialId: [question?.MaterialId, Validators.required],
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


  addAnswer(questionIndex: number, answer: any) {
    const answerGroup = this.fb.group({
      text: [answer?.text, Validators.required],
      correct: [answer?.correct],
    });
    this.getAnswers(questionIndex).push(answerGroup);
  }

  removeAnswer(questionIndex: number, answerIndex: number) {
    this.getAnswers(questionIndex).removeAt(answerIndex);
  }

  onSubmitEditQuiz() {
    if (this.quizForm.valid) {
      const quizData = this.quizForm.value;
      quizData.id = this.data.id;
      console.log(quizData);
      quizData.CourseId = this.courseId
      this.quizService.editQuiz(quizData).subscribe(
        (data) => {
          console.log('Quiz edited successfully');
          this.activeModal.close('Quiz edited');
        },
        (error) => {
          console.log('Error creating quiz');
          this.activeModal.close('Failed to edit quiz');
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
