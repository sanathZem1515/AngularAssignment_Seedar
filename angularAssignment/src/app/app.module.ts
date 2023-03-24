import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './atoms/button/button.component';
import { ComponentsModule } from './components/components.module';
import { SidebarComponent } from './molecules/sidebar/sidebar.component';
import { HeaderComponent } from './molecules/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CongratulationsComponent } from './molecules/congratulations/congratulations.component';
import { LaunchComponent } from './molecules/launch/launch.component';
import { TableComponent } from './organisms/table/table.component';
import { RouterModule } from '@angular/router';
import { NewCashKickPageComponent } from './pages/new-cash-kick-page/new-cash-kick-page.component';
import { CashAcclerationComponent } from './pages/cash-accleration/cash-accleration.component';
import { SummaryComponent } from './molecules/summary/summary.component';
import { SliderComponent } from './atoms/slider/slider.component';
import { FormsModule } from '@angular/forms';
import { SelectedContractsComponent } from './pages/selected-contracts/selected-contracts.component';
import { CashkickNameComponent } from './organisms/cashkick-name/cashkick-name.component';
import { CashkickLaunchedComponent } from './organisms/cashkick-launched/cashkick-launched.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import * as fromApp from './store/AppStore/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SidebarComponent,
    HeaderComponent,
    HomepageComponent,
    CongratulationsComponent,
    LaunchComponent,
    TableComponent,
    NewCashKickPageComponent,
    CashAcclerationComponent,
    SummaryComponent,
    SliderComponent,
    SelectedContractsComponent,
    CashkickNameComponent,
    CashkickLaunchedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ComponentsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    // StoreModule.forRoot(fromApp.appReducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
