import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components.module';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
];

@NgModule({
  declarations: [HomepageComponent],
  imports: [RouterModule.forChild(routes), ComponentsModule],
})
export class HomePageModule {}
