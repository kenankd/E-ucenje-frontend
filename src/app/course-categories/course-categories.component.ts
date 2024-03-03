import { Component } from '@angular/core';

@Component({
  selector: 'app-course-categories',
  templateUrl: './course-categories.component.html',
  styleUrl: './course-categories.component.css'
})
export class CourseCategoriesComponent {
  cycles = [
    {
      name: 'Prvi ciklus studija',
      departments: [
        {
          name: 'Računarstvo i informatika',
          semesters: ['1. semestar', '2. semestar', '3. semestar', '4. semestar', '5. semestar', '6. semestar']
        },
        {
          name: 'Elektroenergetika',
          semesters: ['1. semestar', '2. semestar', '3. semestar', '4. semestar', '5. semestar', '6. semestar']
        },
        {
          name: 'Telekomunikacije',
          semesters: ['1. semestar', '2. semestar', '3. semestar', '4. semestar', '5. semestar', '6. semestar']
        },
         {
          name: 'Automatika i elektronika',
          semesters: ['1. semestar', '2. semestar', '3. semestar', '4. semestar', '5. semestar', '6. semestar']
        }
      ],
    },
    {
      name: 'Drugi ciklus studija',
      departments: [
        {
          name: 'Računarstvo i informatika',
          semesters: ['7. semestar', '8. semestar', '9. semestar', '10. semestar']
        },
        {
          name: 'Elektroenergetika',
          semesters: ['7. semestar', '8. semestar', '9. semestar', '10. semestar']
        },
        {
          name: 'Telekomunikacije',
          semesters: ['7. semestar', '8. semestar', '9. semestar', '10. semestar']
        },
         {
          name: 'Automatika i elektronika',
          semesters: ['7. semestar', '8. semestar', '9. semestar', '10. semestar']
        }
      ],
    }
  ];

  expandedStates = {};

  toggle(id): void {
    this.expandedStates[id] = !this.expandedStates[id];
  }

  isExpanded(id): boolean {
    return !!this.expandedStates[id];
  }

  collapseAll(): void {
    this.expandedStates = {};
  }
}
