import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-ministerios',
  templateUrl: './ministerios.component.html',
  styleUrls: ['./ministerios.component.css']
})
export class MinisteriosComponent {
  parametro:string = "";
  ministerios:{ [key: string]: any }= {
    "hombres": {
      "descripcion": "Una reunión para que, como hombres, busquemos juntos parecernos cada día más a nuestro Señor, Jesucristo.",
      "foto": "../../../assets/img/Hombres.jpeg",
      "horario": "Nos reunimos un sábado al mes. Contáctanos para más información."
    },
    "mujeres": {
      "descripcion": "Una reunión para que las mujeres de nuestra iglesia puedan compartir alrededor de la Palabra de Dios.",
      "foto": "../../../assets/img/Mujeres.jpeg",
      "horario": "Nos reunimos una vez al mes. Para más información, contáctanos."
    },
    "ninos": {
      "descripcion": "Invertimos en la siguiente generación que llevará el Evangelio al mundo.",
      "foto": "../../../assets/img/ninos.jpg",
      "horario": "Domingos en la mañana durante nuestra reunión dominical."
    },
    "jovenes": {
      "descripcion": "Una reunión de, por y para jóvenes. Aprendemos cómo vivir como Jesús lo haría en este tiempo.",
      "foto": "../../../assets/img/Jovenes.jpeg",
      "horario": "Todos los viernes a las 19:30."
    }

  }

  constructor(private route:ActivatedRoute, private router:Router){
  }

  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.parametro = params['ministerio']
    })

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
    });

  }
}
