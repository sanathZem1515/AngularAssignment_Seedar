import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components.module';
import { CashAcclerationComponent } from './cash-accleration.component';

const routes: Routes = [
  {
    path: '',
    component: CashAcclerationComponent,
  },
];

@NgModule({
  declarations: [CashAcclerationComponent],
  imports: [RouterModule.forChild(routes), ComponentsModule],
})
export class CashAccerationModule {}
