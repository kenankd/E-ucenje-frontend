import { Component } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  course = { name: 'Tehnike programiranja' };
  collapseButtonText: string = 'Expand All';
  sections = {
      predavanja: false,
      vjezbe: false,
      kvizovi: false
  };
  predavanjaPDFs = [
      { name: 'Lecture Notes 1.pdf', url: 'path/to/pdf1' },
      { name: 'Lecture Notes 2.pdf', url: 'path/to/pdf2' }
  ];

  toggleSection(section: string) {
      this.sections[section] = !this.sections[section];
  }

  isExpanded(section: string): boolean {
      return this.sections[section];
  }

  toggleAll() {
      this.collapseButtonText = this.collapseButtonText === 'Collapse All' ? 'Expand All' : 'Collapse All';
      for (let key in this.sections) {
          this.sections[key] = !this.sections[key];
      }
  }
}

