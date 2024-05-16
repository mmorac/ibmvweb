import { Injectable } from '@angular/core';
import { video } from '../../modelos/videos';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  videos:video[] = [new video("El proposito pricipial del libro de Rut", "https://www.youtube.com/embed/pDFX3G146U4?si=LPkIl79mrSj_c8ZK", "27 de noviembre de 2022"),
                    new video("1 Corintios 10 - el ejemplo de los Judíos", "https://www.youtube.com/embed/OKCFBEPNyvU?si=tCxS23hkwNbkZt0v", "8 de febrero"),
                    new video("Seminario ( introducción )", "https://www.youtube.com/embed/Nj_4Q8cBoxc?si=P0TxTB5jE2BT6Rxq", "5 de febrero")
];
  constructor() { }

  obtenerVideos():video[]{
    return this.videos;
  }
}
