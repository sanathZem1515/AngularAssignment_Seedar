import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './shared/components.module';
import { SidebarComponent } from './molecules/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CashkickNameComponent } from './organisms/cashkick-name/cashkick-name.component';
import { CashkickLaunchedComponent } from './organisms/cashkick-launched/cashkick-launched.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
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
