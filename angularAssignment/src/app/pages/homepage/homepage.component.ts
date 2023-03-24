import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  displayColumns: string[] = [
    'Due date',
    'Status',
    'Expected amount',
    'Outstanding',
  ];

  headingsColumns: string[] = [
    'dueDate',
    'status',
    'expectedAmount',
    'outstanding',
  ];

  data = []
}
