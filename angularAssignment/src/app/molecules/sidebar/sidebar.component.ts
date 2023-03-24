import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() menus: string[] = ['Home', 'Cash Acceleration'];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.router.navigate(['home']);
  }
}
