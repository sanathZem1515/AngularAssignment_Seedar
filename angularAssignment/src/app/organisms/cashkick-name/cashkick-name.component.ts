import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CashKick } from 'src/app/modal/cashkick.modal';
import { ContractsService } from 'src/app/services/contracts.service';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { CashkickLaunchedComponent } from '../cashkick-launched/cashkick-launched.component';

@Component({
  selector: 'app-cashkick-name',
  templateUrl: './cashkick-name.component.html',
  styleUrls: ['./cashkick-name.component.css']
})
export class CashkickNameComponent implements OnInit {
  constructor(public dialog:MatDialog,private router:Router,private dataStorageService : DataStorageService,private contractsService:ContractsService) {}

  @ViewChild('f')
  caskKickForm!: NgForm;

  ngOnInit(): void {

  }

  onCreate() {
    this.router.navigate(['cashkickLaunched']);
    this.dialog.open(CashkickLaunchedComponent);
    let cashkick = new CashKick(this.caskKickForm.value.cashKickName,this.contractsService.getSelectedContracts(),"pending","April 6,2022","0","100");
    this.dataStorageService.storeCashKicks(cashkick);
  }

}
