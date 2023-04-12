import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components.module';
import { NewCashKickPageComponent } from './new-cash-kick-page.component';

const routes: Routes = [
  {
    path: '',
    component: NewCashKickPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule, FormsModule, ComponentsModule],
})
export class NewCashKickPageRoutingModule {}
