import { AllbudgetsComponent } from './allbudgets/allbudgets.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'allbudgets',
        component: AllbudgetsComponent
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes), CommonModule,],
  declarations: [
    HomeComponent,
  ],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {}
