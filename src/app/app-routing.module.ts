import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeclaracionComponent } from './componentes/declaracion/declaracion.component';
import { VisitanosComponent } from './componentes/visitanos/visitanos.component';
import { EnsenanzasComponent } from './componentes/ensenanzas/ensenanzas.component';

const routes: Routes = [
  {path:'declaracion', component:DeclaracionComponent},
  {path:'visitanos', component:VisitanosComponent},
  {path:'ensenanzas', component:EnsenanzasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
