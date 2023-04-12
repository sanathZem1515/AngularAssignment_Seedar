import { Contract } from './contract.model';

export interface CashKick {
  cashKickName: string;
  contracts: Contract[];
  status: string;
  maturity: string;
  totalRecieved: string;
  totalFinanced: string;
}

export class CashKick {
  constructor(
    public cashKickName: string,
    public contracts: Contract[],
    public status: string,
    public maturity: string,
    public totalRecieved: string,
    public totalFinanced: string
  ) {}
}
