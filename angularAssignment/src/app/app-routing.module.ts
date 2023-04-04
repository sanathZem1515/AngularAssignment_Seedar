import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedContractsComponent } from './pages/selected-contracts/selected-contracts.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/homepage/homepage.module').then((c) => c.HomePageModule),
  },
  {
    path: 'newCashKick',
    loadChildren: () =>
      import('./pages/new-cash-kick-page/new-cash-kick-page.module').then(
        (c) => c.NewCashKickPageModule
      ),
  },
  {
    path: 'cashAccleration',
    loadChildren: () =>
      import('./pages/cash-accleration/cash-accleration.module').then(
        (m) => m.CashAccerationModule
      ),
  },
  {
    path: 'selectedContracts',
    component: SelectedContractsComponent,
    loadChildren: () =>
      import('./pages/selected-contracts/selected-contracts.module').then(
        (m) => m.SelectedContractsModule
      ),
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
  exports: [RouterModule],
})
export class AppRoutingModule {}
