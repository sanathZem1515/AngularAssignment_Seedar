import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Contract } from 'src/app/modal/contract.model';
import { ContractsService } from 'src/app/services/contracts.service';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { CashkickNameComponent } from '../../organisms/cashkick-name/cashkick-name.component';

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
    private router: Router,
    public dialog: MatDialog,
    private contractsService: ContractsService
  ) {}

  ngOnInit(): void {
    this.contractsService.selectedContractsChanged.subscribe((selectedCon)=>{
        this.selectedContracts = selectedCon.length;
        this.selectedTotalAmount = this.calculateTotal(selectedCon);
    });
    this.contractsService.contractsChanged.subscribe((con)=>{
      this.totalAmounts = this.calculateTotal(con);
    })
    //   this.contractsService.getSelectedContracts().length;
    // this.totalAmounts = this.calculateTotal(
    //   this.contractsService.getContracts()
    // );
    // this.selectedTotalAmount = this.calculateTotal(
    //   this.contractsService.getSelectedContracts()
    // );
  }

  onClick() {
    // this.router.navigate(['selectedContracts']);
    this.handleButton.emit();
    // this.router.navigate(['cashkickName']);
    // this.dialog.open(CashkickNameComponent);
  }

  private calculateTotal(contracts: Contract[]) {
    let total = 0;
    for (let i = 0; i < contracts.length; i++) {
      total += parseFloat(contracts[i].paymentAmount.substring(1));
    }
    return total;
  }
}
