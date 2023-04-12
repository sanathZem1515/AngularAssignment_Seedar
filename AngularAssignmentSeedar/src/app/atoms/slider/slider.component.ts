import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @Input() max: number = 100;
  @Input() min: number = 0;
  @Input() disabled: boolean = false;
  @Input() step: number = 0;
  @Input() thumbLabel: string = '';
  @Input() showTicks: string = '';
  @Input() value: number = 0;
}
