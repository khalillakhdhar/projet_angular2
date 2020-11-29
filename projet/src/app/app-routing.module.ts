import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CalculeComponent } from './calcule/calcule.component';

const routes: Routes = [
  {
    path : '' , component : AuthentificationComponent
  },
  {
    path:'calcule', component:CalculeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
