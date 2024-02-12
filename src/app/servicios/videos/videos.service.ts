import { Injectable } from '@angular/core';
import { video } from '../../modelos/videos';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  videos:video[] = [new video("¿Como habló Dios con Jacob puede también Dios hablar conmigo? - Génesis 31:1-21", "https://www.youtube.com/embed/ujL1F4zhUR4?si=kyP9NdRQPF9gSlDe", "11 de febrero"),
                    new video("1 Corintios 10 - el ejemplo de los Judíos", "https://www.youtube.com/embed/OKCFBEPNyvU?si=tCxS23hkwNbkZt0v", "8 de febrero"),
                    new video("Seminario ( introducción )", "https://www.youtube.com/embed/Nj_4Q8cBoxc?si=P0TxTB5jE2BT6Rxq", "5 de febrero")
];
  constructor() { }

  obtenerVideos():video[]{
    return this.videos;
  }
}
