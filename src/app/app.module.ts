import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DeclaracionComponent } from './componentes/declaracion/declaracion.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { MinisteriosComponent } from './componentes/ministerios/ministerios.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { DonaComponent } from './componentes/dona/dona.component';
import { VisitanosComponent } from './componentes/visitanos/visitanos.component';
import { HttpClientModule } from '@angular/common/http';
import { EnsenanzasComponent } from './componentes/ensenanzas/ensenanzas.component';
import { PopupComponent } from './componentes/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DeclaracionComponent,
    ContactoComponent,
    MinisteriosComponent,
    AcercaComponent,
    DonaComponent,
    VisitanosComponent,
    EnsenanzasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PopupComponent
],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
