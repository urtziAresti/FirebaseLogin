import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { MapComponent } from './Components/map/map.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'dashboard/account', loadChildren: './Components/account/account.module#AccountPageModule' },
  { path: 'change-password', loadChildren: './Pages/change-password/change-password.module#ChangePasswordPageModule' },
  { path: 'dashboard/map', component: MapComponent },
  { path: 'change-language', loadChildren: './Pages/change-language/change-language.module#ChangeLanguagePageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
