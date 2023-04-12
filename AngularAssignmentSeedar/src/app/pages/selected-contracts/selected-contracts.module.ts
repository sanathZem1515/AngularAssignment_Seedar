import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components.module';
import { SelectedContractsComponent } from './selected-contracts.component';

const routes: Routes = [
  {
    path: '',
    component: SelectedContractsComponent,
  },
];

@NgModule({
  declarations: [SelectedContractsComponent],
  imports: [RouterModule.forChild(routes), ComponentsModule],
})
export class SelectedContractsModule {}
