import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contract } from 'src/app/modal/contract.model';
import { ContractsService } from 'src/app/services/contracts.service';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-new-cash-kick-page',
  templateUrl: './new-cash-kick-page.component.html',
  styleUrls: ['./new-cash-kick-page.component.css'],
})
export class NewCashKickPageComponent implements OnInit, OnDestroy {
  @Output() clickEmit = new EventEmitter<void>();
  sub: Subscription = new Subscription();

  constructor(
    private router: Router,
    private contractsService: ContractsService,
    private dataStorageService: DataStorageService
  ) {}

  data: Contract[] = [];

  ngOnInit(): void {
    this.dataStorageService.fetchContracts().subscribe();
    this.dataStorageService.fetchSelectedContracts().subscribe();
    this.sub = this.contractsService.contractsChanged.subscribe((contracts) => {
      this.data = [...contracts];
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
    this.dataStorageService
      .storeSelectedContracts(this.contractsService.getSelectedContracts())
      .subscribe((data) => {
        this.router.navigate(['selectedContracts']);
      });
  }

  onBack() {
    this.router.navigate(['home']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
