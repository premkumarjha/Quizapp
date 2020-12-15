import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

const routes: Routes = [
 
 {path: 'toolbar', component: ToolbarComponent},
  //lazyloading ke liye ham module load kar rahe 
  
  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },

  {path: '', redirectTo: 'toolbar', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
