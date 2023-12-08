import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeclaracionComponent } from './componentes/declaracion/declaracion.component';

const routes: Routes = [
  {path:'declaracion', component:DeclaracionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
