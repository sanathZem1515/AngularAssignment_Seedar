import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideItem } from 'src/app/modal/side-item.modal';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() menus: SideItem[] = [
    new SideItem('Home', 'home', '/home'),
    new SideItem('Cash Acceleration', 'whatshoticon', '/cashAccleration'),
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(path: string) {
    console.log(path);

    this.router.navigate([path]);
  }
}
