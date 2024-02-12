import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideosService } from '../../servicios/videos/videos.service';
import { video } from '../../modelos/videos';

@Component({
  selector: 'app-ensenanzas',
  templateUrl: './ensenanzas.component.html',
  styleUrl: './ensenanzas.component.css'
})
export class EnsenanzasComponent {

  ensenanzas:video[] = [];
  constructor(private videos:VideosService, private domSanitizer:DomSanitizer){

  }

  ngOnInit(){
    this.ensenanzas = this.videos.obtenerVideos();
    console.log(this.ensenanzas);
  }

  asegurarURL(url:string):SafeResourceUrl{
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
