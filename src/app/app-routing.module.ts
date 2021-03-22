import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: 'full' }, 
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent,
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  canActivate:[AuthenticationGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
