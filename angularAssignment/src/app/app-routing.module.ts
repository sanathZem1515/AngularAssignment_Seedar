import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashkickNameComponent } from './organisms/cashkick-name/cashkick-name.component';
import { CashAcclerationComponent } from './pages/cash-accleration/cash-accleration.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NewCashKickPageComponent } from './pages/new-cash-kick-page/new-cash-kick-page.component';
import { SelectedContractsComponent } from './pages/selected-contracts/selected-contracts.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'newCashKick',
    component: NewCashKickPageComponent,
  },
  {
    path: 'cashAccleration',
    component: CashAcclerationComponent,
  },
  {
    path: 'selectedContracts',
    component: SelectedContractsComponent,
  },
  {
    path: 'cashkickName',
    component: SelectedContractsComponent,
  },
  {
    path: 'cashkickLaunched',
    component: SelectedContractsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
