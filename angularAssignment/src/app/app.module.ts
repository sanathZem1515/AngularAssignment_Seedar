import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './atoms/button/button.component';
import { ComponentsModule } from './components/components.module';
import { MatIcon } from '@angular/material/icon';
import { SidebarComponent } from './molecules/sidebar/sidebar.component';
import { HeaderComponent } from './molecules/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CongratulationsComponent } from './molecules/congratulations/congratulations.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SidebarComponent,
    HeaderComponent,
    HomepageComponent,
    CongratulationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ComponentsModule,
    // MatIcon
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
