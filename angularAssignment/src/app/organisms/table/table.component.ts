import { Component, Input } from '@angular/core';

export interface ContractType {
  name: string;
  type: string;
  perPayment: string;
  termLength: string;
  paymentAmount: string;
}

const ELEMENT_DATA: ContractType[] = [
  {
    name: 'Contract 1',
    type: 'Monthly',
    perPayment: '$12,000.25',
    termLength: '12 months',
    paymentAmount: '$126,722.64',
  },
  {
    name: 'Contract 1',
    type: 'Monthly',
    perPayment: '$12,000.25',
    termLength: '12 months',
    paymentAmount: '$126,722.64',
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() displayedColumns: string[] = [];
  @Input() headingColumns: string[] = [];
  @Input() dataSource = [];
  
  clickedRows = new Set<any>();
}
