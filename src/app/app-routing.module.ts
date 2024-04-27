import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeclaracionComponent } from './componentes/declaracion/declaracion.component';
import { VisitanosComponent } from './componentes/visitanos/visitanos.component';
import { EnsenanzasComponent } from './componentes/ensenanzas/ensenanzas.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { MinisteriosComponent } from './componentes/ministerios/ministerios.component';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'declaracion', component:DeclaracionComponent},
  {path:'visitanos', component:VisitanosComponent},
  {path:'ensenanzas', component:EnsenanzasComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'ministerio/:ministerio', component:MinisteriosComponent},
  {path:'**', component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
