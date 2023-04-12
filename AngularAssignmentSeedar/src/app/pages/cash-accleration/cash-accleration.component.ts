import { Component } from '@angular/core';

export interface ContractType {
  name: string;
  status: string;
  type: string;
  perPayment: string;
  totalFinanced: string;
  totalAvailable: string;
}

const ELEMENT_DATA: ContractType[] = [
  {
    name: 'Contract 1',
    status: 'Available',
    type: 'Monthly',
    perPayment: '$12,000.25',
    totalFinanced: '-',
    totalAvailable: '$126,722.64',
  },
  {
    name: 'Contract 3',
    status: 'Available',
    type: 'Monthly',
    perPayment: '$6,000.00',
    totalFinanced: '-',
    totalAvailable: '$63,360.00',
  },
  {
    name: 'Contract 4',
    status: 'Available',
    type: 'Monthly',
    perPayment: '$6,000.00',
    totalFinanced: '-',
    totalAvailable: '$63,360.00',
  },
  {
    name: 'Contract 1',
    status: 'Available',
    type: 'Monthly',
    perPayment: '$12,000.25',
    totalFinanced: '-',
    totalAvailable: '$126,722.64',
  },
  {
    name: 'Contract 3',
    status: 'Available',
    type: 'Monthly',
    perPayment: '$6,000.00',
    totalFinanced: '-',
    totalAvailable: '$63,360.00',
  },
  {
    name: 'Contract 4',
    status: 'Available',
    type: 'Monthly',
    perPayment: '$6,000.00',
    totalFinanced: '-',
    totalAvailable: '$63,360.00',
  },
];

@Component({
  selector: 'app-cash-accleration',
  templateUrl: './cash-accleration.component.html',
  styleUrls: ['./cash-accleration.component.css'],
})
export class CashAcclerationComponent {
  displayColumns: string[] = [
    'name',
    'status',
    'type',
    'perPayment',
    'totalFinanced',
    'totalAvailable',
  ];

  headingsColumns: string[] = [
    'Name',
    'Status',
    'Type',
    'Per Payment',
    'Total Financed',
    'Total Available',
  ];

  data = ELEMENT_DATA;
}
