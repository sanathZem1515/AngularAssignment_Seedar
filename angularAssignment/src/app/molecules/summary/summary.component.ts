import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contract } from 'src/app/modal/contract.model';
import { ContractsService } from 'src/app/services/contracts.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  @Input() sliderAvailable: boolean = true;
  @Input() buttonName: string = 'Review Your Credit';
  @Output() handleButton = new EventEmitter<void>();

  selectedContracts: number = 0;
  totalAmounts: number = 0;
  selectedTotalAmount: number = 0;

  constructor(
    public dialog: MatDialog,
    private contractsService: ContractsService
  ) {}

  ngOnInit(): void {
    this.contractsService.selectedContractsChanged.subscribe((selectedCon) => {
      this.selectedContracts = selectedCon.length;
      this.selectedTotalAmount = this.calculateTotal(selectedCon);
    });

    this.contractsService.contractsChanged.subscribe((con) => {
      this.totalAmounts = this.calculateTotal(con);
    });
  }

  onClick() {
    this.handleButton.emit();
  }

  private calculateTotal(contracts: Contract[]) {
    let total = 0;
    for (let i = 0; i < contracts.length; i++) {
      total += parseFloat(contracts[i].paymentAmount.substring(1));
    }
    return total;
  }
}
