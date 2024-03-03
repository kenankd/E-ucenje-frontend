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
          semesters: [
            {
            name: '1. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },
          {
            name: '2. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '3. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '4. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '5. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },
          {
            name: '6. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          }]
        },
        {
          name: 'Elektroenergetika',
          semesters: [
            {
            name: '1. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },
          {
            name: '2. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '3. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '4. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '5. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },
          {
            name: '6. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          }]
        },
        {
          name: 'Telekomunikacije',
          semesters: [
            {
            name: '1. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },
          {
            name: '2. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '3. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '4. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '5. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },
          {
            name: '6. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          }]
        },
         {
          name: 'Automatika i elektronika',
          semesters: [
            {
            name: '1. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },
          {
            name: '2. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '3. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '4. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '5. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },
          {
            name: '6. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          }]
        }
      ],
    },
    {
      name: 'Drugi ciklus studija',
      departments: [
        {
          name: 'Računarstvo i informatika',
          semesters: [
            {
            name: '1. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },
          {
            name: '2. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '3. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '4. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '5. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },
          {
            name: '6. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          }]
        },
        {
          name: 'Elektroenergetika',
          semesters: [
            {
            name: '1. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },
          {
            name: '2. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '3. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '4. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '5. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },
          {
            name: '6. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          }]
        },
        {
          name: 'Telekomunikacije',
          semesters: [
            {
            name: '1. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },
          {
            name: '2. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '3. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '4. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '5. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },
          {
            name: '6. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          }]
        },
         {
          name: 'Automatika i elektronika',
          semesters: [
            {
            name: '1. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },
          {
            name: '2. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '3. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '4. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },{
            name: '5. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          },
          {
            name: '6. semestar',
            courses : [ 'Uvod u programiranje', "IM1", "IF1", "LAG" ]
          }]
        }
      ],
    }
  ];

  expandedStates = {};

  toggle(id): void {
    this.expandedStates[id] = !this.expandedStates[id];
    console.log(this.expandedStates);
  }

  isExpanded(id): boolean {
    return !!this.expandedStates[id];
  }

  collapseAll(): void {
    this.expandedStates = {};
  }
}
