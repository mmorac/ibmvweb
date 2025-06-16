import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  imports: [CommonModule, PopupComponent, RouterModule]
})
export class InicioComponent {

  ngOnInit(): void {
    const popupResetTime = localStorage.getItem('popupResetTime');
    const currentTime = new Date().getTime();
  
    if (popupResetTime && currentTime > parseInt(popupResetTime)) {
      localStorage.removeItem('popupShown');
    }
  
    // Aquí puedes definir cada cuánto tiempo quieres resetear el popup
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    const newResetTime = currentTime + oneDayInMilliseconds;
    localStorage.setItem('popupResetTime', newResetTime.toString());
  }
  

}
