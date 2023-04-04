import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contract } from '../modal/contract.model';

@Injectable({ providedIn: 'root' })
export class ContractsService {
  contractsChanged = new Subject<Contract[]>();
  selectedContractsChanged = new Subject<Contract[]>();

  private contracts: Contract[] = [];
  private selectedContracts: Contract[] = [];

  getContracts() {
    return this.contracts.slice();
  }

  setContracts(newContracts: Contract[]) {
    this.contracts = newContracts ?? [];
    this.contractsChanged.next(this.contracts.slice());
  }

  getSelectedContracts() {
    return this.selectedContracts.slice();
  }

  setSelectedContracts(newContracts: Contract[]) {
    this.selectedContracts = newContracts ?? [];
    this.selectedContractsChanged.next(this.selectedContracts.slice());
  }
}
