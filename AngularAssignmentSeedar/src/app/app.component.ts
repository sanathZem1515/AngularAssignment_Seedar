import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './services/data-storage.service';
import { dataContracts } from './store/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angularAssignment';

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    // this.dataStorageService.fetchContracts().subscribe();
    // this.dataStorageService.fetchSelectedContracts().subscribe();
  }
}
