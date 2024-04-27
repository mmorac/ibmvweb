import { Component } from '@angular/core';

@Component({
  selector: 'app-ministerios',
  templateUrl: './ministerios.component.html',
  styleUrls: ['./ministerios.component.css']
})
export class MinisteriosComponent {

  ministerios = {
    "hombres": {
      "descripcion": "Nos reunimos los hombres",
      "foto": "",
      "horario": "Una sábado al mes durante la mañana."
    },
    "mujeres": {
      "descripcion": "Nos reunimos los hombres",
      "foto": "",
      "horario": "Una sábado al mes durante la mañana."
    },
    "ninos": {
      "descripcion": "Nos reunimos los hombres",
      "foto": "",
      "horario": "Una sábado al mes durante la mañana."
    }
  }

}
