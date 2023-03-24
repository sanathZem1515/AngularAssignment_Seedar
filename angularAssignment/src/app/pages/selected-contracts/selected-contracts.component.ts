import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contract } from 'src/app/modal/contract.model';
import { CashkickNameComponent } from 'src/app/organisms/cashkick-name/cashkick-name.component';
import { ContractsService } from 'src/app/services/contracts.service';
import { ELEMENT_DATA } from 'src/app/store/constants';

@Component({
  selector: 'app-selected-contracts',
  templateUrl: './selected-contracts.component.html',
  styleUrls: ['./selected-contracts.component.css'],
})
export class SelectedContractsComponent implements OnInit,OnDestroy {
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private contractsService: ContractsService
  ) {}

  sub: Subscription = new Subscription;

  data: Contract[] = this.contractsService.getSelectedContracts();

  ngOnInit(): void {
    this.sub = this.contractsService.selectedContractsChanged.subscribe((selectedCon) => {
      this.data = selectedCon;
    });
  }

  displayColumns: string[] = [
    'name',
    'type',
    'perPayment',
    'termLength',
    'paymentAmount',
  ];

  headingsColumns: string[] = [
    'Name',
    'Type',
    'Per Payment',
    'Total length',
    'Payment Amount',
  ];

  onClick() {
    this.router.navigate(['cashkickName']);
    this.dialog.open(CashkickNameComponent);
  }

  onBack() {
    this.router.navigate(['newCashKick']);
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
}
