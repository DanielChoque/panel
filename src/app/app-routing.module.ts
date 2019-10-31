import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, Component }  from '@angular/core';
import { GuardarComponent } from './guardar/guardar.component';

const routes: Routes = [
  { path: 'guardar', component: GuardarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
