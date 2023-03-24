import { Contract } from '../modal/contract.model';

export const ELEMENT_DATA = [
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

const contracts = [
  {
    name: 'Contract 1',
    type: 'Monthly',
    perPayment: '$12,000.25',
    termLength: ' 12 months',
    paymentMethod: '$126,830.00',
  },
  {
    name: 'Contract 2',
    type: 'Monthly',
    perPayment: '$12,000.25',
    termLength: ' 12 months',
    paymentMethod: '$126,830.00',
  },
  {
    name: 'Contract 3',
    type: 'Monthly',
    perPayment: '$12,000.25',
    termLength: ' 12 months',
    paymentMethod: '$126,830.00',
  },
];

export const dataContracts: Contract[] = [];
// contracts.map(
//   (contract) =>
//     new Contract(
//       contract.name,
//       contract.type,
//       contract.perPayment,
//       contract.termLength,
//       contract.paymentMethod
//     )
// );
