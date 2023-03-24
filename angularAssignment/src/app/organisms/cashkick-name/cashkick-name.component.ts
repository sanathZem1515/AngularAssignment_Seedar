import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CashkickLaunchedComponent } from '../cashkick-launched/cashkick-launched.component';

@Component({
  selector: 'app-cashkick-name',
  templateUrl: './cashkick-name.component.html',
  styleUrls: ['./cashkick-name.component.css']
})
export class CashkickNameComponent implements OnInit {
  constructor(public dialog:MatDialog,private router:Router) {}

  ngOnInit(): void {

  }

  onCreate() {
    this.router.navigate(['cashkickLaunched'])
    this.dialog.open(CashkickLaunchedComponent);
  }

  

}
