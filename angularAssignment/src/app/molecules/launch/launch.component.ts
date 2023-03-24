import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css'],
})
export class LaunchComponent implements OnInit {
  constructor(private router: Router, private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    
  }

  onClick() {
    this.dataStorageService.fetchContracts().subscribe();
    this.router.navigate(['newCashKick']);
  }
}
