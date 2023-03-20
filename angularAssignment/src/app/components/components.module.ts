import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
})
export class ComponentsModule {}
