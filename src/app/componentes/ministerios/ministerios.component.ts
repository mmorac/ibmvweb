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
      "descripcion": "Nos reunimos los hombres",
      "foto": "../../../assets/img/Hombres.jpeg",
      "horario": "Una sábado al mes durante la mañana."
    },
    "mujeres": {
      "descripcion": "Nos reunimos las mujeres",
      "foto": "FOTOMUJERES",
      "horario": "Una sábado al mes durante la mañana."
    },
    "ninos": {
      "descripcion": "Nos reunimos los niños",
      "foto": "FOTONIÑOS",
      "horario": "Una sábado al mes durante la mañana."
    },
    "jovenes": {
      "descripcion": "Nos reunimos los jóvenes",
      "foto": "FOTOJÓVENES",
      "horario": "Una sábado al mes durante la mañana."
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
