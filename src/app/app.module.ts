import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DeclaracionComponent } from './componentes/declaracion/declaracion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    DeclaracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
