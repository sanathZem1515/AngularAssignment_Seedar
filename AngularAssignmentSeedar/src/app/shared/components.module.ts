import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from '../atoms/button/button.component';
import { SliderComponent } from '../atoms/slider/slider.component';
import { HeaderComponent } from '../molecules/header/header.component';
import { CongratulationsComponent } from '../molecules/congratulations/congratulations.component';
import { LaunchComponent } from '../molecules/launch/launch.component';
import { TableComponent } from '../organisms/table/table.component';
import { SummaryComponent } from '../molecules/summary/summary.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonComponent,
    SliderComponent,
    HeaderComponent,
    CongratulationsComponent,
    LaunchComponent,
    TableComponent,
    SummaryComponent,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatCheckboxModule,
    MatSliderModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatCheckboxModule,
    MatSliderModule,
    MatInputModule,
    MatDialogModule,
    ButtonComponent,
    SliderComponent,
    HeaderComponent,
    CongratulationsComponent,
    LaunchComponent,
    TableComponent,
    SummaryComponent,
  ],
})
export class ComponentsModule {}
