import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps'



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    DeclaracionComponent,
    ContactoComponent,
    MinisteriosComponent,
    AcercaComponent,
    DonaComponent,
    VisitanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
