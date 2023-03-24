import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractsService } from 'src/app/services/contracts.service';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() headingColumns: string[] = [];
  @Input() dataSource: any[] = [];
  @Input() checkboxAvailable: boolean = false;

  constructor(
    private dataStorageService: DataStorageService,
    private contractsService: ContractsService,
    private router: Router
  ) {}

  displayedColumns1: string[] = [];

  checked: boolean = false;

  clickedRows = new Set<any>();

  selection = new SelectionModel<any>(true, []);

  ngOnInit(): void {
    if (this.router.url === '/newCashKick') {
      this.dataStorageService.fetchContracts().subscribe();
    } else {
      this.dataStorageService.fetchSelectedContracts().subscribe();
    }

    if (this.checkboxAvailable) {
      this.displayedColumns1 = ['select', ...this.displayedColumns];
    } else {
      this.displayedColumns1 = [...this.displayedColumns];
    }
  }

  onRowClick(row: any) {
    this.selection.toggle(row);
    this.contractsService.setSelectedContracts(this.selection.selected);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.forEach((row) => this.selection.select(row));
    this.contractsService.setSelectedContracts(this.selection.selected);
  }
}
