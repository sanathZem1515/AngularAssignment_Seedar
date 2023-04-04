import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() name: string = '';
  @Input() iconName: string = '';
  @Input() style1: string = '';
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() class1 : string ='';

  @Output() clickEmitter = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.clickEmitter.emit();
  }
}
