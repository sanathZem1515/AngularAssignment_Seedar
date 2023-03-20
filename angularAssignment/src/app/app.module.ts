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



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SidebarComponent,
    HeaderComponent,
    HomepageComponent,
    CongratulationsComponent,
    LaunchComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
