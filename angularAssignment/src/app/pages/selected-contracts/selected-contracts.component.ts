import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contract } from 'src/app/modal/contract.model';
import { CashkickNameComponent } from 'src/app/organisms/cashkick-name/cashkick-name.component';
import { ContractsService } from 'src/app/services/contracts.service';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-selected-contracts',
  templateUrl: './selected-contracts.component.html',
  styleUrls: ['./selected-contracts.component.css'],
})
export class SelectedContractsComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private contractsService: ContractsService,
    private dataStorageService: DataStorageService
  ) {}

  sub: Subscription = new Subscription();

  data: Contract[] = [];

  ngOnInit(): void {
    this.dataStorageService.fetchSelectedContracts().subscribe(data=>{
      console.log(data," inside ");
      this.data = data;
    })
    // this.data=this.contractsService.getSelectedContracts();
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
