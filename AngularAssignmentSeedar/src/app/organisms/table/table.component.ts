import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contract } from 'src/app/modal/contract.model';
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

  clickedRows = new Set<Contract>();

  selection = new SelectionModel<Contract>(true, []);

  ngOnInit(): void {
      // this.dataStorageService.fetchContracts().subscribe();
      // this.dataStorageService.fetchSelectedContracts().subscribe();

    if (this.checkboxAvailable) {
      this.displayedColumns1 = ['select', ...this.displayedColumns];
    } else {
      this.displayedColumns1 = [...this.displayedColumns];
    }

    console.log(
      'selected contracts',
      this.contractsService.getSelectedContracts()
    );
    console.log('contracts ', this.contractsService.getContracts());
    // console.log(this.clickedRows.has());

    let rows = [];

    for (let i = 0; i < this.dataSource.length; i++) {
      let selCons = this.contractsService.getSelectedContracts();
      for (let j = 0; j < selCons.length; j++) {
        if (this.dataSource[i].name === selCons[j].name) {
          rows.push(this.dataSource[i]);
        }
      }
    }

    this.selection = new SelectionModel<Contract>(true, rows);
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

  getRows(dataSource: Contract[]) {
    // rows = dataSource.filter(())
  }
}
